import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface NotificationData {
    /**
     * Determines whether the notification was pressed or not
     */
    wasTapped: boolean;
    /**
     * Notification data hash item
     */
    [name: string]: any;
}
/**
 * @name FCM
 * @description
 * Provides basic functionality for Firebase Cloud Messaging
 *
 * @usage
 * ```typescript
 * import { FCM } from '@ionic-native/fcm';
 *
 * constructor(private fcm: FCM) {}
 *
 * ...
 *
 * fcm.subscribeToTopic('marketing');
 *
 * fcm.getToken().then(token=>{
 *   backend.registerToken(token);
 * })
 *
 * fcm.onNotification().subscribe(data=>{
 *   if(data.wasTapped){
 *     console.log("Received in background");
 *   } else {
 *     console.log("Received in foreground");
 *   };
 * })
 *
 * fcm.onTokenRefresh().subscribe(token=>{
 *   backend.registerToken(token);
 * })
 *
 * fcm.unsubscribeFromTopic('marketing');
 *
 * ```
 * @interfaces
 * NotificationData
 */
export declare class FCM extends IonicNativePlugin {
    /**
     * Get's device's current registration id
     *
     * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
     */
    getToken(): Promise<string>;
    /**
     * Event firing on the token refresh
     *
     * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
     */
    onTokenRefresh(): Observable<string>;
    /**
     * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be subscribed to
     *
     * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
     */
    subscribeToTopic(topic: string): Promise<any>;
    /**
     * Unubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be unsubscribed from
     *
     * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
     */
    unsubscribeFromTopic(topic: string): Promise<any>;
    /**
     * Watch for incoming notifications
     *
     * @returns {Observable<any>} returns an object with data from the notification
     */
    onNotification(): Observable<NotificationData>;
}
