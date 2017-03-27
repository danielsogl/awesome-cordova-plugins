import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';
/**
 * @name Clipboard
 * @description
 * Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.
 *
 * Requires Cordova plugin: https://github.com/VersoSolutions/CordovaClipboard
 * For more info, please see the [Clipboard plugin docs](https://github.com/VersoSolutions/CordovaClipboard.git).
 *
 * @usage
 * ```typescript
 * import { Clipboard } from '@ionic-native/clipboard';
 *
 * constructor(private clipboard: Clipboard) { }
 *
 * ...
 *
 *
 * this.clipboard.copy('Hello world');
 *
 * this.clipboard.paste().then(
 *    (resolve: string) => {
 *       alert(resolve);
 *     },
 *     (reject: string) => {
 *       alert('Error: ' + reject);
 *     }
 *   );
 * ```
 */
@Plugin({
  pluginName: 'Clipboard',
  plugin: 'https://github.com/VersoSolutions/CordovaClipboard.git',
  pluginRef: 'cordova.plugins.clipboard',
  repo: 'https://github.com/VersoSolutions/CordovaClipboard',
  platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser']
})
@Injectable()
export class Clipboard {

  /**
   * Copies the given text
   * @param {string} text Text that gets copied on the system clipboard
   * @returns {Promise<any>} Returns a promise after the text has been copied
   */
  @Cordova()
  copy(text: string): Promise<any> { return; }

  /**
   * Pastes the text stored in clipboard
   * @returns {Promise<any>} Returns a promise after the text has been pasted
   */
  @Cordova()
  paste(): Promise<any> { return; }

}
