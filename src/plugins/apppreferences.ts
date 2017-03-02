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
 * AppPreferences.fetch('key').then((res) => { console.log(res); });
 *
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
   * @param {string} dict Dictionary for key (OPTIONAL)
   * @param {string} key Key
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    sync: true,
    callbackOrder: 'reverse'
  })
  static fetch(dict: string, key?: string): Promise<any> { return; }

  /**
   * Set a preference value
   *
   * @param {string} dict Dictionary for key (OPTIONAL)
   * @param {string} key Key
   * @param {string} value Value
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static store(dict: string, key: string, value?: string): Promise<any> {
    return;
  }

  /**
   * Remove value from preferences
   *
   * @param {string} dict Dictionary for key (OPTIONAL)
   * @param {string} key Key
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static remove(dict: string, key?: string): Promise<any> { return; }

  /**
   * Clear preferences
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static clearAll(): Promise<any> { return; }

  /**
   * Show native preferences interface
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static show(): Promise<any> { return; }

  /**
   * Show native preferences interface
   *
   * @param {boolean} subscribe true value to subscribe, false - unsubscribe
   * @return {Observable<any>} Returns an observable
   */
  @Cordova({
    observable: true
  })
  static watch(subscribe: boolean): Observable<any> { return; }

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
