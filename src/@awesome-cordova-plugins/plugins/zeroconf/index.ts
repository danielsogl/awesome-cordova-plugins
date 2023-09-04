import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface ZeroconfService {
  domain: string;
  type: string;
  name: string;
  port: number;
  hostname: string;
  ipv4Addresses: string[];
  ipv6Addresses: string[];
  txtRecord: any;
}

export interface ZeroconfResult {
  action: 'registered' | 'added' | 'removed' | 'resolved';
  service: ZeroconfService;
}

/**
 * @name Zeroconf
 * @description
 * This plugin allows you to browse and publish Zeroconf/Bonjour/mDNS services.
 * @usage
 * ```typescript
 * import { Zeroconf } from '@awesome-cordova-plugins/zeroconf/ngx';
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
  repo: 'https://github.com/becvert/cordova-plugin-zeroconf',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Zeroconf extends AwesomeCordovaNativePlugin {
  /**
   * Returns this device's hostname.
   *
   * @returns {Promise<string>}
   */
  @Cordova()
  getHostname(): Promise<string> {
    return;
  }

  /**
   * Publishes a new service.
   *
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @param name {string} Unqualified service instance name.
   * @param port {number} Local port on which the service runs.
   * @param txtRecord {any} Arbitrary key/value pairs describing the service.
   * @returns {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
   */
  @Cordova()
  register(type: string, domain: string, name: string, port: number, txtRecord: any): Promise<ZeroconfResult> {
    return;
  }

  /**
   * Unregisters a service.
   *
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @param name {string} Unqualified service instance name.
   * @returns {Promise<void>}
   */
  @Cordova()
  unregister(type: string, domain: string, name: string): Promise<void> {
    return;
  }

  /**
   * Unregisters all published services.
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  stop(): Promise<void> {
    return;
  }

  /**
   * Starts watching for services of the specified type.
   *
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @returns {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
   */
  @Cordova({
    observable: true,
    clearFunction: 'unwatch',
    clearWithArgs: true,
  })
  watch(type: string, domain: string): Observable<ZeroconfResult> {
    return;
  }

  /**
   * Stops watching for services of the specified type.
   *
   * @param type {string} Service type name, e.g. "_http._tcp".
   * @param domain {string} Domain scope of the service, typically "local.".
   * @returns {Promise<void>}
   */
  @Cordova()
  unwatch(type: string, domain: string): Promise<void> {
    return;
  }

  /**
   * Closes the service browser and stops watching.
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  close(): Promise<void> {
    return;
  }

  /**
   * Re-initializes the plugin to clean service & browser state.
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  reInit(): Promise<void> {
    return;
  }
  /**
   * Family of addresses to register: ipv4, ipv6 or any.
   */
  registerAddressFamily: 'ipv4' | 'ipv6' | 'any';
  /**
   * Family of addresses to watch for: ipv4, ipv6 or any.
   */
  watchAddressFamily: 'ipv4' | 'ipv6' | 'any';
}
