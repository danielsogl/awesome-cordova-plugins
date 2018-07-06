import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @hidden
 */
export declare class PLNObject {
    private _objectInstance;
    constructor(title: string, options: LocalNotificationOptions);
    close(): void;
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
 * constructor(private localNotification: PhonegapLocalNotifications) { }
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
export declare class PhonegapLocalNotification extends IonicNativePlugin {
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    create(title: string, options: LocalNotificationOptions): PLNObject;
    /**
    * requests permission from the user to show a local notification.
    * @returns {Promise<any>}
    */
    requestPermission(): Promise<any>;
}
