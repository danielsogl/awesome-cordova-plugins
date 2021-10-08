import * as Queue from 'async-promise-queue';
import { exec } from 'child_process';
import { writeJSONSync } from 'fs-extra';
import { merge } from 'lodash';
import { cpus } from 'os';
import { join, resolve } from 'path';

import { PLUGIN_PATHS, ROOT } from '../build/helpers';
import { Logger } from '../logger';

// tslint:disable-next-line:no-var-requires
const MAIN_PACKAGE_JSON = require('../../package.json');
const VERSION = MAIN_PACKAGE_JSON.version;
const FLAGS = '--access public';

const PACKAGE_JSON_BASE = {
  description: 'Awesome Cordova Plugins - Native plugins for ionic apps',
  main: 'bundle.js',
  module: 'index.js',
  typings: 'index.d.ts',
  author: 'ionic',
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'https://github.com/danielsogl/awesome-cordova-plugins.git',
  },
};

const DIST = resolve(ROOT, 'dist/@awesome-cordova-plugins');

const PACKAGES = [];

const MIN_CORE_VERSION = '^5.1.0';
const RXJS_VERSION = '^5.5.0 || ^7.3.0';

const PLUGIN_PEER_DEPENDENCIES = {
  '@awesome-cordova-plugins/core': MIN_CORE_VERSION,
  rxjs: RXJS_VERSION,
};

function getPackageJsonContent(name: string, peerDependencies = {}, dependencies = {}) {
  return merge(PACKAGE_JSON_BASE, {
    name: '@awesome-cordova-plugins/' + name,
    dependencies,
    peerDependencies,
    version: VERSION,
  });
}

function writePackageJson(data: any, dir: string) {
  const filePath = resolve(dir, 'package.json');
  writeJSONSync(filePath, data);
  PACKAGES.push(dir);
}
function writeNGXPackageJson(data: any, dir: string) {
  const filePath = resolve(dir, 'package.json');
  writeJSONSync(filePath, data);
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

async function publish(ignoreErrors = false) {
  Logger.profile('Publishing');
  // upload 1 package per CPU thread at a time
  const worker = Queue.async.asyncify(
    (pkg: any) =>
      new Promise<string | void>((resolve, reject) => {
        exec(`npm publish ${pkg} ${FLAGS}`, (err, stdout) => {
          if (stdout) {
            Logger.verbose(stdout.trim());
            resolve(stdout);
          }
          if (err) {
            if (!ignoreErrors) {
              if (err.message.includes('You cannot publish over the previously published version')) {
                Logger.verbose('Ignoring duplicate version error.');
                return resolve();
              }
              reject(err);
            }
          }
        });
      })
  );

  try {
    await Queue(worker, PACKAGES, cpus().length);
    Logger.info('Done publishing!');
  } catch (e) {
    Logger.error('Error publishing!');
    Logger.error(e);
  }
  Logger.profile('Publishing');
}

prepare();
publish();
