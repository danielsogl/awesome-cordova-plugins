import {Plugin, Cordova} from './plugin';

export interface ImagePickerOptions {
    // max images to be selected, defaults to 15. If this is set to 1, upon
    // selection of a single image, the plugin will return it.
    maximumImagesCount?: number;

    // max width and height to allow the images to be.  Will keep aspect
    // ratio no matter what.  So if both are 800, the returned image
    // will be at most 800 pixels wide and 800 pixels tall.  If the width is
    // 800 and height 0 the image will be 800 pixels wide if the source
    // is at least that wide.
    width?: number;
    height?: number;

    // quality of resized image, defaults to 100
    quality?: number;
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
 * ```js
 * import {ImagePicker} from 'ionic-native';
 *
 *
 *
 * ImagePicker.getPictures(options).then((results) => {
 *   for (var i = 0; i < results.length; i++) {
 *       console.log('Image URI: ' + results[i]);
 *   }
 * }, (err) => {
 * });
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-image-picker',
  pluginRef: 'window.imagePicker',
  repo: 'https://github.com/wymsee/cordova-imagePicker'
})
export class ImagePicker {
  /**
   * Pick pictures from the library.
   * @param {ImagePickerOptions} options
   * @return Returns a Promise that resolves the image file URI
   * otherwise rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getPictures(options: ImagePickerOptions): Promise<any> { return; }
}
