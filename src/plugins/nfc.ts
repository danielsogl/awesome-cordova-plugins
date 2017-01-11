import { Plugin, Cordova } from './plugin';
import { Observable } from 'rxjs/Observable';
declare let window: any;
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
 * ```
 * import {NFC, Ndef} from 'ionic-native';
 *
 * let message = Ndef.textRecord('Hello world');
 * NFC.share([message]).then(onSuccess).catch(onError);
 *
 * ```
 */
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'nfc',
  repo: 'https://github.com/chariotsolutions/phonegap-nfc'
})
export class NFC {
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
  static addNdefListener(onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

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
  static addTagDiscoveredListener(onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

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
  static addMimeTypeListener(mimeType: string, onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

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
  static addNdefFormatableListener(onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

  /**
   * Qrites an NdefMessage to a NFC tag.
   * @param message {any[]}
   * @returns {Promise<any>}
   */
  @Cordova()
  static write(message: any[]): Promise<any> {return; }
  /**
   * Makes a NFC tag read only. **Warning** this is permanent.
   * @returns {Promise<any>}
   */
  @Cordova()
  static makeReadyOnly(): Promise<any> {return; }

  /**
   * Shares an NDEF Message via peer-to-peer.
   * @param message An array of NDEF Records.
   * @returns {Promise<any>}
   */
  @Cordova()
  static share(message: any[]): Promise<any> {return; }

  /**
   * Stop sharing NDEF data via peer-to-peer.
   * @returns {Promise<any>}
   */
  @Cordova()
  static unshare(): Promise<any> {return; }

  /**
   * Erase a NDEF tag
   */
  @Cordova()
  static erase(): Promise<any> {return; }

  /**
   * Send a file to another device via NFC handover.
   * @param uris A URI as a String, or an array of URIs.
   * @returns {Promise<any>}
   */
  @Cordova()
  static handover(uris: string[]): Promise<any> {return; }

  /**
   * Stop sharing NDEF data via NFC handover.
   * @returns {Promise<any>}
   */
  @Cordova()
  static stopHandover(): Promise<any> {return; }

  /**
   * Show the NFC settings on the device.
   * @returns {Promise<any>}
   */
  @Cordova()
  static showSettings(): Promise<any> {return; }

  /**
   * Check if NFC is available and enabled on this device.
   * @returns {Promise<any>}
   */
  @Cordova()
  static enabled(): Promise<any> {return; }
  /**
   * Convert bytes to string
   * @param bytes {number[]}
   * @returns {string}
   */
  @Cordova({ sync: true })
  static bytesToString(bytes: number[]): string {return; }
  /**
   * Convert string to bytes
   * @param str {string}
   * @returns {number[]}
   */
  @Cordova({ sync: true })
  static stringToBytes(str: string): number[] {return; };
  /**
   * Convert bytes to hex string
   * @param bytes {number[]}
   * @returns {string}
   */
  @Cordova({ sync: true })
  static bytesToHexString(bytes: number[]): string {return; };

}
/**
 * @private
 */
export class Ndef {
  /**
   * @private
   */
  static pluginName = 'NFC';
  /**
   * @private
   */
  static plugin = 'phonegap-nfc';
  /**
   * @private
   */
  static pluginRef = 'ndef';

  @Cordova({ sync: true })
  static uriRecord(uri: string): any { return; }

  @Cordova({ sync: true })
  static textRecord(text: string): any { return; }

  @Cordova({ sync: true })
  static mimeMediaRecord(mimeType: string, payload: string): any { return; }

  @Cordova({ sync: true })
  static androidApplicationRecord(packageName: string): any { return; }
}
