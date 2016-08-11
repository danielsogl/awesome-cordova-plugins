import {Cordova, Plugin} from './plugin';
/**
 * @name Crop
 * @description Crops images
 * @usage
 * ```
 * import {Crop} from 'ionic-native';
 *
 * ...
 *
 * Crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log("new image path is: " + newImage),
 *     error => console.error("Error cropping image", error)
 *   );
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-crop',
  pluginRef: 'plugins',
  repo: 'https://github.com/jeduan/cordova-plugin-crop'
})
export class Crop {
  /**
   * Crops an image
   * @param pathToImage
   * @param options
   * @return {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static crop(pathToImage: string, options?: {quality: number}): Promise<string> {return; }
}