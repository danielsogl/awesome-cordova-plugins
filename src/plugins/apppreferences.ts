import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * @name AppPreferences
 * @description
 * This plugin allows you to read and write app preferences
 *
 * @usage
 * ```
 * import { AppPreferences } from 'ionic-native';
 *
 * AppPreferences.fetch(prefsRead, prefsErr, 'key');
 *
 * prefsRead(value) {
 *   console.log(value);
 * }
 *
 * prefsErr(error) {
 *   console.log(error);
 * }
 *
 */
@Plugin({
  pluginName: 'AppPreferences',
  plugin: 'cordova-plugin-app-preferences', // npm package name, example: cordova-plugin-camera
  pluginRef: 'plugins.appPreferences', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/apla/me.apla.cordova.app-preferences', // the github repository URL for the plugin
})
export class AppPreferences {

  /**
   * Get a preference value
   *
   * @param {Function} successCallback The function to call when the value is available
   * @param {Function} errorCallback The function to call when value is unavailable
   * @param {string} dict Dictionary for key
   * @param {string} key Key
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static fetch(successCallback: Function, errorCallback: Function, dict: string, key?: string): Promise<any> { return; }

  /**
   * Set a preference value
   *
   * @param {Function} successCallback The function to call when the value is set successfully
   * @param {Function} errorCallback The function to call when value is not set
   * @param {string} dict Dictionary for key
   * @param {string} key Key
   * @param {string} value Value
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static store(successCallback: Function, errorCallback: Function, dict: string, key: string, value?: string): Promise<any> {
    return;
  }

  /**
   * Remove value from preferences
   *
   * @param {Function} successCallback The function to call when the value is available
   * @param {Function} errorCallback The function to call when value is unavailable
   * @param {string} dict Dictionary for key
   * @param {string} key Key
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static remove(successCallback: Function, errorCallback: Function, dict: string, key?: string): Promise<any> { return; }

  /**
   * Clear preferences
   *
   * @param {Function} successCallback The function to call when the value is available
   * @param {Function} errorCallback The function to call when value is unavailable
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static clearAll(successCallback: Function, errorCallback: Function): Promise<any> { return; }

  /**
   * Show native preferences interface
   *
   * @param {Function} successCallback The function to call when the value is available
   * @param {Function} errorCallback The function to call when value is unavailable
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static show(successCallback: Function, errorCallback: Function): Promise<any> { return; }

  /**
   * Show native preferences interface
   *
   * @param {Function} successCallback The function to call when the value is available
   * @param {Function} errorCallback The function to call when value is unavailable
   * @param {boolean} subscribe true value to subscribe, false - unsubscribe
   * @return {Observable<any>} Returns an observable
   */
  @Cordova({
    observable: true
  })
  static watch(successCallback: Function, errorCallback: Function, subscribe: boolean): Observable<any> { return; }

  /**
   * Return named configuration context
   * In iOS you'll get a suite configuration, on Android — named file
   * Supports: Android, iOS
   * @param {string} suiteName suite name
   * @returns {Object} Custom object, bound to that suite
   */
  @Cordova({
    platforms: ['Android']
  })
  static suite(suiteName: string): Object { return; }

  @Cordova({
    platforms: ['iOS']
  })
  static iosSuite(suiteName: string): Object { return; }

  /**
   * Return cloud synchronized configuration context
   * Currently supports Windows and iOS/macOS
   * @returns {Object} Custom object, bound to that suite
   */
  @Cordova({
    platforms: ['iOS', 'Windows', 'Windows Phone 8']
  })
  static cloudSync(): Object { return; }

  /**
   * Return default configuration context
   * Currently supports Windows and iOS/macOS
   * @returns {Object} Custom Object, bound to that suite
   */
  @Cordova({
    platforms: ['iOS', 'Windows', 'Windows Phone 8']
  })
  static defaults(): Object { return; }

}
