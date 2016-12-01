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
 * ZBar.scan(zBarOptions)
 *    .then(result => {
 *       console.log(result); // Scanned code
 *    })
 *    .catch(error => {
 *       console.log(error); // Error message
 *    });
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
  pluginName: 'ZBar',
  plugin: 'cordova-plugin-cszbar',
  pluginRef: 'cloudSky.zBar',
  repo: 'https://github.com/tjwoon/csZBar',
  platforms: ['Android', 'iOS']
})
export class ZBar {

  /**
   * Open the scanner
   * @param options { ZBarOptions } Scan options
   * @returns {Promise<any>} Returns a Promise that resolves with the scanned string, or rejects with an error.
   */
  @Cordova()
  static scan(options: ZBarOptions): Promise<any> { return; }

}

export interface ZBarOptions {
  /**
   * A string representing the title text (Android only).
   * Default: "Scan QR Code"
   */
  text_title?: string;

  /**
   * A string representing the instruction text (Android only).
   * Default: "Please point your camera at the QR code."
   */
  text_instructions?: string;

  /**
   * A string defining the active camera when opening the scanner.
   * Possible values: "front", "back"
   * Default: "back"
   */
  camera?: string;

  /**
   * A string defining the state of the flash.
   * Possible values: "on", "off", "auto"
   * Default: "auto"
   */
  flash?: string;

  /**
   * A boolean to show or hide a line in the center of the scanner.
   * Default: true
   */
  drawSight?: boolean;
}
