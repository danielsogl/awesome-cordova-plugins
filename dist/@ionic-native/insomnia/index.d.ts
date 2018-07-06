import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 *
 * @usage
 * ```typescript
 * import { Insomnia } from '@ionic-native/insomnia';
 *
 * constructor(private insomnia: Insomnia) { }
 *
 * ...
 *
 * this.insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * this.insomnia.allowSleepAgain()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 * ```
 *
 */
export declare class Insomnia extends IonicNativePlugin {
    /**
     * Keeps awake the application
     * @returns {Promise<any>}
     */
    keepAwake(): Promise<any>;
    /**
     * Allows the application to sleep again
     * @returns {Promise<any>}
     */
    allowSleepAgain(): Promise<any>;
}
