import { Plugin, Cordova} from './plugin';
import { Observable } from 'rxjs/Observable';

declare var navigator: any;

/**
 *  Interface that represent output data
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
 *  Interface that represent option data
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
 * import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from 'ionic-native';
 *
 *
 * let options: GyroscopeOptions = {
 *    frequency: 1000
 * };
 *
 * Gyroscope.getCurrent(options)
 *   .then((orientation: GyroscopeOrientation) => {
 *      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
 *    })
 *   .catch()
 *
 *
 * Gyroscope.watch()
 *    .subscribe((orientation: GyroscopeOrientation) => {
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
   * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
   */
   static watch(options?: GyroscopeOptions): Observable<GyroscopeOrientation> {
     return new Observable<GyroscopeOrientation> (
       (observer: any) => {
         let watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
         return () => navigator.gyroscope.clearWatch(watchId);
       }
     );
   }

   /**
   * Get current data from gyroscope sensor
   * @param options {GyroscopeOptions} (optional)
   * @return {Promise<GyroscopeOrientation>} Returns a promise that resolves GyroscopeOrientation
   */
   @Cordova({
     callbackOrder: 'reverse'
   })
   static getCurrent(options?: GyroscopeOptions): Promise<GyroscopeOrientation> { return; }
 }
