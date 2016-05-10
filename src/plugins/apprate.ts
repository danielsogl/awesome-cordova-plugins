import {Plugin, Cordova, CordovaProperty} from './plugin';

declare var window;

/**
 * @name App Rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * @usage
 * ```js
 * import {AppRate} from 'ionic-native';
 *
 *
 * AppRate.preferences.storeAppURL.ios = '<my_app_id>';
 * AppRate.preferences.storeAppURL.android = 'market://details?id=<package_name>';
 * AppRate.preferences.storeAppURL.blackberry = 'appworld://content/[App Id]/';
 * AppRate.preferences.storeAppURL.windows8 = 'ms-windows-store:Review?name=<the Package Family Name of the application>';
 * AppRate.promptForRating();
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-apprate',
  pluginRef: 'AppRate',
  repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
  platforms: ['Android', 'iOS']
})
export class AppRate {

  /**
   * Rating dialog preferences
   *
   * | Option                       | Type       | Default | Description                                                                            |
   * |------------------------------|------------|---------|----------------------------------------------------------------------------------------|
   * | useLanguage                  | `String`   | null    | custom BCP 47 language tag                                                             |
   * | displayAppName               | `String`   | ''      | custom application title                                                               |
   * | promptAgainForEachNewVersion | `Boolean`  | true    | show dialog again when application version will be updated                             |
   * | usesUntilPrompt              | `Integer`  | 3       | count of runs of application before dialog will be displayed                           |
   * | openStoreInApp               | `Boolean`  | false   | leave app or no when application page opened in app store (now supported only for iOS) |
   * | useCustomRateDialog          | `Boolean`  | false   | use custom view for rate dialog                                                        |
   * | callbacks.onButtonClicked    | `Function` | null    | call back function. called when user clicked on rate-dialog buttons                    |
   * | callbacks.onRateDialogShow   | `Function` | null    | call back function. called when rate-dialog showing                                    |
   * | storeAppURL.ios              | `String`   | null    | application id in AppStore                                                             |
   * | storeAppURL.android          | `String`   | null    | application URL in GooglePlay                                                          |
   * | storeAppURL.blackberry       | `String`   | null    | application URL in AppWorld                                                            |
   * | storeAppURL.windows8         | `String`   | null    | application URL in WindowsStore                                                        |
   * | customLocale                 | `Object`   | null    | custom locale object                                                                   |
   * @type {{}}
   */
  @CordovaProperty
  static get preferences() { return window.AppRate.preferences; }

  /**
   * Prompts the user for rating
   *
   * @param {boolean} immediately  Show the rating prompt immediately.
   */
  @Cordova()
  static promptForRating(immediately: boolean): void {};

}
