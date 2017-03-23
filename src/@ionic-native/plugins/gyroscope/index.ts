import { Plugin, Cordova } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

declare var navigator: any;

/**
 *  @hidden
 */
export interface GyroscopeOrientation {
  /**
   *  Represent x-axis
   */
  x: number;

  /**
   *  Represent y-axis
   */
  y: number;

  /**
   *  Represent z-axis
   */
  z: number;

  /**
   *  Represent timestamp of sensor read. Default is 10000ms
   */
  timestamp: number;
}

/**
 *  @hidden
 */
export interface GyroscopeOptions {
  /**
   *  Represent how often (in milliseconds) sensor should be read.  Default is 10000 ms
   */
  frequency: number;
}

/**
 * @name Gyroscope
 * @description Read Gyroscope sensor data
 * @usage
 * ```
 * import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
 *
 *
 * constructor(private gyroscope: Gyroscope) { }
 *
 * ...
 *
 *
 * let options: GyroscopeOptions = {
 *    frequency: 1000
 * };
 *
 * this.gyroscope.getCurrent(options)
 *   .then((orientation: GyroscopeOrientation) => {
 *      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
 *    })
 *   .catch()
 *
 *
 * this.gyroscope.watch()
 *    .subscribe((orientation: GyroscopeOrientation) => {
 *       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
 *    });
 *
 * ```
 * @interfaces
 * GyroscopeOrientation
 * GyroscopeOptions
 */
@Plugin({
  pluginName: 'Gyroscope',
  plugin: 'cordova-plugin-gyroscope',
  pluginRef: 'navigator.gyroscope',
  repo: 'https://github.com/NeoLSN/cordova-plugin-gyroscope',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Gyroscope {

  /**
   * Watching for gyroscope sensor changes
   * @param {GyroscopeOptions} [options]
   * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
   */
  watch(options?: GyroscopeOptions): Observable<GyroscopeOrientation> {
    return new Observable<GyroscopeOrientation> (
      (observer: any) => {
        let watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
        return () => navigator.gyroscope.clearWatch(watchId);
      }
    );
  }

  /**
   * Get current data from gyroscope sensor
   * @param {GyroscopeOptions} [options]
   * @return {Promise<GyroscopeOrientation>} Returns a promise that resolves GyroscopeOrientation
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  getCurrent(options?: GyroscopeOptions): Promise<GyroscopeOrientation> { return; }
}
