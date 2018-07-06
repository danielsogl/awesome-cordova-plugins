import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Badge
 * @description
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * @usage
 * ```typescript
 * import { Badge } from '@ionic-native/badge';
 *
 * constructor(private badge: Badge) { }
 *
 * ...
 *
 * this.badge.set(10);
 * this.badge.increase(1);
 * this.badge.clear();
 * ```
 */
export declare class Badge extends IonicNativePlugin {
    /**
     * Clear the badge of the app icon.
     * @returns {Promise<boolean>}
     */
    clear(): Promise<boolean>;
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise<any>}
     */
    set(badgeNumber: number): Promise<any>;
    /**
     * Get the badge of the app icon.
     * @returns {Promise<any>}
     */
    get(): Promise<any>;
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise<any>}
     */
    increase(increaseBy: number): Promise<any>;
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise<any>}
     */
    decrease(decreaseBy: number): Promise<any>;
    /**
     * Determine if the app has permission to show badges.
     * @returns {Promise<any>}
     */
    hasPermission(): Promise<any>;
    /**
     * Register permission to set badge notifications
     * @returns {Promise<any>}
     */
    registerPermission(): Promise<any>;
}
