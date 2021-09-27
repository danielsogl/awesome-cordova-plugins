import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface ThemeDetectionResponse {
  // Boolean value about the status of the request
  value: boolean;

  // Message for readable usage
  message: string;
}

/**
 * @beta
 * @name Theme Detection
 * @description
 * Cordova plugin to detect whether dark mode is enabled or not
 * @usage
 * ```typescript
 * import { ThemeDetection } from '@awesome-cordova-plugins/theme-detection';
 *
 *
 * constructor(private themeDetection: ThemeDetection) { }
 *
 * ...
 *
 * this.themeDetection.isAvailable()
 *   .then((res: ThemeDetectionResponse) => {
 *      if(res.value) {
 *        this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
 *          console.log(res);
 *        })
 *        .catch((error: any) => console.error(error));
 *      }
 *   })
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'ThemeDetection',
  plugin: 'cordova-plugin-theme-detection',
  pluginRef: 'cordova.plugins.ThemeDetection',
  repo: 'https://github.com/mariusbackes/cordova-plugin-theme-detection',
  install: 'cordova plugin add cordova-plugin-theme-detection',
  installVariables: [],
  platforms: ['iOS', 'Android'],
})
@Injectable()
export class ThemeDetection extends AwesomeCordovaNativePlugin {
  /**
   *
   * @returns {Promise<ThemeDetectionResponse>}
   *  Returns a promise with an object that has a boolean property which gives information if the detection is available or not
   */
  @Cordova()
  isAvailable(): Promise<ThemeDetectionResponse> {
    return;
  }

  /**
   *
   * @returns {Promise<ThemeDetectionResponse>}
   *  Returns a promise with an object that has a boolean property which gives information if dark mode is enabled or not
   */
  @Cordova()
  isDarkModeEnabled(): Promise<ThemeDetectionResponse> {
    return;
  }
}
