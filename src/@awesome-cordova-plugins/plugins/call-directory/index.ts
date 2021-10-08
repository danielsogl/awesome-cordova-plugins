import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface CallDirectoryItem {
  label: string;
  number: string;
}

export interface CallDirectoryLog {
  plugin: string[];
  extension: string[];
}

/**
 * @name Call Directory
 * @description
 * This plugin can add phone numbers to an Callkit call directory extension. Call `reloadExtension` after using `addIdentification` and `removeIdentification`
 * to process the changes in the call directory extension.
 * @usage
 * ```typescript
 * import { CallDirectory } from '@awesome-cordova-plugins/call-directory/ngx';
 *
 *
 * constructor(private callDirectory: CallDirectory) { }
 *
 *
 * let items = [{label: "Hello", number: "123"}];
 * this.callDirectory.addIdentification(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.callDirectory.reloadExtension()
 *   .then(res: string) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 * @Interfaces
 * CallDirectoryItem
 * CallDirectoryLog
 */
@Plugin({
  pluginName: 'CallDirectory',
  plugin: 'cordova-plugin-call-directory',
  pluginRef: 'CallDirectory',
  repo: 'https://github.com/GEDYSIntraWare/cordova-plugin-call-directory',
  install:
    'cordova plugin add cordova-plugin-call-directory --variable EXT_NAME="Cordova-Directory" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES="NO"',
  installVariables: ['EXT_NAME', 'ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES'],
  platforms: ['iOS'],
})
@Injectable()
export class CallDirectory extends AwesomeCordovaNativePlugin {
  /**
   * Check if the call directory extension is available and enabled
   *
   * @returns {Promise<boolean>} Returns a promise with result
   */
  @Cordova()
  isAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Add identification numbers
   *
   * @param {CallDirectoryItem[]} items Set of numbers with labels
   * @returns {Promise<any>} Returns a promise that resolves when numbers are added
   */
  @Cordova()
  addIdentification(items: CallDirectoryItem[]): Promise<any> {
    return;
  }

  /**
   * Remove identification numbers
   *
   * @param {CallDirectoryItem[]} items Set of numbers with arbitrary label
   * @returns {Promise<any>} Returns a promise that resolves when numbers are removed
   */
  @Cordova()
  removeIdentification(items: CallDirectoryItem[]): Promise<any> {
    return;
  }

  /**
   * Remove all items from call directory. Refreshes immediately.
   *
   * @returns {Promise<any>} Returns a promise after refresh with message
   */
  @Cordova()
  removeAllIdentification(): Promise<any> {
    return;
  }

  /**
   * Get all numbers and labels in call directory
   *
   * @returns {CallDirectoryItem[]} Returns a promise that resolves with an array of all items
   */
  @Cordova()
  getAllItems(): Promise<CallDirectoryItem[]> {
    return;
  }

  /**
   * Reload extension to process queued changes
   *
   * @returns {Promise<string>} Returns a promise after refresh with message
   */
  @Cordova()
  reloadExtension(): Promise<string> {
    return;
  }

  /**
   * Get log from plugin and call directory extension
   *
   * @returns {Promise<CallDirectoryLog>} Returns a promise with an object of log messages
   */
  @Cordova()
  getLog(): Promise<CallDirectoryLog> {
    return;
  }
}
