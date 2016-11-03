import { Plugin, Cordova } from './plugin';
/**
 * @name Market
 * @description
 * Opens or search an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```
 * import {Market} from 'ionic-native';
 *
 * Market.open('your.package.name');
 * 
 * //or
 * 
 * Market.search('keyword');
 *
 * ```
 */
@Plugin({
  pluginName: 'Market',
  plugin: 'cordova-plugin-market',
  pluginRef: 'plugins.market',
  repo: 'https://github.com/xmartlabs/cordova-plugin-market'
})
export class Market {
  /**
   * Opens an app in Google Play / App Store
   * @param appId {string} Package name
   * @param callbacks {Object} Optional callbacks
   */
  @Cordova({sync: true})
  static open(appId: string, callbacks?: {success?: Function, failure?: Function}): void { }

  /**
   * Search apps in Google Play / App Store
   * @param key {string} Keyword
   * @param callbacks {Object} Optional callbacks
   */
  @Cordova({sync: true})
  static search(key: string, callbacks?: {success?: Function, failure?: Function}): void { }
}
