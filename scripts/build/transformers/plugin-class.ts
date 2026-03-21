import {
  canHaveDecorators,
  canHaveModifiers,
  ClassDeclaration,
  Decorator,
  factory,
  getDecorators as tsGetDecorators,
  getModifiers as tsGetModifiers,
  Identifier,
  SourceFile,
  SyntaxKind,
  TransformationContext,
  TransformerFactory,
  visitEachChild,
} from 'typescript';

import { Logger } from '../../logger';
import { convertValueToLiteral, getDecorator, getDecoratorArgs, getDecoratorName } from '../helpers';
import { transformMembers } from './members';

function transformClass(cls: ClassDeclaration, ngcBuild?: boolean) {
  Logger.profile('transformClass: ' + cls.name!.text);

  const pluginStatics = [];
  const dec = getDecorator(cls);

  if (dec) {
    const pluginDecoratorArgs = getDecoratorArgs(dec);

    for (const prop in pluginDecoratorArgs) {
      pluginStatics.push(
        factory.createPropertyDeclaration(
          [factory.createToken(SyntaxKind.StaticKeyword)],
          factory.createIdentifier(prop),
          undefined,
          undefined,
          convertValueToLiteral(pluginDecoratorArgs[prop])
        )
      );
    }
  }

  const clsDecorators = canHaveDecorators(cls) ? tsGetDecorators(cls) : undefined;
  const keepDecorators =
    ngcBuild && clsDecorators && clsDecorators.length
      ? clsDecorators.filter((d: Decorator) => getDecoratorName(d) === 'Injectable')
      : [];

  const result = factory.createClassDeclaration(
    [...keepDecorators, factory.createToken(SyntaxKind.ExportKeyword)],
    cls.name,
    cls.typeParameters,
    cls.heritageClauses,
    [...transformMembers(cls), ...pluginStatics]
  );

  Logger.profile('transformClass: ' + (result.name as Identifier).text);
  return result;
}

function transformClasses(file: SourceFile, ctx: TransformationContext, ngcBuild?: boolean) {
  Logger.silly('Transforming file: ' + file.fileName);
  return visitEachChild(
    file,
    (node) => {
      if (
        node.kind !== SyntaxKind.ClassDeclaration ||
        (canHaveModifiers(node) ? tsGetModifiers(node) : undefined)?.find((v) => v.kind === SyntaxKind.DeclareKeyword)
      ) {
        return node;
      }
      return transformClass(node as ClassDeclaration, ngcBuild);
    },
    ctx
  );
}

export function pluginClassTransformer(ngcBuild?: boolean): TransformerFactory<SourceFile> {
  return (ctx: TransformationContext) => {
    return (tsSourceFile: SourceFile) => {
      if (tsSourceFile.fileName.indexOf('src/@awesome-cordova-plugins/plugins') > -1) {
        return transformClasses(tsSourceFile, ctx, ngcBuild);
      }
      return tsSourceFile;
    };
  };
}
