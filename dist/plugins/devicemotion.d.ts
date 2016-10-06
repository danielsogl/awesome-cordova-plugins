import { Observable } from 'rxjs/Observable';
export interface AccelerationData {
    /**
     * Amount of acceleration on the x-axis. (in m/s^2)
     */
    x: number;
    /**
     * Amount of acceleration on the y-axis. (in m/s^2)
     */
    y: number;
    /**
     * Amount of acceleration on the z-axis. (in m/s^2)
     */
    z: number;
    /**
     * Creation timestamp in milliseconds.
     */
    timestamp: any;
}
export interface AccelerometerOptions {
    /**
     * Requested period of calls to accelerometerSuccess with acceleration data in Milliseconds. Default: 10000
     */
    frequency?: number;
}
/**
 * @name Device Motion
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).
 *
 * @usage
 * ```typescript
 * import { DeviceMotion } from 'ionic-native';
 *
 *
 * // Get the device current acceleration
 * DeviceMotion.getCurrentAcceleration().then(
 *   (acceleration: AccelerationData) => console.log(acceleration),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch device acceleration
 * var subscription = DeviceMotion.watchAcceleration().subscribe((acceleration: AccelerationData) => {
 *   console.log(acceleration);
 * });
 *
 * // Stop watch
 * subscription.unsubscribe();
 *
 * ```
 */
export declare class DeviceMotion {
    /**
     * Get the current acceleration along the x, y, and z axes.
     * @returns {Promise<any>} Returns object with x, y, z, and timestamp properties
     */
    static getCurrentAcceleration(): Promise<AccelerationData>;
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     * @param {AccelerometerOptions} options list of options for the accelerometer.
     * @returns {Observable<AccelerationData>} Observable returns an observable that you can subscribe to
     */
    static watchAcceleration(options?: AccelerometerOptions): Observable<AccelerationData>;
}
