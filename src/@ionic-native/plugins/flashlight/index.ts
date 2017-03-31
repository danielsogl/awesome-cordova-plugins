import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

/**
 * @name Flashlight
 * @description This plugin allows you to switch the flashlight / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Flashlight } from '@ionic-native/flashlight';
 *
 * constructor(private flashlight: Flashlight) { }
 *
 * ...
 *
 * this.flashlight.switchOn();
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'Flashlight',
  plugin: 'cordova-plugin-flashlight',
  pluginRef: 'window.plugins.flashlight',
  repo: 'https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
@Injectable()
export class Flashlight {

  /**
   * Checks if the flashlight is available
   * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
   */
  @Cordova()
  available(): Promise<boolean> { return; }

  /**
   * Switches the flashlight on
   * @returns {Promise<boolean>}
   */
  @Cordova()
  switchOn(): Promise<boolean> { return; }

  /**
   * Switches the flashlight off
   * @returns {Promise<boolean>}
   */
  @Cordova()
  switchOff(): Promise<boolean> { return; }

  /**
   * Toggles the flashlight
   * @returns {Promise<any>}
   */
  @Cordova()
  toggle(): Promise<any> { return; }


  /**
   * Checks if the flashlight is turned on.
   * @returns {boolean}
   */
  @Cordova({
    sync: true
  })
  isSwitchedOn(): boolean { return; }

}
