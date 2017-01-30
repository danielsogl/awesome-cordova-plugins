import { Plugin, Cordova } from './plugin';

/**
 * @name HeaderColor
 * @description
 * Cordova plugin to change color of header in multitask view
 *
 * @usage
 * ```typescript
 * import { HeaderColor } from 'ionic-native';
 *
 * HeaderColor.tint("#becb29");
 * ```
 */
@Plugin({
  pluginName: 'HeaderColor',
  plugin: 'cordova-plugin-headercolor',
  pluginRef: 'plugins.headerColor',
  repo: 'https://github.com/tomloprod/cordova-plugin-headercolor',
  platforms: ['Android']
})
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
  static tint(color: string): Promise<any> { return; }

}
