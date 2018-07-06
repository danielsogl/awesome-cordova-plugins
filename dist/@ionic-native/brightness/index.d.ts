import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Brightness
 * @description
 * The Brightness plugin let you control the display brightness of your device.
 *
 * Requires Cordova plugin: `cordova-plugin-brightness`. For more info, please see the [Brightness plugin docs](https://github.com/mgcrea/cordova-plugin-brightness).
 *
 * @usage
 * ```typescript
 * import { Brightness } from '@ionic-native/brightness';
 *
 * constructor(private brightness: Brightness) { }
 *
 * ...
 *
 * let brightnessValue: number = 0.8;
 * this.brightness.setBrightness(brightnessValue);
 * ```
 *
 */
export declare class Brightness extends IonicNativePlugin {
    /**
     * Sets the brightness of the display.
     *
     * @param {value} Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.
     * @returns {Promise<any>} Returns a Promise that resolves if setting brightness was successful.
     */
    setBrightness(value: number): Promise<any>;
    /**
     * Reads the current brightness of the device display.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the
     * brightness value of the device display (floating number between 0 and 1).
     */
    getBrightness(): Promise<any>;
    /**
    * Keeps the screen on. Prevents the device from setting the screen to sleep.
    */
    setKeepScreenOn(value: boolean): void;
}
