import { Cordova, Plugin } from './plugin';

/**
 * @name Hotspot
 * @description
 * @usage
 * ```typescript
 * import { Hotspot, Network } from 'ionic-native';
 *
 *
 * Hotspot.scanWifi().then((networks: Array<Network>) => {
 *     console.log(networks);
 * });
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-hotspot',
  pluginRef: 'cordova.plugins.hotspot',
  repo: 'https://github.com/hypery2k/cordova-hotspot-plugin',
  platforms: ['Android']
})
export class Hotspot {

  @Cordova()
  static isAvailable(): Promise<boolean> { return; }

  @Cordova()
  static toggleWifi(): Promise<boolean> { return; }

  /**
   * Configures and starts hotspot with SSID and Password
   *
   * @param {string}    SSID        - SSID of your new Access Point
   * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
   * @param {string}    password    - password for your new Access Point
   *
   * @return {Promise<void>}        - Promise to call once hotspot is started, or reject upon failure
   */
  @Cordova()
  static createHotspot(ssid: string, mode: string, password: string): Promise<void> { return; }

  /**
   * Turns on Access Point
   *
   * @return {Promise<boolean>} - true if AP is started
   */
  @Cordova()
  static startHotspot(): Promise<boolean> { return; }

  /**
   * Configures hotspot with SSID and Password
   *
   * @param {string}    SSID        - SSID of your new Access Point
   * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
   * @param {string}    password    - password for your new Access Point
   *
   * @return {Promise<void>}        - Promise to call when hotspot is configured, or reject upon failure
   */
  @Cordova()
  static configureHotspot(ssid: string, mode: string, password: string): Promise<void> { return; }

  /**
   * Turns off Access Point
   *
   * @return {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
   */
  @Cordova()
  static stopHotspot(): Promise<boolean> { return; }

  /**
   * Checks if hotspot is enabled
   *
   * @return {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
   */
  @Cordova()
  static isHotspotEnabled(): Promise<void> { return; }

  @Cordova()
  static getAllHotspotDevices(): Promise<Array<HotspotDevice>> { return; }

  /**
   * Connect to a WiFi network
   *
   * @param {string}    ssid
   *      SSID to connect
   * @param {string}    password
   *      password to use
   *
   * @return {Promise<void>}
   *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  static connectToWifi(ssid: string, password: string): Promise<void> { return; }

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
   * @return {Promise<void>}
   *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  static connectToWifiAuthEncrypt(ssid: string, password: string, authentication: string, encryption: Array<string>): Promise<void> { return; }

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
   * @return {Promise<void>}
   *      Promise that adding the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  static addWifiNetwork(ssid: string, mode: string, password: string): Promise<void> { return; }

  /**
   * Remove a WiFi network
   *
   * @param {string}    ssid
   *      SSID of network
   *
   * @return {Promise<void>}
   *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
   */
  @Cordova()
  static removeWifiNetwork(ssid: string): Promise<void> { return; }

  @Cordova()
  static isConnectedToInternet(): Promise<boolean> { return; }

  @Cordova()
  static isConnectedToInternetViaWifi(): Promise<boolean> { return; }

  @Cordova()
  static isWifiOn(): Promise<boolean> { return; }

  @Cordova()
  static isWifiSupported(): Promise<boolean> { return; }

  @Cordova()
  static isWifiDirectSupported(): Promise<boolean> { return; }

  @Cordova()
  static scanWifi(): Promise<Array<Network>> { return; }

  @Cordova()
  static scanWifiByLevel(): Promise<Array<Network>> { return; }

  @Cordova()
  static startWifiPeriodicallyScan(interval: number, duration: number): Promise<any> { return; }

  @Cordova()
  static stopWifiPeriodicallyScan(): Promise<any> { return; }

  @Cordova()
  static getNetConfig(): Promise<NetworkConfig> { return; }

  @Cordova()
  static getConnectionInfo(): Promise<ConnectionInfo> { return; }

  @Cordova()
  static pingHost(ip: string): Promise<string> { return; }

  /**
   * Gets MAC Address associated with IP Address from ARP File
   *
   * @param {string}        ip  - IP Address that you want the MAC Address of
   *
   * @return {Promise<string>}  - A Promise for the MAC Address
   */
  @Cordova()
  static getMacAddressOfHost(ip: string): Promise<string> { return; }

  /**
   * Checks if IP is live using DNS
   *
   * @param {string}        ip  - IP Address you want to test
   *
   * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
   */
  @Cordova()
  static isDnsLive(ip: string): Promise<boolean> { return; }

  /**
   * Checks if IP is live using socket And PORT
   *
   * @param {string}        ip  - IP Address you want to test
   *
   * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
   */
  @Cordova()
  static isPortLive(ip: string): Promise<boolean> { return; }

  /**
   * Checks if device is rooted
   *
   * @return {Promise<boolean>} - A Promise for whether the device is rooted
   */
  @Cordova()
  static isRooted(): Promise<boolean> { return; }

}

export interface ConnectionInfo {
  /**
   * @property {string}   SSID
   *      The service set identifier (SSID) of the current 802.11 network.
   */
  SSID: string;
  /**
   * @property {string}   BSSID
   *      The basic service set identifier (BSSID) of the current access point.
   */
  BSSID: string;
  /**
   * @property {string}   linkSpeed
   *      The current link speed in Mbps
   */
  linkSpeed: string;
  /**
   * @property {string}   IPAddress
   *      The IP Address
   */
  IPAddress: string;
  /**
   * @property {string}   networkID
   *      Each configured network has a unique small integer ID, used to identify the network when performing operations on the supplicant.
   */
  networkID: string;
}

export interface Network {
  /**
   * @property {string}       SSID
   *      Human readable network name
   */
  SSID: string;
  /**
   * @property {string}       BSSID
   *      MAC Address of the access point
   */
  BSSID: string;
  /**
   * @property {number (int)} frequency
   *      The primary 20 MHz frequency (in MHz) of the channel over which the client is communicating with the access point.
   */
  frequency: number;
  /**
   * @property {number}       level
   *      The detected signal level in dBm, also known as the RSSI.
   */
  level: number;
  /**
   * @property {number}       timestamp
   *      Timestamp in microseconds (since boot) when this result was last seen.
   */
  timestamp: number;
  /**
   * @property {string}       capabilities
   *      Describes the authentication, key management, and encryption schemes supported by the access point.
   */
  capabilities: string;
}
export interface NetworkConfig {
  /**
   * @property {string}   deviceIPAddress - Device IP Address
   */
  deviceIPAddress: string;
  /**
   * @property {string}   deviceMacAddress - Device MAC Address
   */
  deviceMacAddress: string;
  /**
   * @property {string}   gatewayIPAddress - Gateway IP Address
   */
  gatewayIPAddress: string;
  /**
   * @property {string}   gatewayMacAddress - Gateway MAC Address
   */
  gatewayMacAddress: string;
}
export interface HotspotDevice {
  /**
   * @property {string}   ip
   *      Hotspot IP Address
   */
  ip: string;
  /**
   * @property {string}   mac
   *      Hotspot MAC Address
   */
  mac: string;
}
