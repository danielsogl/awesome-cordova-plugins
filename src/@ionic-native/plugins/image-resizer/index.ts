import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

export interface ImageResizerOptions {
    /**
     * The URI for the image on the device to get scaled
     */
    uri: string;

    /**
     * The width of the new image
     */
    width: number;

    /**
     * The height of the new image
     */
    height: number;

    /**
     * The name of the folder the image should be put
     * (Android only)
     */
    folderName?: string;

    /**
     *
     * Quality given as Number for the quality of the new image
     * (Android and iOS only)
     */
    quality?: number;

    /**
     * A custom name for the file. Default name is a timestamp
     * (Android and Windows only)
     */
    fileName?: string;
}

/**
 * @name Image Resizer
 * @description
 * Cordova Plugin For Image Resize
 *
 * Requires plugin `info.protonet.imageresizer` - use the Ionic CLI and type in the following command:
 * `ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git`
 *
 * For more info, please see the https://github.com/protonet/cordova-plugin-image-resizer
 *
 * @usage
 * ```typescript
 * import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';
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
 * @interfaces
 * ImageResizerOptions
 */
@Plugin({
  pluginName: 'ImageResizer',
  plugin: 'https://github.com/protonet/cordova-plugin-image-resizer.git',
  pluginRef: 'ImageResizer',
  repo: 'https://github.com/protonet/cordova-plugin-image-resizer',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class ImageResizer {
  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  resize(options: ImageResizerOptions): Promise<any> { return; }
}
