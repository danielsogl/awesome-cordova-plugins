import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name HyperTrack
 * @description HyperTrack cordova plugin wrapper for Ionic Native. Location-based services provider. iOS is being implemented.
 *
 * @usage
 * ```typescript
 * // Make sure to include <preference name="HYPERTRACK_PK" value="YOUR_PUBLISHABLE_KEY" /> in your app's config.xml.
 * // Note that your publishable key can be either a production key or a test key (see your HyperTrack dashboard).
 *
 * import { HyperTrack } from '@ionic-native/hyper-track';
 *
 *
 * constructor(private hyperTrack: HyperTrack) { }
 *
 * ...
 *
 * this.hyperTrack.setUserId("xxx").then(user => {
 *   this.hyperTrack.startTracking().then(userId => {
 *     // handle tracking success
 *   }, trackingError => {
 *     // handle tracking error
 *   });
 * }, userError => {
 *   // handle user error
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'HyperTrack',
  plugin: 'cordova-plugin-hypertrack',
  pluginRef: 'cordova.plugins.HyperTrack',
  repo: 'https://github.com/hypertrack/hypertrack-cordova',
  platforms: ['android']
})
@Injectable()
export class HyperTrack extends IonicNativePlugin {
  /**
   * Returns given text. For testing purposes.
   *
   * @param {String} [text] Given text to print
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the result text (which is the same as the given text) if successful, or it gets rejected if an error ocurred.
   *
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#L6|HyperTrack.js helloWorld implementation}
   *
   * @usage
   * ```
   * HyperTrack.helloWorld("text").then(result => {
   *   console.log(result);
   * });
   * ```
   */
  @Cordova()
  helloWorld(text: String): Promise<String> { return; }

  /**
   * Create a new user to identify the current device or get a user from a lookup id.
   *
   * @param {String} [name] User's name
   * @param {String} [phone] User's phone
   * @param {String} [photo] User's photo as URL or a Base64 converted string
   * @param {String} [lookupId] User's lookupId, which is used to check if a new user is to be created (in this case you could set it to an internal reference for the user that you can use later to identify it), or if one with an existing lookupId is to be used.
   *
   * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the User's JSON, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#L15|HyperTrack.js getOrCreateUser implementation}
   * @see {@link https://docs.hypertrack.com/api/entities/user.html#the-user-object|HyperTrack API User Oject}
   *
   * @usage
   * ```
   * HyperTrack.getOrCreateUser("name", "123", undefined, "xxxx")
   *  .then(user => {
   *    // handle success
   *    // user is a string representation of the User's JSON. For example:
   *    // '{"availability_status":"offline","last_battery":0,"created_at":"Jul 17, 2017 12:06:45 PM","id":"xxxxxx","lookup_id":"xxxx",...}'
   *  }, error => {
   *    // handle error
   *  });
   * ```
   */
  @Cordova()
  getOrCreateUser(name: String, phone: String, photo: String, lookupId: String): Promise<any> { return; }

  /**
   * Set UserId for the SDK created using HyperTrack APIs. This is useful if you already have a user previously created.
   *
   * @param {String} [userId] User's ID
   *
   * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred. An "OK" response doesn't necessarily mean that the userId was found. It just means that it was set correctly.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#L20|HyperTrack.js setUserId implementation}
   *
   * @usage
   * ```
   * HyperTrack.setUserId("userId")
   *  .then(success => {
   *    // handle success. Should be "OK".
   *  }, error => {
   *    // handle error
   *  });
   * ```
   */
  @Cordova()
  setUserId(userId: String): Promise<any> { return; }

  /**
   * Enable the SDK and start tracking. This will fail if there is no user set.
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the userId (String) of the User being tracked if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#L27|HyperTrack.js startTracking implementation}
   *
   * @usage
   * ```
   * HyperTrack.startTracking().then(userId => {
   *  // handle success
   * }, error => {
   *  // handle error
   * });
   * ```
   */
  @Cordova()
  startTracking(): Promise<any> { return; }

  /**
   * Create and assign an action to the current user using specified parameters
   * All parameters are required, even if some of HyeprTrack's examples say
   * otherwise, because when left as optional and not passed, it won't work nor
   * will it raise an error.
   *
   * @param {String} [type] The action type. Can be one from "pickup", "delivery", "dropoff", "visit", "stopover" or "task"
   * @param {String} [lookupId] The Action's desired lookupId
   * @param {String} [expectedPlaceAddress] The address of the Action
   * @param {Number} [expectedPlaceLatitude] The latitude of the Action
   * @param {Number} [expectedPlaceLongitude] The longitude of the Action
   *
   * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Action's JSON, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#33|HyperTrack.js createAndAssignAction implementation}
   * @see {@link https://docs.hypertrack.com/api/entities/action.html#the-action-object|HyperTrack API Documentation for Action}
   *
   * @usage
   * ```
   * HyperTrack.createAndAssignAction('visit', 'lookupId',
   *  'Ferry building, San Francisco', 37.79557, -122.39550).then(action => {
   *    // handle action. It's a String representation of the Action's JSON. For example:
   *    // '{"eta":"Jul 17, 2017 12:50:03 PM","assigned_at":"Jul 17, 2017 12:34:38 PM",,"distance":"0.0",...}'
   *  }, error => {
   *    // handle error
   *  });
   * ```
   */
  @Cordova()
  createAndAssignAction(type: String, lookupId: String, expectedPlaceAddress: String, expectedPlaceLatitude: Number, expectedPlaceLongitude: Number): Promise<any> { return; }

  /**
   * Complete an action from the SDK by its ID
   *
   * @param {String} [id] ID of the Action that will be marked as completed
   *
   * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#39|HyperTrack.js completeAction implementation}
   *
   * @usage
   * ```
   * HyperTrack.completeAction('action-id').then(success => {
   *    // handle success. Should be "OK".
   *  }, error => {
   *    // handle error
   *  });
   * ```
   */
  @Cordova()
  completeAction(id: String): Promise<any> { return; }

  /**
   * Complete an action from the SDK using Action's lookupId as parameter
   *
   * @param {String} [lookupId] Lookup ID of the Action that will be marked as completed
   *
   * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#46|HyperTrack.js completeActionWithLookupId implementation}
   *
   * @usage
   * ```
   * HyperTrack.completeActionWithLookupId('lookupId').then(success => {
   *    // handle success. Should be "OK".
   *  }, error => {
   *    // handle error
   *  });
   * ```
   */
  @Cordova()
  completeActionWithLookupId(lookupId: String): Promise<any> { return; }

  /**
   * Disable the SDK and stop tracking.
   * Needs user setting (via getOrCreateUser() or setUserId()) first.
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the an "OK" string if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#52|HyperTrack.js stopTracking implementation}
   *
   * @usage
   * ```
   * HyperTrack.stopTracking().then(success => {
   *  // handle success. Should be "OK".
   * }, error => {
   *  // handle error
   * });
   * ```
   */
  @Cordova()
  stopTracking(): Promise<any> { return; }

  /**
   * Get user's current location from the SDK
   *
   * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Location's JSON, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#58|HyperTrack.js getCurrentLocation implementation}
   *
   * @usage
   * ```
   * HyperTrack.getCurrentLocation().then(location => {
   *  // handle location. it is a String representation of a Location's JSON.For example:
   *    // '{"mAccuracy":22.601,"mAltitude":0.0,"mBearing":0.0,"mDistance":0.0,"mElapsedRealtimeNanos":0,"mHasAccuracy":true,"mHasAltitude":false,"mHasBearing":false,"mHasSpeed":false,"mInitialBearing":0.0,"mIsFromMockProvider":false,"mLat1":0.0,"mLat2":0.0,"mLatitude":23.123456,"mLon1":0.0,"mLon2":0.0,"mLongitude":-100.1234567,"mResults":[0.0,0.0],"mSpeed":0.0,"mTime":0}'
   * }, error => {
   *  // handle error
   * });
   * ```
   */
  @Cordova()
  getCurrentLocation(): Promise<any> { return; }

  /**
   * Check if Location permission has been granted to the app (for Android).
   * Returns "true" or "false" in success method accordingly.
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location permission was granted, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#64|HyperTrack.js checkLocationPermission implementation}
   * @see {@link https://docs.hypertrack.com/sdks/android/setup.html#step-3-enable-location-permissions|HyperTrack Android SDK Setup}
   *
   * @usage
   * ```
   * HyperTrack.checkLocationPermission().then(response => {
   *  // handle response. It can be "true" or "false"
   * }, error => {
   *  // handle error
   * });
   * ```
   */
  @Cordova({
    platforms: ['android']
  })
  checkLocationPermission(): Promise<any> { return; }

  /**
   * Request user to grant Location access to the app (for Anrdoid).
   * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
   *
   * TODO: Check if the Promise is actually resolved in this way.
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location access was given to the app, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#70|HyperTrack.js requestPermissions implementation}
   * @see {@link https://docs.hypertrack.com/sdks/android/setup.html#step-3-enable-location-permissions|HyperTrack Android SDK Setup}
   *
   * @usage
   * ```
   * HyperTrack.requestPermissions().then(response => {
   *  // handle response
   * }, error => {
   *  // handle error
   * });
   * ```
   */
  @Cordova({
    platforms: ['android']
  })
  requestPermissions(): Promise<any> { return; }

  /**
   * Check if Location services are enabled on the device (for Android).
   * Returns "true" or "false" in success method accordingly.
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location services are enabled, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#76|HyperTrack.js checkLocationServices implementation}
   * @see {@link https://docs.hypertrack.com/sdks/android/setup.html#step-3-enable-location-permissions|HyperTrack Android SDK Setup}
   *
   * @usage
   * ```
   * HyperTrack.checkLocationServices().then(response => {
   *  // handle response. It can be "true" or "false"
   * }, error => {
   *  // handle error
   * });
   * ```
   */
  @Cordova({
    platforms: ['android']
  })
  checkLocationServices(): Promise<any> { return; }

  /**
   * Request user to enable Location services on the device.
   * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
   *
   * TODO: Check if the Promise is actually resolved in this way.
   * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location services were enabled, or it gets rejected if an error ocurred.
   *
   * @see {@link https://docs.hypertrack.com/sdks/cordova/reference.html#methods|Hypertrack Cordova Methods Reference}
   * @see {@link https://github.com/hypertrack/hypertrack-cordova/blob/master/www/HyperTrack.js#82|HyperTrack.js requestLocationServices implementation}
   * @see {@link https://docs.hypertrack.com/sdks/android/setup.html#step-3-enable-location-permissions|HyperTrack Android SDK Setup}
   *
   * @usage
   * ```
   * HyperTrack.requestLocationServices().then(response => {
   *  // handle response
   * }, error => {
   *  // handle error
   * });
   * ```
   */
  @Cordova({
    platforms: ['android']
  })
  requestLocationServices(): Promise<any> { return; }
}
