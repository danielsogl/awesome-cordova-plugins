import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Network Interface
 * @description
 * Network interface information plugin for Cordova/PhoneGap that supports Android, Blackberry 10, Browser, iOS, and Windows Phone 8.
 *
 * @usage
 * ```typescript
 * import { NetworkInterface } from '@ionic-native/network-interface';
 *
 *
 * constructor(private networkInterface: NetworkInterface) { }
 *
 * ...
 *
 * this.networkInterface.getWiFiIPAddress(function (ip) { alert(ip); });
 * this.networkInterface.getCarrierIPAddress(function (ip) { alert(ip); });
 *
 *
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
export class NetworkInterface extends IonicNativePlugin {

  @Cordova()
  getIPAddress(): Promise<string> {
    return;
  }

  /**
   * Gets the WiFi IP address
   * @param success {Function} Callback used when successful
   * @param error {Function} Callback used when failure
   */
  @Cordova()
  getWiFiIPAddress(): Promise<string> {
    return;
  }

  /**
   * Gets the wireless carrier IP address
   * @param success {Function} Callback used when successful
   * @param error {Function} Callback used when failure
   */
  @Cordova()
  getCarrierIPAddress(): Promise<string> {
    return;
  }
}
