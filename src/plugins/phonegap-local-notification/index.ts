import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, Plugin, IonicNativePlugin, checkAvailability } from '@ionic-native/core';

declare const Notification: any;

/**
 * @hidden
 */
export class PLNObject {

  private _objectInstance: any;

  constructor(title: string, options: LocalNotificationOptions) {
    if (checkAvailability(PhonegapLocalNotification.pluginRef, null, PhonegapLocalNotification.pluginName) === true) {
      this._objectInstance = new Notification(title, options);
    }
  }

  @CordovaInstance({ sync: true })
  close(): void { }

}

export interface LocalNotificationOptions {

  /**
   * Sets the direction of the notification. One of "auto", "ltr" or "rtl"
   */
  dir?: string;

  /**
   *  Sets the language of the notification
   */
  lang?: string;

  /**
   * Sets the body of the notification
   */
  body?: string;

  /**
   * Sets the identifying tag of the notification
   */
  tag?: string;

  /**
   * Sets the icon of the notification
   */
  icon?: string;

}

/**
 * @name Phonegap Local Notification
 * @description
 * The Local Notification plugin gives developers the ability to post notifications from their app that show up in the device’s notification area.
 * The API for the local notification plugin follows the W3C Web Notifications specification: https://www.w3.org/TR/notifications/
 *
 * @usage
 * ```
 * import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
 *
 *
 * constructor(private localNotification: PhonegapLocalNotification) { }
 *
 * ...
 *
 * this.localNotification.requestPermission().then(
 *   (permission) => {
 *     if (permission === 'granted') {
 *
 *       // Create the notification
 *       this.localNotification.create('My Title', {
 *         tag: 'message1',
 *         body: 'My body',
 *         icon: 'assets/icon/favicon.ico'
 *       });
 *
 *     }
 *   }
 * );
 *
 * ```
 *
 * @interfaces
 * LocalNotificationOptions
 */
@Plugin({
  pluginName: 'Phonegap Local Notifications',
  plugin: 'phonegap-plugin-local-notification',
  pluginRef: 'Notification',
  repo: 'https://github.com/phonegap/phonegap-plugin-local-notification',
  platforms: ['Android', 'Browser', 'iOS', 'Windows']
})
@Injectable()
export class PhonegapLocalNotification extends IonicNativePlugin {

  /**
   * A global object that lets you interact with the Notification API.
   * @param title {string} Title of the local notification.
   * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
   * @returns {PLNObject}
   */
  create(title: string, options: LocalNotificationOptions) { return new PLNObject(title, options); }

  /**
  * requests permission from the user to show a local notification.
  * @returns {Promise<any>}
  */
  @Cordova()
  requestPermission(): Promise<any> { return; }

}
