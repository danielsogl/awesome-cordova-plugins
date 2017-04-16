import { Injectable } from '@angular/core';
import { CordovaInstance, Plugin, checkAvailability } from '@ionic-native/core';

declare var cordova: any;

/**
 * @hidden
 */
export class SecureStorageObject {

  constructor(private _objectInstance?: any) {}

  /**
   * Gets a stored item
   * @param reference {string}
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  get(reference: string): Promise<any> { return; }

  /**
   * Stores a value
   * @param reference {string}
   * @param value {string}
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  set(reference: string, value: string): Promise<any> { return; }

  /**
   * Removes a single stored item
   * @param reference {string}
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  remove(reference: string): Promise<any> { return; }

  /**
   * Get all references from the storage.
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    callbackOrder: 'reverse'
  })
  keys(): Promise<any> { return; }

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
 *      storage.get('myitem')
 *        .then(
 *          data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.set('myitem', 'myvalue')
 *        .then(
 *         data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.remove('myitem')
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
export class SecureStorage {

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
