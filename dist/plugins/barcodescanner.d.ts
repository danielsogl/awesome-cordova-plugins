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
export declare class BarcodeScanner {
    /**
     * @private
     */
    static Encode: any;
    /**
     * Open the barcode scanner.
     * @param options {Object} Optional options to pass to the scanner
     * @return Returns a Promise that resolves with scanner data, or rejects with an error.
     */
    static scan(options?: any): Promise<any>;
    /**
     * Encodes data into a barcode.
     * NOTE: not well supported on Android
     * @param type {string} Type of encoding
     * @param data {any} Data to encode
     */
    static encode(type: string, data: any): Promise<any>;
}
