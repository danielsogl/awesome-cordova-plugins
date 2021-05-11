import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Restart
 * @description
 * This plugin to restart android application
 *
 * @usage
 * ```typescript
 * import { Restart } from '@ionic-native/restart';
 *
 *
 * constructor(private restart: Restart) { }
 *
 * ...
 *
 *
 * this.restart.restart(true)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Restart',
  plugin: 'cordova-plugin-restart',
  pluginRef: 'RestartPlugin',
  repo: 'https://github.com/MaximBelov/cordova-plugin-restart',
  install: 'ionic cordova plugin add cordova-plugin-restart',
  platforms: ['Android'],
})
@Injectable()
export class Restart extends IonicNativePlugin {
  @Cordova({
    errorIndex: 0,
    successIndex: 2,
  })
  restart(cold: boolean): Promise<any> {
    return;
  }

  @Cordova({
    errorIndex: 0,
  })
  enableDebug(): Promise<any> {
    return;
  }
}
