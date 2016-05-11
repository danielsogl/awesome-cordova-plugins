import {Plugin, Cordova} from './plugin';

import {Network} from './types/network.type';
import {NetworkConfig} from './types/network-config.type';
import {ConnectionInfo} from './types/connection-info.type';
import {HotspotDevice} from './types/hotspot-device.type';

/**
 * @name Hotspot
 * @description
 * @usage
 * ```js
 * import {Hotspot, Network} from 'ionic-native';
 *
 * ...
 *     Hotspot.scanWifi().then((networks: Array<Network>) => {
 *         console.log(networks);
 *     });
 * ...
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
  static isAvailable(): Promise<boolean> {return; }

  @Cordova()
  static toggleWifi(): Promise<boolean> {return; }

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
  static createHotspot(ssid: string, mode: string, password: string): Promise<void> {return; }

  /**
   * Turns on Access Point
   *
   * @return {Promise<boolean>} - true if AP is started
   */
  @Cordova()
  static startHotspot(): Promise<boolean> {return; }

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
  static configureHotspot(ssid: string, mode: string, password: string): Promise<void> {return; }

  /**
   * Turns off Access Point
   *
   * @return {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
   */
  @Cordova()
  static stopHotspot(): Promise<boolean> {return; }

  /**
   * Checks if hotspot is enabled
   *
   * @return {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
   */
  @Cordova()
  static isHotspotEnabled(): Promise<void> {return; }

  @Cordova()
  static getAllHotspotDevices(): Promise<Array<HotspotDevice>> {return; }

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
  static connectToWifi(ssid: string, password: string): Promise<void> {return; }

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
  static connectToWifiAuthEncrypt(ssid: string, password: string, authentication: string, encryption: Array<string>): Promise<void> {return; }

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
  static addWifiNetwork(ssid: string, mode: string, password: string): Promise<void> {return; }

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
  static removeWifiNetwork(ssid: string): Promise<void> {return; }

  @Cordova()
  static isConnectedToInternet(): Promise<boolean> {return; }

  @Cordova()
  static isConnectedToInternetViaWifi(): Promise<boolean> {return; }

  @Cordova()
  static isWifiOn(): Promise<boolean> {return; }

  @Cordova()
  static isWifiSupported(): Promise<boolean> {return; }

  @Cordova()
  static isWifiDirectSupported(): Promise<boolean> {return; }

  @Cordova()
  static scanWifi(): Promise<Array<Network>> {return; }

  @Cordova()
  static scanWifiByLevel(): Promise<Array<Network>> {return; }

  @Cordova()
  static startWifiPeriodicallyScan(interval: number, duration: number): Promise<any> {return; }

  @Cordova()
  static stopWifiPeriodicallyScan(): Promise<any> {return; }

  @Cordova()
  static getNetConfig(): Promise<NetworkConfig> {return; }

  @Cordova()
  static getConnectionInfo(): Promise<ConnectionInfo> {return; }

  @Cordova()
  static pingHost(ip: string): Promise<string> {return; }

  /**
   * Gets MAC Address associated with IP Address from ARP File
   *
   * @param {string}        ip  - IP Address that you want the MAC Address of
   *
   * @return {Promise<string>}  - A Promise for the MAC Address
   */
  @Cordova()
  static getMacAddressOfHost(ip: string): Promise<string> {return; }

  /**
   * Checks if IP is live using DNS
   *
   * @param {string}        ip  - IP Address you want to test
   *
   * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
   */
  @Cordova()
  static isDnsLive(ip: string): Promise<boolean> {return; }

  /**
   * Checks if IP is live using socket And PORT
   *
   * @param {string}        ip  - IP Address you want to test
   *
   * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
   */
  @Cordova()
  static isPortLive(ip: string): Promise<boolean> {return; }

  /**
   * Checks if device is rooted
   *
   * @return {Promise<boolean>} - A Promise for whether the device is rooted
   */
  @Cordova()
  static isRooted(): Promise<boolean> {return; }

}
