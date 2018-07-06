import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface DeviceMotionAccelerationData {
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
export interface DeviceMotionAccelerometerOptions {
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
 * import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
 *
 * constructor(private deviceMotion: DeviceMotion) { }
 *
 * ...
 *
 * // Get the device current acceleration
 * this.deviceMotion.getCurrentAcceleration().then(
 *   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch device acceleration
 * var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
 *   console.log(acceleration);
 * });
 *
 * // Stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * DeviceMotionAccelerationData
 * DeviceMotionAccelerometerOptions
 */
export declare class DeviceMotion extends IonicNativePlugin {
    /**
     * Get the current acceleration along the x, y, and z axes.
     * @returns {Promise<DeviceMotionAccelerationData>} Returns object with x, y, z, and timestamp properties
     */
    getCurrentAcceleration(): Promise<DeviceMotionAccelerationData>;
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     * @param {AccelerometerOptions} options list of options for the accelerometer.
     * @returns {Observable<DeviceMotionAccelerationData>} Observable returns an observable that you can subscribe to
     */
    watchAcceleration(options?: DeviceMotionAccelerometerOptions): Observable<DeviceMotionAccelerationData>;
}
