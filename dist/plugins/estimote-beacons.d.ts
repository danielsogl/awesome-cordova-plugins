import { Observable } from 'rxjs/Observable';
/**
 * @name EstimoteBeacons
 *
 * @description
 * This plugin enables communication between a phone and Estimote Beacons peripherals.
 *
 */
export declare class EstimoteBeacons {
    /** Proximity value */
    static ProximityUnknown: number;
    /** Proximity value */
    static ProximityImmediate: number;
    /** Proximity value */
    static ProximityNear: number;
    /** Proximity value */
    static ProximityFar: number;
    /** Beacon colour */
    static BeaconColorUnknown: number;
    /** Beacon colour */
    static BeaconColorMintCocktail: number;
    /** Beacon colour */
    static BeaconColorIcyMarshmallow: number;
    /** Beacon colour */
    static BeaconColorBlueberryPie: number;
    /**
     * Beacon colour.
     */
    static BeaconColorSweetBeetroot: number;
    /** Beacon colour */
    static BeaconColorCandyFloss: number;
    /** Beacon colour */
    static BeaconColorLemonTart: number;
    /** Beacon colour */
    static BeaconColorVanillaJello: number;
    /** Beacon colour */
    static BeaconColorLiquoriceSwirl: number;
    /** Beacon colour */
    static BeaconColorWhite: number;
    /** Beacon colour */
    static BeaconColorTransparent: number;
    /** Region state */
    static RegionStateUnknown: string;
    /** Region state */
    static RegionStateOutside: string;
    /** Region state */
    static RegionStateInside: string;
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
    static requestWhenInUseAuthorization(): Promise<any>;
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
    static requestAlwaysAuthorization(): Promise<any>;
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
    static authorizationStatus(): Promise<any>;
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
    static startAdvertisingAsBeacon(uuid: string, major: number, minor: number, regionId: string): Promise<any>;
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
    static stopAdvertisingAsBeacon(): Promise<any>;
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
    static enableAnalytics(enable: boolean): Promise<any>;
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
    static isAnalyticsEnabled(): Promise<any>;
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
    static isAuthorized(): Promise<any>;
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
    static setupAppIDAndAppToken(appID: string, appToken: string): Promise<any>;
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
    static startEstimoteBeaconDiscovery(): Observable<any>;
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
    static stopEstimoteBeaconDiscovery(): Promise<any>;
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
    static startRangingBeaconsInRegion(region: BeaconRegion): Observable<any>;
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
    static stopRangingBeaconsInRegion(region: BeaconRegion): Promise<any>;
    /**
     * Start ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.startRangingBeaconsInRegion}.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     */
    static startRangingSecureBeaconsInRegion(region: BeaconRegion): Observable<any>;
    /**
     * Stop ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.stopRangingBeaconsInRegion}.
     */
    static stopRangingSecureBeaconsInRegion(region: BeaconRegion): Promise<any>;
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
    static startMonitoringForRegion(region: BeaconRegion, notifyEntryStateOnDisplay: boolean): Observable<any>;
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
    static stopMonitoringForRegion(region: BeaconRegion): Promise<any>;
    /**
     * Start monitoring secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * EstimoteBeacons.startMonitoringForRegion.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     * @see {@link EstimoteBeacons.startMonitoringForRegion}
     */
    static startSecureMonitoringForRegion(region: BeaconRegion, notifyEntryStateOnDisplay: boolean): Observable<any>;
    /**
    * Stop monitoring secure beacons. Available on iOS.
    * This function has the same parameters/behaviour as
    * {@link EstimoteBeacons.stopMonitoringForRegion}.
    */
    static stopSecureMonitoringForRegion(region: BeaconRegion): Promise<any>;
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
    static connectToBeacon(beacon: any): Promise<any>;
    /**
     * Disconnect from connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * EstimoteBeacons.disconnectConnectedBeacon();
     * ```
     * @return returns a Promise.
     */
    static disconnectConnectedBeacon(): Promise<any>;
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
    static writeConnectedProximityUUID(uuid: any): Promise<any>;
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
    static writeConnectedMajor(major: number): Promise<any>;
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
    static writeConnectedMinor(minor: number): Promise<any>;
}
export interface BeaconRegion {
    state?: string;
    major: number;
    minor: number;
    identifier?: string;
    uuid: string;
}
