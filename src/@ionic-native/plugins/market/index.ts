import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
/**
 * @name Market
 * @description
 * Opens an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```
 * import { Market } from '@ionic-native/market';
 *
 * constructor(private market: Market) { }
 *
 * ...
 *
 * this.market.open('your.package.name');
 *
 * ```
 */
@Plugin({
  pluginName: 'Market',
  plugin: 'cordova-plugin-market',
  pluginRef: 'cordova.plugins.market',
  repo: 'https://github.com/xmartlabs/cordova-plugin-market',
  platforms: ['Android', 'iOS']
})
@Injectable()
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
  open(appId: string): Promise<any> { return; }

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
  search(keyword: string): Promise<any> { return; }

}
