import { InjectableClassEntry } from './transformers/extract-injectables';

const SOURCE_MAP_COMMENT = '\n//# sourceMappingURL=';

function insertBeforeSourceMapComment(contents: string, addition: string): string {
  const sourceMapIndex = contents.lastIndexOf(SOURCE_MAP_COMMENT);
  if (sourceMapIndex === -1) {
    return `${contents}\n${addition}`;
  }

  return `${contents.slice(0, sourceMapIndex)}\n${addition}${contents.slice(sourceMapIndex)}`;
}

export function rewriteInjectableExports(jsFile: string, classes: InjectableClassEntry[]): string {
  let rewrittenFile = jsFile;
  const exportBlocks: string[] = [];

  classes.forEach((entry) => {
    const originalClassName = `${entry.className}Original`;

    rewrittenFile = rewrittenFile.replace(
      new RegExp(`([\\s\\(])${entry.className}([\\s\\.;\\(,])`, 'g'),
      `$1${originalClassName}$2`
    );

    const legacyExportPattern = new RegExp(`\\nexport\\s*\\{\\s*${originalClassName}\\s*\\};?`);
    if (legacyExportPattern.test(rewrittenFile)) {
      rewrittenFile = rewrittenFile.replace(legacyExportPattern, '');
    } else {
      const inlineClassExportPattern = new RegExp(`export\\s+class\\s+${originalClassName}(?=\\s)`);
      if (!inlineClassExportPattern.test(rewrittenFile)) {
        throw new Error(`Could not rewrite ESM export for injectable class "${entry.className}"`);
      }
      rewrittenFile = rewrittenFile.replace(inlineClassExportPattern, `class ${originalClassName}`);
    }

    exportBlocks.push(`const ${entry.className} = new ${originalClassName}();\nexport { ${entry.className} };`);
  });

  if (exportBlocks.length === 0) {
    return rewrittenFile;
  }

  return insertBeforeSourceMapComment(rewrittenFile, exportBlocks.join('\n'));
}
