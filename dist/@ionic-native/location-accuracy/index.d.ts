import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Location Accuracy
 * @description
 * This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.
 *
 * @usage
 * ```typescript
 * import { LocationAccuracy } from '@ionic-native/location-accuracy';
 *
 * constructor(private locationAccuracy: LocationAccuracy) { }
 *
 * ...
 *
 * this.locationAccuracy.canRequest().then((canRequest: boolean) => {
 *
 *   if(canRequest) {
 *     // the accuracy option will be ignored by iOS
 *     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
 *       () => console.log('Request successful'),
 *       error => console.log('Error requesting location permissions', error)
 *     );
 *   }
 *
 * });
 *
 * ```
 */
export declare class LocationAccuracy extends IonicNativePlugin {
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    canRequest(): Promise<boolean>;
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    isRequesting(): Promise<boolean>;
    /**
     * Requests accurate location
     * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    request(accuracy: number): Promise<any>;
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_NO_POWER: number;
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_LOW_POWER: number;
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_BALANCED_POWER_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    REQUEST_PRIORITY_HIGH_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    SUCCESS_SETTINGS_SATISFIED: number;
    /**
     * Convenience constant
     * @type {number}
     */
    SUCCESS_USER_AGREED: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_ALREADY_REQUESTING: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_INVALID_ACTION: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_INVALID_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_EXCEPTION: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_CANNOT_CHANGE_ACCURACY: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_USER_DISAGREED: number;
    /**
     * Convenience constant
     * @type {number}
     */
    ERROR_GOOGLE_API_CONNECTION_FAILED: number;
}
