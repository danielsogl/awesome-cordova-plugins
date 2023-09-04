/* eslint-disable jsdoc/require-returns-check */
/* eslint-disable jsdoc/check-tag-names */

import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name FileChooser Plugin
 * @description
 * Cordova FileChooser Plugin
 * @usage
 * ```typescript
 * import { FileChooser } from '@awesome-cordova-plugins/file-chooser/ngx';
 *
 *
 * constructor(private fileChooser: FileChooser) { }
 *
 * ...
 *
 *
 * this.fileChooser.open()
 *   .then(() => console.log('Success'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FileChooser',
  plugin: 'cordova-plugin-filechooser',
  pluginRef: 'fileChooser',
  repo: 'https://github.com/ihadeed/cordova-filechooser',
  platforms: ['Android'],
})
@Injectable()
export class FileChooser extends AwesomeCordovaNativePlugin {
  /**
   * Launches a chooser dialog. The filter param allows filtering a the mime type
   * { "mime": "application/pdf" }
   *
   * @param {string} [filter] Filter allowing filter by a mime type (text/plain, image/png, image/jpeg, audio/wav etc.)
   * @returns {Promise<string>} URI of the selected file
   */
  @Cordova()
  open(filter?: string): Promise<string> {
    return;
  }
}
