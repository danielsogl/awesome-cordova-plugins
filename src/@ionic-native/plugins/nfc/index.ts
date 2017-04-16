import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
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
@Plugin({
  pluginName: 'NFC',
  plugin: 'phonegap-nfc',
  pluginRef: 'nfc',
  repo: 'https://github.com/chariotsolutions/phonegap-nfc'
})
  /**
  *@{ NFC } class methods
  */
@Injectable()
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
  addNdefListener(onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

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
  addTagDiscoveredListener(onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

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
  addMimeTypeListener(mimeType: string, onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

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
  addNdefFormatableListener(onSuccess?: Function, onFailure?: Function): Observable<any> {return; }

  /**
   * Writes an NdefMessage(array of ndef records) to a NFC tag.
   * @param message {any[]}
   * @returns {Promise<any>}
   */
  @Cordova()
  write(message: any[]): Promise<any> {return; }
  /**
   * Makes a NFC tag read only. **Warning** this is permanent.
   * @returns {Promise<any>}
   */
  @Cordova()
  makeReadyOnly(): Promise<any> {return; }

  /**
   * Shares an NDEF Message(array of ndef records) via peer-to-peer.
   * @param message An array of NDEF Records.
   * @returns {Promise<any>}
   */
  @Cordova()
  share(message: any[]): Promise<any> {return; }

  /**
   * Stop sharing NDEF data via peer-to-peer.
   * @returns {Promise<any>}
   */
  @Cordova()
  unshare(): Promise<any> {return; }

  /**
   * Erase a NDEF tag
   */
  @Cordova()
  erase(): Promise<any> {return; }

  /**
   * Send a file to another device via NFC handover.
   * @param uris A URI as a String, or an array of URIs.
   * @returns {Promise<any>}
   */
  @Cordova()
  handover(uris: string[]): Promise<any> {return; }

  /**
   * Stop sharing NDEF data via NFC handover.
   * @returns {Promise<any>}
   */
  @Cordova()
  stopHandover(): Promise<any> {return; }

  /**
   * Opens the device's NFC settings.
   * @returns {Promise<any>}
   */
  @Cordova()
  showSettings(): Promise<any> {return; }

  /**
   * Check if NFC is available and enabled on this device.
   * @returns {Promise<any>}
   */
  @Cordova()
  enabled(): Promise<any> {return; }
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
  bytesToString(bytes: number[]): string {return; }
  /**
   * Convert string to byte array.
   * @param str {string}
   * @returns {number[]}
   */
  @Cordova({ sync: true })
  stringToBytes(str: string): number[] {return; };
  /**
   * Convert byte array to hex string
   * 
   * @param bytes {number[]}
   * @returns {string}
   */
  @Cordova({ sync: true })
  bytesToHexString(bytes: number[]): string {return; };

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
export class Ndef {

  @Cordova({ sync: true })
  uriRecord(uri: string): any { return; }

  @Cordova({ sync: true })
  textRecord(text: string): any { return; }

  @Cordova({ sync: true })
  mimeMediaRecord(mimeType: string, payload: string): any { return; }

  @Cordova({ sync: true })
  androidApplicationRecord(packageName: string): any { return; }
}
