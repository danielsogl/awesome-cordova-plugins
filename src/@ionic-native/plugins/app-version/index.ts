import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';



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
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class AppVersion extends IonicNativePlugin {

  /**
   * Returns the name of the app
   * @returns {Promise<string>}
   */
  @Cordova()
  getAppName(): Promise<string> { return; }

  /**
   * Returns the package name of the app
   * @returns {Promise<string>}
   */
  @Cordova()
  getPackageName(): Promise<string> { return; }

  /**
   * Returns the build identifier of the app
   * @returns {Promise<string>}
   */
  @Cordova()
  getVersionCode(): Promise<string> { return; }

  /**
   * Returns the version of the app
   * @returns {Promise<string>}
   */
  @Cordova()
  getVersionNumber(): Promise<string> { return; }

}
