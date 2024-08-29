import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name WE Cap Inbox
 * @description
 * This plugin provides functionalities to manage notifications in your app.
 *
 * @usage
 * ```typescript
 * import { WECapInbox } from '@awesome-cordova-plugins/we-cap-inbox';
 *
 * constructor(private wECapInbox: WECapInbox) { }
 *
 * ...
 *
 * this.WECapInbox.getNotificationCount()
 *   .then((count: number) => console.log(count))
 *   .catch((error: string) => console.error(error));
 * ```
 */

@Plugin({
  pluginName: 'WECapInbox',
  plugin: 'we-notificationinbox-cordova', // npm package name, example: cordova-plugin-camera
  pluginRef: 'WENotificationInboxPlugin', // the variable reference to call the plugin,
  repo: 'https://github.com/WebEngage/we-ionic-notification-inbox',
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class WECapInbox extends AwesomeCordovaNativePlugin {
  /**
   * Resets the notification count.
   * @returns {Promise<void>}
   */
  @Cordova()
  resetNotificationCount(): Promise<void> {
    return;
  }

  /**
   * Retrieves the count of notifications.
   * @param {function} successCallback
   * @param {function} errorCallback
   * @returns {Promise<number>} - The count of notifications.
   */
  @Cordova()
  getNotificationCount(successCallback: (count: String) => void, errorCallback: (error: string) => void): Promise<any> {
    return;
  }

  /**-
   * Retrieves Notification List
   * @param {JsonObject | null} offset - Optional offset for notifications
   * @param {function} successCallback
   * @param {function} errorCallback
   * @returns {Promise<any>}
   */
  @Cordova()
  getNotificationList(
    offset: JsonObject | null,
    successCallback: (notifications: NotificationResponse) => void,
    errorCallback: (error: string) => void
  ): Promise<any> {
    return;
  }

  /**
   * Marks a specific notification as read.
   * @param {JsonObject} notificationObject - The notification to mark as read.
   * @returns {Promise<void>}
   */
  @Cordova()
  markRead(notificationObject: JsonObject): Promise<void> {
    return;
  }

  /**
   * Marks a specific notification as unread.
   * @param {JsonObject} notificationObject - The notification to mark as unread.
   * @returns {Promise<void>}
   */
  @Cordova()
  markUnread(notificationObject: JsonObject): Promise<void> {
    return;
  }

  /**
   * Tracks a click event on a notification.
   * @param {JsonObject} notificationObject - The notification that was clicked.
   * @returns {Promise<void>}
   */
  @Cordova()
  trackClick(notificationObject: JsonObject): Promise<void> {
    return;
  }

  /**
   * Tracks the view event of a notification.
   * @param {JsonObject} notificationObject - The notification that was viewed.
   * @returns {Promise<void>}
   */
  @Cordova()
  trackView(notificationObject: JsonObject): Promise<void> {
    return;
  }

  /**
   * Marks a specific notification as deleted.
   * @param {JsonObject} notificationObject - The notification to delete.
   * @returns {Promise<void>}
   */
  @Cordova()
  markDelete(notificationObject: JsonObject): Promise<void> {
    return;
  }

  /**
   * Marks all notifications as read.
   * @param {JsonArray} notificationList - An array of notification identifiers to mark as read.
   * @returns {Promise<void>}
   */
  @Cordova()
  readAll(notificationList: JsonArray): Promise<void> {
    return;
  }

  /**
   * Marks all notifications as unread.
   * @param {JsonArray} notificationList - An array of notification identifiers to mark as unread.
   * @returns {Promise<void>}
   */
  @Cordova()
  unReadAll(notificationList: JsonArray): Promise<void> {
    return;
  }

  /**
   * Deletes all notifications.
   * @param {JsonArray} notificationList - An array of notification identifiers to delete.
   * @returns {Promise<void>}
   */
  @Cordova()
  deleteAll(notificationList: JsonArray): Promise<void> {
    return;
  }
}

export type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

export type NotificationResponse = {
  hasNext: boolean;
  messageList: JsonArray;
};

export type JsonObject = {
  [key: string]: JsonValue;
};

export type JsonArray = JsonValue[];
