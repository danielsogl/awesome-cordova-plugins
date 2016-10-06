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
export declare class LocationAccuracy {
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    static canRequest(): Promise<boolean>;
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    static isRequesting(): Promise<boolean>;
    /**
     * Requests accurate location
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    static request(accuracy: string): Promise<any>;
    static REQUEST_PRIORITY_NO_POWER: number;
    static REQUEST_PRIORITY_LOW_POWER: number;
    static REQUEST_PRIORITY_BALANCED_POWER_ACCURACY: number;
    static REQUEST_PRIORITY_HIGH_ACCURACY: number;
    static SUCCESS_SETTINGS_SATISFIED: number;
    static SUCCESS_USER_AGREED: number;
    static ERROR_ALREADY_REQUESTING: number;
    static ERROR_INVALID_ACTION: number;
    static ERROR_INVALID_ACCURACY: number;
    static ERROR_EXCEPTION: number;
    static ERROR_CANNOT_CHANGE_ACCURACY: number;
    static ERROR_USER_DISAGREED: number;
    static ERROR_GOOGLE_API_CONNECTION_FAILED: number;
}
