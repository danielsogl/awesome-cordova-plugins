import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name App Version
 * @premier app-version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from '@ionic-native/app-version/ngx';
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
  platforms: ['Android', 'iOS', 'Windows'],
})
@Injectable()
export class AppVersion extends IonicNativePlugin {
  /**
   * Returns the name of the app, e.g.: "My Awesome App"
   * @returns {Promise<string>}
   */
  @Cordova()
  getAppName(): Promise<string> {
    return;
  }

  /**
   * Returns the package name of the app, e.g.: "com.example.myawesomeapp"
   * @returns {Promise<string>}
   */
  @Cordova()
  getPackageName(): Promise<string> {
    return;
  }

  /**
   * Returns the build identifier of the app.
   * In iOS a string with the build version like "1.6095"
   * In Android a number generated from the version string, like 10203 for version "1.2.3"
   * @returns {Promise<string | number>}
   */
  @Cordova()
  getVersionCode(): Promise<string | number> {
    return;
  }

  /**
   * Returns the version of the app, e.g.: "1.2.3"
   * @returns {Promise<string>}
   */
  @Cordova()
  getVersionNumber(): Promise<string> {
    return;
  }
}
