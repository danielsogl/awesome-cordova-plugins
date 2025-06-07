import { writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import { PLUGIN_PATHS, ROOT } from '../build/helpers';

// Get the current version from package.json
const MAIN_PACKAGE_JSON = require('../../package.json');
const VERSION = MAIN_PACKAGE_JSON.version;

function generateReleaseManifest() {
  const manifest = {};

  // Add core package with current version
  manifest['src/@awesome-cordova-plugins/core'] = VERSION;

  // Add all plugin packages with current version
  PLUGIN_PATHS.forEach((pluginPath: string) => {
    const pluginName = pluginPath.split(/[\/\\]+/).slice(-2)[0];
    const packagePath = `src/@awesome-cordova-plugins/plugins/${pluginName}`;

    manifest[packagePath] = VERSION;
  });

  // Write the manifest file
  const manifestPath = resolve(ROOT, '.release-please-manifest.json');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(
    `Generated .release-please-manifest.json with version ${VERSION} for ${Object.keys(manifest).length} packages`
  );
}

generateReleaseManifest();
