import { Plugin, Cordova } from './plugin';
import { Observable } from 'rxjs/Observable';


/**
 * @name FCM
 * @description
 * Push notification plugin for Cordova applications with Google Firebase FCM.
 *
 * @usage
 * ```
 * import {FCM} from 'ionic-native';
 *
 * // Listen for device token changes.
 * FCM.onTokenRefresh()
 *     .subscribe((token) => {
 *         // Save/Update the token on the app server.
 *     });
 *
 * // Define your application behaviour based on the notification data.
 * FCM.onNotification()
 *     .subscribe((data) => {
 *         if (data.wasTapped) {
 *             // Notification was received on device tray and tapped by the user.
 *             alert(JSON.stringify(data));
 *         } else {
 *             // Notification was received in foreground, maybe the user needs to be notified.
 *             alert(JSON.stringify(data));
 *         }
 *     });
 * ```
 */
@Plugin({
  pluginName: 'FCM',
  plugin: 'cordova-plugin-fcm',
  pluginRef: 'FCMPlugin',
  repo: 'https://github.com/fechanique/cordova-plugin-fcm',
  platforms: [
    'Android',
    'iOS'
  ]
})
export class FCM {
  /**
   * Get notified every time a new token is generated.
   * @return {Observable<any>}
   */
  @Cordova({
    callbackStyle: 'node',
    observable: true
  })
  static onTokenRefresh(): Observable<any> {
    return;
  }

  /**
   * Get the device token.
   * @return {Promise<any>}
   */
  @Cordova()
  static getToken(): Promise<any> {
    return;
  }

  /**
   * Subscribe to a topic.
   * All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
   * Must match the following regular expression: [a-zA-Z0-9-_.~%]{1,900}.
   * @param topic {string}
   * @return {Promise<any>}
   */
  @Cordova()
  static subscribeToTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribe from a topic.
   * @param topic {string}
   * @return {Promise<any>}
   */
  @Cordova()
  static unsubscribeFromTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Receive push notification data.
   * @return {Observable<any>}
   */
  @Cordova({
    callbackStyle: 'node',
    observable: true
  })
  static onNotification(): Observable<any> {
    return;
  }
}
