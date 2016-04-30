import {Plugin, Cordova} from './plugin';
/**
 * @name Base64 To Gallery
 * @description This plugin allows you to save base64 data as a png image into the device
 * @usage
 * ```ts
 * import {Base64ToGallery} from 'ionic-native';
 *
 *
 * Base64ToGallery.base64ToGallery(base64Data, 'img_').then(
 *   res => console.log("Saved image to gallery ", res),
 *   err => console.log("Error saving image to gallery ", err)
 * );
 * ```
 */
@Plugin({
  plugin: 'cordova-base64-to-gallery',
  pluginRef: 'cordova',
  repo: 'https://github.com/Nexxa/cordova-base64-to-gallery',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class Base64ToGallery {

  /**
   * Converts a base64 string to an image file in the device gallery
   * @param data
   * @param prefix
   */
  @Cordova()
  base64ToGallery(data: string , prefix?: string ): Promise<any> {
    return;
  }

}