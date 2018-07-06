import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Base64
 * @description
 * This Plugin is used to encode base64 of any file, it uses js code for iOS, but in case of android it uses native code to handle android versions lower than v.3
 *
 * @usage
 * ```typescript
 * import { Base64 } from '@ionic-native/base64';
 *
 * constructor(private base64: Base64) { }
 *
 * ...
 *
 * let filePath: string = 'file:///...';
 * this.base64.encodeFile(filePath).then((base64File: string) => {
 *   console.log(base64File);
 * }, (err) => {
 *   console.log(err);
 * });
 *
 * ```
 */
export declare class Base64 extends IonicNativePlugin {
    /**
     * This function encodes base64 of any file
     * @param {string} filePath Absolute file path
     * @return {Promise<string>} Returns a promise that resolves when the file is successfully encoded
     */
    encodeFile(filePath: string): Promise<string>;
}
