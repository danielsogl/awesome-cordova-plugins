import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';



/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from '@ionic-native/app-version';
 *
 * constructor(private appVersion: AppVersion) { }
 *
 * ...
 *
 *
 * this.appVersion.getAppName();
 * this.appVersion.getPackageName();
 * this.appVersion.getVersionCode();
 * this.appVersion.getVersionNumber();
 *
 * ```
 */
@Plugin({
  pluginName: 'AppVersion',
  plugin: 'cordova-plugin-app-version',
  pluginRef: 'cordova.getAppVersion',
  repo: 'https://github.com/whiteoctober/cordova-plugin-app-version',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class AppVersion {

  /**
   * Returns the name of the app
   * @returns {Promise<any>}
   */
  @Cordova()
  getAppName(): Promise<any> { return; }

  /**
   * Returns the package name of the app
   * @returns {Promise<any>}
   */
  @Cordova()
  getPackageName(): Promise<any> { return; }

  /**
   * Returns the build identifier of the app
   * @returns {Promise<any>}
   */
  @Cordova()
  getVersionCode(): Promise<any> { return; }

  /**
   * Returns the version of the app
   * @returns {Promise<any>}
   */
  @Cordova()
  getVersionNumber(): Promise<any> { return; }

}
