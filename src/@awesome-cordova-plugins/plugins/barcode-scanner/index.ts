import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

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
   * Save scan history. Defaults to `false`. Supported on Android only.
   */
  saveHistory?: boolean;

  /**
   * Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only.
   */
  resultDisplayDuration?: number;
}

export interface BarcodeScanResult {
  format:
    | 'QR_CODE'
    | 'DATA_MATRIX'
    | 'UPC_E'
    | 'UPC_A'
    | 'EAN_8'
    | 'EAN_13'
    | 'CODE_128'
    | 'CODE_39'
    | 'CODE_93'
    | 'CODABAR'
    | 'ITF'
    | 'RSS14'
    | 'RSS_EXPANDED'
    | 'PDF_417'
    | 'AZTEC'
    | 'MSI';
  cancelled: boolean;
  text: string;
}

/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 * @usage
 * ```typescript
 * import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
 *
 * constructor(private barcodeScanner: BarcodeScanner) { }
 *
 * ...
 *
 *
 * this.barcodeScanner.scan().then(barcodeData => {
 *  console.log('Barcode data', barcodeData);
 * }).catch(err => {
 * 	console.log('Error', err);
 * });
 * ```
 * @interfaces
 * BarcodeScannerOptions
 * BarcodeScanResult
 */
@Plugin({
  pluginName: 'BarcodeScanner',
  plugin: 'phonegap-plugin-barcodescanner',
  pluginRef: 'cordova.plugins.barcodeScanner',
  repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
  platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Windows'],
})
@Injectable()
export class BarcodeScanner extends AwesomeCordovaNativePlugin {
  Encode: {
    TEXT_TYPE: string;
    EMAIL_TYPE: string;
    PHONE_TYPE: string;
    SMS_TYPE: string;
  } = {
    TEXT_TYPE: 'TEXT_TYPE',
    EMAIL_TYPE: 'EMAIL_TYPE',
    PHONE_TYPE: 'PHONE_TYPE',
    SMS_TYPE: 'SMS_TYPE',
  };

  /**
   * Open the barcode scanner.
   *
   * @param {BarcodeScannerOptions} [options] Optional options to pass to the scanner
   * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  scan(options?: BarcodeScannerOptions): Promise<BarcodeScanResult> {
    return;
  }

  /**
   * Encodes data into a barcode.
   * NOTE: not well supported on Android
   *
   * @param {string} type Type of encoding
   * @param {any} data Data to encode
   * @returns {Promise<any>}
   */
  @Cordova()
  encode(type: string, data: any): Promise<any> {
    return;
  }
}
