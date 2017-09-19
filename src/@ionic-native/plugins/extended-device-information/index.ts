import { Injectable } from '@angular/core';
import { CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Extended Device Information
 * @description
 *
 * @usage
 * ```typescript
 * import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';
 *
 *
 * constructor(private extendedDeviceInformation: ExtendedDeviceInformation) { }
 *
 * ...
 *
 * console.log('The Memory is: ' + this.extendedDeviceInformation.memory);
 * ```
 */
@Plugin({
  pluginName: 'ExtendedDeviceInformation',
  plugin: 'cordova-plugin-extended-device-information',
  pluginRef: 'extended-device-information',
  repo: 'https://github.com/danielehrhardt/cordova-plugin-extended-device-information',
  platforms: ['Android']
})
@Injectable()
export class ExtendedDeviceInformation extends IonicNativePlugin {

  /** Get the device's memory size. */
  @CordovaProperty
  memory: string;

  /** Get the device's CPU mhz. */
  @CordovaProperty
  cpumhz: string;

}
