/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 *
 * @usage
 * ```typescript
 * import { Insomnia } from 'ionic-native';
 *
 *
 * Insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * Insomnia.allowSleepAgain()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 * ```
 *
 */
export declare class Insomnia {
    /**
     * Keeps awake the application
     * @returns {Promise}
     */
    static keepAwake(): Promise<any>;
    /**
     * Allows the application to sleep again
     * @returns {Promise}
     */
    static allowSleepAgain(): Promise<any>;
}
