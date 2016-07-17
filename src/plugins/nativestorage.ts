import {Plugin, Cordova} from './plugin';
/**
 * @name Native Storage
 */
@Plugin({
  plugin: 'cordova-plugin-nativestorage',
  pluginRef: 'NativeStorage',
  repo: 'https://github.com/TheCocoaProject/cordova-plugin-nativestorage'
})
export class NativeStorage {
  /**
   * Stores a value
   * @param reference
   * @param value
   */
  @Cordova()
  static setItem(reference: string, value: any): Promise<any> {return; }

  /**
   * Gets a stored item
   * @param reference
   */
  @Cordova()
  static getItem(reference: string): Promise<any> {return; }

  /**
   * Removes a single stored item
   * @param reference
   */
  @Cordova()
  static remove(reference: string): Promise<any> {return; }

  /**
   * Removes all stored values.
   */
  @Cordova()
  static clear(): Promise<any> {return; }
}
