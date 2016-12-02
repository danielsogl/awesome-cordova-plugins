import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * @name EstimoteBeacons
 *
 * @description
 * This plugin enables communication between a phone and Estimote Beacons peripherals.
 *
 */
@Plugin({
  pluginName: 'EstimoteBeacons',
  plugin: 'cordova-plugin-estimote',
  pluginRef: 'estimote.beacons',
  repo: 'https://github.com/evothings/phonegap-estimotebeacons',
  platforms: ['iOS', 'Android']
})
export class EstimoteBeacons {

  /** Proximity value */
  static ProximityUnknown = 0;

  /** Proximity value */
  static ProximityImmediate = 1;

  /** Proximity value */
  static ProximityNear = 2;

  /** Proximity value */
  static ProximityFar = 3;

  /** Beacon colour */
  static BeaconColorUnknown = 0;

  /** Beacon colour */
  static BeaconColorMintCocktail = 1;

  /** Beacon colour */
  static BeaconColorIcyMarshmallow = 2;

  /** Beacon colour */
  static BeaconColorBlueberryPie = 3;
  /**
   * Beacon colour.
   */
  static BeaconColorSweetBeetroot = 4;

  /** Beacon colour */
  static BeaconColorCandyFloss = 5;

  /** Beacon colour */
  static BeaconColorLemonTart = 6;

  /** Beacon colour */
  static BeaconColorVanillaJello = 7;

  /** Beacon colour */
  static BeaconColorLiquoriceSwirl = 8;

  /** Beacon colour */
  static BeaconColorWhite = 9;

  /** Beacon colour */
  static BeaconColorTransparent = 10;

  /** Region state */
  static RegionStateUnknown = 'unknown';

  /** Region state */
  static RegionStateOutside = 'outside';

  /** Region state */
  static RegionStateInside = 'inside';

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
  @Cordova()
  static requestWhenInUseAuthorization(): Promise<any> { return; }

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
  @Cordova()
  static requestAlwaysAuthorization(): Promise<any> { return; }

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
  @Cordova()
  static authorizationStatus(): Promise<any> { return; }

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
  @Cordova({
    clearFunction: 'stopAdvertisingAsBeacon'
  })
  static startAdvertisingAsBeacon(uuid: string, major: number, minor: number, regionId: string): Promise<any> { return; }

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
  @Cordova()
  static stopAdvertisingAsBeacon(): Promise<any> { return; }

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
  @Cordova()
  static enableAnalytics(enable: boolean): Promise<any> { return; }

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
  @Cordova()
  static isAnalyticsEnabled(): Promise<any> { return; }

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
  @Cordova()
  static isAuthorized(): Promise<any> { return; }

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
  @Cordova()
  static setupAppIDAndAppToken(appID: string, appToken: string): Promise<any> { return; }

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
  @Cordova({
    observable: true,
    clearFunction: 'stopEstimoteBeaconDiscovery'
  })
  static startEstimoteBeaconDiscovery(): Observable<any> { return; }

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
  @Cordova()
  static stopEstimoteBeaconDiscovery(): Promise<any> { return; }

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
  @Cordova({
    observable: true,
    clearFunction: 'stopRangingBeaconsInRegion',
    clearWithArgs: true
  })
  static startRangingBeaconsInRegion(region: EstimoteBeaconRegion): Observable<any> { return; }

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
  @Cordova()
  static stopRangingBeaconsInRegion(region: EstimoteBeaconRegion): Promise<any> { return; }

  /**
   * Start ranging secure beacons. Available on iOS.
   * This function has the same parameters/behaviour as
   * {@link EstimoteBeacons.startRangingBeaconsInRegion}.
   * To use secure beacons set the App ID and App Token using
   * {@link EstimoteBeacons.setupAppIDAndAppToken}.
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopRangingSecureBeaconsInRegion',
    clearWithArgs: true
  })
  static startRangingSecureBeaconsInRegion(region: EstimoteBeaconRegion): Observable<any> { return; }

  /**
   * Stop ranging secure beacons. Available on iOS.
   * This function has the same parameters/behaviour as
   * {@link EstimoteBeacons.stopRangingBeaconsInRegion}.
   * @returns {Promise<any>}
   */
  @Cordova()
  static stopRangingSecureBeaconsInRegion(region: EstimoteBeaconRegion): Promise<any> { return; }

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
   * for further details (optional, defaults to false, iOS only).
   * @returns {Observable<any>} Returns an Observable that notifies of each region state discovered.
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopMonitoringForRegion',
    clearWithArgs: true,
    successIndex: 1,
    errorIndex: 2
  })
  static startMonitoringForRegion(region: EstimoteBeaconRegion, notifyEntryStateOnDisplay: boolean): Observable<any> { return; }

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
  @Cordova()
  static stopMonitoringForRegion(region: EstimoteBeaconRegion): Promise<any> { return; }

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
  @Cordova({
    observable: true,
    clearFunction: 'stopSecureMonitoringForRegion',
    clearWithArgs: true,
    successIndex: 1,
    errorIndex: 2
  })
  static startSecureMonitoringForRegion(region: EstimoteBeaconRegion, notifyEntryStateOnDisplay: boolean): Observable<any> { return; }


  /**
  * Stop monitoring secure beacons. Available on iOS.
  * This function has the same parameters/behaviour as
  * {@link EstimoteBeacons.stopMonitoringForRegion}.
  * @param region {EstimoteBeaconRegion} Region
  * @returns {Promise<any>}
  */
  @Cordova()
  static stopSecureMonitoringForRegion(region: EstimoteBeaconRegion): Promise<any> { return; }

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
  @Cordova()
  static connectToBeacon(beacon: any): Promise<any> { return; }

  /**
   * Disconnect from connected Estimote Beacon. Available on Android.
   *
   * @usage
   * ```
   * EstimoteBeacons.disconnectConnectedBeacon();
   * ```
   * @returns {Promise<any>}
   */
  @Cordova()
  static disconnectConnectedBeacon(): Promise<any> { return; }

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
  @Cordova()
  static writeConnectedProximityUUID(uuid: any): Promise<any> { return; }

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
  @Cordova()
  static writeConnectedMajor(major: number): Promise<any> { return; }

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
  @Cordova()
  static writeConnectedMinor(minor: number): Promise<any> { return; }

}

export interface EstimoteBeaconRegion {
  state?: string;
  major: number;
  minor: number;
  identifier?: string;
  uuid: string;
}
