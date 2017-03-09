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
export declare class Hotspot {
    static isAvailable(): Promise<boolean>;
    static toggleWifi(): Promise<boolean>;
    /**
     * Configures and starts hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @return {Promise<void>}        - Promise to call once hotspot is started, or reject upon failure
     */
    static createHotspot(ssid: string, mode: string, password: string): Promise<void>;
    /**
     * Turns on Access Point
     *
     * @return {Promise<boolean>} - true if AP is started
     */
    static startHotspot(): Promise<boolean>;
    /**
     * Configures hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @return {Promise<void>}        - Promise to call when hotspot is configured, or reject upon failure
     */
    static configureHotspot(ssid: string, mode: string, password: string): Promise<void>;
    /**
     * Turns off Access Point
     *
     * @return {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
     */
    static stopHotspot(): Promise<boolean>;
    /**
     * Checks if hotspot is enabled
     *
     * @return {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
     */
    static isHotspotEnabled(): Promise<void>;
    static getAllHotspotDevices(): Promise<Array<HotspotDevice>>;
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
    static connectToWifi(ssid: string, password: string): Promise<void>;
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
    static connectToWifiAuthEncrypt(ssid: string, password: string, authentication: string, encryption: Array<string>): Promise<void>;
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
    static addWifiNetwork(ssid: string, mode: string, password: string): Promise<void>;
    /**
     * Remove a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     *
     * @return {Promise<void>}
     *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
     */
    static removeWifiNetwork(ssid: string): Promise<void>;
    static isConnectedToInternet(): Promise<boolean>;
    static isConnectedToInternetViaWifi(): Promise<boolean>;
    static isWifiOn(): Promise<boolean>;
    static isWifiSupported(): Promise<boolean>;
    static isWifiDirectSupported(): Promise<boolean>;
    static scanWifi(): Promise<Array<Network>>;
    static scanWifiByLevel(): Promise<Array<Network>>;
    static startWifiPeriodicallyScan(interval: number, duration: number): Promise<any>;
    static stopWifiPeriodicallyScan(): Promise<any>;
    static getNetConfig(): Promise<NetworkConfig>;
    static getConnectionInfo(): Promise<ConnectionInfo>;
    static pingHost(ip: string): Promise<string>;
    /**
     * Gets MAC Address associated with IP Address from ARP File
     *
     * @param {string}        ip  - IP Address that you want the MAC Address of
     *
     * @return {Promise<string>}  - A Promise for the MAC Address
     */
    static getMacAddressOfHost(ip: string): Promise<string>;
    /**
     * Checks if IP is live using DNS
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    static isDnsLive(ip: string): Promise<boolean>;
    /**
     * Checks if IP is live using socket And PORT
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    static isPortLive(ip: string): Promise<boolean>;
    /**
     * Checks if device is rooted
     *
     * @return {Promise<boolean>} - A Promise for whether the device is rooted
     */
    static isRooted(): Promise<boolean>;
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
