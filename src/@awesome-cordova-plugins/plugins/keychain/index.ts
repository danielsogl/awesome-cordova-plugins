import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Keychain
 * @description
 * Get and set data in the iOS Keychain
 *
 * Requires Cordova plugin: `cordova-plugin-ios-keychain`. For more info, please see the [Keychain plugin docs](https://github.com/ionic-team/cordova-plugin-ios-keychain).
 *
 * See also [Secure Storage](https://ionicframework.com/docs/native/secure-storage/) for more supported platforms.
 * @usage
 * ```typescript
 * import { Keychain } from '@awesome-cordova-plugins/keychain/ngx';
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
@Plugin({
  pluginName: 'Keychain',
  plugin: 'cordova-plugin-ios-keychain',
  pluginRef: 'window.Keychain',
  repo: 'https://github.com/ionic-team/cordova-plugin-ios-keychain',
  platforms: ['iOS'],
})
@Injectable()
export class Keychain extends AwesomeCordovaNativePlugin {
  /**
   * Retrieves a value for a key
   *
   * @param {string} key the key to retrieve
   * @param {string} [touchIDMessage] the message to show underneath the TouchID prompt (if any)
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  get(key: string, touchIDMessage?: string): Promise<any> {
    return;
  }

  /**
   * Sets a value for a key
   *
   * @param {string} key the key to set
   * @param {string|number|boolean} value the value to set
   * @param {boolean} [useTouchID] whether to store the value with security such that TouchID will be needed to grab it
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  set(key: string, value: string | number | boolean, useTouchID?: boolean): Promise<any> {
    return;
  }

  /**
   * Gets a JSON value for a key
   *
   * @param {string} key the key to retrieve
   * @param {string} touchIDMessage the message to show underneath the TouchID prompt (if any)
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  getJson(key: string, touchIDMessage?: string): Promise<any> {
    return;
  }

  /**
   * Sets a JSON value for a key
   *
   * @param {string} key the key to set
   * @param {any} obj value the value to set
   * @param {boolean} [useTouchId] Wether to store the value with security such that TouchID will be needed to grab it
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  setJson(key: string, obj: any, useTouchId?: boolean): Promise<any> {
    return;
  }

  /**
   * Removes a value for a key
   *
   * @param {string} key the key to remove
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  remove(key: string): Promise<any> {
    return;
  }
}
