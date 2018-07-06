import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name NFC
 * @description
 * The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.
 *
 * Use to
 * - read data from NFC tags
 * - write data to NFC tags
 * - send data to other NFC enabled devices
 * - receive data from NFC devices
 *
 * This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.
 *
 * @usage
 * ```typescript
 * import { NFC, Ndef } from '@ionic-native/nfc';
 *
 * constructor(private nfc: NFC, private ndef: Ndef) { }
 *
 * ...
 *
 * let message = this.ndef.textRecord('Hello world');
 * this.nfc.share([message]).then(onSuccess).catch(onError);
 *
 * ```
 */
export declare class NFC extends IonicNativePlugin {
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addNdefListener(onSuccess?: Function, onFailure?: Function): Observable<any>;
    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addTagDiscoveredListener(onSuccess?: Function, onFailure?: Function): Observable<any>;
    /**
     * Registers an event listener for NDEF tags matching a specified MIME type.
     * @param mimeType
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addMimeTypeListener(mimeType: string, onSuccess?: Function, onFailure?: Function): Observable<any>;
    /**
     * Registers an event listener for formatable NDEF tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addNdefFormatableListener(onSuccess?: Function, onFailure?: Function): Observable<any>;
    /**
     * Writes an NdefMessage(array of ndef records) to a NFC tag.
     * @param message {any[]}
     * @returns {Promise<any>}
     */
    write(message: any[]): Promise<any>;
    /**
     * Makes a NFC tag read only. **Warning** this is permanent.
     * @returns {Promise<any>}
     */
    makeReadyOnly(): Promise<any>;
    /**
     * Shares an NDEF Message(array of ndef records) via peer-to-peer.
     * @param message An array of NDEF Records.
     * @returns {Promise<any>}
     */
    share(message: any[]): Promise<any>;
    /**
     * Stop sharing NDEF data via peer-to-peer.
     * @returns {Promise<any>}
     */
    unshare(): Promise<any>;
    /**
     * Erase a NDEF tag
     */
    erase(): Promise<any>;
    /**
     * Send a file to another device via NFC handover.
     * @param uris A URI as a String, or an array of URIs.
     * @returns {Promise<any>}
     */
    handover(uris: string[]): Promise<any>;
    /**
     * Stop sharing NDEF data via NFC handover.
     * @returns {Promise<any>}
     */
    stopHandover(): Promise<any>;
    /**
     * Opens the device's NFC settings.
     * @returns {Promise<any>}
     */
    showSettings(): Promise<any>;
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    enabled(): Promise<any>;
    /**
    * @{ NFC } class utility methods
    * for use with
    */
    /**
     * Convert byte array to string
     * @param bytes {number[]}
     * @returns {string}
     */
    bytesToString(bytes: number[]): string;
    /**
     * Convert string to byte array.
     * @param str {string}
     * @returns {number[]}
     */
    stringToBytes(str: string): number[];
    /**
     * Convert byte array to hex string
     *
     * @param bytes {number[]}
     * @returns {string}
     */
    bytesToHexString(bytes: number[]): string;
}
/**
 * @hidden
 */
export declare class Ndef extends IonicNativePlugin {
    uriRecord(uri: string): any;
    textRecord(text: string): any;
    mimeMediaRecord(mimeType: string, payload: string): any;
    androidApplicationRecord(packageName: string): any;
}
