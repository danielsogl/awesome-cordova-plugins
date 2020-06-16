import { Injectable } from '@angular/core';
import { Cordova, CordovaCheck, CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable, merge } from 'rxjs';

declare const navigator: any;

export enum Connection {
  UNKNOWN = 0,
  ETHERNET,
  WIFI,
  CELL_2G,
  CELL_3G,
  CELL_4G,
  CELL,
  NONE,
}

/**
 * @name Network
 * @premier network-information
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```typescript
 * import { Network } from '@ionic-native/network/ngx';
 *
 * constructor(private network: Network) { }
 *
 * ...
 *
 * // watch network for a disconnection
 * let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = this.network.onConnect().subscribe(() => {
 *   console.log('network connected!');
 *   // We just got a connection but we need to wait briefly
 *    // before we determine the connection type. Might need to wait.
 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (this.network.type === 'wifi') {
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
  pluginRef: 'navigator.connection',
  repo: 'https://github.com/apache/cordova-plugin-network-information',
  platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows'],
})
@Injectable()
export class Network extends IonicNativePlugin {
  /**
   * Constants for possible connection types
   */
  Connection = {
    UNKNOWN: 'unknown',
    ETHERNET: 'ethernet',
    WIFI: 'wifi',
    CELL_2G: '2g',
    CELL_3G: '3g',
    CELL_4G: '4g',
    CELL: 'cellular',
    NONE: 'none',
  };

  /**
   * Connection type
   * @return {string}
   */
  @CordovaProperty() type: string;

  /**
   * Downlink Max Speed
   * @return {string}
   */
  @CordovaProperty() downlinkMax: string;

  /**
   * Returns an observable to watch connection changes
   * @return {Observable<any>}
   */
  @CordovaCheck()
  onChange(): Observable<any> {
    return merge(this.onConnect(), this.onDisconnect());
  }

  /**
   * Get notified when the device goes offline
   * @returns {Observable<any>} Returns an observable.
   */
  @Cordova({
    eventObservable: true,
    event: 'offline',
    element: document,
  })
  onDisconnect(): Observable<any> {
    return;
  }

  /**
   * Get notified when the device goes online
   * @returns {Observable<any>} Returns an observable.
   */
  @Cordova({
    eventObservable: true,
    event: 'online',
    element: document,
  })
  onConnect(): Observable<any> {
    return;
  }
}
