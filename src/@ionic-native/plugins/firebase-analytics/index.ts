import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @beta
 * @name Firebase Analytics
 * @description
 * Cordova plugin for Firebase Analytics
 *
 * Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
 *
 * NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.
 *
 * @usage
 * ```typescript
 * import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
 *
 *
 * constructor(private firebaseAnalytics: FirebaseAnalytics) { }
 *
 * ...
 *
 * this.firebaseAnalytics.logEvent('page_view', {page: "dashboard"})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseAnalytics',
  plugin: 'cordova-plugin-firebase-analytics',
  pluginRef: 'cordova.plugins.firebase.analytics',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-analytics',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseAnalytics extends IonicNativePlugin {
  /**
   * Logs an app event.
   * Be aware of automatically collected events.
   * @param {string} name The name of the event
   * @param {any} params Some param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ sync: true })
  logEvent(name: string, params: any): Promise<any> {
    return;
  }

  /**
   * Sets the user ID property.
   * This feature must be used in accordance with Google's Privacy Policy.
   * @param {string} id The user ID
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ sync: true })
  setUserId(id: string): Promise<any> {
    return;
  }

  /**
   * This feature must be used in accordance with Google's Privacy Policy.
   * Be aware of automatically collected user properties.
   * @param {string} name The property name
   * @param {string} value The property value
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ sync: true })
  setUserProperty(name: string, value: string): Promise<any> {
    return;
  }

  /**
   * Sets whether analytics collection is enabled for this app on this device.
   * @param {boolean} enabled
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ sync: true })
  setEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets the current screen name, which specifies the current visual context in your app.
   * This helps identify the areas in your app where users spend their time and how they interact with your app.
   * @param {string} name The name of the screen
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ sync: true })
  setCurrentScreen(name: string): Promise<any> {
    return;
  }

  /**
   * Clears all analytics data for this instance from the device and resets the app instance ID
   * @return {Promise<void>} Returns a promise
   */
  @Cordova({ sync: true })
  resetAnalyticsData(): Promise<void> {
    return;
  }
}
