import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Call Number
 * @description
 * Call a number directly from your Cordova/Ionic application.
 * **NOTE**: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.
 *
 * @usage
 * ```typescript
 * import { CallNumber } from '@ionic-native/call-number/ngx';
 *
 * constructor(private callNumber: CallNumber) { }
 *
 * ...
 *
 *
 * this.callNumber.callNumber("18001010101", true)
 *   .then(res => console.log('Launched dialer!', res))
 *   .catch(err => console.log('Error launching dialer', err));
 *
 * ```
 */
@Plugin({
  pluginName: 'CallNumber',
  plugin: 'call-number',
  pluginRef: 'plugins.CallNumber',
  repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class CallNumber extends IonicNativePlugin {
  /**
   * Calls a phone number
   * @param {string} numberToCall The phone number to call as a string
   * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
   * @return {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  callNumber(numberToCall: string, bypassAppChooser: boolean): Promise<any> {
    return;
  }

  /**
   * Check if call feature is available
   * @return {Promise<any>}
   */
  @Cordova()
  isCallSupported(): Promise<any> {
    return;
  }
}
