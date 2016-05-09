/**
 * @name Network
 * @description
 *      Based on [ScanResult](http://developer.android.com/reference/android/net/wifi/ScanResult.html)
 */
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
