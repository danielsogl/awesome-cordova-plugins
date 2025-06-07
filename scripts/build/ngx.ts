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
  options.target = ScriptTarget.ES2020;
  options.lib = ['dom', 'es2020'];
  options.inlineSourceMap = true;
  options.importHelpers = true;
  options.inlineSources = true;
  options.compilationMode = 'partial';

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
