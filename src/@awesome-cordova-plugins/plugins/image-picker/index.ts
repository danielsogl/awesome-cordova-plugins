import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

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
   * Videos allowed?
   */
  allow_video?: boolean;

  /**
   * the default is the message of the old plugin impl
   */
  title?: string;

  /**
   * the old plugin impl didn't have it, so passing null by default
   */
  message?: string;

  /**
   * Choose the format of the return value.
   * Defined in ImagePicker.OutputType. Default is FILE_URI.
   *      FILE_URI : 0,   Return image file URI,
   *      DATA_URL : 1,   Return image as base64-encoded string
   */
  outputType?: number;

  /**
   * Disable the iOS popover as seen on iPad
   */
  disable_popover?: boolean;
}

export enum OutputType {
  FILE_URL = 0,
  DATA_URL,
}

/**
 * @name Image Picker
 * @description
 * Cordova Plugin For Multiple Image Selection
 *
 * Requires Cordova plugin: `cordova-plugin-image-picker`.
 * For more info, please see the https://github.com/Telerik-Verified-Plugins/ImagePicker
 * @usage
 * ```typescript
 * import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
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
@Plugin({
  pluginName: 'ImagePicker',
  plugin: 'cordova-plugin-telerik-imagepicker',
  pluginRef: 'window.imagePicker',
  repo: 'https://github.com/Telerik-Verified-Plugins/ImagePicker',
  install:
    'ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"',
  installVariables: ['PHOTO_LIBRARY_USAGE_DESCRIPTION'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class ImagePicker extends AwesomeCordovaNativePlugin {
  /**
   * Pick pictures from the library.
   *
   * @param {ImagePickerOptions} options
   * @returns {Promise<any>} Returns a Promise that resolves the image file URI
   * otherwise rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  getPictures(options: ImagePickerOptions): Promise<any> {
    return;
  }

  /**
   * Check if we have permission to read images
   *
   * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
   */
  @Cordova({
    platforms: ['Android'],
  })
  hasReadPermission(): Promise<boolean> {
    return;
  }

  /**
   * Request permission to read images
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  requestReadPermission(): Promise<any> {
    return;
  }
}
