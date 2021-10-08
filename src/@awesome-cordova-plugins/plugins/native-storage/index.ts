import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Native Storage
 * @premier nativestorage
 * @description Native storage of variables in Android and iOS
 * @usage
 * ```typescript
 * import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
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
  platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows'],
})
@Injectable()
export class NativeStorage extends AwesomeCordovaNativePlugin {
  /**
   * Initialises shared storage with the suite name when using app groups in iOS
   *
   * @param reference {string}
   * @returns {Promise<void>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  initWithSuiteName(reference: string): Promise<void> {
    return;
  }

  /**
   * Stores a value
   *
   * @param reference {string}
   * @param value
   * @returns {Promise<any>}
   */
  @Cordova()
  setItem(reference: string, value: any): Promise<any> {
    return;
  }

  /**
   * Gets a stored item
   *
   * @param reference {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getItem(reference: string): Promise<any> {
    return;
  }

  /**
   * Retrieving all keys
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  keys(): Promise<any> {
    return;
  }

  /**
   * Removes a single stored item
   *
   * @param reference {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  remove(reference: string): Promise<any> {
    return;
  }

  /**
   * Removes all stored values.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  clear(): Promise<any> {
    return;
  }
}
