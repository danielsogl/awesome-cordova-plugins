import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface Base64ToGalleryOptions {
  /** Saved file name prefix */
  prefix: string;
  /**
   * On Android runs Media Scanner after file creation.
   * On iOS if true the file will be added to camera roll, otherwise will be saved to a library folder.
   */
  mediaScanner: boolean;
}

/**
 * @name Base64 To Gallery
 * @description This plugin allows you to save base64 data as a png image into the device
 * @usage
 * ```typescript
 * import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
 *
 * constructor(private base64ToGallery: Base64ToGallery) { }
 *
 *
 * ...
 *
 *
 * this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
 *   res => console.log('Saved image to gallery ', res),
 *   err => console.log('Error saving image to gallery ', err)
 * );
 * ```
 * @interfaces
 * Base64ToGalleryOptions
 */
@Plugin({
  pluginName: 'Base64ToGallery',
  plugin: 'cordova-base64-to-gallery',
  pluginRef: 'cordova',
  repo: 'https://github.com/Nexxa/cordova-base64-to-gallery',
  platforms: ['Android', 'iOS', 'Windows Phone 8'],
})
@Injectable()
export class Base64ToGallery extends IonicNativePlugin {
  /**
   * Converts a base64 string to an image file in the device gallery
   * @param {string} data The actual base64 string that you want to save
   * @param {any} [options] An object with properties
   * @returns {Promise<any>} returns a promise that resolves when the image is saved.
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3,
  })
  base64ToGallery(data: string, options?: Base64ToGalleryOptions): Promise<any> {
    return;
  }
}
