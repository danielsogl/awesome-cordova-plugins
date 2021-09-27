import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
declare let window: any;

// tag should be NfcTag, but keeping as NdefTag to avoid breaking existing code
export interface NdefEvent {
  tag: NdefTag;
}

export interface NdefRecord {
  id: any[];
  payload: number[];
  tnf: number;
  type: number[];
}

/**
 * @deprecated use NfcTag
 */
export interface NdefTag {
  canMakeReadOnly: boolean;
  id: number[];
  isWritable: boolean;
  maxSize: number;
  ndefMessage: NdefRecord[];
  techTypes: string[];
  type: string;
}

export interface NfcTag {
  id?: number[];
  canMakeReadOnly?: boolean;
  isWritable?: boolean;
  maxSize?: number;
  ndefMessage?: NdefRecord[];
  techTypes?: string[];
  type?: string;
}

export interface ScanOptions {
  /**
   * If true, keep the scan session open so write can be called
   * after reading. The default value is false.
   */
  keepSessionOpen?: boolean;
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
 * @usage
 * ```typescript
 * import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
 *
 * constructor(private nfc: NFC, private ndef: Ndef) { }
 *
 * ...
 *
 * // Read NFC Tag - Android
 * // Once the reader mode is enabled, any tags that are scanned are sent to the subscriber
 *  let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
 *  this.readerMode$ = this.nfc.readerMode(flags).subscribe(
 *      tag => console.log(JSON.stringify(tag)),
 *      err => console.log('Error reading tag', err)
 *  );
 *
 * // Read NFC Tag - iOS
 * // On iOS, a NFC reader session takes control from your app while scanning tags then returns a tag
 * try {
 *     let tag = await this.nfc.scanNdef();
 *     console.log(JSON.stringify(tag));
 *  } catch (err) {
 *      console.log('Error reading tag', err);
 *  }
 *
 * ```
 *
 * For more details on NFC tag operations see https://github.com/chariotsolutions/phonegap-nfc
 */
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'nfc',
  repo: 'https://github.com/chariotsolutions/phonegap-nfc',
  platforms: ['Android', 'iOS', 'Windows'],
})
/**
 * @{ NFC } class methods
 */
@Injectable()
export class NFC extends AwesomeCordovaNativePlugin {
  // Flags for readerMode
  // https://developer.android.com/reference/android/nfc/NfcAdapter#FLAG_READER_NFC_A
  @CordovaProperty()
  FLAG_READER_NFC_A: number;
  @CordovaProperty()
  FLAG_READER_NFC_B: number;
  @CordovaProperty()
  FLAG_READER_NFC_F: number;
  @CordovaProperty()
  FLAG_READER_NFC_V: number;
  @CordovaProperty()
  FLAG_READER_NFC_BARCODE: number;
  @CordovaProperty()
  FLAG_READER_SKIP_NDEF_CHECK: number;
  @CordovaProperty()
  FLAG_READER_NO_PLATFORM_SOUNDS: number;

  /**
   * Read NFC tags sending the tag data to the success callback.
   * See https://github.com/chariotsolutions/phonegap-nfc#nfcreadermode
   *
   * @param flags
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'disableReaderMode',
    clearWithArgs: false,
  })
  readerMode(flags: number): Observable<NfcTag> {
    return;
  }

  /**
   * Function scanNdef starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
   * https://github.com/chariotsolutions/phonegap-nfc#nfcscanndef
   *
   * @param options
   */
  @Cordova({ sync: true })
  scanNdef(options?: ScanOptions): Promise<NfcTag> {
    return;
  }

  /**
   * Function scanTag starts the NFCTagReaderSession allowing iOS to scan NFC tags.
   *
   * You probably want *scanNdef* for reading NFC tags on iOS. Only use scanTag if you need the tag UID.
   * https://github.com/chariotsolutions/phonegap-nfc#nfcscantag
   *
   * @param options
   */
  @Cordova({ sync: true })
  scanTag(options?: ScanOptions): Promise<NfcTag> {
    return;
  }

  /**
   * Function cancelScan stops the NFCReaderSession returning control to your app.
   * https://github.com/chariotsolutions/phonegap-nfc#nfccancelscan
   */
  @Cordova({ sync: true })
  cancelScan(): Promise<any> {
    return;
  }

  /**
   * Connect to the tag and enable I/O operations to the tag from this TagTechnology object.
   * https://github.com/chariotsolutions/phonegap-nfc#nfcconnect
   *
   * @param tech The tag technology class name e.g. android.nfc.tech.IsoDep
   * @param timeout The transceive(byte[]) timeout in milliseconds [optional]
   */
  @Cordova({ sync: true })
  connect(tech: string, timeout?: number): Promise<any> {
    return;
  }

  /**
   * Close TagTechnology connection.
   * https://github.com/chariotsolutions/phonegap-nfc#nfcclose
   */
  @Cordova({ sync: true })
  close(): Promise<any> {
    return;
  }

  /**
   * Send raw command to the tag and receive the response.
   * https://github.com/chariotsolutions/phonegap-nfc#nfctransceive
   *
   * Example code https://github.com/chariotsolutions/phonegap-nfc#tag-technology-functions-1
   *
   * @param data an ArrayBuffer or string of hex data e.g. '00 A4 04 00 07 D2 76 00 00 85 01 00'
   */
  @Cordova({ sync: true })
  transceive(data: string | ArrayBuffer): Promise<ArrayBuffer> {
    return;
  }

  /**
   * Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
   *
   * @deprecated use scanNdef or scanTag
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
    clearFunction: 'invalidateSession',
    clearWithArgs: true,
  })
  beginSession(onSuccess?: Function, onFailure?: Function): Observable<any> {
    return;
  }

  /**
   * Registers an event listener for any NDEF tag.
   *
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
    clearFunction: 'removeNdefListener',
    clearWithArgs: true,
  })
  addNdefListener(onSuccess?: Function, onFailure?: Function): Observable<NdefEvent> {
    return;
  }

  /**
   * Registers an event listener for tags matching any tag type.
   *
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
    clearFunction: 'removeTagDiscoveredListener',
    clearWithArgs: true,
  })
  addTagDiscoveredListener(onSuccess?: Function, onFailure?: Function): Observable<any> {
    return;
  }

  /**
   * Registers an event listener for NDEF tags matching a specified MIME type.
   *
   * @param mimeType
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 1,
    errorIndex: 4,
    clearFunction: 'removeMimeTypeListener',
    clearWithArgs: true,
  })
  addMimeTypeListener(mimeType: string, onSuccess?: Function, onFailure?: Function): Observable<any> {
    return;
  }

  /**
   * Registers an event listener for formatable NDEF tags.
   *
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
  })
  addNdefFormatableListener(onSuccess?: Function, onFailure?: Function): Observable<any> {
    return;
  }

  /**
   * Writes an NdefMessage(array of ndef records) to a NFC tag.
   *
   * @param message {any[]}
   * @returns {Promise<any>}
   */
  @Cordova()
  write(message: any[]): Promise<any> {
    return;
  }
  /**
   * Makes a NFC tag read only. **Warning** this is permanent.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  makeReadOnly(): Promise<any> {
    return;
  }

  /**
   * Shares an NDEF Message(array of ndef records) via peer-to-peer.
   *
   * @param message An array of NDEF Records.
   * @returns {Promise<any>}
   */
  @Cordova()
  share(message: any[]): Promise<any> {
    return;
  }

  /**
   * Stop sharing NDEF data via peer-to-peer.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  unshare(): Promise<any> {
    return;
  }

  /**
   * Erase a NDEF tag
   */
  @Cordova()
  erase(): Promise<any> {
    return;
  }

  /**
   * Send a file to another device via NFC handover.
   *
   * @param uris A URI as a String, or an array of URIs.
   * @returns {Promise<any>}
   */
  @Cordova()
  handover(uris: string[]): Promise<any> {
    return;
  }

  /**
   * Stop sharing NDEF data via NFC handover.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  stopHandover(): Promise<any> {
    return;
  }

  /**
   * Opens the device's NFC settings.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  showSettings(): Promise<any> {
    return;
  }

  /**
   * Check if NFC is available and enabled on this device.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  enabled(): Promise<any> {
    return;
  }
  /**
   * @{ NFC } class utility methods
   * for use with
   */
  /**
   * Convert byte array to string
   *
   * @param bytes {number[]}
   * @returns {string}
   */
  @Cordova({ sync: true })
  bytesToString(bytes: number[]): string {
    return;
  }
  /**
   * Convert string to byte array.
   *
   * @param str {string}
   * @returns {number[]}
   */
  @Cordova({ sync: true })
  stringToBytes(str: string): number[] {
    return;
  }
  /**
   * Convert byte array to hex string
   *
   * @param bytes {number[]}
   * @returns {string}
   */
  @Cordova({ sync: true })
  bytesToHexString(bytes: number[]): string {
    return;
  }
}
/**
 * @hidden
 */
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'ndef',
})
/**
 * @description
 * Utility methods for creating ndef records for the ndef tag format.
 * Move records into array before usage. Then pass an array to methods as parameters.
 * Do not pass bytes as parameters for these methods, conversion is built in.
 * For usage with nfc.write() and nfc.share()
 */
@Injectable()
export class Ndef extends AwesomeCordovaNativePlugin {
  @CordovaProperty()
  TNF_EMPTY: number;
  @CordovaProperty()
  TNF_WELL_KNOWN: number;
  @CordovaProperty()
  TNF_MIME_MEDIA: number;
  @CordovaProperty()
  TNF_ABSOLUTE_URI: number;
  @CordovaProperty()
  TNF_EXTERNAL_TYPE: number;
  @CordovaProperty()
  TNF_UNKNOWN: number;
  @CordovaProperty()
  TNF_UNCHANGED: number;
  @CordovaProperty()
  TNF_RESERVED: number;

  @Cordova({ sync: true })
  record(tnf: number, type: number[] | string, id: number[] | string, payload: number[] | string): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  textRecord(text: string, languageCode?: string, id?: number[] | string): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  uriRecord(uri: string, id?: number[] | string): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  absoluteUriRecord(uri: string, payload: number[] | string, id?: number[] | string): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  mimeMediaRecord(mimeType: string, payload: string): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  smartPoster(ndefRecords: any[], id?: number[] | string): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  emptyRecord(): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  androidApplicationRecord(packageName: string): NdefRecord {
    return;
  }

  @Cordova({ sync: true })
  encodeMessage(ndefRecords: any): any {
    return;
  }

  @Cordova({ sync: true })
  decodeMessage(bytes: any): any {
    return;
  }

  @Cordova({ sync: true })
  decodeTnf(tnf_byte: any): any {
    return;
  }

  @Cordova({ sync: true })
  encodeTnf(mb: any, me: any, cf: any, sr: any, il: any, tnf: any): any {
    return;
  }

  @Cordova({ sync: true })
  tnfToString(tnf: any): string {
    return;
  }

  @CordovaProperty()
  textHelper: TextHelper;

  @CordovaProperty()
  uriHelper: UriHelper;
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'util',
})
@Injectable()
export class NfcUtil extends AwesomeCordovaNativePlugin {
  @Cordova({ sync: true })
  toHex(i: number): string {
    return;
  }

  @Cordova({ sync: true })
  toPrintable(i: number): string {
    return;
  }

  @Cordova({ sync: true })
  bytesToString(i: number[]): string {
    return;
  }

  @Cordova({ sync: true })
  stringToBytes(s: string): number[] {
    return;
  }

  @Cordova({ sync: true })
  bytesToHexString(bytes: number[]): string {
    return;
  }

  @Cordova({ sync: true })
  isType(record: NdefRecord, tnf: number, type: number[] | string): boolean {
    return;
  }

  @Cordova({ sync: true })
  arrayBufferToHexString(buffer: ArrayBuffer): string {
    return;
  }

  @Cordova({ sync: true })
  hexStringToArrayBuffer(hexString: string): ArrayBuffer {
    return;
  }
}

export class TextHelper extends AwesomeCordovaNativePlugin {
  decodePayload(data: number[]): string {
    return;
  }
  encodePayload(text: string, lang: string): number[] {
    return;
  }
}

export class UriHelper extends AwesomeCordovaNativePlugin {
  decodePayload(data: number[]): string {
    return;
  }
  encodePayload(uri: string): number[] {
    return;
  }
}
