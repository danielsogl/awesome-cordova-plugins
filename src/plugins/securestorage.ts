import { CordovaInstance, Plugin } from './plugin';

declare var cordova: any;
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
 * import { SecureStorage } from 'ionic-native';
 *
 * let secureStorage: SecureStorage = new SecureStorage();
 * secureStorage.create('my_store_name')
 *  .then(
 *    () => console.log('Storage is ready!'),
 *    error => console.log(error)
 * );
 *
 * secureStorage.get('myitem')
 *  .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 *
 * secureStorage.set('myitem', 'myvalue')
 *  .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 *
 * secureStorage.remove('myitem')
 * .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 * ```
 */
@Plugin({
  pluginName: 'SecureStorage',
  plugin: 'cordova-plugin-secure-storage',
  pluginRef: 'plugins.securestorage',
  repo: 'https://github.com/Crypho/cordova-plugin-secure-storage',
  platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
})
export class SecureStorage {

  private _objectInstance: any;

  constructor() {}

  /**
   * Creates a namespaced storage.
   * @param store {string}
   * @returns {Promise<any>}
   */
  create(store: string): Promise<any> {
    return new Promise((res, rej) => {
      this._objectInstance = new cordova.plugins.SecureStorage(res, rej, store);
    });
  }

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
}
