import {Plugin, Cordova} from './plugin';

/**
 * @name AppVersion
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * ```shell
 * cordova plugin add cordova-plugin-app-version
 * ````
 *
 * @usage
 * ```js
 *  AppVersion.getAppName();
 *  AppVersion.getPackageName();
 *  AppVersion.getVersionCode();
 *  AppVersion.getVersionNumber();
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-app-version',
  pluginRef: 'cordova.getAppVersion'
})
export class AppVersion {
  /**
   * Returns the name of the app
   * @returns {Promise}
   */
  @Cordova()
  static getAppName(): Promise<any> { return }

  /**
   * Returns the package name of the app
   * @returns {Promise}
   */
  @Cordova()
  static getPackageName(): Promise<any> { return }

  /**
   * Returns the build identifier of the app
   * @returns {Promise}
   */
  @Cordova()
  static getVersionCode(): Promise<any> { return }

  /**
   * Returns the version of the app
   * @returns {Promise}
   */
  @Cordova()
  static getVersionNumber(): Promise<any> { return }

}
