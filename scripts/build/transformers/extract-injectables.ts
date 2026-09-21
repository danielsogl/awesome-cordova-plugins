import { unlinkSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
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
 * Records every @Injectable class it walks past, keyed by the directory it came from, and writes
 * the list to EMIT_PATH. build-esm.ts reads that file back and hands it to rewriteInjectableExports,
 * which turns `export class Foo` in the emitted plain (non-ngx) entry point into a `FooOriginal`
 * class plus an eagerly instantiated `export const Foo`, so the plain entry point can be used
 * without Angular DI.
 *
 * There is no es5 bundle and no window['IonicNative'] object; both are long gone.
 */
export function extractInjectables() {
  return (ctx: TransformationContext) => {
    return (tsSourceFile: any) => {
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
                className: (node as ClassDeclaration).name!.text,
                dirName: tsSourceFile.path.split(/[\\/]+/).reverse()[1],
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
  writeFileSync(EMIT_PATH, JSON.stringify(injectableClasses, null, 2));
}

export function cleanEmittedData() {
  unlinkSync(EMIT_PATH);
}
