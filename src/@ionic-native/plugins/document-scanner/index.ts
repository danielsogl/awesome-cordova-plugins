import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export enum DocumentScannerSourceType {
  /**
   * Scan directly from device camera.
   * This is the default.
   */
  CAMERA = 1,

  /**
   * Scan from an image already stored on device.
   */
  GALLERY = 0
}

export interface DocumentScannerOptions {
  /**
   * Choose to scan from camera or existing image file. Only valid for Android.
   */
  sourceType?: DocumentScannerSourceType;

  /**
   * Filename to save scanned image to (minus extension, which is always ".png").
   * Only valid for iOS. Caller is responsible for cleaning up any files created
   * if this parameter is set to anything other than the default value,
   * which is "image".
   */
  fileName?: string;
}

/**
 * @name Document Scanner
 * @description
 * This plugin processes images of documents, compensating for perspective.
 *
 * @usage
 * ```typescript
 * import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner';
 *
 *
 * constructor(private documentScanner: DocumentScanner) { }
 *
 * ...
 *
 * let opts: DocumentScannerOptions = {};
 * this.documentScanner.scanDocument(opts)
 *   .then((res: string) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * DocumentScannerOptions
 * @enums
 * DocumentScannerSourceType
 */
@Plugin({
  pluginName: 'DocumentScanner',
  plugin: 'cordova-plugin-document-scanner',
  pluginRef: 'scan',
  repo: 'https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class DocumentScanner extends IonicNativePlugin {

  /**
   * Scan a document
   * @param opts {DocumentScannerOptions} optional parameter for controlling scanning
   * @return {Promise<string>} file URL of scanned document image
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  scanDoc(opts?: DocumentScannerOptions): Promise<string> {
    return;
  }
}
