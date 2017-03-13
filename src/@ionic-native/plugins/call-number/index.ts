import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
/**
 * @name Call Number
 * @description
 * Call a number directly from your Cordova/Ionic application.
 *
 * @usage
 * ```
 * import {CallNumber} from '@ionic-native/call-number';
 *
 * constructor(private callNumber: CallNumber) { }
 *
 * ...
 *
 *
 * this.callNumber.callNumber(18001010101, true)
 *   .then(() => console.log('Launched dialer!'))
 *   .catch(() => console.log('Error launching dialer'));
 *
 * ```
 */
@Plugin({
  pluginName: 'CallNumber',
  plugin: 'call-number',
  pluginRef: 'plugins.CallNumber',
  repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
  platforms: ['iOS', 'Android']
})
@Injectable()
export class CallNumber {

  /**
   * Calls a phone number
   * @param numberToCall {string} The phone number to call as a string
   * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
   * @return {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  callNumber(numberToCall: string, bypassAppChooser: boolean): Promise<any> {
    return;
  }

}
