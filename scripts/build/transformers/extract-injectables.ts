import * as fs from 'fs-extra';
import * as path from 'path';
import * as ts from 'typescript';

import { hasDecorator, ROOT } from '../helpers';

export interface InjectableClassEntry {
  file: string;
  className: string;
  dirName: string;
}

const injectableClasses: InjectableClassEntry[] = [];
export const EMIT_PATH = path.resolve(ROOT, 'injectable-classes.json');

/**
 * This transformer extracts all the injectable classes
 * so we can use all the names later on when we compile
 * an es5 bundle.
 *
 * Every injectable class will end up in the
 * window['IonicNative'] object.
 */
export function extractInjectables() {
  return (ctx: ts.TransformationContext) => {
    return tsSourceFile => {
      if (tsSourceFile.fileName.indexOf('src/@ionic-native/plugins') > -1) {
        ts.visitEachChild(
          tsSourceFile,
          node => {
            if (node.kind !== ts.SyntaxKind.ClassDeclaration) {
              return node;
            }

            const isInjectable: boolean = hasDecorator('Injectable', node);
            if (isInjectable) {
              injectableClasses.push({
                file: tsSourceFile.path,
                className: (node as ts.ClassDeclaration).name.text,
                dirName: tsSourceFile.path.split(/[\\\/]+/).reverse()[1]
              });
            }
          },
          ctx
        );
      }

      return tsSourceFile;
    };
  };
}

export function emitInjectableClasses() {
  fs.writeJSONSync(EMIT_PATH, injectableClasses);
}

export function cleanEmittedData() {
  fs.unlinkSync(EMIT_PATH);
}
