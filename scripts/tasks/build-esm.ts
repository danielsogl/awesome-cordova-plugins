import { generateDeclarations, transpile } from '../build/transpile';
import { EMIT_PATH } from '../build/transformers/extract-injectables';
import { PLUGIN_PATHS } from '../build/helpers';
import * as fs from 'fs-extra';
import * as path from 'path';

generateDeclarations();
transpile();

const outDirs = PLUGIN_PATHS.map(p => p.replace('src', 'dist').replace(/[\\/]index.ts/, ''));
const injectableClasses = fs.readJSONSync(EMIT_PATH);


outDirs.forEach(dir => {
  const classes = injectableClasses.filter(entry => entry.dirName === dir.split(/[\\/]+/).pop());

  let jsFile: string = fs.readFileSync(path.join(dir, 'index.js'), 'utf-8'),
    dtsFile: string = fs.readFileSync(path.join(dir, 'index.d.ts'), 'utf-8');

  classes.forEach(entry => {
    dtsFile = dtsFile.replace(`class ${ entry.className } `, 'class ' + entry.className + 'Original ');
    dtsFile += `\nexport declare const ${ entry.className }: ${ entry.className }Original;`;
    jsFile = jsFile.replace(new RegExp(`[\\s\\(]${ entry.className }([\\s\\.;\\(])`, 'g'), ' ' + entry.className + 'Original$1');
    jsFile = jsFile.replace(`export { ${ entry.className }Original }`, `var ${ entry.className } = new ${ entry.className }Original();\nexport { ${ entry.className } }`);
  });

  fs.writeFileSync(path.join(dir, 'index.js'), jsFile, 'utf-8');
  fs.writeFileSync(path.join(dir, 'index.d.ts'), dtsFile, 'utf-8');
});
