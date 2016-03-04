import {Plugin, Cordova, CordovaProperty} from './plugin';

declare var window;

/**
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [cordova-plugin-apprate docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * ```
 * ionic plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
 * ````
 *
 * @usage
 * ```js
 * AppRate.preferences.storeAppURL.ios = '<my_app_id>';
 * AppRate.preferences.storeAppURL.android = 'market://details?id=<package_name>';
 * AppRate.preferences.storeAppURL.blackberry = 'appworld://content/[App Id]/';
 * AppRate.preferences.storeAppURL.windows8 = 'ms-windows-store:Review?name=<the Package Family Name of the application>';
 * AppRate.prompt();
 * ```
 */
@Plugin({
  name: 'AppRate',
  plugin: 'cordova-plugin-apprate',
  pluginRef: 'AppRate'
})
export class AppRate {

  /**
   * Rating dialog preferences
   *
   * useLanguage {String} null - custom BCP 47 language tag
   * displayAppName {String} '' - custom application title
   * promptAgainForEachNewVersion {Boolean} true - show dialog again when application version will be updated
   * usesUntilPrompt {Integer} 3 - count of runs of application before dialog will be displayed
   * openStoreInApp {Boolean} false - leave app or no when application page opened in app store (now supported only for iOS)
   * useCustomRateDialog {Boolean} false - use custom view for rate dialog
   * callbacks.onButtonClicked {Function} null - call back function. called when user clicked on rate-dialog buttons
   * callbacks.onRateDialogShow {Function} null - call back function. called when rate-dialog showing
   * storeAppURL.ios {String} null - application id in AppStore
   * storeAppURL.android {String} null - application URL in GooglePlay
   * storeAppURL.blackberry {String} null - application URL in AppWorld
   * storeAppURL.windows8 {String} null - application URL in WindowsStore
   * customLocale {Object} null - custom locale object
   * @type {{}}
   */
  @CordovaProperty
  static get preferences(){
    return window.AppRate.preferences;
  }

  /**
   * Prompts the user for rating
   */
  @Cordova()
  static prompt () : void {};

}
