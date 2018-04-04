import {Injectable} from '@angular/core';
import {Plugin, Cordova, IonicNativePlugin} from '@ionic-native/core';


/**
 * @name Uptime
 * @description
 * This plugin return the device uptime, without sleep time.
 *
 * @usage
 * ```typescript
 * import { Uptime } from '@ionic-native/uptime';
 *
 * constructor(private uptime: Uptime) { }
 *
 * ...
 *
 * this.uptime.getUptime()
 *   .then((uptime: any) => console.log(uptime))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Uptime',
  plugin: 'cordova-plugin-uptime', // npm package name, example: cordova-plugin-camera
  pluginRef: 'Uptime', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/s1lviu/cordova-plugin-uptime', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Uptime extends IonicNativePlugin {

  /**
   * This function return system uptime
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getUptime(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}

