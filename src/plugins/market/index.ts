import { Plugin, Cordova } from './plugin';
/**
 * @name Market
 * @description
 * Opens an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```
 * import {Market} from 'ionic-native';
 *
 * Market.open('your.package.name');
 *
 * ```
 */
@Plugin({
  pluginName: 'Market',
  plugin: 'cordova-plugin-market',
  pluginRef: 'cordova.plugins.market',
  repo: 'https://github.com/xmartlabs/cordova-plugin-market'
})
export class Market {

  /**
   * Opens an app in Google Play / App Store
   * @param appId {string} Package name
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure'
  })
  static open(appId: string): Promise<any> { return; }

  /**
   * Search apps by keyword
   * @param keyword {string} Keyword
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure',
    platforms: ['Android']
  })
  static search(keyword: string): Promise<any> { return; }

}
