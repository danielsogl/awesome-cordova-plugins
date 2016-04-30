import {Plugin, Cordova} from './plugin';

/**
 * @name App Availability
 * @description
 * This plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.
 *
 * Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the [AppAvailability plugin docs](https://github.com/ohh2ahh/AppAvailability).
 *
 * @usage
 * ```js
 * import {AppAvailability} from 'ionic-native';
 *
 *
 * var app;
 *
 * if(device.platform === 'iOS') {
 *   app = 'twitter://';
 * }else if(device.platform === 'Android'){
 *   app = 'com.twitter.android';
 * }
 *
 * AppAvailability.check(app)
 *   .then(
 *     yes => console.log(app + " is available"),
 *     no => console.log(app + " is NOT available")
 *   );
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-appavailability',
  pluginRef: 'appAvailability',
  repo: 'https://github.com/ohh2ahh/AppAvailability',
  platforms: ['Android', 'iOS']
})
export class AppAvailability {

  /**
   * Checks if an app is available on device
   * @param app Package name on android, or URI scheme on iOS
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static check(app: string): Promise<boolean> { return; }

}
