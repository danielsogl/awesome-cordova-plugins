/**
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```js
 * let info = Device.getDevice();
 * // Device sits below
 * ```
 */
export declare class Device {
    /**
     * Returns the whole device object.
     * @see https://github.com/apache/cordova-plugin-device
     * @returns {Object} The device object.
     */
    static getDevice(): any;
}
