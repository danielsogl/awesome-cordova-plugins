import {Plugin, Cordova} from './plugin';

/**
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](ttps://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * ```
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
  static getAppName () {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Returns the package name of the app
   * @returns {Promise}
   */
  @Cordova()
  static getPackageName () {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Returns the build identifier of the app
   * @returns {Promise}
   */
  @Cordova()
  static getVersionCode () {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Returns the version of the app
   * @returns {Promise}
   */
  @Cordova()
  static getVersionNumber() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

}
