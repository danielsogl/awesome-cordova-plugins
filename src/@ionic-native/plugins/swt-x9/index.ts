import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

declare var cordova: any;

/**
 * @name SWT X9
 * @description
 * Implementation of the Shenzen Wearable Technologies X9 SDK
 *
 * @usage
 * ```typescript
 * import { SWTX9 } from '@ionic-native/swt-x9';
 *
 * constructor(private X9: SWTX9) { }
 *
 * X9.getHeartRateData()
 *   .then((responseUintArray, responseStr) => {
 *     console.log(responseUintArray);
 *     console.log(responseStr);
 *   })
 *   .catch((errorMessage) => {
 *     console.log(errorMessage);
 *   });
 * 
 * X9.getSleepData()
 *   .then((responseUintArray, responseStr) => {
 *     console.log(responseUintArray);
 *     console.log(responseStr);
 *   })
 *   .catch((errorMessage) => {
 *     console.log(errorMessage);
 *   });
 * ```
 *
 * @returns
 * The ble plugin uses typed Arrays or ArrayBuffers for sending and receiving data. The success callback will return the data as responseUintArray, responseStr in the following format:
 *
 * var responseUintArray = new Uint8Array(response);
 * var responseStr = String.fromCharCode.apply(String, new Uint8Array(response));
 */
@Plugin({
  pluginName: 'SWTX9',
  plugin: 'cordova-plugin-swt-x9',
  pluginRef: 'cordova.plugin.swt.x9',
  repo: 'https://github.com/BlyncSync/cordova-plugin-swt-x9',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class SWTX9 extends IonicNativePlugin {
  /**
   * Starts a scan for X9 devices and returns the MAC address of the first X9 found.
   *
   *@returns {Promise<any>}
   */
  @Cordova()
  startScan(): Promise<any> { return; }
  /**
   * Connect to an X9 device.  Accepts a MAC address as input, but if none is given then it scans for and (if found) connects to the first X9 found.
   * Returns the MAC address of the connected device.
   *
   *@returns {Promise<any>}
   */
  @Cordova()
  connect(): Promise<any> { return; }
  /**
   * Return heart rate data from an X9 device.
   * If no device MAC address is input and no X9 is connected, this method will scan for and (if found) connect to an X9, start the heart rate monitoring service, and return the response.
   * It will take ~20 or more seconds to run the heart rate monitoring service and return the results.
   *
   *@returns {Promise<any>}
   */
  @Cordova()
  getHeartRateData(): Promise<any> { return; }
  /**
   * Scan for and connect to the X9 device, start the heart rate monitoring service, and return the response.
   * It will take ~20 or more seconds to run the heart rate monitoring service and return the results.
   *
   *@returns {Promise<any>}
   */
  @Cordova()
  readHeartRateData(): Promise<any> { return; }
  /**
   * Return heart rate data from an X9 device.
   * This method is intended to be an internal method and should not (but ultimately can) be called directly.
   * If no X9 has been connect previously, it will call getHeartRateData to handle the automatic scan and connection process.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getSleepData(): Promise<any> { return; }
  /**
   * Return sleep data from an X9 device.
   * This method is intended to be an internal method and should not (but ultimately can) be called directly.\
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  readSleepData(): Promise<any> { return; }
  /**
   * Return current verbosity (true = verbose, false = silent)
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getVerbosity(): Promise<any> { return; }
  /**
   * Toggle verbosity
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  toggleVerbosity(): Promise<any> { return; }
}
