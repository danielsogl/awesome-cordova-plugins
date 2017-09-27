import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface HoteCodePushOptions {

}

/**
 * @name Hot Code Push
 * @description
 * This plugin provides functionality to perform automatic updates of the web based content in your application.
 * Basically, everything that is stored in www folder of your Cordova project can be updated using this plugin.
 *
 * To run this plugin you have to install the cordova-hot-code-push-cli. Follow the official documentation: https://github.com/nordnet/cordova-hot-code-push/wiki
 *
 * @usage
 * ```typescript
 * import { HotCodePush } from '@ionic-native/hot-code-push';
 *
 *
 * constructor(private hotCodePush: HotCodePush) { }
 *
 * ...
 *
 *
 * this.hotCodePush.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * HoteCodePushOptions
 */
@Plugin({
  pluginName: 'HotCodePush',
  plugin: 'cordova-hot-code-push-plugin',
  pluginRef: 'chcp',
  repo: 'https://github.com/nordnet/cordova-hot-code-push',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class HotCodePush extends IonicNativePlugin {

  /**
  * DEPRECATED! WILL BE REMOVED EVENTUALLY!
  *
  * If you want to set config-url - use chcp.fetchUpdate(callback, options).
  * If you want to set auto-download/auto-install preference - do it in config.xml instead of this method.
  *
  * Set plugin options.
  * Options are send to the native side.
  * As soon as they are processed - callback is called.
  *
  * @param options {HoteCodePushOptions} options to set
  */
  @Cordova({ sync: true })
  configure(options: HoteCodePushOptions) { return; }

  /**
  * Show dialog with the request to update application through the Store (App Store or Google Play).
  * For that purpose you can use any other cordova library, this is just a small helper method.
  *
  * @param message {string} message to show in the dialog
  */
  @Cordova({ sync: true })
  requestApplicationUpdate(message: string) { return; }

  /**
  * Check if any new content is available on the server and download it.
  * Usually this is done automatically by the plugin, but can be triggered at any time from the web page.
  *
  * @param options {HoteCodePushOptions} additional options, such as "config-url" and additional http headers.
  */
  @Cordova({ sync: true })
  fetchUpdate(options: HoteCodePushOptions) { return; }

  /**
  * Install update if there is anything to install.
  */
  @Cordova({ sync: true })
  installUpdate() { return; }

  /**
  * Check if update was loaded and ready to be installed.
  * If update was loaded and can be installed - "data" property of the callback will contain the name of the current version and the name of the new
  * version.
  * If not - "error" will contain code chcp.error.NOTHING_TO_INSTALL.
  *
  */
  @Cordova({ sync: true })
  isUpdateAvailableForInstallation() { return; }

  /**
  * Get information about the current version like current release version, app build version and so on.
  * The "data" property of the callback will contain all the information.
  *
  */
  @Cordova({ sync: true })
  getVersionInfo() { return; }

}
