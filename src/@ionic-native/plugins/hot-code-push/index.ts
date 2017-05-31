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
  * @param arg1 {string} Some param to configure something
  * @param arg2 {number} Another param to configure something
  * @return {Promise<any>} Returns a promise that resolves when something happens
  */
  @Cordova()
  configure(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
  * Show dialog with the request to update application through the Store (App Store or Google Play).
  * For that purpose you can use any other cordova library, this is just a small helper method.
  *
  * @param arg1 {string} Some param to configure something
  * @param arg2 {number} Another param to configure something
  * @return {Promise<any>} Returns a promise that resolves when something happens
  */
  @Cordova()
  requestApplicationUpdate(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
  * Check if any new content is available on the server and download it.
  * Usually this is done automatically by the plugin, but can be triggered at any time from the web page.
  *
  * @param arg1 {string} Some param to configure something
  * @param arg2 {number} Another param to configure something
  * @return {Promise<any>} Returns a promise that resolves when something happens
  */
  @Cordova()
  fetchUpdate(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
  * Install update if there is anything to install.
  *
  * @param arg1 {string} Some param to configure something
  * @param arg2 {number} Another param to configure something
  * @return {Promise<any>} Returns a promise that resolves when something happens
  */
  @Cordova()
  installUpdate(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
  * Check if update was loaded and ready to be installed.
  * If update was loaded and can be installed - "data" property of the callback will contain the name of the current version and the name of the new
  * version.
  * If not - "error" will contain code chcp.error.NOTHING_TO_INSTALL.
  *
  * @param arg1 {string} Some param to configure something
  * @param arg2 {number} Another param to configure something
  * @return {Promise<any>} Returns a promise that resolves when something happens
  */
  @Cordova()
  isUpdateAvailableForInstallation(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
  * Get information about the current version like current release version, app build version and so on.
  * The "data" property of the callback will contain all the information.
  *
  * @param arg1 {string} Some param to configure something
  * @param arg2 {number} Another param to configure something
  * @return {Promise<any>} Returns a promise that resolves when something happens
  */
  @Cordova()
  getVersionInfo(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
