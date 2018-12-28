import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Gao De Location
 * @description
 * Get the current location
 *
 * @usage
 * ```typescript
 * import { GaoDeLocation } from '@ionic-native/gao-de-location';
 *
 *
 * constructor(private gaoDeLocation: GaoDeLocation) { }
 *
 * ...
 *
 *
 * this.gaoDeLocation.getCurrentPosition()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'GaoDeLocation',
  plugin: 'cordova-plugin-gaodelocation-chenyu', // npm package name, example: cordova-plugin-camera
  pluginRef: 'GaoDe', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['ANDROID_API_KEY', 'IOS_API_KEY'], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class GaoDeLocation extends IonicNativePlugin {
  /**
   * Get the current location
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova()
  getCurrentPosition(): Promise<any> {
    return;
  }

}
