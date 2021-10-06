import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface StringMap {
  [s: string]: string;
}

/**
 * @name App Center Analytics
 * @description
 * App Center Analytics helps you understand user behavior and customer engagement to improve your app.
 * The SDK automatically captures session count and device properties like model, OS version, etc.
 * You can define your own custom events to measure things that matter to you.
 * All the information captured is available in the App Center portal for you to analyze the data.
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova
 * @usage
 * ```typescript
 * import { AppCenterAnalytics } from '@awesome-cordova-plugins/app-center-analytics/ngx';
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
 * @interfaces
 * StringMap
 */
@Plugin({
  pluginName: 'AppCenterAnalytics',
  plugin: 'cordova-plugin-appcenter-analytics',
  pluginRef: 'AppCenter.Analytics',
  repo: 'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class AppCenterAnalytics extends AwesomeCordovaNativePlugin {
  /**
   * Tracks an custom event.
   * You can send up to 200 distinct event names. Also, there is a maximum limit of 256 characters per event name
   * and 64 characters per event property name and event property value.
   *
   * @param  {string} eventName Event name
   * @param  {StringMap} properties Event properties
   * @returns {Promise<void>}
   */
  @Cordova()
  trackEvent(eventName: string, properties: StringMap): Promise<void> {
    return;
  }

  /**
   * Check if App Center Analytics is enabled
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Enable or disable App Center Analytics at runtime
   *
   * @param  {boolean} shouldEnable Set value
   * @returns {Promise<void>}
   */
  @Cordova()
  setEnabled(shouldEnable: boolean): Promise<void> {
    return;
  }
}
