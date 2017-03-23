import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Browser Tab
 * @description
 * This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically [Custom Tabs](http://developer.android.com/tools/support-library/features.html#custom-tabs) on Android (including the [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) implementation), and [SFSafariViewController](https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/) on iOS.
 *
 * @usage
 * ```
 * import { BrowserTab } from '@ionic-native/browser-tab';
 *
 * constructor(private browserTab: BrowserTab) {
 *
 *   browserTab.isAvailable()
 *     .then((isAvailable: boolean) => {
 *
 *       if (isAvailable) {
 *
 *         browserTab.openUrl('https://ionic.io');
 *
 *       } else {
 *
 *         // open URL with InAppBrowser instead or SafariViewController
 *
 *       }
 *
 *     });
 *
 *
 * }
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
@Injectable()
export class BrowserTab {

  /**
   * Check if BrowserTab option is available
   * @return {Promise<any>} Returns a promise that resolves when check is successful and returns true or false
   */
  @Cordova()
  isAvailable(): Promise<any> { return; }

  /**
   * Opens the provided URL using a browser tab
   * @param {string} url  The URL you want to open
   * @return {Promise<any>} Returns a promise that resolves when check open was successful
   */
  @Cordova()
  openUrl(url: string): Promise<any> { return; }

  /**
   * Closes browser tab
   * @return {Promise<any>} Returns a promise that resolves when close was finished
   */
  @Cordova()
  close(): Promise<any> { return; }
}
