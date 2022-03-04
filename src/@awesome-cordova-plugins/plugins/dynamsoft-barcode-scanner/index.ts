import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

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

  /**
   * Long key for Dynamsoft Barcode Reader
   */
  dynamsoftlicense?: string;
}

export interface BarcodeScanResult {
  format: string;
  cancelled: boolean;
  text: string;
}

/**
 * @name dynamsoft-barcode-scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 * Requires this Cordova plugin: [BarcodeScanner plugin](https://github.com/Dynamsoft/cordova-plugin-dbr/).
 * @usage
 * ```typescript
 * import { BarcodeScanner } from '@awesome-cordova-plugins/dynamsoft-barcode-scanner';
 *
 * ...
 *
 * const results = await BarcodeScanner.scan({"dynamsoftlicense":"license"});
 * console.log(results);
 *
 * ```
 * @interfaces
 * BarcodeScannerOptions
 * BarcodeScanResult
 */
@Plugin({
  pluginName: 'dynamsoft-barcode-scanner',
  plugin: 'cordova-plugin-dbr',
  pluginRef: 'cordova.plugins.barcodeScanner',
  repo: 'https://github.com/Dynamsoft/cordova-plugin-dbr',
  install: '',
  installVariables: [],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class BarcodeScanner extends AwesomeCordovaNativePlugin {
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
}
