import { IonicNativePlugin } from '@ionic-native/core';
export interface ImagePickerOptions {
    /**
     * max images to be selected, defaults to 15. If this is set to 1, upon selection of a single image, the plugin will return it. (Android only)
     */
    maximumImagesCount?: number;
    /**
     * Max width to allow images to be
     */
    width?: number;
    /**
     * Max height to allow images to be
     */
    height?: number;
    /**
     * Quality of images, defaults to 100
     */
    quality?: number;
    /**
     * Output type, defaults to 0  (FILE_URI).
     */
    outputType?: number;
}
/**
 * @name Image Picker
 * @description
 * Cordova Plugin For Multiple Image Selection
 *
 * Requires Cordova plugin: `cordova-plugin-image-picker`.
 * For more info, please see the https://github.com/wymsee/cordova-imagePicker
 *
 * @usage
 * ```typescript
 * import { ImagePicker } from '@ionic-native/image-picker';
 *
 *
 * constructor(private imagePicker: ImagePicker) { }
 *
 * ...
 *
 * this.imagePicker.getPictures(options).then((results) => {
 *   for (var i = 0; i < results.length; i++) {
 *       console.log('Image URI: ' + results[i]);
 *   }
 * }, (err) => { });
 *
 * ```
 * @interfaces
 * ImagePickerOptions
 */
export declare class ImagePicker extends IonicNativePlugin {
    /**
     * Pick pictures from the library.
     * @param {ImagePickerOptions} options
     * @returns {Promise<any>} Returns a Promise that resolves the image file URI
     * otherwise rejects with an error.
     */
    getPictures(options: ImagePickerOptions): Promise<any>;
    /**
     * Check if we have permission to read images
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
     */
    hasReadPermission(): Promise<boolean>;
    /**
     * Request permission to read images
     * @returns {Promise<any>}
     */
    requestReadPermission(): Promise<any>;
}
