import { Observable } from 'rxjs/Observable';
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
 *
   // before we determine the connection type.  Might need to wait

 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (Network.connection === 'wifi') {
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
 * The `connection` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
export declare class Network {
    /**
     * Return the network connection type
     */
    static readonly connection: string;
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    static onDisconnect(): Observable<any>;
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    static onConnect(): Observable<any>;
}
