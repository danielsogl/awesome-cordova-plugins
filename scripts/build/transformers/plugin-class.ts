import * as ts from 'typescript';

import { Logger } from '../../logger';
import {
  convertValueToLiteral,
  getDecorator,
  getDecoratorArgs,
  getDecoratorName
} from '../helpers';
import { transformMembers } from './members';

function transformClass(cls: any, ngcBuild?: boolean) {
  Logger.profile('transformClass: ' + cls.name.text);

  const pluginStatics = [];
  const dec: any = getDecorator(cls);

  if (dec) {
    const pluginDecoratorArgs = getDecoratorArgs(dec);

    // add plugin decorator args as static properties of the plugin's class
    for (const prop in pluginDecoratorArgs) {
      pluginStatics.push(
        ts.createProperty(
          undefined,
          [ts.createToken(ts.SyntaxKind.StaticKeyword)],
          ts.createIdentifier(prop),
          undefined,
          undefined,
          convertValueToLiteral(pluginDecoratorArgs[prop])
        )
      );
    }
  }

  cls = ts.createClassDeclaration(
    ngcBuild && cls.decorators && cls.decorators.length
      ? cls.decorators.filter(d => getDecoratorName(d) === 'Injectable')
      : undefined, // remove Plugin and Injectable decorators
    [ts.createToken(ts.SyntaxKind.ExportKeyword)],
    cls.name,
    cls.typeParameters,
    cls.heritageClauses,
    [...transformMembers(cls), ...pluginStatics]
  );

  Logger.profile('transformClass: ' + cls.name.text);
  return cls;
}

function transformClasses(
  file: ts.SourceFile,
  ctx: ts.TransformationContext,
  ngcBuild?: boolean
) {
  Logger.silly('Transforming file: ' + file.fileName);
  return ts.visitEachChild(
    file,
    node => {
      if (node.kind !== ts.SyntaxKind.ClassDeclaration
          || (node.modifiers && node.modifiers.find(v => v.kind === ts.SyntaxKind.DeclareKeyword))) {
        return node;
      }
      return transformClass(node, ngcBuild);
    },
    ctx
  );
}

export function pluginClassTransformer(
  ngcBuild?: boolean
): ts.TransformerFactory<ts.SourceFile> {
  return (ctx: ts.TransformationContext) => {
    return tsSourceFile => {
      if (tsSourceFile.fileName.indexOf('src/@ionic-native/plugins') > -1)
        return transformClasses(tsSourceFile, ctx, ngcBuild);
      return tsSourceFile;
    };
  };
}
