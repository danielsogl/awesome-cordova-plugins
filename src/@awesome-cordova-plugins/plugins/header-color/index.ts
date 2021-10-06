import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Header Color
 * @description
 * Cordova plugin to change color of header in Android Multitask View
 * @usage
 * ```typescript
 * import { HeaderColor } from '@awesome-cordova-plugins/header-color/ngx';
 *
 * constructor(private headerColor: HeaderColor) { }
 *
 * ...
 *
 * this.headerColor.tint('#becb29');
 * ```
 */
@Plugin({
  pluginName: 'HeaderColor',
  plugin: 'cordova-plugin-headercolor',
  pluginRef: 'plugins.headerColor',
  repo: 'https://github.com/tomloprod/cordova-plugin-headercolor',
  platforms: ['Android'],
})
@Injectable()
export class HeaderColor extends AwesomeCordovaNativePlugin {
  /**
   * Set a color to the task header
   *
   * @param color {string} The hex value of the color
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure',
  })
  tint(color: string): Promise<any> {
    return;
  }
}
