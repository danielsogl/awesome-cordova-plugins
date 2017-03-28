import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';
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
@Plugin({
  pluginName: 'Zeroconf',
  plugin: 'cordova-plugin-zeroconf',
  pluginRef: 'cordova.plugins.zeroconf',
  repo: 'https://github.com/becvert/cordova-plugin-zeroconf'
})
@Injectable()
export class Zeroconf {
  /**
   * Returns this device's hostname.
   * @return {Promise<string>}
   */
  @Cordova()
  getHostname(): Promise<string> { return; }

  /**
   * Publishes a new service.
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @param name {string} Unqualified service instance name.
   * @param port {number} Local port on which the service runs.
   * @param txtRecord {any} Arbitrary key/value pairs describing the service.
   * @return {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
   */
  @Cordova()
  register(type: string, domain: string, name: string, port: number, txtRecord: any): Promise<ZeroconfResult> { return; }

  /**
   * Unregisters a service.
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @param name {string} Unqualified service instance name.
   * @return {Promise<void>}
   */
  @Cordova()
  unregister(type: string, domain: string, name: string): Promise<void> { return; }

  /**
   * Unregisters all published services.
   * @return {Promise<void>}
   */
  @Cordova()
  stop(): Promise<void> { return; }

  /**
   * Starts watching for services of the specified type.
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @return {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
   */
  @Cordova({
    observable: true,
    clearFunction: 'unwatch',
    clearWithArgs: true
  })
  watch(type: string, domain: string): Observable<ZeroconfResult> { return; }

  /**
   * Stops watching for services of the specified type.
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @return {Promise<void>}
   */
  @Cordova()
  unwatch(type: string, domain: string): Promise<void> { return; }

  /**
   * Closes the service browser and stops watching.
   * @return {Promise<void>}
   */
  @Cordova()
  close(): Promise<void> { return; }
}
