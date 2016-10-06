/**
 * @name Badge
 * @description
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * @usage
 * ```typescript
 * import { Badge } from 'ionic-native';
 *
 *
 * Badge.set(10);
 * Badge.increase();
 * Badge.clear();
 * ```
 */
export declare class Badge {
    /**
     * Clear the badge of the app icon.
     */
    static clear(): Promise<boolean>;
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise}
     */
    static set(badgeNumber: number): Promise<any>;
    /**
     * Get the badge of the app icon.
     * @returns {Promise}
     */
    static get(): Promise<any>;
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise}
     */
    static increase(increaseBy: number): Promise<any>;
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise}
     */
    static decrease(decreaseBy: number): Promise<any>;
    /**
     * Determine if the app has permission to show badges.
     */
    static hasPermission(): Promise<any>;
    /**
     * Register permission to set badge notifications
     * @returns {Promise}
     */
    static registerPermission(): Promise<any>;
}
