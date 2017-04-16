import { Cordova, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

/**
 * @name App Preferences
 * @description
 * This plugin allows you to read and write app preferences
 *
 * @usage
 * ```typescript
 * import { AppPreferences } from '@ionic-native/app-preferences';
 *
 * constructor(private appPreferences: AppPreferences) {
 *
 *   this.appPreferences.fetch('key').then((res) => { console.log(res); });
 *
 * }
 * ```
 *
 */
@Plugin({
  pluginName: 'AppPreferences',
  plugin: 'cordova-plugin-app-preferences',
  pluginRef: 'plugins.appPreferences',
  repo: 'https://github.com/apla/me.apla.cordova.app-preferences',
  platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'OS X', 'Windows 8', 'Windows Phone']
})
@Injectable()
export class AppPreferences {

  /**
   * Get a preference value
   *
   * @param {string} dict Dictionary for key (OPTIONAL)
   * @param {string} key Key
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  fetch(dict: string, key?: string): Promise<any> { return; }

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
  store(dict: string, key: string, value?: string): Promise<any> {
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
  remove(dict: string, key?: string): Promise<any> { return; }

  /**
   * Clear preferences
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  clearAll(): Promise<any> { return; }

  /**
   * Show native preferences interface
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  show(): Promise<any> { return; }

  /**
   * Show native preferences interface
   *
   * @param {boolean} subscribe true value to subscribe, false - unsubscribe
   * @return {Observable<any>} Returns an observable
   */
  @Cordova({
    observable: true
  })
  watch(subscribe: boolean): Observable<any> { return; }

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
  suite(suiteName: string): Object { return; }

  @Cordova({
    platforms: ['iOS']
  })
  iosSuite(suiteName: string): Object { return; }

  /**
   * Return cloud synchronized configuration context
   * Currently supports Windows and iOS/macOS
   * @returns {Object} Custom object, bound to that suite
   */
  @Cordova({
    platforms: ['iOS', 'Windows', 'Windows Phone 8']
  })
  cloudSync(): Object { return; }

  /**
   * Return default configuration context
   * Currently supports Windows and iOS/macOS
   * @returns {Object} Custom Object, bound to that suite
   */
  @Cordova({
    platforms: ['iOS', 'Windows', 'Windows Phone 8']
  })
  defaults(): Object { return; }

}
