import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

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
 *   .then((res: string) => console.log('Encrypted Data: ',res))
 *   .catch((error: any) => console.error(error));
 *
 * this.aES256.decrypt('12345678123456781234567812345678', '1234567812345678', 'encryptedData')
 *   .then((res: string) => console.log('Decrypted Data : ',res))
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
   * @param secureKey {string} A 32 bytes string, which will used as input key for AES256 encryption.
   * @param secureIV {string} A 16 bytes string, which will used as initial vector for AES256 encryption.
   * @param data {string} A string which will be encrypted
   * @return {Promise<any>} Returns a promise that resolves when encryption happens. The success response will returns encrypted data.
   */
  @Cordova()
  encrypt(secureKey: string, secureIV: string, data: string): Promise<any> {
    return;
  }

  /**
   * This function used to perform the aes256 decryption
   * @param secureKey {string} A 32 bytes string, which will used as input key for AES256 decryption.
   * @param secureIV {string} A 16 bytes string, which will used as initial vector for AES256 decryption.
   * @param data {string} An AES256 encrypted data which will be decrypted.
   * @return {Promise<any>} Returns a promise that resolves when decryption happens. The success response will returns decrypted data.
   */
  @Cordova()
  decrypt(secureKey: string, secureIV: string, data: string): Promise<any> {
    return;
  }

}
