import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @name Splash Screen
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { SplashScreen } from '@ionic-native/splash-screen';
 *
 * constructor(private splashScreen: SplashScreen) { }
 *
 * ...
 *
 * this.splashScreen.show();
 *
 * this.splashScreen.hide();
 * ```
 */
@Plugin({
  pluginName: 'SplashScreen',
  plugin: 'cordova-plugin-splashscreen',
  pluginRef: 'navigator.splashscreen',
  repo: 'https://github.com/apache/cordova-plugin-splashscreen'
})
@Injectable()
export class SplashScreen {

  /**
   * Shows the splashscreen
   */
  @Cordova({
    sync: true
  })
  show(): void {}

  /**
   * Hides the splashscreen
   */
  @Cordova({
    sync: true
  })
  hide(): void {}

}
