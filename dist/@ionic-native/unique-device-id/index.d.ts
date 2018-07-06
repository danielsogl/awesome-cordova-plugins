import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Unique Device ID
 * @description
 * This plugin produces a unique, cross-install, app-specific device id.
 *
 * @usage
 * ```typescript
 * import { UniqueDeviceID } from '@ionic-native/unique-device-id';
 *
 * constructor(private uniqueDeviceID: UniqueDeviceID) { }
 *
 * ...
 *
 * this.uniqueDeviceID.get()
 *   .then((uuid: any) => console.log(uuid))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
export declare class UniqueDeviceID extends IonicNativePlugin {
    /**
     * Gets a unique, cross-install, app-specific device id.
     * @return {Promise<string>} Returns a promise that resolves when something happens
     */
    get(): Promise<string>;
}
