import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Network Interface
 * @description
 * Network interface information plugin for Cordova/PhoneGap that supports Android, Blackberry 10, Browser, iOS, and Windows Phone 8.
 * @usage
 * ```typescript
 * import { NetworkInterface } from '@awesome-cordova-plugins/network-interface/ngx';
 *
 * constructor( private networkInterface: NetworkInterface ) {
 *
 *   this.networkInterface.getWiFiIPAddress()
 *     .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
 *     .catch(error => console.error(`Unable to get IP: ${error}`));
 *
 *   this.networkInterface.getCarrierIPAddress()
 *     .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
 *     .catch(error => console.error(`Unable to get IP: ${error}`));
 *
 *   const url = 'www.github.com';
 *   this.networkInterface.getHttpProxyInformation(url)
 *     .then(proxy => console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`))
 *     .catch(error => console.error(`Unable to get proxy info: ${error}`));
 * }
 * ```
 */
@Plugin({
  pluginName: 'NetworkInterface',
  plugin: 'cordova-plugin-networkinterface',
  pluginRef: 'networkinterface',
  repo: 'https://github.com/salbahra/cordova-plugin-networkinterface',
  platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Windows', 'Windows Phone'],
})
@Injectable()
export class NetworkInterface extends AwesomeCordovaNativePlugin {
  /**
   * Gets the WiFi IP address
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the IP address information.
   */
  @Cordova()
  getWiFiIPAddress(): Promise<any> {
    return;
  }

  /**
   * Gets the wireless carrier IP address
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the IP address information.
   */
  @Cordova()
  getCarrierIPAddress(): Promise<any> {
    return;
  }

  /**
   * Gets the relevant proxies for the passed URL in order of application
   *
   * @param {url} message  The message to display.
   * @param url
   * @returns {Promise<any>} Returns a Promise that resolves with the proxy information.
   */
  @Cordova()
  getHttpProxyInformation(url: string): Promise<any> {
    return;
  }
}
