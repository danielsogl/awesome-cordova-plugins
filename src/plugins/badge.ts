import {Plugin, Cordova} from './plugin';

/**
 * @name Badge
 * @description
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * ```shell
 * cordova plugin add cordova-plugin-badge
 * ```
 *
 * @usage
 * ```js
 * Badge.set(10);
 * Badge.increase();
 * Badge.clear();
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-badge',
  pluginRef: 'cordova.plugins.notification.badge'
})
export class Badge {

  /**
   * Clear the badge of the app icon.
   */
  @Cordova()
  static clear(): Promise<boolean> { return }

  /**
   * Set the badge of the app icon.
   * @param {number} number  The new badge number.
   * @returns {Promise}
   */
  @Cordova()
  static set(number: number): Promise<any> { return }

  /**
   * Get the badge of the app icon.
   * @returns {Promise}
   */
  @Cordova()
  static get(): Promise<any> { return }

  /**
   * Increase the badge number.
   * @param {number} count  Count to add to the current badge number
   * @returns {Promise}
   */
  @Cordova()
  static increase(number: number): Promise<any> { return }

  /**
   * Decrease the badge number.
   * @param {number} count  Count to subtract from the current badge number
   * @returns {Promise}
   */
  @Cordova()
  static decrease(number: number): Promise<any> { return }

  /**
   * Determine if the app has permission to show badges.
   */
  @Cordova()
  static hasPermission(): Promise<any> { return }

  /**
   * Register permission to set badge notifications
   * @returns {Promise}
   */
  @Cordova()
  static registerPermission(): Promise<any> { return }
}
