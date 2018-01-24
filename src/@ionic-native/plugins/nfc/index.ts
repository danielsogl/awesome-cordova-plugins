import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin, CordovaProperty } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
declare let window: any;

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
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'nfc',
  repo: 'https://github.com/chariotsolutions/phonegap-nfc',
  platforms: ['Android', 'BlackBerry 10', 'Windows', 'Windows Phone 8']
})
/**
*@{ NFC } class methods
*/
@Injectable()
export class NFC extends IonicNativePlugin {
  /**
   * Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
    clearFunction: 'invalidateSession',
    clearWithArgs: true
  })
  beginSession(onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

  /**
   * Registers an event listener for any NDEF tag.
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
    clearFunction: 'removeNdefListener',
    clearWithArgs: true
  })
  addNdefListener(onSuccess?: Function, onFailure?: Function): Observable<NdefEvent> { return; }

  /**
   * Registers an event listener for tags matching any tag type.
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3,
    clearFunction: 'removeTagDiscoveredListener',
    clearWithArgs: true
  })
  addTagDiscoveredListener(onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

  /**
   * Registers an event listener for NDEF tags matching a specified MIME type.
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
    clearWithArgs: true
  })
  addMimeTypeListener(mimeType: string, onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

  /**
   * Registers an event listener for formatable NDEF tags.
   * @param onSuccess
   * @param onFailure
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 3
  })
  addNdefFormatableListener(onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

  /**
   * Writes an NdefMessage(array of ndef records) to a NFC tag.
   * @param message {any[]}
   * @returns {Promise<any>}
   */
  @Cordova()
  write(message: any[]): Promise<any> { return; }
  /**
   * Makes a NFC tag read only. **Warning** this is permanent.
   * @returns {Promise<any>}
   */
  @Cordova()
  makeReadyOnly(): Promise<any> { return; }

  /**
   * Shares an NDEF Message(array of ndef records) via peer-to-peer.
   * @param message An array of NDEF Records.
   * @returns {Promise<any>}
   */
  @Cordova()
  share(message: any[]): Promise<any> { return; }

  /**
   * Stop sharing NDEF data via peer-to-peer.
   * @returns {Promise<any>}
   */
  @Cordova()
  unshare(): Promise<any> { return; }

  /**
   * Erase a NDEF tag
   */
  @Cordova()
  erase(): Promise<any> { return; }

  /**
   * Send a file to another device via NFC handover.
   * @param uris A URI as a String, or an array of URIs.
   * @returns {Promise<any>}
   */
  @Cordova()
  handover(uris: string[]): Promise<any> { return; }

  /**
   * Stop sharing NDEF data via NFC handover.
   * @returns {Promise<any>}
   */
  @Cordova()
  stopHandover(): Promise<any> { return; }

  /**
   * Opens the device's NFC settings.
   * @returns {Promise<any>}
   */
  @Cordova()
  showSettings(): Promise<any> { return; }

  /**
   * Check if NFC is available and enabled on this device.
   * @returns {Promise<any>}
   */
  @Cordova()
  enabled(): Promise<any> { return; }
  /**
  * @{ NFC } class utility methods
  * for use with
  */
  /**
   * Convert byte array to string
   * @param bytes {number[]}
   * @returns {string}
   */
  @Cordova({ sync: true })
  bytesToString(bytes: number[]): string { return; }
  /**
   * Convert string to byte array.
   * @param str {string}
   * @returns {number[]}
   */
  @Cordova({ sync: true })
  stringToBytes(str: string): number[] { return; };
  /**
   * Convert byte array to hex string
   *
   * @param bytes {number[]}
   * @returns {string}
   */
  @Cordova({ sync: true })
  bytesToHexString(bytes: number[]): string { return; };

}
/**
 * @hidden
 */
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'ndef'
})
/**
*@{ Ndef } class methods
*@description
* Utility methods for creating ndef records for the ndef tag format.
* Move records into array before usage. Then pass an array to methods as parameters.
* Do not pass bytes as parameters for these methods, conversion is built in.
* For usage with nfc.write() and nfc.share()
*/
@Injectable()
export class Ndef extends IonicNativePlugin {

  @CordovaProperty
  TNF_EMPTY: number;
  @CordovaProperty
  TNF_WELL_KNOWN: number;
  @CordovaProperty
  TNF_MIME_MEDIA: number;
  @CordovaProperty
  TNF_ABSOLUTE_URI: number;
  @CordovaProperty
  TNF_EXTERNAL_TYPE: number;
  @CordovaProperty
  TNF_UNKNOWN: number;
  @CordovaProperty
  TNF_UNCHANGED: number;
  @CordovaProperty
  TNF_RESERVED: number;

  @CordovaProperty
  RTD_TEXT: number[];
  @CordovaProperty
  RTD_URI: number[];
  @CordovaProperty
  RTD_SMART_POSTER: number[];
  @CordovaProperty
  RTD_ALTERNATIVE_CARRIER: number[];
  @CordovaProperty
  RTD_HANDOVER_CARRIER: number[];
  @CordovaProperty
  RTD_HANDOVER_REQUEST: number[];
  @CordovaProperty
  RTD_HANDOVER_SELECT: number[];

  @Cordova({ sync: true })
  record(tnf: number, type: number[] | string, id: number[] | string, payload: number[] | string): NdefRecord { return; }

  @Cordova({ sync: true })
  textRecord(text: string, languageCode: string, id: number[] | string): NdefRecord { return; }

  @Cordova({ sync: true })
  uriRecord(uri: string, id: number[] | string): NdefRecord { return; }

  @Cordova({ sync: true })
  absoluteUriRecord(uri: string, payload: number[] | string, id: number[] | string): NdefRecord { return; }

  @Cordova({ sync: true })
  mimeMediaRecord(mimeType: string, payload: string): NdefRecord { return; }

  @Cordova({ sync: true })
  smartPoster(ndefRecords: any[], id?: number[] | string ): NdefRecord { return; }

  @Cordova({ sync: true })
  emptyRecord(): NdefRecord { return; }

  @Cordova({ sync: true })
  androidApplicationRecord(packageName: string): NdefRecord { return; }

  @Cordova({ sync: true })
  encodeMessage(ndefRecords: any): any { return; }

  @Cordova({ sync: true })
  decodeMessage(bytes: any): any { return; }

  @Cordova({ sync: true })
  docodeTnf(tnf_byte: any): any { return; }

  @Cordova({ sync: true })
  encodeTnf(mb: any, me: any, cf: any, sr: any, il: any, tnf: any): any { return; }

  @Cordova({ sync: true })
  tnfToString(tnf: any): string { return; }

  @CordovaProperty
  textHelper: TextHelper;

  @CordovaProperty
  uriHelper: UriHelper;
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'util'
})
@Injectable()
export class NfcUtil extends IonicNativePlugin {

  @Cordova({ sync: true })
  toHex(i: number): string { return; }

  @Cordova({ sync: true })
  toPrintable(i: number): string { return; }

  @Cordova({ sync: true })
  bytesToString(i: number[]): string { return; }

  @Cordova({ sync: true })
  stringToBytes(s: string): number[] { return; }

  @Cordova({ sync: true })
  bytesToHexString(bytes: number[]): string { return; }

  @Cordova({ sync: true })
  isType(record: NdefRecord, tnf: number, type: number[]|string): boolean { return; }
}

export class TextHelper extends IonicNativePlugin {
  decodePayload(data: number[]): string { return; }
  encodePayload(text: string, lang: string): number[] { return; }
}

export class UriHelper extends IonicNativePlugin {
  decodePayload(data: number[]): string { return; }
  encodePayload(uri: string): number[] { return; }
}
