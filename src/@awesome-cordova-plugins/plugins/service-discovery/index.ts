import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name ServiceDiscovery
 * @description
 * Simple plugin to get any SSDP / UPnP / DLNA service on a local network
 * @usage
 * ```typescript
 * import { ServiceDiscovery } from '@awesome-cordova-plugins/service-discovery';
 *
 *
 * constructor(private serviceDiscovery: ServiceDiscovery) { }
 *
 * ...
 *
 *
 * this.serviceDiscovery.getNetworkServices('ssdp:all')
 *   .then(devices => console.log(devices))
 *   .catch(error => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'ServiceDiscovery',
  plugin: 'cordova-plugin-discovery',
  pluginRef: 'serviceDiscovery',
  repo: 'https://github.com/scottdermott/cordova-plugin-discovery',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class ServiceDiscovery extends AwesomeCordovaNativePlugin {
  /**
   * Finds and returns metadata about devices discovered on the network via SSDP / UPnP / DLNA
   *
   * @param service {string} The service name to discover
   * @returns {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getNetworkServices(service: string): Promise<any> {
    return;
  }
}
