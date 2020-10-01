import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface TagGroupEditor {
  addTags(): void;
  removeTags(): void;
  apply(): void;
}

/**
 * Enum for notification types.
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
 *
 * @usage
 * ```typescript
 * import { UrbanAirShip } from '@ionic-native/urbanairship/ngx';
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
export class UrbanAirShip extends IonicNativePlugin {
  /**
   * Re-attaches document event listeners in this webview
   */
  @Cordova()
  reattach(): Promise<any> {
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
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {Boolean} clear true to clear the notification.
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
   * @param {Boolean} clear true to clear the deep link.
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
   * @param {array} success.tags The tags as an array.
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
   * @param {function} [success] Success callback.
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
   *
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
   *
   * @param {String} alias string
   * @param {function} [success] Success callback.
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
   * @param {Boolean} enabled true to enable quiet time, false to disable.
   * @param {function} [success] Success callback.
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
   * @param {Number} startHour for quiet time.
   * @param {Number} startMinute for quiet time.
   * @param {Number} endHour for quiet time.
   * @param {Number} endMinute for quiet time.
   * @param {function} [success] Success callback.
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
   * @param {Boolean} enabled true to enable analytics, false to disable.
   * @param {function} [success] Success callback.
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
   * @param {String} namedUser identifier string.
   * @param {function} [success] Success callback.
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
   * @param {String} actionName action as a string.
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
   * @return {TagGroupEditor} A tag group editor instance.
   */
  @Cordova()
  editNamedUserTagGroups(): TagGroupEditor {
    return;
  }

  /**
   * Creates an editor to modify the channel tag groups.
   *
   * @return {TagGroupEditor} A tag group editor instance.
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
   * @param {function} [success] Success callback.
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
   * @param {Boolean} enabled true to enable location, false to disable.
   * @param {function} [success] Success callback.
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
   * @param {Boolean} enabled true to enable background location, false to disable.
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {array} success.messages The array of inbox messages.
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
   * @param {String} messageId The ID of the message to mark as read.
   * @param {function} [success] Success callback.
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
   * @param {String} messageId The ID of the message to delete.
   * @param {function} [success] Success callback.
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
   * @param {String} messageId The ID of the message to display.
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {String} messageId The ID of the message to display.
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   */
  @Cordova()
  clearNotification(identifier: string): Promise<any> {
    return;
  }

  /**
   * Clears all notifications posted by the application.
   *
   * @param {function} [success] Success callback.
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
   * @param {Boolean} enabled true to enable auto badge, false to disable.
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
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
   * @param {Boolean} enabled true to enable sound, false to disable.
   * @param {function} [success] Success callback.
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
   * @param {Boolean} enabled true to enable vibration, false to disable.
   * @param {function} [success] Success callback.
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
   * @param {function} [success] Success callback.
   * @param {function(message)} [failure] Failure callback.
   * @param {string} failure.message The error message.
   */
  @Cordova()
  addCustomEvent(event: object): Promise<any> {
    return;
  }
}
