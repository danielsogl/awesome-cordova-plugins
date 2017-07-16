import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name HyperTrack
 * @description HyperTrack cordova plugin wrapper for Ionic Native. Location-based services provider.
 *
 * @usage
 * ```typescript
 * // Make sure to include <preference name="HYPERTRACK_PK" value="YOUR_PUBLISHABLE_KEY" /> in your app's config.xml.
 *
 * import { HyperTrack } from '@ionic-native/hyper-track';
 *
 *
 * constructor(private hyperTrack: HyperTrack) { }
 *
 * ...
 *
 * this.hyperTrack.getOrCreateUser().then((user) => {
 *  // handle success
 * }, (error) => {
 *  // handle error
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'HyperTrack',
  plugin: 'cordova-plugin-hypertrack',
  pluginRef: 'cordova.plugins.HyperTrack',
  repo: 'https://github.com/hypertrack/hypertrack-cordova',
  platforms: ['android', 'ios']
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
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  getOrCreateUser(name?: String, phone?: String, photo?: String, lookupId?: String): Promise<any> { return; }

  /**
   * Request user to grant Location access to the app (for Anrdoid).
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['android']
  })
  requestPermissions(): Promise<any> { return; }

  /**
   * 	Enable the SDK and start tracking
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  startTracking(): Promise<any> { return; }
}
