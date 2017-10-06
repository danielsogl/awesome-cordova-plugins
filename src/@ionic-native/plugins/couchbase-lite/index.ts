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
 * import { Http } from '@angular/http';
 * import { Observable } from 'rxjs/Observable'
 * constructor(private couchbase: CouchbaseLite, private platform:Platform,private _http:Http) {
 *    this.initMethod();
 * }
 * url:string;
 * initMethod() {
 *    this.couchbase.getURL().then((url)=> {
 *        this.url = url;
 *    })
 * }
 * getUrl() {
 *      return this.url;
 * }
 * // DATABASES //
 * createDatabase(database_name:string) {
 *      let url = this.getUrl();
 *      url = url+database_name;
 *      return this._http
 *        .put(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *         })
 *  }
 * deleteDatabase(database_name:string) {
 *      let url = this.getUrl();
 *      url = url+database_name;
 *      return this._http
 *        .delete(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })
 * }
 *
 * getAllDbs() {
 *      let url = this.getUrl();
 *      url = url+'_all_dbs';
 *      return this._http
 *        .get(url)
 *        .map(data => { this.results = data['results'] })
 *        .catch((error:any) => {
 *           return Observable.throw(error.json() || 'Couchbase Lite error');
 *        })
 * }
 *
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
