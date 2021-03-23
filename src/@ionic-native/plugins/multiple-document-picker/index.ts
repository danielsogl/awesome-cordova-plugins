/**
 * This is a wrapper for MultipleDocumentsPicker plugin
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Multiple Documents Picker
 * @description
 * This plugin allows users to pick multiple documents/images at once
 *
 * @usage
 * ```typescript
 * import { MultipleDocumentsPicker } from '@ionic-native/multiple-document-picker/ngx';
 *
 *
 * constructor(private multipleDocumentsPicker: MultipleDocumentsPicker) { }
 *
 * ...
 *
 *
 * this.multipleDocumentsPicker.pick(1)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'MultipleDocumentsPicker',
  plugin: 'cordova-plugin-multiple-documents-picker',
  pluginRef: 'multipleDocumentsPicker',
  repo: 'https://github.com/akeotech/cordova-plugin-multiple-documents-picker',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class MultipleDocumentsPicker extends IonicNativePlugin {
  /**
   * This function allow user to show native file picker
   * @param type {number} To pick type of files: for images send 1, for all files send 2
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  pick(type: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
