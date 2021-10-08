import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaInstance,
  AwesomeCordovaNativePlugin,
  checkAvailability,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

declare const window: any;

export type EventResponse = PushapeRegistrationEventResponse &
  RegistrationEventResponse &
  NotificationEventResponse &
  Error;

interface RegistrationEventResponse {
  /**
   * The registration ID provided by the 3rd party remote push service.
   */
  registrationId: string;
}

export interface NotificationEventResponse {
  /**
   * The text of the push message sent from the 3rd party service.
   */
  message: string;
  /**
   * The optional title of the push message sent from the 3rd party service.
   */
  title?: string;
  /**
   * The number of messages to be displayed in the badge iOS or message count in the notification shade in Android.
   * For windows, it represents the value in the badge notification which could be a number or a status glyph.
   */
  count: string;
  /**
   * The name of the sound file to be played upon receipt of the notification.
   */
  sound: string;
  /**
   * The path of the image file to be displayed in the notification.
   */
  image: string;
  /**
   * An optional collection of data sent by the 3rd party push service that does not fit in the above properties.
   */
  additionalData: NotificationEventAdditionalData & any;
}

/**
 * Loosened up with a dictionary notation, but all non-defined properties need to use (map['prop']) notation
 *
 * Ideally the developer would overload (merged declaration) this or create a new interface that would extend this one
 * so that he could specify any custom code without having to use array notation (map['prop']) for all of them.
 */
export interface NotificationEventAdditionalData {
  /**
   * Whether the notification was received while the app was in the foreground
   */
  foreground?: boolean;
  collapse_key?: string;
  coldstart?: boolean;
  from?: string;
  notId?: string;

  [name: string]: any;
}

export interface IOSPushOptions {
  /**
   * Whether to use prod or sandbox GCM setting.
   */
  fcmSandbox?: boolean | string;

  /**
   * If true the device shows an alert on receipt of notification.
   * Note**: the value you set this option to the first time you call the init
   * method will be how the application always acts. Once this is set
   * programmatically in the init method it can only be changed manually by the
   * user in Settings>Notifications>App Name. This is normal iOS behaviour.
   */
  alert?: boolean | string;

  /**
   * If true the device sets the badge number on receipt of notification.
   * Note**: the value you set this option to the first time you call the init
   * method will be how the application always acts. Once this is set
   * programmatically in the init method it can only be changed manually by the
   * user in Settings>Notifications>App Name. This is normal iOS behaviour.
   */
  badge?: boolean | string;

  /**
   * If true the device plays a sound on receipt of notification.
   * Note**: the value you set this option to the first time you call the init
   * method will be how the application always acts. Once this is set
   * programmatically in the init method it can only be changed manually by the
   * user in Settings>Notifications>App Name. This is normal iOS behaviour.
   */
  sound?: boolean | string;

  /**
   * If true the badge will be cleared on app startup.
   */
  clearBadge?: boolean | string;

  /**
   * If the array contains one or more strings each string will be used to
   * subscribe to a GcmPubSub topic.
   * Note**: only usable in conjunction with `senderID`.
   */
  topics?: string[];

  /**
   * The data required in order to enable Action Buttons for iOS.
   * Action Buttons on iOS - https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/PAYLOAD.md#action-buttons-1
   */
  categories?: CategoryArray;

  /**
   * If true the device will be set up to receive VoIP Push notifications and the
   * other options will be ignored since VoIP notifications are silent
   * notifications that should be handled in the "notification" event.
   */
  voip?: boolean | string;
}

export interface CategoryArray {
  [name: string]: CategoryAction;
}

export interface CategoryAction {
  yes?: CategoryActionData;
  no?: CategoryActionData;
  maybe?: CategoryActionData;
}

export interface CategoryActionData {
  callback: string;
  title: string;
  foreground: boolean;
  destructive: boolean;
  inline?: boolean;
}

export interface AndroidPushOptions {
  /**
   * Maps to the project number in the Google Developer Console.
   */
  senderID?: string;

  /**
   * The name of a drawable resource to use as the small-icon. The name should
   * not include the extension.
   */
  icon?: string;

  /**
   * Sets the background color of the small icon on Android 5.0 and greater.
   * [Supported Formats](http://developer.android.com/intl/ru/reference/android/graphics/Color.html#parseColor(java.lang.String))
   */
  iconColor?: string;

  /**
   * If true it plays the sound specified in the push data or the default system
   * sound.
   */
  sound?: boolean | string;

  /**
   * If true the device vibrates on receipt of notification.
   */
  vibrate?: boolean | string;

  /**
   * If true the icon badge will be cleared on init and before push messages are processed.
   */
  clearBadge?: boolean | string;

  /**
   * If true the app clears all pending notifications when it is closed.
   */
  clearNotifications?: boolean | string;

  /**
   * If true will always show a notification, even when the app is on the
   * foreground.
   */
  forceShow?: boolean | string;

  /**
   * If the array contains one or more strings each string will be used to
   * subscribe to a GcmPubSub topic.
   */
  topics?: string[];

  /**
   * The key to search for text of notification.
   */
  messageKey?: string;

  /**
   * The key to search for title of notification.
   */
  titleKey?: string;
}

export interface BrowserPushOptions {
  /**
   * Optional. Your GCM API key if you are using VAPID keys.
   */
  applicationServerKey?: string;

  /**
   * URL for the push server you want to use.
   * Default: http://push.api.phonegap.com/v1/push  Optional.
   */
  pushServiceURL?: string;
}

interface PushOptions {
  ios?: IOSPushOptions;
  android?: AndroidPushOptions;
  windows?: any;
  browser?: BrowserPushOptions;
}

export type Priority = 1 | 2 | 3 | 4 | 5;
export type Visibility = 0 | 1 | -1;

export interface Channel {
  id: string;
  description: string;
  importance: Priority;
  sound?: string;
  vibration?: boolean | number[];
  visibility?: Visibility;
  badge?: boolean;
}

export type PushEvent = 'registration' | 'notification' | 'error';

/** Extended Pushape types */

export interface PushapePushOptions {
  id_app: string;
  platform: string;
  uuid: string;
}

export interface PushapeOptions extends PushOptions {
  enabled?: boolean;
  pushape: PushapePushOptions;
  id_user: string;
}

export interface PushapeRegistrationEventResponse extends RegistrationEventResponse {
  push_id: string;
  status: number;
}

/**
 * @name PushapePush
 * @description
 * Register and receive push notifications.
 * This plugin extends functionalities of Push native plugin in order to use it with Pushape service.
 *
 * Pushape service: @link https://glue-labs.com/pushape-invio-notifiche-push-ios-android-api-sdk
 *
 * Requires Cordova plugin: `pushape-cordova-push`. For more info, please see the [Pushape plugin docs](https://github.com/gluelabs/pushape-cordova-push).
 *
 * For TypeScript users, see the [Pushape plugin docs about using TypeScript for custom notifications](https://github.com/gluelabs/pushape-cordova-push/blob/master/docs/PUSHAPE_TYPESCRIPT.md).
 * @usage
 * ```typescript
 * import { PushapePush } from '@awesome-cordova-plugins/pushape-push/ngx';
 *
 *
 * constructor(private readonly pushapePush: PushapePush) { }
 *
 * ...
 *
 *
 *
 * ```
 * @interfaces
 * PushapeRegistrationEventResponse
 * NotificationEventResponse
 * NotificationEventAdditionalData
 * IOSPushOptions
 * AndroidPushOptions
 * BrowserPushOptions
 * PushapePushOptions
 * PushapeOptions
 */
@Plugin({
  pluginName: 'PushapePush',
  plugin: 'pushape-cordova-push',
  pluginRef: 'PushNotification', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/gluelabs/pushape-cordova-push',
  install: 'ionic cordova plugin add pushape-cordova-push',
  platforms: ['Android', 'Browser', 'iOS'],
})
@Injectable()
export class PushapePush extends AwesomeCordovaNativePlugin {
  /**
   * Init push notifications
   *
   * @param options {PushapeOptions}
   * @returns {PushObject}
   */
  init(options: PushapeOptions): PushObject {
    return new PushObject(options);
  }

  /**
   * Check whether the push notification permission has been granted.
   *
   * @returns {Promise<{isEnabled: boolean}>} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
   */
  @Cordova()
  hasPermission(): Promise<{ isEnabled: boolean }> {
    return;
  }

  /**
   * Create a new notification channel for Android O and above.
   *
   * @param channel {Channel}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  createChannel(channel?: Channel): Promise<any> {
    return;
  }

  /**
   * Delete a notification channel for Android O and above.
   *
   * @param id {string}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  deleteChannel(id?: string): Promise<any> {
    return;
  }

  /**
   * Returns a list of currently configured channels.
   *
   * @returns {Promise<Channel[]>}
   */
  @Cordova()
  listChannels(): Promise<Channel[]> {
    return;
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'PushapePush',
  plugin: 'pushape-cordova-push',
  pluginRef: 'PushNotification',
})
export class PushObject {
  private _objectInstance: any;

  constructor(options: PushapeOptions) {
    if (checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
      if (typeof window !== 'undefined') {
        this._objectInstance = window.PushNotification.init(options);
      }
    }
  }

  /**
   * Adds an event listener
   *
   * @param event {string}
   * @returns {Observable<EventResponse>}
   */
  @CordovaInstance({
    observable: true,
    clearFunction: 'off',
    clearWithArgs: true,
  })
  on(event: PushEvent): Observable<EventResponse> {
    return;
  }

  /**
   * The unregister method is used when the application no longer wants to receive push notifications.
   * Beware that this cleans up all event handlers previously registered,
   * so you will need to re-register them if you want them to function again without an application reload.
   */
  @CordovaInstance()
  unregister(): Promise<any> {
    return;
  }

  /**
   * Set the badge count visible when the app is not running
   *
   * The count is an integer indicating what number should show up in the badge.
   * Passing 0 will clear the badge.
   * Each notification event contains a data.count value which can be used to set the badge to correct number.
   *
   * @param count
   */
  @CordovaInstance({
    callbackOrder: 'reverse',
  })
  setApplicationIconBadgeNumber(count?: number): Promise<any> {
    return;
  }
  /**
   * Get the current badge count visible when the app is not running
   * successHandler gets called with an integer which is the current badge count
   */
  @CordovaInstance()
  getApplicationIconBadgeNumber(): Promise<number> {
    return;
  }

  /**
   * iOS only
   * Tells the OS that you are done processing a background push notification.
   * successHandler gets called when background push processing is successfully completed.
   *
   * @param [id]
   */
  @CordovaInstance({
    callbackOrder: 'reverse',
  })
  finish(id?: string): Promise<any> {
    return;
  }

  /**
   * Tells the OS to clear all notifications from the Notification Center
   */
  @CordovaInstance()
  clearAllNotifications(): Promise<any> {
    return;
  }

  /**
   * The subscribe method is used when the application wants to subscribe a new topic to receive push notifications.
   *
   * @param topic {string} Topic to subscribe to.
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  subscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * The unsubscribe method is used when the application no longer wants to receive push notifications from a specific topic but continue to receive other push messages.
   *
   * @param topic {string} Topic to unsubscribe from.
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  unsubscribe(topic: string): Promise<any> {
    return;
  }
}
