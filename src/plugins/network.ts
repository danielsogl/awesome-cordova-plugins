import {Cordova, CordovaProperty, Plugin, CordovaFunctionOverride} from './plugin';
import { Observable } from 'rxjs/Observable';


declare var navigator: any;

/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```typescript
 * import { Network } from 'ionic-native';
 *
 * // watch network for a disconnect
 * let disconnectSubscription = Network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = Network.onConnect().subscribe(() => {
 *   console.log('network connected!'); 
 *   // We just got a connection but we need to wait briefly
 *    // before we determine the connection type.  Might need to wait 
 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (Network.type === 'wifi') {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 * @advanced
 * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
@Plugin({
  pluginName: 'Network',
  plugin: 'cordova-plugin-network-information',
  repo: 'https://github.com/apache/cordova-plugin-network-information',
  platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser'],
  pluginRef: 'navigator.connection'
})
export class Network {

  /**
   * Connection type
   * @return {string}
   */
  @CordovaProperty
  static type: string;

  /**
   * Downlink Max Speed
   * @return {string}
   */
  @CordovaProperty
  static downlinkMax: string;

  /**
   * Returns an observable to watch connection changes
   * @return {Observable<any>}
   */
  @CordovaFunctionOverride()
  static onchange(): Observable<any> { return; }

  /**
   * Returns an observable to watch connection type changes
   * @return {Observable<any>}
   */
  @CordovaFunctionOverride()
  static ontypechange(): Observable<any> { return; }

  /**
   * Get notified when the device goes offline
   * @returns {Observable<any>} Returns an observable.
   */
  @Cordova({
    eventObservable: true,
    event: 'offline'
  })
  static onDisconnect(): Observable<any> { return; }

  /**
   * Get notified when the device goes online
   * @returns {Observable<any>} Returns an observable.
   */
  @Cordova({
    eventObservable: true,
    event: 'online'
  })
  static onConnect(): Observable<any> { return; }

}
