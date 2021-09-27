import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface TagGroupEditor {
  addTags(): void;
  removeTags(): void;
  apply(): void;
}

/**
 * Enum for notification types.
 *
 * @readonly
 * @enum {number}
 */
export enum NotificationType {
  none = 0,
  badge = 1,
  sound = 2,
  alert = 4,
}

/**
 * Enum for presentation options.
 *
 * @readonly
 * @enum {number}
 */
export enum PresentationOptions {
  none = 0,
  badge = 1,
  sound = 2,
  alert = 4,
}

/**
 * @name UrbanAirShip
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { UrbanAirShip } from '@awesome-cordova-plugins/urbanairship/ngx';
 *
 *
 * constructor(private urbanAirShip: UrbanAirShip) { }
 *
 * ...
 *
 *
 * this.urbanAirShip.takeOff(config)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'UrbanAirShip',
  plugin: 'urbanairship-cordova',
  pluginRef: 'window.UAirship',
  repo: 'https://www.npmjs.com/package/urbanairship-cordova',
  install: 'ionic cordova plugin add urbanairship-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class UrbanAirShip extends AwesomeCordovaNativePlugin {
  /**
   * Event fired when a new deep link is received.
   *
   * @event deep_link
   * @type {object}
   * @param {string} [deepLink] The deep link.
   */
  @Cordova({
    eventObservable: true,
    event: 'urbanairship.deep_link',
    element: 'document',
  })
  onDeepLink(): Observable<any> {
    return;
  }

  /**
   * Event fired when a channel registration occurs.
   *
   * @event registration
   * @type {object}
   * @param {string} [channelID] The channel ID.
   * @param {string} [registrationToken] The deviceToken on iOS, and the FCM/ADM token on Android.
   * @param {string} [error] Error message if an error occurred.
   */
  @Cordova({
    eventObservable: true,
    event: 'urbanairship.registration',
    element: 'document',
  })
  onRegistration(): Observable<any> {
    return;
  }

  /**
   * Event fired when the inbox is updated.
   *
   * @event inbox_updated
   */
  @Cordova({
    eventObservable: true,
    event: 'urbanairship.inbox_updated',
    element: 'document',
  })
  onInboxUpdated(): Observable<any> {
    return;
  }

  /**
   * Event fired when the inbox needs to be displayed. This event is only emitted if auto
   * launch message center is disabled.
   *
   * @event show_inbox
   * @type {object}
   * @param {string} [messageId] The optional message ID.
   */
  @Cordova({
    eventObservable: true,
    event: 'urbanairship.show_inbox',
    element: 'document',
  })
  onShowInbox(): Observable<any> {
    return;
  }

  /**
   * Event fired when a push is received.
   *
   * @event push
   * @type {object}
   * @param {string} message The push alert message.
   * @param {string} title The push title.
   * @param {string} subtitle The push subtitle.
   * @param {object} extras Any push extras.
   * @param {object} aps The raw aps dictionary (iOS only)
   * @param {number} [notification_id] The Android notification ID. Deprecated in favor of notificationId.
   * @param {string} [notificationId] The notification ID.
   */
  @Cordova({
    eventObservable: true,
    event: 'urbanairship.push',
    element: 'document',
  })
  onPushReceived(): Observable<any> {
    return;
  }

  /**
   * Event fired when notification opened.
   *
   * @event notification_opened
   * @type {object}
   * @param {string} message The push alert message.
   * @param {object} extras Any push extras.
   * @param {number} [notification_id] The Android notification ID. Deprecated in favor of notificationId.
   * @param {string} [notificationId] The notification ID.
   * @param {string} [actionID] The ID of the notification action button if available.
   * @param {boolean} isForeground Will always be true if the user taps the main notification. Otherwise its defined by the notification action button.
   */
  @Cordova({
    eventObservable: true,
    event: 'urbanairship.notification_opened',
    element: 'document',
  })
  onNotificationOpened(): Observable<any> {
    return;
  }

  /**
   * Event fired when the user notification opt-in status changes.
   *
   * @event notification_opt_in_status
   * @type {object}
   * @param {boolean} optIn If the user is opted in or not to user notifications.
   * @param {object} [authorizedNotificationSettings] iOS only. A map of authorized settings.
   * @param {boolean} authorizedNotificationSettings.alert If alerts are authorized.
   * @param {boolean} authorizedNotificationSettings.sound If sounds are authorized.
   * @param {boolean} authorizedNotificationSettings.badge If badges are authorized.
   * @param {boolean} authorizedNotificationSettings.carPlay If car play is authorized.
   * @param {boolean} authorizedNotificationSettings.lockScreen If the lock screen is authorized.
   * @param {boolean} authorizedNotificationSettings.notificationCenter If the notification center is authorized.
   */
  @Cordova({
    eventObservable: true,
    event: 'urbanairship.notification_opt_in_status',
    element: 'document',
  })
  onNotificationOptInStatus(): Observable<any> {
    return;
  }

  /**
   * Re-attaches document event listeners in this webview
   */
  @Cordova({
    sync: true,
  })
  reattach(): void {
    return;
  }

  /**
   * Initailizes Urban Airship.
   *
   * The plugin will automatically call takeOff during the next app init in
   * order to properly handle incoming push. If takeOff is called multiple times
   * in a session, or if the config is different than the previous sesssion, the
   * new config will not be used until the next app start.
   *
   * @param {object}  config The Urban Airship config.
   * @param {object}  config.development The Urban Airship development config.
   * @param {string}  config.development.appKey The development appKey.
   * @param {string}  config.development.appSecret The development appSecret.
   * @param {object}  config.production The Urban Airship production config.
   * @param {string}  config.production.appKey The production appKey.
   * @param {string}  config.production.appSecret The production appSecret.
   */
  @Cordova()
  takeOff(config: any): Promise<any> {
    return;
  }

  /**
   * Sets the Android notification config. Values not set will fallback to any values set in the config.xml.
   *
   * @param {object}  config The notification config.
   * @param {string}  [config.icon] The name of the drawable resource to use as the notification icon.
   * @param {string}  [config.largeIcon] The name of the drawable resource to use as the notification large icon.
   * @param {string}  [config.accentColor] The notification accent color. Format is #AARRGGBB.
   */
  @Cordova()
  setAndroidNotificationConfig(config: any): Promise<any> {
    return;
  }

  /**
   * Sets the default behavior when the message center is launched from a push
   * notification. If set to false the message center must be manually launched.
   *
   * @param {boolean} enabled true to automatically launch the default message center, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setAutoLaunchDefaultMessageCenter(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Enables or disables user notifications.
   *
   * @param {boolean} enabled true to enable notifications, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setUserNotificationsEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if user notifications are enabled or not.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if user notifications is enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isUserNotificationsEnabled(): Promise<any> {
    return;
  }

  /**
   * Checks if app notifications are enabled or not. Its possible to have `userNotificationsEnabled`
   * but app notifications being disabled if the user opted out of notifications.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if app notifications is enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isAppNotificationsEnabled(): Promise<any> {
    return;
  }

  /**
   * Returns the channel ID.
   *
   * @param {function(ID)} success The function to call on success.
   * @param {string} success.ID The channel ID string
   * @param {failureCallback} [failure] The function to call on failure.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getChannelID(): Promise<any> {
    return;
  }

  /**
   * Returns the last notification that launched the application.
   *
   * @param {boolean} clear true to clear the notification.
   * @param {function(push)} success The function to call on success.
   * @param {object} success.push The push message object containing data associated with a push notification.
   * @param {string} success.push.message The push alert message.
   * @param {object} success.push.extras Any push extras.
   * @param {number} [success.push.notification_id] The Android notification ID.
   * @param {failureCallback} [failure] The function to call on failure.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getLaunchNotification(clear: boolean): Promise<any> {
    return;
  }

  /**
   * Returns the last received deep link.
   *
   * @param {boolean} clear true to clear the deep link.
   * @param {function(push)} success The function to call on success.
   * @param {string} success.deepLink The deep link.
   * @param {failureCallback} [failure] The function to call on failure.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getDeepLink(clear: boolean): Promise<any> {
    return;
  }

  /**
   * Returns the tags as an array.
   *
   * @param {function(tags)} success The function to call on success.
   * @param {Array} success.tags The tags as an array.
   * @param {failureCallback} [failure] The function to call on failure.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getTags(): Promise<any> {
    return;
  }

  /**
   * Sets the tags.
   *
   * @param {Array} tags an array of strings.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setTags(tags: string[]): Promise<any> {
    return;
  }

  /**
   * Returns the alias.
   *
   * @deprecated Deprecated since 6.7.0 - to be removed in a future version of the plugin - please use getNamedUser
   * @param {function(currentAlias)} success The function to call on success.
   * @param {string} success.currentAlias The alias as a string.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getAlias(): Promise<any> {
    return;
  }

  /**
   * Sets the alias.
   *
   * @deprecated Deprecated since 6.7.0  - to be removed in a future version of the plugin - please use setNamedUser
   * @param {string} alias string
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setAlias(alias: string): Promise<any> {
    return;
  }

  /**
   * Checks if quiet time is enabled or not.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if quiet time is enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isQuietTimeEnabled(): Promise<any> {
    return;
  }

  /**
   * Enables or disables quiet time.
   *
   * @param {boolean} enabled true to enable quiet time, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setQuietTimeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if the device is currently in quiet time.
   *
   * @param {function(inQuietTime)} success Success callback.
   * @param {boolean} success.inQuietTime Flag indicating if quiet time is currently in effect.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isInQuietTime(): Promise<any> {
    return;
  }

  /**
   * Returns the quiet time as an object with the following:
   * "startHour": Number,
   * "startMinute": Number,
   * "endHour": Number,
   * "endMinute": Number
   *
   * @param {function(quietTime)} success The function to call on success.
   * @param {object} success.quietTime The quietTime object represents a timespan during
   *        which notifications should be silenced.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getQuietTime(): Promise<any> {
    return;
  }

  /**
   * Sets the quiet time.
   *
   * @param {number} startHour for quiet time.
   * @param {number} startMinute for quiet time.
   * @param {number} endHour for quiet time.
   * @param {number} endMinute for quiet time.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setQuietTime(startHour: number, startMinute: number, endHour: number, endMinute: number): Promise<any> {
    return;
  }

  /**
   * Enables or disables analytics.
   *
   * Disabling analytics will delete any locally stored events
   * and prevent any events from uploading. Features that depend on analytics being
   * enabled may not work properly if it's disabled (reports, region triggers,
   * location segmentation, push to local time).
   *
   * @param {boolean} enabled true to enable analytics, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setAnalyticsEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if analytics is enabled or not.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if analytics is enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isAnalyticsEnabled(): Promise<any> {
    return;
  }

  /**
   * Returns the named user ID.
   *
   * @param {function(namedUser)} success The function to call on success.
   * @param {string} success.namedUser The named user ID as a string.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getNamedUser(): Promise<any> {
    return;
  }

  /**
   * Sets the named user ID.
   *
   * @param {string} namedUser identifier string.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setNamedUser(namedUser: string): Promise<any> {
    return;
  }

  /**
   * Runs an Urban Airship action.
   *
   * @param {string} actionName action as a string.
   * @param {*} actionValue
   * @param {function(result)} [success] The function to call on success.
   * @param {object} success.result The result's value.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  runAction(actionName: string, actionValue: any): Promise<any> {
    return;
  }

  /**
   * Creates an editor to modify the named user tag groups.
   *
   * @returns {TagGroupEditor} A tag group editor instance.
   */
  @Cordova()
  editNamedUserTagGroups(): TagGroupEditor {
    return;
  }

  /**
   * Creates an editor to modify the channel tag groups.
   *
   * @returns {TagGroupEditor} A tag group editor instance.
   */
  @Cordova()
  editChannelTagGroups(): TagGroupEditor {
    return;
  }

  /**
   * Sets an associated identifier for the Connect data stream.
   *
   * @param key Custom key for identifier.
   * @param identifier The identifier value.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setAssociatedIdentifier(key: string, identifier: string): Promise<any> {
    return;
  }

  // Location

  /**
   * Enables or disables Urban Airship location services.
   *
   * @param {boolean} enabled true to enable location, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setLocationEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if location is enabled or not.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if location is enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isLocationEnabled(): Promise<any> {
    return;
  }

  /**
   * Enables or disables background location.
   *
   * @param {boolean} enabled true to enable background location, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setBackgroundLocationEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if background location is enabled or not.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if background location updates are enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isBackgroundLocationEnabled(): Promise<any> {
    return;
  }

  /**
   * Displays the message center.
   *
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  displayMessageCenter(): Promise<any> {
    return;
  }

  /**
   * Dismiss the message center.
   *
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  dismissMessageCenter(): Promise<any> {
    return;
  }

  /**
   * Dismiss the inbox message.
   *
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  dismissInboxMessage(): Promise<any> {
    return;
  }

  /**
   * Dismiss the inbox message in the overlay.
   *
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  dismissOverlayInboxMessage(): Promise<any> {
    return;
  }

  /**
   * Gets the array of inbox messages. Each message will have the following properties:
   * "id": string - The messages ID. Needed to display, mark as read, or delete the message.
   * "title": string - The message title.
   * "sentDate": number - The message sent date in milliseconds.
   * "listIconUrl": string, optional - The icon url for the message.
   * "isRead": boolean - The unread/read status of the message.
   * "extras": object - String to String map of any message extras.
   *
   * @param {function(messages)} success The function to call on success.
   * @param {Array} success.messages The array of inbox messages.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getInboxMessages(): Promise<any> {
    return;
  }

  /**
   * Marks an inbox message read.
   *
   * @param {string} messageId The ID of the message to mark as read.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  markInboxMessageRead(messageId: string): Promise<any> {
    return;
  }

  /**
   * Deletes an inbox message.
   *
   * @param {string} messageId The ID of the message to delete.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  deleteInboxMessage(messageId: string): Promise<any> {
    return;
  }

  /**
   * Displays the inbox message using a full screen view.
   *
   * @param {string} messageId The ID of the message to display.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  displayInboxMessage(messageId: string): Promise<any> {
    return;
  }

  /**
   * Forces the inbox to refresh. This is normally not needed as the inbox
   * will automatically refresh on foreground or when a push arrives thats
   * associated with a message, but it can be useful when providing a refresh
   * button for the message listing.
   *
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  refreshInbox(): Promise<any> {
    return;
  }

  /**
   * Displays the inbox message using an overlay display.
   *
   * @param {string} messageId The ID of the message to display.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  overlayInboxMessage(messageId: string): Promise<any> {
    return;
  }

  /**
   * Clears a notification by identifier.
   *
   * @param {string} identifier The notification identifier.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   */
  @Cordova()
  clearNotification(identifier: string): Promise<any> {
    return;
  }

  /**
   * Clears all notifications posted by the application.
   *
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  clearNotifications(): Promise<any> {
    return;
  }

  /**
   * Gets currently active notifications.
   *
   * Note: On Android this functionality is only supported on Android M or higher.
   *
   * @param {function(messages)} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   */
  @Cordova()
  getActiveNotifications(): Promise<any> {
    return;
  }

  // iOS only

  /**
   * Enables or disables auto badge. Defaults to `NO`.
   *
   * @param {boolean} enabled true to enable auto badge, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setAutobadgeEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets the badge number.
   *
   * @param count number specified badge to set.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setBadgeNumber(count: number): Promise<any> {
    return;
  }

  /**
   * Returns the current badge number.
   *
   * @param {function(badgeNumber)} success The function to call on success.
   * @param {int} success.badgeNumber The current application badge number.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  getBadgeNumber(): Promise<any> {
    return;
  }

  /**
   * Clears the badge.
   *
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  resetBadge(): Promise<any> {
    return;
  }

  /**
   * Sets the iOS notification types. Specify the combination of
   * badges, sound and alerts that are desired.
   *
   * @param types specified notification types.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setNotificationTypes(types: NotificationType): Promise<any> {
    return;
  }

  /**
   * Sets the iOS presentation options. Specify the combination of
   * badges, sound and alerts that are desired.
   *
   * @param options types specified presentation options.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setPresentationOptions(options: PresentationOptions): Promise<any> {
    return;
  }

  // Android only

  /**
   * Checks if notification sound is enabled or not.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if sound is enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isSoundEnabled(): Promise<any> {
    return;
  }

  /**
   * Enables or disables notification sound.
   *
   * @param {boolean} enabled true to enable sound, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setSoundEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if notification vibration is enabled or not.
   *
   * @param {function(enabled)} success Success callback.
   * @param {boolean} success.enabled Flag indicating if vibration is enabled or not.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  isVibrateEnabled(): Promise<any> {
    return;
  }

  /**
   * Enables or disables notification vibration.
   *
   * @param {boolean} enabled true to enable vibration, false to disable.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  setVibrateEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Adds a custom event.
   *
   * @param {object} event The custom event object.
   * @param {string} event.name The event's name.
   * @param {number} [event.value] The event's value.
   * @param {string} [event.transactionId] The event's transaction ID.
   * @param {object} [event.properties] The event's properties. Only numbers, booleans, strings, and array of strings are supported.
   * @param {Function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  addCustomEvent(event: object): Promise<any> {
    return;
  }
}
