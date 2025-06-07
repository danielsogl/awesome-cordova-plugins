// Custom esbuild plugins to replace webpack functionality

/**
 * Plugin to remove duplicate tslib helpers that TypeScript might emit
 * Works with both .js and .ts files for comprehensive coverage
 */
const removeTslibHelpersPlugin = {
  name: 'remove-tslib-helpers',
  setup(build) {
    // Handle both JavaScript and TypeScript files
    build.onLoad({ filter: /\.(js|ts)$/ }, async (args) => {
      const fs = require('fs');
      const path = require('path');
      const contents = await fs.promises.readFile(args.path, 'utf8');

      // Remove the __extends method that is added automatically by typescript
      const transformedContents = contents.replace(
        /var\s__extends\s=\s\(this\s&&[\sa-z\._\(\)\|{}=:\[\]&,;?]+}\)\(\);/i,
        ''
      );

      // Determine the correct loader based on file extension
      const ext = path.extname(args.path);
      const loader = ext === '.ts' ? 'ts' : 'js';

      return {
        contents: transformedContents,
        loader: loader,
      };
    });
  },
};

module.exports = {
  removeTslibHelpersPlugin,
};
