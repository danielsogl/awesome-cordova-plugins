import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name App Minimize
 * @description
 * AppMinimize is a plugin to minimize the application on android devices
 *
 * @usage
 * ```typescript
 * import { AppMinimize } from '@ionic-native/app-minimize';
 *
 *
 * constructor(private appMinimize: AppMinimize) { }
 *
 * ...
 *
 * this.appMinimize.minimize();
 *
 * ```
 */
@Plugin({
  pluginName: 'AppMinimize',
  plugin: 'https://github.com/tomloprod/cordova-plugin-appminimize.git',
  pluginRef: 'cordova.plugins.appMinimize',
  repo: 'https://github.com/tomloprod/cordova-plugin-appminimize',
  platforms: ['Android']
})
@Injectable()
export class AppMinimize extends IonicNativePlugin {

  /**
   * Minimizes the application
   */
  @Cordova({ sync: true })
  minimize(): void { }

}
