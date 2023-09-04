import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export enum ELocalNotificationTriggerUnit {
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  QUARTER = 'quarter',
  YEAR = 'year',
  WEEKDAY = 'weekday',
  WEEKDAY_ORDINAL = 'weekdayOrdinal',
  WEEK_OF_MONTH = 'weekOfMonth',
}

export interface ILocalNotificationEvery {
  /**
   * The minute.
   */
  minute?: number;

  /**
   * The hour.
   */
  hour?: number;

  /**
   * The day.
   */
  day?: number;

  /**
   * The day of week.
   */
  weekday?: number;

  /**
   * The week of yeaday of the ardinal week.
   */
  week?: number;

  /**
   * The day of the ordinal week.
   */
  weekdayOrdinal?: number;

  /**
   * The week of month.
   */
  weekOfMonth?: number;

  /**
   * The month.
   */
  month?: number;

  /**
   * The quarter.
   */
  quarter?: number;

  /**
   * The year.
   */
  year?: number;
}

export interface ILocalNotificationTrigger {
  /** ***** FIX */

  /**
   * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
   * Default: now ~ new Date()
   */
  at?: Date;

  /** ***** TIMESPAN */

  /**
   * Amount of units
   */
  in?: number;

  /**
   * Unit
   */
  unit?: ELocalNotificationTriggerUnit;

  /** ***** REPEAT/MATCH */

  /**
   * Amount of units
   */
  count?: number;

  /**
   * The unit
   */
  every?: ELocalNotificationTriggerUnit | ILocalNotificationEvery;

  /**
   * The end of the repeating notification
   */
  before?: Date;

  /**
   * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
   * Only for "repeat"
   * Default: now ~ new Date()
   */
  firstAt?: Date;

  /**
   * Only for "match"
   */
  after?: Date;

  /** ***** LOCATION */

  /**
   * IOS ONLY
   * Center of the location
   * Latitude and Longitude values
   */
  center?: number[];

  /**
   * IOS ONLY
   * Radius in meters
   */
  radius?: number;

  /**
   * IOS ONLY
   * Trigger on entry of the location
   */
  notifyOnEntry?: boolean;

  /**
   * IOS ONLY
   * Trigger on exit of the location
   */
  notifyOnExit?: boolean;

  /**
   * IOS ONLY
   * Trigger only once?
   */
  single?: boolean;
}

export enum ILocalNotificationActionType {
  INPUT = 'input',
  BUTTON = 'button',
}

/**
 * Notification action
 *
 * @see https://github.com/katzer/cordova-plugin-local-notifications#actions
 */
export interface ILocalNotificationAction {
  /**
   * The id of the action is used as the event name in the listener function
   */
  id?: string;

  /**
   * The title of the notification message
   */
  title?: string;

  /**
   * Make this notification show when app in foreground.
   */
  foreground?: boolean;

  /**
   * Specifies whether the action causes the app to launch in the foreground
   */
  launch?: boolean;

  /**
   * If the value is 'decline' the action is displayed with special highlighting to indicate that it performs a destructive task
   */
  ui?: string;

  /**
   * Specifies whether the action requires that the user’s device be unlocked.
   * When the user selects an action with this option, the system prompts
   * the user to unlock the device
   */
  needsAuth?: boolean;

  /**
   * The resource path of the action icon
   */
  icon?: string;

  /**
   * ANDROID ONLY
   * An array of pre-defined choices for users input
   */
  choices?: string[];

  /**
   * ANDROID ONLY
   * Specifies whether the user can provide arbitrary text values
   */
  editable?: boolean;

  /**
   * IOS ONLY
   * The title of the text input button that is displayed to the user.
   */
  submitTitle?: string;

  /**
   * The type of the action. If omitted 'button' is used.
   */
  type?: ILocalNotificationActionType;
}

export interface ILocalNotificationProgressBar {
  /**
   * Is the progress bar enabled?
   */
  enabled?: boolean;

  /**
   * The current value
   */
  value?: number;

  /**
   * ANDROID ONLY
   * The maximum value (default is 100)
   */
  maxValue?: number;

  /**
   * ANDROID ONLY
   * Show an indeterminate progress bar
   */
  indeterminate?: boolean;

  /**
   * WINDOWS ONLY
   * Gets or sets an optional string to be displayed instead of the
   * default percentage string. If this isn't provided, something
   * like "70%" will be displayed.
   */
  description?: string;

  /**
   * WINDOWS ONLY
   * Sets the status (required), which is displayed underneath the progress bar
   * on the left.
   * This string should reflect the status of the operation,
   * like "Downloading..." or "Installing..."
   */
  status?: string;
}

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
  text?: string | string[];

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
   * Use the default notification vibrate.
   */
  vibrate?: boolean;

  /**
   * ANDROID ONLY
   * Define the blinking of the LED on the device.
   * If set to true, the LED will blink in the default color with
   * timings for on and off set to 1000 ms.
   * If set to a string, the LED will blink in this ARGB value with
   * timings for on and off set to 1000 ms.
   * If set to an array, the value of the key 0 will be used as the color,
   * the value of the key 1 will be used as the 'on' timing, the value of
   * the key 2 will be used as the 'off' timing
   */
  led?: { color: string; on: number; off: number } | any[] | boolean | string;

  /**
   * Notification priority.
   * Integers between -2 and 2, whereas -2 is minimum and 2 is maximum priority
   */
  priority?: number;

  /**
   * Is a silent notification
   */
  silent?: boolean;

  /**
   * Specifies whether the a click on the notification causes the app
   * to launch in the foreground
   */
  launch?: boolean;

  /**
   * ANDROID ONLY
   * Wakeup the device. (default is true)
   */
  wakeup?: boolean;

  /**
   * ANDROID ONLY
   * Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled.
   */
  timeoutAfter?: number | false;

  /**
   * Actions id or actions
   */
  actions?: string | ILocalNotificationAction[];

  /**
   * When to trigger the notification
   */
  trigger?: ILocalNotificationTrigger;

  /**
   * A list of image attachments
   */
  attachments?: string[];

  /**
   * ANDROID ONLY
   * If and how the notification shall show the when date.
   * Possbile values:
   *                  boolean: true equals 'clock', false disable a watch/counter
   *                  'clock': Show the when date in the content view
   *                  'chronometer': Show a stopwatch
   *
   */
  clock?: boolean | string;

  /**
   * Shows a progress bar
   * Setting a boolean is a shortcut for {enabled: true/false} respectively
   */
  progressBar?: ILocalNotificationProgressBar | boolean;

  /**
   * ANDROID ONLY
   * If multiple notifications have the same group your app can present
   * them as a single group.
   */
  group?: string;

  /**
   * ANDROID ONLY
   * If set to 'true' this notification could use 'summary' to summarize
   * the contents of the whole group
   */
  groupSummary?: boolean;

  /**
   * ANDROID ONLY
   * Summary of the whole notification group. Should be used in conjuntion
   * with 'groupSummary' set to true
   */
  summary?: string;

  /**
   * ANDROID ONLY
   * Sets the number of items this notification represents.
   */
  number?: number;

  /**
   * ANDROID ONLY
   * Set whether this is an "ongoing" notification.
   * Ongoing notifications cannot be dismissed by the user,
   * so your application or service must take care of canceling them.
   */
  sticky?: boolean;

  /**
   * ANDROID ONLY
   * Make this notification automatically dismissed when the user touches it.
   */
  autoClear?: boolean;

  /**
   * ANDROID ONLY
   * If set to true the notification will be show in its entirety on all lockscreens.
   * If set to false it will not be revealed on a secure lockscreen.
   */
  lockscreen?: boolean;

  /**
   * ANDROID ONLY
   * Set the default notification options that will be used.
   * The value should be one or more of the following fields combined with
   * bitwise-or: DEFAULT_SOUND, DEFAULT_VIBRATE, DEFAULT_LIGHTS.
   */
  defaults?: number;

  /**
   * ANDROID ONLY
   * Specifies the channel the notification should be delivered on.
   */
  channel?: string;

  /**
   * ANDROID ONLY
   * Set the token for the media session
   */
  mediaSession?: string;

  /**
   * Make this notification show when app in foreground.
   */
  foreground?: boolean;
}

/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 * @usage
 * ```typescript
 * import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
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
 *    trigger: {at: new Date(new Date().getTime() + 3600)},
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 * @interfaces
 * ILocalNotification
 */
@Plugin({
  pluginName: 'LocalNotifications',
  plugin: 'cordova-plugin-local-notification',
  pluginRef: 'cordova.plugins.notification.local',
  repo: 'https://github.com/katzer/cordova-plugin-local-notifications',
  platforms: ['Android', 'iOS', 'Windows'],
})
@Injectable()
export class LocalNotifications extends AwesomeCordovaNativePlugin {
  /**
   * Informs if the app has the permission to show notifications.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasPermission(): Promise<boolean> {
    return;
  }

  /**
   * Request permission to show notifications if not already granted.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  requestPermission(): Promise<boolean> {
    return;
  }

  /**
   * Schedules a single or multiple notifications
   *
   * @param options {Notification | ILocalNotification[]} optional
   */
  @Cordova({
    sync: true,
  })
  schedule(options?: ILocalNotification | ILocalNotification[]): void {}

  /**
   * Updates a previously scheduled notification. Must include the id in the options parameter.
   *
   * @param options {ILocalNotification} optional
   */
  @Cordova({
    sync: true,
  })
  update(options?: ILocalNotification): void {}

  /**
   * Clears single or multiple notifications
   *
   * @param notificationId {any} A single notification id, or an array of notification ids.
   * @returns {Promise<any>} Returns a promise when the notification had been cleared
   */
  @Cordova()
  clear(notificationId: any): Promise<any> {
    return;
  }

  /**
   * Clears all notifications
   *
   * @returns {Promise<any>} Returns a promise when all notifications have cleared
   */
  @Cordova()
  clearAll(): Promise<any> {
    return;
  }

  /**
   * Cancels single or multiple notifications
   *
   * @param notificationId {any} A single notification id, or an array of notification ids.
   * @returns {Promise<any>} Returns a promise when the notification is canceled
   */
  @Cordova()
  cancel(notificationId: any): Promise<any> {
    return;
  }

  /**
   * Cancels all notifications
   *
   * @returns {Promise<any>} Returns a promise when all notifications are canceled
   */
  @Cordova()
  cancelAll(): Promise<any> {
    return;
  }

  /**
   * Checks presence of a notification
   *
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isPresent(notificationId: number): Promise<boolean> {
    return;
  }

  /**
   * Checks is a notification is scheduled
   *
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isScheduled(notificationId: number): Promise<boolean> {
    return;
  }

  /**
   * Checks if a notification is triggered
   *
   * @param notificationId {number}
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isTriggered(notificationId: number): Promise<boolean> {
    return;
  }

  /**
   * Check if a notification has a given type.
   *
   * @param {number} id The ID of the notification.
   * @param {string} type  The type of the notification.
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasType(id: number, type: string): Promise<boolean> {
    return;
  }

  /**
   * Get the type (triggered, scheduled) for the notification.
   *
   * @param {number} id The ID of the notification.
   */
  @Cordova()
  getType(id: number): Promise<boolean> {
    return;
  }

  /**
   * Get all the notification ids
   *
   * @returns {Promise<Array<number>>}
   */
  @Cordova()
  getIds(): Promise<number[]> {
    return;
  }

  /**
   * Get the ids of scheduled notifications
   *
   * @returns {Promise<number[]>} Returns a promise
   */
  @Cordova()
  getScheduledIds(): Promise<number[]> {
    return;
  }

  /**
   * Get the ids of triggered notifications
   *
   * @returns {Promise<Array<number>>}
   */
  @Cordova()
  getTriggeredIds(): Promise<number[]> {
    return;
  }

  /**
   * Get a notification object
   *
   * @param notificationId {any} The id of the notification to get
   * @returns {Promise<ILocalNotification>}
   */
  @Cordova()
  get(notificationId: any): Promise<ILocalNotification> {
    return;
  }

  /**
   * Get all notification objects
   *
   * @returns {Promise<ILocalNotification[]>}
   */
  @Cordova()
  getAll(): Promise<ILocalNotification[]> {
    return;
  }

  /**
   * Get a scheduled notification object
   *
   * @param notificationId {any} The id of the notification to get
   * @returns {Promise<ILocalNotification>}
   */
  @Cordova()
  getScheduled(notificationId: any): Promise<ILocalNotification> {
    return;
  }

  /**
   * Get a triggered notification object
   *
   * @param notificationId The id of the notification to get
   * @returns {Promise<ILocalNotification>}
   */
  @Cordova()
  getTriggered(notificationId: any): Promise<ILocalNotification> {
    return;
  }

  /**
   * Adds a group of actions
   *
   * @param groupId The id of the action group
   * @param actions The actions of this group
   * @returns {Promise<any>}
   */
  @Cordova()
  addActions(groupId: any, actions: ILocalNotificationAction[]): Promise<any> {
    return;
  }

  /**
   * Removes a group of actions
   *
   * @param groupId The id of the action group
   * @returns {Promise<any>}
   */
  @Cordova()
  removeActions(groupId: any): Promise<any> {
    return;
  }

  /**
   * Checks if a group of actions is defined
   *
   * @param groupId The id of the action group
   * @returns {Promise<boolean>} Whether the group is defined
   */
  @Cordova()
  hasActions(groupId: any): Promise<boolean> {
    return;
  }

  /**
   * Gets the (platform specific) default settings.
   *
   * @returns {Promise<any>} An object with all default settings
   */
  @Cordova({
    sync: true,
  })
  getDefaults(): Promise<any> {
    return;
  }

  /**
   * Overwrites the (platform specific) default settings.
   *
   * @param defaults
   * @returns {Promise<any>}
   */
  @Cordova({
    sync: true,
  })
  setDefaults(defaults: any): Promise<any> {
    return;
  }

  /**
   * Get all scheduled notification objects
   *
   * @returns {Promise<Array<ILocalNotification>>}
   */
  @Cordova()
  getAllScheduled(): Promise<ILocalNotification[]> {
    return;
  }

  /**
   * Get all triggered notification objects
   *
   * @returns {Promise<Array<ILocalNotification>>}
   */
  @Cordova()
  getAllTriggered(): Promise<ILocalNotification[]> {
    return;
  }

  /**
   * Sets a callback for a specific event
   *
   * @param eventName {string} The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
   * @returns {Observable}
   */
  @Cordova({
    observable: true,
    clearFunction: 'un',
    clearWithArgs: true,
  })
  on(eventName: string): Observable<any> {
    return;
  }

  /**
   * Not an official interface, however its possible to manually fire events.
   *
   * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
   * @param args Optional arguments
   */
  @Cordova({
    sync: true,
  })
  fireEvent(eventName: string, args: any): void {}

  /**
   * Fire queued events once the device is ready and all listeners are registered.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  fireQueuedEvents(): Promise<any> {
    return;
  }
}
