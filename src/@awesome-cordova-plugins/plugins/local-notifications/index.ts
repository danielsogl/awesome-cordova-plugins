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

/**
 * ANDROID ONLY
 * Values for the `androidAlarmType` property.
 *
 * @see https://developer.android.com/develop/background-work/services/alarms/schedule#type
 */
export enum ELocalNotificationAndroidAlarmType {
  RTC_WAKEUP = 'RTC_WAKEUP',
  RTC = 'RTC',
  /** Not supported */
  ELAPSED_REALTIME_WAKEUP = 'ELAPSED_REALTIME_WAKEUP',
  /** Not supported */
  ELAPSED_REALTIME = 'ELAPSED_REALTIME',
}

/**
 * ANDROID ONLY
 * Values for the `androidChannelImportance` property.
 *
 * @see https://developer.android.com/develop/ui/views/notifications#importance
 */
export enum ELocalNotificationAndroidChannelImportance {
  IMPORTANCE_NONE = 'IMPORTANCE_NONE',
  IMPORTANCE_MIN = 'IMPORTANCE_MIN',
  IMPORTANCE_LOW = 'IMPORTANCE_LOW',
  IMPORTANCE_DEFAULT = 'IMPORTANCE_DEFAULT',
  IMPORTANCE_HIGH = 'IMPORTANCE_HIGH',
  IMPORTANCE_MAX = 'IMPORTANCE_MAX',
}

/**
 * ANDROID ONLY
 * Status codes returned by `getUnusedAppRestrictionsStatus`.
 */
export enum ELocalNotificationAndroidUnusedAppRestrictionsStatus {
  /**
   * The status of Unused App Restrictions could not be retrieved from this app e.g.
   * if the app's target SDK version <30 or the user is in locked device boot mode.
   */
  ERROR = 0,

  /** There are no available Unused App Restrictions for this app. */
  FEATURE_NOT_AVAILABLE = 1,

  /**
   * Any available Unused App Restrictions on the device are disabled for this app.
   * In other words, this app is exempt from having its permissions automatically removed or being hibernated.
   */
  DISABLED = 2,

  /**
   * Unused App Restrictions introduced by Android API 30, and since made available on earlier (API 23-29) devices
   * are enabled for this app: permission auto-reset. Only used on API 29 or earlier devices.
   */
  API_30_BACKPORT = 3,

  /**
   * Unused App Restrictions introduced by Android API 30 are enabled for this app: permission auto-reset.
   * Only used on API 30 or later devices.
   */
  API_30 = 4,

  /**
   * Unused App Restrictions introduced by Android API 31 are enabled for this app:
   * permission auto-reset and app hibernation. Only used on API 31 or later devices.
   */
  API_31 = 5,
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
   *
   * @deprecated Not read by the plugin since it no longer maps to a native option. Use `launch` to bring the app to the foreground on selection instead.
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
   * ANDROID ONLY
   * The resource path of the action icon. Not supported anymore for normal notifications since Android 7,
   * it will only be used on Android Wear.
   */
  icon?: string;

  /**
   * Placeholder text for the input field of an action of type 'input'.
   */
  emptyText?: string;

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
   *
   * @deprecated Not supported anymore. Setting `androidProgressBar` to an object enables it, `null`/omitting it disables it.
   */
  enabled?: boolean;

  /**
   * The current value
   * Default: 0
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
   * Default: false
   */
  indeterminate?: boolean;

  /**
   * WINDOWS ONLY
   * Gets or sets an optional string to be displayed instead of the
   * default percentage string. If this isn't provided, something
   * like "70%" will be displayed.
   *
   * @deprecated Windows is no longer a supported platform of this plugin.
   */
  description?: string;

  /**
   * WINDOWS ONLY
   * Sets the status (required), which is displayed underneath the progress bar
   * on the left.
   * This string should reflect the status of the operation,
   * like "Downloading..." or "Installing..."
   *
   * @deprecated Windows is no longer a supported platform of this plugin.
   */
  status?: string;
}

/**
 * ANDROID ONLY
 * A single message of the `androidMessages` property, used to summarize/group notifications.
 *
 * @see https://github.com/katzer/cordova-plugin-local-notifications#summarizing
 */
export interface ILocalNotificationAndroidMessage {
  /**
   * The message text.
   * Default: null
   */
  message?: string;

  /**
   * Timestamp in milliseconds, e.g. by Date.getTime().
   * Default: System.currentTimeMillis()
   */
  date?: number;

  /**
   * The name of the person who sent the message.
   * Default: null
   */
  person?: string;

  /**
   * The icon of the person, drawn as a circle icon.
   * Default: null
   */
  personIcon?: string;
}

/**
 * ANDROID ONLY
 * Options for `createChannel`.
 *
 * @see https://github.com/katzer/cordova-plugin-local-notifications#createchannel
 */
export interface ILocalNotificationChannel {
  /**
   * The id of the channel. Use Snake Case (lowercase, words separated by underscores).
   */
  androidChannelId: string;

  /**
   * The name of the channel.
   * Default: "Default channel"
   */
  androidChannelName?: string;

  /**
   * The description of the channel.
   */
  androidChannelDescription?: string;

  /**
   * The importance of the channel.
   * Default: IMPORTANCE_DEFAULT
   */
  androidChannelImportance?: ELocalNotificationAndroidChannelImportance;

  /**
   * Whether notifications posted to this channel should display notification lights.
   * Default: false
   */
  androidChannelEnableLights?: boolean;

  /**
   * Whether notifications posted to this channel should vibrate.
   * Default: false
   */
  androidChannelEnableVibration?: boolean;

  /**
   * The sound to play for notifications posted to this channel.
   */
  sound?: string;

  /**
   * The audio usage of the channel's sound.
   * Default: 5 (USAGE_NOTIFICATION)
   */
  androidChannelSoundUsage?: number;
}

export interface ILocalNotification {
  /**
   * A unique identifier required to clear, cancel, update or retrieve the local notification in the future
   * Default: 1
   */
  id?: number;

  /**
   * First row of the notification
   * Default: Empty string, the app name will be used if empty
   */
  title?: string;

  /**
   * Second row of the notification
   * Default: Empty string
   *
   * @deprecated Passing an array is deprecated since upstream 1.1.0. Use `androidMessages` instead.
   */
  text?: string | string[];

  /**
   * The number currently set as the badge of the app icon in Springboard (iOS) or at the right-hand side of the local notification (Android)
   * Default: 0 (which means don't show a number)
   *
   * @deprecated Renamed to `badgeNumber` in upstream 1.1.0.
   */
  badge?: number;

  /**
   * Overwrites `badge`.
   * Sets the badge for the application. The behaviour differs between platforms:
   * Android: increments the badge by the specified number. Default: 1
   * iOS: sets the badge directly. -1 leaves it unchanged, 0 clears it. Default: -1
   */
  badgeNumber?: number;

  /**
   * Uri of the file containing the sound to play when an alert is displayed
   * Default: 'default'
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
   *
   * @deprecated Renamed to `androidLargeIcon` in upstream 1.1.0.
   */
  icon?: string;

  /**
   * ANDROID ONLY
   * Add a large icon to the notification content view.
   * Default: null
   */
  androidLargeIcon?: string;

  /**
   * ANDROID ONLY
   * Can be `square` or `circle`.
   * Default: 'square'
   */
  androidLargeIconType?: 'square' | 'circle';

  /**
   * ANDROID ONLY
   * Uri of the resource (only res://) to use in the notification layouts. Different classes of devices may return different sizes
   * Default: res://ic_popup_reminder
   *
   * @deprecated Renamed to `androidSmallIcon` in upstream 1.1.0.
   */
  smallIcon?: string;

  /**
   * ANDROID ONLY
   * Set the small icon resource, which will be used to represent the notification in the status bar.
   * Default: res://ic_popup_reminder
   */
  androidSmallIcon?: string;

  /**
   * ANDROID ONLY
   * RGB value for the background color of the smallIcon.
   * Default: Androids COLOR_DEFAULT, which will vary based on Android version.
   *
   * @deprecated Renamed to `androidColor` in upstream 1.1.0.
   */
  color?: string;

  /**
   * ANDROID ONLY
   * The notification background color for the small icon, as a hex string like `#FF0000`.
   * Default: null
   */
  androidColor?: string;

  /**
   * ANDROID ONLY
   * Use the default notification vibrate.
   *
   * @deprecated Renamed to `androidChannelEnableVibration` in upstream 1.1.1.
   */
  vibrate?: boolean;

  /**
   * ANDROID ONLY
   * Enables the vibration of a notification channel.
   * Default: false
   */
  androidChannelEnableVibration?: boolean;

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
   * Only supported on Android 7, replaced by `androidChannelEnableLights` on newer versions.
   */
  led?: { color: string; on: number; off: number } | any[] | boolean | string;

  /**
   * ANDROID ONLY
   * Whether notifications posted to a channel should display notification lights.
   * Default: false
   */
  androidChannelEnableLights?: boolean;

  /**
   * Notification priority.
   * Integers between -2 and 2, whereas -2 is minimum and 2 is maximum priority
   * Default: 0 (PRIORITY_DEFAULT)
   *
   * @deprecated Use `androidChannelImportance`, `androidAlarmType` and `androidAllowWhileIdle` instead since upstream 1.1.0.
   */
  priority?: number;

  /**
   * ANDROID ONLY
   * If the alarm should be scheduled on a specific time or in relevance to the time the device was booted,
   * and if the alarm should wake up the device cpu (not the screen).
   * Default: RTC_WAKEUP
   */
  androidAlarmType?: ELocalNotificationAndroidAlarmType;

  /**
   * ANDROID ONLY
   * Alarm will be allowed to execute even when the system is in low-power idle (a.k.a. doze) modes.
   * Default: false
   */
  androidAllowWhileIdle?: boolean;

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
   *
   * @deprecated Renamed to `androidWakeUpScreen` in upstream 1.1.0.
   */
  wakeup?: boolean;

  /**
   * ANDROID ONLY
   * If the screen should go on, when a notification arrives.
   * Default: true
   */
  androidWakeUpScreen?: boolean;

  /**
   * ANDROID ONLY
   * Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled.
   *
   * @deprecated Renamed to `androidTimeoutAfter` in upstream 1.1.0.
   */
  timeoutAfter?: number | false;

  /**
   * ANDROID ONLY
   * Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled.
   * `0` means no automatic cancellation.
   * Default: 0
   */
  androidTimeoutAfter?: number | false;

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
   * @deprecated Since upstream 1.1.0. Use `androidShowWhen: boolean` for `clock: boolean` and `androidUsesChronometer: true` for `clock: 'chronometer'`.
   */
  clock?: boolean | string;

  /**
   * ANDROID ONLY
   * If the Notification should show the when date.
   * Default: true
   */
  androidShowWhen?: boolean;

  /**
   * ANDROID ONLY
   * Show the Notification#when field as a stopwatch, instead of a timestamp.
   * Default: false
   */
  androidUsesChronometer?: boolean;

  /**
   * Shows a progress bar
   * Setting a boolean is a shortcut for {enabled: true/false} respectively
   *
   * @deprecated Renamed to `androidProgressBar` in upstream 1.1.0.
   */
  progressBar?: ILocalNotificationProgressBar | boolean;

  /**
   * ANDROID ONLY
   * Shows a progress bar. See https://github.com/katzer/cordova-plugin-local-notifications#progress
   * Default: null
   */
  androidProgressBar?: ILocalNotificationProgressBar;

  /**
   * ANDROID ONLY
   * If multiple notifications have the same group your app can present
   * them as a single group.
   *
   * @deprecated Renamed to `androidGroup` in upstream 1.1.0.
   */
  group?: string;

  /**
   * ANDROID ONLY
   * Set this notification to be part of a group of notifications sharing the same key.
   * Default: null
   */
  androidGroup?: string;

  /**
   * ANDROID ONLY
   * If set to 'true' this notification could use 'summary' to summarize
   * the contents of the whole group
   *
   * @deprecated Renamed to `androidGroupSummary` in upstream 1.1.0.
   */
  groupSummary?: boolean;

  /**
   * ANDROID ONLY
   * Set this notification to be the group summary for a group of notifications. Requires `androidGroup` also being set.
   * Default: false
   */
  androidGroupSummary?: boolean;

  /**
   * ANDROID ONLY
   * Summary of the whole notification group. Should be used in conjuntion
   * with 'groupSummary' set to true
   *
   * @deprecated Renamed to `androidSummary` in upstream 1.1.0.
   */
  summary?: string;

  /**
   * ANDROID ONLY
   * Used as summary text for the InboxStyle, BigPictureStyle or BigTextStyle notification, depending on which is used.
   * Default: null
   */
  androidSummary?: string;

  /**
   * ANDROID ONLY
   * Array of messages to summarize notifications, uses NotificationCompat.MessagingStyle.
   * Default: null
   */
  androidMessages?: ILocalNotificationAndroidMessage[];

  /**
   * ANDROID ONLY
   * Additional text added to the title for displaying the number of messages, when using MessagingStyle.
   * Use `%n%` in the string for specifying the location of the number.
   * Default: '%n%'
   */
  androidTitleCount?: string;

  /**
   * ANDROID ONLY
   * Sets the number of items this notification represents.
   *
   * @deprecated Removed upstream in 1.1.0 and no longer part of the plugin's options.
   */
  number?: number;

  /**
   * ANDROID ONLY
   * Set whether this is an "ongoing" notification.
   * Ongoing notifications cannot be dismissed by the user,
   * so your application or service must take care of canceling them.
   *
   * @deprecated Renamed to `androidOngoing` in upstream 1.1.0.
   */
  sticky?: boolean;

  /**
   * ANDROID ONLY
   * Set whether this is an ongoing notification. Ongoing notifications cannot be dismissed by the user on locked devices.
   * Default: false
   */
  androidOngoing?: boolean;

  /**
   * ANDROID ONLY
   * Set this flag if you would only like the sound, vibrate and ticker to be played if the notification is not already showing.
   * Default: false
   */
  androidOnlyAlertOnce?: boolean;

  /**
   * ANDROID ONLY
   * Make this notification automatically dismissed when the user touches it.
   *
   * @deprecated Renamed to `androidAutoCancel` in upstream 1.1.0.
   */
  autoClear?: boolean;

  /**
   * ANDROID ONLY
   * Make this notification automatically dismissed when the user touches it.
   * Default: true
   */
  androidAutoCancel?: boolean;

  /**
   * ANDROID ONLY
   * If set to true the notification will be show in its entirety on all lockscreens.
   * If set to false it will not be revealed on a secure lockscreen.
   *
   * @deprecated Renamed to `androidLockscreen` in upstream 1.1.0.
   */
  lockscreen?: boolean;

  /**
   * ANDROID ONLY
   * If the entire notification should be shown on all lockscreens and while screen sharing.
   * Default: true
   */
  androidLockscreen?: boolean;

  /**
   * ANDROID ONLY
   * Set the default notification options that will be used.
   * The value should be one or more of the following fields combined with
   * bitwise-or: DEFAULT_SOUND, DEFAULT_VIBRATE, DEFAULT_LIGHTS.
   *
   * @deprecated Renamed to `androidDefaults` in upstream 1.1.0.
   */
  defaults?: number;

  /**
   * ANDROID ONLY
   * Android 7 only. Sets the default notification options that will be used only on Android 7.
   * Default: 0
   */
  androidDefaults?: number;

  /**
   * ANDROID ONLY
   * Specifies the channel the notification should be delivered on.
   *
   * @deprecated Renamed to `androidChannelId` in upstream 1.1.0.
   */
  channel?: string;

  /**
   * ANDROID ONLY
   * Specifies the channel id to be posted on. Use Snake Case (lowercase, words separated by underscores).
   * Default: 'default_channel'
   */
  androidChannelId?: string;

  /**
   * ANDROID ONLY
   * Sets the `channelName` for the notification to be posted on.
   * Default: 'Default channel'
   */
  androidChannelName?: string;

  /**
   * ANDROID ONLY
   * Sets the `description` of a notification channel.
   * Default: null
   */
  androidChannelDescription?: string;

  /**
   * ANDROID ONLY
   * Sets the importance of a notification channel.
   * Default: IMPORTANCE_DEFAULT
   */
  androidChannelImportance?: ELocalNotificationAndroidChannelImportance;

  /**
   * ANDROID ONLY
   * Sets the audio usage of a notification channel's sound.
   * Default: 5 (USAGE_NOTIFICATION)
   */
  androidChannelSoundUsage?: number;

  /**
   * ANDROID ONLY
   * Set the token for the media session
   *
   * @deprecated Removed upstream in 1.1.0. This option and MediaStyle are no longer supported.
   */
  mediaSession?: string;

  /**
   * Make this notification show when app in foreground.
   *
   * @deprecated Renamed to `iOSForeground` in upstream 1.1.0.
   */
  foreground?: boolean;

  /**
   * IOS ONLY
   * Displays notification in foreground, when app is active.
   * Default: true
   */
  iOSForeground?: boolean;
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
  platforms: ['Android', 'iOS'],
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
   * ANDROID ONLY
   * Checks if the user has enabled the "Alarms & Reminders" setting, required for exact alarms.
   * On Android 11 and older this always resolves true, on Android 12 it's granted by default,
   * on Android 13 and newer it has to be explicitly enabled by the user.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  canScheduleExactAlarms(): Promise<boolean> {
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
   * @returns {Promise<string>}
   */
  @Cordova()
  getType(id: number): Promise<string> {
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
   * Get all scheduled notification objects.
   *
   * @param notificationId {any} Optional. No longer used upstream, kept only for backward compatibility.
   * @returns {Promise<ILocalNotification[]>}
   */
  @Cordova()
  getScheduled(notificationId?: any): Promise<ILocalNotification[]> {
    return;
  }

  /**
   * Get all triggered notification objects.
   *
   * @param notificationId {any} Optional. No longer used upstream, kept only for backward compatibility.
   * @returns {Promise<ILocalNotification[]>}
   */
  @Cordova()
  getTriggered(notificationId?: any): Promise<ILocalNotification[]> {
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
   * ANDROID ONLY
   * Creates a notification channel, if it doesn't already exist. A channel can't be changed after creation.
   *
   * @param options {ILocalNotificationChannel} The channel to create
   * @returns {Promise<any>}
   */
  @Cordova()
  createChannel(options: ILocalNotificationChannel): Promise<any> {
    return;
  }

  /**
   * ANDROID ONLY
   * Deletes a notification channel by id. If you create a new channel with the same id, the deleted
   * channel will be un-deleted with all of the same settings it had before it was deleted.
   *
   * @param channelId {string} The id of the channel to delete
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteChannel(channelId: string): Promise<any> {
    return;
  }

  /**
   * Get all scheduled notification objects
   *
   * @returns {Promise<Array<ILocalNotification>>}
   * @deprecated Duplicate of `getScheduled()`, kept for backward compatibility. Use `getScheduled()` instead.
   */
  @Cordova({
    methodName: 'getScheduled',
  })
  getAllScheduled(): Promise<ILocalNotification[]> {
    return;
  }

  /**
   * Get all triggered notification objects
   *
   * @returns {Promise<Array<ILocalNotification>>}
   * @deprecated Duplicate of `getTriggered()`, kept for backward compatibility. Use `getTriggered()` instead.
   */
  @Cordova({
    methodName: 'getTriggered',
  })
  getAllTriggered(): Promise<ILocalNotification[]> {
    return;
  }

  /**
   * Opens the notification settings of the app. On Android 8+ it opens the app's notification settings,
   * on older Android versions it opens the app details. On iOS it's not possible to open the notification
   * settings directly, so it opens the app settings instead.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  openNotificationSettings(): Promise<any> {
    return;
  }

  /**
   * ANDROID ONLY
   * Since Android 12 (SDK 31). Opens the "Alarms & Reminders" setting, where the user can manually
   * enable exact alarms. Requires the SCHEDULE_EXACT_ALARM permission to be declared in the AndroidManifest.xml.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  openAlarmSettings(): Promise<any> {
    return;
  }

  /**
   * IOS ONLY
   * Clears the badge of the app icon.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  iOSClearBadge(): Promise<any> {
    return;
  }

  /**
   * ANDROID ONLY
   * Returns the status of the unused app restrictions (app hibernation), introduced in Android 11
   * and backported to Android 6 through the Google Play Store.
   *
   * @returns {Promise<ELocalNotificationAndroidUnusedAppRestrictionsStatus>}
   */
  @Cordova()
  getUnusedAppRestrictionsStatus(): Promise<ELocalNotificationAndroidUnusedAppRestrictionsStatus> {
    return;
  }

  /**
   * ANDROID ONLY
   * Redirects the user to manage their unused app restriction settings. The returned promise resolves once
   * the user returns to the app; use `getUnusedAppRestrictionsStatus` to check the resulting status.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  openManageUnusedAppRestrictions(): Promise<any> {
    return;
  }

  /**
   * Sets a callback for a specific event
   *
   * @param eventName {string} The name of the event. Available events: add, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
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
   * @param eventName The name of the event. Available events: add, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
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
