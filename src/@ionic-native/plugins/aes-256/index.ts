import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name AES256
 * @description
 * This cordova ionic plugin allows you to perform AES 256 encryption and decryption on the plain text.
 * It's a cross-platform plugin which supports both Android and iOS.
 * The encryption and decryption are performed on the device native layer so that the performance is much faster.
 *
 * @usage
 * ```typescript
 * import { AES256 } from '@ionic-native/aes-256';
 *
 *
 * constructor(private aES256: AES256) { }
 *
 * ...
 *
 *
 * this.aES256.encrypt('12345678123456781234567812345678', '1234567812345678', 'testdata')
 *   .then(res => console.log('Encrypted Data: ',res))
 *   .catch((error: any) => console.error(error));
 *
 * this.aES256.decrypt('12345678123456781234567812345678', '1234567812345678', 'encryptedData')
 *   .then(res => console.log('Decrypted Data : ',res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AES256',
  plugin: 'cordova-plugin-aes256-encryption',
  pluginRef: 'cordova.plugins.AES256',
  repo: 'https://github.com/Ideas2IT/cordova-aes256',
  platforms: ['Android', 'iOS'],
  install: 'ionic cordova plugin add cordova-plugin-aes256-encryption'
})
@Injectable()
export class AES256 extends IonicNativePlugin {

  /**
   * This function used to perform the aes256 encryption
   * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 encryption.
   * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 encryption.
   * @param {string} data A string which will be encrypted
   * @return {Promise<string>} Returns a promise that resolves when encryption happens. The success response will returns encrypted data.
   */
  @Cordova()
  encrypt(secureKey: string, secureIV: string, data: string): Promise<string> {
    return;
  }

  /**
   * This function used to perform the aes256 decryption
   * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 decryption.
   * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 decryption.
   * @param {string} data An AES256 encrypted data which will be decrypted.
   * @return {Promise<string>} Returns a promise that resolves when decryption happens. The success response will returns decrypted data.
   */
  @Cordova()
  decrypt(secureKey: string, secureIV: string, data: string): Promise<string> {
    return;
  }

  /**
   * This function can be used to generate a secure key based on an password. Perfect if you want to delegate the key generation for encryption to the plugin.
   * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
   * @param {string} password A random string, which will be used as input for a PBKDF2 function
   * @return {Promise<string>} Returns a promise that resolves when key is generated.
   */
  @Cordova()
  generateSecureKey(password: string): Promise<string> {
    return;
  }

  /**
   * This function can be used to generate a secure IV based on an password. Perfect if you want to delegate the IV generation for encryption to the plugin.
   * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
   * @param {string} password A random string, which will be used as input for a PBKDF2 function
   * @return {Promise<string>} Returns a promise that resolves when IV is generated.
   */
  @Cordova()
  generateSecureIV(password: string): Promise<string> {
    return;
  }
}
