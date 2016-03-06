import {Plugin, Cordova} from './plugin';

export interface accelerationData {

  /**
   * Amount of acceleration on the x-axis. (in m/s^2)
   */
  x : number,

  /**
   * Amount of acceleration on the y-axis. (in m/s^2)
   */
  y : number,

  /**
   * Amount of acceleration on the z-axis. (in m/s^2)
   */
  z : number,

  /**
   * Creation timestamp in milliseconds.
   */
  timestamp : any

}

export interface accelerometerOptions {

  /**
   * Requested period of calls to accelerometerSuccess with acceleration data in Milliseconds. Default: 10000
   */
  frequency? : number

}

/**
 * Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).
 *
 * ```
 * cordova plugin add https://github.com/apache/cordova-plugin-device-motion.git
 * ````
 *
 * @usage
 * ```js
 * ```
 */
@Plugin({
  plugin: 'https://github.com/apache/cordova-plugin-device-motion.git',
  pluginRef: 'navigator.accelerometer'
})
export class DeviceMotion {

  /**
   * Get the current acceleration along the x, y, and z axes.
   * @returns {Promise<any>} Returns object with x, y, z, and timestamp properties
   */
  @Cordova()
  static getCurrentAcceleration () : Promise<accelerationData> {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<accelerationData>((res, rej) => {});
  }

  /**
   *
   * @param options
   * @returns {Observable<accelerationData>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static watchAcceleration (options? : accelerometerOptions) : Promise<accelerationData> {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<accelerationData>((res, rej) => {});
  }

  /**
   * Stop watching the Acceleration referenced by the watchID parameter.
   * @param watchID The ID returned by watchAcceleration method
   */
  @Cordova({
    sync: true
  })
  static clearWatch(watchID : any) : void {}

}
