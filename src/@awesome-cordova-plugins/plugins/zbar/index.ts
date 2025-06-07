import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

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

/**
 * @name ZBar
 * @description
 * The ZBar Scanner Plugin allows you to scan 2d barcodes.
 *
 * Requires Cordova plugin: `cordova-plugin-cszbar`. For more info, please see the [zBar plugin docs](https://github.com/tjwoon/csZBar).
 * @usage
 * ```typescript
 * import { ZBar, ZBarOptions } from '@awesome-cordova-plugins/zbar/ngx';
 *
 * constructor(private zbar: ZBar) { }
 *
 * ...
 *
 * let options: ZBarOptions = {
 *       flash: 'off',
 *       drawSight: false
 *     }
 *
 * this.zbar.scan(options)
 *    .then(result => {
 *       console.log(result); // Scanned code
 *    })
 *    .catch(error => {
 *       console.log(error); // Error message
 *    });
 *
 * ```
 * @interfaces
 * ZBarOptions
 */
@Plugin({
  pluginName: 'ZBar',
  plugin: 'cordova-plugin-cszbar',
  pluginRef: 'cloudSky.zBar',
  repo: 'https://github.com/tjwoon/csZBar',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class ZBar extends AwesomeCordovaNativePlugin {
  /**
   * Open the scanner
   * @param options { ZBarOptions } Scan options
   * @returns {Promise<any>} Returns a Promise that resolves with the scanned string, or rejects with an error.
   */
  @Cordova()
  scan(options: ZBarOptions): Promise<any> {
    return;
  }
}
