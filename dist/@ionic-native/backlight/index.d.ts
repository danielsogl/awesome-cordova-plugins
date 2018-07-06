import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Backlight
 * @description
 * This plugin adds turning on/off the device backlight.
 *
 * @usage
 * ```typescript
 * import { Backlight } from '@ionic-native/backlight';
 *
 * constructor(private backlight: Backlight) { }
 *
 * ...
 *
 * // Turn backlight on
 * this.backlight.on().then(() => console.log('backlight on'));
 *
 * // Turn backlight off
 * this.backlight.off().then(() => console.log('backlight off'));
 *
 * ```
 */
export declare class Backlight extends IonicNativePlugin {
    /**
     * This function turns backlight on
     * @return {Promise<any>} Returns a promise that resolves when the backlight is on
     */
    on(): Promise<any>;
    /**
     * This function turns backlight off
     * @return {Promise<any>} Returns a promise that resolves when the backlight is off
     */
    off(): Promise<any>;
}
