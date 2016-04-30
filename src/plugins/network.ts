import {Plugin, Cordova, CordovaProperty} from './plugin';
import {Observable} from 'rxjs/Observable';

declare var navigator: any;

/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```js
 * import {Network, Connection} from 'ionic-native';
 *
 * // watch network for a disconnect
 * let disconnectSubscription = Network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-( ')
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = Network.onConnect().subscribe(() => {
 *   console.log('network connected!'); *
 *   // We just got a connection but we need to wait briefly
 *    // before we determine the connection type.  Might need to wait 
 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     console.log(Network.connection);
 *     if (Network.connection === Connection.WIFI) {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-network-information',
  repo: 'https://github.com/apache/cordova-plugin-network-information',
  platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser'],
  pluginRef: 'navigator.connection'
})
export class Network {

  /**
   * Return the network connection type
   */
  @CordovaProperty
  static get connection(): Connection { return navigator.connection.type; }

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

export class Connection {
  static get UNKNOWN()  { return 'unknown'; }
  static get ETHERNET() { return 'ethernet'; }
  static get WIFI()     { return 'wifi'; }
  static get CELL_2G()  { return '2g'; }
  static get CELL_3G()  { return '3g'; }
  static get CELL_4G()  { return '4g'; }
  static get CELL()     { return 'cellular'; }
  static get NONE()     { return 'none'; }
}
