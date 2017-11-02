import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Country
 * @description Get the 2-letter ISO code from Android's Locale package. Useful when your device may not have GPS or cellular data.
 *
 * @usage
 * ```typescript
 * import { Country } from '@ionic-native/country';
 *
 *
 * constructor(private country: Country) { }
 *
 * ...
 *
 *  this.country.get()
 *   .then(
 *     isoCode => console.log('Locale is: ' + isoCode),
 *     error => console.error('Error getting isoCode', error)
 *   );
 * ```
 */
@Plugin({
  pluginName: 'Country',
  plugin: 'cordova-plugin-country',
  pluginRef: 'plugins.country',
  repo: 'https://github.com/cloakedninjas/cordova-plugin-country',
  platforms: ["Android"]
})
@Injectable()
export class Country extends IonicNativePlugin {
  /**
   * Get the 2-letter ISO code from Android's Locale package.
   * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
   */
  @Cordova()
  get(): Promise<string> { return; }
}
