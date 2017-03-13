import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

/**
 * @name Header Color
 * @description
 * Cordova plugin to change color of header in multitask view
 *
 * @usage
 * ```typescript
 * import { HeaderColor } from '@ionic-native/header-color';
 *
 * constructor(private headerColor: HeaderColor) { }
 *
 * ...
 *
 * this.headerColor.tint("#becb29");
 * ```
 */
@Plugin({
  pluginName: 'HeaderColor',
  plugin: 'cordova-plugin-headercolor',
  pluginRef: 'plugins.headerColor',
  repo: 'https://github.com/tomloprod/cordova-plugin-headercolor',
  platforms: ['Android']
})
@Injectable()
export class HeaderColor {

  /**
   * Set a color to the task header
   * @param color {string} The hex value of the color
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure'
  })
  tint(color: string): Promise<any> { return; }

}
