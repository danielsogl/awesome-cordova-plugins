/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface IOSFilePickerPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * @name Advance File Picker
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AdvanceFilePicker } from '@ionic-native/advance-file-picker';
 *
 *
 * constructor(private advanceFilePicker: AdvanceFilePicker) { }
 *
 * ...
 *
 *
 * this.advanceFilePicker.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AdvanceFilePicker',
  plugin: 'cordova-plugin-advance-filepicker', // npm package name, example: cordova-plugin-camera
  pluginRef: 'AdvanceFilePicker', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/ankurkapil8/AdvanceFilePicker-Phonegap-iOS-Plugin', // the github repository URL for the plugin
  platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class AdvanceFilePicker extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  pickFile(
    utis?: string | string[],
    position?: IOSFilePickerPosition
  ): Promise<string> {
    return;
  }

}
