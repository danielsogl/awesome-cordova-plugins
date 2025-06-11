import { writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import { PLUGIN_PATHS, ROOT } from '../build/helpers';

// Base configuration for release-please
const baseConfig = {
  $schema: 'https://raw.githubusercontent.com/googleapis/release-please/main/schemas/config.json',
  'release-type': 'node',
  'bump-minor-pre-major': false,
  'bump-patch-for-minor-pre-major': false,
  draft: false,
  prerelease: false,
  'changelog-sections': [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Miscellaneous Chores', hidden: false },
    { type: 'docs', section: 'Documentation' },
    { type: 'style', section: 'Styles', hidden: true },
    { type: 'refactor', section: 'Code Refactoring' },
    { type: 'perf', section: 'Performance Improvements' },
    { type: 'test', section: 'Tests', hidden: true },
    { type: 'build', section: 'Build System', hidden: true },
    { type: 'ci', section: 'Continuous Integration', hidden: true },
  ],
  packages: {},
};

function generateReleaseConfig() {
  const config = { ...baseConfig };

  // Add core package
  config.packages['src/@awesome-cordova-plugins/core'] = {
    'package-name': '@awesome-cordova-plugins/core',
  };

  // Add all plugin packages dynamically
  PLUGIN_PATHS.forEach((pluginPath: string) => {
    const pluginName = pluginPath.split(/[\/\\]+/).slice(-2)[0];
    const packagePath = `src/@awesome-cordova-plugins/plugins/${pluginName}`;

    config.packages[packagePath] = {
      'package-name': `@awesome-cordova-plugins/${pluginName}`,
    };
  });

  // Write the configuration file
  const configPath = resolve(ROOT, 'release-please-config.json');
  writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log(`Generated release-please-config.json with ${Object.keys(config.packages).length} packages`);
  console.log(`- 1 core package`);
  console.log(`- ${Object.keys(config.packages).length - 1} plugin packages`);
}

generateReleaseConfig();
