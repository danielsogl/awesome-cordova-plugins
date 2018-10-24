import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

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
@Plugin({
  pluginName: 'EstimoteBeacons',
  plugin: 'cordova-plugin-estimote',
  pluginRef: 'estimote.beacons',
  repo: 'https://github.com/evothings/phonegap-estimotebeacons',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class EstimoteBeacons extends IonicNativePlugin {
  /** Proximity value */
  ProximityUnknown = 0;

  /** Proximity value */
  ProximityImmediate = 1;

  /** Proximity value */
  ProximityNear = 2;

  /** Proximity value */
  ProximityFar = 3;

  /** Beacon colour */
  BeaconColorUnknown = 0;

  /** Beacon colour */
  BeaconColorMintCocktail = 1;

  /** Beacon colour */
  BeaconColorIcyMarshmallow = 2;

  /** Beacon colour */
  BeaconColorBlueberryPie = 3;

  /**
   * Beacon colour.
   */
  BeaconColorSweetBeetroot = 4;

  /** Beacon colour */
  BeaconColorCandyFloss = 5;

  /** Beacon colour */
  BeaconColorLemonTart = 6;

  /** Beacon colour */
  BeaconColorVanillaJello = 7;

  /** Beacon colour */
  BeaconColorLiquoriceSwirl = 8;

  /** Beacon colour */
  BeaconColorWhite = 9;

  /** Beacon colour */
  BeaconColorTransparent = 10;

  /** Region state */
  RegionStateUnknown = 'unknown';

  /** Region state */
  RegionStateOutside = 'outside';

  /** Region state */
  RegionStateInside = 'inside';

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
  requestWhenInUseAuthorization(): Promise<any> {
    return;
  }

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
  requestAlwaysAuthorization(): Promise<any> {
    return;
  }

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
  authorizationStatus(): Promise<any> {
    return;
  }

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
   * @param {string} uuid UUID string the beacon should advertise (mandatory).
   * @param {number} major Major value to advertise (mandatory).
   * @param {number} minor Minor value to advertise (mandatory).
   * @param {string} regionId Identifier of the region used to advertise (mandatory).
   * @returns {Promise<any>}
   */
  @Cordova({
    clearFunction: 'stopAdvertisingAsBeacon'
  })
  startAdvertisingAsBeacon(
    uuid: string,
    major: number,
    minor: number,
    regionId: string
  ): Promise<any> {
    return;
  }

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
  stopAdvertisingAsBeacon(): Promise<any> {
    return;
  }

  /**
   * Enable analytics.
   *
   * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
   *
   * @usage
   * ```
   * EstimoteBeacons.enableAnalytics(true).then(() => { console.log('Analytics enabled'); });
   * ```
   * @param {number} enable Boolean value to turn analytics on or off (mandatory).
   * @returns {Promise<any>}
   */
  @Cordova()
  enableAnalytics(enable: boolean): Promise<any> {
    return;
  }

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
  isAnalyticsEnabled(): Promise<any> {
    return;
  }

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
  isAuthorized(): Promise<any> {
    return;
  }

  /**
   * Set App ID and App Token.
   *
   * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
   *
   * @usage
   * ```
   * EstimoteBeacons.setupAppIDAndAppToken('MyAppID', 'MyAppToken').then(() => { console.log('AppID and AppToken configured!'); });
   * ```
   * @param {string} appID The App ID (mandatory).
   * @param {string} appToken The App Token (mandatory).
   * @returns {Promise<any>}
   */
  @Cordova()
  setupAppIDAndAppToken(appID: string, appToken: string): Promise<any> {
    return;
  }

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
  startEstimoteBeaconDiscovery(): Observable<any> {
    return;
  }

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
  stopEstimoteBeaconDiscovery(): Promise<any> {
    return;
  }

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
   * @param {EstimoteBeaconRegion} region Dictionary with region properties (mandatory).
   * @returns {Observable<any>} Returns an Observable that notifies of each beacon discovered.
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopRangingBeaconsInRegion',
    clearWithArgs: true
  })
  startRangingBeaconsInRegion(region: EstimoteBeaconRegion): Observable<any> {
    return;
  }

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
   * @param {EstimoteBeaconRegion} region Dictionary with region properties (mandatory).
   * @returns {Promise<any>}
   */
  @Cordova()
  stopRangingBeaconsInRegion(region: EstimoteBeaconRegion): Promise<any> {
    return;
  }

  /**
   * Start ranging secure beacons. Available on iOS.
   * This function has the same parameters/behavior as
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
  startRangingSecureBeaconsInRegion(
    region: EstimoteBeaconRegion
  ): Observable<any> {
    return;
  }

  /**
   * Stop ranging secure beacons. Available on iOS.
   * This function has the same parameters/behavior as
   * {@link EstimoteBeacons.stopRangingBeaconsInRegion}.
   * @returns {Promise<any>}
   */
  @Cordova()
  stopRangingSecureBeaconsInRegion(region: EstimoteBeaconRegion): Promise<any> {
    return;
  }

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
   * @param {EstimoteBeaconRegion} region Dictionary with region properties (mandatory).
   * @param {boolean} [notifyEntryStateOnDisplay] Set to true to detect if you
   * are inside a region when the user turns display on, see
   * {@link https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS documentation}
   * for further details (iOS only).
   * @returns {Observable<any>} Returns an Observable that notifies of each region state discovered.
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopMonitoringForRegion',
    clearWithArgs: true,
    successIndex: 1,
    errorIndex: 2
  })
  startMonitoringForRegion(
    region: EstimoteBeaconRegion,
    notifyEntryStateOnDisplay: boolean
  ): Observable<any> {
    return;
  }

  /**
   * Stop monitoring beacons. Available on iOS and Android.
   *
   * @usage
   * ```
   * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
   * EstimoteBeacons.stopMonitoringForRegion(region).then(() => { console.log('monitoring is stopped'); });
   * ```
   * @param {EstimoteBeaconRegion} region Dictionary with region properties (mandatory).
   * @returns {Promise<any>}
   */
  @Cordova()
  stopMonitoringForRegion(region: EstimoteBeaconRegion): Promise<any> {
    return;
  }

  /**
   * Start monitoring secure beacons. Available on iOS.
   * This function has the same parameters/behavior as
   * EstimoteBeacons.startMonitoringForRegion.
   * To use secure beacons set the App ID and App Token using
   * {@link EstimoteBeacons.setupAppIDAndAppToken}.
   * @see {@link EstimoteBeacons.startMonitoringForRegion}
   * @param {EstimoteBeaconRegion} region Region
   * @param {boolean} notifyEntryStateOnDisplay
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopSecureMonitoringForRegion',
    clearWithArgs: true,
    successIndex: 1,
    errorIndex: 2
  })
  startSecureMonitoringForRegion(
    region: EstimoteBeaconRegion,
    notifyEntryStateOnDisplay: boolean
  ): Observable<any> {
    return;
  }

  /**
   * Stop monitoring secure beacons. Available on iOS.
   * This function has the same parameters/behavior as
   * {@link EstimoteBeacons.stopMonitoringForRegion}.
   * @param {EstimoteBeaconRegion} region Region
   * @returns {Promise<any>}
   */
  @Cordova()
  stopSecureMonitoringForRegion(region: EstimoteBeaconRegion): Promise<any> {
    return;
  }

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
   * @param {Beacon} beacon Beacon to connect to.
   * @returns {Promise<any>}
   */
  @Cordova()
  connectToBeacon(beacon: any): Promise<any> {
    return;
  }

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
  disconnectConnectedBeacon(): Promise<any> {
    return;
  }

  /**
   * Write proximity UUID to connected Estimote Beacon. Available on Android.
   *
   * @usage
   * ```
   * // Example that writes constant ESTIMOTE_PROXIMITY_UUID
   * EstimoteBeacons.writeConnectedProximityUUID(ESTIMOTE_PROXIMITY_UUID);
   *
   * @param {string} uuid String to write as new UUID
   * @returns {Promise<any>}
   */
  @Cordova()
  writeConnectedProximityUUID(uuid: any): Promise<any> {
    return;
  }

  /**
   * Write major to connected Estimote Beacon. Available on Android.
   *
   * @usage
   * ```
   * // Example that writes 1
   * EstimoteBeacons.writeConnectedMajor(1);
   *
   * @param {number} major number to write as new major
   * @returns {Promise<any>}
   */
  @Cordova()
  writeConnectedMajor(major: number): Promise<any> {
    return;
  }

  /**
   * Write minor to connected Estimote Beacon. Available on Android.
   *
   * @usage
   * ```
   * // Example that writes 1
   * EstimoteBeacons.writeConnectedMinor(1);
   *
   * @param {number} minor number to write as new minor
   * @returns {Promise<any>}
   */
  @Cordova()
  writeConnectedMinor(minor: number): Promise<any> {
    return;
  }
}
