import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @name Native Storage
 * @description Native storage of variables in Android and iOS
 *
 * @usage
 * ```typescript
 * import { NativeStorage } from '@ionic-native/native-storage';
 *
 * constructor(private nativeStorage: NativeStorage) { }
 *
 * ...
 *
 * this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * this.nativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
@Plugin({
  pluginName: 'NativeStorage',
  plugin: 'cordova-plugin-nativestorage',
  pluginRef: 'NativeStorage',
  repo: 'https://github.com/TheCocoaProject/cordova-plugin-nativestorage',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class NativeStorage {
  /**
   * Stores a value
   * @param reference {string}
   * @param value
   * @returns {Promise<any>}
   */
  @Cordova()
  setItem(reference: string, value: any): Promise<any> {return; }

  /**
   * Gets a stored item
   * @param reference {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getItem(reference: string): Promise<any> {return; }

  /**
   * Removes a single stored item
   * @param reference {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  remove(reference: string): Promise<any> {return; }

  /**
   * Removes all stored values.
   * @returns {Promise<any>}
   */
  @Cordova()
  clear(): Promise<any> {return; }

}
