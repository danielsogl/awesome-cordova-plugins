import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface CropOption {
  /** The resulting JPEG quality (ignored on Android). default: 100 */
  quality?: number;

  /** The resulting JPEG picture width. default: -1 */
  targetWidth?: number;

  /** The resulting JPEG picture height. default: -1 */
  targetHeight?: number;
}

/**
 * @name Crop Plugin Privacy
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { CropPluginPrivacy } from '@awesome-cordova-plugins/crop-plugin-privacy/ngx';
 *
 *
 * constructor(private cropPluginPrivacy: CropPluginPrivacy) { }
 *
 * ...
 *
 *
 * this.cropPluginPrivacy.functionName('/path/to/image', { quality: 100, targetWidth: 1, targetHeight: 1 })
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'CropPluginPrivacy',
  plugin: 'cordova-plugin-crop-privacy',
  pluginRef: 'crop',
  repo: 'https://github.com/BaraAksayeth25/cordova-plugin-crop-privacy',
  platforms: ['Android'],
})
@Injectable()
export class CropPluginPrivacy extends AwesomeCordovaNativePlugin {
  /**
   * This function does something
   * @param arg1 {string} path destination
   * @param arg2 {object} Cropping configuration
   * @return {Promise<any>} return the file path
   */
  @Cordova()
  cropImage(arg1: string, arg2: CropOption): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
