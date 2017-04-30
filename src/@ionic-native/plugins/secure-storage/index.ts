import { Injectable } from '@angular/core';
import { CordovaInstance, Plugin, checkAvailability, IonicNativePlugin } from '@ionic-native/core';

declare var cordova: any;

/**
 * @hidden
 */
export class SecureStorageObject {

  constructor(private _objectInstance?: any) { }

  /**
   * Gets a stored item
   * @param key {string}
   * @returns {Promise<string>}
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  get(key: string): Promise<string> { return; }

  /**
   * Stores a value
   * @param key {string}
   * @param value {string}
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  set(key: string, value: string): Promise<any> { return; }

  /**
   * Removes a single stored item
   * @param key {string}
   * @returns {Promise<string>} returns a promise that resolves with the key that was removed
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  remove(key: string): Promise<string> { return; }

  /**
   * Get all references from the storage.
   * @returns {Promise<string[]>} returns a promise that resolves with array of keys storage
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  keys(): Promise<string[]> { return; }

  /**
   * Clear all references from the storage.
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  clear(): Promise<any> { return; }

}

/**
 * @name Secure Storage
 * @description
 * This plugin gets, sets and removes key,value pairs from a device's secure storage.
 *
 * Requires Cordova plugin: `cordova-plugin-secure-storage`. For more info, please see the [Cordova Secure Storage docs](https://github.com/Crypho/cordova-plugin-secure-storage).
 *
 * @usage
 *
 * ```typescript
 * import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
 *
 * constructor(private secureStorage: SecureStorage) { }
 *
 * ...
 *
 * this.secureStorage.create('my_store_name')
 *   .then((storage: SecureStorageObject) => {
 *
 *      storage.get('key')
 *        .then(
 *          data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.set('key', 'value')
 *        .then(
 *         data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.remove('key')
 *      .then(
 *          data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *   });
 *
 *
 * ```
 * @classes
 * SecureStorageObject
 */
@Plugin({
  pluginName: 'SecureStorage',
  plugin: 'cordova-plugin-secure-storage',
  pluginRef: 'cordova.plugins.SecureStorage',
  repo: 'https://github.com/Crypho/cordova-plugin-secure-storage',
  platforms: ['Android', 'iOS', 'Windows Phone']
})
@Injectable()
export class SecureStorage extends IonicNativePlugin {

  /**
   * Creates a namespaced storage.
   * @param store {string}
   * @returns {Promise<SecureStorageObject>}
   */
  create(store: string): Promise<SecureStorageObject> {
    return new Promise((res, rej) => {
      if (checkAvailability('cordova.plugins.SecureStorage', null, 'SecureStorage') === true) {
        const instance = new cordova.plugins.SecureStorage(() => res(new SecureStorageObject(instance)), rej, store);
      } else {
        res(new SecureStorageObject());
      }
    });
  }

}
