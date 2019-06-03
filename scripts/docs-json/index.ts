import * as fs from 'fs-extra';
import { Application } from 'typedoc';
import { basename, dirname, resolve } from 'path';
import { runInNewContext } from 'vm';

interface Plugin {
  packageName: string;
  displayName: string;
  description: string;
  platforms: string[];
  usage: string;
  repo: string;
  cordovaPlugin: {
    name: string;
  };
}

const rootDir = resolve(__dirname, '../..');
const typedocTmp = resolve(__dirname, 'typedoc.tmp.json');
const pluginsDir = resolve(rootDir, 'src/@ionic-native/plugins');
const typedoc = new Application({
  mode: 'modules',
  tsconfig: resolve(rootDir, 'tsconfig.json'),
  ignoreCompilerErrors: true
});

run(pluginsDir);

async function run(pluginsDir: string) {
  const typedocData = await generateTypedoc(pluginsDir);
  const modules = typedocData.children.filter(isModule);
  const plugins = modules.filter(hasPlugin).map(processPlugin);
  await fs.outputJson(resolve(__dirname, 'plugins.json'), plugins, {
    spaces: 2
  });
}

async function generateTypedoc(root: string, outputPath = typedocTmp) {
  const pluginDirs = await fs.readdir(root);
  const paths = pluginDirs.map(dir => resolve(root, dir, 'index.ts'));
  typedoc.generateJson(paths, outputPath);
  return fs.readJson(outputPath);
}

function processPlugin(pluginModule): Plugin {
  const pluginClass = pluginModule.children.find(isPlugin);
  const decorator = getPluginDecorator(pluginClass);
  const packageName = `@ionic-native/${basename(dirname(pluginModule.originalName))}`;
  const displayName = getTag(pluginClass, 'name');
  const usage = getTag(pluginClass, 'usage');
  const description = getTag(pluginClass, 'description');
  return {
    packageName,
    displayName,
    description,
    usage,
    platforms: decorator.platforms,
    repo: decorator.repo,
    cordovaPlugin: {
      name: decorator.plugin
    }
  };
}

/**
 * Typedoc only gives us the Plugin decorator internals
 * as a string. So, rather than try to parse that with a RegExp,
 * we evaluate it using Node's vm module.
 */
const getPluginDecorator = (child: any) => {
  if (isPlugin(child)) {
    const decorator = child.decorators.find(d => d.name === 'Plugin');
    return runInNewContext(`(${decorator.arguments.config})`);
  }
};

const getTag = (child: any, tagName: string): string => {
  if (hasTags(child)) {
    const tag = child.comment.tags.find(t => t.tag === tagName);
    if (tag) {
      return tag.text;
    }
  }
};

const isModule = (child: any): boolean =>
  child.kind === 1;

const isClass = (child: any): boolean =>
  child.kind === 128;

const isPlugin = (child: any): boolean =>
  isClass(child) && hasTags(child) && Array.isArray(child.decorators) && child.decorators.some(d => d.name === 'Plugin');

const hasPlugin = (child: any): boolean =>
  child.children.some(isPlugin);

const hasTags = (child: any): boolean =>
  child.comment && Array.isArray(child.comment.tags);
