import { Plugin, Cordova} from './plugin';
import { Observable } from 'rxjs/Observable';

declare var navigator: any;

/**
* Interface that represent output data
*/

export interface Orientation {
  x: number;
  y: number;
  z: number;
  timestamp: number;
}


/**
* Interface that represent option data
*/

export interface GyroscopeOptions {
  frequency: number;
}

/**
 * @name Gyroscope
 * @description Read Gyroscope sensor data
 * @usage
 * ```
 * import { Gyroscope, Orientation, GyroscopeOptions } from 'ionic-native';
 *
 *
 * let options: GyroscopeOptions = {
 *    frequency: 1000
 * };
 *
 * Gyroscope.getCurrent(options)
 *   .then((orientation: Orientation) => {
 *      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
 *    })
 *   .catch()
 *
 *
 * Gyroscope.watch()
 *    .subscribe((orientation: Orientation) => {
 *       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
 *    });
 *
 * ```
 */
 @Plugin({
   pluginName: 'Gyroscope',
   plugin: 'cordova-plugin-gyroscope',
   pluginRef: 'navigator.gyroscope',
   repo: 'https://github.com/NeoLSN/cordova-plugin-gyroscope',
   platforms: ['Android', 'iOS']
 })

 export class Gyroscope {

  /**
   * Watching for gyroscope sensor changes
   * @param options {GyroscopeOptions} (optional)
   * @return {Observable<Gyroscope>} Returns an Observable that resolves Orientation
   */

   static watch(options?: GyroscopeOptions): Observable<Orientation> {
     return new Observable<Orientation> (
       (observer: any) => {
         let watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
         return () => navigator.gyroscope.clearWatch(watchId);
       }
       );
   }

   /**
   * Get current data from gyroscope sensor
   * @param options {GyroscopeOptions} (optional)
   * @return {Promise<Orientation>} Returns a promise that resolves Orientation
   */
   @Cordova({
     successIndex: 0,
     errorIndex: 1,
   })
   static getCurrent(options?: GyroscopeOptions): Promise<Orientation> { return; }
 }
