import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name HyperTrack
 * @description HyperTrack cordova plugin wrapper for Ionic Native. Location-based services provider.
 *
 * @usage
 * ```typescript
 * import { HyperTrack } from '@ionic-native/hyper-track';
 *
 *
 * constructor(private hyperTrack: HyperTrack) { }
 *
 * ...
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'HyperTrack',
  plugin: 'cordova-plugin-hypertrack',
  pluginRef: 'cordova.plugins.HyperTrack',
  repo: 'https://github.com/hypertrack/hypertrack-cordova',
  platforms: []
})
@Injectable()
export class HyperTrack extends IonicNativePlugin {
  /**
   * Prints 'helloWorld [text]'
   */
  @Cordova()
  helloWorld(options?: any): Promise<String> { return; }

  /**
   * Create a new user to identify the current device or get a user from a lookup id.
   */
  @Cordova()
  getOrCreateUser(options?: any): Promise<Boolean> { return; }
}
