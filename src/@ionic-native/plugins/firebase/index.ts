import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Firebase
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).
 *
 * @usage
 * ```
 * import { Firebase } from '@ionic-native/firebase';
 *
 * constructor(private firebase: Firebase) { }
 *
 * ...
 *
 * this.firebase.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebase.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 *
 * ```
 */
@Plugin({
  pluginName: 'Firebase',
  plugin: 'cordova-plugin-firebase',
  pluginRef: 'FirebasePlugin',
  repo: 'https://github.com/arnesson/cordova-plugin-firebase',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Firebase {

  /**
   * Get the device token
   * @return {Promise<any>}
   */
  @Cordova()
  getToken(): Promise<any> { return; }

  /**
   * Get notified when a token is refreshed
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onTokenRefresh(): Observable<any> { return; }

  /**
   * Get notified when the user opens a notification
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onNotificationOpen(): Observable<any> { return; }

  /**
   * Grant permission to recieve push notifications
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS']
  })
  grantPermission(): Promise<any> { return; }

    /**
   * Check permission to recieve push notifications
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS']
  })
  hasPermission(): Promise<any> { return; }

  /**
   * Set icon badge number. Set to 0 to clear the badge.
   * @param badgeNumber {number}
   * @return {Promise<any>}
   */
  @Cordova()
  setBadgeNumber(badgeNumber: number): Promise<any> { return; }

  /**
   * Get icon badge number
   * @return {Promise<any>}
   */
  @Cordova()
  getBadgeNumber(): Promise<any> { return; }

  /**
   * Subscribe to a topic
   * @param topic {string}
   * @return {Promise<any>}
   */
  @Cordova()
  subscribe(topic: string): Promise<any> { return; }

  /**
   * Unsubscribe from a topic
   * @param topic {string}
   * @return {Promise<any>}
   */
  @Cordova()
  unsubscribe(topic: string): Promise<any> { return; }

  /**
   * Log an event using Analytics
   * @param type {string}
   * @param data {Object}
   * @return {Promise<any>}
   */
  @Cordova()
  logEvent(type: string, data: any): Promise<any> { return; }

  /**
   * Set the name of the current screen in Analytics
   * @param name {string} Screen name
   * @return {Promise<any>}
   */
  @Cordova()
  setScreenName(name: string): Promise<any> { return; }

  /**
   * Set a user id for use in Analytics
   * @param userId {string}
   * @return {Promise<any>}
   */
  @Cordova()
  setUserId(userId: string): Promise<any> { return; }

  /**
   * Set a user property for use in Analytics
   * @param name {string}
   * @param value {string}
   * @return {Promise<any>}
   */
  @Cordova()
  setUserProperty(name: string, value: string): Promise<any> { return; }

  /**
   * Fetch Remote Config parameter values for your app
   * @param cacheExpirationSeconds
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
    successIndex: 1,
    errorIndex: 2
  })
  fetch(cacheExpirationSeconds?: number): Promise<any> { return; }

  /**
   * Activate the Remote Config fetched config
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  activateFetched(): Promise<any> { return; }

  /**
   * Retrieve a Remote Config value
   * @param key {string}
   * @param namespace {string}
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
    successIndex: 2,
    errorIndex: 3
  })
  getValue(key: string, namespace?: string): Promise<any> { return; }

  /**
   * Retrieve a Remote Config byte array
   * @param key {string}
   * @param namespace {string}
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
    successIndex: 2,
    errorIndex: 3
  })
  getByteArray(key: string, namespace?: string): Promise<any> { return; }

  /**
   * Get the current state of the FirebaseRemoteConfig singleton object
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  getInfo(): Promise<any> { return; }

  /**
   * Change the settings for the FirebaseRemoteConfig object's operations
   * @param settings {Object}
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  setConfigSettings(settings: any): Promise<any> { return; }

  /**
   * Set defaults in the Remote Config
   * @param defaults {Object}
   * @param namespace {string}
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
    successIndex: 2,
    errorIndex: 3
  })
  setDefaults(defaults: any, namespace: string): Promise<any> { return; }

}
