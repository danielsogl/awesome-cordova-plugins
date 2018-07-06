import { IonicNativePlugin } from '@ionic-native/core';
/**
 * Options for sending an SMS
 */
export interface SmsOptions {
    /**
     * Set to true to replace \n by a new line. Default: false
     */
    replaceLineBreaks?: boolean;
    android?: SmsOptionsAndroid;
}
export interface SmsOptionsAndroid {
    /**
     * Set to "INTENT" to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.
     */
    intent?: string;
}
/**
 * @name SMS
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-sms. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).
 *
 * @usage
 * ```typescript
 * import { SMS } from '@ionic-native/sms';
 *
 * constructor(private sms: SMS) { }
 *
 *
 * ...
 *
 *
 * // Send a text message using default options
 * this.sms.send('416123456', 'Hello world!');
 * ```
 * @interfaces
 * SmsOptions
 * SmsOptionsAndroid
 */
export declare class SMS extends IonicNativePlugin {
    /**
     * Sends sms to a number
     * @param phoneNumber {string|Array<string>} Phone number
     * @param message {string} Message
     * @param options {SmsOptions} Options
     * @returns {Promise<any>} Resolves promise when the SMS has been sent
     */
    send(phoneNumber: string | string[], message: string, options?: SmsOptions): Promise<any>;
    /**
     * This function lets you know if the app has permission to send SMS
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if we have permission
     */
    hasPermission(): Promise<boolean>;
}
