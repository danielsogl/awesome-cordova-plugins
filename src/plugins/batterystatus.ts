import {Plugin} from './plugin';
import {Observable} from "rxjs/Observable";

/**
 * @name Battery Status
 *
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * ```
 * cordova plugin add cordova-plugin-batterystatus
 * ```
 *
 * @usage
 * ```js
 * // watch change in battery status
 * let subscription = BatteryStatus.onChange().subscribe(
 *  status => {
 *    console.log(status);
 *  }
 * );
 *
 * // stop watch
 * subscription.unsubscribe();
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-batterystatus'
})
export class BatteryStatus {

  /**
   * Watch the change in battery level
   * @returns {Observable} Returns an observable that pushes a status object
   */
  static onChange () : Observable<StatusObject> {
    return new Observable(observer => {
      let callback = (status : any) => observer.next(status);
      window.addEventListener("batterystatus", callback, false);
      return () => window.removeEventListener("batterystatus", callback, false);
    });
  }

}

interface StatusObject {
  /**
   * The battery charge percentage
   */
  level : number,

  /**
   * A boolean that indicates whether the device is plugged in
   */
  isPlugged : boolean
}