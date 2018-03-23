import * as ts from 'typescript';
import { pluginClassTransformer } from './transformers/plugin-class';
import { importsTransformer } from './transformers/imports';
import { clone } from 'lodash';
import { emitInjectableClasses, extractInjectables } from './transformers/extract-injectables';
import { COMPILER_OPTIONS, PLUGIN_PATHS, TS_CONFIG } from './helpers';

let host: ts.CompilerHost;

export function getCompilerHost() {
  if (!host) host = ts.createCompilerHost(TS_CONFIG);
  return host;
}

export function getProgram(declaration = false, pluginPaths: string[] = PLUGIN_PATHS) {
    const compilerOptions: ts.CompilerOptions = clone(COMPILER_OPTIONS);
    compilerOptions.declaration = declaration;
    compilerOptions.moduleResolution = ts.ModuleResolutionKind.NodeJs;
    compilerOptions.target = ts.ScriptTarget.ES5;
    compilerOptions.module = ts.ModuleKind.ES2015;
    compilerOptions.inlineSourceMap = true;
    compilerOptions.inlineSources = true;
    compilerOptions.lib = [
      'lib.dom.d.ts',
      'lib.es5.d.ts',
      'lib.es2015.d.ts',
      'lib.es2016.d.ts',
      'lib.es2017.d.ts'
    ];

    return ts.createProgram(pluginPaths, compilerOptions, getCompilerHost());
}

export function generateDeclarations(sourceFiles?: string[]) {
  return getProgram(true, sourceFiles).emit(undefined, getCompilerHost().writeFile, undefined, true);
}

export function transpile() {
  const emitResult = getProgram().emit(undefined, getCompilerHost().writeFile, undefined, false, {
    before: [
      extractInjectables(),
      importsTransformer(),
      pluginClassTransformer(),
    ]
  });

  emitInjectableClasses();

  return emitResult;
}

