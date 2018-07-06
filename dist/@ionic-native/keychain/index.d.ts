import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Keychain
 * @description
 * Get and set data in the iOS Keychain
 *
 * Requires Cordova plugin: `cordova-plugin-ios-keychain`. For more info, please see the [Keychain plugin docs](https://github.com/ionic-team/cordova-plugin-ios-keychain).
 *
 * @usage
 * ```typescript
 * import { Keychain } from '@ionic-native/keychain';
 *
 * constructor(private keychain: Keychain) { }
 *
 * ...
 *
 * this.keychain.set(key, value).then(() => {
 *   this.keychain.get(key)
 *     .then(value => console.log('Got value', value))
 *     .catch(err => console.error('Error getting', err));
 * })
 * .catch(err => console.error('Error setting', err));
 * ```
 */
export declare class Keychain extends IonicNativePlugin {
    /**
     * Retrieves a value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} [touchIDMessage] the message to show underneath the TouchID prompt (if any)
     */
    get(key: string, touchIDMessage?: string): Promise<any>;
    /**
     * Sets a value for a key
     *
     * @param {string} key the key to set
     * @param {string|number|boolean} value the value to set
     * @param {boolean} [useTouchID] whether to store the value with security such that TouchID will be needed to grab it
     */
    set(key: string, value: string | number | boolean, useTouchID?: boolean): Promise<any>;
    /**
     * Gets a JSON value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} touchIDMessage the message to show underneath the TouchID prompt (if any)
     */
    getJson(key: string, touchIDMessage?: string): Promise<any>;
    /**
     * Sets a JSON value for a key
     *
     * @param {string} key the key to set
     * @param {any} obj value the value to set
     * @param {boolean} [useTouchId] Wether to store the value with security such that TouchID will be needed to grab it
     */
    setJson(key: string, obj: any, useTouchId?: boolean): Promise<any>;
    /**
     * Removes a value for a key
     *
     * @param {string} key the key to remove
     */
    remove(key: string): Promise<any>;
}
