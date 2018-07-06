var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Background Geolocation
 * @description
 * This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
 * more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation
 *
 * @usage
 *
 * BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.
 *
 * ```typescript
 * import { BackgroundGeolocation, BackgroundGeolocationConfig } from '@ionic-native/background-geolocation';
 *
 * constructor(private backgroundGeolocation: BackgroundGeolocation) { }
 *
 * ...
 *
 * const config: BackgroundGeolocationConfig = {
 *             desiredAccuracy: 10,
 *             stationaryRadius: 20,
 *             distanceFilter: 30,
 *             debug: true, //  enable this hear sounds for background-geolocation life-cycle.
 *             stopOnTerminate: false, // enable this to clear background location settings when the app terminates
 *     };
 *
 * this.backgroundGeolocation.configure(config)
 *   .subscribe((location: BackgroundGeolocationResponse) => {
 *
 *     console.log(location);
 *
 *     // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
 *     // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
 *     // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
 *     this.backgroundGeolocation.finish(); // FOR IOS ONLY
 *
 *   });
 *
 * // start recording location
 * this.backgroundGeolocation.start();
 *
 * // If you wish to turn OFF background-tracking, call the #stop method.
 * this.backgroundGeolocation.stop();
 *
 * ```
 * @interfaces
 * BackgroundGeolocationResponse
 * BackgroundGeolocationConfig
 */
var BackgroundGeolocation = (function (_super) {
    __extends(BackgroundGeolocation, _super);
    function BackgroundGeolocation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
      
         * Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers
      
         *
         * Possible values:
         *  ANDROID_DISTANCE_FILTER_PROVIDER: 0,
      
         *  ANDROID_ACTIVITY_PROVIDER: 1
      
         *
         * @enum {number}
      
         */
        _this.LocationProvider = {
            ANDROID_DISTANCE_FILTER_PROVIDER: 0,
            ANDROID_ACTIVITY_PROVIDER: 1
        };
        /**
         * Desired accuracy in meters. Possible values [0, 10, 100, 1000].
      
         * The lower the number, the more power devoted to GeoLocation resulting in higher accuracy readings.
      
         * 1000 results in lowest power drain and least accurate readings.
      
         *
         * Possible values:
         *  HIGH: 0
      
         *  MEDIUM: 10
      
         *  LOW: 100
      
         *  PASSIVE: 1000
         *
         * enum {number}
      
         */
        _this.Accuracy = {
            HIGH: 0,
            MEDIUM: 10,
            LOW: 100,
            PASSIVE: 1000
        };
        /**
      
         * Used in the switchMode function
      
         *
         * Possible values:
         *  BACKGROUND: 0
         *  FOREGROUND: 1
      
         *
         * @enum {number}
      
         */
        _this.Mode = {
            BACKGROUND: 0,
            FOREGROUND: 1
        };
        return _this;
    }
    /**
     * Configure the plugin.
     *
     * @param options {BackgroundGeolocationConfig} options An object of type Config
     * @return {Observable<BackgroundGeolocationResponse>}
     */
    BackgroundGeolocation.prototype.configure = function (options) { return; };
    /**
     * Turn ON the background-geolocation system.
     * The user will be tracked whenever they suspend the app.
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.start = function () { return; };
    /**
     * Turn OFF background-tracking
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.stop = function () { return; };
    /**
     * Inform the native plugin that you're finished, the background-task may be completed
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.finish = function () { return; };
    /**
     * Force the plugin to enter "moving" or "stationary" state
     * @param isMoving {boolean}
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.changePace = function (isMoving) { return; };
    /**
     * Setup configuration
     * @param options {BackgroundGeolocationConfig}
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.setConfig = function (options) { return; };
    /**
     * Returns current stationaryLocation if available. null if not
     * @returns {Promise<Location>}
     */
    BackgroundGeolocation.prototype.getStationaryLocation = function () { return; };
    /**
     * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
     * your #success callback will be executed with #location param containing #radius of region
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.onStationary = function () { return; };
    /**
     * Check if location is enabled on the device
     * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
     */
    BackgroundGeolocation.prototype.isLocationEnabled = function () { return; };
    /**
     * Display app settings to change permissions
     */
    BackgroundGeolocation.prototype.showAppSettings = function () { };
    /**
     * Display device location settings
     */
    BackgroundGeolocation.prototype.showLocationSettings = function () { };
    /**
     * Method can be used to detect user changes in location services settings.
     * If user enable or disable location services then success callback will be executed.
     * In case or error (SettingNotFoundException) fail callback will be executed.
     * @returns {Promise<boolean>}
     */
    BackgroundGeolocation.prototype.watchLocationMode = function () { return; };
    /**
     * Stop watching for location mode changes.
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.stopWatchingLocationMode = function () { return; };
    /**
     * Method will return all stored locations.
     * Locations are stored when:
     *  - config.stopOnTerminate is false and main activity was killed
     *    by the system
     *  or
     *  - option.debug is true
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.getLocations = function () { return; };
    /**
  
     * Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.
  
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.getValidLocations = function () { return; };
    /**
     * Delete stored location by given locationId.
     * @param locationId {number}
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.deleteLocation = function (locationId) { return; };
    /**
     * Delete all stored locations.
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.deleteAllLocations = function () { return; };
    /**
     * Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
     * Calling switchMode you can override plugin behavior and force plugin to switch into other mode.
     *
     * In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
     * In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only.
  
     *
     * BackgroundGeolocation.Mode.FOREGROUND
     * BackgroundGeolocation.Mode.BACKGROUND
  
     **
     * @param modeId {number}
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.switchMode = function (modeId) { return; };
    /**
  
     * Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.
  
     * @see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information.
  
     *
     * @param limit {number} Limits the number of entries
  
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.prototype.getLogEntries = function (limit) { return; };
    return BackgroundGeolocation;
}(IonicNativePlugin));
BackgroundGeolocation.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BackgroundGeolocation.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse',
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], BackgroundGeolocation.prototype, "configure", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "start", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "stop", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "finish", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "changePace", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "setConfig", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "getStationaryLocation", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "onStationary", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "isLocationEnabled", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundGeolocation.prototype, "showAppSettings", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundGeolocation.prototype, "showLocationSettings", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "watchLocationMode", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "stopWatchingLocationMode", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "getLocations", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "getValidLocations", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "deleteLocation", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "deleteAllLocations", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "switchMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BackgroundGeolocation.prototype, "getLogEntries", null);
BackgroundGeolocation = __decorate([
    Plugin({
        pluginName: 'BackgroundGeolocation',
        plugin: 'cordova-plugin-mauron85-background-geolocation',
        pluginRef: 'backgroundGeolocation',
        repo: 'https://github.com/mauron85/cordova-plugin-background-geolocation',
        platforms: ['Android', 'iOS']
    })
], BackgroundGeolocation);
export { BackgroundGeolocation };
//# sourceMappingURL=index.js.map