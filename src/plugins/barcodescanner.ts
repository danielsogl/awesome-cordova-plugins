import {Plugin, Cordova} from './plugin';

/**
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BardcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```js
 * BarcodeScanner.scan(options).then((barcodeData) => {
 *  // Success! Barcode data is here
 * }, (err) => {
 * 	// An error occurred
 * });
 * ```
 */
@Plugin({
  name: 'BarcodeScanner',
  plugin: 'phonegap-plugin-barcodescanner',
  pluginRef: 'cordova.plugins.barcodeScanner'
})
export class BarcodeScanner {
  @Cordova()
  static scan(options:any){};
}
