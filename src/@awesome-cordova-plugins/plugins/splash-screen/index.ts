import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Splash Screen
 * @premier splashscreen
 * @capacitorincompatible true
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
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
  repo: 'https://github.com/apache/cordova-plugin-splashscreen',
  platforms: ['Amazon Fire OS', 'Android', 'iOS', 'Windows'],
})
@Injectable()
export class SplashScreen extends AwesomeCordovaNativePlugin {
  /**
   * Shows the splashscreen
   */
  @Cordova({
    sync: true,
  })
  show(): void {}

  /**
   * Hides the splashscreen
   */
  @Cordova({
    sync: true,
  })
  hide(): void {}
}
