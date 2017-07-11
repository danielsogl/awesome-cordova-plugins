import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Safe
 * @description
 * Simple file encryption for Cordova.
 * @usage
 * ```
 * import { Safe } from 'ionic-native';
 *
 *
 * constructor(private safe: Safe) { }
 *
 * ...
 *
 * let key: string = 'SOME_STRONG_KEY';
 *
 * this.safe.encrypt('path/to/file.jpg', key)
 *   .then(file => console.log('Encrypted file', file))
 *   .catch(e => console.error('Error encrypting file', e));
 *
 * ```
 */
@Plugin({
  pluginName: 'Safe',
  plugin: 'cordova-safe',
  pluginRef: 'cordova.plugins.disusered.safe',
  repo: 'https://github.com/disusered/cordova-safe'
})
@Injectable()
export class Safe {

  /**
   * Encrypt a file
   * @param file {string} path to local file
   * @param key {string} key for the crypto operations
   * @return {Promise<any>}
   */
  @Cordova()
  encrypt(file: string, key: string): Promise<any> { return; }

  /**
   * Decrypt a file
   * @param file {string} path to local file
   * @param key {string} key for the crypto operations
   * @return {Promise<any>}
   */
  @Cordova()
  decrypt(file: string, key: string): Promise<any> { return; }

}
