import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * @name App Preferences
 * @description
 * This plugin allows you to read and write app preferences
 * @usage
 * ```typescript
 * import { AppPreferences } from '@awesome-cordova-plugins/app-preferences/ngx';
 *
 * constructor(private appPreferences: AppPreferences) { }
 *
 * ...
 *
 * this.appPreferences.fetch('key').then((res) => { console.log(res); });
 *
 * ```
 */
@Plugin({
  pluginName: 'AppPreferences',
  plugin: 'cordova-plugin-app-preferences',
  pluginRef: 'plugins.appPreferences',
  repo: 'https://github.com/apla/me.apla.cordova.app-preferences',
  platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'macOS', 'Windows 8', 'Windows Phone'],
})
@Injectable()
export class AppPreferences extends AwesomeCordovaNativePlugin {
  /**
   * Get a preference value
   *
   * @param {string} dict Dictionary for key (OPTIONAL)
   * @param {string} key Key
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  fetch(dict: string, key?: string): Promise<any> {
    return;
  }

  /**
   * Set a preference value
   *
   * @param {string} dict Dictionary for key (OPTIONAL)
   * @param {string} key Key
   * @param {any} value Value
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  store(dict: string, key: string, value?: any): Promise<any> {
    return;
  }

  /**
   * Remove value from preferences
   *
   * @param {string} dict Dictionary for key (OPTIONAL)
   * @param {string} key Key
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  remove(dict: string, key?: string): Promise<any> {
    return;
  }

  /**
   * Clear preferences
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  clearAll(): Promise<any> {
    return;
  }

  /**
   * Show native preferences interface
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  show(): Promise<any> {
    return;
  }

  /**
   * Show native preferences interface
   *
   * @param {boolean} subscribe true value to subscribe, false - unsubscribe
   * @returns {Observable<any>} Returns an observable
   */
  @Cordova({
    observable: true,
  })
  watch(subscribe: boolean): Observable<any> {
    return;
  }

  /**
   * Return named configuration context
   * In iOS you'll get a suite configuration, on Android — named file
   * Supports: Android, iOS
   *
   * @param {string} suiteName suite name
   * @returns {Object} Custom object, bound to that suite
   */
  @Cordova({
    platforms: ['Android'],
    sync: true,
  })
  suite(suiteName: string): any {
    return;
  }

  @Cordova({
    platforms: ['iOS'],
    sync: true,
  })
  iosSuite(suiteName: string): any {
    return;
  }

  /**
   * Return cloud synchronized configuration context
   * Currently supports Windows and iOS/macOS
   *
   * @returns {Object} Custom object, bound to that suite
   */
  @Cordova({
    platforms: ['iOS', 'Windows', 'Windows Phone 8'],
  })
  cloudSync(): Object {
    return;
  }

  /**
   * Return default configuration context
   * Currently supports Windows and iOS/macOS
   *
   * @returns {Object} Custom Object, bound to that suite
   */
  @Cordova({
    platforms: ['iOS', 'Windows', 'Windows Phone 8'],
  })
  defaults(): Object {
    return;
  }
}
