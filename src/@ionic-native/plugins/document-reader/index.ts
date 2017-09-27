import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name DocumentReader
 * @description
 * Plugin for reading and validation of identification documents.
 *
 * @usage
 * ```typescript
 * import { DocumentReader } from 'ionic-native';
 * var license; // read regula.license file
 * DocumentReader.scanDocument(license).then((result) => {
 * 		// read result
 * })
 * ```
 */
@Plugin({
  pluginName: 'DocumentReader',
  plugin: 'cordova-plugin-documentreader',
  pluginRef: 'DocumentReader',
  repo: 'https://github.com/regulaforensics/cordova-plugin-documentreader.git',
  platforms: ['iOS'],
  install: 'ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION="To take photo"',
})
@Injectable()
export class DocumentReader extends IonicNativePlugin {

  /**
   * Run the scanner
   * @param license {any} License data
   * @return {Promise<string[]>} Returns a promise that resolves when results was got, and fails when not
   */
  @Cordova()
  scanDocument(license: any): Promise<string[]> { return; }
}
