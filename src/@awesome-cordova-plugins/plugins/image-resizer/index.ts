/* eslint-disable jsdoc/require-param-type */
/* eslint-disable jsdoc/check-tag-names */

import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface ImageResizerOptions {
  /**
   * The URI for the image on the device to get scaled
   */
  uri: string;
  /**
   * The name of the folder the image should be put
   * (Android only)
   */
  folderName?: string;
  /**
   * A custom name for the file. Default name is a timestamp. You have to set this value on iOS
   */
  fileName?: string;
  /**
   *
   * Quality given as Number for the quality of the new image
   * (Android and iOS only)
   */
  quality?: number;
  /**
   * The width of the new image
   */
  width: number;
  /**
   * The height of the new image
   */
  height: number;
  /**
   * Whether or not to return a base64 encoded image string instead of the path to the resized image.
   * iOS only
   */
  base64?: boolean;
}

/**
 * @name ImageResizer
 * @description
 * Cordova Plugin For Image Resize
 * @usage
 * ```typescript
 * import { ImageResizer, ImageResizerOptions } from '@awesome-cordova-plugins/image-resizer/ngx';
 *
 * constructor(private imageResizer: ImageResizer) { }
 *
 * ...
 *
 * let options = {
 *  uri: uri,
 *  folderName: 'Protonet',
 *  quality: 90,
 *  width: 1280,
 *  height: 1280
 * } as ImageResizerOptions;
 *
 * this.imageResizer
 *   .resize(options)
 *   .then((filePath: string) => console.log('FilePath', filePath))
 *   .catch(e => console.log(e));
 *
 * ```
 */
@Plugin({
  pluginName: 'ImageResizer',
  plugin: 'cordova-plugin-image-resizer', // npm package name, example: cordova-plugin-camera
  pluginRef: 'ImageResizer', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/JoschkaSchulz/cordova-plugin-image-resizer', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class ImageResizer extends AwesomeCordovaNativePlugin {
  /**
   * This function resizes the image based on the options provided
   *
   * @param options {ImageResizerOptions} image resize options
   * @return {Promise<string>} Returns a Promise that resolves the resized image file URI
   * otherwise rejects with an error.
   */
  @Cordova()
  resize(options: ImageResizerOptions): Promise<string> {
    return;
  }
}
