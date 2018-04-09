import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Uptime
 * @description
 * This plugin return the device uptime, without sleep time.
 *
 * @usage
 * ```typescript
 * ionic cordova plugin add cordova-plugin-uptime
 * import { Uptime } from '@ionic-native/uptime';
 *
 * constructor(private uptime: Uptime) { }
 *
 * ...
 *
 * this.uptime.getUptime()
 *   .then(uptime => console.log(uptime))
 *   .catch(error => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Uptime',
  plugin: 'cordova-plugin-uptime',
  pluginRef: 'Uptime',
  repo: 'https://github.com/s1lviu/cordova-plugin-uptime',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Uptime extends IonicNativePlugin {
  /**
   * This function return system uptime
   * @return {Promise<string>} Returns a promise that return the uptime in milliseconds
   */
  @Cordova()
  getUptime(): Promise<string> {
    return;
  }
}
