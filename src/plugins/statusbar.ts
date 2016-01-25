import {Plugin, Cordova} from './plugin';


/**
 * Manage the appearance of the native status bar.
 *
 * @usage
 * ```js
 * StatusBar.hide(); // Hide the bar
 *
 * StatusBar.setStyle(StatusBar.LIGHT_CONTENT) // Good for dark backgrounds
 * ```
 */
@Plugin({
  name: 'StatusBar',
  plugin: 'cordova-plugin-statusbar',
  pluginRef: 'StatusBar'
})
export class StatusBar {
  /**
   * Set whether the status bar overlays the main app view. The default
   * is true.
   *
   * @param doesOverlay whether the status bar overlays the main app view.
   */
  @Cordova()
  static overlaysWebView(doOverlay:boolean){};

  @Cordova()
  static styleDefault(){};

  @Cordova()
  static styleLightContent(){};

  @Cordova()
  static styleBlackTranslucent(){};
  
  @Cordova()
  static styleBlackOpaque(){};

  /**
   * Set the status bar to a specific named color. Valid options:
   * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
   *
   * iOS note: you must call StatusBar.setOverlay(false) to enable color changing.
   *
   * @param name the name of the color (from above)
   */
  @Cordova()
  static backgroundColorByName(colorName:string){};

  /**
   * Set the status bar to a specific hex color (CSS shorthand supported!).
   *
   * iOS note: you must call StatusBar.setOverlay(false) to enable color changing.
   *
   * @param hex the hex value of the color.
   */
  @Cordova()
  static backgroundColorByHexString(hexString:string){};

  /**
   * Hide the StatusBar
   *
   * Options:
   *
   * StatusBar.DEFAULT
   * StatusBar.LIGHT_CONTENT
   * StatusBar.BLACK_TRANSLUCENT
   * StatusBar.BLACK_OPAQUE
   *
   * @param style the style from above
   */
  @Cordova()
  static hide(){};

  /**
  * Show the StatusBar
  */
  @Cordova()
  static show(){};
}
