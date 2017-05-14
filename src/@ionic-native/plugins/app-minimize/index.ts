import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

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
  plugin: 'https://github.com/tomloprod/cordova-plugin-appminimize.git',
  pluginRef: 'plugins.appMinimize',
  repo: 'https://github.com/tomloprod/cordova-plugin-appminimize',
  platforms: ['Android']
})
export class AppMinimize extends IonicNativePlugin {

  /**
   * Minimizes the application
   * @return {Promise<any>}
   */
  @Cordova()
  minimize(): Promise<any> { return; }

}
