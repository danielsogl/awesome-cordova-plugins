import { Cordova, Plugin } from './plugin';

/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```typescript
 * import { BarcodeScanner } from 'ionic-native';
 *
 *
 * BarcodeScanner.scan().then((barcodeData) => {
 *  // Success! Barcode data is here
 * }, (err) => {
 * 	// An error occurred
 * });
 * ```
 */
@Plugin({
  pluginName: 'BarcodeScanner',
  plugin: 'phonegap-plugin-barcodescanner',
  pluginRef: 'cordova.plugins.barcodeScanner',
  repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
  platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows 10', 'Windows 8', 'BlackBerry 10', 'Browser']
})
export class BarcodeScanner {

  /**
   * @private
   */
  static Encode: any = {
    TEXT_TYPE: 'TEXT_TYPE',
    EMAIL_TYPE: 'EMAIL_TYPE',
    PHONE_TYPE: 'PHONE_TYPE',
    SMS_TYPE: 'SMS_TYPE'
  };
  /**
   * Open the barcode scanner.
   * @param options {Object} Optional options to pass to the scanner
   * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static scan(options?: any): Promise<any> { return; }

  /**
   * Encodes data into a barcode.
   * NOTE: not well supported on Android
   * @param type {string} Type of encoding
   * @param data {any} Data to encode
   * @returns {Promise<any>}
   */
  @Cordova()
  static encode(type: string, data: any): Promise<any> { return; }

}
