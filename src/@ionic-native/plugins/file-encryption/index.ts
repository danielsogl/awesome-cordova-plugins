import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name File Encryption
 * @description
 * Simple file encryption for Cordova.
 *
 * @usage
 * ```typescript
 * import { FileEncryption } from '@ionic-native/file-encryption';
 *
 *
 * constructor(private fileEncryption: FileEncryption) { }
 *
 * ...
 *
 * this.fileEncryption.decrypt(file, key);
 *
 * this.fileEncryption.encrypt(file, key);
 *
 * ```
 */
@Plugin({
  pluginName: 'FileEncryption',
  plugin: 'cordova-safe',
  pluginRef: 'cordova.plugins.disusered',
  repo: 'https://github.com/disusered/cordova-safe',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FileEncryption extends IonicNativePlugin {

  /**
   * This function does something
   * @param file {string} A string representing a local URI
   * @param key {string} A key for the crypto operations
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  encrypt(file: string, key: string): Promise<any> { return; }

  /**
   * This function does something
   * @param file {string} A string representing a local URI
   * @param key {string} A key for the crypto operations
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  decrypt(file: string, key: string): Promise<any> { return; }

}
