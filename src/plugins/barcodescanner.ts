import {Plugin, Cordova} from './plugin';

/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```js
 * BarcodeScanner.scan().then((barcodeData) => {
 *  // Success! Barcode data is here
 * }, (err) => {
 * 	// An error occurred
 * });
 * ```
 */
@Plugin({
  plugin: 'phonegap-plugin-barcodescanner',
  pluginRef: 'cordova.plugins.barcodeScanner',
  repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner'
})
export class BarcodeScanner {

  /**
   * Open the barcode scanner.
   * @return Returns a Promise that resolves with scanner data, or rejects with an error.
   */
  @Cordova()
  static scan(): Promise<any> { return }

  // Not well supported
  // @Cordova()
  // static encode(type, data){};
}
