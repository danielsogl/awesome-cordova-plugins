import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Pin Check 
 * @description
 * This plugin is for use with Apache Cordova and allows your application to check whether pin/keyguard or passcode is setup on iOS and Android phones.
 *
 * Requires Cordova plugin: cordova-plugin-pincheck. For more info, please see the [PinCheck plugin docs](https://github.com/ohh2ahh/AppAvailability).
 *
 * @usage
 * ```typescript
 * import { PinCheck } from '@ionic-native/pin-check';
 * import { Platform } from 'ionic-angular';
 *
 * constructor(private pinCheck: PinCheck, private platform: Platform) { }
 *
 * ...
 *
 * this.pinCheck.isPinSetup()
 *   .then(
 *     (success: string) =>  console.log("pin is setup.");,
 *     (error: string) => console.log("pin not setup.");
 *   );
 * ```
 */
@Plugin({
  pluginName: 'PinCheck',
  plugin: 'cordova-plugin-pincheck',
  pluginRef: 'cordova.plugins.PinCheck',
  repo: 'https://github.com/shangyilim/cordova-plugin-pincheck',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class PinCheck extends IonicNativePlugin {
  /**
   *  check whether pin/keyguard or passcode is setup    
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isPinSetup(): Promise<boolean> {
    return;
  }
}
