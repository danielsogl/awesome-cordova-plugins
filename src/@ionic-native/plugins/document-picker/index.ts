
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * Filter options
 */
export enum DocumentPickerOptions {
  /** Show only PDF files */
  PDF = 'pdf',
  /** show only image files */
  IMAGE = 'image',
  /** show all files */
  ALL = 'all'
}


/**
 * @name DocumentPicker
 * @description
 *
 * Opens the file picker on iOS for the user to select a file, returns a file URI.
 * Allows the user to upload files from icloud
 *
 * @usage
 * ```typescript
 * import { DocumentPicker, DocumentPickerOptions } from '@ionic-native/document-picker';
 *
 * constructor(private docPicker: DocumentPicker) { }
 *
 * ...
 *
 * this.docPicker.getFile(DocumentPickerOptions.ALL)
 *   .then(uri => console.log(uri))
 *   .catch(e => console.log(e));
 *
 * ```
 */
@Plugin({
  pluginName: 'DocumentPicker',
  plugin: 'cordova-plugin-documentpicker.DocumentPicker',
  pluginRef: 'DocumentPicker',
  repo: 'https://github.com/iampossible/Cordova-DocPicker',
  platforms: ['iOS']
})
@Injectable()
export class DocumentPicker extends IonicNativePlugin {

  /**
   * Open a file
   * @param {DocumentPickerOptions} filters files between 'image', 'pdf' or 'all'
   * @returns {Promise<string>}
   */
  @Cordova()
  getFile(options?: DocumentPickerOptions | string): Promise<string> { return; }

}
