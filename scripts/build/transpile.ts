import {
  CompilerHost,
  CompilerOptions,
  createCompilerHost,
  createProgram,
  Diagnostic,
  formatDiagnosticsWithColorAndContext,
  ModuleKind,
  ModuleResolutionKind,
  ScriptTarget,
} from 'typescript';

import { COMPILER_OPTIONS, PLUGIN_PATHS, ROOT, TS_CONFIG } from './helpers';
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
  // Matches tsconfig.json. Node16 cannot resolve the directory-style `paths` mapping for
  // @awesome-cordova-plugins/core, which is what kept module resolution broken here.
  compilerOptions.moduleResolution = ModuleResolutionKind.Bundler;
  compilerOptions.target = ScriptTarget.ES2022;
  compilerOptions.module = ModuleKind.ES2022;
  compilerOptions.inlineSourceMap = true;
  compilerOptions.inlineSources = true;
  compilerOptions.lib = ['lib.dom.d.ts', 'lib.es2022.d.ts'];
  // tsc infers this when it loads a tsconfig; we hand createProgram the raw JSON, so without it
  // the `paths` mapping for @awesome-cordova-plugins/core resolves against nothing.
  compilerOptions.pathsBasePath = ROOT;

  return createProgram(pluginPaths, compilerOptions, getCompilerHost());
}

/**
 * Emitting never fails by itself — TypeScript reports problems through diagnostics that a caller
 * has to ask for. Without this the build happily produces output for a program full of errors.
 */
export function assertNoDiagnostics(stage: string, diagnostics: readonly Diagnostic[]) {
  if (diagnostics.length === 0) return;
  console.error(formatDiagnosticsWithColorAndContext(diagnostics, getCompilerHost()));
  console.error(`${stage}: ${diagnostics.length} diagnostic(s)`);
  process.exit(1);
}

export function generateDeclarations(sourceFiles?: string[]) {
  const program = getProgram(true, sourceFiles);
  const emitResult = program.emit(undefined, getCompilerHost().writeFile, undefined, true);
  assertNoDiagnostics('generateDeclarations', [
    ...program.getSyntacticDiagnostics(),
    ...program.getSemanticDiagnostics(),
    ...emitResult.diagnostics,
  ]);
  return emitResult;
}

export function transpile() {
  const program = getProgram();
  const emitResult = program.emit(undefined, getCompilerHost().writeFile, undefined, false, {
    before: [extractInjectables(), importsTransformer(), pluginClassTransformer()],
  });
  assertNoDiagnostics('transpile', [
    ...program.getSyntacticDiagnostics(),
    ...program.getSemanticDiagnostics(),
    ...emitResult.diagnostics,
  ]);

  emitInjectableClasses();

  return emitResult;
}
