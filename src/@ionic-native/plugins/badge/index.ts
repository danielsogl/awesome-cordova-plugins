import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


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
@Plugin({
  pluginName: 'Badge',
  plugin: 'cordova-plugin-badge',
  pluginRef: 'cordova.plugins.notification.badge',
  repo: 'https://github.com/katzer/cordova-plugin-badge',
  platforms: ['Android', 'iOS', 'Browser', 'Windows', 'Amazon FireOS', 'Windows Phone 8']
})
@Injectable()
export class Badge {

  /**
   * Clear the badge of the app icon.
   * @returns {Promise<boolean>}
   */
  @Cordova()
  clear(): Promise<boolean> { return; }

  /**
   * Set the badge of the app icon.
   * @param {number} badgeNumber  The new badge number.
   * @returns {Promise<any>}
   */
  @Cordova()
  set(badgeNumber: number): Promise<any> { return; }

  /**
   * Get the badge of the app icon.
   * @returns {Promise<any>}
   */
  @Cordova()
  get(): Promise<any> { return; }

  /**
   * Increase the badge number.
   * @param {number} increaseBy  Count to add to the current badge number
   * @returns {Promise<any>}
   */
  @Cordova()
  increase(increaseBy: number): Promise<any> { return; }

  /**
   * Decrease the badge number.
   * @param {number} decreaseBy  Count to subtract from the current badge number
   * @returns {Promise<any>}
   */
  @Cordova()
  decrease(decreaseBy: number): Promise<any> { return; }

  /**
   * Determine if the app has permission to show badges.
   * @returns {Promise<any>}
   */
  @Cordova()
  hasPermission(): Promise<any> { return; }

  /**
   * Register permission to set badge notifications
   * @returns {Promise<any>}
   */
  @Cordova()
  registerPermission(): Promise<any> { return; }

}
