import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

export interface BatteryStatusResponse {

  /**
   * The battery charge percentage
   */
  level: number;

  /**
   * A boolean that indicates whether the device is plugged in
   */
  isPlugged: boolean;

}

/**
 * @name Battery Status
 * @description
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * @usage
 * ```typescript
 * import { BatteryStatus } from 'ionic-native';
 *
 *
 * // watch change in battery status
 * let subscription = BatteryStatus.onChange().subscribe(
 *  (status: StatusObject) => {
 *    console.log(status.level, status.isPlugged);
 *  }
 * );
 *
 * // stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * BatteryStatusResponse
 */
@Plugin({
  pluginName: 'BatteryStatus',
  plugin: 'cordova-plugin-battery-status',
  pluginRef: 'navigator.battery',
  repo: 'https://github.com/apache/cordova-plugin-battery-status',
  platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser']
})
export class BatteryStatus {

  /**
   * Watch the change in battery level
   * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
   */
  @Cordova({
    eventObservable: true,
    event: 'batterystatus'
  })
  static onChange(): Observable<BatteryStatusResponse> { return; }

  /**
   * Watch when the battery level goes low
   * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
   */
  @Cordova({
    eventObservable: true,
    event: 'batterylow'
  })
  static onLow(): Observable<BatteryStatusResponse> { return; }

  /**
   * Watch when the battery level goes to critial
   * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
   */
  @Cordova({
    eventObservable: true,
    event: 'batterycritical'
  })
  static onCritical(): Observable<BatteryStatusResponse> { return; }

}
