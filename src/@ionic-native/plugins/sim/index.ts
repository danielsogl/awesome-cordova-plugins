import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @name Sim
 * @description
 * Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.
 *
 * Requires Cordova plugin: `cordova-plugin-sim`. For more info, please see the [Cordova Sim docs](https://github.com/pbakondy/cordova-plugin-sim).
 *
 * @usage
 * ```typescript
 * import { Sim } from '@ionic-native/sim';
 *
 *
 * constructor(private sim: Sim) { }
 *
 * ...
 *
 * this.sim.getSimInfo().then(
 *   (info) => console.log('Sim info: ', info),
 *   (err) => console.log('Unable to get sim info: ', err)
 * );
 *
 * this.sim.hasReadPermission().then(
 *   (info) => console.log('Has permission: ', info)
 * );
 *
 * this.sim.requestReadPermission().then(
 *   () => console.log('Permission granted'),
 *   () => console.log('Permission denied')
 * );
 * ```
 */
@Plugin({
  pluginName: 'Sim',
  plugin: 'cordova-plugin-sim',
  pluginRef: 'plugins.sim',
  repo: 'https://github.com/pbakondy/cordova-plugin-sim',
  platforms: ['Android', 'iOS', 'Windows Phone']
})
@Injectable()
export class Sim {
  /**
   * Returns info from the SIM card.
   * @returns {Promise<any>}
   */
  @Cordova()
  getSimInfo(): Promise<any> { return; }

  /**
   * Check permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  hasReadPermission(): Promise<any> { return; }

  /**
   * Request permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  requestReadPermission(): Promise<any> { return; }
}
