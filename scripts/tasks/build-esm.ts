import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { rewriteInjectableExports } from '../build/esm-exports';
import { PLUGIN_PATHS, ROOT } from '../build/helpers';
import { InjectableClassEntry, EMIT_PATH } from '../build/transformers/extract-injectables';
import { generateDeclarations, transpile } from '../build/transpile';

generateDeclarations();
transpile();

const outDirs = PLUGIN_PATHS.map((p) => p.replace(join(ROOT, 'src'), join(ROOT, 'dist')).replace(/[\\/]index.ts/, ''));
const injectableClasses: InjectableClassEntry[] = JSON.parse(readFileSync(EMIT_PATH, 'utf-8'));

outDirs.forEach((dir: string) => {
  const classes = injectableClasses.filter((entry) => entry.dirName === dir.split(/[\\/]+/).pop());

  let jsFile: string = readFileSync(join(dir, 'index.js'), 'utf-8'),
    dtsFile: string = readFileSync(join(dir, 'index.d.ts'), 'utf-8');

  jsFile = rewriteInjectableExports(jsFile, classes);

  classes.forEach((entry) => {
    dtsFile = dtsFile.replace(`class ${entry.className} `, 'class ' + entry.className + 'Original ');
    dtsFile += `\nexport declare const ${entry.className}: ${entry.className}Original;`;
  });

  writeFileSync(join(dir, 'index.js'), jsFile, 'utf-8');
  writeFileSync(join(dir, 'index.d.ts'), dtsFile, 'utf-8');
});
