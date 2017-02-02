import { Plugin, Cordova } from './plugin';

/**
 * @name Couchbase Lite
 * @description
 * Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android
 *
 * @usage
 * ```
 * import { CouchbaseLite } from 'ionic-native';
 *
 * CouchbaseLite.getURL()
 *   .then((url: any) => console.log(url))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'CouchbaseLite',
  plugin: 'https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin',
  pluginRef: 'cblite',
  repo: 'https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin',
})
export class CouchbaseLite {

  /**
   * Get the database url
   * @return {Promise<any>} Returns a promise that resolves with the local database url
   */
  @Cordova({
    callbackStyle: 'node'
  })
  static getURL(): Promise<any> { return;  }

}
