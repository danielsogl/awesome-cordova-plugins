import { Observable } from 'rxjs/Observable';
export interface CompassHeading {
    /**
     * The heading in degrees from 0-359.99 at a single moment in time. (Number)
     */
    magneticHeading: number;
    /**
     * The heading relative to the geographic North Pole in degrees 0-359.99 at a single moment in time. A negative value indicates that the true heading can't be determined. (Number)
     */
    trueHeading: number;
    /**
     * The deviation in degrees between the reported heading and the true heading. (Number)
     */
    headingAccuracy: number;
    /**
     * The time at which this heading was determined. (DOMTimeStamp)
     */
    timestamp: any;
}
export interface CompassOptions {
    /**
     * How often to retrieve the compass heading in milliseconds. (Number) (Default: 100)
     */
    frequency?: number;
    /**
     * The change in degrees required to initiate a watchHeading success callback. When this value is set, frequency is ignored. (Number)
     */
    filter?: number;
}
/**
 * @name Device Orientation
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-orientation`. For more info, please see the [Device Orientation docs](https://github.com/apache/cordova-plugin-device-orientation).
 *
 * @usage
 * ```typescript
 * // CompassHeading is an interface for compass
 * import { DeviceOrientation, CompassHeading } from 'ionic-native';
 *
 *
 * // Get the device current compass heading
 * DeviceOrientation.getCurrentHeading().then(
 *   (data: CompassHeading) => console.log(data),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch the device compass heading change
 * var subscription = DeviceOrientation.watchHeading().subscribe(
 *   (data: CompassHeading) => console.log(data)
 * );
 *
 * // Stop watching heading change
 * subscription.unsubscribe();
 * ```
 */
export declare class DeviceOrientation {
    /**
     * Get the current compass heading.
     * @returns {Promise<CompassHeading>}
     */
    static getCurrentHeading(): Promise<CompassHeading>;
    /**
     * Get the device current heading at a regular interval
     *
     * Stop the watch by unsubscribing from the observable
     * @param {CompassOptions} options Options for compass. Frequency and Filter. Optional
     * @returns {Observable<CompassHeading>} Returns an observable that contains the compass heading
     */
    static watchHeading(options?: CompassOptions): Observable<CompassHeading>;
}
