import {Plugin, Cordova, CordovaProperty} from './plugin';

declare var window;

/**
 * @name Status Bar
 * @description
 * Manage the appearance of the native status bar.
 *
 * Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).
 *
 * @usage
 * ```ts
 * import {StatusBar} from 'ionic-native';
 *
 *
 *
 * StatuBar.overlaysWebView(true);
 *
 * StatusBar.
 * ```
 *
 */
@Plugin({
  plugin: 'cordova-plugin-statusbar',
  pluginRef: 'StatusBar',
  repo: 'https://github.com/apache/cordova-plugin-statusbar'
})
export class StatusBar {
  /**
   * Set whether the status bar overlays the main app view. The default
   * is true.
   *
   * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
   */
  @Cordova({
    sync: true
  })
  static overlaysWebView(doesOverlay: boolean) {};

  /**
   * Use the default statusbar (dark text, for light backgrounds).
   */
  @Cordova({
    sync: true
  })
  static styleDefault() {};

  /**
   * Use the lightContent statusbar (light text, for dark backgrounds).
   */
  @Cordova({
    sync: true
  })
  static styleLightContent() {};

  /**
   * Use the blackTranslucent statusbar (light text, for dark backgrounds).
   */
  @Cordova({
    sync: true
  })
  static styleBlackTranslucent() {};

  /**
   * Use the blackOpaque statusbar (light text, for dark backgrounds).
   */
  @Cordova({
    sync: true
  })
  static styleBlackOpaque() {};

  /**
   * Set the status bar to a specific named color. Valid options:
   * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
   *
   * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
   *
   * @param {string} colorName  The name of the color (from above)
   */
  @Cordova({
    sync: true
  })
  static backgroundColorByName(colorName: string) {};

  /**
   * Set the status bar to a specific hex color (CSS shorthand supported!).
   *
   * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
   *
   * @param {string} hexString  The hex value of the color.
   */
  @Cordova({
    sync: true
  })
  static backgroundColorByHexString(hexString: string) {};

  /**
   * Hide the StatusBar
   */
  @Cordova({
    sync: true
  })
  static hide() {};

  /**
  * Show the StatusBar
  */
  @Cordova({
    sync: true
  })
  static show() {};

  /**
   * Whether the StatusBar is currently visible or not.
   */
  @CordovaProperty
  static get isVisible() { return window.StatusBar.isVisible; }
}
