import {
  Application,
  Converter,
  Context,
  ReflectionKind,
  DeclarationReflection,
  CommentTag,
  ProjectReflection,
  LogLevel,
} from 'typedoc';
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import {
  Node,
  Symbol as TsSymbol,
  isClassDeclaration,
  isCallExpression,
  isIdentifier,
  isObjectLiteralExpression,
  isPropertyAssignment,
  isStringLiteral,
  isNumericLiteral,
  isArrayLiteralExpression,
  getDecorators,
  SyntaxKind,
} from 'typescript';

const ROOT = resolve(__dirname, '../..');
const PLUGINS_SRC = join(ROOT, 'src/@awesome-cordova-plugins/plugins');
const DOCS_DIR = join(ROOT, 'docs');
const DOCS_OUT = join(ROOT, 'docs/plugins');

interface PluginMeta {
  pluginName?: string;
  plugin?: string;
  pluginRef?: string;
  repo?: string;
  platforms?: string[];
  install?: string;
}

// Map from reflection id to extracted decorator metadata
const pluginMetaMap = new Map<number, PluginMeta>();

function parseLiteralValue(node: Node): string | number | boolean | string[] | undefined {
  if (isStringLiteral(node)) return node.text;
  if (isNumericLiteral(node)) return Number(node.text);
  if (node.kind === SyntaxKind.TrueKeyword) return true;
  if (node.kind === SyntaxKind.FalseKeyword) return false;
  if (isArrayLiteralExpression(node)) {
    return node.elements.map((el) => {
      const val = parseLiteralValue(el);
      return typeof val === 'string' ? val : String(val);
    });
  }
  return undefined;
}

function extractPluginMeta(symbol: TsSymbol | undefined): PluginMeta | undefined {
  if (!symbol) return undefined;
  const declarations = symbol.declarations;
  if (!declarations) return undefined;

  // A symbol may have multiple declarations (e.g. an interface and a class
  // sharing the same name). Search all declarations for the @Plugin() decorator.
  for (const decl of declarations) {
    if (!isClassDeclaration(decl)) continue;

    const decorators = getDecorators(decl);
    if (!decorators) continue;

    const pluginDec = decorators.find((d) => {
      const expr = d.expression;
      return isCallExpression(expr) && isIdentifier(expr.expression) && expr.expression.text === 'Plugin';
    });
    if (!pluginDec) continue;

    const callExpr = pluginDec.expression;
    if (!isCallExpression(callExpr)) continue;

    const args = callExpr.arguments[0];
    if (!args || !isObjectLiteralExpression(args)) continue;

    const meta: Record<string, string | number | boolean | string[] | undefined> = {};
    for (const prop of args.properties) {
      if (!isPropertyAssignment(prop) || !isIdentifier(prop.name)) continue;
      meta[prop.name.text] = parseLiteralValue(prop.initializer);
    }
    return meta as unknown as PluginMeta;
  }
  return undefined;
}

function getCommentText(reflection: DeclarationReflection): string {
  if (!reflection.comment) return '';

  // Prefer summary text (text before any block tags)
  const summary = reflection.comment.summary
    .map((part) => part.text)
    .join('')
    .trim();

  if (summary) return summary;

  // Fall back to @description block tag (used by most plugins)
  const descTag = reflection.comment.blockTags?.find((t: CommentTag) => t.tag === '@description');
  if (descTag) {
    return descTag.content
      .map((part) => part.text)
      .join('')
      .trim();
  }

  return '';
}

function getTagValue(reflection: DeclarationReflection, tagName: string): string | undefined {
  if (!reflection.comment) return undefined;
  const tag = reflection.comment.blockTags?.find((t: CommentTag) => t.tag === `@${tagName}`);
  if (!tag) return undefined;
  return tag.content
    .map((part) => part.text)
    .join('')
    .trim();
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1).replace(/\s+\S*$/, '') + '…';
}

function generateReadme(name: string, pluginSlug: string, description: string, meta: PluginMeta): string {
  const installCmd = meta.install ?? `ionic cordova plugin add ${meta.plugin ?? 'PLUGIN_NAME'}`;
  const npmPkg = `@awesome-cordova-plugins/${pluginSlug}`;

  const metaDescription = description
    ? truncate(`${name} plugin for Cordova and Ionic. ${description.replace(/\n/g, ' ')}`, 160)
    : `${name} — Awesome Cordova Plugins wrapper for Ionic and Cordova apps.`;

  // GitBook YAML frontmatter for SEO meta description
  let readme = `---\ndescription: >-\n  ${metaDescription}\n---\n\n`;

  readme += `# ${name}\n\n`;

  if (description) {
    readme += `${description}\n\n`;
  }

  readme += '## Installation\n\n';
  readme += '```bash\n';
  readme += `${installCmd}\n`;
  readme += `npm install ${npmPkg}\n`;
  readme += '```\n\n';

  if (meta.repo) {
    readme += `**Plugin Repo:** [${meta.repo}](${meta.repo})\n\n`;
  }

  if (meta.platforms && meta.platforms.length > 0) {
    readme += '## Supported Platforms\n\n';
    for (const platform of meta.platforms) {
      readme += `- ${platform}\n`;
    }
    readme += '\n';
  }

  readme += '## Further Information\n\n';
  readme += `- [Installation Guide](../../installation.md)\n`;
  readme += `- [FAQ](../../faq.md)\n`;

  return readme;
}

// Custom JSDoc block tags used by plugin source files (rendered in Gitbook)
const CUSTOM_BLOCK_TAGS = [
  '@advanced',
  '@author',
  '@capacitorincompatible',
  '@classes',
  '@description',
  '@enums',
  '@interfaces',
  '@Interfaces',
  '@kind',
  '@link',
  '@name',
  '@note',
  '@paid',
  '@platform',
  '@premier',
  '@return',
  '@static',
  '@usage',
  '@warning',
] as const;

// TypeDoc default block tags + project-specific custom tags for Gitbook
const BLOCK_TAGS = [
  '@param', '@returns', '@template', '@typeParam', '@module', '@inheritDoc',
  '@group', '@category', '@categoryDescription', '@groupDescription',
  '@defaultValue', '@default', '@example', '@remarks', '@see', '@throws',
  '@since', '@deprecated', '@overload', '@enum', '@typedef', '@callback',
  '@prop', '@property', '@satisfies', '@import', '@type', '@hidden',
  '@ignore', '@internal', '@packageDocumentation', '@document', '@license',
  '@private', '@protected', '@public',
  ...CUSTOM_BLOCK_TAGS,
] as const;

async function main(): Promise<void> {
  // TypeDoc's CJS type exports map several option fields to incorrect types (e.g. `string` instead of
  // `boolean` or `object`). The `unknown` cast works around this without affecting runtime behavior.
  const app = await Application.bootstrapWithPlugins({
    entryPoints: [`${PLUGINS_SRC}/*/index.ts`],
    tsconfig: join(ROOT, 'tsconfig.json'),
    skipErrorChecking: true,
    logLevel: LogLevel.Error,
    blockTags: [...BLOCK_TAGS],
    inlineTags: ['@link', '@inheritDoc', '@label', '@code', '@type'],
    validation: { notDocumented: false, invalidLink: false },
  } as unknown as Parameters<typeof Application.bootstrapWithPlugins>[0]);

  // Extract @Plugin() decorator metadata during TypeScript conversion
  app.converter.on(
    Converter.EVENT_CREATE_DECLARATION,
    (context: Context, reflection: DeclarationReflection) => {
      if (reflection.kind !== ReflectionKind.Class) return;

      const symbol = context.getSymbolFromReflection(reflection);
      if (!symbol) return;

      const meta = extractPluginMeta(symbol);
      if (meta) {
        pluginMetaMap.set(reflection.id, meta);
      }
    }
  );

  const project: ProjectReflection | undefined = await app.convert();
  if (!project) {
    console.error('TypeDoc conversion failed');
    process.exit(1);
  }

  // Copy root README to core docs
  const coreDocsDir = join(DOCS_OUT, 'core');
  mkdirSync(coreDocsDir, { recursive: true });
  cpSync(join(ROOT, 'README.md'), join(coreDocsDir, 'README.md'));

  // Track one entry per plugin slug for SUMMARY.md generation
  const pluginEntries = new Map<string, string>();
  let count = 0;

  for (const reflection of project.getReflectionsByKind(ReflectionKind.Class)) {
    const classRef = reflection as DeclarationReflection;
    const meta = pluginMetaMap.get(classRef.id);

    if (!meta || !meta.plugin) continue;

    // Extract plugin slug from source file path
    // Use @awesome-cordova-plugins/plugins/ prefix to avoid matching "awesome-cordova-plugins/src/"
    const sourcePath = classRef.sources?.[0]?.fullFileName ?? '';
    const slugMatch = sourcePath.match(/@awesome-cordova-plugins\/plugins\/([^/]+)\//);
    if (!slugMatch) continue;
    const pluginSlug = slugMatch[1];

    const pluginName = getTagValue(classRef, 'name') ?? meta.pluginName ?? classRef.name;
    const description = getCommentText(classRef);

    // Only use the first class encountered per plugin slug (the main plugin class)
    if (pluginEntries.has(pluginSlug)) continue;
    pluginEntries.set(pluginSlug, pluginName);

    const readmeContent = generateReadme(pluginName, pluginSlug, description, meta);
    const outDir = join(DOCS_OUT, pluginSlug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'README.md'), readmeContent, 'utf-8');
    count++;
  }

  // Generate SUMMARY.md
  const sortedEntries = [...pluginEntries.entries()].sort((a, b) =>
    a[1].localeCompare(b[1], undefined, { sensitivity: 'base' })
  );

  let summary = `# Table of contents\n\n`;
  summary += `* [Welcome](README.md)\n`;
  summary += `* [Installation](installation.md)\n`;
  summary += `* [FAQ](faq.md)\n\n`;
  summary += `## Plugins\n\n`;
  summary += `* [Overview](plugins/README.md)\n`;

  for (const [slug, name] of sortedEntries) {
    summary += `  * [${name}](plugins/${slug}/README.md)\n`;
  }

  writeFileSync(join(DOCS_DIR, 'SUMMARY.md'), summary, 'utf-8');
  console.log(`${count} plugin README files generated`);
  console.log(`SUMMARY.md generated with ${sortedEntries.length} plugin entries`);
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
