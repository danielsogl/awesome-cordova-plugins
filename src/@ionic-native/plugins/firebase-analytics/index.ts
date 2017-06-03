import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @beta
 * @name Firebase Analytics
 * @description
 * Cordova plugin for Firebase Analytics
 *
 * Go yo firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
 *
 * NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.
 *
 * @usage
 * ```typescript
 * import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
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
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseAnalytics extends IonicNativePlugin {

  /**
   * Logs an app event.
   * Be aware of automatically collected events.
   * @param name {string} The name of the event
   * @param params {any} Some param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  logEvent(name: string, params: any): Promise<any> { return; }

  /**
   * Sets the user ID property.
   * This feature must be used in accordance with Google's Privacy Policy.
   * @param id {string} THe user ID
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setUserId(id: string): Promise<any> { return; }

  /**
   * This feature must be used in accordance with Google's Privacy Policy.
   * Be aware of automatically collected user properties.
   * @param name {string} The property name
   * @param value {string} The property value
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setUserProperty(name: string, value: string): Promise<any> { return; }

  /**
   * Sets whether analytics collection is enabled for this app on this device.
   * @param enabled {boolean}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setEnabled(enabled: boolean): Promise<any> { return; }

  /**
   * Sets the current screen name, which specifies the current visual context in your app.
   * This helps identify the areas in your app where users spend their time and how they interact with your app.
   * @param name {string} The name of the screen
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setCurrentScreen(name: string): Promise<any> { return; }

}
