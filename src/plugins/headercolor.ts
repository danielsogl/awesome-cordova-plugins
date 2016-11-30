import { Plugin, Cordova } from './plugin';

/**
 * @name Headerolor
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
  name: 'HeaderColor',
  plugin: 'cordova-plugin-headercolor',
  pluginRef: 'headercolor',
  repo: 'https://github.com/tomloprod/cordova-plugin-headercolor',
  platforms: ['Android']
})
export class HeaderColor {

  /**
   * Set a color to the task header
   * @param color {string} The color 
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure'
  })
  static tint(color: string): Promise<any> { }

}
