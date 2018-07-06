import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface ZeroconfService {
    domain: string;
    type: string;
    name: string;
    port: number;
    hostname: string;
    ipv4Addresses: Array<string>;
    ipv6Addresses: Array<string>;
    txtRecord: any;
}
export interface ZeroconfResult {
    action: 'registered' | 'added' | 'removed';
    service: ZeroconfService;
}
/**
 * @name Zeroconf
 * @description
 * This plugin allows you to browse and publish Zeroconf/Bonjour/mDNS services.
 * @usage
 * ```typescript
 * import { Zeroconf } from '@ionic-native/zeroconf';
 *
 * constructor(private zeroconf: Zeroconf) { }
 *
 * ...
 *
 * // watch for services of a specified type
 * this.zeroconf.watch('_http._tcp.', 'local.').subscribe(result => {
 *   if (result.action == 'added') {
 *     console.log('service added', result.service);
 *   } else {
 *     console.log('service removed', result.service);
 *   }
 * });
 *
 * // publish a zeroconf service of your own
 * this.zeroconf.register('_http._tcp.', 'local.', 'Becvert\'s iPad', 80, {
 *   'foo': 'bar'
 * }).then(result => {
 *   console.log('Service registered', result.service);
 * });
 *
 *
 * // unregister your service
 * this.zeroconf.unregister('_http._tcp.', 'local.', 'Becvert\'s iPad');
 * ```
 */
export declare class Zeroconf extends IonicNativePlugin {
    /**
     * Returns this device's hostname.
     * @return {Promise<string>}
     */
    getHostname(): Promise<string>;
    /**
     * Publishes a new service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @param port {number} Local port on which the service runs.
     * @param txtRecord {any} Arbitrary key/value pairs describing the service.
     * @return {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
     */
    register(type: string, domain: string, name: string, port: number, txtRecord: any): Promise<ZeroconfResult>;
    /**
     * Unregisters a service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @return {Promise<void>}
     */
    unregister(type: string, domain: string, name: string): Promise<void>;
    /**
     * Unregisters all published services.
     * @return {Promise<void>}
     */
    stop(): Promise<void>;
    /**
     * Starts watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
     */
    watch(type: string, domain: string): Observable<ZeroconfResult>;
    /**
     * Stops watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Promise<void>}
     */
    unwatch(type: string, domain: string): Promise<void>;
    /**
     * Closes the service browser and stops watching.
     * @return {Promise<void>}
     */
    close(): Promise<void>;
}
