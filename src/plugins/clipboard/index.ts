import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Clipboard
 * @description
 * Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.
 *
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
  plugin: 'cordova-clipboard',
  pluginRef: 'cordova.plugins.clipboard',
  repo: 'https://github.com/ihadeed/cordova-clipboard',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
@Injectable()
export class Clipboard extends IonicNativePlugin {

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
