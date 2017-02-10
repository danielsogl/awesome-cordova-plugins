import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @name Splashscreen
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { Splashscreen } from '@ionic-native/splashscreen';
 *
 *
 * Splashscreen.show();
 *
 * Splashscreen.hide();
 * ```
 */
@Plugin({
  pluginName: 'Splashscreen',
  plugin: 'cordova-plugin-splashscreen',
  pluginRef: 'navigator.splashscreen',
  repo: 'https://github.com/apache/cordova-plugin-splashscreen'
})
@Injectable()
export class Splashscreen {

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
