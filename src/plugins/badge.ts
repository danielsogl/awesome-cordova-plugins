import {Plugin, Cordova} from './plugin';

/**
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * ```
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
  static clear() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /**
   * Set the badge of the app icon.
   * @param {number} number  The new badge number.
   * @returns {Promise}
   */
  @Cordova()
  static set(number: number) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Get the badge of the app icon.
   * @returns {Promise}
   */
  @Cordova()
  static get() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Increase the badge number.
   * @param {number} count  Count to add to the current badge number
   * @returns {Promise}
   */
  @Cordova()
  static increase(number: number) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Decrease the badge number.
   * @param {number} count  Count to subtract from the current badge number
   * @returns {Promise}
   */
  @Cordova()
  static decrease(number: number) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Determine if the app has permission to show badges.
   */
  @Cordova()
  static hasPermission() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /**
   * Register permission to set badge notifications
   * @returns {Promise}
   */
  @Cordova()
  static registerPermission() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }
}
