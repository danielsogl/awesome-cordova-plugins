import { factory, SourceFile, SyntaxKind, TransformationContext } from 'typescript';

import { getMethodsForDecorator } from '../helpers';

function transformImports(file: SourceFile, ctx: TransformationContext, ngcBuild?: boolean) {
  // remove angular imports
  if (!ngcBuild) {
    // @ts-expect-error
    file.statements = (file.statements as any).filter(
      (s: any) => !(s.kind === SyntaxKind.ImportDeclaration && s.moduleSpecifier.text === '@angular/core')
    );
  }

  // find the @awesome-cordova-plugins/core import statement
  const importStatement = (file.statements as any).find((s: any) => {
    return s.kind === SyntaxKind.ImportDeclaration && s.moduleSpecifier.text === '@awesome-cordova-plugins/core';
  });

  // we're only interested in files containing @awesome-cordova-plugins/core import statement
  if (!importStatement) return file;

  const decorators: string[] = [];

  const decoratorRegex: RegExp = /@([a-zA-Z]+)\(/g;

  const ignored: string[] = ['Plugin', 'Component', 'Injectable'];

  const keep: string[] = ['getPromise', 'checkAvailability'];

  let m;

  while ((m = decoratorRegex.exec(file.text)) !== null) {
    if (m.index === decoratorRegex.lastIndex) {
      decoratorRegex.lastIndex++;
    }
    if (m && m[1] && decorators.indexOf(m[1]) === -1 && ignored.indexOf(m[1]) === -1) decorators.push(m[1]);
  }

  if (decorators.length) {
    let methods = [];

    decorators.forEach((d) => (methods = getMethodsForDecorator(d).concat(methods)));

    const methodElements = methods.map((m) => factory.createIdentifier(m));
    const methodNames = methodElements.map((el) => el.escapedText);

    importStatement.importClause.namedBindings.elements = [
      factory.createIdentifier('AwesomeCordovaNativePlugin'),
      ...methodElements,
      ...importStatement.importClause.namedBindings.elements.filter(
        (el) => keep.indexOf(el.name.text) !== -1 && methodNames.indexOf(el.name.text) === -1
      ),
    ];

    if (ngcBuild) {
      importStatement.importClause.namedBindings.elements = importStatement.importClause.namedBindings.elements.map(
        (binding) => {
          if (binding.escapedText) {
            binding.name = {
              text: binding.escapedText,
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
  return (ctx: TransformationContext) => {
    return (tsSourceFile) => {
      return transformImports(tsSourceFile, ctx, ngcBuild);
    };
  };
}
