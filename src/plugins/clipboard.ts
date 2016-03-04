import {Plugin, Cordova} from './plugin';

/**
 * Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.
 *
 * Requires Cordova plugin: https://github.com/VersoSolutions/CordovaClipboard
 *
 * ```
 * ionic plugin add https://github.com/VersoSolutions/CordovaClipboard.git
 * ```
 *
 * @usage
 * ```js
 * Clipboard.copy("Hello world");
 *
 * Clipboard.paste().then(
 *    (resolve : string) => {
  *     alert(resolve);
*     },
 *     (reject : string) => {
 *     alert("Error: " + reject);
 *     }
*     );
 * );
 * ```
 */
@Plugin({
  plugin: 'com.verso.cordova.clipboard',
  pluginRef: 'cordova.plugins.clipboard'
})
export class Clipboard {

  /**
   * Copies the given text
   * @param text
   * @returns {Promise<T>}
   */
  @Cordova()
  static copy(text : string) : Promise<any> {
    return new Promise((res, resj) => {});
  }

  /**
   * Pastes the text stored in clipboard
   * @returns {Promise<T>}
   */
  @Cordova()
  static paste() : Promise<any> {
    return new Promise((res, rej) => {});
  }

}
