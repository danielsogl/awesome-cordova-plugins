import { Plugin, Cordova } from './plugin';

/**
 * @name UniqueDeviceID
 * @description
 * This plugin produces a unique, cross-install, app-specific device id.
 *
 * @usage
 * ```
 * import { UniqueDeviceID } from 'ionic-native';
 *
 * UniqueDeviceID.get()
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
export class UniqueDeviceID {

  /**
   * Gets a unique, cross-install, app-specific device id.
   * @return {Promise<string>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static get(): Promise<string> { return; }

}
