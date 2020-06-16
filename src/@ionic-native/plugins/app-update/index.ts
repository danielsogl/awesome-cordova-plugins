import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface AppUpdateOptions {
  authType?: string;
  username?: string;
  password?: string;
  skipPromptDialog?: boolean;
  skipProgressDialog?: boolean;
}

/**
 * @name App Update
 * @description
 * This plugin does self-update for android
 *
 * @usage
 *
 * You should first host an XML file on your server with the following data in it:
 * ```xml
 * <update>
 *     <version>302048</version>
 *     <name>APK Name</name>
 *     <url>https://your-remote-api.com/YourApp.apk</url>
 * </update>
 * ```
 *
 * Then use the following code:
 *
 * ```typescript
 * import { AppUpdate } from '@ionic-native/app-update/ngx';
 *
 * constructor(private appUpdate: AppUpdate) {
 *
 *    const updateUrl = 'https://your-remote-api.com/update.xml';
 *    this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });
 *
 * }
 * ```
 *
 * The plugin will compare the app version and update it automatically if the API has a newer version to install.
 * @interfaces
 * AppUpdateOptions
 */
@Plugin({
  pluginName: 'AppUpdate',
  plugin: 'cordova-plugin-app-update',
  pluginRef: 'AppUpdate',
  repo: 'https://github.com/vaenow/cordova-plugin-app-update',
  platforms: ['Android'],
})
@Injectable()
export class AppUpdate extends IonicNativePlugin {
  /**
   * Check and update
   * @param {string} updateUrl update api url
   * @param {AppUpdateOptions} [options] options
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  checkAppUpdate(updateUrl: string, options?: AppUpdateOptions): Promise<any> {
    return;
  }
}
