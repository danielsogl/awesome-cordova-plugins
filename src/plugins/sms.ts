import {Plugin, Cordova} from './plugin';

export interface smsOptions {

  /**
   * Set to true to replace \n by a new line. Default: false
   */
  replaceLineBreaks : boolean,

  android : smsOptionsAndroid

}

export interface smsOptionsAndroid {

  /**
   * Set to "INTENT" to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.
   */
  intent : string

}

/**
 * @name SMS
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-sms. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).
 *
 * ```shell
 * cordova plugin add cordova-sms-plugin
 * ```
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
  repo: 'https://github.com/cordova-sms/cordova-sms-plugin.git'
})
export class SMS {

  /**
   * Sends sms to a number
   * @param number [string or array of strings] Phone number
   * @param message [string] Message
   * @param options [object] Options
   * @param options.replaceLineBreaks [boolean]  Set to true to replace \n by a new line. Default: false
   * @param options.android.intent [string] Set to "INTENT" to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.
   * @returns {Promise<any>}
   */
  @Cordova()
  static send(
    number: string | string[],
    message: string,
    options?: smsOptions
  ): Promise<any> { return }

}
