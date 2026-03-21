import { exec as execCb } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { availableParallelism } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';

const exec = promisify(execCb);

import { PLUGIN_PATHS, ROOT } from '../build/helpers';
import { Logger } from '../logger';

const MAIN_PACKAGE_JSON = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf-8'));
const VERSION = MAIN_PACKAGE_JSON.version;
const FLAGS = '--access public --provenance';

const PACKAGE_JSON_BASE = {
  description: 'Awesome Cordova Plugins - Native plugins for ionic apps',
  type: 'module',
  main: './index.js',
  module: './index.js',
  types: './index.d.ts',
  exports: {
    '.': {
      types: './index.d.ts',
      import: './index.js',
      default: './index.js',
    },
    './ngx': {
      types: './ngx/index.d.ts',
      import: './ngx/index.js',
      default: './ngx/index.js',
    },
  },
  sideEffects: false,
  author: 'Daniel Sogl',
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'https://github.com/danielsogl/awesome-cordova-plugins.git',
  },
};

const DIST = resolve(ROOT, 'dist/@awesome-cordova-plugins');

const PACKAGES = [];

const MIN_CORE_VERSION = '^' + VERSION;
const RXJS_VERSION = '^5.5.0 || ^6.5.0 || ^7.3.0';

const PLUGIN_PEER_DEPENDENCIES = {
  '@awesome-cordova-plugins/core': MIN_CORE_VERSION,
  rxjs: RXJS_VERSION,
};

function getPackageJsonContent(name: string, peerDependencies = {}, dependencies = {}) {
  const pkg = {
    ...structuredClone(PACKAGE_JSON_BASE),
    name: '@awesome-cordova-plugins/' + name,
    dependencies,
    peerDependencies,
    version: VERSION,
  };

  // Core package has no ngx subfolder
  if (name === 'core') {
    delete pkg.exports['./ngx'];
  }

  return pkg;
}

function writePackageJson(data: any, dir: string) {
  const filePath = resolve(dir, 'package.json');
  writeFileSync(filePath, JSON.stringify(data, null, 2));
  PACKAGES.push(dir);
}
function writeNGXPackageJson(data: any, dir: string) {
  const filePath = resolve(dir, 'package.json');
  writeFileSync(filePath, JSON.stringify(data, null, 2));
}
function prepare() {
  // write @awesome-cordova-plugins/core package.json
  writePackageJson(
    getPackageJsonContent('core', { rxjs: RXJS_VERSION }, { '@types/cordova': 'latest' }),
    resolve(DIST, 'core')
  );

  // write plugin package.json files
  PLUGIN_PATHS.forEach((pluginPath: string) => {
    const pluginName = pluginPath.split(/[\/\\]+/).slice(-2)[0];
    const packageJsonContents = getPackageJsonContent(pluginName, PLUGIN_PEER_DEPENDENCIES);
    const dir = resolve(DIST, 'plugins', pluginName);
    const ngxDir = join(dir, 'ngx');
    writePackageJson(packageJsonContents, dir);
    writeNGXPackageJson(packageJsonContents, ngxDir);
  });
}

async function publishPackage(pkg: string, ignoreErrors: boolean): Promise<void> {
  try {
    const { stdout } = await exec(`npm publish ${pkg} ${FLAGS}`);
    if (stdout) Logger.verbose(stdout.trim());
  } catch (err: any) {
    if (err.message?.includes('You cannot publish over the previously published version')) {
      Logger.verbose('Ignoring duplicate version error.');
      return;
    }
    if (!ignoreErrors) throw err;
  }
}

async function publish(ignoreErrors = false) {
  Logger.profile('Publishing');
  const concurrency = availableParallelism();
  const queue = [...PACKAGES];

  try {
    while (queue.length > 0) {
      const batch = queue.splice(0, concurrency);
      await Promise.all(batch.map((pkg) => publishPackage(pkg, ignoreErrors)));
    }
    Logger.info('Done publishing!');
  } catch (e) {
    Logger.error('Error publishing!');
    Logger.error(e);
  }
  Logger.profile('Publishing');
}

prepare();
publish();
