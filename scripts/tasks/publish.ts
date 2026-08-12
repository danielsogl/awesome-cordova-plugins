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
    const pluginName = pluginPath.split(/[/\\]+/).slice(-2)[0];
    const dir = resolve(DIST, 'plugins', pluginName);
    const description = copyDocs(dir, pluginName);
    writePackageJson(getPackageJsonContent(pluginName, PLUGIN_PEER_DEPENDENCIES, {}, description), dir);
    writeNGXPackageJson(join(dir, 'ngx'));
  });
}

const RETRIES = 3;
const RETRY_BASE_MS = 1000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Publishing 267 packages is not atomic, so re-running the release job is the only recovery when
 * it dies halfway. Treating "already published" as success is what makes that re-run idempotent —
 * do not turn this into a failure.
 */
function isDuplicateVersion(message: string): boolean {
  return message.includes('EPUBLISHCONFLICT') || message.includes('You cannot publish over the previously published');
}

type Outcome = 'published' | 'skipped' | 'failed';

async function publishPackage(pkg: string): Promise<Outcome> {
  const name = pkg.split(/[\\/]/).pop();

  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const { stdout } = await exec(`npm publish ${pkg} ${FLAGS}`);
      if (stdout) Logger.verbose(stdout.trim());
      return 'published';
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);

      if (isDuplicateVersion(message)) {
        Logger.verbose(`${name}: already published, skipping`);
        return 'skipped';
      }

      if (attempt === RETRIES) {
        Logger.error(`${name}: failed after ${RETRIES} attempts\n${message}`);
        return 'failed';
      }

      // the registry rate limits and 5xxs under a burst of 267 publishes
      const wait = RETRY_BASE_MS * 2 ** (attempt - 1);
      Logger.verbose(`${name}: attempt ${attempt} failed, retrying in ${wait}ms`);
      await sleep(wait);
    }
  }

  return 'failed';
}

async function publish() {
  Logger.profile('Publishing');

  const queue = [...PACKAGES];
  const results: { pkg: string; outcome: Outcome }[] = [];

  // a worker pool keeps every slot busy; batching made each round wait for its slowest member
  const workers = Array.from({ length: availableParallelism() }, async () => {
    for (let pkg = queue.shift(); pkg !== undefined; pkg = queue.shift()) {
      results.push({ pkg, outcome: await publishPackage(pkg) });
    }
  });
  await Promise.all(workers);

  const count = (o: Outcome) => results.filter((r) => r.outcome === o).length;
  const failed = results.filter((r) => r.outcome === 'failed');

  Logger.info(`published: ${count('published')}, skipped: ${count('skipped')}, failed: ${failed.length}`);
  Logger.profile('Publishing');

  if (failed.length > 0) {
    Logger.error(`Failed packages:\n${failed.map((f) => `  ${f.pkg.split(/[\\/]/).pop()}`).join('\n')}`);
    process.exit(1);
  }
}

prepare();
// tsx emits CJS here, so no top-level await; catch instead of leaving the promise floating
publish().catch((err: unknown) => {
  Logger.error('Error publishing!');
  Logger.error(err);
  process.exit(1);
});
