import {Plugin, Cordova} from './plugin';

/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```js
 * import {AppVersion} from 'ionic-native';
 *
 *
 *  AppVersion.getAppName();
 *  AppVersion.getPackageName();
 *  AppVersion.getVersionCode();
 *  AppVersion.getVersionNumber();
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-app-version',
  pluginRef: 'cordova.getAppVersion',
  repo: 'https://github.com/whiteoctober/cordova-plugin-app-version',
  platforms: ['Android', 'iOS']
})
export class AppVersion {
  /**
   * Returns the name of the app
   * @returns {Promise}
   */
  @Cordova()
  static getAppName(): Promise<any> { return; }

  /**
   * Returns the package name of the app
   * @returns {Promise}
   */
  @Cordova()
  static getPackageName(): Promise<any> { return; }

  /**
   * Returns the build identifier of the app
   * @returns {Promise}
   */
  @Cordova()
  static getVersionCode(): Promise<any> { return; }

  /**
   * Returns the version of the app
   * @returns {Promise}
   */
  @Cordova()
  static getVersionNumber(): Promise<any> { return; }

}
