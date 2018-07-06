import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface Beacon {
    /**
     * The physical device's identifier.
     */
    uuid: string;
    /**
     * The beacon's major identifier number.
     */
    major: number;
    /**
     * The beacon's minor identifier number.
     */
    minor: number;
    /**
     * The proximity of the beacon relative to the phone.
     *
     * Possible options are:
     * ProximityImmediate
     * ProximityNear
     * ProximityFar
     * ProximityUnknown
     */
    proximity: 'ProximityImmediate' | 'ProximityNear' | 'ProximityFar' | 'ProximityUnknown';
    /**
     * Transmission Power of the beacon. A constant emitted by the beacon which indicates what's the expected RSSI at a distance of 1 meter to the beacon.
     */
    tx: number;
    /**
     * Received Signal Strength Indicator. The strength of the beacon's signal when it reaches the device.
     *  RSSI ranges from aprox -26 (a few inches) to -100 (40-50 m distance).
     */
    rssi: number;
    /**
     * The accuracy of the ranging.
     */
    accuracy: number;
}
export interface BeaconRegion {
    /**
     * A unique identifier for this region.
     */
    identifier: string;
    /**
     * The the beacon identifier the device will "watch" for. Many beacons can share the same uuid.
     */
    uuid: string;
    /**
     * The beacon's major identifier number. Optional, of nothing is supplied
     * the plugin will treat it as a wildcard.
     */
    major?: number;
    /**
     * The beacon's minor identifier number. Optional, of nothing is supplied
     * the plugin will treat it as a wildcard.
     */
    minor?: number;
    /**
     * If set to true the device will scan for beacons and determine region state anytime
     * the device's screen is turned on or off. Useful for debugging.
     */
    notifyEntryStateOnDisplay?: boolean;
}
export interface CircularRegion {
    /**
     * A unique identifier for this region.
     */
    identifier: string;
    /**
     * The latitude of this region.
     */
    latitude: number;
    /**
     * The longitude of this region.
     */
    longitude: number;
    /**
     * The radius of the geofence for this region.
     */
    radius: number;
}
export declare type Region = BeaconRegion | CircularRegion;
export interface IBeaconPluginResult {
    /**
     * The name of the delegate function that produced the PluginResult object.
     */
    eventType: string;
    /**
     * The region that triggered the event.
     */
    region: Region;
    /**
     * An array of beacon objects
     */
    beacons: Beacon[];
    /**
     * The status of the location permission for iOS.
     */
    authorizationStatus: string;
    /**
     * The state of the phone in relation to the region. Inside/outside for example.
     */
    state: 'CLRegionStateInside' | 'CLRegionStateOutside';
    /**
     * Error message, used only with monitoringDidFailForRegionWithError delegate.
     */
    error: string;
}
export interface IBeaconDelegate {
    /**
     * An observable that publishes information about the location permission authorization status.
     *
     * @returns {Observable<string>} Returns a string.
     */
    didChangeAuthorizationStatus(): Observable<string>;
    /**
     * An Observable that publishes event data to it's subscribers
     * when the native layer is able to determine the device's state.
     *
     * This event is called when the phone begins starts monitoring,
     * when requestStateForRegion is called, etc.
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    didDetermineStateForRegion(): Observable<IBeaconPluginResult>;
    /**
     * An Observable that publishes event data to it's subscribers
     * when the phone enters a region that it was asked to monitor.
     *
     * If the user has given the app Always-Location permission, this function
     *  will be called even when the app is not running on iOS.
     * The app will run silently in the background for a small amount of time.
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    didEnterRegion(): Observable<IBeaconPluginResult>;
    /**
     * An Observable that publishes event data to it's subscribers
     * when the phone exits a region that it was asked to monitor.
     *
     * If the user has given the app Always-Location permission, this function
     *  will be called even when the app is not running on iOS.
     * The app will run silently in the background for a small amount of time.
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    didExitRegion(): Observable<IBeaconPluginResult>;
    /**
     * An Observable that publishes event data to it's subscribers
     *  each time that the device ranges beacons. Modern Android and iOS devices range
     * aproximately once per second.
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    didRangeBeaconsInRegion(): Observable<IBeaconPluginResult>;
    /**
     * An Observable that publishes event data to it's subscribers
     *  when the device begins monitoring a region.
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    didStartMonitoringForRegion(): Observable<IBeaconPluginResult>;
    /**
     * An Observable that publishes event data to it's subscribers
     *  when the device fails to monitor a region.
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    monitoringDidFailForRegionWithError(): Observable<IBeaconPluginResult>;
    /**
     * An Observable that publishes event data to it's subscribers
     *  when the device begins advertising as an iBeacon.
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    peripheralManagerDidStartAdvertising(): Observable<IBeaconPluginResult>;
    /**
     * An Observable that publishes event data to it's subscribers
     * when the state of the peripheral manager's state updates.
     *
     *
     * @returns {Observable<IBeaconPluginResult>} Returns a IBeaconPluginResult object with information about the event, region, and beacon(s).
     */
    peripheralManagerDidUpdateState(): Observable<IBeaconPluginResult>;
}
/**
 * @name IBeacon
 * @description
 * This plugin provides functions for working with iBeacons.
 *
 *  The plugin's API closely mimics the one exposed through the [CLLocationManager](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html) introduced in iOS 7.
 *
 * @usage
 *
 * ```typescript
 * import { IBeacon } from '@ionic-native/ibeacon';
 *
 * constructor(private ibeacon: IBeacon) { }
 *
 * ...
 *
 *
 * // Request permission to use location on iOS
 * this.ibeacon.requestAlwaysAuthorization();
 * // create a new delegate and register it with the native layer
 * let delegate = this.ibeacon.Delegate();
 *
 * // Subscribe to some of the delegate's event handlers
 * delegate.didRangeBeaconsInRegion()
 *   .subscribe(
 *     data => console.log('didRangeBeaconsInRegion: ', data),
 *     error => console.error();
 *   );
 * delegate.didStartMonitoringForRegion()
 *   .subscribe(
 *     data => console.log('didStartMonitoringForRegion: ', data),
 *     error => console.error();
 *   );
 * delegate.didEnterRegion()
 *   .subscribe(
 *     data => {
 *       console.log('didEnterRegion: ', data);
 *     }
 *   );
 *
 * let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon','F7826DA6-ASDF-ASDF-8024-BC5B71E0893E');
 *
 * this.ibeacon.startMonitoringForRegion(beaconRegion)
 *   .then(
 *     () => console.log('Native layer recieved the request to monitoring'),
 *     error => console.error('Native layer failed to begin monitoring: ', error)
 *   );
 * ```
 * @interfaces
 * Beacon
 * BeaconRegion
 * CircularRegion
 * IBeaconPluginResult
 * IBeaconDelegate
 *
 */
export declare class IBeacon extends IonicNativePlugin {
    /**
     * Instances of this class are delegates between the {@link LocationManager} and
     * the code that consumes the messages generated on in the native layer.
     *
     * @returns {IBeaconDelegate} An instance of the type {@type Delegate}.
     */
    Delegate(): IBeaconDelegate;
    /**
     * Creates a new BeaconRegion
     *
     * @param {String} identifier @see {CLRegion}
     * @param {String} uuid The proximity ID of the beacon being targeted.
     * This value must not be blank nor invalid as a UUID.
     * @param {Number} major The major value that you use to identify one or more beacons.
     * @param {Number} minor The minor value that you use to identify a specific beacon.
     * @param {BOOL} notifyEntryStateOnDisplay
     *
     * @returns {BeaconRegion} Returns the BeaconRegion that was created
     */
    BeaconRegion(identifer: string, uuid: string, major?: number, minor?: number, notifyEntryStateOnDisplay?: boolean): BeaconRegion;
    /**
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    getDelegate(): IBeaconDelegate;
    /**
     * @param {IBeaconDelegate} delegate An instance of a delegate to register with the native layer.
     *
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    setDelegate(delegate: IBeaconDelegate): IBeaconDelegate;
    /**
     * Signals the native layer that the client side is ready to consume messages.
     * Readiness here means that it has a {IBeaconDelegate} set by the consumer javascript
     * code.
     *
     * The {LocationManager.setDelegate()} will implicitly call this method as well,
     * therefore the only case when you have to call this manually is if you don't
     * wish to specify a {IBeaconDelegate} of yours.
     *
     * The purpose of this signaling mechanism is to make the events work when the
     * app is being woken up by the Operating System to give it a chance to handle
     * region monitoring events for example.
     *
     * If you don't set a {IBeaconDelegate} and don't call this method manually, an error
     * message get emitted in the native runtime and the DOM as well after a certain
     * period of time.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the request and started to send events.
     */
    onDomDelegateReady(): Promise<void>;
    /**
     * Determines if bluetooth is switched on, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether bluetooth is active.
     */
    isBluetoothEnabled(): Promise<boolean>;
    /**
     * Enables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<void>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    enableBluetooth(): Promise<void>;
    /**
     * Disables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<void>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    disableBluetooth(): Promise<void>;
    /**
     * Start monitoring the specified region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application,
     * it will be removed from monitoring. For circular regions, the region
     * monitoring service will prioritize
     * regions by their size, favoring smaller regions over larger regions.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<string>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    startMonitoringForRegion(region: BeaconRegion): Promise<string>;
    /**
     * Stop monitoring the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for monitoring
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    stopMonitoringForRegion(region: BeaconRegion): Promise<void>;
    /**
     * Request state the for specified region. When result is ready
     * didDetermineStateForRegion is triggered. This can be any region,
     * also those which is not currently monitored.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    requestStateForRegion(region: Region): Promise<void>;
    /**
     * Start ranging the specified beacon region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application, it will be removed from monitoring.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    startRangingBeaconsInRegion(region: BeaconRegion): Promise<void>;
    /**
     * Stop ranging the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for ranging
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    stopRangingBeaconsInRegion(region: BeaconRegion): Promise<void>;
    /**
     * Queries the native layer to determine the current authorization in effect.
     *
     * @returns {Promise<IBeaconPluginResult>} Returns a promise which is resolved with the
     * requested authorization status.
     */
    getAuthorizationStatus(): Promise<IBeaconPluginResult>;
    /**
     * For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
     * explicitly request permissions via methods like these:
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>
     *
     * If you are using this plugin on Android devices only, you will never have to use this, nor {@code requestAlwaysAuthorization}
     * @returns {Promise<void>} Returns a promise that is resolved when the request dialog is shown.
     */
    requestWhenInUseAuthorization(): Promise<void>;
    /**
     * See the documentation of {@code requestWhenInUseAuthorization} for further details.
     *
     * @returns {Promise<void>} Returns a promise which is resolved when the native layer
     * shows the request dialog.
     */
    requestAlwaysAuthorization(): Promise<void>;
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being monitored by the native layer.
     */
    getMonitoredRegions(): Promise<Region[]>;
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being ranged by the native layer.
     */
    getRangedRegions(): Promise<Region[]>;
    /**
     * Determines if ranging is available or not, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether ranging is available or not.
     */
    isRangingAvailable(): Promise<boolean>;
    /**
     * Determines if region type is supported or not, according to the native layer.
     *
     * @param {Region} region An instance of {Region} which will be checked
     * by the operating system.
     *
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether the region type is supported or not.
     */
    isMonitoringAvailableForClass(region: Region): Promise<boolean>;
    /**
     * Start advertising the specified region.
     *
     * If a region a different identifier is already being advertised for
     * this application, it will be replaced with the new identifier.
     *
     * This call will accept a valid beacon even when no BlueTooth is available,
     * and will start when BlueTooth is powered on. See {IBeaconDelegate.}
     *
     * @param {Region} region An instance of {Region} which will be advertised
     * by the operating system.
     * @param {Integer} measuredPower: Optional parameter, if left empty, the device will
     * use it's own default value.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the advertising request.
     */
    startAdvertising(region: Region, measuredPower?: number): Promise<void>;
    /**
     * Stop advertising as a beacon.
     *
     * This is done asynchronously and may not be immediately reflected in isAdvertising.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop advertising.
     */
    stopAdvertising(region: Region): Promise<void>;
    /**
     * Determines if advertising is available or not, according to the native layer.
     * @returns {Promise<void>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is available or not.
     */
    isAdvertisingAvailable(): Promise<boolean>;
    /**
     * Determines if advertising is currently active, according to the native layer.
     * @returns {Promise<void>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is active.
     */
    isAdvertising(): Promise<boolean>;
    /**
     * Disables debug logging in the native layer. Use this method if you want
     * to prevent this plugin from writing to the device logs.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    disableDebugLogs(): Promise<void>;
    /**
     * Enables the posting of debug notifications in the native layer. Use this method if you want
     * to allow the plugin the posting local notifications.
     * This can be very helpful when debugging how to apps behave when launched into the background.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to enabled.
     */
    enableDebugNotifications(): Promise<void>;
    /**
     * Disables the posting of debug notifications in the native layer. Use this method if you want
     * to prevent the plugin from posting local notifications.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to disabled.
     */
    disableDebugNotifications(): Promise<void>;
    /**
     * Enables debug logging in the native layer. Use this method if you want
     * a debug the inner workings of this plugin.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    enableDebugLogs(): Promise<void>;
    /**
     * Appends the provided [message] to the device logs.
     * Note: If debug logging is turned off, this won't do anything.
     *
     * @param {String} message The message to append to the device logs.
     *
     * @returns {Promise<void>} Returns a promise which is resolved with the log
     * message received by the native layer for appending. The returned message
     * is expected to be equivalent to the one provided in the original call.
     */
    appendToDeviceLog(message: string): Promise<void>;
}
