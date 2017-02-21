import { Plugin, Cordova } from './plugin';

/**
 * @name BrowserTab
 * @description
 * This plugin opens a new tab in the system prefered browser
 *
 * @usage
 * ```
 * import { BrowserTab } from 'ionic-native';
 *
 * const URL = 'http://ionicframework.com/docs/'
 *
 * BrowserTab.isAvailable()
 *   .then((result) => {
 *     console.log('BrowserTab is available');
 *
 *     BrowserTab.openUrl(URL).catch((error) => { console.log(error); });
 *     
 *   }).catch((error) => {
 *     console.log('BrowserTab is not available');
 *   });
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'BrowserTab',
  plugin: 'cordova-plugin-browsertab', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.browsertab', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/google/cordova-plugin-browsertab', // the github repository URL for the plugin
})
export class BrowserTab {

  /**
   * This function test if browserTab is available or not
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static isAvailable(): Promise<any> { return; }

  /**
   * This function opens a new tab in the system default browser
   * @param url {string} URL to open
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static openUrl(url: string): Promise<any> { return; }

  /**
   * This function closes a tab
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static close(): Promise<any> { return; }

}
