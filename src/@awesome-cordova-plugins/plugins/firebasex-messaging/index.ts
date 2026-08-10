import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface IChannelOptions {
  /**
   * Channel ID - must be unique per app package
   */
  id: string;

  /**
   * Channel name. Default: empty string
   */
  name?: string;

  /**
   * Channel description. Default: empty string
   */
  description?: string;

  /**
   * The sound to play once a push comes. Default value: 'default'
   * Values allowed:
   * 'default' - plays the default notification sound
   * 'ringtone' - plays the currently set ringtone
   * 'false' - silent; don't play any sound
   * filename - the filename of the sound file located in '/res/raw' without file extension (mysound.mp3 -> mysound)
   */
  sound?: string;

  /**
   * Vibrate on new notification. Default value: true
   * Possible values:
   * Boolean - vibrate or not
   * Array - vibration pattern - e.g. [500, 200, 500] - milliseconds vibrate, milliseconds pause, vibrate, pause, etc.
   */
  vibration?: boolean | number[];

  /**
   * Whether to blink the LED
   */
  light?: boolean;

  /**
   * LED color in ARGB format - this example BLUE color. If set to -1, light color will be default. Default value: -1.
   */
  lightColor?: string;

  /**
   * Importance - integer from 0 to 4. Default value: 4
   * 0 - none - no sound, does not show in the shade
   * 1 - min - no sound, only shows in the shade, below the fold
   * 2 - low - no sound, shows in the shade, and potentially in the status bar
   * 3 - default - shows everywhere, makes noise, but does not visually intrude
   * 4 - high - shows everywhere, makes noise and peeks
   */
  importance?: 0 | 1 | 2 | 3 | 4;

  /**
   * Show badge over app icon when non handled pushes are present. Default value: true
   */
  badge?: boolean;

  /**
   * Show message on locked screen. Default value: 1
   * Possible values (default 1):
   * -1 - secret - Do not reveal any part of the notification on a secure lockscreen.
   * 0 - private - Show the notification on all lockscreens, but conceal sensitive or private information on secure lockscreens.
   * 1 - public - Show the notification in its entirety on all lockscreens.
   */
  visibility?: -1 | 0 | 1;
}

export interface MessagePayloadAps {
  alert?: {
    title: string;
    body: string;
  };
}

export interface MessagePayload {
  title?: string;
  body?: string;
  collapse_key?: string;
  from?: string;
  id?: string;
  messageType?: string;
  notification_foreground?: string;
  sent_time?: string;
  show_notification?: string;
  ttl?: string;
  tap?: 'background' | 'foreground';
  aps?: MessagePayloadAps;
}

/**
 * @name FirebasexMessaging
 * @description
 * Cordova plugin for Firebase Cloud Messaging - part of the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexMessaging } from '@awesome-cordova-plugins/firebasex-messaging/ngx';
 *
 * constructor(private firebasexMessaging: FirebasexMessaging) { }
 *
 * ...
 *
 * this.firebasexMessaging.getToken().then((token) => console.log(token));
 * ```
 */
@Plugin({
  pluginName: 'FirebasexMessaging',
  plugin: 'cordova-plugin-firebasex-messaging',
  pluginRef: 'FirebasexMessaging',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-messaging',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexMessaging extends AwesomeCordovaNativePlugin {
  /**
   * Get the current FCM token.
   *
   * @returns {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  @Cordova()
  getToken(): Promise<null | string> {
    return;
  }

  /**
   * Get notified when a token is refreshed.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  onTokenRefresh(): Observable<any> {
    return;
  }

  /**
   * iOS only.
   * Get the APNS token allocated for this app install.
   *
   * @returns {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  @Cordova({
    platforms: ['iOS'],
  })
  getAPNSToken(): Promise<null | string> {
    return;
  }

  /**
   * iOS only.
   * Registers a handler to call when the APNS token is allocated.
   * This will be called once when remote notifications permission has been granted by the user at runtime.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    platforms: ['iOS'],
  })
  onApnsTokenReceived(): Observable<any> {
    return;
  }

  /**
   * Registers a callback function to invoke when:
   * - a notification or data message is received by the app
   * - a system notification is tapped by the user
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  onMessageReceived<T = { [key: string]: string }>(): Observable<MessagePayload & T> {
    return;
  }

  /**
   * iOS 12+ only.
   * Get notified when the user taps the notification settings action in the system notification settings.
   * Requires UNAuthorizationOptionProvidesAppNotificationSettings.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    platforms: ['iOS'],
  })
  onOpenSettings(): Observable<any> {
    return;
  }

  /**
   * Grant run-time permission to receive push notifications (will trigger a system prompt).
   * iOS & Android 13+ (Android <= 12 always returns true).
   *
   * @param {boolean} requestWithProvidesAppNotificationSettings - (iOS 12+ only) indicates if app provides an AppNotificationSettingsButton
   * @returns {Promise<boolean>}
   */
  @Cordova()
  grantPermission(requestWithProvidesAppNotificationSettings?: boolean): Promise<boolean> {
    return;
  }

  /**
   * iOS 12+ only. Grant critical alert permission (bypasses Do Not Disturb and the ringer switch). Requires a special Apple entitlement.
   * On Android this is a no-op and returns false.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  grantCriticalPermission(): Promise<boolean> {
    return;
  }

  /**
   * Check permission to receive push notifications. iOS returns true if runtime permission is granted and
   * enabled in Settings; Android returns true if notifications are enabled and (13+) runtime permission is granted.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasPermission(): Promise<boolean> {
    return;
  }

  /**
   * iOS 12+ only. Check whether the app has critical alert permission. On Android this always returns false.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasCriticalPermission(): Promise<boolean> {
    return;
  }

  /**
   * Unregister from firebase, used to stop receiving push notifications. Call this when you logout user from your app.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  unregister(): Promise<any> {
    return;
  }

  /**
   * Set a number on the icon badge. Set 0 to clear the badge.
   *
   * @param {number} badgeNumber
   * @returns {Promise<any>}
   */
  @Cordova()
  setBadgeNumber(badgeNumber: number): Promise<any> {
    return;
  }

  /**
   * Get icon badge number.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getBadgeNumber(): Promise<any> {
    return;
  }

  /**
   * Android only. Clear all pending notifications from the drawer.
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  clearAllNotifications(): Promise<any> {
    return;
  }

  /**
   * Subscribe to a topic. Topic messaging allows you to send a message to multiple devices that have opted in to a particular topic.
   *
   * @param {string} topic
   * @returns {Promise<any>}
   */
  @Cordova()
  subscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribe from a topic. This will stop you receiving messages for that topic.
   *
   * @param {string} topic
   * @returns {Promise<any>}
   */
  @Cordova()
  unsubscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Indicates whether autoinit is currently enabled. If so, new FCM tokens will be automatically generated.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isAutoInitEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Sets whether to autoinit new FCM tokens. By default, a new token will be generated as soon as the old one is removed.
   * To prevent a new token being generated, be sure to disable autoinit using setAutoInitEnabled() before calling unregister().
   *
   * @param {boolean} enabled
   * @returns {Promise<any>}
   */
  @Cordova()
  setAutoInitEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Creates a custom channel to be used by notification messages which have the channel property set
   * in the message payload to the id of the created channel. No-op on Android <=7 or other platforms.
   *
   * @param {IChannelOptions} channelOptions
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  createChannel(channelOptions: IChannelOptions): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Overrides the properties for the default channel.
   * No-op on Android <=7 or other platforms.
   *
   * @param {IChannelOptions} channelOptions
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  setDefaultChannel(channelOptions: IChannelOptions): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Removes a previously defined channel.
   * No-op on Android <=7 or other platforms.
   *
   * @param {string} channelID
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  deleteChannel(channelID: string): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Gets a list of all channels.
   * No-op on Android <=7 or other platforms.
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  listChannels(): Promise<any> {
    return;
  }
}
