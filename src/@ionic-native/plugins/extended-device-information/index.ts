import { Injectable } from '@angular/core';
import { CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Extended Device Information
 * @description
 * Retrieves additional device information from the Device Hardware
 *  - memory
 *  - cpumhz
 *  - totalstorage
 *  - freestorage
 *
 * @usage
 * ```typescript
 * import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information/ngx';
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
  platforms: ['Android'],
})
@Injectable()
export class ExtendedDeviceInformation extends IonicNativePlugin {
  /**
   * Get the device's memory size
   */
  @CordovaProperty()
  memory: number;

  /**
   * Get the device's CPU mhz
   */
  @CordovaProperty()
  cpumhz: string;

  /**
   * Get the total storage
   */
  @CordovaProperty()
  totalstorage: string;

  /**
   * Get the total storage
   */
  @CordovaProperty()
  freestorage: number;
}
