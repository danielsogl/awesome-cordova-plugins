import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

/**
 * @name Base64 To Gallery
 * @description This plugin allows you to save base64 data as a png image into the device
 * @usage
 * ```typescript
 * import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
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
 */
@Plugin({
  pluginName: 'Base64ToGallery',
  plugin: 'cordova-base64-to-gallery',
  pluginRef: 'cordova',
  repo: 'https://github.com/Nexxa/cordova-base64-to-gallery',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
@Injectable()
export class Base64ToGallery {

  /**
   * Converts a base64 string to an image file in the device gallery
   * @param {string} data The actual base64 string that you want to save
   * @param {any} [options] An object with properties: prefix: string, mediaScanner: boolean. Prefix will be prepended to the filename. If true, mediaScanner runs Media Scanner on Android and saves to Camera Roll on iOS; if false, saves to Library folder on iOS.
   * @returns {Promise<any>} returns a promise that resolves when the image is saved.
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  base64ToGallery(data: string, options?: {prefix?: string; mediaScanner?: boolean}): Promise<any> {
    return;
  }

}
