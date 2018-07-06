import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Flashlight
 * @description This plugin allows you to switch the flashlight / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Flashlight } from '@ionic-native/flashlight';
 *
 * constructor(private flashlight: Flashlight) { }
 *
 * ...
 *
 * this.flashlight.switchOn();
 *
 * ```
 */
export declare class Flashlight extends IonicNativePlugin {
    /**
     * Checks if the flashlight is available
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
     */
    available(): Promise<boolean>;
    /**
     * Switches the flashlight on
     * @returns {Promise<boolean>}
     */
    switchOn(): Promise<boolean>;
    /**
     * Switches the flashlight off
     * @returns {Promise<boolean>}
     */
    switchOff(): Promise<boolean>;
    /**
     * Toggles the flashlight
     * @returns {Promise<any>}
     */
    toggle(): Promise<any>;
    /**
     * Checks if the flashlight is turned on.
     * @returns {boolean}
     */
    isSwitchedOn(): boolean;
}
