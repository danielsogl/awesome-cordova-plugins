import {
  Decorator,
  factory,
  SourceFile,
  SyntaxKind,
  TransformationContext,
  TransformerFactory,
  visitEachChild,
} from 'typescript';

import { Logger } from '../../logger';
import { convertValueToLiteral, getDecorator, getDecoratorArgs, getDecoratorName } from '../helpers';
import { transformMembers } from './members';

function transformClass(cls: any, ngcBuild?: boolean) {
  Logger.profile('transformClass: ' + cls.name.text);

  const pluginStatics = [];
  const dec: Decorator = getDecorator(cls);

  if (dec) {
    const pluginDecoratorArgs = getDecoratorArgs(dec);

    // add plugin decorator args as static properties of the plugin's class
    for (const prop in pluginDecoratorArgs) {
      pluginStatics.push(
        factory.createPropertyDeclaration(
          undefined,
          [factory.createToken(SyntaxKind.StaticKeyword)],
          factory.createIdentifier(prop),
          undefined,
          undefined,
          convertValueToLiteral(pluginDecoratorArgs[prop])
        )
      );
    }
  }

  cls = factory.createClassDeclaration(
    ngcBuild && cls.decorators && cls.decorators.length
      ? cls.decorators.filter((d) => getDecoratorName(d) === 'Injectable')
      : undefined, // remove Plugin and Injectable decorators
    [factory.createToken(SyntaxKind.ExportKeyword)],
    cls.name,
    cls.typeParameters,
    cls.heritageClauses,
    [...transformMembers(cls), ...pluginStatics]
  );

  Logger.profile('transformClass: ' + cls.name.text);
  return cls;
}

function transformClasses(file: SourceFile, ctx: TransformationContext, ngcBuild?: boolean) {
  Logger.silly('Transforming file: ' + file.fileName);
  return visitEachChild(
    file,
    (node) => {
      if (
        node.kind !== SyntaxKind.ClassDeclaration ||
        (node.modifiers && node.modifiers.find((v) => v.kind === SyntaxKind.DeclareKeyword))
      ) {
        return node;
      }
      return transformClass(node, ngcBuild);
    },
    ctx
  );
}

export function pluginClassTransformer(ngcBuild?: boolean): TransformerFactory<SourceFile> {
  return (ctx: TransformationContext) => {
    return (tsSourceFile) => {
      if (tsSourceFile.fileName.indexOf('src/@awesome-cordova-plugins/plugins') > -1) {
        return transformClasses(tsSourceFile, ctx, ngcBuild);
      }
      return tsSourceFile;
    };
  };
}
