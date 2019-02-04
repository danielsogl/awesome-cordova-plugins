import * as ts from 'typescript';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as ngc from '@angular/compiler-cli';
import * as rimraf from 'rimraf';
import { generateDeclarations } from './transpile';
import { clone } from 'lodash';
import { EmitFlags } from '@angular/compiler-cli';
import { importsTransformer } from './transformers/imports';
import { pluginClassTransformer } from './transformers/plugin-class';
import { COMPILER_OPTIONS, PLUGIN_PATHS, ROOT } from './helpers';

export function getProgram(rootNames: string[] = createSourceFiles()) {
  const options: ngc.CompilerOptions = clone(COMPILER_OPTIONS);
  options.basePath = ROOT;
  options.moduleResolution = ts.ModuleResolutionKind.NodeJs;
  options.module = ts.ModuleKind.ES2015;
  options.target = ts.ScriptTarget.ES5;
  options.lib = ['dom', 'es2017'];
  options.inlineSourceMap = true;
  options.inlineSources = true;
  delete options.baseUrl;

  const host: ngc.CompilerHost = ngc.createCompilerHost({ options });

  return ngc.createProgram({
    rootNames,
    options,
    host
  });
}

// hacky way to export metadata only for core package
export function transpileNgxCore() {
  getProgram([path.resolve(ROOT, 'src/@ionic-native/core/index.ts')]).emit({
    emitFlags: EmitFlags.Metadata,
    emitCallback: ({ program, writeFile, customTransformers, cancellationToken, targetSourceFile }) =>
      program.emit(targetSourceFile, writeFile, cancellationToken, true, customTransformers)
  });
}

export function transpileNgx() {
  getProgram().emit({
    emitFlags: EmitFlags.Metadata,
    customTransformers: {
      beforeTs: [
        importsTransformer(true),
        pluginClassTransformer(true)
      ]
    }
  });
}

export function generateDeclarationFiles() {
  generateDeclarations(PLUGIN_PATHS.map(p => p.replace('index.ts', 'ngx/index.ts')));
}

// remove reference to @ionic-native/core decorators
export function modifyMetadata() {
  PLUGIN_PATHS.map(p => p.replace(path.join(ROOT, 'src'), path.join(ROOT, 'dist')).replace('index.ts', 'ngx/index.metadata.json'))
    .forEach(p => {
      const content = fs.readJSONSync(p);
      let _prop;
      for (const prop in content[0].metadata) {
        _prop = content[0].metadata[prop];
        removeIonicNativeDecorators(_prop);

        if (_prop.members) {
          for (const memberProp in _prop.members) {
            removeIonicNativeDecorators(_prop.members[memberProp][0]);
          }
        }
      }

      fs.writeJSONSync(p, content);
    });
}

function removeIonicNativeDecorators(node: any) {
  if (node.decorators && node.decorators.length) {
    node.decorators = node.decorators.filter((d, i) => d.expression.module !== '@ionic-native/core');
  }

  if (node.decorators && !node.decorators.length) delete node.decorators;
}

function createSourceFiles(): string[] {
  return PLUGIN_PATHS.map((indexPath: string) => {
    const ngxPath = path.resolve(indexPath.replace('index.ts', ''), 'ngx'),
      newPath = path.resolve(ngxPath, 'index.ts');

    // delete directory
    rimraf.sync(ngxPath);
    fs.mkdirpSync(ngxPath);
    fs.copyFileSync(indexPath, newPath);

    return newPath;
  });
}

export function cleanupNgx() {
  PLUGIN_PATHS.forEach((indexPath: string) =>
    rimraf.sync(indexPath.replace('index.ts', 'ngx'))
  );
}
