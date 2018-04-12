import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name iOS File Picker
 * @description
 *
 * Opens the file picker on iOS for the user to select a file, returns a file URI.
 *
 * @usage
 * ```typescript
 * import { IOSFilePicker } from '@ionic-native/file-picker';
 *
 * constructor(private filePicker: IOSFilePicker) { }
 *
 * ...
 *
 * this.filePicker.pickFile()
 *   .then(uri => console.log(uri))
 *   .catch(err => console.log('Error', err));
 *
 * ```
 */
@Plugin({
  pluginName: 'iOS File Picker',
  plugin: 'cordova-plugin-filepicker',
  pluginRef: 'FilePicker',
  repo: 'https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin',
  platforms: ['iOS']
})
@Injectable()
export class IOSFilePicker extends IonicNativePlugin {
  /**
   * Open a file
   * @returns {Promise<string>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  pickFile(utis?: string | string[]): Promise<string> {
    return;
  }
}
