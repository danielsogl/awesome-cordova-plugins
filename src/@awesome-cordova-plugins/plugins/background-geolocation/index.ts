import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export enum BackgroundGeolocationLocationCode {
  PERMISSION_DENIED = 1,
  LOCATION_UNAVAILABLE = 2,
  TIMEOUT = 3,
}

export enum BackgroundGeolocationNativeProvider {
  gps = 'gps',
  network = 'network',
  passive = 'passive',
  fused = 'fused',
}

export enum BackgroundGeolocationLocationProvider {
  DISTANCE_FILTER_PROVIDER = 0,
  ACTIVITY_PROVIDER = 1,
  RAW_PROVIDER = 2,
}

export enum BackgroundGeolocationEvents {
  http_authorization = 'http_authorization', // Triggered when server responded with "<code>401 Unauthorized</code>" to post/sync request.
  abort_requested = 'abort_requested', // Triggered when server responded with "<code>285 Updates Not Required</code>" to post/sync request.
  background = 'background', // Triggered when app entered background state and (not visible to the user).
  foreground = 'foreground', // Triggered when app entered foreground state and (visible to the user).
  authorization = 'authorization', // Triggered when user changes authorization/permissions for the app or toggles location services.
  error = 'error', // Register error listener.
  stop = 'stop', // Triggered when background service has been stopped succesfully.
  start = 'start', // Event is triggered when background service has been started succesfully.
  activity = 'activity', // Register activity monitoring listener.
  stationary = 'stationary', // Register stationary location event listener.
  location = 'location', // Register location event listener.
}

export enum BackgroundGeolocationAuthorizationStatus {
  NOT_AUTHORIZED = 0,
  AUTHORIZED = 1,
  AUTHORIZED_FOREGROUND = 2,
}

export enum BackgroundGeolocationLogLevel {
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export interface BackgroundGeolocationLogEntry {
  /** ID of log entry as stored in db. */
  id: number;

  /** Timestamp in milliseconds since beginning of UNIX epoch. */
  timestamp: number;

  /** Log level */
  level: BackgroundGeolocationLogLevel;

  /** Log message */
  message: string;

  /** Recorded stacktrace. (Android only, on iOS part of message) */
  stackTrace: string;
}

export interface ServiceStatus {
  /** TRUE if service is running. */
  isRunning: boolean;

  /** TRUE if location services are enabled */
  locationServicesEnabled: boolean;

  /**
   * Authorization status.
   *
   * Posible values:
   *  NOT_AUTHORIZED, AUTHORIZED, AUTHORIZED_FOREGROUND
   *
   * @example
   * if (authorization == BackgroundGeolocation.NOT_AUTHORIZED) {...}
   */
  authorization: BackgroundGeolocationAuthorizationStatus;
}

export interface BackgroundGeolocation {
  code: BackgroundGeolocationLocationCode;
  message: string;
}

export interface BackgroundGeolocationCurrentPositionConfig {
  timeout: number;
  maximumAge: number;
  enableHighAccuracy: boolean;
}

export interface BackgroundGeolocationResponse {
  /** ID of location as stored in DB (or null) */
  id: number;

  /**
   * Native provider reponsible for location.
   *
   * Possible values:
   * "gps", "network", "passive" or "fused"
   */
  provider: BackgroundGeolocationNativeProvider;

  /** Configured location provider. */
  locationProvider: BackgroundGeolocationLocationProvider;

  /** UTC time of this fix, in milliseconds since January 1, 1970. */
  time: number;

  /** Latitude, in degrees. */
  latitude: number;

  /** Longitude, in degrees. */
  longitude: number;

  /** Estimated accuracy of this location, in meters. */
  accuracy: number;

  /**
   * Speed if it is available, in meters/second over ground.
   *
   * Note: Not all providers are capable of providing speed.
   * Typically network providers are not able to do so.
   */
  speed: number;

  /** Altitude if available, in meters above the WGS 84 reference ellipsoid. */
  altitude: number;

  /** Bearing, in degrees. */
  bearing: number;

  /**
   * True if location was recorded by mock provider. (ANDROID ONLY)
   *
   * Note: this property is not enabled by default!
   * You can enable it "postTemplate" configure option.
   */
  isFromMockProvider?: boolean;

  /**
   * True if device has mock locations enabled. (ANDROID ONLY)
   *
   * Note: this property is not enabled by default!
   * You can enable it "postTemplate" configure option.
   */
  mockLocationsEnabled?: boolean;
}

export interface BackgroundGeolocationConfig {
  /**
   * Set location provider
   *
   * Platform: all
   * Available providers:
   *  DISTANCE_FILTER_PROVIDER,
   *  ACTIVITY_PROVIDER
   *  RAW_PROVIDER
   *
   * @default DISTANCE_FILTER_PROVIDER
   * @example
   * { locationProvider: LocationProvider.RAW_PROVIDER }
   */
  locationProvider?: number;

  /**
   * Desired accuracy in meters.
   *
   * Platform: all
   * Provider: all
   * Possible values:
   *  HIGH_ACCURACY,
   *  MEDIUM_ACCURACY,
   *  LOW_ACCURACY,
   *  PASSIVE_ACCURACY
   * Note: Accuracy has direct effect on power drain. Lower accuracy = lower power drain.
   *
   * @default MEDIUM_ACCURACY
   * @example
   * { desiredAccuracy: BackgroundGeolocationAccuracy.LOW }
   */
  desiredAccuracy?: number;

  /**
   * Stationary radius in meters.
   *
   * When stopped, the minimum distance the device must move beyond the stationary location for aggressive background-tracking to engage.
   * Platform: all
   * Provider: DISTANCE_FILTER
   *
   * @default 50
   */
  stationaryRadius?: number;

  /**
   * When enabled, the plugin will emit sounds for life-cycle events of background-geolocation! See debugging sounds table.
   *
   * Platform: all
   * Provider: all
   *
   * @default false
   */
  debug?: boolean;

  /**
   * The minimum distance (measured in meters) a device must move horizontally before an update event is generated.
   *
   * Platform: all
   * Provider: DISTANCE_FILTER, RAW
   *
   * @default 500
   * @see {@link https://apple.co/2oHo2CV|Apple docs}
   */
  distanceFilter?: number;

  /**
   * Enable this in order to force a stop() when the application terminated.
   * E.g. on iOS, double-tap home button, swipe away the app.
   *
   * Platform: all
   * Provider: all
   *
   * @default true
   */
  stopOnTerminate?: boolean;

  /**
   * Start background service on device boot.
   *
   * Platform: Android
   * Provider: all
   *
   * @default false
   */
  startOnBoot?: boolean;

  /**
   * The minimum time interval between location updates in milliseconds.
   *
   * Platform: Android
   * Provider: all
   *
   * @default 60000
   * @see {@link https://bit.ly/1x00RUu|Android docs}
   */
  interval?: number;

  /**
   * Fastest rate in milliseconds at which your app can handle location updates.
   *
   * Platform: Android
   * Provider: ACTIVITY
   *
   * @default 120000
   * @see {@link https://bit.ly/1x00RUu|Android docs}
   */
  fastestInterval?: number;

  /**
   * Rate in milliseconds at which activity recognition occurs.
   * Larger values will result in fewer activity detections while improving battery life.
   *
   * Platform: Android
   * Provider: ACTIVITY
   *
   * @default 10000
   */
  activitiesInterval?: number;

  /**
   * @deprecated Stop location updates, when the STILL activity is detected.
   */
  stopOnStillActivity?: boolean;

  /**
   * Enable/disable local notifications when tracking and syncing locations.
   *
   * Platform: Android
   * Provider: all
   *
   * @default true
   */
  notificationsEnabled?: boolean;

  /**
   * Allow location sync service to run in foreground state.
   * Foreground state also requires a notification to be presented to the user.
   *
   * Platform: Android
   * Provider: all
   *
   * @default false
   */
  startForeground?: boolean;

  /**
   * Custom notification title in the drawer.
   *
   * Platform: Android
   * Provider: all
   *
   * @default "Background tracking"
   */
  notificationTitle?: string;

  /**
   * Custom notification text in the drawer.
   *
   * Platform: Android
   * Provider: all
   *
   * @default "ENABLED"
   */
  notificationText?: string;

  /**
   * The accent color (hex triplet) to use for notification.
   * Eg. <code>#4CAF50</code>.
   *
   * Platform: Android
   * Provider: all
   */
  notificationIconColor?: string;

  /**
   * The filename of a custom notification icon.
   *
   * Platform: Android
   * Provider: all
   */
  notificationIconLarge?: string;

  /**
   * The filename of a custom notification icon.
   *
   * Platform: Android
   * Provider: all
   */
  notificationIconSmall?: string;

  /**
   * Activity type.
   * Presumably, this affects iOS GPS algorithm.
   *
   * Possible values:
   * "AutomotiveNavigation", "OtherNavigation", "Fitness", "Other"
   *
   * Platform: iOS
   * Provider: all
   *
   * @default "OtherNavigation"
   * @see {@link https://apple.co/2oHofpH|Apple docs}
   */
  activityType?: string;

  /**
   * Pauses location updates when app is paused.
   *
   * Platform: iOS
   * Provider: all
   *
   * @default false
   * @see {@link https://apple.co/2CbjEW2|Apple docs}
   */
  pauseLocationUpdates?: boolean;

  /**
   * Switch to less accurate significant changes and region monitory when in background.
   *
   * Platform: iOS
   * Provider: all
   *
   * @default false
   */
  saveBatteryOnBackground?: boolean;

  /**
   * Server url where to send HTTP POST with recorded locations
   *
   * Platform: all
   * Provider: all
   */
  url?: string;

  /**
   * Server url where to send fail to post locations
   *
   * Platform: all
   * Provider: all
   */
  syncUrl?: string;

  /**
   * Specifies how many previously failed locations will be sent to server at once.
   *
   * Platform: all
   * Provider: all
   *
   * @default 100
   */
  syncThreshold?: number;

  /**
   * Optional HTTP headers sent along in HTTP request.
   *
   * Platform: all
   * Provider: all
   */
  httpHeaders?: any;

  /**
   * Limit maximum number of locations stored into db.
   *
   * Platform: all
   * Provider: all
   *
   * @default 10000
   */
  maxLocations?: number;

  /**
   * Customization post template.
   *
   * Platform: all
   * Provider: all
   */
  postTemplate?: any;
}

/**
 * Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers
 *
 * Possible values:
 *  ANDROID_DISTANCE_FILTER_PROVIDER: 0,
 *  ANDROID_ACTIVITY_PROVIDER: 1
 *
 * @enum {number}
 */
export declare enum BackgroundGeolocationProvider {
  ANDROID_DISTANCE_FILTER_PROVIDER = 0,
  ANDROID_ACTIVITY_PROVIDER = 1,
}

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
export declare enum BackgroundGeolocationAccuracy {
  HIGH = 0,
  MEDIUM = 10,
  LOW = 100,
  PASSIVE = 1000,
}

/**
 * Used in the switchMode function
 *
 * Possible values:
 *  BACKGROUND: 0
 *  FOREGROUND: 1
 *
 * @enum {number}
 */
export declare enum BackgroundGeolocationMode {
  BACKGROUND = 0,
  FOREGROUND = 1,
}

export declare enum BackgroundGeolocationIOSActivity {
  AutomotiveNavigation = 'AutomotiveNavigation',
  OtherNavigation = 'OtherNavigation',
  Fitness = 'Fitness',
  Other = 'Other',
}

/**
 * @name Background Geolocation
 * @description
 * This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
 * more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation
 * @usage
 *
 * BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.
 *
 * ```typescript
 * import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@awesome-cordova-plugins/background-geolocation/ngx';
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
 *   .then(() => {
 *
 *     this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
 *       console.log(location);
 *
 *       // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
 *       // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
 *       // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
 *       this.backgroundGeolocation.finish(); // FOR IOS ONLY
 *     });
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
@Plugin({
  pluginName: 'BackgroundGeolocation',
  plugin: '@mauron85/cordova-plugin-background-geolocation',
  pluginRef: 'BackgroundGeolocation',
  repo: 'https://github.com/mauron85/cordova-plugin-background-geolocation',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class BackgroundGeolocation extends AwesomeCordovaNativePlugin {
  /**
   * Configure the plugin.
   *
   * @param options {BackgroundGeolocationConfig} options An object of type Config
   * @returns {Promise<any>}
   */
  @Cordova()
  configure(options: BackgroundGeolocationConfig): Promise<any> {
    return;
  }

  /**
   * Turn ON the background-geolocation system.
   * The user will be tracked whenever they suspend the app.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  start(): Promise<any> {
    return;
  }

  /**
   * Turn OFF background-tracking
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  stop(): Promise<any> {
    return;
  }

  /**
   * Inform the native plugin that you're finished, the background-task may be completed
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  finish(): Promise<any> {
    return;
  }

  /**
   * Force the plugin to enter "moving" or "stationary" state
   *
   * @param isMoving {boolean}
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  changePace(isMoving: boolean): Promise<any> {
    return;
  }

  /**
   * Setup configuration
   *
   * @param options {BackgroundGeolocationConfig}
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  setConfig(options: BackgroundGeolocationConfig): Promise<any> {
    return;
  }

  /**
   * Returns current stationaryLocation if available. null if not
   *
   * @returns {Promise<Location>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  getStationaryLocation(): Promise<BackgroundGeolocationResponse> {
    return;
  }

  /**
   * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
   * your #success callback will be executed with #location param containing #radius of region
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  onStationary(): Promise<any> {
    return;
  }

  /**
   * Check if location is enabled on the device
   *
   * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
   */
  @Cordova({
    platforms: ['Android'],
  })
  isLocationEnabled(): Promise<number> {
    return;
  }

  /**
   * Display app settings to change permissions
   */
  @Cordova({ sync: true })
  showAppSettings(): void {}

  /**
   * Display device location settings
   */
  @Cordova({ sync: true })
  showLocationSettings(): void {}

  /**
   * Method can be used to detect user changes in location services settings.
   * If user enable or disable location services then success callback will be executed.
   * In case or  (SettingNotFoundException) fail callback will be executed.
   *
   * @returns {Observable<number>}
   */
  @Cordova({
    platforms: ['Android'],
    observable: true,
  })
  watchLocationMode(): Observable<number> {
    return;
  }

  /**
   * Stop watching for location mode changes.
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  stopWatchingLocationMode(): Promise<any> {
    return;
  }

  /**
   * Method will return all stored locations.
   * Locations are stored when:
   *  - config.stopOnTerminate is false and main activity was killed
   *    by the system
   *  or
   *  - option.debug is true
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  getLocations(): Promise<any> {
    return;
  }

  /**
   * Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getValidLocations(): Promise<any> {
    return;
  }

  /**
   * Delete stored location by given locationId.
   *
   * @param locationId {number}
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  deleteLocation(locationId: number): Promise<any> {
    return;
  }

  /**
   * Delete all stored locations.
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  deleteAllLocations(): Promise<any> {
    return;
  }

  /**
   * Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
   * Calling switchMode you can override plugin behavior and force plugin to switch into other mode.
   *
   * In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
   * In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only.
   *
   * BackgroundGeolocation.Mode.FOREGROUND
   * BackgroundGeolocation.Mode.BACKGROUND
   *
   * @param modeId {number}
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  switchMode(modeId: number): Promise<any> {
    return;
  }

  /**
   * Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.
   *
   * @see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information.
   * @param fromId
   * @param minLevel
   * @param limit {number} Limits the number of entries
   * @returns {Promise<any>}
   */
  @Cordova()
  getLogEntries(
    limit: number,
    fromId: number,
    minLevel: BackgroundGeolocationLogLevel
  ): Promise<BackgroundGeolocationLogEntry[]> {
    return;
  }

  /**
   * Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.
   *
   * @see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information.
   * @returns {Promise<any>}
   */
  @Cordova()
  getConfig(): Promise<any> {
    return;
  }

  /**
   * One time location check to get current location of the device.
   * {timeout: Maximum time in milliseconds device will wait for location,
   * maximumAge: Maximum age in milliseconds of a possible cached location that is acceptable to return;
   * enableHighAccuracy: if true and if the device is able to provide a more accurate position, it will do so}
   *
   * @param {BackgroundGeolocationCurrentPositionConfig} options
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  getCurrentLocation(options?: BackgroundGeolocationCurrentPositionConfig): Promise<BackgroundGeolocationResponse> {
    return;
  }

  /**
   * Check status of the service
   */
  @Cordova()
  checkStatus(): Promise<ServiceStatus> {
    return;
  }

  /**
   * Start background task (iOS only)
   *
   * To perform any long running operation on iOS
   * you need to create background task
   * IMPORTANT: task has to be ended by endTask
   *
   * @returns {Promise<number>} taskKey
   */
  @Cordova({
    platforms: ['IOS'],
  })
  startTask(): Promise<number> {
    return;
  }

  /**
   *  End background task indentified by taskKey (iOS only)
   *
   * @param taskKey
   */
  @Cordova({
    platforms: ['IOS'],
  })
  endTask(taskKey: number): Promise<any> {
    return;
  }

  /**
   * A special task that gets executed when the app is terminated, but
   * the plugin was configured to continue running in the background
   * (option <code>stopOnTerminate: false</code>).
   *
   * In this scenario the Activity was killed by the system and all registered
   * event listeners will not be triggered until the app is relaunched.
   *
   * @example
   *  BackgroundGeolocation.headlessTask(function(event) {
   *
   *      if (event.name === 'location' || event.name === 'stationary') {
   *          var xhr = new XMLHttpRequest();
   *          xhr.open('POST', 'http://192.168.81.14:3000/headless');
   *          xhr.setRequestHeader('Content-Type', 'application/json');
   *          xhr.send(JSON.stringify(event.params));
   *      }
   *
   *      return 'Processing event: ' + event.name; // will be logged
   *  });
   * @param func
   */
  @Cordova()
  headlessTask(func: any): Promise<any> {
    return;
  }

  /**
   * Force sync of pending locations.
   * Option <code>syncThreshold</code> will be ignored and all pending locations will be immediately posted to <code>syncUrl</code> in single batch.
   *
   * Platform: Android, iOS
   */
  @Cordova()
  forceSync(): Promise<any> {
    return;
  }

  /**
   * Register event listener.
   *
   * Triggered when server responded with "<code>285 Updates Not Required</code>" to post/sync request.
   *
   * @param event
   * @param callbackFn
   */
  @Cordova({
    observable: true,
  })
  on(event: BackgroundGeolocationEvents): Observable<BackgroundGeolocationResponse> {
    return;
  }

  /**
   * Unregister all event listeners for given event.
   *
   * If parameter <code>event</code> is not provided then all event listeners will be removed.
   *
   * @param event
   */
  @Cordova()
  removeAllListeners(event?: BackgroundGeolocationEvents): Promise<any> {
    return;
  }
}
