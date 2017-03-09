"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
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
var Hotspot = (function () {
    function Hotspot() {
    }
    Hotspot.isAvailable = function () { return; };
    Hotspot.toggleWifi = function () { return; };
    /**
     * Configures and starts hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @return {Promise<void>}        - Promise to call once hotspot is started, or reject upon failure
     */
    Hotspot.createHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns on Access Point
     *
     * @return {Promise<boolean>} - true if AP is started
     */
    Hotspot.startHotspot = function () { return; };
    /**
     * Configures hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @return {Promise<void>}        - Promise to call when hotspot is configured, or reject upon failure
     */
    Hotspot.configureHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns off Access Point
     *
     * @return {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
     */
    Hotspot.stopHotspot = function () { return; };
    /**
     * Checks if hotspot is enabled
     *
     * @return {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
     */
    Hotspot.isHotspotEnabled = function () { return; };
    Hotspot.getAllHotspotDevices = function () { return; };
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
    Hotspot.connectToWifi = function (ssid, password) { return; };
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
    Hotspot.connectToWifiAuthEncrypt = function (ssid, password, authentication, encryption) { return; };
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
    Hotspot.addWifiNetwork = function (ssid, mode, password) { return; };
    /**
     * Remove a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     *
     * @return {Promise<void>}
     *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.removeWifiNetwork = function (ssid) { return; };
    Hotspot.isConnectedToInternet = function () { return; };
    Hotspot.isConnectedToInternetViaWifi = function () { return; };
    Hotspot.isWifiOn = function () { return; };
    Hotspot.isWifiSupported = function () { return; };
    Hotspot.isWifiDirectSupported = function () { return; };
    Hotspot.scanWifi = function () { return; };
    Hotspot.scanWifiByLevel = function () { return; };
    Hotspot.startWifiPeriodicallyScan = function (interval, duration) { return; };
    Hotspot.stopWifiPeriodicallyScan = function () { return; };
    Hotspot.getNetConfig = function () { return; };
    Hotspot.getConnectionInfo = function () { return; };
    Hotspot.pingHost = function (ip) { return; };
    /**
     * Gets MAC Address associated with IP Address from ARP File
     *
     * @param {string}        ip  - IP Address that you want the MAC Address of
     *
     * @return {Promise<string>}  - A Promise for the MAC Address
     */
    Hotspot.getMacAddressOfHost = function (ip) { return; };
    /**
     * Checks if IP is live using DNS
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.isDnsLive = function (ip) { return; };
    /**
     * Checks if IP is live using socket And PORT
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.isPortLive = function (ip) { return; };
    /**
     * Checks if device is rooted
     *
     * @return {Promise<boolean>} - A Promise for whether the device is rooted
     */
    Hotspot.isRooted = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "toggleWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "createHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "startHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "configureHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "stopHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isHotspotEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getAllHotspotDevices", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "connectToWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "connectToWifiAuthEncrypt", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "addWifiNetwork", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "removeWifiNetwork", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isConnectedToInternet", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isConnectedToInternetViaWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiOn", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiSupported", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiDirectSupported", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "scanWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "scanWifiByLevel", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "startWifiPeriodicallyScan", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "stopWifiPeriodicallyScan", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getNetConfig", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getConnectionInfo", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "pingHost", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getMacAddressOfHost", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isDnsLive", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isPortLive", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isRooted", null);
    Hotspot = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-hotspot',
            pluginRef: 'cordova.plugins.hotspot',
            repo: 'https://github.com/hypery2k/cordova-hotspot-plugin',
            platforms: ['Android']
        })
    ], Hotspot);
    return Hotspot;
}());
exports.Hotspot = Hotspot;
//# sourceMappingURL=hotspot.js.map