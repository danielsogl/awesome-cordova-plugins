import {Plugin, Cordova} from './plugin';

/**
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [cordova-plugin-badge docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * ```
 * ionic plugin add https://github.com/katzer/cordova-plugin-badge.git
 * ````
 *
 * @usage
 * ```js
 * Badge.setBadge(10);
 * Badge.increaseBadge();
 * Badge.clearBadge();
 * ```
 */
@Plugin({
  name: 'Badge',
  plugin: 'cordova-plugin-badge',
  pluginRef: 'cordova.plugins.notification.badge'
})
export class Badge {

  /**
   * Determine permission to set badge notifications
   */
  @Cordova()
  static hasPermission () : boolean {
    return;
  }

  /**
   * Register permission to set badge notifications
   * @returns {Promise<T>}
   */
  @Cordova()
  static registerPermission () : Promise<any> {
    return new Promise((res,rej) => {});
  }

  /**
   * Sets the badge number
   * @param number
   */
  @Cordova()
  static setBadge (number : number) : void {}

  /**
   * Clears the badge number
   */
  @Cordova()
  static clearBadge () : void {}

  /**
   * Increases the badge number
   */
  @Cordova()
  static increaseBadge () : void {}

  /**
   * Decreases the badge number
   */
  @Cordova()
  static decreaseBadge () : void {}

}
