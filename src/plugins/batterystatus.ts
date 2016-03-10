import {Plugin} from './plugin';
import {Observable} from "rxjs/Observable";

/**
 *
 *
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * ```
 * cordova plugin add cordova-plugin-batterystatus
 * ```
 *
 * @usage
 * ```js
 *
 * BatteryStatus.onChange().subscribe(
 *  status => {
 *
 *  }
 * );
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-batterystatus'
})
export class BatteryStatus {

  /**
   * Watches the change in battery level
   * @returns {Observable} Returns an observable that pushes the new battery level
   */
  static onChange () : Observable<any> {
    return new Observable(observer => {
      let callback = (status : any) => observer.next(status);
      window.addEventListener("batterystatus", callback, false);
      return () => window.removeEventListener("batterystatus", callback, false);
    });
  }

}
