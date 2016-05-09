/**
 * @name ConnectionInfo
 */
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
