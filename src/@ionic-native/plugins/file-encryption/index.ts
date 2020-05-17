import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name File Encryption
 * @description
 * Simple file encryption for Cordova.
 *
 * @usage
 * ```typescript
 * import { FileEncryption } from '@ionic-native/file-encryption/ngx';
 *
 *
 * constructor(private fileEncryption: FileEncryption) { }
 *
 * ...
 *
 * this.fileEncryption.decrypt('assets/json/topSecret.json', 'secretKey');
 *
 * this.fileEncryption.encrypt('assets/json/topSecret.json', 'secretKey');
 *
 * ```
 */
@Plugin({
  pluginName: 'FileEncryption',
  plugin: 'cordova-safe',
  pluginRef: 'cordova.plugins.disusered',
  repo: 'https://github.com/disusered/cordova-safe',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FileEncryption extends IonicNativePlugin {
  /**
   * Encrypt a file
   * @param {string} file A string representing a local URI
   * @param {string} key A key for the crypto operations
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  encrypt(file: string, key: string): Promise<any> {
    return;
  }

  /**
   * Decrypt a file
   * @param {string} file A string representing a local URI
   * @param {string} key A key for the crypto operations
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  decrypt(file: string, key: string): Promise<any> {
    return;
  }
}
