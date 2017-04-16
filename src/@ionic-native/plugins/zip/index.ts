import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

/**
 * @name Zip
 * @description
 * A Cordova plugin to unzip files in Android and iOS.
 *
 * @usage
 * ```
 * import { Zip } from '@ionic-native/zip';
 *
 * constructor(private zip: Zip) { }
 *
 * ...
 *
 * this.zip.unzip('path/to/source.zip', 'path/to/dest', (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
 *  .then((result) => {
 *    if(result === 0) console.log('SUCCESS');
 *    if(result === -1) console.log('FAILED');
 *  });
 *
 * ```
 */
@Plugin({
  pluginName: 'Zip',
  plugin: 'cordova-plugin-zip',
  pluginRef: 'zip',
  repo: 'https://github.com/MobileChromeApps/cordova-plugin-zip',
})
@Injectable()
export class Zip {

  /**
   * Extracts files from a ZIP archive
   * @param sourceZip {string} Source ZIP file
   * @param destUrl {string} Destination folder
   * @param onProgress {Function} optional callback to be called on progress update
   * @returns {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 4
  })
  unzip(sourceZip: string, destUrl: string, onProgress?: Function): Promise<number> {return; }

}
