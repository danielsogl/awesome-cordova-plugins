/**
 * @name NativeStorage
 * @description Native storage of variables in Android and iOS
 *
 * @usage
 * ```typescript
 * import { NativeStorage } from 'ionic-native';
 *
 * NativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * NativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
export declare class NativeStorage {
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     */
    static setItem(reference: string, value: any): Promise<any>;
    /**
     * Gets a stored item
     * @param reference {string}
     */
    static getItem(reference: string): Promise<any>;
    /**
     * Removes a single stored item
     * @param reference {string}
     */
    static remove(reference: string): Promise<any>;
    /**
     * Removes all stored values.
     */
    static clear(): Promise<any>;
}
