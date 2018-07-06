import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface EstimoteBeaconRegion {
    state?: string;
    major: number;
    minor: number;
    identifier?: string;
    uuid: string;
}
/**
 * @name Estimote Beacons
 *
 * @description
 * This plugin enables communication between a phone and Estimote Beacons peripherals.
 *
 * @usage
 * ```typescript
 * import { EstimoteBeacons } from '@ionic-native/estimote-beacons';
 *
 * constructor(private eb: EstimoteBeacons) { }
 *
 * ...
 *
 * this.eb.requestAlwaysAuthorization();
 *
 * this.eb.enableAnalytics(true);
 *
 * ```
 *
 * @interfaces
 * EstimoteBeaconRegion
 */
export declare class EstimoteBeacons extends IonicNativePlugin {
    /** Proximity value */
    ProximityUnknown: number;
    /** Proximity value */
    ProximityImmediate: number;
    /** Proximity value */
    ProximityNear: number;
    /** Proximity value */
    ProximityFar: number;
    /** Beacon colour */
    BeaconColorUnknown: number;
    /** Beacon colour */
    BeaconColorMintCocktail: number;
    /** Beacon colour */
    BeaconColorIcyMarshmallow: number;
    /** Beacon colour */
    BeaconColorBlueberryPie: number;
    /**
     * Beacon colour.
     */
    BeaconColorSweetBeetroot: number;
    /** Beacon colour */
    BeaconColorCandyFloss: number;
    /** Beacon colour */
    BeaconColorLemonTart: number;
    /** Beacon colour */
    BeaconColorVanillaJello: number;
    /** Beacon colour */
    BeaconColorLiquoriceSwirl: number;
    /** Beacon colour */
    BeaconColorWhite: number;
    /** Beacon colour */
    BeaconColorTransparent: number;
    /** Region state */
    RegionStateUnknown: string;
    /** Region state */
    RegionStateOutside: string;
    /** Region state */
    RegionStateInside: string;
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
     * @returns {Promise<any>}
     */
    requestWhenInUseAuthorization(): Promise<any>;
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
     * @returns {Promise<any>}
     */
    requestAlwaysAuthorization(): Promise<any>;
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
     * @returns {Promise<any>}
     */
    authorizationStatus(): Promise<any>;
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
     * @returns {Promise<any>}
     */
    startAdvertisingAsBeacon(uuid: string, major: number, minor: number, regionId: string): Promise<any>;
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
     * @returns {Promise<any>}
     */
    stopAdvertisingAsBeacon(): Promise<any>;
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
     * @returns {Promise<any>}
     */
    enableAnalytics(enable: boolean): Promise<any>;
    /**
    * Test if analytics is enabled.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.isAnalyticsEnabled().then((enabled) => { console.log('Analytics enabled: ' + enabled); });
     * ```
     * @returns {Promise<any>}
     */
    isAnalyticsEnabled(): Promise<any>;
    /**
    * Test if App ID and App Token is set.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.isAuthorized().then((isAuthorized) => { console.log('App ID and App Token is set: ' + isAuthorized); });
     * ```
     * @returns {Promise<any>}
     */
    isAuthorized(): Promise<any>;
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
     * @returns {Promise<any>}
     */
    setupAppIDAndAppToken(appID: string, appToken: string): Promise<any>;
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
     * @returns {Observable<any>} Returns an Observable that notifies of each beacon discovered.
     */
    startEstimoteBeaconDiscovery(): Observable<any>;
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
     * @returns {Promise<any>}
     */
    stopEstimoteBeaconDiscovery(): Promise<any>;
    /**
     * Start ranging beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startRangingBeaconsInRegion(region).subscribe(info => {
     *   console.log(JSON.stringify(info));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopRangingBeaconsInRegion(region).then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @returns {Observable<any>} Returns an Observable that notifies of each beacon discovered.
     */
    startRangingBeaconsInRegion(region: EstimoteBeaconRegion): Observable<any>;
    /**
     * Stop ranging beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startRangingBeaconsInRegion(region).subscribe(info => {
     *   console.log(JSON.stringify(info));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopRangingBeaconsInRegion(region).then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @returns {Promise<any>}
     */
    stopRangingBeaconsInRegion(region: EstimoteBeaconRegion): Promise<any>;
    /**
     * Start ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.startRangingBeaconsInRegion}.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     * @returns {Observable<any>}
     */
    startRangingSecureBeaconsInRegion(region: EstimoteBeaconRegion): Observable<any>;
    /**
     * Stop ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.stopRangingBeaconsInRegion}.
     * @returns {Promise<any>}
     */
    stopRangingSecureBeaconsInRegion(region: EstimoteBeaconRegion): Promise<any>;
    /**
     * Start monitoring beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startMonitoringForRegion(region).subscribe(state => {
     *   console.log('Region state: ' + JSON.stringify(state));
     * });
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @param [notifyEntryStateOnDisplay=false] {boolean} Set to true to detect if you
     * are inside a region when the user turns display on, see
     * {@link https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS documentation}
     * for further details (iOS only).
     * @returns {Observable<any>} Returns an Observable that notifies of each region state discovered.
     */
    startMonitoringForRegion(region: EstimoteBeaconRegion, notifyEntryStateOnDisplay: boolean): Observable<any>;
    /**
     * Stop monitoring beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.stopMonitoringForRegion(region).then(() => { console.log('monitoring is stopped'); });
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @returns {Promise<any>}
     */
    stopMonitoringForRegion(region: EstimoteBeaconRegion): Promise<any>;
    /**
     * Start monitoring secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * EstimoteBeacons.startMonitoringForRegion.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     * @see {@link EstimoteBeacons.startMonitoringForRegion}
     * @param region {EstimoteBeaconRegion} Region
     * @param notifyEntryStateOnDisplay {boolean}
     * @returns {Observable<any>}
     */
    startSecureMonitoringForRegion(region: EstimoteBeaconRegion, notifyEntryStateOnDisplay: boolean): Observable<any>;
    /**
    * Stop monitoring secure beacons. Available on iOS.
    * This function has the same parameters/behaviour as
    * {@link EstimoteBeacons.stopMonitoringForRegion}.
    * @param region {EstimoteBeaconRegion} Region
    * @returns {Promise<any>}
    */
    stopSecureMonitoringForRegion(region: EstimoteBeaconRegion): Promise<any>;
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
     * @returns {Promise<any>}
     */
    connectToBeacon(beacon: any): Promise<any>;
    /**
     * Disconnect from connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * EstimoteBeacons.disconnectConnectedBeacon();
     * ```
     * @returns {Promise<any>}
     */
    disconnectConnectedBeacon(): Promise<any>;
    /**
     * Write proximity UUID to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes constant ESTIMOTE_PROXIMITY_UUID
     * EstimoteBeacons.writeConnectedProximityUUID(ESTIMOTE_PROXIMITY_UUID);
     *
     * @param uuid {string} String to write as new UUID
     * @returns {Promise<any>}
     */
    writeConnectedProximityUUID(uuid: any): Promise<any>;
    /**
     * Write major to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes 1
     * EstimoteBeacons.writeConnectedMajor(1);
     *
     * @param major {number} number to write as new major
     * @returns {Promise<any>}
     */
    writeConnectedMajor(major: number): Promise<any>;
    /**
     * Write minor to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes 1
     * EstimoteBeacons.writeConnectedMinor(1);
     *
     * @param minor {number} number to write as new minor
     * @returns {Promise<any>}
     */
    writeConnectedMinor(minor: number): Promise<any>;
}
