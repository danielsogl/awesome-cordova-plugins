import { readJSONSync, writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import * as TerserPlugin from 'terser-webpack-plugin';
import * as unminifiedPlugin from 'unminified-webpack-plugin';
import { Configuration, DefinePlugin, ProvidePlugin, webpack } from 'webpack';

import { ROOT } from '../build/helpers';
import { cleanEmittedData, EMIT_PATH, InjectableClassEntry } from '../build/transformers/extract-injectables';
import { Logger } from '../logger';

const DIST = resolve(ROOT, 'dist');
const INDEX_PATH = resolve(DIST, 'index.js');
const INJECTABLE_CLASSES = readJSONSync(EMIT_PATH).map((item: InjectableClassEntry) => {
  item.file =
    './' +
    item.file
      .split(/[\/\\]+/)
      .slice(-4, -1)
      .join('/');
  return item;
});

const webpackConfig: Configuration = {
  mode: 'production',
  entry: INDEX_PATH,
  devtool: 'source-map',
  target: 'web',
  output: {
    path: DIST,
    filename: 'awesome-cordova-plugins.min.js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      '@awesome-cordova-plugins/core': resolve(DIST, '@awesome-cordova-plugins/core/index.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: resolve(ROOT, 'scripts/build/remove-tslib-helpers.js'),
      },
    ],
  },
  plugins: [
    new ProvidePlugin({
      __extends: ['tslib', '__extends'],
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new unminifiedPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

function getPluginImport(entry: InjectableClassEntry) {
  return `import { ${entry.className} } from '${entry.file}';`;
}

function createIndexFile() {
  let fileContent = '';
  fileContent += INJECTABLE_CLASSES.map(getPluginImport).join('\n');
  fileContent += `\nwindow.IonicNative = {\n`;
  fileContent += INJECTABLE_CLASSES.map((e) => e.className).join(',\n');
  fileContent += '\n};\n';
  fileContent += `require('./@awesome-cordova-plugins/core/bootstrap').checkReady();\n`;
  fileContent += `require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);`;

  writeFileSync(INDEX_PATH, fileContent, { encoding: 'utf-8' });
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
