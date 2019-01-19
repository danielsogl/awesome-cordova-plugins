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
  plugin: 'cordova-plugin-advance-filepicker',
  pluginRef: 'AdvanceFilePicker',
  repo: 'https://github.com/ankurkapil8/AdvanceFilePicker-Phonegap-iOS-Plugin',
  platforms: ['iOS']
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
