import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';


/**
 * @name Couchbase Lite
 * @description
 * Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android
 *
 * @usage
 * ```typescript
 * import { CouchbaseLite } from '@ionic-native/couchbase-lite';
 *
 * constructor(private couchbase: CouchbaseLite) {
 *
 *   couchbase.getURL()
 *     .then(url => console.log(url))
 *     .catch(error => console.error(error));
 *
 * }
 *
 * ```
 */
@Plugin({
  pluginName: 'CouchbaseLite',
  plugin: 'couchbase-lite-phonegap-plugin',
  pluginRef: 'cblite',
  repo: 'https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class CouchbaseLite extends IonicNativePlugin {

  /**
   * Get the database url
   * @return {Promise<any>} Returns a promise that resolves with the local database url
   */
  @Cordova({
    callbackStyle: 'node'
  })
  getURL(): Promise<any> { return; }

}
