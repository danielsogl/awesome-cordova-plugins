import {Plugin, Cordova} from './plugin'

/**
 * @name Splashscreen
 * @description This plugin displays and hides a splash screen during application launch.
 * @usage
 * ```ts
 * Splashscreen.show();
 *
 * Splashscreen.hide();
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-splashscreen',
  pluginRef: 'navigator.splashscreen',
  repo: 'https://github.com/apache/cordova-plugin-splashscreen'
})
export class Splashscreen {

  /**
   * Shows the splashscreen
   */
  @Cordova({
    sync: true
  })
  static show() : void {}

  /**
   * Hides the splashscreen
   */
  @Cordova({
    sync: true
  })
  static hide() : void {}

}