import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Lottie Splash Screen
 * @description
 * Cordova plugin to show bodymovin/Lottie animations as the splash screen with Airbnb's Lottie wrapper
 * @usage
 * ```typescript
 * import { LottieSplashScreen } from '@awesome-cordova-plugins/lottie-splash-screen/ngx';
 *
 *
 * constructor(private lottieSplashScreen: LottieSplashScreen) { }
 *
 * ...
 *
 *
 * this.lottieSplashScreen.show('www/lottie/animation.json', false, 1024, 768)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'LottieSplashScreen',
  plugin: 'cordova-plugin-lottie-splashscreen',
  pluginRef: 'lottie.splashscreen',
  repo: 'https://github.com/timbru31/cordova-plugin-lottie-splashscreen',
  install: '',
  installVariables: [],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class LottieSplashScreen extends AwesomeCordovaNativePlugin {
  /**
   * This function shows a Lottie splash screen. If no arguments are given, it defaults to the config.xml values, however you can pass (new) options here to change the behavior on runtime. (For easier reading the TypeScript notation is used)
   *
   * @param location {string} Location of the Lottie JSON file that should be loaded.
   * @param remote {number} Toggles Lottie's remote mode which allows files to be downloaded/displayed from URLs. Example:
   * @param width {number} Width of the container that's rendering the Lottie animation
   * @param height {number} Height of the container that's rendering the Lottie animation
   */
  @Cordova({
    sync: true,
  })
  show(location?: string, remote?: boolean, width?: number, height?: number): void {}

  /**
   * This methods hides the current active Lottie splashscreen and destroys the views.
   */
  @Cordova({ sync: true })
  hide(): void {}
}
