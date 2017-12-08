import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @beta
 * @name HyperTrack
 * @description
 * HyperTrack cordova plugin wrapper for Ionic Native. Location-based services provider.
 * Make sure to include your publishable key at config.xml (see [HyperTrack Cordova Setup](https://docs.hypertrack.com/sdks/cordova/setup.html#step-2-configure-the-sdk)).
 *
 * @usage
 * ```typescript
 * import { HyperTrack } from '@ionic-native/hyper-track';
 *
 * constructor(private hyperTrack: HyperTrack) { }
 *
 * // Check if app has location permissions enabled
 * this.hyperTrack.checkLocationPermission().then(response => {
 *   // response (String) can be "true" or "false"
 *   if (response != "true") {
 *     // Ask for permissions
 *     this.hyperTrack.requestPermissions().then(response => {}, error => {});
 *   }
 * }, error => {});
 *
 * // Check if app has location services enabled
 * this.hyperTrack.checkLocationServices().then(response => {
 *   // response (String) can be "true" or "false"
 *   if (response != "true") {
 *     // Request services to be enabled
 *     this.hyperTrack.requestLocationServices().then(response => {}, error => {});
 *   }
 * }, error => {});
 *
 * // First set the current user. This can be done via getOrCreateUser() or setUserId()
 * this.hyperTrack.setUserId("xxx").then(user => {
 *   // user (String) is a String representation of a User's JSON
 *
 *   this.hyperTrack.startTracking().then(userId => {}, trackingError => {});
 *
 *   this.hyperTrack.createAndAssignAction('visit', 'lookupId','address', 20.12, -100.3).then(action => {
 *     // Handle action. It's a String representation of the Action's JSON. For example:
 *     // '{"eta":"Jul 17, 2017 12:50:03 PM","assigned_at":"Jul 17, 2017 12:34:38 PM",,"distance":"0.0",...}'
 *   }, error => {});
 *
 *   // You can complete an action with completeAction() or completeActionWithLookupId()
 *   this.hyperTrack.completeAction('action-id').then(response => {
 *     // Handle response (String). Should be "OK".
 *   }, error => {});
 *
 *   this.hyperTrack.getCurrentLocation().then(location => {
 *     // Handle location. It's a String representation of a Location's JSON.For example:
 *     // '{"mAccuracy":22.601,,"mLatitude":23.123456, "mLongitude":-100.1234567, ...}'
 *   }, error => {});
 *
 *   this.hyperTrack.stopTracking().then(success => {
 *     // Handle success (String). Should be "OK".
 *   }, error => {});
 * 
 * }, error => {});* 
 * ```
 */
@Plugin({
  pluginName: 'HyperTrack',
  plugin: 'cordova-plugin-hypertrack',
  pluginRef: 'cordova.plugins.HyperTrack',
  repo: 'https://github.com/hypertrack/hypertrack-cordova',
  platforms: ['Android']
})
@Injectable()
export class HyperTrack extends IonicNativePlugin {
  /**
   * Returns given text. For testing purposes.
   * @param {String} text Given text to print
   * @returns {Promise<any>} Returns a Promise that resolves with the result text (which is the same as the given text) if successful, or it gets rejected if an error ocurred.
   */
  @Cordova()
  helloWorld(text: String): Promise<String> { return; }

  /**
   * Create a new user to identify the current device or get a user from a lookup id.
   * @param {String} name User's name
   * @param {String} phone User's phone
   * @param {String} photo User's photo as URL or a Base64 converted string
   * @param {String} lookupId User's lookupId, which is used to check if a new user is to be created (in this case you could set it to an internal reference for the user that you can use later to identify it), or if one with an existing lookupId is to be used.
   * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the User's JSON, or it gets rejected if an error ocurred.
   */
  @Cordova()
  getOrCreateUser(name: String, phone: String, photo: String, lookupId: String): Promise<any> { return; }

  /**
   * Set UserId for the SDK created using HyperTrack APIs. This is useful if you already have a user previously created.
   * @param {String} userId User's ID
   * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred. An "OK" response doesn't necessarily mean that the userId was found. It just means that it was set correctly.
   */
  @Cordova()
  setUserId(userId: String): Promise<any> { return; }

  /**
   * Enable the SDK and start tracking. This will fail if there is no user set.
   * @returns {Promise<any>} Returns a Promise that resolves with the userId (String) of the User being tracked if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
   */
  @Cordova()
  startTracking(): Promise<any> { return; }

  /**
   * Create and assign an action to the current user using specified parameters
   * @param {String} type The action type. Can be one from "pickup", "delivery", "dropoff", "visit", "stopover" or "task"
   * @param {String} lookupId The Action's desired lookupId
   * @param {String} expectedPlaceAddress The address of the Action
   * @param {Number} expectedPlaceLatitude The latitude of the Action
   * @param {Number} expectedPlaceLongitude The longitude of the Action
   * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Action's JSON, or it gets rejected if an error ocurred.
   */
  @Cordova()
  createAndAssignAction(type: String, lookupId: String, expectedPlaceAddress: String, expectedPlaceLatitude: Number, expectedPlaceLongitude: Number): Promise<any> { return; }

  /**
   * Complete an action from the SDK by its ID
   * @param {String} actionId ID of the Action that will be marked as completed
   * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
   */
  @Cordova()
  completeAction(actionId: String): Promise<any> { return; }

  /**
   * Complete an action from the SDK using Action's lookupId as parameter
   * @param {String} lookupId Lookup ID of the Action that will be marked as completed
   * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
   */
  @Cordova()
  completeActionWithLookupId(lookupId: String): Promise<any> { return; }

  /**
   * Disable the SDK and stop tracking.
   * Needs user setting (via getOrCreateUser() or setUserId()) first.
   * @returns {Promise<any>} Returns a Promise that resolves with the an "OK" string if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
   */
  @Cordova()
  stopTracking(): Promise<any> { return; }

  /**
   * Get user's current location from the SDK
   * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Location's JSON, or it gets rejected if an error ocurred.
   */
  @Cordova()
  getCurrentLocation(): Promise<any> { return; }

  /**
   * Check if Location permission has been granted to the app (for Android).
   * Returns "true" or "false" in success method accordingly.
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location permission was granted, or it gets rejected if an error ocurred.
   */
  @Cordova()
  checkLocationPermission(): Promise<any> { return; }

  /**
   * Request user to grant Location access to the app (for Anrdoid).
   * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location access was given to the app, or it gets rejected if an error ocurred.
   */
  @Cordova()
  requestPermissions(): Promise<any> { return; }

  /**
   * Check if Location services are enabled on the device (for Android).
   * Returns "true" or "false" in success method accordingly.
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location services are enabled, or it gets rejected if an error ocurred.
   */
  @Cordova()
  checkLocationServices(): Promise<any> { return; }

  /**
   * Request user to enable Location services on the device.
   * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location services were enabled, or it gets rejected if an error ocurred.
   */
  @Cordova()
  requestLocationServices(): Promise<any> { return; }
}
