import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

declare var cordova: any;

export interface Beacon {
  uuid: string;
  major: string;
  minor: string;
  proximity: string;
  tx: number;
  rssi: number;
  accuracy: number;
}
export interface BeaconRegion {
  identifer: string;
  uuid: string;
  major?: number;
  minor?: number;
  notifyEntryStateOnDisplay?: boolean;
}
export interface CircularRegion {
  identifier: string;
  latitude: number;
  longitude: number;
  radius: number;
}
export type Region = BeaconRegion | CircularRegion;
export interface PluginResult {
  eventType: string;
  region: BeaconRegion;
  beacons: Beacon[];
  authorizationStatus: string;
  state: string;
}
export interface Delegate {
  didChangeAuthorizationStatus(): Observable<string>;
  didDetermineStateForRegion(): Observable<PluginResult>;
  didEnterRegion(): Observable<PluginResult>;
  didExitRegion(): Observable<PluginResult>;
  didRangeBeaconsInRegion(): Observable<PluginResult>;
  didStartMonitoringForRegion(): Observable<PluginResult>;
  monitoringDidFailForRegionWithError(): Observable<PluginResult>;
  peripheralManagerDidStartAdvertising(): Observable<PluginResult>;
  peripheralManagerDidUpdateState(): Observable<PluginResult>;
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
 * ```ts
 * import {IBeacon} from 'ionic-native';
 *
 *
 * // Request permission to use location on iOS
 * IBeacon.requestAlwaysAuthorization();
 * // create a new delegate and register it with the native layer
 * let delegate = IBeacon.Delegate();
 * 
 * // Subscribe to some of the delegate's event handlers
 * delegate.didRangeBeaconsInRegion()
 *   .subscribe(
 *     data => {console.log('didRangeBeaconsInRegion: ', data)},
 *     error => console.error
 *   );
 * delegate.didStartMonitoringForRegion()
 *   .subscribe(
 *     data => {console.log('didStartMonitoringForRegion: ', data)},
 *     error => console.error
 *   );
 * delegate.didEnterRegion()
 *   .subscribe(
 *     data => {
 *       console.log('didEnterRegion: ', data);
 *     }
 *   );
 * 
 * let beaconRegion = IBeacon.BeaconRegion('deskBeacon','F7826DA6-4FA2-4E98-8024-BC5B71E0893E');
 * 
 * IBeacon.startMonitoringForRegion(beaconRegion)
 *   .then(
 *     result => console.log('monitoring result: ', result),
 *     error => console.error('monitoring error: ', error)
 *   );
 * ```
 */
@Plugin({
    plugin: 'cordova-plugin-ibeacon',
    pluginRef: 'cordova.plugins.locationManager',
    repo: 'https://github.com/petermetz/cordova-plugin-ibeacon',
    platforms: ['Android', 'iOS']
})
export class IBeacon {


  /**
   * Instances of this class are delegates between the {@link LocationManager} and
   * the code that consumes the messages generated on in the native layer.
   * 
   * @example 
   * 
   * var delegate = new cordova.plugins.LocationManager.Delegate();
   *
   * delegate.didDetermineStateForRegion = function(region) {
   *      console.log('didDetermineState:forRegion: ' + JSON.stringify(region));
   * };
   *
   * delegate.didStartMonitoringForRegion = function (region) {
   *      console.log('didStartMonitoringForRegion: ' + JSON.stringify(region));
   * }
   * 
   * @returns {Delegate} An instance of the type {@type Delegate}.
   */
  static Delegate(): Delegate {
    let delegate = new cordova.plugins.locationManager.Delegate();

    delegate.didChangeAuthorizationStatus = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didChangeAuthorizationStatus = cb;
        }
      );
    };

    delegate.didDetermineStateForRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didDetermineStateForRegion = cb;
        }
      );
    };

    delegate.didEnterRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didEnterRegion = cb;
        }
      );
    };

    delegate.didExitRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didExitRegion = cb;
        }
      );
    };

    delegate.didRangeBeaconsInRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didRangeBeaconsInRegion = cb;
        }
      );
    };

    delegate.didStartMonitoringForRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didStartMonitoringForRegion = cb;
        }
      );
    };

    delegate.monitoringDidFailForRegionWithError = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.monitoringDidFailForRegionWithError = cb;
        }
      );
    };

    delegate.peripheralManagerDidStartAdvertising = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.peripheralManagerDidStartAdvertising = cb;
        }
      );
    };

    delegate.peripheralManagerDidUpdateState = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.peripheralManagerDidUpdateState = cb;
        }
      );
    };

    cordova.plugins.locationManager.setDelegate(delegate);
    return delegate;
  }

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
   * @return Returns the BeaconRegion that was created
   */
  static BeaconRegion(identifer: string, uuid: string, minor?: number, major?: number, notifyEntryStateOnDisplay?: boolean): BeaconRegion {
    return new cordova.plugins.locationManager.BeaconRegion(identifer, uuid, minor, major, notifyEntryStateOnDisplay);
  }

  /**
   * @return Returns the Delegate
   */
  @Cordova()
  static getDelegate(): Delegate { return; }

  /**
   * @param {Delegate} delegate An instance of a delegate to register with the native layer.
   * 
   * @return Returns the Delegate
   */
  @Cordova()
  static setDelegate(delegate: Delegate): Delegate { return; }

  /**
   * Signals the native layer that the client side is ready to consume messages.
   * Readiness here means that it has a {Delegate} set by the consumer javascript
   * code.
   * 
   * The {LocationManager.setDelegate()} will implicitly call this method as well,
   * therefore the only case when you have to call this manually is if you don't
   * wish to specify a {Delegate} of yours.
   * 
   * The purpose of this signaling mechanism is to make the events work when the
   * app is being woken up by the Operating System to give it a chance to handle
   * region monitoring events for example.
   * 
   * If you don't set a {Delegate} and don't call this method manually, an error
   * message get emitted in the native runtime and the DOM as well after a certain
   * period of time.
   *
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the request and started to send events.
   */
  @Cordova({sync: true})
  static onDomDelegateReady(): Promise<void> { return; }

  /**
   * Determines if bluetooth is switched on, according to the native layer.
   * @returns Returns a promise which is resolved with a {Boolean}
   * indicating whether bluetooth is active.
   */
  @Cordova({sync: true})
  static isBluetoothEnabled(): Promise<boolean> { return; }

  /**
   * Enables Bluetooth using the native Layer. (ANDROID ONLY)
   *
   * @returns Returns a promise which is resolved when Bluetooth
   * could be enabled. If not, the promise will be rejected with an error.
   */
  @Cordova({sync: true})
  static enableBluetooth(): Promise<void> { return; }

  /**
   * Disables Bluetooth using the native Layer. (ANDROID ONLY)
   *
   * @returns Returns a promise which is resolved when Bluetooth
   * could be enabled. If not, the promise will be rejected with an error.
   */
  @Cordova({sync: true})
  static disableBluetooth(): Promise<void> { return; }

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
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the dispatch of the monitoring request.
   */
  @Cordova({sync: true})
  static startMonitoringForRegion(region: BeaconRegion): Promise<string> { return; }

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
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the dispatch of the request to stop monitoring.
   */
  @Cordova({sync: true})
  static stopMonitoringForRegion(region: BeaconRegion): Promise<void> { return; }

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
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the dispatch of the request to stop monitoring.
   */
  @Cordova({sync: true})
  static requestStateForRegion(region: Region): Promise<void> { return; }


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
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the dispatch of the monitoring request.
   */
  @Cordova({sync: true})
  static startRangingBeaconsInRegion(region: BeaconRegion): Promise<void> { return; }

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
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the dispatch of the request to stop monitoring.
   */
  @Cordova({sync: true})
  static stopRangingBeaconsInRegion(region: BeaconRegion): Promise<void> { return; }

  /**
   * Queries the native layer to determine the current authorization in effect.
   * 
   * @returns Returns a promise which is resolved with the 
   * requested authorization status.
   */
  @Cordova({sync: true})
  static getAuthorizationStatus(): Promise<any> { return; }

  /**
   * For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
   * explicitly request permissions via methods like these:
   * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
   * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>
   *
   * If you are using this plugin on Android devices only, you will never have to use this, nor {@code requestAlwaysAuthorization}
   * @returns Returns a promise that is resolved when the request dialog is shown.
   */
  @Cordova({sync: true})
  static requestWhenInUseAuthorization(): Promise<void> { return; }


  /**
   * See the docuemntation of {@code requestWhenInUseAuthorization} for further details.
   *
   * @returns Returns a promise which is resolved when the native layer
   * shows the request dialog.
   */
  @Cordova({sync: true})
  static requestAlwaysAuthorization(): Promise<void> { return; }

  /** 
   * 
   * @returns Returns a promise which is resolved with an {Array}
   * of {Region} instances that are being monitored by the native layer.
   */
  @Cordova({sync: true})
  static getMonitoredRegions(): Promise<Region[]> { return; }

  /** 
   * 
   * @returns Returns a promise which is resolved with an {Array}
   * of {Region} instances that are being ranged by the native layer.
   */
  @Cordova({sync: true})
  static getRangedRegions(): Promise<Region[]> { return; }

  /**
   * Determines if ranging is available or not, according to the native layer.
   * @returns Returns a promise which is resolved with a {Boolean}
   * indicating whether ranging is available or not.
   */
  @Cordova({sync: true})
  static isRangingAvailable(): Promise<boolean> { return; }

  /**
   * Determines if region type is supported or not, according to the native layer.
   *
   * @param {Region} region An instance of {Region} which will be checked
   * by the operating system.
   *
   * @returns Returns a promise which is resolved with a {Boolean}
   * indicating whether the region type is supported or not.
   */
  @Cordova({sync: true})
  static isMonitoringAvailableForClass(region: Region): Promise<boolean> { return; }

  /**
   * Start advertising the specified region.
   *
   * If a region a different identifier is already being advertised for
   * this application, it will be replaced with the new identifier.
   *
   * This call will accept a valid beacon even when no BlueTooth is available,
   * and will start when BlueTooth is powered on. See {Delegate.}
   *
   * @param {Region} region An instance of {Region} which will be advertised
   * by the operating system.
   * @param {Integer} measuredPower: Optional parameter, if left empty, the device will
   * use it's own default value.
   *
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the dispatch of the advertising request.
   */
  @Cordova({sync: true})
  static startAdvertising(region: Region, measuredPower: number): Promise<void> { return; }

  /**
   * Stop advertising as a beacon.
   *
   * This is done asynchronously and may not be immediately reflected in isAdvertising.
   *
   * @return Returns a promise which is resolved as soon as the
   * native layer acknowledged the dispatch of the request to stop advertising.
   */
  @Cordova({sync: true})
  static stopAdvertising(region: Region): Promise<void> { return; }

  /**
   * Determines if advertising is available or not, according to the native layer.
   * @returns Returns a promise which is resolved with a {Boolean}
   * indicating whether advertising is available or not.
   */
  @Cordova({sync: true})
  static isAdvertisingAvailable(): Promise<boolean> { return; }

  /**
   * Determines if advertising is currently active, according to the native layer.
   * @returns Returns a promise which is resolved with a {Boolean}
   * indicating whether advertising is active.
   */
  @Cordova({sync: true})
  static isAdvertising(): Promise<boolean> { return; }

  /**
   * Disables debug logging in the native layer. Use this method if you want
   * to prevent this plugin from writing to the device logs.
   * 
   * @returns Returns a promise which is resolved as soon as the
   * native layer has set the logging level accordingly.
   */
  @Cordova({sync: true})
  static disableDebugLogs(): Promise<void> { return; }

  /**
   * Enables the posting of debug notifications in the native layer. Use this method if you want
   * to allow the plugin the posting local notifications.
   * This can be very helpful when debugging how to apps behave when launched into the background.
   *
   * @returns Returns a promise which is resolved as soon as the
   * native layer has set the flag to enabled.
   */
  @Cordova({sync: true})
  static enableDebugNotifications(): Promise<void> { return; }

  /**
   * Disables the posting of debug notifications in the native layer. Use this method if you want
   * to prevent the plugin from posting local notifications.
   *
   * @returns Returns a promise which is resolved as soon as the
   * native layer has set the flag to disabled.
   */
  @Cordova({sync: true})
  static disableDebugNotifications(): Promise<void> { return; }

  /**
   * Enables debug logging in the native layer. Use this method if you want
   * a debug the inner workings of this plugin.
   *
   * @returns Returns a promise which is resolved as soon as the
   * native layer has set the logging level accordingly.
   */
  @Cordova({sync: true})
  static enableDebugLogs(): Promise<void> { return; }

  /**
   * Appends the provided [message] to the device logs.
   * Note: If debug logging is turned off, this won't do anything.
   *
   * @param {String} message The message to append to the device logs.
   *
   * @returns Returns a promise which is resolved with the log
   * message received by the native layer for appending. The returned message
   * is expected to be equivalent to the one provided in the original call.
   */
  @Cordova({sync: true})
  static appendToDeviceLog(message: string): Promise<void> { return; }



}