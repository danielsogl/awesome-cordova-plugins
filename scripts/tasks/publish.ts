import * as fs from 'fs-extra';
import * as path from 'path';
import { merge } from 'lodash';
import { exec } from 'child_process';
import { PLUGIN_PATHS, ROOT } from '../build/helpers';

const MAIN_PACKAGE_JSON = require('../../package.json');
const VERSION = MAIN_PACKAGE_JSON.version;
const FLAGS = '--access public --tag beta';

const PACKAGE_JSON_BASE = {
  "description": "Ionic Native - Native plugins for ionic apps",
  "module": "index.js",
  "typings": "index.d.ts",
  "author": "ionic",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/ionic-team/ionic-native.git"
  }
};

const DIST = path.resolve(ROOT, 'dist/@ionic-native');

const PACKAGES = [];

const RXJS_VEERSION = '^5.0.1';
const CORE_VERSION = '^5.0.0';

const PLUGIN_PEER_DEPENDENCIES = {
  '@ionic-native/core': VERSION, // TODO change this in production
  'rxjs': RXJS_VEERSION
};

function getPackageJsonContent(name, peerDependencies = {}) {
  return merge(PACKAGE_JSON_BASE, {
    name: '@ionic-native/' + name,
    peerDependencies,
    version: VERSION
  });
}

function writePackageJson(data: any, dir: string) {
  const filePath = path.resolve(dir, 'package.json');
  fs.writeJSONSync(filePath, data);
  PACKAGES.push(dir);
}

function prepare() {
  // write @ionic-native/core package.json
  writePackageJson(
    getPackageJsonContent('core', { 'rxjs': RXJS_VEERSION }),
    path.resolve(DIST, 'core')
  );

  // write plugin package.json files
  PLUGIN_PATHS.forEach((pluginPath: string) => {
    const pluginName = pluginPath.split(/[\/\\]+/).slice(-2)[0];
    const packageJsonContents = getPackageJsonContent(pluginName, PLUGIN_PEER_DEPENDENCIES);
    const dir = path.resolve(DIST, 'plugins', pluginName);

    writePackageJson(packageJsonContents, dir);
  });
}

function publish() {
  // TODO apply queue system so it doesn't publish everything at once
  PACKAGES.forEach((pkg: string) => {
    console.log('Going to run the following command: ', `npm publish ${ pkg } ${ FLAGS }`);
    // exec(`npm publish ${ pkg } ${ FLAGS }`);
  });
}

prepare();
publish();
