import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name Unique Device ID
 * @description
 * This plugin produces a unique, cross-install, app-specific device id.
 *
 * @usage
 * ```typescript
 * import { UniqueDeviceID } from '@awesome-cordova-plugins/unique-device-id/ngx';
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
  repo: 'https://github.com/Paldom/UniqueDeviceID',
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS', 'Windows Phone 8'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class UniqueDeviceID extends AwesomeCordovaNativePlugin {
  /**
   * Gets a unique, cross-install, app-specific device id.
   * @return {Promise<string>} Returns a promise that resolves when something happens
   */
  @Cordova()
  get(): Promise<string> {
    return;
  }
}
