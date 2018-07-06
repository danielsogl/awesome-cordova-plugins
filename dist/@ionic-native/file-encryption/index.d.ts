import { IonicNativePlugin } from '@ionic-native/core';
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
 * this.fileEncryption.decrypt('assets/json/topSecret.json', 'secretKey');
 *
 * this.fileEncryption.encrypt('assets/json/topSecret.json', 'secretKey');
 *
 * ```
 */
export declare class FileEncryption extends IonicNativePlugin {
    /**
     * Enrcypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    encrypt(file: string, key: string): Promise<any>;
    /**
     * Decrypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    decrypt(file: string, key: string): Promise<any>;
}
