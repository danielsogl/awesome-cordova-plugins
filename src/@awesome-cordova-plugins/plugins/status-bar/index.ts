import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Status Bar
 * @premier statusbar
 * @capacitorincompatible true
 * @description
 * Manage the appearance of the native status bar.
 *
 * Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).
 * @usage
 * ```typescript
 * import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
 *
 * constructor(private statusBar: StatusBar) { }
 *
 * ...
 *
 * // let status bar overlay webview
 * this.statusBar.overlaysWebView(true);
 *
 * // set status bar to white
 * this.statusBar.backgroundColorByHexString('#ffffff');
 * ```
 */
@Plugin({
  pluginName: 'StatusBar',
  plugin: 'cordova-plugin-statusbar',
  pluginRef: 'StatusBar',
  repo: 'https://github.com/apache/cordova-plugin-statusbar',
  platforms: ['Android', 'iOS', 'Windows'],
})
@Injectable()
export class StatusBar extends AwesomeCordovaNativePlugin {
  /**
   * Whether the StatusBar is currently visible or not.
   */
  @CordovaProperty()
  isVisible: boolean;

  /**
   * Set whether the status bar overlays the main app view. The default
   * is true.
   *
   * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
   */
  @Cordova({
    sync: true,
  })
  overlaysWebView(doesOverlay: boolean) {}

  /**
   * Use the default statusbar (dark text, for light backgrounds).
   */
  @Cordova({
    sync: true,
  })
  styleDefault() {}

  /**
   * Use the lightContent statusbar (light text, for dark backgrounds).
   */
  @Cordova({
    sync: true,
  })
  styleLightContent() {}

  /**
   * Use the blackTranslucent statusbar (light text, for dark backgrounds).
   */
  @Cordova({
    sync: true,
  })
  styleBlackTranslucent() {}

  /**
   * Use the blackOpaque statusbar (light text, for dark backgrounds).
   */
  @Cordova({
    sync: true,
  })
  styleBlackOpaque() {}

  /**
   * Set the status bar to a specific named color. Valid options:
   * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
   *
   * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
   *
   * @param {string} colorName  The name of the color (from above)
   */
  @Cordova({
    sync: true,
  })
  backgroundColorByName(colorName: string) {}

  /**
   * Set the status bar to a specific hex color (CSS shorthand supported!).
   *
   * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
   *
   * @param {string} hexString  The hex value of the color.
   */
  @Cordova({
    sync: true,
  })
  backgroundColorByHexString(hexString: string) {}

  /**
   * Hide the StatusBar
   */
  @Cordova({
    sync: true,
  })
  hide() {}

  /**
   * Show the StatusBar
   */
  @Cordova({
    sync: true,
  })
  show() {}
}
