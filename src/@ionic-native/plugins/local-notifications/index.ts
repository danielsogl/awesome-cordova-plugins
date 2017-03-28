import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

export interface ILocalNotification {

  /**
   * A unique identifier required to clear, cancel, update or retrieve the local notification in the future
   * Default: 0
   */
  id?: number;

  /**
   * First row of the notification
   * Default: Empty string (iOS) or the app name (Android)
   */
  title?: string;

  /**
   * Second row of the notification
   * Default: Empty string
   */
  text?: string;

  /**
   * The interval at which to reschedule the local notification. That can be a value of second, minute, hour, day, week, month or year
   * Default: 0 (which means that the system triggers the local notification once)
   */
  every?: string;

  /**
   * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
   * Default: now ~ new Date()
   */
  at?: any;
  firstAt?: any;

  /**
   * The number currently set as the badge of the app icon in Springboard (iOS) or at the right-hand side of the local notification (Android)
   * Default: 0 (which means don't show a number)
   */
  badge?: number;

  /**
   * Uri of the file containing the sound to play when an alert is displayed
   * Default: res://platform_default
   */
  sound?: string;

  /**
   * Arbitrary data, objects will be encoded to JSON string
   * Default: null
   */
  data?: any;

  /**
   * ANDROID ONLY
   * Uri of the icon that is shown in the ticker and notification
   * Default: res://icon
   */
  icon?: string;

  /**
   * ANDROID ONLY
   * Uri of the resource (only res://) to use in the notification layouts. Different classes of devices may return different sizes
   * Default: res://ic_popup_reminder
   */
  smallIcon?: string;

  /**
  * ANDROID ONLY
  * RGB value for the background color of the smallIcon.
  * Default: Androids COLOR_DEFAULT, which will vary based on Android version.
  */
  color?: string;


  /**
   * ANDROID ONLY
   * Ongoing notifications differ from regular notifications in the following ways:
   * - They are sorted above the regular notifications in the notification panel
   * - They do not have an 'X' close button, and are not affected by the "Clear all" button
   * Default: false
   */
  ongoing?: boolean;

  /**
   * ANDROID ONLY
   * ARGB value that you would like the LED on the device to blink
   * Default: FFFFFF
   */
  led?: string;
}

/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```typescript
 * import { LocalNotifications } from '@ionic-native/local-notifications';
 *
 *
 * constructor(private localNotifications: LocalNotifications) { }
 *
 * ...
 *
 *
 * // Schedule a single notification
 * this.localNotifications.schedule({
 *   id: 1,
 *   text: 'Single ILocalNotification',
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * this.localNotifications.schedule([{
 *    id: 1,
 *    text: 'Multi ILocalNotification 1',
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: 'Local ILocalNotification Example',
 *    text: 'Multi ILocalNotification 2',
 *    icon: 'http://example.com/icon.png'
 * }]);
 *
 *
 * // Schedule delayed notification
 * this.localNotifications.schedule({
 *    text: 'Delayed ILocalNotification',
 *    at: new Date(new Date().getTime() + 3600),
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 * @interfaces
 * ILocalNotification
 */
@Plugin({
  pluginName: 'LocalNotifications',
  plugin: 'de.appplant.cordova.plugin.local-notification',
  pluginRef: 'cordova.plugins.notification.local',
  repo: 'https://github.com/katzer/cordova-plugin-local-notifications',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class LocalNotifications {

  /**
   * Schedules a single or multiple notifications
   * @param options {Notification | Array<ILocalNotification>} optional
   */
  @Cordova({
    sync: true
  })
  schedule(options?: ILocalNotification | Array<ILocalNotification>): void { }

  /**
   * Updates a previously scheduled notification. Must include the id in the options parameter.
   * @param options {ILocalNotification} optional
   */
  @Cordova({
    sync: true
  })
  update(options?: ILocalNotification): void { }

  /**
   * Clears single or multiple notifications
   * @param notificationId {any} A single notification id, or an array of notification ids.
   * @returns {Promise<any>} Returns a promise when the notification had been cleared
   */
  @Cordova()
  clear(notificationId: any): Promise<any> { return; }

  /**
   * Clears all notifications
   * @returns {Promise<any>} Returns a promise when all notifications have cleared
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2
  })
  clearAll(): Promise<any> { return; }

  /**
   * Cancels single or multiple notifications
   * @param notificationId {any} A single notification id, or an array of notification ids.
   * @returns {Promise<any>} Returns a promise when the notification is canceled
   */
  @Cordova()
  cancel(notificationId: any): Promise<any> { return; }

  /**
   * Cancels all notifications
   * @returns {Promise<any>} Returns a promise when all notifications are canceled
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2
  })
  cancelAll(): Promise<any> { return; }

  /**
   * Checks presence of a notification
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isPresent(notificationId: number): Promise<boolean> { return; }

  /**
   * Checks is a notification is scheduled
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isScheduled(notificationId: number): Promise<boolean> { return; }

  /**
   * Checks if a notification is triggered
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isTriggered(notificationId: number): Promise<boolean> { return; }

  /**
   * Get all the notification ids
   * @returns {Promise<Array<number>>}
   */
  @Cordova()
  getAllIds(): Promise<Array<number>> { return; }

  /**
   * Get the ids of triggered notifications
   * @returns {Promise<Array<number>>}
   */
  @Cordova()
  getTriggeredIds(): Promise<Array<number>> { return; }

  /**
   * Get the ids of scheduled notifications
   * @returns {Promise<Array<number>>} Returns a promise
   */
  @Cordova()
  getScheduledIds(): Promise<Array<number>> { return; }

  /**
   * Get a notification object
   * @param notificationId {any} The id of the notification to get
   * @returns {Promise<ILocalNotification>}
   */
  @Cordova()
  get(notificationId: any): Promise<ILocalNotification> { return; }

  /**
   * Get a scheduled notification object
   * @param notificationId {any} The id of the notification to get
   * @returns {Promise<ILocalNotification>}
   */
  @Cordova()
  getScheduled(notificationId: any): Promise<ILocalNotification> { return; }

  /**
   * Get a triggered notification object
   * @param notificationId The id of the notification to get
   * @returns {Promise<ILocalNotification>}
   */
  @Cordova()
  getTriggered(notificationId: any): Promise<ILocalNotification> { return; }

  /**
   * Get all notification objects
   * @returns {Promise<Array<ILocalNotification>>}
   */
  @Cordova()
  getAll(): Promise<Array<ILocalNotification>> { return; }

  /**
   * Get all scheduled notification objects
   * @returns {Promise<Array<ILocalNotification>>}
   */
  @Cordova()
  getAllScheduled(): Promise<Array<ILocalNotification>> { return; }

  /**
   * Get all triggered notification objects
   * @returns {Promise<Array<ILocalNotification>>}
   */
  @Cordova()
  getAllTriggered(): Promise<Array<ILocalNotification>> { return; }

  /**
   * Register permission to show notifications if not already granted.
   * @returns {Promise<boolean>}
   */
  @Cordova()
  registerPermission(): Promise<boolean> { return; }

  /**
   * Informs if the app has the permission to show notifications.
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasPermission(): Promise<boolean> { return; }


  /**
   * Sets a callback for a specific event
   * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
   * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
   */
  @Cordova({
    sync: true
  })
  on(eventName: string, callback: any): void { }


}
