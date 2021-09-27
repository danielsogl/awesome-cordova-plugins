import * as fs from 'fs-extra';
import { basename, dirname, resolve } from 'path';
import { Application } from 'typedoc';
import TypeDoc = require('typedoc');
import { runInNewContext } from 'vm';

interface Plugin {
  packageName: string;
  displayName: string;
  description: string;
  platforms: string[];
  usage: string;
  repo: string;
  installVariables: string[];
  cordovaPlugin: {
    name: string;
  };
  premierSlug: string;
  capacitorIncompatible: boolean;
}

const rootDir = resolve(__dirname, '../..');
const typedocDocsTmp = resolve(__dirname, 'typedoc-docs');
const typedocTmp = resolve(__dirname, 'typedoc.tmp.json');
const pluginsDir = resolve(rootDir, 'src/@awesome-cordova-plugins/plugins');
const typedoc = new Application();

typedoc.options.addReader(new TypeDoc.TSConfigReader());
typedoc.options.addReader(new TypeDoc.TypeDocReader());

run(pluginsDir);

async function run(pluginsDir: string) {
  try {
    const typedocData = await generateTypedoc(pluginsDir);
    const modules = typedocData.children.filter(isModule);
    const plugins = modules.filter(hasPlugin).map(processPlugin);
    await fs.outputJson(resolve(__dirname, 'plugins.json'), plugins, {
      spaces: 2,
    });
  } catch (e) {
    console.error('Unable to generate typedoc', e);
  }
}

async function generateTypedoc(root: string, outputPath = typedocTmp, outputDocsPath = typedocDocsTmp) {
  const pluginDirs = await fs.readdir(root);
  const paths = pluginDirs.map(dir => resolve(root, dir, 'index.ts'));
  typedoc.bootstrap({
    /*
    mode: 'modules',
    ignoreCompilerErrors: true,
    */
    entryPoints: paths,
    tsconfig: `tsconfig.json`,
  });
  const project = typedoc.converter.convert(typedoc.getEntryPoints() ?? []);

  await typedoc.generateDocs(project, outputDocsPath);
  await typedoc.generateJson(project, outputPath);

  return fs.readJson(outputPath);
}

function processPlugin(pluginModule): Plugin {
  const pluginClass = pluginModule.children.find(isPlugin);
  console.log(pluginClass);
  const decorator = getPluginDecorator(pluginClass);
  const packageName = `@awesome-cordova-plugins/${basename(dirname(pluginModule.originalName))}`;
  const displayName = getTag(pluginClass, 'name');
  const usage = getTag(pluginClass, 'usage');
  const description = getTag(pluginClass, 'description');
  const premierSlug = getTag(pluginClass, 'premier');
  const capIncompat = getTag(pluginClass, 'capacitorincompatible');
  const capacitorIncompatible = capIncompat ? true : undefined;
  return {
    packageName,
    displayName,
    description,
    usage,
    platforms: decorator.platforms,
    repo: decorator.repo,
    installVariables: decorator.installVariables,
    cordovaPlugin: {
      name: decorator.plugin,
    },
    premierSlug,
    capacitorIncompatible,
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

    console.log('Found decorator', decorator.arguments, child);
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

const isModule = (child: any): boolean => child.kind === 1;

const isClass = (child: any): boolean => child.kind === 128;

const isPlugin = (child: any): boolean =>
  isClass(child) &&
  hasTags(child) &&
  Array.isArray(child.decorators) &&
  child.decorators.some(d => d.name === 'Plugin');

const hasPlugin = (child: any): boolean => child.children.some(isPlugin);

const hasTags = (child: any): boolean => child.comment && Array.isArray(child.comment.tags);
