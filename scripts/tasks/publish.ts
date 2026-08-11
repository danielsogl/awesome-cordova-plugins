import { exec as execCb } from 'node:child_process';
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { availableParallelism } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';

const exec = promisify(execCb);

import { PLUGIN_PATHS, ROOT } from '../build/helpers';
import { Logger } from '../logger';

type ExportEntry = { types: string; import: string; default: string } | string;

interface PackageJson {
  description: string;
  type: string;
  main: string;
  module: string;
  types: string;
  exports: Record<string, ExportEntry | undefined>;
  sideEffects: boolean | string[];
  author: string;
  license: string;
  homepage: string;
  bugs: { url: string };
  keywords: string[];
  repository: { type: string; url: string; directory?: string };
  name?: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  version?: string;
}

const MAIN_PACKAGE_JSON = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf-8'));
const VERSION: string = MAIN_PACKAGE_JSON.version;
const FLAGS = '--access public --provenance';

// Keep the published range in step with what the repo builds against instead of hardcoding it.
const CORDOVA_TYPES_VERSION = `^${MAIN_PACKAGE_JSON.devDependencies['@types/cordova']}`;

const PACKAGE_JSON_BASE: PackageJson = {
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
    // several tools read this and hard-fail on ESM packages that do not expose it
    './package.json': './package.json',
  },
  sideEffects: false,
  author: 'Daniel Sogl',
  license: 'MIT',
  homepage: MAIN_PACKAGE_JSON.homepage,
  bugs: { url: MAIN_PACKAGE_JSON.bugs.url },
  keywords: ['cordova', 'ionic', 'angular', 'native', 'mobile', 'plugin'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/danielsogl/awesome-cordova-plugins.git',
  },
};

const DIST = resolve(ROOT, 'dist/@awesome-cordova-plugins');

const PACKAGES: string[] = [];

const MIN_CORE_VERSION = '^' + VERSION;
const RXJS_VERSION = '^5.5.0 || ^6.5.0 || ^7.3.0';

const PLUGIN_PEER_DEPENDENCIES: Record<string, string> = {
  '@awesome-cordova-plugins/core': MIN_CORE_VERSION,
  rxjs: RXJS_VERSION,
};

function getPackageJsonContent(
  name: string,
  peerDependencies: Record<string, string> = {},
  dependencies: Record<string, string> = {},
  description?: string
): PackageJson {
  const isCore = name === 'core';
  const pkg: PackageJson = {
    ...structuredClone(PACKAGE_JSON_BASE),
    name: '@awesome-cordova-plugins/' + name,
    dependencies,
    peerDependencies,
    version: VERSION,
  };

  if (description) pkg.description = description;
  pkg.keywords = [...pkg.keywords, name];
  pkg.repository.directory = isCore
    ? 'src/@awesome-cordova-plugins/core'
    : `src/@awesome-cordova-plugins/plugins/${name}`;

  if (isCore) {
    delete pkg.exports['./ngx'];
    // core/index.js calls checkReady() at module scope to register the deviceready listener.
    // Marking the package side-effect free lets a bundler drop that call entirely.
    pkg.sideEffects = ['./index.js'];
  }

  return pkg;
}

function writePackageJson(data: PackageJson, dir: string) {
  const filePath = resolve(dir, 'package.json');
  writeFileSync(filePath, JSON.stringify(data, null, 2));
  PACKAGES.push(dir);
}

/**
 * The nested marker only exists so older resolvers find ngx/index.js. It must not repeat the
 * package identity — it used to carry the same name, version and exports map as the parent, whose
 * "./ngx" entry pointed at a path that does not exist one level down.
 */
function writeNGXPackageJson(dir: string) {
  writeFileSync(
    resolve(dir, 'package.json'),
    JSON.stringify({ main: './index.js', module: './index.js', types: './index.d.ts', sideEffects: false }, null, 2)
  );
}

const LICENSE_PATH = resolve(ROOT, 'LICENSE');
const DOCS_PLUGINS = resolve(ROOT, 'docs/plugins');
const DOCS_SITE = 'https://danielsogl.gitbook.io/awesome-cordova-plugins';

/**
 * npm renders README.md from the tarball, so without this every package page is blank, and a
 * package claiming `license: MIT` should carry the licence text. Both already exist in the repo —
 * the per-plugin READMEs are what `npm run readmes` generates. Returns the SEO description from
 * the GitBook frontmatter so the package can use it instead of one shared generic string.
 */
function copyDocs(dir: string, docsName: string): string | undefined {
  if (existsSync(LICENSE_PATH)) copyFileSync(LICENSE_PATH, join(dir, 'LICENSE'));

  const readme = resolve(DOCS_PLUGINS, docsName, 'README.md');
  if (!existsSync(readme)) {
    Logger.verbose(`No generated README for ${docsName}`);
    return undefined;
  }

  const raw = readFileSync(readme, 'utf-8');
  const description = raw
    .match(/^---\ndescription: >-\n\s*([\s\S]*?)\n---/)?.[1]
    .replace(/\s+/g, ' ')
    .trim();

  const body = raw
    // GitBook frontmatter renders as stray text on npm
    .replace(/^---\n[\s\S]*?\n---\n+/, '')
    // links are relative to the docs site, which does not exist inside the tarball
    .replace(/\]\(\.\.\/\.\.\/([a-z-]+)\.md\)/g, `](${DOCS_SITE}/$1)`);

  writeFileSync(join(dir, 'README.md'), body);
  return description;
}

function prepare() {
  // copyDocs runs first because the generated README carries the per-package description
  const coreDir = resolve(DIST, 'core');
  const coreDescription = copyDocs(coreDir, 'core');
  writePackageJson(
    getPackageJsonContent('core', { rxjs: RXJS_VERSION }, { '@types/cordova': CORDOVA_TYPES_VERSION }, coreDescription),
    coreDir
  );

  PLUGIN_PATHS.forEach((pluginPath: string) => {
    const pluginName = pluginPath.split(/[\/\\]+/).slice(-2)[0];
    const dir = resolve(DIST, 'plugins', pluginName);
    const description = copyDocs(dir, pluginName);
    writePackageJson(getPackageJsonContent(pluginName, PLUGIN_PEER_DEPENDENCIES, {}, description), dir);
    writeNGXPackageJson(join(dir, 'ngx'));
  });
}

async function publishPackage(pkg: string, ignoreErrors: boolean): Promise<void> {
  try {
    const { stdout } = await exec(`npm publish ${pkg} ${FLAGS}`);
    if (stdout) Logger.verbose(stdout.trim());
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes('You cannot publish over the previously published version')) {
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
    process.exit(1);
  }
  Logger.profile('Publishing');
}

prepare();
publish();
