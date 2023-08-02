import { AwesomeCordovaNativePlugin, Cordova, Plugin } from '@awesome-cordova-plugins/core';

import { Injectable } from '@angular/core';

/**
 * @name Zip
 * @description
 * A Cordova plugin to unzip files in Android and iOS.
 * @usage
 * ```typescript
 * import { Zip } from '@awesome-cordova-plugins/zip/nx'
 * ...
 *
 * const result = await Zip.unzip('path/to/source.zip', 'path/to/dest', (progress) =>
 *     console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%')
 * );
 *
 * if(result === 0) console.log('SUCCESS');
 * if(result === -1) console.log('FAILED');
 *
 * ```
 */
@Plugin({
  pluginName: 'Zip',
  plugin: 'cordova-plugin-zip',
  pluginRef: 'zip',
  repo: 'https://github.com/MobileChromeApps/cordova-plugin-zip',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Zip extends AwesomeCordovaNativePlugin {
  /**
   * Extracts files from a ZIP archive
   * @param {string} sourceZip  Source ZIP file
   * @param {string} destFolder Destination folder
   * @param {Function} onSuccess   callback to be called on when done
   * @param {Function} onProgress  optional callback to be called on progress update
   * @returns {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
   */
  @Cordova()
  unzip(sourceZip: string, destFolder: string, onSuccess: Function, onProgress?: Function): Promise<number> {
    return;
  }
}
