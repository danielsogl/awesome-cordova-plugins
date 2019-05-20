import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Android FCM
 * @description
 * This plugin wraps Android FCM Cordova plugin for Android
 *
 * @usage
 * ```typescript
 * import { AndroidFcm } from '@ionic-native/android-fcm';
 *
 *
 * constructor(private androidfcm: AndroidFcm) { }
 *
 * ...
 * ```
 */
@Plugin({
  pluginName: 'AndroidFcm',
  plugin: 'cordova-plugin-android-fcm',
  pluginRef: 'androidfcm',
  repo: 'https://github.com/ashwindmk/cordova-plugin-android-fcm',
  platforms: ['Android']
})
@Injectable()
export class AndroidFcm extends IonicNativePlugin {
  /**
   * This function updates FCM token to native SDKs or servers
   * @return {Promise<any>}
   */
  @Cordova()
  updateToken(): Promise<any> {
    return;
  }

  /**
   * This function returns FCM token to native SDKs or servers
   * @param {any} success
   * @param {any} error
   * @return {Promise<any>}
   */
  @Cordova()
  getToken(success: any, error: any): Promise<any> {
    return;
  }
}
