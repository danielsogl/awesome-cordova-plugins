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
export declare class SecureStorage {
    private _objectInstance;
    constructor();
    /**
     * Creates a namespaced storage.
     * @param store {string}
     */
    create(store: string): Promise<any>;
    /**
     * Gets a stored item
     * @param reference {string}
     */
    get(reference: string): Promise<any>;
    /**
     * Stores a value
     * @param reference {string}
     * @param value {string}
     */
    set(reference: string, value: string): Promise<any>;
    /**
     * Removes a single stored item
     * @param reference {string}
     */
    remove(reference: string): Promise<any>;
}
