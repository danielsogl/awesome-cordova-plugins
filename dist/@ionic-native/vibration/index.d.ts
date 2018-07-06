import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Vibration
 * @description Vibrates the device
 * @usage
 * ```typescript
 * import { Vibration } from '@ionic-native/vibration';
 *
 * constructor(private vibration: Vibration) { }
 *
 * ...
 *
 * // Vibrate the device for a second
 * // Duration is ignored on iOS.
 * this.vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * this.vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * this.vibration.vibrate(0);
 * ```
 */
export declare class Vibration extends IonicNativePlugin {
    /**
     * Vibrates the device for given amount of time.
     * @param time {number|Array<number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    vibrate(time: number | Array<number>): void;
}
