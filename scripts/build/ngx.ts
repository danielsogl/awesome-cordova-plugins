import { CompilerHost, CompilerOptions, createCompilerHost, createProgram, EmitFlags } from '@angular/compiler-cli';
import { copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { rollup } from 'rollup';
import { ModuleKind, ModuleResolutionKind, ScriptTarget } from 'typescript';

import { COMPILER_OPTIONS, PLUGIN_PATHS, ROOT } from './helpers';
import { importsTransformer } from './transformers/imports';
import { pluginClassTransformer } from './transformers/plugin-class';
import { assertNoDiagnostics, generateDeclarations } from './transpile';

type NgProgram = ReturnType<typeof createProgram>;

function ngDiagnostics(program: NgProgram) {
  return [
    ...program.getTsOptionDiagnostics(),
    ...program.getNgOptionDiagnostics(),
    ...program.getTsSyntacticDiagnostics(),
    ...program.getTsSemanticDiagnostics(),
    ...program.getNgSemanticDiagnostics(),
  ];
}

export function getProgram(rootNames: string[] = createSourceFiles()) {
  const options: CompilerOptions = structuredClone(COMPILER_OPTIONS);
  options.basePath = ROOT;
  options.pathsBasePath = ROOT;
  options.moduleResolution = ModuleResolutionKind.Bundler;
  options.module = ModuleKind.ES2022;
  options.target = ScriptTarget.ES2022;
  // Programmatic programs need lib *file* names; 'dom'/'es2022' silently resolve to nothing,
  // which left the program without any standard library at all.
  options.lib = ['lib.dom.d.ts', 'lib.es2022.d.ts'];
  // core/ guards on `process` to stay quiet under SSR, so this program needs the node types too.
  options.types = ['node', 'cordova'];
  options.inlineSourceMap = true;
  options.importHelpers = true;
  options.inlineSources = true;
  options.compilationMode = 'partial';

  const host: CompilerHost = createCompilerHost({ options });
  return createProgram({
    rootNames,
    options,
    host,
  });
}

// EmitFlags.Metadata is a ViewEngine-era flag that emits nothing of its own under Ivy. It is kept
// because the ng program derives `emitOnlyDtsFiles` from `(flags & (DTS | JS)) === DTS`, and
// Metadata sets neither bit — which is what makes JS fall out here. Declarations come from
// generateDeclarationFiles() instead.
export function transpileNgxCore() {
  const program = getProgram([resolve(ROOT, 'src/@awesome-cordova-plugins/core/index.ts')]);
  const result = program.emit({
    emitFlags: EmitFlags.Metadata,
    emitCallback: ({ program, writeFile, customTransformers, cancellationToken, targetSourceFile }) => {
      return program.emit(targetSourceFile, writeFile, cancellationToken, true, customTransformers);
    },
  });
  assertNoDiagnostics('transpileNgxCore', [...ngDiagnostics(program), ...result.diagnostics]);
}

export function transpileNgx() {
  const program = getProgram();
  const result = program.emit({
    emitFlags: EmitFlags.Metadata,
    customTransformers: {
      beforeTs: [importsTransformer(true), pluginClassTransformer(true)],
    },
  });
  assertNoDiagnostics('transpileNgx', [...ngDiagnostics(program), ...result.diagnostics]);
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
    rmSync(ngxPath, { recursive: true, force: true });
    mkdirSync(ngxPath, { recursive: true });
    copyFileSync(indexPath, newPath);

    return newPath;
  });
}

export function cleanupNgx() {
  PLUGIN_PATHS.forEach((indexPath: string) =>
    rmSync(indexPath.replace('index.ts', 'ngx'), { recursive: true, force: true })
  );
}
