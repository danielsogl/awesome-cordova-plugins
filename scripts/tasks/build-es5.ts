import * as fs from 'fs-extra';
import * as path from 'path';
import * as webpack from 'webpack';
import * as uglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { cleanEmittedData, EMIT_PATH, InjectableClassEntry } from '../build/transformers/extract-injectables';
import { ROOT } from '../build/helpers';
const DIST = path.resolve(ROOT, 'dist');
const INDEX_PATH = path.resolve(DIST, 'index.js');
const INJECTABLE_CLASSES = fs.readJSONSync(EMIT_PATH).map((item: InjectableClassEntry) => {
  item.file = './' + item.file.split(/[\/\\]+/).slice(-3, -1).join('/');
  return item;
});

const webpackConfig: webpack.Configuration = {
  entry: INDEX_PATH,
  target: 'web',
  output: {
    path: DIST,
    filename: 'ionic-native.min.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      '@ionic-native/core': path.resolve(DIST, 'core/index.js')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new uglifyJsPlugin({
      sourceMap: true
    })
  ]
};

function getPluginImport(entry: InjectableClassEntry) {
  return `window['IonicNative']['${ entry.className }'] = require('${ entry.file }').${ entry.className };`;
}

function createIndexFile() {
  let fileContent = `window['IonicNative'] = {};\n`;
  fileContent += INJECTABLE_CLASSES.map(getPluginImport).join('\n');
  fileContent += `\nrequire('./core/bootstrap').checkReady();\n`;
  fileContent += `require('./core/ng1').initAngular1(window['IonicNative']);\n`;

  fs.writeFileSync(INDEX_PATH, fileContent, { encoding: 'utf-8' });
}

function compile() {
  webpack(webpackConfig, (err, stats) => {
    if (err) console.log(err);
    else console.log(stats);
    cleanEmittedData();
  });
}

createIndexFile();
compile();
