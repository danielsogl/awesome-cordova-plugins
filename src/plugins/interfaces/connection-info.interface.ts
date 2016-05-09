/**
 * @name ConnectionInfo
 */
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
