import * as fs from 'fs-extra';
import * as path from 'path';

import { PLUGIN_PATHS, ROOT } from '../build/helpers';
import { EMIT_PATH } from '../build/transformers/extract-injectables';
import { generateDeclarations, transpile } from '../build/transpile';

generateDeclarations();
transpile();

const outDirs = PLUGIN_PATHS.map(p =>
  p.replace(path.join(ROOT, 'src'), path.join(ROOT, 'dist')).replace(/[\\/]index.ts/, '')
);
const injectableClasses = fs.readJSONSync(EMIT_PATH);

outDirs.forEach(dir => {
  const classes = injectableClasses.filter(
    entry => entry.dirName === dir.split(/[\\/]+/).pop()
  );

  let jsFile: string = fs.readFileSync(path.join(dir, 'index.js'), 'utf-8'),
    dtsFile: string = fs.readFileSync(path.join(dir, 'index.d.ts'), 'utf-8');

  classes.forEach(entry => {
    dtsFile = dtsFile.replace(
      `class ${entry.className} `,
      'class ' + entry.className + 'Original '
    );
    dtsFile += `\nexport declare const ${entry.className}: ${
      entry.className
    }Original;`;
    jsFile = jsFile.replace(
      new RegExp(`([\\s\\(])${entry.className}([\\s\\.;\\(,])`, 'g'),
      '$1' + entry.className + 'Original$2'
    );
    jsFile = jsFile.replace(
      `export { ${entry.className}Original }`,
      `var ${entry.className} = new ${entry.className}Original();\nexport { ${
        entry.className
      } }`
    );
  });

  fs.writeFileSync(path.join(dir, 'index.js'), jsFile, 'utf-8');
  fs.writeFileSync(path.join(dir, 'index.d.ts'), dtsFile, 'utf-8');
});
