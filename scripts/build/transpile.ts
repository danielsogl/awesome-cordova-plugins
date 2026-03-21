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
  const compilerOptions: CompilerOptions = structuredClone(COMPILER_OPTIONS);
  compilerOptions.declaration = declaration;
  compilerOptions.moduleResolution = ModuleResolutionKind.Node16;
  compilerOptions.target = ScriptTarget.ES2022;
  compilerOptions.module = ModuleKind.ES2022;
  compilerOptions.inlineSourceMap = true;
  compilerOptions.inlineSources = true;
  compilerOptions.lib = ['lib.dom.d.ts', 'lib.es2022.d.ts'];

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
