import {Plugin, Cordova} from './plugin';

/**
 * Options for sending an SMS
 */
export interface smsOptions {

  /**
   * Set to true to replace \n by a new line. Default: false
   */
  replaceLineBreaks? : boolean,

  android? : smsOptionsAndroid

}

export interface smsOptionsAndroid {

  /**
   * Set to "INTENT" to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.
   */
  intent? : string

}

/**
 * @name SMS
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-sms. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).
 *
 * @usage
 * ```ts
 *
 * // Send a text message using default options
 * SMS.send('416123456','Hello world!');
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-sms-plugin',
  pluginRef: 'sms',
  repo: 'https://github.com/cordova-sms/cordova-sms-plugin',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class SMS {

  /**
   * Sends sms to a number
   * @param number {string|Array<string>} Phone number
   * @param message {string} Message
   * @param options {smsOptions} Options
   * @returns {Promise<any>} Resolves promise when the SMS has been sent
   */
  @Cordova()
  static send(
    number: string | string[],
    message: string,
    options?: smsOptions
  ): Promise<any> { return }

}
