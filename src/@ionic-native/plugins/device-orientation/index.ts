import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface DeviceOrientationCompassHeading {
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
  timestamp: number;
}

export interface DeviceOrientationCompassOptions {
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
 * // DeviceOrientationCompassHeading is an interface for compass
 * import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
 *
 * constructor(private deviceOrientation: DeviceOrientation) { }
 *
 * ...
 *
 * // Get the device current compass heading
 * this.deviceOrientation.getCurrentHeading().then(
 *   (data: DeviceOrientationCompassHeading) => console.log(data),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch the device compass heading change
 * var subscription = this.deviceOrientation.watchHeading().subscribe(
 *   (data: DeviceOrientationCompassHeading) => console.log(data)
 * );
 *
 * // Stop watching heading change
 * subscription.unsubscribe();
 * ```
 * @interfaces
 * DeviceOrientationCompassOptions
 * DeviceOrientationCompassHeading
 */
@Plugin({
  pluginName: 'DeviceOrientation',
  plugin: 'cordova-plugin-device-orientation',
  pluginRef: 'navigator.compass',
  repo: 'https://github.com/apache/cordova-plugin-device-orientation',
  platforms: [
    'Amazon Fire OS',
    'Android',
    'BlackBerry 10',
    'Browser',
    'Firefox OS',
    'iOS',
    'Tizen',
    'Ubuntu',
    'Windows',
    'Windows Phone'
  ]
})
@Injectable()
export class DeviceOrientation extends IonicNativePlugin {
  /**
   * Get the current compass heading.
   * @returns {Promise<DeviceOrientationCompassHeading>}
   */
  @Cordova()
  getCurrentHeading(): Promise<DeviceOrientationCompassHeading> {
    return;
  }

  /**
   * Get the device current heading at a regular interval
   *
   * Stop the watch by unsubscribing from the observable
   * @param {DeviceOrientationCompassOptions} [options] Options for compass. Frequency and Filter. Optional
   * @returns {Observable<DeviceOrientationCompassHeading>} Returns an observable that contains the compass heading
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch'
  })
  watchHeading(
    options?: DeviceOrientationCompassOptions
  ): Observable<DeviceOrientationCompassHeading> {
    return;
  }
}
