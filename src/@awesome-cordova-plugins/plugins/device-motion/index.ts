import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

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
 * @usage
 * ```typescript
 * import { DeviceMotion, DeviceMotionAccelerationData } from '@awesome-cordova-plugins/device-motion/ngx';
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
@Plugin({
  pluginName: 'DeviceMotion',
  plugin: 'cordova-plugin-device-motion',
  pluginRef: 'navigator.accelerometer',
  repo: 'https://github.com/apache/cordova-plugin-device-motion',
  platforms: [
    'Android',
    'BlackBerry 10',
    'Browser',
    'Firefox OS',
    'iOS',
    'Tizen',
    'Ubuntu',
    'Windows',
    'Windows Phone 8',
  ],
})
@Injectable()
export class DeviceMotion extends AwesomeCordovaNativePlugin {
  /**
   * Get the current acceleration along the x, y, and z axes.
   * @returns {Promise<DeviceMotionAccelerationData>} Returns object with x, y, z, and timestamp properties
   */
  @Cordova()
  getCurrentAcceleration(): Promise<DeviceMotionAccelerationData> {
    return;
  }

  /**
   * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
   * @param {AccelerometerOptions} options list of options for the accelerometer.
   * @returns {Observable<DeviceMotionAccelerationData>} Observable returns an observable that you can subscribe to
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch',
  })
  watchAcceleration(options?: DeviceMotionAccelerometerOptions): Observable<DeviceMotionAccelerationData> {
    return;
  }
}
