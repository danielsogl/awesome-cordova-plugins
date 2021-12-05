import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

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
 * ```typescript
 * import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
 *
 *
 * constructor(private gyroscope: Gyroscope) { }
 *
 * ...
 *
 *
 * let options: GyroscopeOptions = {
 *    frequency: 1000
 * }
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
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Gyroscope extends AwesomeCordovaNativePlugin {
  /**
   * Watching for gyroscope sensor changes
   * @param {GyroscopeOptions} [options]
   * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch',
  })
  watch(options?: GyroscopeOptions): Observable<GyroscopeOrientation> {
    return;
  }
  /**
   * Get current data from gyroscope sensor
   * @return {Promise<GyroscopeOrientation>} Returns a promise that resolves GyroscopeOrientation
   */
  @Cordova()
  getCurrent(): Promise<GyroscopeOrientation> {
    return;
  }
}
