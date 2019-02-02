import * as ts from 'typescript';
import { getMethodsForDecorator } from '../helpers';

function transformImports(file: ts.SourceFile, ctx: ts.TransformationContext, ngcBuild?: boolean) {
  // remove angular imports
  if (!ngcBuild) {
    file.statements = (file.statements as any).filter((s: any) => !(s.kind === ts.SyntaxKind.ImportDeclaration && s.moduleSpecifier.text === '@angular/core'));
  }

  // find the @ionic-native/core import statement
  const importStatement = (file.statements as any).find((s: any) => {
    return s.kind === ts.SyntaxKind.ImportDeclaration && s.moduleSpecifier.text === '@ionic-native/core';
  });

  // we're only interested in files containing @ionic-native/core import statement
  if (!importStatement) return file;

  const decorators: string[] = [];

  const decoratorRegex: RegExp = /@([a-zA-Z]+)\(/g;

  const ignored: string [] = ['Plugin', 'Component', 'Injectable'];

  const keep: string [] = ['getPromise', 'checkAvailability'];

  let m;

  while ((m = decoratorRegex.exec(file.text)) !== null) {
    if (m.index === decoratorRegex.lastIndex) {
      decoratorRegex.lastIndex++;
    }
    if (m && m[1] && decorators.indexOf(m[1]) === -1 && ignored.indexOf(m[1]) === -1) decorators.push(m[1]);
  }

  if (decorators.length) {
    let methods = [];

    decorators.forEach(d => methods = getMethodsForDecorator(d).concat(methods));

    const methodElements = methods.map(m => ts.createIdentifier(m));
    const methodNames = methodElements.map((el) => el.escapedText);

    importStatement.importClause.namedBindings.elements = [
      ts.createIdentifier('IonicNativePlugin'),
      ...methodElements,
      ...importStatement.importClause.namedBindings.elements.filter(
        el => keep.indexOf(el.name.text) !== -1 && methodNames.indexOf(el.name.text) === -1
      )
    ];

    if (ngcBuild) {
      importStatement.importClause.namedBindings.elements = importStatement.importClause.namedBindings.elements.map(
        binding => {
          if (binding.escapedText) {
            binding.name = {
              text: binding.escapedText
            };
          }
          return binding;
        }
      );
    }
  }

  return file;
}

export function importsTransformer(ngcBuild?: boolean) {
  return (ctx: ts.TransformationContext) => {
    return tsSourceFile => {
      return transformImports(tsSourceFile, ctx, ngcBuild);
    };
  };
}
