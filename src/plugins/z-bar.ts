import { Plugin, Cordova } from './plugin';

/**
 * @name ZBar
 * @description
 * The ZBar Scanner Plugin allows you to scan 2d barcodes.
 *
 * Requires Cordova plugin: `cordova-plugin-cszbar`. For more info, please see the [zBar plugin docs](https://github.com/tjwoon/csZBar).
 *
 * @usage
 * ```
 * import { ZBar } from 'ionic-native';
 *
 * let zBarOptions = {
 *       flash: "off",
 *       drawSight: false
 *     };
 *
 * ZBar.scan(zBarOptions, result => {
 *       console.log(result); // Scanned code
 *     }, error => {
 *       console.log(error); // Error message
 *     });
 *
 * ```
 *
 * @advanced
 * zBar options
 *
 * | Option             | Type      | Values                    | Defaults                                                    |
 * |--------------------|-----------|-----------------------------------------------------------------------------------------|
 * | text_title         |`string?`  |                           | `"Scan QR Code"` (Android only)                             |
 * | text_instructions  |`string?`  |                           | `"Please point your camera at the QR code."` (Android only) |
 * | camera             |`string?`  | `"front"`, `"back"`,      | `"back"`                                                    |
 * | flash              |`string?`  | `"on"`, `"off"`, `"auto"` | `"auto"`                                                    |
 * | drawSight          |`boolean?` | `true`, `false`           | `true` (Draws red line in center of scanner)                |
 *
 */
@Plugin({
  plugin: 'cordova-plugin-cszbar',
  pluginRef: 'cloudSky.zBar',
  repo: 'https://github.com/tjwoon/csZBar',
  platforms: ['Android', 'iOS']
})
export class ZBar {

  /**
   * Open the scanner
   * @param options { ZBarOptions } Scan options
   * @param success { ZBarSuccessCallback } Success callback
   * @param failure { ZBarErrorCallback } Error callback
   */
  @Cordova()
  static scan(options: ZBarOptions, success: ZBarSuccessCallback, failure: ZBarErrorCallback): void { return; }

}

export interface ZBarSuccessCallback { (scanResult: string): void; }
export interface ZBarErrorCallback { (error: string): void; }

export interface ZBarOptions {
  text_title?: string;
  text_instructions?: string;
  camera?: string;
  flash?: string;
  drawSight?: boolean;
}
