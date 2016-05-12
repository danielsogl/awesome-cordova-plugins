import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

declare var window;


export interface Location {

  /**
   * ID of location as stored in DB (or null)
   */
  locationId: number;

  /**
   * Service provider
   */
  serviceProvider: string;

  /**
   * true if location recorded as part of debug
   */
  debug: boolean

  /**
   * UTC time of this fix, in milliseconds since January 1, 1970.
   */
  time: number;

  /**
   * latitude, in degrees.
   */
  latitude: number;

  /**
   * longitude, in degrees.
   */
  longitude: number;

  /**
   * estimated accuracy of this location, in meters.
   */
  accuracy: number;

  /**
   * speed if it is available, in meters/second over ground.
   */
  speed: number;

  /**
   * altitude if available, in meters above the WGS 84 reference ellipsoid.
   */
  altitude: number;

  /**
   * bearing, in degrees.
   */
  bearing: number;

  /**
   * A Coordinates object defining the current location
   */
  coords: Coordinates;

  /**
   * A timestamp representing the time at which the location was retrieved.
   */
  timestamp: number;
}

export interface BGeoOptions {

  /**
   * Desired accuracy in meters. Possible values [0, 10, 100, 1000]. The lower
   * the number, the more power devoted to GeoLocation resulting in higher
   * accuracy readings. 1000 results in lowest power drain and least accurate
   * readings. @see Apple docs (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instp/CLLocationManager/desiredAccuracy)
   */
  desiredAccuracy: number;

  /**
   * Stationary radius in meters. When stopped, the minimum distance the device
   * must move beyond the stationary location for aggressive background-tracking
   * to engage.
   */
  stationaryRadius: number;

  /**
   * When enabled, the plugin will emit sounds for life-cycle events of
   * background-geolocation! See debugging sounds table.
   */
  debug: boolean;

  /**
   * The minimum distance (measured in meters) a device must move horizontally
   * before an update event is generated. @see Apple docs. (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter)
   */
  distanceFilter: number;

  /**
   * IOS, ANDROID ONLY
   * Enable this in order to force a stop() when the application terminated
   * (e.g. on iOS, double-tap home button, swipe away the app).
   */
  stopOnTerminate?: boolean;

  /**
   * ANDROID, WP8 ONLY
   * The minimum time interval between location updates in seconds.
   * @see Android docs (http://developer.android.com/reference/android/location/LocationManager.html#requestLocationUpdates(long,%20float,%20android.location.Criteria,%20android.app.PendingIntent))
   * and the MS doc (http://msdn.microsoft.com/en-us/library/windows/apps/windows.devices.geolocation.geolocator.reportinterval)
   * for more information
   */
  locationTimeout?: number;

  /**
   * ANDROID ONLY
   * Custom notification title in the drawer.
   */
  notificationTitle?: string;

  /**
   * ANDROID ONLY
   * Custom notification text in the drawer.
   */
  notificationText?: string;

  /**
   * ANDROID ONLY
   * The accent color to use for notification. Eg. #4CAF50.
   */
  notificationIconColor?: string;

  /**
   * ANDROID ONLY
   * The filename of a custom notification icon. See android quirks.
   * NOTE: Only available for API Level >=21.
   */
  notificationIcon?: string;

  /**
   * ANDROID ONLY
   * Set location service provider @see wiki (https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers)
   */
  locationService?: number;

  /**
   * IOS ONLY
   * [AutomotiveNavigation, OtherNavigation, Fitness, Other] Presumably,
   * this affects iOS GPS algorithm. @see Apple docs for more information
   * (https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType)
   */
  activityType?: string;

}

/**
 * @name BackgroundGeolocation
 * @description
 * This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
 * more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation
 *
 * @usage
 *
 * ```ts
 * import {BackgroundGeolocation} from 'ionic-native';
 *
 *
 *
 * // When device is ready :
 * platform.ready().then(() => {
 *
 *     // BackgroundGeoLocation is highly configurable. See platform specific configuration options
 *     BackgroundGeolocation.configure(
 *         (location) => {
 *             console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
 *             /*
 *             IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
 *             and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
 *             IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
 *             */
 *             backgroundGeoLocation.finish();
 *         },
 *         (error) => {
 *             console.log('BackgroundGeoLocation error');
 *         },
 *         {
 *             desiredAccuracy: 10,
 *             stationaryRadius: 20,
 *             distanceFilter: 30,
 *             debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
 *             stopOnTerminate: false, // <-- enable this to clear background location settings when the app terminates
 *         }
 *     );
 *
 *     // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
 *     BackgroundGeoLocation.start();
 * }
 *
 * // If you wish to turn OFF background-tracking, call the #stop method.
 * BackgroundGeoLocation.stop();
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-mauron85-background-geolocation',
  pluginRef: 'plugins.backgroundGeoLocation', // ????? see line 213 at https://github.com/mauron85/cordova-plugin-background-geolocation/blob/master/www/backgroundGeoLocation.js
  repo: 'https://github.com/mauron85/cordova-plugin-background-geolocation'
})
export class BackgroundGeoLocation {

  /**
   * Configure the plugin.
   * Success callback will be called with one argument - Location object, which tries to mimic w3c Coordinates interface.
   * See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
   * Callback to be executed every time a geolocation is recorded in the background.
   *
   * Fail callback to be executed every time a geolocation error occurs.
   *
   * Options a json object of type BGeoOptions
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static configure(options: BGeoOptions): Promise<Location> { return; }

//  /**
//   * Get the device's current position.
//   *
//   * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
//   * @return Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
//   */
//  @Cordova({
//    callbackOrder: 'reverse'
//  })
//  static getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> { return; }
//
//  /**
//   * Watch the current device's position.  Clear the watch by unsubscribing from
//   * Observable changes.
//   *
//   * ```ts
//   * var subscription = Geolocation.watchPosition().subscribe(position => {
//   *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
//   * });
//   *
//   * // To stop notifications
//   * subscription.unsubscribe();
//   * ```
//   *
//   * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
//   * @return Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
//   */
//  @Cordova({
//    callbackOrder: 'reverse',
//    observable: true,
//    clearFunction: 'clearWatch'
//  })
//  static watchPosition(options?: GeolocationOptions): Observable<Geoposition> { return; }
}
