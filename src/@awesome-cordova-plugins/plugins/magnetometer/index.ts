import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface MagnetometerReading {
  /**
   * X reading of magnetometer. (Number)
   */
  x: number;
  /**
   * Y reading of magnetometer. (Number)
   */
  y: number;
  /**
   * Z reading of magnetometer. (Number)
   */
  z: number;
  /**
   * Calculated total - always positive of magnetometer. (Number)
   */
  magnitude: number;
}

/**
 * @name Device eMagnetometer
 * @description
 * Requires Cordova plugin: `cordova-plugin-magnetometer`. For more info, please see the [Device Orientation docs](https://github.com/sdesalas/cordova-plugin-magnetometer).
 *
 * @usage
 * ```typescript
 * // MagnetometerReading is an interface for compass
 * import { Magnetometer, MagnetometerReading } from '@awesome-cordova-plugins/device-orientation/ngx';
 *
 * constructor(private magnetometer: Magnetometer) { }
 *
 * ...
 *
 * // Get the device current compass heading
 * this.magnetometer.getReading().then(
 *   (data: MagnetometerReading) => console.log(data),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch the device compass heading change
 * var subscription = this.magnetometer.watchReadings().subscribe(
 *   (data: MagnetometerReading) => console.log(data)
 * );
 *
 * // Stop watching heading change
 * subscription.unsubscribe();
 * ```
 * @interfaces
 * MagnetometerReading
 */
@Plugin({
  pluginName: 'Magnetometer',
  plugin: 'cordova-plugin-magnetometer',
  pluginRef: 'cordova.plugins.magnetometer',
  repo: 'https://github.com/sdesalas/cordova-plugin-magnetometer',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Magnetometer extends AwesomeCordovaNativePlugin {
  /**
   * Get the current compass reading.
   * @returns {Promise<MagnetometerReading>}
   */
  @Cordova()
  getReading(): Promise<MagnetometerReading> {
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
    clearFunction: 'stop',
  })
  watchReadings(): Observable<MagnetometerReading> {
    return;
  }
}
