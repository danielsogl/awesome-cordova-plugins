import { factory, Identifier, ImportSpecifier, SourceFile, SyntaxKind, TransformationContext } from 'typescript';

import { getMethodsForDecorator } from '../helpers';

function transformImports(file: SourceFile, _ctx: TransformationContext, ngcBuild?: boolean) {
  // remove angular imports
  if (!ngcBuild) {
    // @ts-expect-error — mutating readonly statements for transformer pipeline
    file.statements = (
      file.statements as unknown as Array<{ kind: number; moduleSpecifier?: { text: string } }>
    ).filter((s) => !(s.kind === SyntaxKind.ImportDeclaration && s.moduleSpecifier?.text === '@angular/core'));
  }

  // find the @awesome-cordova-plugins/core import statement
  const importStatement = (file.statements as unknown as Array<Record<string, unknown>>).find((s) => {
    return (
      (s as { kind: number }).kind === SyntaxKind.ImportDeclaration &&
      (s as { moduleSpecifier: { text: string } }).moduleSpecifier.text === '@awesome-cordova-plugins/core'
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as Record<string, any> | undefined;

  // we're only interested in files containing @awesome-cordova-plugins/core import statement
  if (!importStatement) return file;

  const decorators: string[] = [];

  const decoratorRegex: RegExp = /@([a-zA-Z]+)\(/g;

  const ignored: string[] = ['Plugin', 'Component', 'Injectable'];

  const keep: string[] = ['getPromise', 'checkAvailability'];

  let m: RegExpExecArray | null;

  while ((m = decoratorRegex.exec(file.text)) !== null) {
    if (m.index === decoratorRegex.lastIndex) {
      decoratorRegex.lastIndex++;
    }
    if (m && m[1] && decorators.indexOf(m[1]) === -1 && ignored.indexOf(m[1]) === -1) decorators.push(m[1]);
  }

  if (decorators.length) {
    let methods: string[] = [];

    decorators.forEach((d) => (methods = getMethodsForDecorator(d).concat(methods)));

    const methodElements = methods.map((name: string) => factory.createIdentifier(name));
    const methodNames = methodElements.map((el: Identifier) => String(el.escapedText));

    importStatement.importClause.namedBindings.elements = [
      factory.createIdentifier('AwesomeCordovaNativePlugin'),
      ...methodElements,
      ...importStatement.importClause.namedBindings.elements.filter(
        (el: ImportSpecifier) => keep.indexOf(el.name.text) !== -1 && methodNames.indexOf(el.name.text) === -1
      ),
    ];

    if (ngcBuild) {
      importStatement.importClause.namedBindings.elements = importStatement.importClause.namedBindings.elements.map(
        (binding: Identifier & { name?: { text: string } }) => {
          if (binding.escapedText) {
            binding.name = {
              text: binding.escapedText as string,
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
    return (tsSourceFile: SourceFile) => {
      return transformImports(tsSourceFile, ctx, ngcBuild);
    };
  };
}
