import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Autostart
 * @description
 * This plugin automatically starts your Android app after every boot or auto-update.
 * You can enable or disable the autostart function in your app.
 *
 * @usage
 * ```typescript
 * import { Autostart } from '@ionic-native/autostart/ngx';
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
  platforms: ['Android'],
})
@Injectable()
export class Autostart extends IonicNativePlugin {
  /**
   * Enable the automatic startup after the boot
   */
  @Cordova({ sync: true })
  enable(): void {}

  /**
   * Disable the automatic startup after the boot
   */
  @Cordova({ sync: true })
  disable(): void {}
}
