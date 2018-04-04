import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name App Center Analytics
 * @description
 * App Center Analytics helps you understand user behavior and customer engagement to improve your app.
 * The SDK automatically captures session count and device properties like model, OS version, etc.
 * You can define your own custom events to measure things that matter to you.
 * All the information captured is available in the App Center portal for you to analyze the data.
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterAnalytics } from '@ionic-native/app-center-analytics';
 *
 *
 * constructor(private appCenterAnalytics: AppCenterAnalytics) { }
 *
 * ...
 *
 * this.appCenterAnalytics.setEnabled(true).then(() => {
 *    this.appCenterAnalytics.trackEvent('My Event', { TEST: 'HELLO_WORLD' }).then(() => {
 *        console.log('Custom event tracked');
 *    });
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'AppCenterAnalytics',
  plugin: 'cordova-plugin-appcenter-analytics',
  pluginRef: 'AppCenter.Analytics',
  repo:
    'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class AppCenterAnalytics extends IonicNativePlugin {
  /**
   * Tracks an custom event
   * @param  {string} eventName Event name
   * @param  {{[s:string]:string}} properties Event properties
   * @returns {Promise<void>}
   */
  @Cordova()
  trackEvent(
    eventName: string,
    properties: { [s: string]: string }
  ): Promise<void> {
    return;
  }

  /**
   * Returns true if anayltics are enabled and false if not
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Enables or disables analytics
   * @param  {boolean} value Set value
   * @returns {Promise<void>}
   */
  @Cordova()
  setEnabled(value: boolean): Promise<void> {
    return;
  }
}
