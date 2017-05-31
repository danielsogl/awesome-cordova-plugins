import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Q R Scanner
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { QRScanner } from '@ionic-native/qr-scanner';
 *
 *
 * constructor(private qRScanner: QRScanner) { }
 *
 * ...
 *
 *
 * this.qRScanner.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'QRScanner',
  plugin: 'cordova-plugin-qrscanner',
  pluginRef: 'QRScanner',
  repo: 'https://github.com/bitpay/cordova-plugin-qrscanner',
  platforms: ['Android', 'iOS', 'Windows', 'Browser']
})
@Injectable()
export class QRScanner extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  functionName(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
