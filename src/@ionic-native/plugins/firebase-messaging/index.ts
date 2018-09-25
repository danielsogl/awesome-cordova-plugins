import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface IFirebaseMessage {
  aps: any;
  gcm: any;
}

/**
 * @beta
 * @name Firebase Messaging
 * @description
 * Cordova plugin for Firebase Messaging
 *
 * @usage
 * ```typescript
 * import { FirebaseMessaging } from '@ionic-native/firebase-messaging';
 *
 *
 * constructor(private firebaseMessaging: FirebaseMessaging) { }
 *
 * ...
 *
 *
 * this.firebaseMessaging.logEvent('page_view', {page: "dashboard"})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * IFirebaseMessage
 */
@Plugin({
  pluginName: 'FirebaseMessaging',
  plugin: 'cordova-plugin-firebase-messaging',
  pluginRef: 'cordova.plugins.firebase.messaging',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-messaging',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseMessaging extends IonicNativePlugin {
  /**
   * Called when a push message received while app is in foreground.
   *
   * @returns {Observable<any>}
   */
  @Cordova({ observable: true, callbackOrder: 'reverse' })
  onMessage(): Observable<any> {
    return;
  }

  /**
   * Called when a push message received while app is in background.
   *
   * @returns {Observable<any>}
   */
  @Cordova({ observable: true, callbackOrder: 'reverse' })
  onBackgroundMessage(): Observable<any> {
    return;
  }

  /**
   * Grant permission to recieve push notifications (will trigger prompt on iOS).
   *
   * @returns {Promise<string>}
   */
  @Cordova({ sync: true })
  requestPermission(): Promise<string> {
    return;
  }

  /**
   * Returns a promise that fulfills with the current FCM token
   *
   * @returns {Promise<string>}
   */
  @Cordova({ sync: true })
  getToken(): Promise<string> {
    return;
  }

  /**
   * Triggers every time when FCM token updated.
   * You should usually call getToken to get an updated token and send it to server.
   *
   * @returns {Observable<void>}
   */
  @Cordova({ observable: true, callbackOrder: 'reverse' })
  onTokenRefresh(): Observable<void> {
    return;
  }

  /**
   * Subscribe to topic in background.
   *
   * @param {string} topic
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  subscribe(topic: string): Promise<null> {
    return;
  }

  /**
   * Unsubscribe from topic in background.
   *
   * @param {string} topic
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  unsubscribe(topic: string): Promise<null> {
    return;
  }

  /**
   * Reads current badge number (if supported).
   *
   * @returns {Promise<number>}
   */
  @Cordova({ sync: true })
  getBadge(): Promise<number> {
    return;
  }

  /**
   * Sets current badge number (if supported).
   *
   * @param {number} value
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  setBadge(value: number): Promise<null> {
    return;
  }
}
