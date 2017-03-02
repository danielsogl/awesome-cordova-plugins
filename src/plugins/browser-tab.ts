import { Plugin, Cordova } from './plugin';

/**
 * @name BrowserTab
 * @description
 * This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically [Custom Tabs](http://developer.android.com/tools/support-library/features.html#custom-tabs) on Android (including the [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) implementation), and [SFSafariViewController](https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/) on iOS.
 *
 * @usage
 * ```
 * import { BrowserTab } from 'ionic-native';
 *
 * BrowserTab.isAvailable()
 *   .then((isAvailable: boolean) => {
 *
 *     if (isAvailable) {
 *
 *       BrowserTab.openUrl('https://ionic.io');
 *
 *     } else {
 *       // open url with InAppBrowser instead
 *     }
 *
 *   });
 *
 * ```
 */
@Plugin({
  pluginName: 'BrowserTab',
  plugin: 'cordova-plugin-browsertab',
  pluginRef: 'cordova.plugins.browsertab',
  repo: 'https://github.com/google/cordova-plugin-browsertab',
  platforms: ['Android', 'iOS']
})
export class BrowserTab {

  /**
   * Check if BrowserTab option is available
   * @return {Promise<any>} Returns a promise that resolves when check is successful and returns true or false
   */
  @Cordova()
  static isAvailable(): Promise<any> { return; }

  /**
   * Opens the provided URL using a browser tab
   * @param {string} url  The URL you want to open
   * @return {Promise<any>} Returns a promise that resolves when check open was successful
   */
  @Cordova()
  static openUrl(url: string): Promise<any> { return; }

  /**
   * Closes browser tab
   * @return {Promise<any>} Returns a promise that resolves when close was finished
   */
  @Cordova()
  static close(): Promise<any> { return; }
}
