import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @paid
 * @beta
 * @name Regula Document Reader
 * @description
 * Plugin for reading and validation of identification documents.
 *
 * @usage
 * ```typescript
 * import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';
 *
 * let license; // read regula.license file
 * RegulaDocumentReader.initReader(license); // initialize reader
 * RegulaDocumentReader.scanDocument().then((result) => {
 * 		// read result
 * })
 * ```
 */
@Plugin({
  pluginName: 'Regula Document Reader',
  plugin: 'cordova-plugin-documentreader',
  pluginRef: 'DocumentReader',
  repo: 'https://github.com/regulaforensics/cordova-plugin-documentreader.git',
  platforms: ['iOS', 'Android'],
  install: 'ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION="To take photo"',
})
@Injectable()
export class RegulaDocumentReader extends IonicNativePlugin {

  /**
   * Initialize the scanner
   * @param license {any} License data
   */
  @Cordova()
  initReader(license: any): void {}

  /**
   * Run the scanner
   * @return {Promise<string[]>} Returns a promise that resolves when results was got, and fails when not
   */
  @Cordova()
  scanDocument(): Promise<string[]> { return; }
}
