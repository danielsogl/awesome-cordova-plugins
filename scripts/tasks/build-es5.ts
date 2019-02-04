import * as fs from 'fs-extra';
import * as path from 'path';
import * as uglifyJsPlugin from 'uglifyjs-webpack-plugin';
import * as unminifiedPlugin from 'unminified-webpack-plugin';
import * as webpack from 'webpack';

import { ROOT } from '../build/helpers';
import {
  cleanEmittedData,
  EMIT_PATH,
  InjectableClassEntry
} from '../build/transformers/extract-injectables';
import { Logger } from '../logger';

const DIST = path.resolve(ROOT, 'dist');
const INDEX_PATH = path.resolve(DIST, 'index.js');
const INJECTABLE_CLASSES = fs
  .readJSONSync(EMIT_PATH)
  .map((item: InjectableClassEntry) => {
    item.file =
      './' +
      item.file
        .split(/[\/\\]+/)
        .slice(-4, -1)
        .join('/');
    return item;
  });

const webpackConfig: webpack.Configuration = {
  mode: 'production',
  entry: INDEX_PATH,
  devtool: 'source-map',
  target: 'web',
  output: {
    path: DIST,
    filename: 'ionic-native.min.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      '@ionic-native/core': path.resolve(DIST, '@ionic-native/core/index.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: path.resolve(ROOT, 'scripts/build/remove-tslib-helpers.js')
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      __extends: ['tslib', '__extends']
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new uglifyJsPlugin({
      sourceMap: true
    }),
    new unminifiedPlugin()
  ]
};

function getPluginImport(entry: InjectableClassEntry) {
  return `import { ${entry.className} } from '${entry.file}';`;
}

function createIndexFile() {
  let fileContent = '';
  fileContent += INJECTABLE_CLASSES.map(getPluginImport).join('\n');
  fileContent += `\nwindow.IonicNative = {\n`;
  fileContent += INJECTABLE_CLASSES.map(e => e.className).join(',\n');
  fileContent += '\n};\n';
  fileContent += `require('./@ionic-native/core/bootstrap').checkReady();\n`;
  fileContent += `require('./@ionic-native/core/ng1').initAngular1(window.IonicNative);`;

  fs.writeFileSync(INDEX_PATH, fileContent, { encoding: 'utf-8' });
}

function compile() {
  Logger.profile('build-es5');
  webpack(webpackConfig, (err, stats) => {
    Logger.profile('build-es5');
    if (err) Logger.error('Error occurred while compiling with Webpack', err);
    else {
      Logger.info('Compiled ES5 file with Webpack successfully.');
    }
    cleanEmittedData();
  });
}

createIndexFile();
compile();
