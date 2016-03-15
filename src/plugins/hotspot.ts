import {Plugin, Cordova} from './plugin'

/**
 * @name Hotspot
 * @description
 * @platforms Android
 * @usage
 */
@Plugin({
  plugin: 'cordova-plugin-hotspot',
  pluginRef: 'cordova.plugnis.hotspot',
  repo: 'https://github.com/hypery2k/cordova-hotspot-plugin'
})
export class Hotspot {

  @Cordova()
  static isAvailable() : Promise<boolean> {return}

  @Cordova()
  static toggleWifi() : Promise<any> {return}

  @Cordova()
  static createHotspot(ssid : string, mode : string, password : string) : Promise<any> {return}

  @Cordova()
  static startHotspot() : Promise<any> {return}

  @Cordova()
  static configureHotspot(ssid : string, mode : string, password : string) : Promise<any> {return}

  @Cordova()
  static stopHotspot() : Promise<any> {return}

  @Cordova()
  static isHotspotEnabled() : Promise<any> {return}

  @Cordova()
  static getAllHotspotDevices() : Promise<any> {return}

  @Cordova()
  static connectToHotspot(ssid, password) : Promise<any> {return}

  @Cordova()
  static connectToWifiAuthEncrypt(ssid, password, authentication, encryption) : Promise<any> {return}

  @Cordova()
  static addWifiNetwork(ssid, mode, password) : Promise<any> {return}

  @Cordova()
  static removeWifiNetwork(ssid) : Promise<any> {return}

  @Cordova()
  static isConnectedToInternet() : Promise<any> {return}

  @Cordova()
  static isConnectedToInternetViaWifi() : Promise<any> {return}

  @Cordova()
  static isWifiOn() : Promise<any> {return}

  @Cordova()
  static isWifiSupported() : Promise<any> {return}

  @Cordova()
  static isWifiDirectSupported() : Promise<any> {return}

  @Cordova()
  static scanWifi() : Promise<any> {return}

  @Cordova()
  static scanWifiByLevel() : Promise<any> {return}

  @Cordova()
  static startPeriodicallyScan(interval, duration) : Promise<any> {return}

  @Cordova()
  static stopPeriodicallyScan() : Promise<any> {return}

  @Cordova()
  static getNetConfig() : Promise<any> {return}

  @Cordova()
  static getConnectionInfo() : Promise<any> {return}

  @Cordova()
  static pingHost(ip) : Promise<any> {return}

  @Cordova()
  static getMacAddressOfHost(ip) : Promise<any> {return}

  @Cordova()
  static isDnsLive(ip) : Promise<any> {return}

  @Cordova()
  static isPortLife(ip) : Promise<any> {return}

  @Cordova()
  static isRooted() : Promise<any> {return}

}