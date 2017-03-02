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
 *   .then((uuid: any) => doSomething(uuid))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'UniqueDeviceID',
  plugin: 'cordova-plugin-uniquedeviceid', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.plugins.uniqueDeviceID', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/Paldom/UniqueDeviceID' // the github repository URL for the plugin
})
export class UniqueDeviceID {

  /**
   * Gets a unique, cross-install, app-specific device id.
   * @return {Promise<string>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static get(): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
