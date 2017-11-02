import { Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Country
 * @description
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
 *
 * ```
 */
@Plugin({
  pluginName: 'Country',
  plugin: '',
  pluginRef: '',
  repo: '',
  platforms: []
})
@Injectable()
export class Country extends IonicNativePlugin {

}
