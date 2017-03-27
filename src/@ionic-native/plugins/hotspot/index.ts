import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

export interface HotspotConnectionInfo {

  /**
   *      The service set identifier (SSID) of the current 802.11 network.
   */
  SSID: string;

  /**
   *      The basic service set identifier (BSSID) of the current access point.
   */
  BSSID: string;

  /**
   *      The current link speed in Mbps
   */
  linkSpeed: string;

  /**
   *      The IP Address
   */
  IPAddress: string;

  /**
   *      Each configured network has a unique small integer ID, used to identify the network when performing operations on the supplicant.
   */
  networkID: string;

}

export interface HotspotNetwork {

  /**
   *      Human readable network name
   */
  SSID: string;

  /**
   *      MAC Address of the access point
   */
  BSSID: string;

  /**
   *      The primary 20 MHz frequency (in MHz) of the channel over which the client is communicating with the access point.
   */
  frequency: number;

  /**
   *      The detected signal level in dBm, also known as the RSSI.
   */
  level: number;

  /**
   *      Timestamp in microseconds (since boot) when this result was last seen.
   */
  timestamp: number;

  /**
   *      Describes the authentication, key management, and encryption schemes supported by the access point.
   */
  capabilities: string;

}
export interface HotspotNetworkConfig {

  /**
   *   Device IP Address
   */
  deviceIPAddress: string;

  /**
   *   Device MAC Address
   */
  deviceMacAddress: string;

  /**
   *   Gateway IP Address
   */
  gatewayIPAddress: string;

  /**
   *   Gateway MAC Address
   */
  gatewayMacAddress: string;

}

export interface HotspotDevice {

  /**
   *      Hotspot IP Address
   */
  ip: string;

  /**
   *      Hotspot MAC Address
   */
  mac: string;

}

/**
 * @beta
 * @name Hotspot
 * @description
 * @usage
 * ```typescript
 * import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
 *
 * constructor(private hotspot: Hotspot) { }
 *
 * ...
 *
 *
 * this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
 *     console.log(networks);
 * });
 *
 * ```
 * @interfaces
 * HotspotConnectionInfo
 * HotspotNetwork
 * HotspotNetworkConfig
 * HotspotDevice
 */
@Plugin({
  pluginName: 'Hotspot',
  plugin: 'cordova-plugin-hotspot',
  pluginRef: 'cordova.plugins.hotspot',
  repo: 'https://github.com/hypery2k/cordova-hotspot-plugin',
  platforms: ['Android']
})
@Injectable()
export class Hotspot {

  /**
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isAvailable(): Promise<boolean> { return; }

  /**
   * @returns {Promise<boolean>}
   */
  @Cordova()
  toggleWifi(): Promise<boolean> { return; }

  /**
   * Configures and starts hotspot with SSID and Password
   *
   * @param {string}    SSID        - SSID of your new Access Point
   * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
   * @param {string}    password    - password for your new Access Point
   *
   * @returns {Promise<void>}        - Promise to call once hotspot is started, or reject upon failure
   */
  @Cordova()
  createHotspot(ssid: string, mode: string, password: string): Promise<void> { return; }

  /**
   * Turns on Access Point
   *
   * @returns {Promise<boolean>} - true if AP is started
   */
  @Cordova()
  startHotspot(): Promise<boolean> { return; }

  /**
   * Configures hotspot with SSID and Password
   *
   * @param {string}    SSID        - SSID of your new Access Point
   * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
   * @param {string}    password    - password for your new Access Point
   *
   * @returns {Promise<void>}        - Promise to call when hotspot is configured, or reject upon failure
   */
  @Cordova()
  configureHotspot(ssid: string, mode: string, password: string): Promise<void> { return; }

  /**
   * Turns off Access Point
   *
   * @returns {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
   */
  @Cordova()
  stopHotspot(): Promise<boolean> { return; }

  /**
   * Checks if hotspot is enabled
   *
   * @returns {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
   */
  @Cordova()
  isHotspotEnabled(): Promise<void> { return; }

  /**
   * @returns {Promise<Array<HotspotDevice>>}
   */
  @Cordova()
  getAllHotspotDevices(): Promise<Array<HotspotDevice>> { return; }

  /**
   * Connect to a WiFi network
   *
   * @param {string}    ssid
   *      SSID to connect
   * @param {string}    password
   *      password to use
   *
   * @returns {Promise<void>}
   *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  connectToWifi(ssid: string, password: string): Promise<void> { return; }

  /**
   * Connect to a WiFi network
   *
   * @param {string}   ssid
   *      SSID to connect
   * @param {string}   password
   *      Password to use
   * @param {string}   authentication
   *      Authentication modes to use (LEAP, SHARED, OPEN)
   * @param {string[]} encryption
   *      Encryption modes to use (CCMP, TKIP, WEP104, WEP40)
   *
   * @returns {Promise<void>}
   *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  connectToWifiAuthEncrypt(ssid: string, password: string, authentication: string, encryption: Array<string>): Promise<void> { return; }

  /**
   * Add a WiFi network
   *
   * @param {string}    ssid
   *      SSID of network
   * @param {string}    mode
   *      Authentication mode of (Open, WEP, WPA, WPA_PSK)
   * @param {string}    password
   *      Password for network
   *
   * @returns {Promise<void>}
   *      Promise that adding the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  addWifiNetwork(ssid: string, mode: string, password: string): Promise<void> { return; }

  /**
   * Remove a WiFi network
   *
   * @param {string}    ssid
   *      SSID of network
   *
   * @returns {Promise<void>}
   *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  removeWifiNetwork(ssid: string): Promise<void> { return; }

  /**
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isConnectedToInternet(): Promise<boolean> { return; }

  /**
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isConnectedToInternetViaWifi(): Promise<boolean> { return; }

  /**
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isWifiOn(): Promise<boolean> { return; }

  /**
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isWifiSupported(): Promise<boolean> { return; }

  /**
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isWifiDirectSupported(): Promise<boolean> { return; }

  /**
   * @returns {Promise<Array<HotspotNetwork>>}
   */
  @Cordova()
  scanWifi(): Promise<Array<HotspotNetwork>> { return; }

  /**
   * @returns {Promise<Array<HotspotNetwork>>}
   */
  @Cordova()
  scanWifiByLevel(): Promise<Array<HotspotNetwork>> { return; }

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  startWifiPeriodicallyScan(interval: number, duration: number): Promise<any> { return; }

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  stopWifiPeriodicallyScan(): Promise<any> { return; }

  /**
   * @returns {Promise<HotspotNetworkConfig>}
   */
  @Cordova()
  getNetConfig(): Promise<HotspotNetworkConfig> { return; }

  /**
   * @returns {Promise<HotspotConnectionInfo>}
   */
  @Cordova()
  getConnectionInfo(): Promise<HotspotConnectionInfo> { return; }

  /**
   * @returns {Promise<string>}
   */
  @Cordova()
  pingHost(ip: string): Promise<string> { return; }

  /**
   * Gets MAC Address associated with IP Address from ARP File
   *
   * @param {string}        ip  - IP Address that you want the MAC Address of
   *
   * @returns {Promise<string>}  - A Promise for the MAC Address
   */
  @Cordova()
  getMacAddressOfHost(ip: string): Promise<string> { return; }

  /**
   * Checks if IP is live using DNS
   *
   * @param {string}        ip  - IP Address you want to test
   *
   * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
   */
  @Cordova()
  isDnsLive(ip: string): Promise<boolean> { return; }

  /**
   * Checks if IP is live using socket And PORT
   *
   * @param {string}        ip  - IP Address you want to test
   *
   * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
   */
  @Cordova()
  isPortLive(ip: string): Promise<boolean> { return; }

  /**
   * Checks if device is rooted
   *
   * @returns {Promise<boolean>} - A Promise for whether the device is rooted
   */
  @Cordova()
  isRooted(): Promise<boolean> { return; }

}
