import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface NdefEvent {
    tag: NdefTag;
}
export interface NdefRecord {
    id: any[];
    payload: number[];
    tnf: number;
    type: number[];
}
export interface NdefTag {
    canMakeReadOnly: boolean;
    id: number[];
    isWriteable: boolean;
    maxSize: number;
    ndefMessage: NdefRecord[];
    techTypes: string[];
    type: string;
}
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
 * this.nfc.addNdefListener(() => {
 *   console.log('successfully attached ndef listener');
 * }, (err) => {
 *   console.log('error attaching ndef listener', err);
 * }).subscribe((event) => {
 *   console.log('received ndef message. the tag contains: ', event.tag);
 *   console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
 *
 *   let message = this.ndef.textRecord('Hello world');
 *   this.nfc.share([message]).then(onSuccess).catch(onError);
 * });
 *
 * ```
 */
export declare class NFC extends IonicNativePlugin {
    /**
     * Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    beginSession(onSuccess?: Function, onFailure?: Function): Observable<any>;
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    addNdefListener(onSuccess?: Function, onFailure?: Function): Observable<NdefEvent>;
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
    /**
     * Use Reader Mode of NFC tag
     *
     * @param flags
     * @param readCallback
     * @param errorCallback
     */
    readerMode(flags: string, readCallback?: Function, errorCallback?: Function): Observable<any>;
}
/**
 * @hidden
 */
export declare class Ndef extends IonicNativePlugin {
    TNF_EMPTY: number;
    TNF_WELL_KNOWN: number;
    TNF_MIME_MEDIA: number;
    TNF_ABSOLUTE_URI: number;
    TNF_EXTERNAL_TYPE: number;
    TNF_UNKNOWN: number;
    TNF_UNCHANGED: number;
    TNF_RESERVED: number;
    RTD_TEXT: number[];
    RTD_URI: number[];
    RTD_SMART_POSTER: number[];
    RTD_ALTERNATIVE_CARRIER: number[];
    RTD_HANDOVER_CARRIER: number[];
    RTD_HANDOVER_REQUEST: number[];
    RTD_HANDOVER_SELECT: number[];
    record(tnf: number, type: number[] | string, id: number[] | string, payload: number[] | string): NdefRecord;
    textRecord(text: string, languageCode?: string, id?: number[] | string): NdefRecord;
    uriRecord(uri: string, id?: number[] | string): NdefRecord;
    absoluteUriRecord(uri: string, payload: number[] | string, id?: number[] | string): NdefRecord;
    mimeMediaRecord(mimeType: string, payload: string): NdefRecord;
    smartPoster(ndefRecords: any[], id?: number[] | string): NdefRecord;
    emptyRecord(): NdefRecord;
    androidApplicationRecord(packageName: string): NdefRecord;
    encodeMessage(ndefRecords: any): any;
    decodeMessage(bytes: any): any;
    docodeTnf(tnf_byte: any): any;
    encodeTnf(mb: any, me: any, cf: any, sr: any, il: any, tnf: any): any;
    tnfToString(tnf: any): string;
    textHelper: TextHelper;
    uriHelper: UriHelper;
}
/**
 * @hidden
 */
export declare class NfcUtil extends IonicNativePlugin {
    toHex(i: number): string;
    toPrintable(i: number): string;
    bytesToString(i: number[]): string;
    stringToBytes(s: string): number[];
    bytesToHexString(bytes: number[]): string;
    isType(record: NdefRecord, tnf: number, type: number[] | string): boolean;
}
export declare class TextHelper extends IonicNativePlugin {
    decodePayload(data: number[]): string;
    encodePayload(text: string, lang: string): number[];
}
export declare class UriHelper extends IonicNativePlugin {
    decodePayload(data: number[]): string;
    encodePayload(uri: string): number[];
}
