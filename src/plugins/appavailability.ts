import {Plugin, Cordova} from './plugin';

/**
 * Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the [AppAvailability plugin docs](https://github.com/ohh2ahh/AppAvailability).
 *
 * ```
 * cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
 * ```
 *
 * @usage
 * ```js
 * ```
 */
@Plugin({
  plugin: 'https://github.com/ohh2ahh/AppAvailability.git',
  pluginRef: 'appAvailability'
})
export class AppAvailability {

  /**
   * Checks if an app is available on device
   * @param app Package name on android, or URI scheme on iOS
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static check(app : string) : Promise<any> {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

}
