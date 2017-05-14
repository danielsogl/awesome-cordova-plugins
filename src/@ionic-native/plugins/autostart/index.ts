import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Autostart
 * @description
 * This plugin will start automatically your Android app after the every boot or the auto-update of your application.
 * You can enable or disable the autostart function in your app.
 *
 * @usage
 * ```typescript
 * import { Autostart } from '@ionic-native/autostart';
 *
 *
 * constructor(private autostart: Autostart) { }
 *
 * ...
 *
 * this.autostart.enable();
 *
 * this.autostart.disable();
 *
 * ```
 */
@Plugin({
  pluginName: 'Autostart',
  plugin: 'cordova-plugin-autostart',
  pluginRef: 'cordova.plugins.autoStart',
  repo: 'https://github.com/ToniKorin/cordova-plugin-autostart',
  platforms: ['Android']
})
@Injectable()
export class Autostart extends IonicNativePlugin {

  /**
   * Enable the automatic startup after the boot
   */
  @Cordova({ sync: true })
  enable(): void { }

  /**
   * Disable the automatic startup after the boot
   */
  @Cordova({ sync: true })
  disable(): void { }

}
