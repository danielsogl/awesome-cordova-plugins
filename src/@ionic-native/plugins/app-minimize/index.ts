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
 * this.plugin.minimize().then(
 *   success => console.log('Closed'),
 *   err => console.log('Something went wrong')
 * );
 *
 * ```
 */
@Plugin({
  pluginName: 'AppMinimize',
  plugin: 'add cordova-plugin-appminimize',
  pluginRef: 'plugins.appMinimize',
  repo: 'https://github.com/tomloprod/cordova-plugin-appminimize',
  platforms: ['Android']
})
@Injectable()
export class AppMinimize extends IonicNativePlugin {

  /**
   * Minimizes the application
   * @return {Promise<any>}
   */
  @Cordova()
  minimize(): Promise<any> { return; }

}
