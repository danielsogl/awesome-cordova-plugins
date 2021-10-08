import { CompilerHost, CompilerOptions, createCompilerHost, createProgram, EmitFlags } from '@angular/compiler-cli';
import { copyFileSync, mkdirpSync, readJSONSync, writeJSONSync } from 'fs-extra';
import { clone } from 'lodash';
import { dirname, join, resolve } from 'path';
import { sync } from 'rimraf';
import { rollup } from 'rollup';
import { ModuleKind, ModuleResolutionKind, ScriptTarget } from 'typescript';

import { COMPILER_OPTIONS, PLUGIN_PATHS, ROOT } from './helpers';
import { importsTransformer } from './transformers/imports';
import { pluginClassTransformer } from './transformers/plugin-class';
import { generateDeclarations } from './transpile';

export function getProgram(rootNames: string[] = createSourceFiles()) {
  const options: CompilerOptions = clone(COMPILER_OPTIONS);
  options.basePath = ROOT;
  options.moduleResolution = ModuleResolutionKind.NodeJs;
  options.module = ModuleKind.ES2015;
  options.target = ScriptTarget.ES5;
  options.lib = ['dom', 'es2017'];
  options.inlineSourceMap = true;
  options.importHelpers = true;
  options.inlineSources = true;
  options.enableIvy = false;

  delete options.baseUrl;

  const host: CompilerHost = createCompilerHost({ options });
  return createProgram({
    rootNames,
    options,
    host,
  });
}

// hacky way to export metadata only for core package
export function transpileNgxCore() {
  getProgram([resolve(ROOT, 'src/@awesome-cordova-plugins/core/index.ts')]).emit({
    emitFlags: EmitFlags.Metadata,
    emitCallback: ({ program, writeFile, customTransformers, cancellationToken, targetSourceFile }) => {
      return program.emit(targetSourceFile, writeFile, cancellationToken, true, customTransformers);
    },
  });
}

export function transpileNgx() {
  getProgram().emit({
    emitFlags: EmitFlags.Metadata,
    customTransformers: {
      beforeTs: [importsTransformer(true), pluginClassTransformer(true)],
    },
  });
}

export function generateDeclarationFiles() {
  generateDeclarations(PLUGIN_PATHS.map((p) => p.replace('index.ts', 'ngx/index.ts')));
}

export function generateLegacyBundles() {
  [
    resolve(ROOT, 'dist/@awesome-cordova-plugins/core/index.js'),
    ...PLUGIN_PATHS.map((p) => p.replace(join(ROOT, 'src'), join(ROOT, 'dist')).replace('index.ts', 'ngx/index.js')),
  ].forEach((p) =>
    rollup({
      input: p,
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      },
      external: ['@angular/core', '@awesome-cordova-plugins/core', 'rxjs', 'tslib'],
    }).then((bundle) =>
      bundle.write({
        file: join(dirname(p), 'bundle.js'),
        format: 'cjs',
      })
    )
  );
}

// remove reference to @awesome-cordova-plugins/core decorators
export function modifyMetadata() {
  PLUGIN_PATHS.map((p) =>
    p.replace(join(ROOT, 'src'), join(ROOT, 'dist')).replace('index.ts', 'ngx/index.metadata.json')
  ).forEach((p) => {
    const content = readJSONSync(p);
    let _prop: { members: { [x: string]: any[] } };
    for (const prop in content[0].metadata) {
      _prop = content[0].metadata[prop];
      removeIonicNativeDecorators(_prop);

      if (_prop.members) {
        for (const memberProp in _prop.members) {
          removeIonicNativeDecorators(_prop.members[memberProp][0]);
        }
      }
    }

    writeJSONSync(p, content);
  });
}

function removeIonicNativeDecorators(node: any) {
  if (node.decorators && node.decorators.length) {
    node.decorators = node.decorators.filter(
      (d: { expression: { module: string } }) => d.expression.module !== '@awesome-cordova-plugins/core'
    );
  }

  if (node.decorators && !node.decorators.length) delete node.decorators;
}

function createSourceFiles(): string[] {
  return PLUGIN_PATHS.map((indexPath: string) => {
    const ngxPath = resolve(indexPath.replace('index.ts', ''), 'ngx'),
      newPath = resolve(ngxPath, 'index.ts');

    // delete directory
    sync(ngxPath);
    mkdirpSync(ngxPath);
    copyFileSync(indexPath, newPath);

    return newPath;
  });
}

export function cleanupNgx() {
  PLUGIN_PATHS.forEach((indexPath: string) => sync(indexPath.replace('index.ts', 'ngx')));
}
