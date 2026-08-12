import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface OSNotification {
  /**
   * Was app in focus.
   */
  isAppInFocus?: boolean;
  /**
   * Was notification shown to the user. Will be false for silent notifications.
   */
  shown?: boolean;
  /**
   * ANDROID** - Android Notification assigned to the notification. Can be used to cancel or replace the notification.
   */
  androidNotificationId?: number;
  /**
   * Payload received from OneSignal.
   */
  payload?: OSNotificationPayload;
  /**
   * How the notification was displayed to the user. Can be set to `Notification`, `InAppAlert`, or `None` if it was not displayed.
   */
  displayType?: OSDisplayType;
  /**
   * ANDROID** - Notification is a summary notification for a group this will contain all notification payloads it was created from.
   */
  groupedNotifications?: OSNotificationPayload[];
  app_id?: string;
  contents?: any;
  headings?: any;
  isIos?: boolean;
  isAndroid?: boolean;
  isWP?: boolean;
  isWP_WNS?: boolean;
  isAdm?: boolean;
  isChrome?: boolean;
  isChromeWeb?: boolean;
  isSafari?: boolean;
  isAnyWeb?: boolean;
  included_segments?: string[];
  excluded_segments?: string[];
  include_player_ids?: string[];
  include_ios_tokens?: string[];
  include_android_reg_ids?: string[];
  include_wp_uris?: string[];
  include_wp_wns_uris?: string[];
  include_amazon_reg_ids?: string[];
  include_chrome_reg_ids?: string[];
  include_chrome_web_reg_ids?: string[];
  app_ids?: string[];
  tags?: any[];
  ios_badgeType?: string;
  ios_badgeCount?: number;
  ios_sound?: string;
  android_sound?: string;
  adm_sound?: string;
  wp_sound?: string;
  wp_wns_sound?: string;
  data?: any;
  buttons?: any;
  collapse_id?: string;
  small_icon?: string;
  large_icon?: string;
  big_picture?: string;
  adm_small_icon?: string;
  adm_large_icon?: string;
  adm_big_picture?: string;
  chrome_icon?: string;
  chrome_big_picture?: string;
  chrome_web_icon?: string;
  firefox_icon?: string;
  url?: string;
  send_after?: string;
  delayed_option?: string;
  delivery_time_of_day?: string;
  android_led_color?: string;
  android_accent_color?: string;
  android_visibility?: number;
  content_available?: boolean;
  amazon_background_data?: boolean;
  template_id?: string;
  android_group?: string;
  android_group_message?: any;
  adm_group?: string;
  adm_group_message?: any;
  ttl?: number;
  priority?: number;
  ios_category?: string;
}

/**
 * ANDROID** - Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.
 */
export enum OSLockScreenVisibility {
  /**
   * Fully visible (default)
   */
  Public = 1,
  /**
   * Contents are hidden
   */
  Private = 0,
  /**
   * Not shown
   */
  Secret = -1,
}

/**
 * How the notification was displayed to the user. Part of OSNotification. See inFocusDisplaying for more information on how this is used.
 */
export enum OSDisplayType {
  /**
   * notification is silent, or inFocusDisplaying is disabled.
   */
  None = 0,
  /**
   * (**DEFAULT**) - native alert dialog display.
   */
  InAppAlert = 1,
  /**
   * native notification display.
   */
  Notification = 2,
}

/**
 * Contents and settings of the notification the user received.
 */
export interface OSNotificationPayload {
  /**
   * OneSignal notification UUID.
   */
  notificationID: string;
  /**
   * Title of the notification.
   */
  title: string;
  /**
   * Body of the notification.
   */
  body: string;
  /**
   * Custom additional data that was sent with the notification. Set on the dashboard under Options > Additional Data
   * or with the 'data' field on the REST API.
   */
  additionalData?: any;
  /**
   * ANDROID** - Small icon resource name set on the notification.
   */
  smallIcon?: string;
  /**
   * ANDROID** - Large icon set on the notification.
   */
  largeIcon?: string;
  /**
   * ANDROID** - Big picture image set on the notification.
   */
  bigPicture?: string;
  /**
   * ANDROID** - Accent color shown around small notification icon on Android 5+ devices. ARGB format.
   */
  smallIconAccentColor?: string;
  /**
   * URL to open when opening the notification.
   */
  launchURL?: string;
  /**
   * Sound resource to play when the notification is shown.
   */
  sound: string;
  /**
   * ANDROID** - Devices that have a notification LED will blink in this color. ARGB format.
   */
  ledColor?: string;
  lockScreenVisibility?: OSLockScreenVisibility;
  /**
   * ANDROID** - Notifications with this same key will be grouped together as a single summary notification.
   */
  groupKey?: string;
  /**
   * ANDROID** - Summary text displayed in the summary notification.
   */
  groupMessage?: string;
  /**
   * List of action buttons on the notification.
   */
  actionButtons: OSActionButton[];
  /**
   * ANDROID** - The Google project number the notification was sent under.
   */
  fromProjectNumber?: string;
  /**
   * ANDROID** - If a background image was set this object will be available.
   */
  backgroundImageLayout?: OSBackgroundImageLayout;
  priority?: number;
  /**
   * List of action buttons on the notification.
   */
  rawPayload: string;
}

/**
 * List of action buttons on the notification.
 */
export interface OSActionButton {
  /**
   * Id assigned to the button.
   */
  id: string;
  /**
   * Text show on the button to the user.
   */
  text: string;
  /**
   * ANDROID** - Icon shown on the button.
   */
  icon: string;
}

/**
 * OSPermissionState
 */
export interface OSPermissionState {
  /**
   * User was prompted.
   */
  hasPrompted: boolean;
  /**
   * Permissions Status (iOS Only)
   */
  status: any;
  /**
   * Permissions State (Android Only)
   */
  state: any;
}

/**
 * OSSubscriptionState
 */
export interface OSSubscriptionState {
  subscribed: boolean;
  userSubscriptionSetting: any;
  userId: any;
  pushToken: any;
}

/**
 * Subscription and permissions status
 */
export interface OSPermissionSubscriptionState {
  /**
   * Id assigned to the button.
   */
  permissionStatus: OSPermissionState;
  /**
   * Text show on the button to the user.
   */
  subscriptionStatus: OSSubscriptionState;
}

/**
 * ANDROID** - If a background image was set, this object will be available.
 */
export interface OSBackgroundImageLayout {
  /**
   * Image URL or name used as the background image.
   */
  image: string;
  /**
   * Text color of the title on the notification. ARGB Format.
   */
  titleTextColor: string;
  /**
   * Text color of the body on the notification. ARGB Format.
   */
  bodyTextColor: string;
}

/**
 * The information returned from a notification the user received.
 */
export interface OSNotificationOpenedResult {
  action: {
    /**
     * Was the notification opened normally (`Opened`) or was a button pressed on the notification (`ActionTaken`).
     */
    type: OSActionType;
    /**
     * If `type` == `ActionTaken` then this will contain the id of the button pressed.
     */
    actionID?: string;
  };
  notification: OSNotification;
}

export enum OSActionType {
  Opened = 0,
  ActionTake = 1,
}

/**
 * Details about the In-App Message action element (button or image) that was tapped on.
 */
export interface OSInAppMessageAction {
  /**
   * An optional click name defined for the action element. null or nil (iOS) if not set.
   */
  click_name: string;
  /**
   * An optional URL that opens when the action takes place. null or nil (iOS) if not set.
   */
  click_url: string;
  /**
   * `true` if this is the first time the user has pressed any action on the In-App Message.
   */
  first_click: boolean;
  /**
   * If `true`, the In-App Message will animate off the screen. If `false`, the In-App Message will stay on screen until the user dismisses it.
   */
  closes_message: boolean;
}

/**
 * Logging levels used by `OneSignalDebug`. Available since onesignal-cordova-plugin v5.0.0.
 */
export enum LogLevel {
  None = 0,
  Fatal = 1,
  Error = 2,
  Warn = 3,
  Info = 4,
  Debug = 5,
  Verbose = 6,
}

/**
 * iOS** - Native push notification permission state returned by `OneSignalNotifications.permissionNative`.
 * Available since onesignal-cordova-plugin v5.0.0.
 */
export enum OSNotificationPermission {
  NotDetermined = 0,
  Denied = 1,
  Authorized = 2,
  /**
   * Only available in iOS 12+.
   */
  Provisional = 3,
  /**
   * Only available in iOS 14+.
   */
  Ephemeral = 4,
}

/**
 * Options for `OneSignalLiveActivities.setupDefault`.
 */
export interface LiveActivitySetupOptions {
  /**
   * When true, OneSignal will listen for pushToStart tokens for the `OneSignalLiveActivityAttributes` structure.
   */
  enablePushToStart: boolean;
  /**
   * When true, OneSignal will listen for pushToUpdate tokens for each started live activity that uses the
   * `OneSignalLiveActivityAttributes` structure.
   */
  enablePushToUpdate: boolean;
}

/**
 * Snapshot of the current user identifiers. See `OneSignalUser.addEventListener`.
 */
export interface UserState {
  onesignalId?: string;
  externalId?: string;
}

/**
 * Payload delivered to `OneSignalUser.addEventListener('change', ...)`.
 */
export interface UserChangedState {
  current: UserState;
}

/**
 * Snapshot of the current push subscription. See `OneSignalUserPushSubscription.addEventListener`.
 */
export interface PushSubscriptionState {
  id?: string;
  token?: string;
  optedIn: boolean;
}

/**
 * Payload delivered to `OneSignalUserPushSubscription.addEventListener('change', ...)`.
 */
export interface PushSubscriptionChangedState {
  previous: PushSubscriptionState;
  current: PushSubscriptionState;
}

/**
 * An In-App Message instance. See the `OneSignalInAppMessages` event payloads.
 */
export interface OSInAppMessage {
  /**
   * The In-App Message's UUID.
   */
  messageId: string;
}

/**
 * Type of URL opened by an In-App Message action.
 */
export type InAppMessageActionUrlType = 'browser' | 'webview' | 'replacement';

/**
 * Result of an In-App Message action element (button or image) being tapped on.
 */
export interface InAppMessageClickResult {
  /**
   * Whether tapping the action closes the In-App Message.
   */
  closingMessage: boolean;
  /**
   * An optional click name defined for the action element.
   */
  actionId?: string;
  /**
   * An optional URL that opens when the action takes place.
   */
  url?: string;
  urlTarget?: InAppMessageActionUrlType;
}

/**
 * Payload delivered to `OneSignalInAppMessages.addEventListener('click', ...)`.
 */
export interface InAppMessageClickEvent {
  message: OSInAppMessage;
  result: InAppMessageClickResult;
}

/**
 * Payload delivered to `OneSignalInAppMessages.addEventListener('willDisplay', ...)`.
 */
export interface InAppMessageWillDisplayEvent {
  message: OSInAppMessage;
}

/**
 * Payload delivered to `OneSignalInAppMessages.addEventListener('didDisplay', ...)`.
 */
export interface InAppMessageDidDisplayEvent {
  message: OSInAppMessage;
}

/**
 * Payload delivered to `OneSignalInAppMessages.addEventListener('willDismiss', ...)`.
 */
export interface InAppMessageWillDismissEvent {
  message: OSInAppMessage;
}

/**
 * Payload delivered to `OneSignalInAppMessages.addEventListener('didDismiss', ...)`.
 */
export interface InAppMessageDidDismissEvent {
  message: OSInAppMessage;
}

/**
 * Event names supported by `OneSignalInAppMessages.addEventListener`.
 */
export type InAppMessageEventName = 'click' | 'willDisplay' | 'didDisplay' | 'willDismiss' | 'didDismiss';

/**
 * Maps `InAppMessageEventName` to its corresponding event payload type.
 */
export interface InAppMessageEventTypeMap {
  click: InAppMessageClickEvent;
  willDisplay: InAppMessageWillDisplayEvent;
  didDisplay: InAppMessageDidDisplayEvent;
  willDismiss: InAppMessageWillDismissEvent;
  didDismiss: InAppMessageDidDismissEvent;
}

/**
 * A received push notification, as delivered by the user-centric SDK (onesignal-cordova-plugin v5+). Distinct from
 * the legacy `OSNotification` interface, which is kept for the deprecated flat API.
 */
export interface OneSignalNotification {
  body: string;
  sound?: string;
  title?: string;
  launchURL?: string;
  rawPayload: object;
  actionButtons?: object[];
  additionalData: object;
  notificationId: string;
  groupKey?: string;
  groupMessage?: string;
  groupedNotifications?: object[];
  ledColor?: string;
  priority?: number;
  smallIcon?: string;
  largeIcon?: string;
  bigPicture?: string;
  collapseId?: string;
  fromProjectNumber?: string;
  smallIconAccentColor?: string;
  lockScreenVisibility?: string;
  androidNotificationId?: number;
  badge?: string;
  badgeIncrement?: string;
  category?: string;
  threadId?: string;
  subtitle?: string;
  templateId?: string;
  templateName?: string;
  attachments?: object;
  mutableContent?: boolean;
  contentAvailable?: string;
  relevanceScore?: number;
  interruptionLevel?: string;
}

export interface NotificationClickResult {
  actionId?: string;
  url?: string;
}

/**
 * Payload delivered to `OneSignalNotifications.addEventListener('click', ...)`.
 */
export interface NotificationClickEvent {
  result: NotificationClickResult;
  notification: OneSignalNotification;
}

/**
 * Payload delivered to `OneSignalNotifications.addEventListener('foregroundWillDisplay', ...)`.
 */
export interface NotificationWillDisplayEvent {
  /**
   * Call this to prevent OneSignal from displaying the notification automatically. This method can be called up to
   * two times with `false` and then `true`, if processing time is needed. Typically this is only possible within a
   * short time-frame (~30 seconds) after the notification is received on the device.
   *
   * @param discard If `true`, dismisses the notification with no possibility of displaying it in the future.
   */
  preventDefault(discard?: boolean): void;
  getNotification(): OneSignalNotification;
}

/**
 * Event names supported by `OneSignalNotifications.addEventListener`.
 */
export type NotificationEventName = 'click' | 'foregroundWillDisplay' | 'permissionChange';

/**
 * Maps `NotificationEventName` to its corresponding event payload type.
 */
export interface NotificationEventTypeMap {
  click: NotificationClickEvent;
  foregroundWillDisplay: NotificationWillDisplayEvent;
  permissionChange: boolean;
}

/**
 * @name OneSignal
 * @description
 * The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
 * OneSignal is a simple implementation for delivering push notifications.
 *
 * As of onesignal-cordova-plugin v5.0.0, OneSignal moved to a user-centric API split across the `OneSignal`,
 * `OneSignalUser`, `OneSignalUserPushSubscription`, `OneSignalNotifications`, `OneSignalSession`, `OneSignalLocation`,
 * `OneSignalInAppMessages`, `OneSignalDebug` and `OneSignalLiveActivities` injectables in this package. The flat
 * methods below (`startInit`, `sendTag`, etc.) were removed upstream in v5.0.0 and are kept here only for backwards
 * compatibility; they are marked `@deprecated` with their v5+ replacement.
 *
 * Please view the official [OneSignal Ionic SDK Installation](https://documentation.onesignal.com/docs/ionic-sdk-setup) guide
 * for more information.
 *
 * #### Icons
 * If you want to use generated icons with command `ionic cordova resources`:
 *
 * 1. Add a file to your `hooks` directory called `copy_android_notification_icons.js`
 *
 * 2. Configure the hook in your config.xml
 * ```
 *     <platform name="android">
 *         <hook type="after_prepare" src="hooks/copy_android_notification_icons.js" />
 *     </platform>
 * ```
 *
 * 3. Put the following code in it:
 *
 * ```
 * #!/usr/bin/env node
 *
 * var fs = require('fs');
 * var path = require('path');
 *
 * var filestocopy = [{
 *     "resources/android/icon/drawable-hdpi-icon.png":
 *         "platforms/android/app/src/main/res/drawable-hdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-mdpi-icon.png":
 *         "platforms/android/app/src/main/res/drawable-mdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-xhdpi-icon.png":
 *         "platforms/android/app/src/main/res/drawable-xhdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-xxhdpi-icon.png":
 *         "platforms/android/app/src/main/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-xxxhdpi-icon.png":
 *         "platforms/android/app/src/main/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
 * } ];
 *
 * module.exports = function(context) {
 *
 *     // no need to configure below
 *     var rootdir = context.opts.projectRoot;
 *
 *     filestocopy.forEach(function(obj) {
 *         Object.keys(obj).forEach(function(key) {
 *             var val = obj[key];
 *             var srcfile = path.join(rootdir, key);
 *             var destfile = path.join(rootdir, val);
 *             console.log("copying "+srcfile+" to "+destfile);
 *             var destdir = path.dirname(destfile);
 *             if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
 *                 fs.createReadStream(srcfile).pipe(
 *                     fs.createWriteStream(destfile));
 *             }
 *         });
 *     });
 *
 * };
 * ```
 *
 * 3. From the root of your project make the file executable:
 * `$ chmod +x hooks/copy_android_notification_icons.js`
 * @usage
 * ```typescript
 * import { OneSignal, OneSignalNotifications, OneSignalUser } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(
 *   private oneSignal: OneSignal,
 *   private oneSignalNotifications: OneSignalNotifications,
 *   private oneSignalUser: OneSignalUser
 * ) { }
 *
 * ...
 *
 * this.oneSignal.initialize('b2f7f966-d8cc-11e4-bed1-df8f05be55ba');
 *
 * this.oneSignalNotifications.addEventListener('click', (event) => {
 *   // do something when a notification is opened
 * });
 *
 * this.oneSignalNotifications.requestPermission(true);
 *
 * this.oneSignalUser.addTag('key', 'value');
 * ```
 * @interfaces
 * OSNotification
 * OSLockScreenVisibility
 * OSDisplayType
 * OSNotificationPayload
 * OSActionButton
 * OSBackgroundImageLayout
 * OSNotificationOpenedResult
 * OSActionType
 * OSInAppMessageAction
 * LogLevel
 * OSNotificationPermission
 * LiveActivitySetupOptions
 * UserState
 * UserChangedState
 * PushSubscriptionState
 * PushSubscriptionChangedState
 * OSInAppMessage
 * InAppMessageClickResult
 * InAppMessageClickEvent
 * InAppMessageEventTypeMap
 * OneSignalNotification
 * NotificationClickEvent
 * NotificationWillDisplayEvent
 * NotificationEventTypeMap
 */
@Plugin({
  pluginName: 'OneSignal',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignal extends AwesomeCordovaNativePlugin {
  /**
   * constants to use in inFocusDisplaying()
   *
   * @hidden
   * @deprecated `inFocusDisplaying` was removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalNotifications.addEventListener('foregroundWillDisplay', ...)` instead.
   */
  OSInFocusDisplayOption = {
    None: 0,
    InAppAlert: 1,
    Notification: 2,
  };

  /**
   * Initializes the OneSignal SDK. This should be called during startup of the application.
   *
   * @param {string} appId Your OneSignal app id
   * @returns {void}
   */
  @Cordova({ sync: true })
  initialize(appId: string): void {
    return;
  }

  /**
   * Login to OneSignal under the user identified by the `externalId` provided. The act of logging a user into the
   * OneSignal SDK will switch the user context to that specific user.
   *
   * @param {string} externalId
   * @returns {void}
   */
  @Cordova({ sync: true })
  login(externalId: string): void {
    return;
  }

  /**
   * Logout the user previously logged in via `login`. The user context now references a new device-scoped user.
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  logout(): void {
    return;
  }

  /**
   * Determines whether a user must consent to privacy prior to their user data being sent up to OneSignal. This
   * should be set to `true` prior to the invocation of `initialize` to ensure compliance.
   *
   * @param {boolean} required
   * @returns {void}
   */
  @Cordova({ sync: true })
  setConsentRequired(required: boolean): void {
    return;
  }

  /**
   * Indicates whether privacy consent has been granted. This field is only relevant when the application has opted
   * into data privacy protections.
   *
   * @param {boolean} granted
   * @returns {void}
   */
  @Cordova({ sync: true })
  setConsentGiven(granted: boolean): void {
    return;
  }

  /**
   * Start the initialization process. Once you are done configuring OneSignal, call the `endInit` function.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `initialize` instead.
   * @param {string} appId Your OneSignal app id
   * @param {string} googleProjectNumber **ANDROID** - your Google project number; only required for Android GCM/FCM pushes.
   * @returns {any}
   */
  @Cordova({ sync: true })
  startInit(appId: string, googleProjectNumber?: string): any {
    return;
  }

  /**
   * Callback to run when a notification is received, whether it was displayed or not.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalNotifications.addEventListener('foregroundWillDisplay', ...)` instead.
   * @returns {Observable<OneSignalReceivedNotification>}
   */
  @Cordova({
    observable: true,
  })
  handleNotificationReceived(): Observable<OSNotification> {
    return;
  }

  /**
   * Callback to run when a notification is tapped on from the notification shade (**ANDROID**) or notification
   * center (**iOS**), or when closing an Alert notification shown in the app (if InAppAlert is enabled in
   * inFocusDisplaying).
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalNotifications.addEventListener('click', ...)` instead.
   * @returns {Observable<OneSignalOpenedNotification>}
   */
  @Cordova({
    observable: true,
  })
  handleNotificationOpened(): Observable<OSNotificationOpenedResult> {
    return;
  }

  /**
   * Use to process an In-App Message the user just tapped on.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalInAppMessages.addEventListener('click', ...)` instead.
   * @returns {Observable<OSInAppMessageAction>}
   */
  @Cordova({
    observable: true,
  })
  handleInAppMessageClicked(): Observable<OSInAppMessageAction> {
    return;
  }

  /**
   * iOS** - Settings for iOS apps
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. No direct replacement.
   * @param settings
   *  kOSSettingsKeyAutoPrompt: boolean = true
   *  Auto prompt user for notification permissions.
   *
   *  kOSSettingsKeyInAppLaunchURL: boolean = false
   *  Launch notifications with a launch URL as an in app webview.
   * @param settings.kOSSettingsKeyAutoPrompt
   * @param settings.kOSSettingsKeyInAppLaunchURL
   * @returns {any}
   */
  @Cordova({
    sync: true,
    platforms: ['iOS'],
  })
  iOSSettings(settings: { kOSSettingsKeyAutoPrompt: boolean; kOSSettingsKeyInAppLaunchURL: boolean }): any {
    return;
  }

  /**
   * Must be called after `startInit` to complete initialization of OneSignal.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. `initialize` no longer requires a matching `endInit` call.
   * @returns {any}
   */
  @Cordova({ sync: true })
  endInit(): any {
    return;
  }

  /**
   * Prompt the user for notification permissions. Callback fires as soon as the user accepts or declines notifications.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalNotifications.requestPermission` instead.
   * @returns {Promise<boolean>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  promptForPushNotificationsWithUserResponse(): Promise<boolean> {
    return;
  }

  /**
   * Retrieve a list of tags that have been set on the user from the OneSignal server.
   *
   * Quirk**: You must wait for `getTags` to resolve before calling it again, as the plugin will only process the last method call and discard any previous ones.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.getTags` instead.
   * @returns {Promise<any>} Returns a Promise that resolves when tags are recieved.
   */
  @Cordova()
  getTags(): Promise<any> {
    return;
  }

  /**
   * Lets you retrieve the OneSignal user id and device token.
   * Your handler is called after the device is successfully registered with OneSignal.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.getOnesignalId` and
   * `OneSignalUserPushSubscription.getIdAsync`/`getTokenAsync` instead.
   * @returns {Promise<Object>} Returns a Promise that resolves if the device was successfully registered.
   *
   *  userId {string} OneSignal userId is a UUID formatted string. (unique per device per app)
   *
   *  pushToken {string} A push token is a Google/Apple assigned identifier(unique per device per app).
   */
  @Cordova()
  getIds(): Promise<{ userId: string; pushToken: string }> {
    return;
  }

  /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.addTag` instead.
   * @param {string} Key of your choosing to create or update.
   * @param {string} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
   * @param key
   * @param value
   */
  @Cordova({ sync: true })
  sendTag(key: string, value: string): void {}

  /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.addTags` instead.
   * @param {string} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
   * @param json
   */
  @Cordova({ sync: true })
  sendTags(json: any): void {}

  /**
   * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.removeTag` instead.
   * @param {string} Key to remove.
   * @param key
   */
  @Cordova({ sync: true })
  deleteTag(key: string): void {}

  /**
   * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.removeTags` instead.
   * @param {string[]} Keys to remove.
   * @param keys
   */
  @Cordova({ sync: true })
  deleteTags(keys: string[]): void {}

  /**
   * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
   * Only works if you set `kOSSettingsAutoPrompt` to `false` in `iOSSettings`
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalNotifications.requestPermission` instead.
   */
  @Cordova({ sync: true })
  registerForPushNotifications(): void {}

  /**
   * Warning:
   * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
   *
   * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
   * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. No direct replacement.
   * @param {boolean} false to disable vibrate, true to re-enable it.
   * @param enable
   */
  @Cordova({ sync: true })
  enableVibrate(enable: boolean): void {}

  /**
   * Warning:
   * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
   *
   * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
   * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. No direct replacement.
   * @param {boolean} false to disable sound, true to re-enable it.
   * @param enable
   */
  @Cordova({ sync: true })
  enableSound(enable: boolean): void {}

  /**
   *
   * Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalNotifications.addEventListener('foregroundWillDisplay', ...)` and `NotificationWillDisplayEvent.preventDefault` instead.
   * @param {DisplayType} displayOption
   * @returns {any}
   */
  @Cordova({ sync: true })
  inFocusDisplaying(displayOption: OSDisplayType): any {
    return;
  }

  /**
   * You can call this method with false to opt users out of receiving all notifications through OneSignal.
   * You can pass true later to opt users back into notifications.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUserPushSubscription.optIn`/`optOut` instead.
   * @param {boolean} enable
   */
  @Cordova({ sync: true })
  setSubscription(enable: boolean): void {}

  /**
   * Get the current notification and permission state. Returns a OSPermissionSubscriptionState type described below.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalNotifications.getPermissionAsync` and
   * `OneSignalUserPushSubscription.getOptedInAsync` instead.
   * @returns {Promise<OSPermissionSubscriptionState>}
   */
  @Cordova()
  getPermissionSubscriptionState(): Promise<OSPermissionSubscriptionState> {
    return;
  }

  /**
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Send notifications via the OneSignal REST API instead.
   * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
   * @param notificationObj
   * @returns {Promise<any>} Returns a Promise that resolves if the notification was send successfully.
   */
  @Cordova()
  postNotification(notificationObj: OSNotification): Promise<any> {
    return;
  }

  /**
   * Cancels a single OneSignal notification based on its Android notification integer id. Use instead of NotificationManager.cancel(id); otherwise the notification will be restored when your app is restarted.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalNotifications.removeNotification` instead.
   * @param notificationId {string}
   */
  @Cordova({ sync: true })
  cancelNotification(notificationId: string): void {}

  /**
   * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalLocation.requestPermission` instead.
   */
  @Cordova({ sync: true })
  promptLocation(): void {}

  /**
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.addEmail` instead.
   * @param email {string}
   */
  @Cordova({ sync: true })
  syncHashedEmail(email: string): void {}

  /**
   * Enable logging to help debug if you run into an issue setting up OneSignal.
   * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose
   *
   * The higher the value the more information is shown.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalDebug.setLogLevel`/`setAlertLevel` instead.
   * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
   * @param logLevel
   * @param logLevel.logLevel
   * @param logLevel.visualLevel
   */
  @Cordova({ sync: true })
  setLogLevel(logLevel: { logLevel: number; visualLevel: number }): void {}

  /**
   * Disable or enable location collection (Defaults to enabled) if your app has location permission.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalLocation.setShared` instead.
   * @param shared {boolean}
   */
  @Cordova({ sync: true })
  setLocationShared(shared: boolean): void {}

  /**
   * The passed in function will be fired when a notification permission setting changes.
   * This includes the following events:
   * - Notification permission prompt shown
   * - The user accepting or declining the permission prompt
   * - Enabling/disabling notifications for your app in the device Settings after returning to your app.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalNotifications.addEventListener('permissionChange', ...)` instead.
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  addPermissionObserver(): Observable<any> {
    return;
  }

  /**
   * The passed in function will be fired when a notification subscription property changes.
   * This includes the following events:
   * - Getting a push token from Apple / Google.
   * - Getting a player / user id from OneSignal
   * - OneSignal.setSubscription is called
   * - User disables or enables notifications
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalUserPushSubscription.addEventListener('change', ...)` instead.
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  addSubscriptionObserver(): Observable<any> {
    return;
  }

  /**
   * Clears all OneSignal notifications
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.addEmail` instead.
   * @param email
   * @param emailAuthToken
   */
  @Cordova()
  setEmail(email: string, emailAuthToken?: string): Promise<any> {
    return;
  }

  /**
   * If your app implements logout functionality, you can call logoutEmail to dissociate the email from the device
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalUser.removeEmail` instead.
   */
  @Cordova()
  logoutEmail(): Promise<any> {
    return;
  }

  /**
   * The passed in function will be fired when a notification subscription property changes.
   * This includes the following events:
   * - Getting a push token from Apple / Google.
   * - Getting a player / user id from OneSignal
   * - OneSignal.setSubscription is called
   * - User disables or enables notifications
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use
   * `OneSignalUser.addEventListener('change', ...)` instead.
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  addEmailSubscriptionObserver(): Observable<any> {
    return;
  }

  /**
   * Clears all OneSignal notifications
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalNotifications.clearAll` instead.
   */
  @Cordova({ sync: true })
  clearOneSignalNotifications(): void {}

  /**
   * Allows you to delay the initialization of the SDK until the user provides privacy consent.
   * The SDK will not be fully initialized until the provideUserConsent(true) method is called.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `setConsentRequired` instead.
   * @param {boolean} required
   */
  @Cordova()
  setRequiresUserPrivacyConsent(required: boolean): void {}

  /**
   * If your application is set to require the user's privacy consent, you can provide this consent using this method.
   * Until you call provideUserConsent(true), the SDK will not fully initialize and will not send any data to OneSignal.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `setConsentGiven` instead.
   * @param {boolean} granted
   */
  @Cordova()
  provideUserConsent(granted: boolean): void {}

  /**
   * Accepts a callback, which returns a boolean variable indicating if the user has given privacy consent yet.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. No direct replacement.
   * @param {Function} callback
   */
  @Cordova()
  userProvidedPrivacyConsent(callback: Function): void {}

  /**
   * Allows you to use your own system's user ID's to send push notifications to your users.
   * To tie a user to a given user ID, you can use this method.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `login` instead.
   * @param {string} externalId
   */
  @Cordova()
  setExternalUserId(externalId: string): void {}

  /**
   * Removes whatever was set as the current user's external user ID.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `logout` instead.
   */
  @Cordova()
  removeExternalUserId(): void {}

  /**
   * Add a trigger. May show an In-App Message if its trigger conditions were met.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalInAppMessages.addTrigger` instead.
   * @param {string} key Key for the trigger.
   * @param {string | number | Object} value Value for the trigger. String or number recommended. Object passed in will be converted to a string.
   */
  @Cordova({
    sync: true,
  })
  addTrigger(key: string, value: string | number | object): void {}

  /**
   * Add a map of triggers. May show an In-App Message if its trigger conditions were met.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalInAppMessages.addTriggers` instead.
   * @param {Object.<string, string | number | Object>} triggers Allows you to set multiple trigger key/value pairs simultaneously. Pass a json object with key/value pairs like: `{"key": "value", "key2": "value2"}`.
   */
  @Cordova({
    sync: true,
  })
  addTriggers(triggers: object): void {}

  /**
   * Removes a single trigger for the given key. May show an In-App Message if its trigger conditions were met.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalInAppMessages.removeTrigger` instead.
   * @param {string} key Key for trigger to remove.
   */
  @Cordova({
    sync: true,
  })
  removeTriggerForKey(key: string): void {}

  /**
   * Removes a list of triggers based on a collection (array) of keys. May show an In-App Message if its trigger conditions were met.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalInAppMessages.removeTriggers` instead.
   * @param {string[]} keys Removes a collection of triggers from their keys. Pass an array of trigger keys like: `["key1", "key2", "key3"]`.
   */
  @Cordova({
    sync: true,
  })
  removeTriggersForKeys(keys: string[]): void {}

  /**
   * Gets a trigger value for a provided trigger key.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. No direct replacement.
   * @param {string} key Key for trigger to get value.
   * @returns {Promise<string | number | Object>} Return value set with `addTrigger`, or `null`/`nil` (iOS) if never set or removed.
   */
  @Cordova()
  getTriggerValueForKey(key: string): Promise<string | number | object> {
    return;
  }

  /**
   * Allows you to temporarily pause all In-App Messages. You may want to do this while the user is engaged in an activity that you don't want a message to interrupt (such as watching a video).
   * An In-App Message that would display if not paused will display right after resume if its conditions to display remains satisfied.
   *
   * @deprecated Removed in onesignal-cordova-plugin v5.0.0. Use `OneSignalInAppMessages.setPaused` instead.
   * @param {boolean} pause To pause, set `true`. To resume, set `false`.
   */
  @Cordova({
    sync: true,
  })
  pauseInAppMessages(pause: boolean): void {}
}

/**
 * @name OneSignalUser
 * @description
 * Wraps the `OneSignal.User` namespace of the OneSignal SDK (onesignal-cordova-plugin v5+): aliases, email/SMS
 * subscriptions, tags and custom events for the currently logged-in user.
 * @usage
 * ```typescript
 * import { OneSignalUser } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalUser: OneSignalUser) { }
 *
 * ...
 *
 * this.oneSignalUser.addTag('key', 'value');
 * ```
 */
@Plugin({
  pluginName: 'OneSignalUser',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.User',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignalUser extends AwesomeCordovaNativePlugin {
  /**
   * Explicitly set a 2-character language code for the user.
   *
   * @param {string} language
   * @returns {void}
   */
  @Cordova({ sync: true })
  setLanguage(language: string): void {
    return;
  }

  /**
   * Set an alias for the current user. If this alias label already exists on this user, it will be overwritten with the new alias id.
   *
   * @param {string} label
   * @param {string} id
   * @returns {void}
   */
  @Cordova({ sync: true })
  addAlias(label: string, id: string): void {
    return;
  }

  /**
   * Set aliases for the current user. If any alias already exists, it will be overwritten to the new values.
   *
   * @param {object} aliases
   * @returns {void}
   */
  @Cordova({ sync: true })
  addAliases(aliases: object): void {
    return;
  }

  /**
   * Remove an alias from the current user.
   *
   * @param {string} label
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeAlias(label: string): void {
    return;
  }

  /**
   * Remove aliases from the current user.
   *
   * @param {string[]} labels
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeAliases(labels: string[]): void {
    return;
  }

  /**
   * Add a new email subscription to the current user.
   *
   * @param {string} email
   * @returns {void}
   */
  @Cordova({ sync: true })
  addEmail(email: string): void {
    return;
  }

  /**
   * Remove an email subscription from the current user. Returns false if the specified email does not exist on the user within the SDK, and no request will be made.
   *
   * @param {string} email
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeEmail(email: string): void {
    return;
  }

  /**
   * Add a new SMS subscription to the current user.
   *
   * @param {string} smsNumber
   * @returns {void}
   */
  @Cordova({ sync: true })
  addSms(smsNumber: string): void {
    return;
  }

  /**
   * Remove an SMS subscription from the current user. Returns false if the specified SMS number does not exist on the user within the SDK, and no request will be made.
   *
   * @param {string} smsNumber
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeSms(smsNumber: string): void {
    return;
  }

  /**
   * Add a tag for the current user. Tags are key:value string pairs used as building blocks for targeting specific users and/or personalizing messages. If the tag key already exists, it will be replaced with the value provided here.
   *
   * @param {string} key
   * @param {string} value
   * @returns {void}
   */
  @Cordova({ sync: true })
  addTag(key: string, value: string): void {
    return;
  }

  /**
   * Add multiple tags for the current user. Tags are key:value string pairs used as building blocks for targeting specific users and/or personalizing messages. If the tag key already exists, it will be replaced with the value provided here.
   *
   * @param {object} tags
   * @returns {void}
   */
  @Cordova({ sync: true })
  addTags(tags: object): void {
    return;
  }

  /**
   * Remove the data tag with the provided key from the current user.
   *
   * @param {string} key
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeTag(key: string): void {
    return;
  }

  /**
   * Remove multiple tags with the provided keys from the current user.
   *
   * @param {string[]} keys
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeTags(keys: string[]): void {
    return;
  }

  /**
   * Returns the local tags for the current user.
   *
   * @returns {Promise<{ [key: string]: string }>}
   */
  @Cordova()
  getTags(): Promise<{ [key: string]: string }> {
    return;
  }

  /**
   * Add a callback that fires when the OneSignal User state changes.
   *
   * @param {'change'} event
   * @param {(event: UserChangedState) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  addEventListener(event: 'change', listener: (event: UserChangedState) => void): void {
    return;
  }

  /**
   * Remove a User State observer that has been previously added.
   *
   * @param {'change'} event
   * @param {(event: UserChangedState) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeEventListener(event: 'change', listener: (event: UserChangedState) => void): void {
    return;
  }

  /**
   * Get the nullable OneSignal Id associated with the current user.
   *
   * @returns {Promise<string | null>}
   */
  @Cordova()
  getOnesignalId(): Promise<string | null> {
    return;
  }

  /**
   * Get the nullable External Id associated with the current user.
   *
   * @returns {Promise<string | null>}
   */
  @Cordova()
  getExternalId(): Promise<string | null> {
    return;
  }

  /**
   * Track a custom event with the provided name and optional properties.
   *
   * @param {string} name The name of the custom event
   * @param {object} [properties] Optional properties to associate with the event
   * @returns {void}
   */
  @Cordova({ sync: true })
  trackEvent(name: string, properties?: object): void {
    return;
  }
}

/**
 * @name OneSignalUserPushSubscription
 * @description
 * Wraps `OneSignal.User.pushSubscription` (onesignal-cordova-plugin v5+): the current device's push subscription
 * (id, token, opted-in state).
 * @usage
 * ```typescript
 * import { OneSignalUserPushSubscription } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalUserPushSubscription: OneSignalUserPushSubscription) { }
 *
 * ...
 *
 * this.oneSignalUserPushSubscription.optIn();
 * ```
 */
@Plugin({
  pluginName: 'OneSignalUserPushSubscription',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.User.pushSubscription',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignalUserPushSubscription extends AwesomeCordovaNativePlugin {
  /**
   * The readonly push subscription ID.
   *
   * @deprecated Use `getIdAsync` instead.
   */
  @CordovaProperty()
  id: string | null | undefined;

  /**
   * The readonly push token.
   *
   * @deprecated Use `getTokenAsync` instead.
   */
  @CordovaProperty()
  token: string | null | undefined;

  /**
   * Whether the current user is opted in to push notifications.
   *
   * @deprecated Use `getOptedInAsync` instead.
   */
  @CordovaProperty()
  optedIn: boolean;

  /**
   * The readonly push subscription ID.
   *
   * @returns {Promise<string | null>}
   */
  @Cordova()
  getIdAsync(): Promise<string | null> {
    return;
  }

  /**
   * The readonly push token.
   *
   * @returns {Promise<string | null>}
   */
  @Cordova()
  getTokenAsync(): Promise<string | null> {
    return;
  }

  /**
   * Gets a boolean value indicating whether the current user is opted in to push notifications.
   * This returns true when the app has notifications permission and optOut() is NOT called.
   * Note: Does not take into account the existence of the subscription ID and push token.
   * This boolean may return true but push notifications may still not be received by the user.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  getOptedInAsync(): Promise<boolean> {
    return;
  }

  /**
   * Add a callback that fires when the OneSignal push subscription state changes.
   *
   * @param {'change'} event
   * @param {(event: PushSubscriptionChangedState) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  addEventListener(event: 'change', listener: (event: PushSubscriptionChangedState) => void): void {
    return;
  }

  /**
   * Remove a push subscription observer that has been previously added.
   *
   * @param {'change'} event
   * @param {(event: PushSubscriptionChangedState) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeEventListener(event: 'change', listener: (event: PushSubscriptionChangedState) => void): void {
    return;
  }

  /**
   * Call this method to receive push notifications on the device or to resume receiving of push notifications after calling optOut. If needed, this method will prompt the user for push notifications permission.
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  optIn(): void {
    return;
  }

  /**
   * If at any point you want the user to stop receiving push notifications on the current device (regardless of system-level permission status), you can call this method to opt out.
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  optOut(): void {
    return;
  }
}

/**
 * @name OneSignalNotifications
 * @description
 * Wraps the `OneSignal.Notifications` namespace of the OneSignal SDK (onesignal-cordova-plugin v5+): permission
 * requests and notification lifecycle events.
 * @usage
 * ```typescript
 * import { OneSignalNotifications } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalNotifications: OneSignalNotifications) { }
 *
 * ...
 *
 * this.oneSignalNotifications.requestPermission(true);
 *
 * this.oneSignalNotifications.addEventListener('click', (event) => {
 *   // do something when a notification is opened
 * });
 * ```
 */
@Plugin({
  pluginName: 'OneSignalNotifications',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.Notifications',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignalNotifications extends AwesomeCordovaNativePlugin {
  /**
   * Whether this app has push notification permission.
   *
   * @deprecated Use `getPermissionAsync` instead.
   * @returns {boolean}
   */
  @Cordova({ sync: true })
  hasPermission(): boolean {
    return;
  }

  /**
   * Whether this app has push notification permission. Returns true if the user has accepted permissions,
   * or if the app has ephemeral or provisional permission.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  getPermissionAsync(): Promise<boolean> {
    return;
  }

  /**
   * iOS Only. Returns the enum for the native permission of the device.
   *
   * @returns {Promise<OSNotificationPermission>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  permissionNative(): Promise<OSNotificationPermission> {
    return;
  }

  /**
   * Prompt the user for permission to receive push notifications. This will display the native system prompt to request push notification permission.
   * Use the fallbackToSettings parameter to prompt to open the settings app if a user has already declined push permissions.
   *
   * @param {boolean} [fallbackToSettings]
   * @returns {Promise<boolean>}
   */
  @Cordova()
  requestPermission(fallbackToSettings?: boolean): Promise<boolean> {
    return;
  }

  /**
   * Whether attempting to request notification permission will show a prompt. Returns true if the device has not been prompted for push notification permission already.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  canRequestPermission(): Promise<boolean> {
    return;
  }

  /**
   * iOS Only. Instead of having to prompt the user for permission to send them push notifications, your app can request provisional authorization.
   *
   * For more information: https://documentation.onesignal.com/docs/ios-customizations#provisional-push-notifications
   *
   * @param {(response: boolean) => void} [handler]
   * @returns {void}
   */
  @Cordova({
    sync: true,
    platforms: ['iOS'],
  })
  registerForProvisionalAuthorization(handler?: (response: boolean) => void): void {
    return;
  }

  /**
   * Add listeners for notification events.
   *
   * @param {NotificationEventName} event
   * @param {(event: NotificationEventTypeMap[K]) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  addEventListener<K extends NotificationEventName>(
    event: K,
    listener: (event: NotificationEventTypeMap[K]) => void
  ): void {
    return;
  }

  /**
   * Remove listeners for notification events.
   *
   * @param {NotificationEventName} event
   * @param {(event: NotificationEventTypeMap[K]) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeEventListener<K extends NotificationEventName>(
    event: K,
    listener: (event: NotificationEventTypeMap[K]) => void
  ): void {
    return;
  }

  /**
   * Removes all OneSignal notifications.
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  clearAll(): void {
    return;
  }

  /**
   * Android only. Cancels a single OneSignal notification based on its Android notification integer ID. Use instead of Android's NotificationManager.cancel, otherwise the notification will be restored when your app is restarted.
   *
   * @param {number} id notification id to cancel
   * @returns {void}
   */
  @Cordova({
    sync: true,
    platforms: ['Android'],
  })
  removeNotification(id: number): void {
    return;
  }

  /**
   * Android only. Cancels a group of OneSignal notifications with the provided group key. Grouping notifications is a OneSignal concept, there is no NotificationManager equivalent.
   *
   * @param {string} id notification group id to cancel
   * @returns {void}
   */
  @Cordova({
    sync: true,
    platforms: ['Android'],
  })
  removeGroupedNotifications(id: string): void {
    return;
  }
}

/**
 * @name OneSignalSession
 * @description
 * Wraps the `OneSignal.Session` namespace of the OneSignal SDK (onesignal-cordova-plugin v5+): outcomes captured
 * against the current session.
 * @usage
 * ```typescript
 * import { OneSignalSession } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalSession: OneSignalSession) { }
 *
 * ...
 *
 * this.oneSignalSession.addOutcome('my_outcome');
 * ```
 */
@Plugin({
  pluginName: 'OneSignalSession',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.Session',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignalSession extends AwesomeCordovaNativePlugin {
  /**
   * Add an outcome with the provided name, captured against the current session.
   *
   * @param {string} name
   * @returns {void}
   */
  @Cordova({ sync: true })
  addOutcome(name: string): void {
    return;
  }

  /**
   * Add a unique outcome with the provided name, captured against the current session.
   *
   * @param {string} name
   * @returns {void}
   */
  @Cordova({ sync: true })
  addUniqueOutcome(name: string): void {
    return;
  }

  /**
   * Add an outcome with the provided name and value, captured against the current session.
   *
   * @param {string} name
   * @param {number} value
   * @returns {void}
   */
  @Cordova({ sync: true })
  addOutcomeWithValue(name: string, value: number): void {
    return;
  }
}

/**
 * @name OneSignalLocation
 * @description
 * Wraps the `OneSignal.Location` namespace of the OneSignal SDK (onesignal-cordova-plugin v5+): location sharing
 * for geo-targeted notifications.
 * @usage
 * ```typescript
 * import { OneSignalLocation } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalLocation: OneSignalLocation) { }
 *
 * ...
 *
 * this.oneSignalLocation.requestPermission();
 * ```
 */
@Plugin({
  pluginName: 'OneSignalLocation',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.Location',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignalLocation extends AwesomeCordovaNativePlugin {
  /**
   * Prompts the user for location permissions to allow geotagging from the OneSignal dashboard.
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  requestPermission(): void {
    return;
  }

  /**
   * Disable or enable location collection (defaults to enabled if your app has location permission).
   *
   * @param {boolean} shared
   * @returns {void}
   */
  @Cordova({ sync: true })
  setShared(shared: boolean): void {
    return;
  }

  /**
   * Whether location is currently shared with OneSignal.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isShared(): Promise<boolean> {
    return;
  }
}

/**
 * @name OneSignalInAppMessages
 * @description
 * Wraps the `OneSignal.InAppMessages` namespace of the OneSignal SDK (onesignal-cordova-plugin v5+): triggers and
 * lifecycle events for In-App Messages.
 * @usage
 * ```typescript
 * import { OneSignalInAppMessages } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalInAppMessages: OneSignalInAppMessages) { }
 *
 * ...
 *
 * this.oneSignalInAppMessages.addTrigger('key', 'value');
 * ```
 */
@Plugin({
  pluginName: 'OneSignalInAppMessages',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.InAppMessages',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignalInAppMessages extends AwesomeCordovaNativePlugin {
  /**
   * Add event listeners for In-App Message click and/or lifecycle events.
   *
   * @param {InAppMessageEventName} event
   * @param {(event: InAppMessageEventTypeMap[K]) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  addEventListener<K extends InAppMessageEventName>(
    event: K,
    listener: (event: InAppMessageEventTypeMap[K]) => void
  ): void {
    return;
  }

  /**
   * Remove event listeners for In-App Message click and/or lifecycle events.
   *
   * @param {InAppMessageEventName} event
   * @param {(event: InAppMessageEventTypeMap[K]) => void} listener
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeEventListener<K extends InAppMessageEventName>(
    event: K,
    listener: (event: InAppMessageEventTypeMap[K]) => void
  ): void {
    return;
  }

  /**
   * Add a trigger for the current user. Triggers are currently explicitly used to determine whether a specific IAM should be displayed to the user.
   *
   * @param {string} key
   * @param {string} value
   * @returns {void}
   */
  @Cordova({ sync: true })
  addTrigger(key: string, value: string): void {
    return;
  }

  /**
   * Add multiple triggers for the current user. Triggers are currently explicitly used to determine whether a specific IAM should be displayed to the user.
   *
   * @param {{ [key: string]: string }} triggers
   * @returns {void}
   */
  @Cordova({ sync: true })
  addTriggers(triggers: { [key: string]: string }): void {
    return;
  }

  /**
   * Remove the trigger with the provided key from the current user.
   *
   * @param {string} key
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeTrigger(key: string): void {
    return;
  }

  /**
   * Remove multiple triggers from the current user.
   *
   * @param {string[]} keys
   * @returns {void}
   */
  @Cordova({ sync: true })
  removeTriggers(keys: string[]): void {
    return;
  }

  /**
   * Clear all triggers from the current user.
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  clearTriggers(): void {
    return;
  }

  /**
   * Set whether in-app messaging is currently paused.
   * When set to true no IAM will be presented to the user regardless of whether they qualify for them.
   * When set to false any IAMs the user qualifies for will be presented to the user at the appropriate time.
   *
   * @param {boolean} pause
   * @returns {void}
   */
  @Cordova({ sync: true })
  setPaused(pause: boolean): void {
    return;
  }

  /**
   * Whether in-app messaging is currently paused.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  getPaused(): Promise<boolean> {
    return;
  }
}

/**
 * @name OneSignalDebug
 * @description
 * Wraps the `OneSignal.Debug` namespace of the OneSignal SDK (onesignal-cordova-plugin v5+): SDK logging levels.
 * @usage
 * ```typescript
 * import { OneSignalDebug, LogLevel } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalDebug: OneSignalDebug) { }
 *
 * ...
 *
 * this.oneSignalDebug.setLogLevel(LogLevel.Verbose);
 * ```
 */
@Plugin({
  pluginName: 'OneSignalDebug',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.Debug',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OneSignalDebug extends AwesomeCordovaNativePlugin {
  /**
   * Enable logging to help debug if you run into an issue setting up OneSignal.
   *
   * @param {LogLevel} logLevel Sets the logging level to print to the Android LogCat log or Xcode log.
   * @returns {void}
   */
  @Cordova({ sync: true })
  setLogLevel(logLevel: LogLevel): void {
    return;
  }

  /**
   * Enable logging to help debug if you run into an issue setting up OneSignal.
   *
   * @param {LogLevel} visualLogLevel Sets the logging level to show as alert dialogs.
   * @returns {void}
   */
  @Cordova({ sync: true })
  setAlertLevel(visualLogLevel: LogLevel): void {
    return;
  }
}

/**
 * @name OneSignalLiveActivities
 * @description
 * Wraps the `OneSignal.LiveActivities` namespace of the OneSignal SDK (onesignal-cordova-plugin v5+). iOS only.
 * @usage
 * ```typescript
 * import { OneSignalLiveActivities } from '@awesome-cordova-plugins/onesignal/ngx';
 *
 * constructor(private oneSignalLiveActivities: OneSignalLiveActivities) { }
 *
 * ...
 *
 * this.oneSignalLiveActivities.setupDefault();
 * ```
 */
@Plugin({
  pluginName: 'OneSignalLiveActivities',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'OneSignal.LiveActivities',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
  platforms: ['iOS'],
})
@Injectable()
export class OneSignalLiveActivities extends AwesomeCordovaNativePlugin {
  /**
   * Enter a live activity.
   *
   * @param {string} activityId
   * @param {string} token
   * @param {(data: unknown) => void} [onSuccess]
   * @param {(data: unknown) => void} [onFailure]
   * @returns {void}
   */
  @Cordova({ sync: true })
  enter(
    activityId: string,
    token: string,
    onSuccess?: (data: unknown) => void,
    onFailure?: (data: unknown) => void
  ): void {
    return;
  }

  /**
   * Exit a live activity.
   *
   * @deprecated Currently unsupported upstream, avoid using this method.
   * @param {string} activityId
   * @param {(data: unknown) => void} [onSuccess]
   * @param {(data: unknown) => void} [onFailure]
   * @returns {void}
   */
  @Cordova({ sync: true })
  exit(activityId: string, onSuccess?: (data: unknown) => void, onFailure?: (data: unknown) => void): void {
    return;
  }

  /**
   * iOS only. Indicate this device is capable of receiving pushToStart live activities for the `activityType`. The
   * `activityType` must be the name of the struct conforming to `ActivityAttributes` that will be used to start the
   * live activity.
   *
   * @param {string} activityType The name of the specific `ActivityAttributes` structure tied to the live activity.
   * @param {string} token The activity type's pushToStart token.
   * @returns {void}
   */
  @Cordova({ sync: true })
  setPushToStartToken(activityType: string, token: string): void {
    return;
  }

  /**
   * iOS only. Indicate this device is no longer capable of receiving pushToStart live activities for the
   * `activityType`. The `activityType` must be the name of the struct conforming to `ActivityAttributes` that will
   * be used to start the live activity.
   *
   * @param {string} activityType The name of the specific `ActivityAttributes` structure tied to the live activity.
   * @returns {void}
   */
  @Cordova({ sync: true })
  removePushToStartToken(activityType: string): void {
    return;
  }

  /**
   * iOS only. Enable the OneSignal SDK to setup the default `DefaultLiveActivityAttributes` structure, which
   * conforms to `OneSignalLiveActivityAttributes`.
   *
   * @param {LiveActivitySetupOptions} [options] An optional structure to provide for more granular setup options.
   * @returns {void}
   */
  @Cordova({ sync: true })
  setupDefault(options?: LiveActivitySetupOptions): void {
    return;
  }

  /**
   * iOS only. Start a new LiveActivity that is modelled by the default `DefaultLiveActivityAttributes` structure.
   *
   * @param {string} activityId The activity identifier the live activity on this device will be started and eligible to receive updates for.
   * @param {object} attributes A dynamic type containing the static attributes passed into `DefaultLiveActivityAttributes`.
   * @param {object} content A dynamic type containing the content attributes passed into `DefaultLiveActivityAttributes`.
   * @returns {void}
   */
  @Cordova({ sync: true })
  startDefault(activityId: string, attributes: object, content: object): void {
    return;
  }
}
