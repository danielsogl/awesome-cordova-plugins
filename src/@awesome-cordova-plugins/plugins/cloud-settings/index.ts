import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Cloud Settings
 * @description
 * Stores app settings in cloud storage so if the user re-installs the app or installs it on a different device, the settings will be restored and available in the new installation.
 * @usage
 * ```typescript
 * import { CloudSettings } from '@awesome-cordova-plugins/cloud-settings/ngx';
 *
 *
 * constructor(private cloudSettings: CloudSettings) { }
 *
 * ...
 *
 * this.cloudSettings.exists()
 *   .then((exists: boolean) => console.log("Saved settings exist: " + exists) )
 *
 * this.cloudSettings.load()
 *   .then((settings: any) => this.settings = settings)
 *   .catch((error: any) => console.error(error));
 *
 * this.cloudSettings.save(this.settings)
 *   .then((savedSettings: any) => console.log("Saved settings: " + JSON.stringify(savedSettings)))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'CloudSettings',
  plugin: 'cordova-plugin-cloud-settings',
  pluginRef: 'cordova.plugin.cloudsettings',
  repo: 'https://github.com/dpa99c/cordova-plugin-cloud-settings',
  install: 'ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey',
  installVariables: ['ANDROID_BACKUP_SERVICE_KEY'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class CloudSettings extends AwesomeCordovaNativePlugin {
  /**
   * Indicates if any stored cloud settings currently exist for the current user.
   *
   * @returns {Promise<boolean>} Will be passed a boolean flag which indicates whether an store settings exist for the user.
   */
  @Cordova()
  exists(): Promise<boolean> {
    return;
  }

  /**
   * Saves the settings to cloud backup.
   *
   * @param {object} settings - a JSON structure representing the user settings to save to cloud backup.
   * @param {boolean} [overwrite] - (optional) if true, existing settings will be replaced rather than updated. Defaults to false.
   * If false, existing settings will be merged with the new settings passed to this function.
   * @returns {Promise<any>} Will be passed a single object argument which contains the saved settings as a JSON object.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  save(settings: any, overwrite?: boolean): Promise<any> {
    return;
  }

  /**
   * Loads the current settings.
   *
   * @returns {Promise<any>} Will be passed a single object argument which contains the saved settings as a JSON object.
   */
  @Cordova()
  load(): Promise<any> {
    return;
  }

  /**
   * Registers a function which will be called if/when settings on the device have been updated from the cloud.
   *
   * @param {Function} handler - callback function to invoke when device settings have been updated from the cloud.
   */
  @Cordova({ sync: true })
  onRestore(handler: Function): void {}

  /**
   * Outputs verbose log messages from the native plugin components to the JS console.
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  enableDebug(): Promise<void> {
    return;
  }
}
