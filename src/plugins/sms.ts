import {Plugin, Cordova} from './plugin';
import {isInstalled} from "./plugin";
import {pluginWarn} from "./plugin";

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

declare var sms : any;

/**
 *
 *
 * Requires Cordova plugin: cordova-plugin-sms. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).
 *
 * ```
 * cordova plugin add cordova-plugin-sms
 * ```
 *
 * @usage
 * ```js
 *
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-sms',
  pluginRef: 'sms'
})
export class SMS {

  /**
   * Sends sms to a number
   * @param number [number] Phone number
   * @param message [string] Message
   * @param options [object] Options
   * @param options.replaceLineBreaks [boolean]  Set to true to replace \n by a new line. Default: false
   * @param options.android.intent [string] Set to "INTENT" to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.
   * @returns {Promise<any>}
   */
  static send(number : number, message : string, options : smsOptions) : Promise<any> {
    return new Promise<any>((res, rej) => {
      // TODO handle error in case plugin doesn't exist
      sms.send(number, message, options, () => res(), (error : any) => rej(error));
    });
  }

}
