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
 * import { SMS } from 'ionic-native';
 *
 *
 * // Send a text message using default options
 * SMS.send('416123456', 'Hello world!');
 * ```
 */
export declare class SMS {
    /**
     * Sends sms to a number
     * @param phoneNumber {string|Array<string>} Phone number
     * @param message {string} Message
     * @param options {SmsOptions} Options
     * @returns {Promise<any>} Resolves promise when the SMS has been sent
     */
    static send(phoneNumber: string | string[], message: string, options?: SmsOptions): Promise<any>;
}
