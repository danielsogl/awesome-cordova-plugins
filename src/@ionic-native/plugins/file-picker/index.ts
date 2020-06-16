import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface IOSFilePickerPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * @name iOS File Picker
 * @description
 *
 * Opens the file picker on iOS for the user to select a file, returns a file URI.
 *
 * @usage
 * ```typescript
 * import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
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
 * @interfaces
 * IOSFilePickerPosition
 */
@Plugin({
  pluginName: 'iOS File Picker',
  plugin: 'cordova-plugin-filepicker',
  pluginRef: 'FilePicker',
  repo: 'https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin',
  platforms: ['iOS'],
})
@Injectable()
export class IOSFilePicker extends IonicNativePlugin {
  /**
   * Open a file
   * @params {string | string[]} [utis]
   * @params {IOSFilePickerPosition} [position] Set the position of the rectangle where the file picker should show up.
   * @returns {Promise<string>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  pickFile(utis?: string | string[], position?: IOSFilePickerPosition): Promise<string> {
    return;
  }
}
