import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

export interface IRequestPushPermissionIOSOptions {
  /**
   * Options exclusive for iOS 9 support
   */
  ios9Support?: {
    /**
     * How long it will wait for a decision from the user before returning `false`, defaults to 10
     */
    timeout?: number;
    /**
     * How long between each permission verification, defaults to 0.3
     */
    interval?: number;
  };
}

export interface IChannelConfiguration {
  /**
   * Channel id, used in the android_channel_id push payload key
   */
  id: string;
  /**
   * Channel name, visible for the user
   */
  name: string;
  /**
   * Channel description, visible for the user
   */
  description?: string;
  /**
   * Importance for notifications of this channel
   * https://developer.android.com/guide/topics/ui/notifiers/notifications#importance
   */
  importance?: 'none' | 'min' | 'low' | 'default' | 'high';
  /**
   * Visibility for notifications of this channel
   * https://developer.android.com/training/notify-user/build-notification#lockscreenNotification
   */
  visibility?: 'public' | 'private' | 'secret';
  /**
   * Default sound resource for notifications of this channel
   * The file should located as resources/raw/[resource name].mp3
   */
  sound?: string;
  /**
   * Enable lights for notifications of this channel
   */
  lights?: boolean;
  /**
   * Enable vibration for notifications of this channel
   */
  vibration?: boolean;
}

/**
 * @name FCM
 * @capacitorincompatible true
 * @description
 * Provides basic functionality for Firebase Cloud Messaging
 * @usage
 * ```typescript
 * import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
 *
 * constructor(private fcm: FCM) {}
 *
 * ...
 *
 * this.fcm.subscribeToTopic('marketing');
 *
 * this.fcm.getToken().then(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.onNotification().subscribe(data => {
 *   if(data.wasTapped){
 *     console.log("Received in background");
 *   } else {
 *     console.log("Received in foreground");
 *   };
 * });
 *
 * this.fcm.onTokenRefresh().subscribe(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.hasPermission().then(hasPermission => {
 *   if (hasPermission) {
 *     console.log("Has permission!");
 *   }
 * })
 *
 * this.fcm.clearAllNotifications();
 *
 * this.fcm.unsubscribeFromTopic('marketing');
 *
 * ```
 * @interfaces
 * NotificationData
 * IRequestPushPermissionIOSOptions
 * IChannelConfiguration
 */
@Plugin({
  pluginName: 'FCM',
  plugin: 'cordova-plugin-fcm-with-dependecy-updated',
  pluginRef: 'FCMPlugin',
  repo: 'https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FCM extends AwesomeCordovaNativePlugin {
  /**
   * Gets ios device's current APNS token
   *
   * @returns {Promise<string>} Returns a Promise that resolves with the APNS token
   */
  @Cordova()
  getAPNSToken(): Promise<string> {
    return;
  }

  /**
   * Gets device's current registration id
   *
   * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
   */
  @Cordova()
  getToken(): Promise<string> {
    return;
  }

  /**
   * Event firing on the token refresh
   *
   * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
   */
  @Cordova({
    observable: true,
  })
  onTokenRefresh(): Observable<string> {
    return;
  }

  /**
   * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
   *
   * @param {string} topic Topic to be subscribed to
   * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
   */
  @Cordova()
  subscribeToTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
   *
   * @param {string} topic Topic to be unsubscribed from
   * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
   */
  @Cordova()
  unsubscribeFromTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Checking for permissions on iOS. On android, it always returns `true`.
   *
   * @returns {Promise<boolean | null>} Returns a Promise:
   * - true: push was allowed (or platform is android)
   * - false: push will not be available
   * - null: still not answered, recommended checking again later.
   */
  @Cordova()
  hasPermission(): Promise<boolean | null> {
    return;
  }

  /**
   * Watch for incoming notifications
   *
   * @returns {Observable<any>} returns an object with data from the notification
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 2,
  })
  onNotification(): Observable<NotificationData> {
    return;
  }

  /**
   * Removes existing push notifications from the notifications center
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  clearAllNotifications(): void {
    return;
  }

  /**
   * Request push notification permission, alerting the user if it not have yet decided
   *
   * @param {IRequestPushPermissionIOSOptions} options Options for push request
   * @returns {Promise<boolean>} Returns a Promise that resolves with the permission status
   */
  @Cordova()
  requestPushPermissionIOS(options?: IRequestPushPermissionIOSOptions): Promise<boolean> {
    return;
  }

  /**
   * For Android, some notification properties are only defined programmatically.
   *
   * Channel can define the default behavior for notifications on Android 8.0+.
   *
   * Once a channel is created, it stays unchangeable until the user uninstalls the app.
   *
   * @param channelConfig
   * @returns {Promise<void>}
   */
  @Cordova()
  createNotificationChannelAndroid(channelConfig: IChannelConfiguration): void {
    return;
  }
}
