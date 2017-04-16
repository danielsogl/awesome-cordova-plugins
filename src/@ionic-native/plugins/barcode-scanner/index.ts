import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


export interface BarcodeScannerOptions {

  /**
   * Prefer front camera. Supported on iOS and Android.
   */
  preferFrontCamera?: boolean;

  /**
   * Show flip camera button. Supported on iOS and Android.
   */
  showFlipCameraButton?: boolean;

  /**
   * Show torch button. Supported on iOS and Android.
   */
  showTorchButton?: boolean;

  /**
   * Disable animations. Supported on iOS only.
   */
  disableAnimations?: boolean;

  /**
   * Disable success beep. Supported on iOS only.
   */
  disableSuccessBeep?: boolean;

  /**
   * Prompt text. Supported on Android only.
   */
  prompt?: string;

  /**
   * Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`.
   */
  formats?: string;

  /**
   * Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation.
   */
  orientation?: string;

  /**
   * Launch with the torch switched on (if available). Supported on Android only.
   */
  torchOn?: boolean;

  /**
   * Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only.
   */
  resultDisplayDuration?: number;

}

/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```typescript
 * import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 *
 * constructor(private barcodeScanner: BarcodeScanner) { }
 *
 * ...
 *
 *
 * this.barcodeScanner.scan().then((barcodeData) => {
 *  // Success! Barcode data is here
 * }, (err) => {
 * 	// An error occurred
 * });
 * ```
 * @interfaces
 * BarcodeScannerOptions
 */
@Plugin({
  pluginName: 'BarcodeScanner',
  plugin: 'phonegap-plugin-barcodescanner',
  pluginRef: 'cordova.plugins.barcodeScanner',
  repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
  platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows 10', 'Windows 8', 'BlackBerry 10', 'Browser']
})
@Injectable()
export class BarcodeScanner {

  Encode: {
    TEXT_TYPE: string;
    EMAIL_TYPE: string;
    PHONE_TYPE: string;
    SMS_TYPE: string;
  } = {
    TEXT_TYPE: 'TEXT_TYPE',
    EMAIL_TYPE: 'EMAIL_TYPE',
    PHONE_TYPE: 'PHONE_TYPE',
    SMS_TYPE: 'SMS_TYPE'
  };

  /**
   * Open the barcode scanner.
   * @param options {BarcodeScannerOptions} Optional options to pass to the scanner
   * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  scan(options?: BarcodeScannerOptions): Promise<any> { return; }

  /**
   * Encodes data into a barcode.
   * NOTE: not well supported on Android
   * @param type {string} Type of encoding
   * @param data {any} Data to encode
   * @returns {Promise<any>}
   */
  @Cordova()
  encode(type: string, data: any): Promise<any> { return; }

}
