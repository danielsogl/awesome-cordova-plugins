import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * Configurations items that can be updated.
 */
export interface BackgroundModeConfiguration {
  /**
   * Title of the background task
   */
  title?: string;

  /**
   * Description of background task
   */
  text?: string;

  /**
   * This will look for `<icon name>.png` in platforms/android/res/drawable|mipmap
   */
  icon?: string;

  /**
   * Set the background color of the notification circle
   */
  color?: string;

  /**
   * By default the app will come to foreground when tapping on the notification. If false, plugin won't come to foreground when tapped.
   */
  resume?: boolean;

  /**
   * When set to false makes the notifications visible on lock screen (Android 5.0+)
   */
  hidden?: boolean;

  /** Big text */
  bigText?: boolean;

  /**
   * The text that scrolls itself on statusbar
   */
  ticker?: string;

  /**
   * if true plugin will not display a notification. Default is false.
   */
  silent?: boolean;
}

/**
 * @name Background Mode
 * @description
 * Cordova plugin to prevent the app from going to sleep while in background.
 * Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, visit: https://github.com/katzer/cordova-plugin-background-mode
 * @usage
 * ```typescript
 * import { BackgroundMode } from '@ionic-native/background-mode/ngx';
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
  platforms: ['AmazonFire OS', 'Android', 'Browser', 'iOS', 'Windows']
})
@Injectable()
export class BackgroundMode extends IonicNativePlugin {
  /**
   * Enable the background mode.
   * Once called, prevents the app from being paused while in background.
   */
  @Cordova({
    sync: true
  })
  enable(): void {}

  /**
   * Disable the background mode.
   * Once the background mode has been disabled, the app will be paused when in background.
   */
  @Cordova({
    sync: true
  })
  disable(): void {
    return;
  }

  /**
   * Enable or disable the background mode.
   *
   * @param enable {boolean} The status to set for.
   *
   * @return {void}
   */
  @Cordova({
    sync: true
  })
  setEnabled(enable: boolean): void {}

  /**
   * Fire event with given arguments.
   *
   * @param event {string} event The event's name.
   * @param args {array} The callback's arguments.
   *
   * @return {string}
   */
  @Cordova({
    sync: true
  })
  fireEvent(event: string, ...args: any[]): string {
    return;
  }

  /**
   * Checks if background mode is enabled or not.
   * @returns {boolean} returns a boolean that indicates if the background mode is enabled.
   */
  @Cordova({
    sync: true
  })
  isEnabled(): boolean {
    return;
  }

  /**
   * Can be used to get the information if the background mode is active.
   * @returns {boolean} returns a boolean that indicates if the background mode is active.
   */
  @Cordova({
    sync: true
  })
  isActive(): boolean {
    return;
  }

  /**
   * Overwrite the default settings.
   * Available only for Android platform.
   * @param overrides {BackgroundModeConfiguration} Dict of options to be overridden.
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  setDefaults(overrides?: BackgroundModeConfiguration): void {}

  /**
   * Modify the displayed information.
   * Available only for Android platform.
   * @param {BackgroundModeConfiguration} [options] Any options you want to update. See table below.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  configure(options?: BackgroundModeConfiguration): void {}

  /**
   * Register callback for given event.
   * > Available events are `enable`, `disable`, `activate`, `deactivate` and `failure`.
   * @param event {string} Event name
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'un',
    clearWithArgs: true
  })
  on(event: string): Observable<any> {
    return;
  }

  /**
   * Listen for events that the plugin fires. Available events are `enable`, `disable`, `activate`, `deactivate` and `failure`.
   * @param event {string} Event name
   * @param callback {function} The function to be exec as callback.
   * @returns {Observable<any>}
   */
  @Cordova()
  un(event: string, callback: (...args: any[]) => void): void {
    return;
  }

  /**
   * Android allows to programmatically move from foreground to background.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  moveToBackground(): void {}

  /**
   * Enable GPS-tracking in background (Android).
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  disableWebViewOptimizations(): void {}

   /**
   * Disables battery optimazation mode for the app.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  disableBatteryOptimizations(): void {}
  
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
   * Exclude the app from the recent task list. Works on Android 5.0+.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  excludeFromTaskList(): void {}

  /**
   * If the screen is off.
   * @param fn {function} Callback function to invoke with boolean arg.
   * @returns {Promise<boolean>}
   */
  @Cordova({
    platforms: ['Android']
  })
  isScreenOff(fn: (arg0: boolean) => void): void {}

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
