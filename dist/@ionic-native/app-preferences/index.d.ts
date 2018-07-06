import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name App Preferences
 * @description
 * This plugin allows you to read and write app preferences
 *
 * @usage
 * ```typescript
 * import { AppPreferences } from '@ionic-native/app-preferences';
 *
 * constructor(private appPreferences: AppPreferences) { }
 *
 * ...
 *
 * this.appPreferences.fetch('key').then((res) => { console.log(res); });
 *
 * ```
 *
 */
export declare class AppPreferences extends IonicNativePlugin {
    /**
     * Get a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    fetch(dict: string, key?: string): Promise<any>;
    /**
     * Set a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @param {any} value Value
     * @return {Promise<any>} Returns a promise
     */
    store(dict: string, key: string, value?: any): Promise<any>;
    /**
     * Remove value from preferences
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    remove(dict: string, key?: string): Promise<any>;
    /**
     * Clear preferences
     *
     * @return {Promise<any>} Returns a promise
     */
    clearAll(): Promise<any>;
    /**
     * Show native preferences interface
     *
     * @return {Promise<any>} Returns a promise
     */
    show(): Promise<any>;
    /**
     * Show native preferences interface
     *
     * @param {boolean} subscribe true value to subscribe, false - unsubscribe
     * @return {Observable<any>} Returns an observable
     */
    watch(subscribe: boolean): Observable<any>;
    /**
     * Return named configuration context
     * In iOS you'll get a suite configuration, on Android — named file
     * Supports: Android, iOS
     * @param {string} suiteName suite name
     * @returns {Object} Custom object, bound to that suite
     */
    suite(suiteName: string): any;
    iosSuite(suiteName: string): any;
    /**
     * Return cloud synchronized configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom object, bound to that suite
     */
    cloudSync(): Object;
    /**
     * Return default configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom Object, bound to that suite
     */
    defaults(): Object;
}
