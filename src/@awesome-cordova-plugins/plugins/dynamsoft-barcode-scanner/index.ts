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

/**
 * dceLicense: License of Dynamsoft Camera Enhancer
 * resolution: use EnumResolution
 * rotate: convert frame to bitmap and rotate it
 */
export interface ScanOptions {
  dceLicense?: string;
  resolution?: number;
  rotate?: boolean;
}

export interface FrameResult {
  frameWidth: number;
  frameHeight: number;
  frameRotation: number;
  results: BarcodeResult[];
}

export interface BarcodeResult {
  barcodeText: string;
  barcodeFormat: string;
  barcodeBytesBase64?: string;
  x1: number;
  x2: number;
  x3: number;
  x4: number;
  y1: number;
  y2: number;
  y3: number;
  y4: number;
}

export enum EnumResolution {
  RESOLUTION_AUTO = 0,
  RESOLUTION_480P = 1,
  RESOLUTION_720P = 2,
  RESOLUTION_1080P = 3,
  RESOLUTION_2K = 4,
  RESOLUTION_4K = 5,
}

/**
 * @name dynamsoft-barcode-scanner
 * @description
 * This plugin scans barcodes using Dynamsoft Barcode Reader
 *
 * @usage
 * ```typescript
 * import { dynamsoft-barcode-scanner } from '@awesome-cordova-plugins/dynamsoft-barcode-scanner';
 *
 *
 * constructor(private dynamsoft-barcode-scanner: dynamsoft-barcode-scanner) { }
 *
 * ...
 *
 *
 * await this.dynamsoft-barcode-scanner.init("license");
 * this.dynamsoft-barcode-scanner.startScanning("license").subscribe(result => {
     console.log(result);
   });
 *
 * ```
 */
@Plugin({
  pluginName: 'dynamsoft-barcode-scanner',
  plugin: 'cordova-plugin-dynamsoft-barcode-reader',
  pluginRef: 'cordova.plugins.DBR',
  repo: 'https://github.com/xulihang/cordova-plugin-dynamsoft-barcode-reader',
  install: '',
  installVariables: [],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class BarcodeScanner extends AwesomeCordovaNativePlugin {
  /**
   * Initialize Dynamsoft Barcode Reader
   * @param license {string}
   * @return {Promise<any>} Returns a promise that resolves when the initialization is done
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  init(license: string): Promise<any> {
    return;
  }

  /**
   * Set up runtime settings
   * @param settings {string} runtime settings template in JSON
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  initRuntimeSettingsWithString(settings?: string): Promise<any> {
    return;
  }

  /**
   * Output runtime settings to JSON string
   * @return {Promise<String>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  outputSettingsToString(): Promise<string> {
    return;
  }

  /**
   * destroy Dynamsoft Barcode Reader
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  destroy(): Promise<any> {
    return;
  }

  /**
   * start the camera to scan barcodes
   * @param options {ScanOptions}
   * @return {Observable<FrameResult>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true,
  })
  startScanning(options?: ScanOptions): Observable<FrameResult> {
    return;
  }

  /**
   * stop scanning
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  stopScanning(): Promise<any> {
    return;
  }

  /**
   * resume scanning
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  resumeScanning(): Promise<any> {
    return;
  }

  /**
   * pause scanning
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  pauseScanning(): Promise<any> {
    return;
  }

  /**
   * get resolution like: 1280x720
   * @return {Promise<string>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  getResolution(): Promise<string> {
    return;
  }

  /**
   * switch torch
   * @param desiredStatus {string} on or off
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  switchTorch(desiredStatus: string): Promise<any> {
    return;
  }

  /**
   * set zoom
   * @param factor {number} zoom factor
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  setZoom(factor: number): Promise<any> {
    return;
  }

  /**
   * set focus
   * @param point focus point
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  setFocus(point: { x: number; y: number }): Promise<any> {
    return;
  }
}
