import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Firebase
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).
 *
 * @usage
 * ```typescript
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
export class Firebase extends IonicNativePlugin {
  /**
   * Get the device token
   * @return {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  @Cordova()
  getToken(): Promise<null | string> {
    return;
  }

  /**
   * Get notified when a token is refreshed
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onTokenRefresh(): Observable<any> {
    return;
  }

  /**
   * Get notified when the user opens a notification
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onNotificationOpen(): Observable<any> {
    return;
  }

  /**
   * Grant permission to receive push notifications
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS']
  })
  grantPermission(): Promise<any> {
    return;
  }

  /**
   * Check permission to receive push notifications
   * @return {Promise<{isEnabled: boolean}>}
   */
  @Cordova()
  hasPermission(): Promise<{ isEnabled: boolean }> {
    return;
  }

  /**
   * Set icon badge number. Set to 0 to clear the badge.
   * @param {number} badgeNumber
   * @return {Promise<any>}
   */
  @Cordova()
  setBadgeNumber(badgeNumber: number): Promise<any> {
    return;
  }

  /**
   * Get icon badge number
   * @return {Promise<any>}
   */
  @Cordova()
  getBadgeNumber(): Promise<any> {
    return;
  }

  /**
   * Subscribe to a topic
   * @param {string} topic
   * @return {Promise<any>}
   */
  @Cordova()
  subscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribe from a topic
   * @param {string} topic
   * @return {Promise<any>}
   */
  @Cordova()
  unsubscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Unregister from firebase, used to stop receiving push notifications.
   * Call this when you logout user from your app.
   */
  @Cordova()
  unregister(): Promise<any> {
    return;
  }

  /**
   * Log an event using Analytics
   * @param {string} type
   * @param {Object} data
   * @return {Promise<any>}
   */
  @Cordova()
  logEvent(type: string, data: any): Promise<any> {
    return;
  }

  /**
   * Log an Error using FirebaseCrash
   * @param {string} message
   * @return {Promise<any>}
   */
  @Cordova()
  logError(message: string): Promise<any> {
    return;
  }

  /**
   * Set the name of the current screen in Analytics
   * @param {string} name Screen name
   * @return {Promise<any>}
   */
  @Cordova()
  setScreenName(name: string): Promise<any> {
    return;
  }

  /**
   * Set a user id for use in Analytics
   * @param {string} userId
   * @return {Promise<any>}
   */
  @Cordova()
  setUserId(userId: string): Promise<any> {
    return;
  }

  /**
   * Set a user property for use in Analytics
   * @param {string} name
   * @param {string} value
   * @return {Promise<any>}
   */
  @Cordova()
  setUserProperty(name: string, value: string): Promise<any> {
    return;
  }

  /**
   * Fetch Remote Config parameter values for your app
   * @param {number} [cacheExpirationSeconds]
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  fetch(cacheExpirationSeconds?: number): Promise<any> {
    return;
  }

  /**
   * Activate the Remote Config fetched config
   * @return {Promise<any>}
   */
  @Cordova()
  activateFetched(): Promise<any> {
    return;
  }

  /**
   * Retrieve a Remote Config value
   * @param {string} key
   * @param {string} [namespace]
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  getValue(key: string, namespace?: string): Promise<any> {
    return;
  }

  /**
   * Retrieve a Remote Config byte array
   * @param {string} key
   * @param {string} [namespace]
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  getByteArray(key: string, namespace?: string): Promise<any> {
    return;
  }

  /**
   * Get the current state of the FirebaseRemoteConfig singleton object
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  getInfo(): Promise<any> {
    return;
  }

  /**
   * Change the settings for the FirebaseRemoteConfig object's operations
   * @param {Object} settings
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  setConfigSettings(settings: any): Promise<any> {
    return;
  }

  /**
   * Set defaults in the Remote Config
   * @param {Object} defaults
   * @param {string} [namespace]
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  setDefaults(defaults: any, namespace?: string): Promise<any> {
    return;
  }

  /**
   * Start a trace.
   * @param {string} trace Trace name
   */
  @Cordova()
  startTrace(trace: string): Promise<any> {
    return;
  }

  /**
   * To count the performance-related events that occur in your app (such as cache hits or retries), add a line of code
   * similar to the following whenever the event occurs, using a string other than retry to name that event if you are
   * counting a different type of event:
   * @param {string} trace Trace name
   * @param {string} counter Counter
   */
  @Cordova()
  incrementCounter(trace: string, counter: string): Promise<any> {
    return;
  }

  /**
   * Stop the trace
   * @param {string} trace Trace name
   */
  @Cordova()
  stopTrace(trace: string): void {}

  /**
   * Allows the user to enable/disable analytics collection
   * @param {boolean} enabled value to set collection
   * @returns {Promise<any>}
   */
  @Cordova()
  setAnalyticsCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
   * @param {string} phoneNumber The phone number, including '+' and country code
   * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android', 'iOS'],
    successIndex: 2,
    errorIndex: 3
  })
  verifyPhoneNumber(
    phoneNumber: string,
    timeoutDuration: number = 0
  ): Promise<any> {
    return;
  }
}
