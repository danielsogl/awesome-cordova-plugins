import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';

const ROOT = resolve(__dirname, '../..');
const PLUGINS_DIR = join(ROOT, 'src/@awesome-cordova-plugins/plugins');
const TEMPLATES_DIR = join(ROOT, 'scripts/templates');

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    n: { type: 'string', short: 'n' },
    m: { type: 'boolean', short: 'm', default: false },
  },
});

if (!values.n) {
  console.log('Usage: tsx scripts/tasks/plugin-create -n PluginName [-m]');
  process.exit(1);
}

const pluginName: string = values.n;
const useMinimal: boolean = !!values.m;

// Convert PascalCase to variants
const spaced = pluginName.replace(/(?!^)([A-Z])/g, ' $1');
const kebabCase = pluginName
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
  .toLowerCase();
const camelCase = pluginName.charAt(0).toLowerCase() + pluginName.slice(1);

const templateFile = useMinimal ? 'wrap-min.tmpl' : 'wrap.tmpl';
const templatePath = join(TEMPLATES_DIR, templateFile);

let content = readFileSync(templatePath, 'utf-8');
content = content.replace(/\{\{ PluginName \}\}/g, pluginName);
content = content.replace(/\{\{ Plugin_Name \}\}/g, spaced);
content = content.replace(/\{\{ pluginName \}\}/g, camelCase);
content = content.replace(/\{\{ plugin-name \}\}/g, kebabCase);

const outDir = join(PLUGINS_DIR, kebabCase);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'index.ts'), content, 'utf-8');

console.log(`Plugin created at: src/@awesome-cordova-plugins/plugins/${kebabCase}/index.ts`);
