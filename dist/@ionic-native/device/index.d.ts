import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```typescript
 * import { Device } from '@ionic-native/device';
 *
 * constructor(private device: Device) { }
 *
 * ...
 *
 * console.log('Device UUID is: ' + this.device.uuid);
 * ```
 */
export declare class Device extends IonicNativePlugin {
    /** Get the version of Cordova running on the device. */
    cordova: string;
    /**
     * The device.model returns the name of the device's model or product. The value is set
     * by the device manufacturer and may be different across versions of the same product.
     */
    model: string;
    /** Get the device's operating system name. */
    platform: string;
    /** Get the device's Universally Unique Identifier (UUID). */
    uuid: string;
    /** Get the operating system version. */
    version: string;
    /** Get the device's manufacturer. */
    manufacturer: string;
    /** Whether the device is running on a simulator. */
    isVirtual: boolean;
    /** Get the device hardware serial number. */
    serial: string;
}
