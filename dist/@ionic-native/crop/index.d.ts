import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Crop
 * @description Crops images
 * @usage
 * ```typescript
 * import { Crop } from '@ionic-native/crop';
 *
 * constructor(private crop: Crop) { }
 *
 * ...
 *
 * this.crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log('new image path is: ' + newImage),
 *     error => console.error('Error cropping image', error)
 *   );
 * ```
 */
export declare class Crop extends IonicNativePlugin {
    /**
     * Crops an image
     * @param pathToImage
     * @param options
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    crop(pathToImage: string, options?: {
        quality: number;
    }): Promise<string>;
}
