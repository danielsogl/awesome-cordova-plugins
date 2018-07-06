import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class CouchbaseLite extends IonicNativePlugin {
    /**
     * Get the database url
     * @return {Promise<any>} Returns a promise that resolves with the local database url
     */
    getURL(): Promise<any>;
}
