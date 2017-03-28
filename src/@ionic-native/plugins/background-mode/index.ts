import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';
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
   * Description of background task
   */
  text?: String;

  /**
   * This will look for <icon name>.png in platforms/android/res/drawable|mipmap
   */
  icon?: string;

  color?: string;

  /**
   * By default the app will come to foreground when taping on the notification. If false, plugin wont come to foreground when tapped.
   */
  resume?: boolean;

  hidden?: boolean;

  bigText?: boolean;

  /**
   * The text that scrolls itself on statusbar
   */
  ticker?: String;

  /**
   * if true plugin will not display a notification. Default is false.
   */
  silent?: boolean;

}

/**
 * @name Background Mode
 * @description
 * Cordova plugin to prevent the app from going to sleep while in background.
 * Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode
 *@usage
 * ```typescript
 * import { BackgroundMode } from '@ionic-native/background-mode';
 *
 * constructor(private backgroundMode: BackgroundMode) { }
 *
 * ...
 *
 * this.backgroundMode.enable();
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
@Injectable()
export class BackgroundMode {

  /**
   * Enable the background mode.
   * Once called, prevents the app from being paused while in background.
   */
  @Cordova({
    sync: true
  })
  enable(): void { }

  /**
   * Disable the background mode.
   * Once the background mode has been disabled, the app will be paused when in background.
   */
  @Cordova()
  disable(): Promise<any> { return; }

  /**
   * Checks if background mode is enabled or not.
   * @returns {boolean} returns a boolean that indicates if the background mode is enabled.
   */
  @Cordova({
    sync: true
  })
  isEnabled(): boolean { return; }

  /**
   * Can be used to get the information if the background mode is active.
   * @returns {boolean} returns a boolean that indicates if the background mode is active.
   */
  @Cordova({
    sync: true
  })
  isActive(): boolean { return; }

  /**
   * Override the default title, ticker and text.
   * Available only for Android platform.
   * @param {Configure} options List of option to configure. See table below
   */
  @Cordova({
    platforms: ['Android']
  })
  setDefaults(options?: BackgroundModeConfiguration): Promise<any> { return; }

  /**
   * Modify the displayed information.
   * Available only for Android platform.
   * @param {Configure} options Any options you want to update. See table below.
   */
  @Cordova({
    platforms: ['Android']
  })
  configure(options?: BackgroundModeConfiguration): Promise<any> { return; }

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
  on(event: string): Observable<any> { return; }

  /**
   * Android allows to programmatically move from foreground to background.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  moveToBackground(): void {}

  /**
   * Android allows to programmatically move from background to foreground.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  moveToForeground(): void {}

  /**
   * Override the back button on Android to go to background instead of closing the app.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  overrideBackButton(): void {}

  /**
   * Exclude the app from the recent task list works on Android 5.0+.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  excludeFromTaskList(): void {}

  /**
   * The method works async instead of isActive() or isEnabled().
   */
  @Cordova({
    platforms: ['Android']
  })
  isScreenOff(): Promise<boolean> { return; }

  /**
   * Turn screen on
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  wakeUp(): void {}

  /**
   * Turn screen on and show app even locked
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  unlock(): void {}

}
