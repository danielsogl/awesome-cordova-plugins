import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, Plugin, IonicNativePlugin } from '@ionic-native/core';

declare var Notification: any;
// can use a shorter name here, like PLNObject ?
export class PLNObject {

  private _objectInstance: any;

  constructor(title: string, options: any) {
    if (checkCordovaAvailablity('Notification') === true) {
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
 * @name phonegap-local-notifications
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { PhonegapLocalNotifications } from '@ionic-native/phonegap-local-notifications';
 *
 *
 * constructor(private localNotification: PhonegapLocalNotifications) { }
 *
 * ...
 *
 * this.localNotification.requestPermission().then(
 *   (permission) => {
 *     if (permission === ‘granted’) {
 *      let notification = new Notification(“My title”, {
 *            tag: ‘message1’,
 *            body: “My body”
 *      });
 *     }
 *   }
 * );
 *
 * ```
 */
@Plugin({
  pluginName: 'Phonegap Loca Notifications',
  plugin: 'phonegap-local-notifications',
  pluginRef: 'Notification',
  repo: 'https://github.com/phonegap/phonegap-plugin-local-notification',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class PhonegapLocalNotifications extends IonicNativePlugin {

  /**
   * A global object that lets you interact with the Notification API.
   * @param title {string} Title of the local notification.
   * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
   */
  @Cordova()
  create(title: string, options: any) { return new PLNObject(title, options); }
  /**
  * requests permission from the user to show a local notification.
  * @param {Promise<any>}
  */
  @Cordova()
  requestPermission(): Promise<any> { return; }

  /**
  * closes an open notification.
  */
  close(): void { }

}
