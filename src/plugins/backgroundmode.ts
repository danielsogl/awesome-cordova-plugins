import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * Configurations items that can be updated.
 */
export interface BackgroundModeConfiguration {

  /**
   * Title of the background task
   */
  title?: String;

  /**
   * The text that scrolls itself on statusbar
   */
  ticker?: String;

  /**
   * Description of background task
   */
  text?: String;

  /**
   * if true plugin will not display a notification. Default is false.
   */
  silent?: boolean;

  /**
   * By default the app will come to foreground when taping on the notification. If false, plugin wont come to foreground when tapped.
   */
  resume?: boolean;

}

/**
* @name Background Mode
* @description
* Cordova plugin to prevent the app from going to sleep while in background.
* Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode
*@usage
* ```typescript
* import { BackgroundMode } from 'ionic-native';
*
* BackgroundMode.enable();
* ```
 *
 * @interfaces
 * BackgroundModeConfiguration
*/
@Plugin({
  pluginName: 'BackgroundMode',
  plugin: 'cordova-plugin-background-mode',
  pluginRef: 'cordova.plugins.backgroundMode',
  repo: 'https://github.com/katzer/cordova-plugin-background-mode',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class BackgroundMode {

  /**
  * Enable the background mode.
  * Once called, prevents the app from being paused while in background.
  */
  @Cordova({
    sync: true
  })
  static enable(): void { }

  /**
  * Disable the background mode.
  * Once the background mode has been disabled, the app will be paused when in background.
  */
  @Cordova()
  static disable(): Promise<any> { return; }

  /**
  * Checks if background mode is enabled or not.
  * @returns {boolean} returns a boolean that indicates if the background mode is enabled.
  */
  @Cordova({
    sync: true
  })
  static isEnabled(): boolean { return; }

  /**
  * Can be used to get the information if the background mode is active.
  * @returns {boolean} returns a boolean that indicates if the background mode is active.
  */
  @Cordova({
    sync: true
  })
  static isActive(): boolean { return; }

  /**
  * Override the default title, ticker and text.
  * Available only for Android platform.
  * @param {Configure} options List of option to configure. See table below
  */
  @Cordova({
    platforms: ['Android']
  })
  static setDefaults(options?: BackgroundModeConfiguration): Promise<any> { return; }

  /**
  * Modify the displayed information.
  * Available only for Android platform.
  * @param {Configure} options Any options you want to update. See table below.
  */
  @Cordova({
    platforms: ['Android']
  })
  static configure(options?: BackgroundModeConfiguration): Promise<any> { return; }

  /**
   * Listen for events that the plugin fires. Available events are `enable`, `disable`, `activate`, `deactivate` and `failure`.
   * @param event {string} Event name
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'un',
    clearWithArgs: true
  })
  static on(event: string): Observable<any> { return; }

  /**
   * Override the back button on Android to go to background instead of closing the app.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static overrideBackButton(): void {}

  /**
   * Exclude the app from the recent task list works on Android 5.0+.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static excludeFromTaskList(): void {}

  /**
   * The method works async instead of isActive() or isEnabled().
   */
  @Cordova({
    platforms: ['Android']
  })
  static isScreenOff(): Promise<boolean> { return; }

  /**
   * Turn screen on
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static wakeUp(): void {}

  /**
   * Turn screen on and show app even locked
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static unlock(): void {}

}
