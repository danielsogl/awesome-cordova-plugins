import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name App Center Push
 * @description
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/push/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterPush } from '@ionic-native/app-center-push';
 *
 *
 * constructor(private appCenterPush: AppCenterPush) { }
 *
 * ...
 *
 * this.appCenterPush.setEnabled(true).then(() => {
 *    this.appCenterPush.addEventListener('My Event').subscribe(pushNotification => {
 *        console.log('Recived push notification', pushNotification);
 *    });
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'AppCenterPush',
  plugin: 'cordova-plugin-appcenter-push',
  pluginRef: 'AppCenter.Push',
  repo:
    'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class AppCenterPush extends IonicNativePlugin {
  /**
   * Subscribe to an event
   * @param  {string} eventName Event name
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'removeEventListener'
  })
  addEventListener(eventName: string): Observable<any> {
    return;
  }
  /**
   * Check if App Center Push is enabled
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Enable or disable App Center Push at runtime
   * @param  {boolean} shouldEnable Set value
   * @returns {Promise<void>}
   */
  @Cordova()
  setEnabled(shouldEnable: boolean): Promise<void> {
    return;
  }
}
