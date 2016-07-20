import { Cordova, Plugin } from './plugin';


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
 * import { Clipboard } from 'ionic-native';
 *
 *
 * Clipboard.copy('Hello world');
 *
 * Clipboard.paste().then(
 *    (resolve: string) => {
 *     alert(resolve);
 *     },
 *     (reject: string) => {
 *     alert('Error: ' + reject);
 *     }
 *     );
 * );
 * ```
 */
@Plugin({
  plugin: 'https://github.com/VersoSolutions/CordovaClipboard.git',
  pluginRef: 'cordova.plugins.clipboard',
  repo: 'https://github.com/VersoSolutions/CordovaClipboard',
  platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser']
})
export class Clipboard {

  /**
   * Copies the given text
   * @param {string} text Text that gets copied on the system clipboard
   * @returns {Promise<T>} Returns a promise after the text has been copied
   */
  @Cordova()
  static copy(text: string): Promise<any> { return; }

  /**
   * Pastes the text stored in clipboard
   * @returns {Promise<T>} Returns a promise after the text has been pasted
   */
  @Cordova()
  static paste(): Promise<any> { return; }

}
