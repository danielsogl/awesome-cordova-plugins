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
 * HeaderColor.tint("#becb29").then(
 *   (success) => {
 *   console.log("Your header have a color now")
 *   },
 *   (error) => {
 *   console.log("Your header not have a color now")
 *   }
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
   * @return {Promise<any>}
   */
  @Cordova()
  static tint(color: string): Promise<any> { return; }

}