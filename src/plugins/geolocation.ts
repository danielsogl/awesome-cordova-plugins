import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

declare var window;

export interface Coordinates {
  /**
   * a double representing the position's latitude in decimal degrees.
   */
  latitude: number;

  /**
   * A double representing the position's longitude in decimal degrees.
   */
  longitude: number;

  /**
   * A double representing the accuracy of the latitude and longitude properties,
   * expressed in meters.
   */
  accuracy: number;

  /**
   * A double representing the position's altitude in metres, relative to sea
   * level. This value can be null if the implementation cannot provide the data.
   */
  altitude: number;

  /**
   * A double representing the accuracy of the altitude expressed in meters.
   * This value can be null.
   */
  altitudeAccuracy: number;

  /**
   * A double representing the direction in which the device is traveling. This
   * value, specified in degrees, indicates how far off from heading true north
   * the device is. 0 degrees represents true north, and the direction is
   * determined clockwise (which means that east is 90 degrees and west is 270
   * degrees). If speed is 0, heading is NaN. If the device is unable to provide
   * heading information, this value is null.
   */
  heading: number;

  /**
   * A double representing the velocity of the device in meters per second.
   * This value can be null.
   */
  speed: number;
}

export interface Geoposition {
  /**
   * A Coordinates object defining the current location
   */
  coords: Coordinates;

  /**
   * A timestamp representing the time at which the location was retrieved.
   */
  timestamp: number;
}

export interface GeolocationOptions {
  /**
   * Is a positive long value indicating the maximum age in milliseconds of a
   * possible cached position that is acceptable to return. If set to 0, it
   * means that the device cannot use a cached position and must attempt to
   * retrieve the real current position. If set to Infinity the device must
   * return a cached position regardless of its age. Default: 0.
   */
  maximumAge?: number;

  /**
   * Is a positive long value representing the maximum length of time
   * (in milliseconds) the device is allowed to take in order to return a
   * position. The default value is Infinity, meaning that getCurrentPosition()
   * won't return until the position is available.
   */
  timeout?: number;

  /**
   * Indicates the application would like to receive the best possible results.
   * If true and if the device is able to provide a more accurate position, it
   * will do so. Note that this can result in slower response times or increased
   * power consumption (with a GPS chip on a mobile device for example). On the
   * other hand, if false, the device can take the liberty to save resources by
   * responding more quickly and/or using less power. Default: false.
   * @type {boolean}
   */
  enableHighAccuracy?: boolean;
}


/**
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * @usage
 *
 * ```ts
 * import {Geolocation} from 'ionic-native';
 *
 *
 *
 * Geolocation.getCurrentPosition().then((resp) => {
 *  //resp.coords.latitude
 *  //resp.coords.longitude
 * })
 *
 * let watch = Geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  //data.coords.latitude
 *  //data.coords.longitude
 * })
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation',
  repo: 'https://github.com/apache/cordova-plugin-geolocation'
})
export class Geolocation {
  /**
   * Get the device's current position.
   *
   * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
   * @return Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> { return; }

  /**
   * Watch the current device's position.  Clear the watch by unsubscribing from
   * Observable changes.
   *
   * ```ts
   * var subscription = Geolocation.watchPosition().subscribe(position => {
   *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
   * });
   *
   * // To stop notifications
   * subscription.unsubscribe();
   * ```
   *
   * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
   * @return Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch'
  })
  static watchPosition(options?: GeolocationOptions): Observable<Geoposition> { return; }
}
