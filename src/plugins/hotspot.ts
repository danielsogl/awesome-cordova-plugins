import {Plugin, Cordova} from './plugin';

/**
 * @name Hotspot
 * @description
 * @usage
 * ```js
 * import {Hotspot} from 'ionic-native';
 *
 *
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
  static toggleWifi(): Promise<any> {return; }

  @Cordova()
  static createHotspot(ssid: string, mode: string, password: string): Promise<any> {return; }

  @Cordova()
  static startHotspot(): Promise<any> {return; }

  @Cordova()
  static configureHotspot(ssid: string, mode: string, password: string): Promise<any> {return; }

  @Cordova()
  static stopHotspot(): Promise<any> {return; }

  @Cordova()
  static isHotspotEnabled(): Promise<any> {return; }

  @Cordova()
  static getAllHotspotDevices(): Promise<any> {return; }

  @Cordova()
  static connectToHotspot(ssid: string, password: string): Promise<any> {return; }

  @Cordova()
  static connectToWifiAuthEncrypt(ssid: string, password: string, authentication, encryption): Promise<any> {return; }

  @Cordova()
  static addWifiNetwork(ssid: string, mode, password): Promise<any> {return; }

  @Cordova()
  static removeWifiNetwork(ssid: string): Promise<any> {return; }

  @Cordova()
  static isConnectedToInternet(): Promise<any> {return; }

  @Cordova()
  static isConnectedToInternetViaWifi(): Promise<any> {return; }

  @Cordova()
  static isWifiOn(): Promise<any> {return; }

  @Cordova()
  static isWifiSupported(): Promise<any> {return; }

  @Cordova()
  static isWifiDirectSupported(): Promise<any> {return; }

  @Cordova()
  static scanWifi(): Promise<any> {return; }

  @Cordova()
  static scanWifiByLevel(): Promise<any> {return; }

  @Cordova()
  static startPeriodicallyScan(interval: number, duration: number): Promise<any> {return; }

  @Cordova()
  static stopPeriodicallyScan(): Promise<any> {return; }

  @Cordova()
  static getNetConfig(): Promise<any> {return; }

  @Cordova()
  static getConnectionInfo(): Promise<any> {return; }

  @Cordova()
  static pingHost(ip: string): Promise<any> {return; }

  @Cordova()
  static getMacAddressOfHost(ip: string): Promise<any> {return; }

  @Cordova()
  static isDnsLive(ip: string): Promise<any> {return; }

  @Cordova()
  static isPortLife(ip: string): Promise<any> {return; }

  @Cordova()
  static isRooted(): Promise<any> {return; }

}
