import { readJSONSync, writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import { build } from 'esbuild';
import { minifiedConfig, unminifiedConfig } from '../build/esbuild.config';

import { ROOT } from '../build/helpers';
import { EMIT_PATH, InjectableClassEntry } from '../build/transformers/extract-injectables';
import { Logger } from '../logger';

const DIST = resolve(ROOT, 'dist');
const INDEX_PATH = resolve(DIST, 'index.ts');
const INJECTABLE_CLASSES = readJSONSync(EMIT_PATH).map((item: InjectableClassEntry) => {
  // Convert file paths to TypeScript source files instead of compiled JS
  item.file =
    './' +
    item.file
      .split(/[\/\\]+/)
      .slice(-4, -1)
      .join('/')
      .replace('/dist/', '/src/'); // Point to source TypeScript files
  return item;
});

function getPluginImport(entry: InjectableClassEntry) {
  return `import { ${entry.className} } from '${entry.file}';`;
}

function createIndexFile() {
  let fileContent = '';
  fileContent += INJECTABLE_CLASSES.map(getPluginImport).join('\n');
  fileContent += `\n\n// Global IonicNative object for browser usage\ndeclare global {\n  interface Window {\n    IonicNative: any;\n  }\n}\n\n`;
  fileContent += `window.IonicNative = {\n`;
  fileContent += INJECTABLE_CLASSES.map((e) => e.className).join(',\n');
  fileContent += '\n};\n\n';
  fileContent += `// Bootstrap and Angular 1 integration\n`;
  fileContent += `import './@awesome-cordova-plugins/core/bootstrap';\n`;
  fileContent += `import { initAngular1 } from './@awesome-cordova-plugins/core/ng1';\n`;
  fileContent += `\n// Check if platform is ready and initialize Angular 1 support\n`;
  fileContent += `initAngular1(window.IonicNative);`;

  writeFileSync(INDEX_PATH, fileContent, { encoding: 'utf-8' });
}

async function compile() {
  Logger.profile('build-es5-optimized');

  try {
    // Build both minified and unminified versions in parallel
    await Promise.all([
      build({
        ...minifiedConfig,
        entryPoints: [INDEX_PATH],
      }),
      build({
        ...unminifiedConfig,
        entryPoints: [INDEX_PATH],
      }),
    ]);

    Logger.profile('build-es5-optimized');
    Logger.info('Compiled ES5 bundles with esbuild native TypeScript support successfully.');
  } catch (error) {
    Logger.profile('build-es5-optimized');
    Logger.error('Error occurred while compiling with esbuild:', error);
    throw error;
  }
}

createIndexFile();
compile();
