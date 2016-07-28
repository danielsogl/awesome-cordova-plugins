import { Plugin, Cordova } from './plugin';
/**
 * @name Full Screen Image
 * @description
 * Allows you to show images in full screen
 * @usage
 * ```typescript
 * import { FullScreenImage } from 'ionic-native';
 *
 * FullScreenImage.showImageURL('http://path.to/image.jpg');
 * ```
 */
@Plugin({
  plugin: 'https://github.com/keensoft/FullScreenImage-Cordova-Plugin.git',
  pluginRef: 'FullScreenImage',
  repo: 'https://github.com/keensoft/FullScreenImage-Cordova-Plugin'
})
export class FullScreenImage {
  /**
   * Show image from URL
   * @param imageSrc Internal or external image URL
   */
  @Cordova({sync: true})
  static showImageURL(imageSrc: string): void { }

  /**
   * Show image from Base64 string
   * @param base64String Image encoded in Base64
   * @param name File name to show
   * @param type Image type
   */
  @Cordova({sync: true})
  static showImageBase64(base64String: string, name: string, type: string): void { }
}
