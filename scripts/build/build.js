"use strict";
// Node module dependencies
const fs = require('fs-extra-promise').useFs(require('fs-extra')),
  queue = require('queue'),
  path = require('path'),
  exec = require('child_process').exec;

// Constants for the build process. Paths and JSON files templates
const ROOT = path.resolve(path.join(__dirname, '../../')), // root ionic-native directory
  PLUGINS_PATH = path.resolve(ROOT, 'src/@ionic-native/plugins'), // path to plugins source files
  CORE_PACKAGE_JSON = require(path.resolve(__dirname, 'core-package.json')), // core package.json
  PLUGIN_PACKAGE_JSON = require(path.resolve(__dirname, 'plugin-package.json')), // plugin package.json template
  PLUGIN_TS_CONFIG = require(path.resolve(__dirname, 'tsconfig-plugin.json')), // plugin tsconfig template
  BUILD_TMP = path.resolve(ROOT, '.tmp'), // tmp directory path
  BUILD_DIST_ROOT = path.resolve(ROOT, 'dist/@ionic-native'), // dist directory root path
  BUILD_CORE_DIST = path.resolve(BUILD_DIST_ROOT, 'core'); // core dist directory path


// dependency versions
const ANGULAR_VERSION = '*',
  RXJS_VERSION = '^5.0.1',
  MIN_CORE_VERSION = '^3.1.0',
  IONIC_NATIVE_VERSION = require(path.resolve(ROOT, 'package.json')).version;

// package dependencies
const CORE_PEER_DEPS = {
  'rxjs': RXJS_VERSION
};

const PLUGIN_PEER_DEPS = {
  '@ionic-native/core': MIN_CORE_VERSION,
  '@angular/core': ANGULAR_VERSION,
  'rxjs': RXJS_VERSION
};

// set peer dependencies for all plugins
PLUGIN_PACKAGE_JSON.peerDependencies = PLUGIN_PEER_DEPS;

// Create tmp/dist directories
console.log('Making new TMP directory');
fs.mkdirpSync(BUILD_TMP);


// Prepare and copy the core module's package.json
console.log('Preparing core module package.json');
CORE_PACKAGE_JSON.version = IONIC_NATIVE_VERSION;
CORE_PACKAGE_JSON.peerDependencies = CORE_PEER_DEPS;
fs.writeJsonSync(path.resolve(BUILD_CORE_DIST, 'package.json'), CORE_PACKAGE_JSON);


// Fetch a list of the plugins
const PLUGINS = fs.readdirSync(PLUGINS_PATH);


// Create a queue to process tasks
const QUEUE = queue({
  concurrency: require('os').cpus().length
});


// Function to process a single plugin
const addPluginToQueue = pluginName => {

  QUEUE.push((callback) => {

    console.log(`Building plugin: ${pluginName}`);

    const PLUGIN_BUILD_DIR = path.resolve(BUILD_TMP, 'plugins', pluginName),
      PLUGIN_SRC_PATH = path.resolve(PLUGINS_PATH, pluginName, 'index.ts');

    let tsConfigPath;

    fs.mkdirpAsync(PLUGIN_BUILD_DIR) // create tmp build dir
      .then(() => fs.mkdirpAsync(path.resolve(BUILD_DIST_ROOT, pluginName))) // create dist dir
      .then(() => {

        // Write tsconfig.json
        const tsConfig = JSON.parse(JSON.stringify(PLUGIN_TS_CONFIG));
        tsConfig.files = [PLUGIN_SRC_PATH];
        // tsConfig.compilerOptions.paths['@ionic-native/core'] = [BUILD_CORE_DIST];

        tsConfigPath = path.resolve(PLUGIN_BUILD_DIR, 'tsconfig.json');

        return fs.writeJsonAsync(tsConfigPath, tsConfig);
      })
      .then(() => {
        // clone package.json
        const packageJson = JSON.parse(JSON.stringify(PLUGIN_PACKAGE_JSON));

        packageJson.name = `@ionic-native/${pluginName}`;
        packageJson.version = IONIC_NATIVE_VERSION;

        return fs.writeJsonAsync(path.resolve(BUILD_DIST_ROOT, pluginName, 'package.json'), packageJson);
      })
      .then(() => {

        // compile the plugin
        exec(`${ROOT}/node_modules/.bin/ngc -p ${tsConfigPath}`, (err, stdout, stderr) => {

          if (err) {
            // oops! something went wrong.
            callback(`\n\nBuilding ${pluginName} failed.`);
            console.log(err);
            return;
          }

          // we're done with this plugin!
          callback();

        });

      })
      .catch(callback);

  }); // QUEUE.push end

};

PLUGINS.forEach(addPluginToQueue);

QUEUE.start((err) => {

  if (err) {
    console.log('Error building plugins. ', err);
  } else {
    console.log('Done processing plugins!');
  }

});
