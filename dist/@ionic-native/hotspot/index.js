var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
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
var Hotspot = (function (_super) {
    __extends(Hotspot, _super);
    function Hotspot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.prototype.isAvailable = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.prototype.toggleWifi = function () { return; };
    /**
     * Configures and starts hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<void>}        - Promise to call once hotspot is started, or reject upon failure
     */
    Hotspot.prototype.createHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns on Access Point
     *
     * @returns {Promise<boolean>} - true if AP is started
     */
    Hotspot.prototype.startHotspot = function () { return; };
    /**
     * Configures hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<void>}        - Promise to call when hotspot is configured, or reject upon failure
     */
    Hotspot.prototype.configureHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns off Access Point
     *
     * @returns {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
     */
    Hotspot.prototype.stopHotspot = function () { return; };
    /**
     * Checks if hotspot is enabled
     *
     * @returns {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
     */
    Hotspot.prototype.isHotspotEnabled = function () { return; };
    /**
     * @returns {Promise<Array<HotspotDevice>>}
     */
    Hotspot.prototype.getAllHotspotDevices = function () { return; };
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
    Hotspot.prototype.connectToWifi = function (ssid, password) { return; };
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
    Hotspot.prototype.connectToWifiAuthEncrypt = function (ssid, password, authentication, encryption) { return; };
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
    Hotspot.prototype.addWifiNetwork = function (ssid, mode, password) { return; };
    /**
     * Remove a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     *
     * @returns {Promise<void>}
     *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.prototype.removeWifiNetwork = function (ssid) { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.prototype.isConnectedToInternet = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.prototype.isConnectedToInternetViaWifi = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.prototype.isWifiOn = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.prototype.isWifiSupported = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.prototype.isWifiDirectSupported = function () { return; };
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    Hotspot.prototype.scanWifi = function () { return; };
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    Hotspot.prototype.scanWifiByLevel = function () { return; };
    /**
     * @returns {Promise<any>}
     */
    Hotspot.prototype.startWifiPeriodicallyScan = function (interval, duration) { return; };
    /**
     * @returns {Promise<any>}
     */
    Hotspot.prototype.stopWifiPeriodicallyScan = function () { return; };
    /**
     * @returns {Promise<HotspotNetworkConfig>}
     */
    Hotspot.prototype.getNetConfig = function () { return; };
    /**
     * @returns {Promise<HotspotConnectionInfo>}
     */
    Hotspot.prototype.getConnectionInfo = function () { return; };
    /**
     * @returns {Promise<string>}
     */
    Hotspot.prototype.pingHost = function (ip) { return; };
    /**
     * Gets MAC Address associated with IP Address from ARP File
     *
     * @param {string}        ip  - IP Address that you want the MAC Address of
     *
     * @returns {Promise<string>}  - A Promise for the MAC Address
     */
    Hotspot.prototype.getMacAddressOfHost = function (ip) { return; };
    /**
     * Checks if IP is live using DNS
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.prototype.isDnsLive = function (ip) { return; };
    /**
     * Checks if IP is live using socket And PORT
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.prototype.isPortLive = function (ip) { return; };
    /**
     * Checks if device is rooted
     *
     * @returns {Promise<boolean>} - A Promise for whether the device is rooted
     */
    Hotspot.prototype.isRooted = function () { return; };
    return Hotspot;
}(IonicNativePlugin));
Hotspot.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Hotspot.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isAvailable", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "toggleWifi", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "createHotspot", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "startHotspot", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "configureHotspot", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "stopHotspot", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isHotspotEnabled", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "getAllHotspotDevices", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "connectToWifi", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Array]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "connectToWifiAuthEncrypt", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "addWifiNetwork", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "removeWifiNetwork", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isConnectedToInternet", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isConnectedToInternetViaWifi", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isWifiOn", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isWifiSupported", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isWifiDirectSupported", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "scanWifi", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "scanWifiByLevel", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "startWifiPeriodicallyScan", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "stopWifiPeriodicallyScan", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "getNetConfig", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "getConnectionInfo", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "pingHost", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "getMacAddressOfHost", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isDnsLive", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isPortLive", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Hotspot.prototype, "isRooted", null);
Hotspot = __decorate([
    Plugin({
        pluginName: 'Hotspot',
        plugin: 'cordova-plugin-hotspot',
        pluginRef: 'cordova.plugins.hotspot',
        repo: 'https://github.com/hypery2k/cordova-hotspot-plugin',
        platforms: ['Android']
    })
], Hotspot);
export { Hotspot };
//# sourceMappingURL=index.js.map