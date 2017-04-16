import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

/**
 * @name Crop
 * @description Crops images
 * @usage
 * ```
 * import {Crop} from '@ionic-native/crop';
 *
 * constructor(private crop: Crop) { }
 *
 * ...
 *
 * this.crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log("new image path is: " + newImage),
 *     error => console.error("Error cropping image", error)
 *   );
 * ```
 */
@Plugin({
  pluginName: 'Crop',
  plugin: 'cordova-plugin-crop',
  pluginRef: 'plugins',
  repo: 'https://github.com/jeduan/cordova-plugin-crop',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Crop {

  /**
   * Crops an image
   * @param pathToImage
   * @param options
   * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  crop(pathToImage: string, options?: {quality: number}): Promise<string> { return; }

}
