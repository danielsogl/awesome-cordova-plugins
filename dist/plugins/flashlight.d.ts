/**
 * @name Flashlight
 * @description This plugin allows you to switch the flashlight / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Flashlight } from 'ionic-native';
 *
 *
 *
 * ```
 */
export declare class Flashlight {
    /**
     * Checks if the flashlight is available
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
     */
    static available(): Promise<boolean>;
    /**
     * Switches the flashlight on
     * @returns {Promise<boolean>}
     */
    static switchOn(): Promise<boolean>;
    /**
     * Switches the flashlight off
     * @returns {Promise<boolean>}
     */
    static switchOff(): Promise<boolean>;
    /**
     * Toggles the flashlight
     * @returns {Promise<any>}
     */
    static toggle(): Promise<any>;
    /**
     * Checks if the flashlight is turned on.
     * @returns {boolean}
     */
    static isSwitchedOn(): boolean;
}
