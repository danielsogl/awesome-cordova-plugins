import {Plugin, Cordova} from './plugin';

/**
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: cordova-plugin-appversion. For more info, please see the [cordova-plugin-version docs](ttps://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * ```
 * ionic plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
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
  name: 'AppVersion',
  plugin: 'cordova-plugin-appversion',
  pluginRef: 'cordova.getAppVersion'
})
export class AppVersion {

  /**
   * Returns the name of the app
   */
  @Cordova
  static getAppName () : string {
    return;
  }

  /**
   * Returns the package name of the app
   */
  @Cordova
  static getPackageName () : string {
    return;
  }

  /**
   * Returns the build identifier of the app
   */
  @Cordova
  static getVersionCode () : string {
    return;
  }

  /**
   * Returns the version of the app
   */
  @Cordova
  static getVersionNumber () : string {
    return;
  }

}
