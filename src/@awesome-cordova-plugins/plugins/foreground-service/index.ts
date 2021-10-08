import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Foreground Service
 * @description
 * This plugin allows for android devices to continue running services in the background, using a
 * foreground ongoing notification. This is targeted towards use with plugins such as
 * 'cordova-geolocation' that will not run while the app is in the background on android API 26+.
 *
 * For android API 28+, the following xml snippet should be inserted into ```config.xml```:
 *
 * ```
 * ...
 * <platform name="android">
 *   <config-file parent="/*" target="AndroidManifest.xml">
 *     <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
 *   </config-file>
 *   ...
 * ```
 * @usage
 * ```typescript
 * import { ForegroundService } from '@awesome-cordova-plugins/foreground-service/ngx';
 *
 *
 * constructor(public foregroundService: ForegroundService) { }
 *
 * ...
 *
 * startService() {
 *  // Notification importance is optional, the default is 1 - Low (no sound or vibration)
 *  this.foregroundService.start('GPS Running', 'Background Service', 'drawable/fsicon');
 * }
 *
 * stopService() {
 *  // Disable the foreground service
 *  this.foregroundService.stop();
 * }
 *
 * ```
 */
@Plugin({
  pluginName: 'ForegroundService',
  plugin: 'cordova-plugin-foreground-service',
  pluginRef: 'cordova.plugins.foregroundService',
  repo: 'https://github.com/DavidBriglio/cordova-plugin-foreground-service',
  platforms: ['Android'],
})
@Injectable()
export class ForegroundService extends AwesomeCordovaNativePlugin {
  /**
   * Enables the foreground service
   *
   * @param {string} title (content title) A brief headline for the notification
   * @param {string} text (content text) Supporting information
   * @param {string} icon The drawable icon can be any drawable image that exists in the resource folder. This means you must copy the icon you want to use into the platforms/android/app/src/main/res/drawable folder set. If no icon can be found using the icon name parameter, a default star icon will be used.
   *
   * For an example, if the `fsicon.png` (see xml below) resides here: ```src/assets/icon/fsicon.png```. Then ```icon``` parameter value would be ```'drawable/fsicon'```. In order for this example to work, the following xml snippet must be in ```config.xml```.
   *
   * ```
   * <platform name="android">
   *   <resource-file src="www/assets/icon/fsicon.png" target="app/src/main/res/drawable/fsicon.png" />
   *   ...
   * ```
   * @param {number} importance Notification importance dictates how the notification is initially presented:
   *
   * Value | Importance | Description | Examples
   * --- | --- | --- | ---
   * 1|IMPORTANCE_LOW|Does not make a sound or heads-up display (plugin's default)|New content the user has subscribed to, social network invitations
   * 2|IMPORTANCE_DEFAULT|Makes a sound, but no heads-up display|Traffic alerts, task reminders
   * 3|IMPORTANCE_HIGH|Makes a sound and heads-up display|Text messages, alarms, phone calls
   * @param {number} id The notification id is a customizable integer that is used to reference the notification that will be launched. This is customizable to avoid conflicting with any other notifications. If this is not included, a [*unique*] default id will be used.
   * @see https://material.io/design/platform-guidance/android-notifications.html
   */
  @Cordova({
    sync: true,
  })
  start(title: string, text: string, icon?: string, importance: 1 | 2 | 3 = 1, id = 0): void {
    return;
  }

  /**
   * Disables the foreground service
   */
  @Cordova({
    sync: true,
  })
  stop(): void {
    return;
  }
}
