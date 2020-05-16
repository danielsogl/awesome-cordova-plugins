import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Full Screen Image
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FullScreenImage } from '@ionic-native/full-screen-image';
 *
 *
 * constructor(private fullScreenImage: FullScreenImage) { }
 *
 * ...
 *
 * this.fullScreenImage.showImageURL('/assets/...')
 *   .then((data: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ...
 *
 * this.fullScreenImage.showImageBase64('iVBORw0KGgoAAAANSUhEUgAAA...')
 *   .then((data: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FullScreenImage',
  plugin: 'es.keensoft.fullscreenimage',
  pluginRef: 'FullScreenImage',
  repo: 'https://github.com/keensoft/FullScreenImage-Cordova-Plugin',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FullScreenImage extends IonicNativePlugin {
  /**
   * Opens an image from a URL or path
   * @param url {string} url or image path
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  showImageURL(url: string): Promise<any> {
    return;
  }

  /**
   * Opens an image from a base64 string
   * @param base64String {string} base64 string
   * @param name? {string} image name
   * @param type? {string} image extension
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  showImageBase64(base64String: string, name?: string, type?: string): Promise<any> {
    return;
  }
}
