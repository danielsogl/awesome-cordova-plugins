const { resolve } = require('path');
const { removeTslibHelpersPlugin } = require('./esbuild-plugins');

const ROOT = resolve(__dirname, '../../');
const DIST = resolve(ROOT, 'dist');

/**
 * Base esbuild configuration for TypeScript projects
 * Based on esbuild TypeScript documentation: https://esbuild.github.io/content-types/#typescript
 */
const baseConfig = {
  platform: 'browser',
  target: 'es2015',
  format: 'iife',
  bundle: true,
  sourcemap: true,
  treeShaking: true,
  // TypeScript support - esbuild handles .ts files natively
  loader: { '.ts': 'ts' },
  // Resolve TypeScript and JavaScript files
  resolveExtensions: ['.ts', '.js'],
  // Define environment variables
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  // Inject tslib helpers globally
  inject: [resolve(ROOT, 'scripts/build/tslib-provider.js')],
  // Custom plugins for webpack compatibility
  plugins: [removeTslibHelpersPlugin],
  // Path aliases for module resolution
  alias: {
    '@awesome-cordova-plugins/core': resolve(DIST, '@awesome-cordova-plugins/core/index.js'),
  },
  banner: {
    js: '/* Awesome Cordova Plugins - https://github.com/danielsogl/awesome-cordova-plugins */',
  },
};

/**
 * Configuration for minified production bundle
 */
const minifiedConfig = {
  ...baseConfig,
  minify: true,
  outfile: resolve(DIST, 'awesome-cordova-plugins.min.js'),
};

/**
 * Configuration for unminified development bundle
 */
const unminifiedConfig = {
  ...baseConfig,
  minify: false,
  outfile: resolve(DIST, 'awesome-cordova-plugins.js'),
};

module.exports = {
  baseConfig,
  minifiedConfig,
  unminifiedConfig,
};
