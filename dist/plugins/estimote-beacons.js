"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name EstimoteBeacons
 *
 * @description
 * This plugin enables communication between a phone and Estimote Beacons peripherals.
 *
 */
var EstimoteBeacons = (function () {
    function EstimoteBeacons() {
    }
    /**
     * Ask the user for permission to use location services
     * while the app is in the foreground.
     * You need to call this function or requestAlwaysAuthorization
     * on iOS 8+.
     * Does nothing on other platforms.
     *
     * @usage
     * ```
     * EstimoteBeacons.requestWhenInUseAuthorization().then(
     *   () => { console.log('on success'); },
     *   () => { console.log('on error'); }
     * );
     * ```
     *
     * @see {@link https://community.estimote.com/hc/en-us/articles/203393036-Estimote-SDK-and-iOS-8-Location-Services|Estimote SDK and iOS 8 Location Services}
     * @return Returns a Promise.
     */
    EstimoteBeacons.requestWhenInUseAuthorization = function () { return; };
    /**
     * Ask the user for permission to use location services
     * whenever the app is running.
     * You need to call this function or requestWhenInUseAuthorization
     * on iOS 8+.
     * Does nothing on other platforms.
     *
     * @usage
     * ```
     * EstimoteBeacons.requestAlwaysAuthorization().then(
     *   () => { console.log('on success'); },
     *   () => { console.log('on error'); }
     * );
     * ```
     *
     * @see {@link https://community.estimote.com/hc/en-us/articles/203393036-Estimote-SDK-and-iOS-8-Location-Services|Estimote SDK and iOS 8 Location Services}
     * @return Returns a Promise.
     */
    EstimoteBeacons.requestAlwaysAuthorization = function () { return; };
    /**
     * Get the current location authorization status.
     * Implemented on iOS 8+.
     * Does nothing on other platforms.
     *
     * @usage
     * ```
     * EstimoteBeacons.authorizationStatus().then(
     *   (result) => { console.log('Location authorization status: ' + result); },
     *   (errorMessage) => { console.log('Error: ' + errorMessage); }
     * );
     * ```
     *
     * @see {@link https://community.estimote.com/hc/en-us/articles/203393036-Estimote-SDK-and-iOS-8-Location-Services|Estimote SDK and iOS 8 Location Services}
     * @return Returns a Promise.
     */
    EstimoteBeacons.authorizationStatus = function () { return; };
    /**
     * Start advertising as a beacon.
     *
     * @usage
     * ```
     * EstimoteBeacons.startAdvertisingAsBeacon('B9407F30-F5F8-466E-AFF9-25556B57FE6D', 1, 1, 'MyRegion')
     *    .then(() => { console.log('Beacon started'); });
     * setTimeout(() => {
     *   EstimoteBeacons.stopAdvertisingAsBeacon().then((result) => { console.log('Beacon stopped'); });
     * }, 5000);
     * ```
     * @param uuid {string} UUID string the beacon should advertise (mandatory).
     * @param major {number} Major value to advertise (mandatory).
     * @param minor {number} Minor value to advertise (mandatory).
     * @param regionId {string} Identifier of the region used to advertise (mandatory).
     * @return Returns a Promise.
     */
    EstimoteBeacons.startAdvertisingAsBeacon = function (uuid, major, minor, regionId) { return; };
    /**
     * Stop advertising as a beacon.
     *
     * @usage
     * ```
     * EstimoteBeacons.startAdvertisingAsBeacon('B9407F30-F5F8-466E-AFF9-25556B57FE6D', 1, 1, 'MyRegion')
     *    .then(() => { console.log('Beacon started'); });
     * setTimeout(() => {
     *   EstimoteBeacons.stopAdvertisingAsBeacon().then((result) => { console.log('Beacon stopped'); });
     * }, 5000);
     * ```
     * @return Returns a Promise.
     */
    EstimoteBeacons.stopAdvertisingAsBeacon = function () { return; };
    /**
     * Enable analytics.
     *
     * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.enableAnalytics(true).then(() => { console.log('Analytics enabled'); });
     * ```
     * @param enable {number} Boolean value to turn analytics on or off (mandatory).
     * @return Returns a Promise.
     */
    EstimoteBeacons.enableAnalytics = function (enable) { return; };
    /**
    * Test if analytics is enabled.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.isAnalyticsEnabled().then((enabled) => { console.log('Analytics enabled: ' + enabled); });
     * ```
     * @return Returns a Promise.
     */
    EstimoteBeacons.isAnalyticsEnabled = function () { return; };
    /**
    * Test if App ID and App Token is set.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.isAuthorized().then((isAuthorized) => { console.log('App ID and App Token is set: ' + isAuthorized); });
     * ```
     * @return Returns a Promise.
     */
    EstimoteBeacons.isAuthorized = function () { return; };
    /**
    * Set App ID and App Token.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.setupAppIDAndAppToken('MyAppID', 'MyAppToken').then(() => { console.log('AppID and AppToken configured!'); });
     * ```
     * @param appID {string} The App ID (mandatory).
     * @param appToken {string} The App Token (mandatory).
     * @return Returns a Promise.
     */
    EstimoteBeacons.setupAppIDAndAppToken = function (appID, appToken) { return; };
    /**
     * Start scanning for all nearby beacons using CoreBluetooth (no region object is used).
     * Available on iOS.
     *
     * @usage
     * ```
     * EstimoteBeacons.startEstimoteBeaconDiscovery().subscribe(beacons => {
     *   console.log(JSON.stringify(beacons));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopEstimoteBeaconDiscovery().then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @return Returns an Observable that notifies of each beacon discovered.
     */
    EstimoteBeacons.startEstimoteBeaconDiscovery = function () { return; };
    /**
     * Stop CoreBluetooth scan. Available on iOS.
     *
     * @usage
     * ```
     * EstimoteBeacons.startEstimoteBeaconDiscovery().subscribe(beacons => {
     *   console.log(JSON.stringify(beacons));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopEstimoteBeaconDiscovery().then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @return returns a Promise.
     */
    EstimoteBeacons.stopEstimoteBeaconDiscovery = function () { return; };
    /**
     * Start ranging beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: BeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startRangingBeaconsInRegion(region).subscribe(info => {
     *   console.log(JSON.stringify(info));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopRangingBeaconsInRegion(region).then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @param region {BeaconRegion} Dictionary with region properties (mandatory).
     * @return Returns an Observable that notifies of each beacon discovered.
     */
    EstimoteBeacons.startRangingBeaconsInRegion = function (region) { return; };
    /**
     * Stop ranging beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: BeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startRangingBeaconsInRegion(region).subscribe(info => {
     *   console.log(JSON.stringify(info));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopRangingBeaconsInRegion(region).then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @param region {BeaconRegion} Dictionary with region properties (mandatory).
     * @return returns a Promise.
     */
    EstimoteBeacons.stopRangingBeaconsInRegion = function (region) { return; };
    /**
     * Start ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.startRangingBeaconsInRegion}.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     */
    EstimoteBeacons.startRangingSecureBeaconsInRegion = function (region) { return; };
    /**
     * Stop ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.stopRangingBeaconsInRegion}.
     */
    EstimoteBeacons.stopRangingSecureBeaconsInRegion = function (region) { return; };
    /**
     * Start monitoring beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: BeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startMonitoringForRegion(region).subscribe(state => {
     *   console.log('Region state: ' + JSON.stringify(state));
     * });
     * ```
     * @param region {BeaconRegion} Dictionary with region properties (mandatory).
     * @param [notifyEntryStateOnDisplay=false] {boolean} Set to true to detect if you
     * are inside a region when the user turns display on, see
     * {@link https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS documentation}
     * for further details (optional, defaults to false, iOS only).
     * @return Returns an Observable that notifies of each region state discovered.
     */
    EstimoteBeacons.startMonitoringForRegion = function (region, notifyEntryStateOnDisplay) { return; };
    /**
     * Stop monitoring beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: BeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.stopMonitoringForRegion(region).then(() => { console.log('monitoring is stopped'); });
     * ```
     * @param region {BeaconRegion} Dictionary with region properties (mandatory).
     * @return returns a Promise.
     */
    EstimoteBeacons.stopMonitoringForRegion = function (region) { return; };
    /**
     * Start monitoring secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * EstimoteBeacons.startMonitoringForRegion.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     * @see {@link EstimoteBeacons.startMonitoringForRegion}
     */
    EstimoteBeacons.startSecureMonitoringForRegion = function (region, notifyEntryStateOnDisplay) { return; };
    /**
    * Stop monitoring secure beacons. Available on iOS.
    * This function has the same parameters/behaviour as
    * {@link EstimoteBeacons.stopMonitoringForRegion}.
    */
    EstimoteBeacons.stopSecureMonitoringForRegion = function (region) { return; };
    /**
     * Connect to Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * EstimoteBeacons.connectToBeacon(FF:0F:F0:00:F0:00);
     * ```
     * ```
     * EstimoteBeacons.connectToBeacon({
     *     proximityUUID: '000000FF-F00F-0FF0-F000-000FF0F00000',
     *     major: 1,
     *     minor: 1
     *   });
     * ```
     * @param beacon {Beacon} Beacon to connect to.
     * @return returns a Promise.
     */
    EstimoteBeacons.connectToBeacon = function (beacon) { return; };
    /**
     * Disconnect from connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * EstimoteBeacons.disconnectConnectedBeacon();
     * ```
     * @return returns a Promise.
     */
    EstimoteBeacons.disconnectConnectedBeacon = function () { return; };
    /**
     * Write proximity UUID to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes constant ESTIMOTE_PROXIMITY_UUID
     * EstimoteBeacons.writeConnectedProximityUUID(ESTIMOTE_PROXIMITY_UUID);
     *
     * @param uuid {string} String to write as new UUID
     * @return returns a Promise.
     */
    EstimoteBeacons.writeConnectedProximityUUID = function (uuid) { return; };
    /**
     * Write major to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes 1
     * EstimoteBeacons.writeConnectedMajor(1);
     *
     * @param major {number} number to write as new major
     * @return returns a Promise.
     */
    EstimoteBeacons.writeConnectedMajor = function (major) { return; };
    /**
     * Write minor to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes 1
     * EstimoteBeacons.writeConnectedMinor(1);
     *
     * @param minor {number} number to write as new minor
     * @return returns a Promise.
     */
    EstimoteBeacons.writeConnectedMinor = function (minor) { return; };
    /** Proximity value */
    EstimoteBeacons.ProximityUnknown = 0;
    /** Proximity value */
    EstimoteBeacons.ProximityImmediate = 1;
    /** Proximity value */
    EstimoteBeacons.ProximityNear = 2;
    /** Proximity value */
    EstimoteBeacons.ProximityFar = 3;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorUnknown = 0;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorMintCocktail = 1;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorIcyMarshmallow = 2;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorBlueberryPie = 3;
    /**
     * Beacon colour.
     */
    EstimoteBeacons.BeaconColorSweetBeetroot = 4;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorCandyFloss = 5;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorLemonTart = 6;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorVanillaJello = 7;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorLiquoriceSwirl = 8;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorWhite = 9;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorTransparent = 10;
    /** Region state */
    EstimoteBeacons.RegionStateUnknown = 'unknown';
    /** Region state */
    EstimoteBeacons.RegionStateOutside = 'outside';
    /** Region state */
    EstimoteBeacons.RegionStateInside = 'inside';
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "requestWhenInUseAuthorization", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "requestAlwaysAuthorization", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "authorizationStatus", null);
    __decorate([
        plugin_1.Cordova({
            clearFunction: 'stopAdvertisingAsBeacon'
        })
    ], EstimoteBeacons, "startAdvertisingAsBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopAdvertisingAsBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "enableAnalytics", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "isAnalyticsEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "isAuthorized", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "setupAppIDAndAppToken", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopEstimoteBeaconDiscovery'
        })
    ], EstimoteBeacons, "startEstimoteBeaconDiscovery", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopEstimoteBeaconDiscovery", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopRangingBeaconsInRegion',
            clearWithArgs: true
        })
    ], EstimoteBeacons, "startRangingBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopRangingBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopRangingSecureBeaconsInRegion',
            clearWithArgs: true
        })
    ], EstimoteBeacons, "startRangingSecureBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopRangingSecureBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopMonitoringForRegion',
            clearWithArgs: true,
            successIndex: 1,
            errorIndex: 2
        })
    ], EstimoteBeacons, "startMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopSecureMonitoringForRegion',
            clearWithArgs: true,
            successIndex: 1,
            errorIndex: 2
        })
    ], EstimoteBeacons, "startSecureMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopSecureMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "connectToBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "disconnectConnectedBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "writeConnectedProximityUUID", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "writeConnectedMajor", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "writeConnectedMinor", null);
    EstimoteBeacons = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-estimote',
            pluginRef: 'estimote.beacons',
            repo: 'https://github.com/evothings/phonegap-estimotebeacons',
            platforms: ['iOS', 'Android']
        })
    ], EstimoteBeacons);
    return EstimoteBeacons;
}());
exports.EstimoteBeacons = EstimoteBeacons;
//# sourceMappingURL=estimote-beacons.js.map