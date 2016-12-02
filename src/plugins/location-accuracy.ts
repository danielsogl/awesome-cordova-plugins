import {Plugin, Cordova} from './plugin';
/**
 * @name LocationAccuracy
 * @description
 * This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.
 *
 * @usage
 * ```
 * import { LocationAccuracy } from 'ionic-native';
 *
 * LocationAccuracy.canRequest().then((canRequest: boolean) => {
 *
 *   if(canRequest) {
 *     // the accuracy option will be ignored by iOS
 *     LocationAccuracy.request(LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
 *       () => console.log('Request successful'),
 *       error => console.log('Error requesting location permissions', error)
 *     );
 *   }
 *
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'LocationAccuracy',
  plugin: 'cordova-plugin-request-location-accuracy',
  pluginRef: 'cordova.plugins.locationAccuracy',
  repo: 'https://github.com/dpa99c/cordova-plugin-request-location-accuracy'
})
export class LocationAccuracy {
  /**
   * Indicates if you can request accurate location
   * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
   */
  @Cordova()
  static canRequest(): Promise<boolean> { return; }

  /**
   * Indicates if a request is currently in progress
   * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
   */
  @Cordova()
  static isRequesting(): Promise<boolean> { return; }

  /**
   * Requests accurate location
   * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
   */
  @Cordova({ callbackOrder: 'reverse' })
  static request(accuracy: number): Promise<any> { return; }

  static REQUEST_PRIORITY_NO_POWER = 0;
  static REQUEST_PRIORITY_LOW_POWER = 1;
  static REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
  static REQUEST_PRIORITY_HIGH_ACCURACY = 3;
  static SUCCESS_SETTINGS_SATISFIED = 0;
  static SUCCESS_USER_AGREED = 1;
  static ERROR_ALREADY_REQUESTING = -1;
  static ERROR_INVALID_ACTION = 0;
  static ERROR_INVALID_ACCURACY = 1;
  static ERROR_EXCEPTION = 1;
  static ERROR_CANNOT_CHANGE_ACCURACY = 3;
  static ERROR_USER_DISAGREED = 4;
  static ERROR_GOOGLE_API_CONNECTION_FAILED = 4;

}
