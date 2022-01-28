import { unlinkSync, writeJSONSync } from 'fs-extra';
import { resolve } from 'path';
import { ClassDeclaration, SyntaxKind, TransformationContext, visitEachChild } from 'typescript';

import { hasDecorator, ROOT } from '../helpers';

export interface InjectableClassEntry {
  file: string;
  className: string;
  dirName: string;
}

const injectableClasses: InjectableClassEntry[] = [];
export const EMIT_PATH = resolve(ROOT, 'injectable-classes.json');

/**
 * This transformer extracts all the injectable classes
 * so we can use all the names later on when we compile
 * an es5 bundle.
 *
 * Every injectable class will end up in the
 * window['IonicNative'] object.
 */
export function extractInjectables() {
  return (ctx: TransformationContext) => {
    return (tsSourceFile) => {
      if (tsSourceFile.fileName.indexOf('src/@awesome-cordova-plugins/plugins') > -1) {
        visitEachChild(
          tsSourceFile,
          (node) => {
            if (node.kind !== SyntaxKind.ClassDeclaration) {
              return node;
            }

            const isInjectable: boolean = hasDecorator('Injectable', node);
            if (isInjectable) {
              injectableClasses.push({
                file: tsSourceFile.path,
                className: (node as ClassDeclaration).name.text,
                dirName: tsSourceFile.path.split(/[\\\/]+/).reverse()[1],
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
  writeJSONSync(EMIT_PATH, injectableClasses);
}

export function cleanEmittedData() {
  unlinkSync(EMIT_PATH);
}
