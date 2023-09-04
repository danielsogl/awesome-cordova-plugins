import { clone } from 'lodash';
import {
  CompilerHost,
  CompilerOptions,
  createCompilerHost,
  createProgram,
  ModuleKind,
  ModuleResolutionKind,
  ScriptTarget,
} from 'typescript';

import { COMPILER_OPTIONS, PLUGIN_PATHS, TS_CONFIG } from './helpers';
import { emitInjectableClasses, extractInjectables } from './transformers/extract-injectables';
import { importsTransformer } from './transformers/imports';
import { pluginClassTransformer } from './transformers/plugin-class';

let host: CompilerHost;

export function getCompilerHost() {
  if (!host) host = createCompilerHost(TS_CONFIG);
  return host;
}

export function getProgram(declaration = false, pluginPaths: string[] = PLUGIN_PATHS) {
  const compilerOptions: CompilerOptions = clone(COMPILER_OPTIONS);
  compilerOptions.declaration = declaration;
  compilerOptions.moduleResolution = ModuleResolutionKind.NodeJs;
  compilerOptions.target = ScriptTarget.ES5;
  compilerOptions.module = ModuleKind.ES2015;
  compilerOptions.inlineSourceMap = true;
  compilerOptions.inlineSources = true;
  compilerOptions.lib = ['lib.dom.d.ts', 'lib.es5.d.ts', 'lib.es2015.d.ts', 'lib.es2016.d.ts', 'lib.es2017.d.ts'];

  return createProgram(pluginPaths, compilerOptions, getCompilerHost());
}

export function generateDeclarations(sourceFiles?: string[]) {
  return getProgram(true, sourceFiles).emit(undefined, getCompilerHost().writeFile, undefined, true);
}

export function transpile() {
  const emitResult = getProgram().emit(undefined, getCompilerHost().writeFile, undefined, false, {
    before: [extractInjectables(), importsTransformer(), pluginClassTransformer()],
  });

  emitInjectableClasses();

  return emitResult;
}
