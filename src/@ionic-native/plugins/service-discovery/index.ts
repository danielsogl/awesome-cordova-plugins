import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name ServiceDiscovery
 * @description
 * Simple plugin to get any SSDP / UPnP / DLNA service on a local network
 *
 * @usage
 * ```typescript
 * import { ServiceDiscovery } from '@ionic-native/service-discovery';
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
export class ServiceDiscovery extends IonicNativePlugin {
  /**
   * Finds and returns metadata about devices discovered on the network via SSDP / UPnP / DLNA
   * @param service {string} The service name to discover
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getNetworkServices(service: string): Promise<any> {
    return;
  }
}
