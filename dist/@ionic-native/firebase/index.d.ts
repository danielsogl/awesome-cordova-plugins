import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
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
export declare class Firebase extends IonicNativePlugin {
    /**
     * Get the device token
     * @return {Promise<null | string>} Note that token will be null if it has not been established yet
     */
    getToken(): Promise<null | string>;
    /**
     * Get notified when a token is refreshed
     * @return {Observable<any>}
     */
    onTokenRefresh(): Observable<any>;
    /**
     * Get notified when the user opens a notification
     * @return {Observable<any>}
     */
    onNotificationOpen(): Observable<any>;
    /**
     * Grant permission to receive push notifications
     * @return {Promise<any>}
     */
    grantPermission(): Promise<any>;
    /**
     * Check permission to receive push notifications
     * @return {Promise<{isEnabled: boolean}>}
     */
    hasPermission(): Promise<{
        isEnabled: boolean;
    }>;
    /**
     * Set icon badge number. Set to 0 to clear the badge.
     * @param {number} badgeNumber
     * @return {Promise<any>}
     */
    setBadgeNumber(badgeNumber: number): Promise<any>;
    /**
     * Get icon badge number
     * @return {Promise<any>}
     */
    getBadgeNumber(): Promise<any>;
    /**
     * Subscribe to a topic
     * @param {string} topic
     * @return {Promise<any>}
     */
    subscribe(topic: string): Promise<any>;
    /**
     * Unsubscribe from a topic
     * @param {string} topic
     * @return {Promise<any>}
     */
    unsubscribe(topic: string): Promise<any>;
    /**
     * Unregister from firebase, used to stop receiving push notifications.
     * Call this when you logout user from your app.
     */
    unregister(): Promise<any>;
    /**
     * Log an event using Analytics
     * @param {string} type
     * @param {Object} data
     * @return {Promise<any>}
     */
    logEvent(type: string, data: any): Promise<any>;
    /**
     * Log an Error using FirebaseCrash
     * @param {string} message
     * @return {Promise<any>}
     */
    logError(message: string): Promise<any>;
    /**
     * Set the name of the current screen in Analytics
     * @param {string} name Screen name
     * @return {Promise<any>}
     */
    setScreenName(name: string): Promise<any>;
    /**
     * Set a user id for use in Analytics
     * @param {string} userId
     * @return {Promise<any>}
     */
    setUserId(userId: string): Promise<any>;
    /**
     * Set a user property for use in Analytics
     * @param {string} name
     * @param {string} value
     * @return {Promise<any>}
     */
    setUserProperty(name: string, value: string): Promise<any>;
    /**
     * Fetch Remote Config parameter values for your app
     * @param {number} [cacheExpirationSeconds]
     * @return {Promise<any>}
     */
    fetch(cacheExpirationSeconds?: number): Promise<any>;
    /**
     * Activate the Remote Config fetched config
     * @return {Promise<any>}
     */
    activateFetched(): Promise<any>;
    /**
     * Retrieve a Remote Config value
     * @param {string} key
     * @param {string} [namespace]
     * @return {Promise<any>}
     */
    getValue(key: string, namespace?: string): Promise<any>;
    /**
     * Retrieve a Remote Config byte array
     * @param {string} key
     * @param {string} [namespace]
     * @return {Promise<any>}
     */
    getByteArray(key: string, namespace?: string): Promise<any>;
    /**
     * Get the current state of the FirebaseRemoteConfig singleton object
     * @return {Promise<any>}
     */
    getInfo(): Promise<any>;
    /**
     * Change the settings for the FirebaseRemoteConfig object's operations
     * @param {Object} settings
     * @return {Promise<any>}
     */
    setConfigSettings(settings: any): Promise<any>;
    /**
     * Set defaults in the Remote Config
     * @param {Object} defaults
     * @param {string} [namespace]
     * @return {Promise<any>}
     */
    setDefaults(defaults: any, namespace?: string): Promise<any>;
    /**
     * Start a trace.
     * @param {string} trace Trace name
     */
    startTrace(trace: string): Promise<any>;
    /**
     * To count the performance-related events that occur in your app (such as cache hits or retries), add a line of code
     * similar to the following whenever the event occurs, using a string other than retry to name that event if you are
     * counting a different type of event:
     * @param {string} trace Trace name
     * @param {string} counter Counter
     */
    incrementCounter(trace: string, counter: string): Promise<any>;
    /**
     * Stop the trace
     * @param {string} trace Trace name
     */
    stopTrace(trace: string): void;
    /**
     * Allows the user to enable/disable analytics collection
     * @param {boolean} enabled value to set collection
     * @returns {Promise<any>}
     */
    setAnalyticsCollectionEnabled(enabled: boolean): Promise<any>;
    /**
     * Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
     * @param {string} phoneNumber The phone number, including '+' and country code
     * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
     * @returns {Promise<any>}
     */
    verifyPhoneNumber(phoneNumber: string, timeoutDuration?: number): Promise<any>;
}
