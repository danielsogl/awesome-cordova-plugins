import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';


/**
 * @beta
 * @name Backlight
 * @description
 * This plugin adds turning on/off the device backlight.
 *
 * @usage
 * ```
 * import { Backlight } from '@ionic-native/backlight';
 *
 * constructor(private backlight: Backlight) { }
 *
 * ...
 *
 * // Turn backlight on
 * this.backlight.on().then(() => console.log('backlight on'));
 *
 * // Turn backlight off
 * this.backlight.off().then(() => console.log('backlight off'));
 *
 * ```
 */
@Plugin({
  pluginName: 'Backlight',
  plugin: 'cordova-plugin-backlight',
  pluginRef: 'cordova.plugins.Backlight',
  repo: 'https://github.com/mebibou/cordova-plugin-backlight',
  platforms: ['Android']
})
@Injectable()
export class Backlight {

  /**
   * This function turns backlight on
   * @return {Promise<any>} Returns a promise that resolves when the backlight is on
   */
  @Cordova()
  on(): Promise<any> { return; }

  /**
   * This function turns backlight off
   * @return {Promise<any>} Returns a promise that resolves when the backlight is off
   */
  @Cordova()
  off(): Promise<any> { return; }

}
