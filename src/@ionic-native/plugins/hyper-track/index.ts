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
 * this.hyperTrack.getOrCreateUser().then(user => {
 *  this.hyperTrack.startTracking().then(userId => {
 *   // handle tracking success
 *  }, error => {
 *   // handle tracking error
 *  });
 * }, (error) => {
 *  // handle user error
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
   *
   * @usage
   * ```
   * HyperTrack.helloWorld("text").then(result => { console.log(result); });
   * ```
   */
  @Cordova()
  helloWorld(options?: any): Promise<String> { return; }

  /**
   * Create a new user to identify the current device or get a user from a lookup id.
   *
   * @usage
   * ```
   * HyperTrack.getOrCreateUser("somename", "somephone", undefined, "somelookupid")
   *  .then(user => {
   *    // handle success
   *    // user is a string representation of the User's JSON.
   *  }, error => {
   *    // handle error
   *  });
   * ```
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  getOrCreateUser(name?: String, phone?: String, photo?: String, lookupId?: String): Promise<any> { return; }

  /**
   * Set UserId for the SDK created using HyperTrack APIs
   *
   * @usage
   * ```
   * HyperTrack.setUserId("userId")
   *  .then(() => {
   *    // handle success
   *  }, error => {
   *    // handle error
   *  });
   * ```
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserId(userId: String): Promise<any> { return; }

  /**
   * Enable the SDK and start tracking
   *
   * @usage
   * ```
   * HyperTrack.startTracking().then(userId => {
   *  // handle success
   * }, error => {
   *  // handle error
   * });
   * ```
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  startTracking(): Promise<any> { return; }

  /**
   * Create and assign an action to the current user using specified parameters
   * All parameters are required, even if some of HyeprTrack's examples say
   * otherwise, because when left as optional and not passed, it won't work nor
   * will it raise an error.
   *
   * @usage
   * ```
   * HyperTrack.createAndAssignAction('visit', 'lookupId',
   *  'Ferry building, San Francisco', 37.79557, -122.39550).then(action => {
   *    // handle action
   *  }, error => {
   *    // handle error
   *  });
   * ```
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  createAndAssignAction(type: String, lookupId: String, expectedPlaceAddress: String, expectedPlaceLatitude: Number, expectedPlaceLongitude: Number): Promise<any> { return; }

  /**
   * Complete an action from the SDK by its ID
   *
   * @usage
   * ```
   * HyperTrack.completeAction('action-id').then(() => {
   *    // handle success
   *  }, error => {
   *    // handle error
   *  });
   * ```
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  completeAction(id: String): Promise<any> { return; }

  /**
   * Disable the SDK and stop tracking.
   * Needs user setting (via getOrCreateUser or setUserId).
   *
   * @usage
   * ```
   * HyperTrack.stopTracking().then(() => {
   *  // handle success
   * }, error => {
   *  // handle error
   * });
   * ```
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  stopTracking(): Promise<any> { return; }

  /**
   * Get user's current location from the SDK
   *
   * @usage
   * ```
   * HyperTrack.getCurrentLocation().then(location => {
   *  // handle location
   * }, error => {
   *  // handle error
   * });
   * ```
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @returns {Promise<any>}
   */
  @Cordova()
  getCurrentLocation(): Promise<any> { return; }

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
}
