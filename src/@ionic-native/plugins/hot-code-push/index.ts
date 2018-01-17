import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin, CordovaCheck } from '@ionic-native/core';

declare var chcp: any;

export interface HotCodePushVersion {
  /**
   * Application's version name. This version is visible to the user on the stores.
   */
  appVersion: string;
  /**
   * Application's build version number.
   */
  buildVersion: string;
  /**
   * Version of the web content, that is displayed to the user. Basically, value of the release property from chcp.json file in your local www folder.
   */
  currentWebVersion: string;
  /**
   * Previous web content version. This is a version of our backup. Can be empty, if there were no updates installed.
   */
  previousWebVersion: string;
  /**
   * Version number of the web content, that was loaded by the plugin and ready to be installed. Basically, value of the release property from chcp.json file on your server. Can be empty, if no update is waiting for installation.
   */
  readyToInstallWebVersion: string;
}

export interface HotCodePushUpdate {
  /**
   * Current version installed.
   */
  currentVersion: string;
  /**
   * Available version to replace the current one.
   */
  readyToInstallVersion: string;
}

export interface HotCodePushRequestOptions {
  /**
   * Url of the chcp.json config on the server. Plugin will use this one instead of <config-file url=""> from the config.xml.
   */
  'config-file'?: string;
  /**
   * Additional HTTP headers, that will be added to all requests in update download process, including loading configs and new/changed files.
   */
  'request-headers'?: {[key: string]: any};
}

/**
 * @name Hot Code Push
 * @description
 * HotCodePush plugin for Cordova that supports iOS and Android. This plugin allows you to keep your html, css and js files synced with your server.
 *
 * For more info, please see the detailed wiki https://github.com/nordnet/cordova-hot-code-push/wiki
 *
 * @usage
 * ```typescript
 * import { HotCodePush } from '@ionic-native/hot-code-push';
 *
 * constructor(private hotCodePush: HotCodePush) { }
 *
 * ...
 *
 * hotCodePush.fetchUpdate(options).then(data => { console.log('Update available'); });
 *
 * ```
 */
@Plugin({
  pluginName: 'HotCodePush',
  plugin: 'cordova-hot-code-push',
  pluginRef: 'chcp',
  repo: 'https://github.com/nordnet/cordova-hot-code-push',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class HotCodePush extends IonicNativePlugin {
  /**
   * Show dialog with the request to update application through the Store (App Store or Google Play).
   * @param message {string} Message to show in the dialog
   * @returns {Promise<any>} Resolves when the user is redirected to the store, rejects if the user declines.
   */
  @Cordova()
  requestApplicationUpdate(message: string): Promise<any> { return; }

  /**
   * Download updates from the server-side.
   * @param options {HotCodePushRequestOptions} Additional options to the request. If not set - preferences from config.xml are used.
   * @returns {Promise<any>} Resolves if there is an update available, rejects otherwise.
   */
  @CordovaCheck()
  fetchUpdate(options?: HotCodePushRequestOptions): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      HotCodePush.getPlugin().fetchUpdate((error: any, data: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }, options);
    });
  }

  /**
   * Install update if there is anything to install.
   * @returns {Promise<any>} Resolves when the update is installed.
   */
  @Cordova({
    callbackStyle: 'node'
  })
  installUpdate(): Promise<any> { return; }

  /**
   * Check if update was loaded and ready to be installed.
   * @returns {Promise<HotCodePushUpdate>} Resolves if an update is ready, rejects if there is no update.
   */
  @Cordova({
    callbackStyle: 'node'
  })
  isUpdateAvailableForInstallation(): Promise<HotCodePushUpdate> { return; }

  /**
   * Gets information about the app's versions.
   * @returns {Promise<HotCodePushVersion>} Resolves with the information about the versions.
   */
  @Cordova({
    callbackStyle: 'node'
  })
  getVersionInfo(): Promise<HotCodePushVersion> { return; }
}
