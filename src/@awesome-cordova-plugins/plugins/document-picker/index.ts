import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name iOS DocumentPicker
 * @description
 *
 * Opens the file picker on iOS for the user to select a file, returns a file URI.
 * Allows the user to upload files from iCloud
 * @usage
 * ```typescript
 * import { DocumentPicker } from '@awesome-cordova-plugins/document-picker/ngx';
 *
 * constructor(private docPicker: DocumentPicker) { }
 *
 * ...
 *
 * this.docPicker.getFile('all')
 *   .then(uri => console.log(uri))
 *   .catch(e => console.log(e));
 *
 * ```
 */
@Plugin({
  pluginName: 'IOSDocumentPicker',
  plugin: 'cordova-plugin-documentpicker.DocumentPicker',
  pluginRef: 'DocumentPicker',
  repo: 'https://github.com/iampossible/Cordova-DocPicker',
  platforms: ['iOS'],
})
@Injectable()
export class DocumentPicker extends AwesomeCordovaNativePlugin {
  /**
   * Open a file
   *
   * @param {string} [option] files between 'image', 'pdf' or 'all'
   * @returns {Promise<string>}
   */
  @Cordova()
  getFile(option?: string): Promise<string> {
    return;
  }
}
