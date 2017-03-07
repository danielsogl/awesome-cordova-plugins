import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Unique Device ID
 * @description
 * This plugin produces a unique, cross-install, app-specific device id.
 *
 * @usage
 * ```
 * import { UniqueDeviceID } from '@ionic-native/unique-device-id';
 *
 * constructor(private uniqueDeviceID: UniqueDeviceID) { }
 *
 * ...
 *
 * this.uniqueDeviceID.get()
 *   .then((uuid: any) => console.log(uuid))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'UniqueDeviceID',
  plugin: 'cordova-plugin-uniquedeviceid',
  pluginRef: 'window.plugins.uniqueDeviceID',
  repo: 'https://github.com/Paldom/UniqueDeviceID'
})
@Injectable()
export class UniqueDeviceID {

  /**
   * Gets a unique, cross-install, app-specific device id.
   * @return {Promise<string>} Returns a promise that resolves when something happens
   */
  @Cordova()
  get(): Promise<string> { return; }

}
