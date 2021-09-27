import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface IFirebaseGCMMessage {
  gcm: {
    body: string;
    title: string;
    sound: string;
    icon: string;
    tag: string;
    color: string;
    clickAction: string;
  };
  'google.message_id': string;
  'google.sent_time': number;
  [key: string]: any;
}

export interface IFirebaseAPSMessage {
  aps: {
    alert: {
      title: string;
      body: string;
    };
    badge?: number;
  };
  'gcm.message_id': 'string';
  [key: string]: any;
}

export type IFirebaseMessage = IFirebaseAPSMessage | IFirebaseGCMMessage;

export interface IRequestPermissionOptions {
  forceShow?: boolean;
}

export type FirebaseMessagingTokenType = 'apns-buffer' | 'apns-string';

/**
 * @beta
 * @name Firebase Messaging
 * @description
 * Cordova plugin for Firebase Messaging
 * @usage
 * ```typescript
 * import { FirebaseMessaging } from '@awesome-cordova-plugins/firebase-messaging/ngx';
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
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseMessaging extends AwesomeCordovaNativePlugin {
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
   * Grant permission to receive push notifications (will trigger prompt on iOS).
   *
   * @param {IRequestPermissionOptions} [options]
   * @param options.forceShow
   * @returns {Promise<string>}
   */
  @Cordova({ sync: true })
  requestPermission(options?: { forceShow?: boolean }): Promise<string> {
    return;
  }

  /**
   * Returns a promise thaf fulfills with the device instance ID
   */
  @Cordova({ sync: true })
  getInstanceId(): Promise<string> {
    return;
  }

  /**
   * Returns a promise that fulfills with the current FCM token
   *
   * This method also accepts optional argument type.
   * Currently iOS implementation supports values "apns-buffer" and "apns-string" that defines presentation of resolved APNS token.
   *
   * @param {FirebaseMessagingTokenType} [type] iOS only. Defines presentation of resolved APNS token
   * @returns {Promise<string>}
   */
  @Cordova({ sync: true })
  getToken(type?: FirebaseMessagingTokenType): Promise<string> {
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

  /**
   * Revoke the current FCM token.
   *
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  deleteToken(): Promise<null> {
    return;
  }
}
