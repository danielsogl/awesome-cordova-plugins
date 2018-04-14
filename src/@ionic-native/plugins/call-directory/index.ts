import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface CallDirectoryItem {
  label: string;
  number: string;
}

/**
 * @name Call Directory
 * @description
 * This plugin can add phone numbers to an Callkit call diretory extension. Call `reloadExtension` after using `addentIfication` and `removeIdentification`
 * to process the changes in the call directory extension.
 *
 * @usage
 * ```typescript
 * import { CallDirectory } from '@ionic-native/call-directory';
 *
 *
 * constructor(private callDirectory: CallDirectory) { }
 *
 * ...
 *
 *
 * let items = [{label: "Hello", number: "123"}];
 * this.callDirectory.addIdentification(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'CallDirectory',
  plugin: 'cordova-plugin-call-directory',
  pluginRef: 'CallDirectory',
  repo: 'https://github.com/GEDYSIntraWare/cordova-plugin-call-directory',
  install: 'cordova plugin add cordova-plugin-call-directory --variable EXT_NAME="Cordova-Directory" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES="NO"',
  installVariables: ['EXT_NAME', 'ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES'],
})
@Injectable()
export class CallDirectory extends IonicNativePlugin {

  /**
   * Check if the call directory extension is available and enabled
   * @return {Promise<boolean>} Returns a promise with result
   */
  @Cordova()
  isAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Add identification numbers
   * @param items {Array<CallDirectoryItem>} Set of numbers with labels
   * @return {Promise<any>} Returns a promise that resolves when numbers are added
   */
  @Cordova()
  addIdentification(items: string): Promise<any> {
    return;
  }

  /**
   * Remove identification numbers
   * @param items {Array<CallDirectoryItem>} Set of numbers with arbitrary label
   * @return {Promise<any>} Returns a promise that resolves when numbers are removed
   */
  @Cordova()
  removeIdentification(items: string): Promise<any> {
    return;
  }

  /**
   * Remove all items from call directory. Refreshes immediatly.
   * @return {Promise<any>} Returns a promise after refresh with message
   */
  @Cordova()
  removeAllIdentification(): Promise<any> {
    return;
  }

  /**
   * Get all numbers and labels in call directory
   * @return {Array<CallDirectoryItem>} Returns a promise that resolves with an array of all items
   */
  @Cordova()
  getAllItems(): Promise<Array<CallDirectoryItem>> {
    return;
  }

  /**
   * Reload extension to process queued changes
   * @return {Promise<string>} Returns a promise after refresh with message
   */
  @Cordova()
  reloadExtension(): Promise<string> {
    return;
  }
}
