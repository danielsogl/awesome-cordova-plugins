import { rewriteInjectableExports } from './esm-exports';

describe('rewriteInjectableExports', () => {
  test('rewrites inline class exports into instance exports', () => {
    const jsFile = `import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export class File extends AwesomeCordovaNativePlugin {
  static pluginName = 'File';
}
//# sourceMappingURL=index.js.map`;

    expect(rewriteInjectableExports(jsFile, [{ className: 'File', dirName: 'file', file: '/tmp/file/index.ts' }]))
      .toBe(`import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
class FileOriginal extends AwesomeCordovaNativePlugin {
  static pluginName = 'File';
}
const File = new FileOriginal();
export { File };
//# sourceMappingURL=index.js.map`);
  });

  test('keeps supporting legacy named exports', () => {
    const jsFile = `class SocialSharingOriginal {}
export { SocialSharingOriginal };`;

    expect(
      rewriteInjectableExports(jsFile, [
        { className: 'SocialSharing', dirName: 'social-sharing', file: '/tmp/social-sharing/index.ts' },
      ])
    ).toBe(`class SocialSharingOriginal {}
const SocialSharing = new SocialSharingOriginal();
export { SocialSharing };`);
  });
});
