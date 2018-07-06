import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
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
export interface PositionError {
    /**
     * A code that indicates the error that occurred
     */
    code: number;
    /**
     * A message that can describe the error that occurred
     */
    message: string;
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
 * ```typescript
 * import { Geolocation } from '@ionic-native/geolocation';
 *
 * ...
 *
 * constructor(private geolocation: Geolocation) {}
 *
 * ...
 *
 * this.geolocation.getCurrentPosition().then((resp) => {
 *  // resp.coords.latitude
 *  // resp.coords.longitude
 * }).catch((error) => {
 *   console.log('Error getting location', error);
 * });
 *
 * let watch = this.geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  // data can be a set of coordinates, or an error (if an error occurred).
 *  // data.coords.latitude
 *  // data.coords.longitude
 * });
 * ```
 * @interfaces
 * Coordinates
 * Geoposition
 * PositionError
 * GeolocationOptions
 */
export declare class Geolocation extends IonicNativePlugin {
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition>;
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    watchPosition(options?: GeolocationOptions): Observable<Geoposition>;
}
