import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, Plugin, getPromise } from '@awesome-cordova-plugins/core';

declare const navigator: any;

/**
 * @name Screenshot
 * @description Captures a screen shot
 * @usage
 * ```typescript
 * import { Screenshot } from '@ionic-native/screenshot/ngx';
 *
 * constructor(private screenshot: Screenshot) { }
 *
 * ...
 *
 * // Take a screenshot and save to file
 * this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(onSuccess, onError);
 *
 * // Take a screenshot and get temporary file URI
 * this.screenshot.URI(80).then(onSuccess, onError);
 * ```
 */
@Plugin({
  pluginName: 'Screenshot',
  plugin: '@herdwatch/cordova-plugin-screenshot',
  pluginRef: 'navigator.screenshot',
  repo: 'https://github.com/herdwatch-apps/cordova-plugin-screenshot',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Screenshot extends AwesomeCordovaNativePlugin {
  /**
   *  Takes screenshot and saves the image
   *
   * @param format {string} Format can take the value of either 'jpg' or 'png'
   * On ios, only 'jpg' format is supported
   * @param quality {number}  Determines the quality of the screenshot.
   *        Default quality is set to 100.
   * @param filename {string} Name of the file as stored on the storage
   * @returns {Promise<any>}
   */
  save(format?: string, quality?: number, filename?: string): Promise<any> {
    return getPromise<any>((resolve, reject) => {
      navigator.screenshot.save(
        (error: any, result: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
        format,
        quality,
        filename
      );
    });
  }

  /**
   *  Takes screenshot and returns the image as an URI
   *
   * @param quality {number} Determines the quality of the screenshot.
   *        Default quality is set to 100.
   * @returns {Promise<any>}
   */
  URI(quality?: number): Promise<any> {
    return getPromise<any>((resolve, reject) => {
      navigator.screenshot.URI((error: any, result: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }, quality);
    });
  }
}
