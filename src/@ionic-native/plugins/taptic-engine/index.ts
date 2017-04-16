import { Cordova, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Taptic Engine
 * @description
 * An Ionic plugin to use Taptic Engine API on iPHone 7, 7 Plus or newer.
 *
 * @usage
 * ```ts
 * import { TapticEngine } from '@ionic-native/taptic-engine;
 *
 * ...
 *
 * constructor(private taptic: TapticEngine) { }
 *
 * ...
 *
 * this.taptic.selection();
 *
 * this.taptic.notification();
 *
 * this.taptic.impact();
 *
 * ```
 */
@Plugin({
  pluginName: 'TapticEngine',
  plugin: 'cordova-plugin-taptic-engine',
  pluginRef: 'TapticEngine',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine',
  platforms: ['iOS']
})
@Injectable()
export class TapticEngine {

  /**
   * Use selection feedback generators to indicate a change in selection.
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  selection(): Promise<any> { return; }

  /**
   * Use this to indicate success/failure/warning to the user.
   * @param options {Object} should be of the type { type: 'success' } (or 'warning'/'error')
   * @param options.type {string}
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  notification(options: { type: string }): Promise<any> { return; }

  /**
   * Use this to indicate success/failure/warning to the user.
   * @param options {Object} should be of the type { style: 'light' } (or 'medium'/'heavy')
   * @param options.type {string}
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  impact(options: { style: string }): Promise<any> { return; }

}
