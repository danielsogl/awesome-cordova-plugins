import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

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
 * ```ts
 * import {DeviceOrientation} from 'ionic-native';
 *
 *
 *
 * // Get the device current compass heading
 * DeviceOrientation.getCurrentHeading().then(
 *   data => console.log(data),
 *   error => console.log(error)
 * );
 *
 * // Watch the device compass heading change
 * var subscription = DeviceOrientation.watchHeading().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Stop watching heading change
 * subscription.unsubscribe();
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-device-orientation',
  pluginRef: 'navigator.compass',
  repo: 'https://github.com/apache/cordova-plugin-device-orientation'
})
export class DeviceOrientation {

  /**
   * Get the current compass heading.
   * @returns {Promise<CompassHeading>}
   */
  @Cordova()
  static getCurrentHeading(): Promise<CompassHeading> { return; }

  /**
   * Get the device current heading at a regular interval
   *
   * Stop the watch by unsubscribing from the observable
   * @param options
   * @returns {Observable<CompassHeading>}
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    cancelFunction: 'clearWatch'
  })
  static watchHeading(options?: CompassOptions): Observable<CompassHeading> { return; }

}
