"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
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
var LocationAccuracy = (function () {
    function LocationAccuracy() {
    }
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    LocationAccuracy.canRequest = function () { return; };
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    LocationAccuracy.isRequesting = function () { return; };
    /**
     * Requests accurate location
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    LocationAccuracy.request = function (accuracy) { return; };
    LocationAccuracy.REQUEST_PRIORITY_NO_POWER = 0;
    LocationAccuracy.REQUEST_PRIORITY_LOW_POWER = 1;
    LocationAccuracy.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
    LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
    LocationAccuracy.SUCCESS_SETTINGS_SATISFIED = 0;
    LocationAccuracy.SUCCESS_USER_AGREED = 1;
    LocationAccuracy.ERROR_ALREADY_REQUESTING = -1;
    LocationAccuracy.ERROR_INVALID_ACTION = 0;
    LocationAccuracy.ERROR_INVALID_ACCURACY = 1;
    LocationAccuracy.ERROR_EXCEPTION = 1;
    LocationAccuracy.ERROR_CANNOT_CHANGE_ACCURACY = 3;
    LocationAccuracy.ERROR_USER_DISAGREED = 4;
    LocationAccuracy.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
    __decorate([
        plugin_1.Cordova()
    ], LocationAccuracy, "canRequest", null);
    __decorate([
        plugin_1.Cordova()
    ], LocationAccuracy, "isRequesting", null);
    __decorate([
        plugin_1.Cordova({ callbackOrder: 'reverse' })
    ], LocationAccuracy, "request", null);
    LocationAccuracy = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-request-location-accuracy',
            pluginRef: 'cordova.plugins.locationAccuracy',
            repo: 'https://github.com/dpa99c/cordova-plugin-request-location-accuracy'
        })
    ], LocationAccuracy);
    return LocationAccuracy;
}());
exports.LocationAccuracy = LocationAccuracy;
//# sourceMappingURL=location-accuracy.js.map