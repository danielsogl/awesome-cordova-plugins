import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface IndexItem {
  domain: string;
  identifier: string;
  title: string;
  description: string;

  /**
   * Url to image
   */
  url: string;

  /**
   * Item keywords
   */
  keywords?: Array<string>;

  /**
   * Lifetime in minutes
   */
  lifetime?: number;
}

/**
 * @name Index App Content
 * @description
 * This plugin gives you a Javascript API to interact with Core Spotlight on iOS (=> iOS 9).
 * You can add, update and delete items to the spotlight search index.
 * Spotlight Search will include these items in the result list. You can deep-link the search results with your app.
 *
 * @usage
 * ```typescript
 * import { IndexAppContent } from '@ionic-native/index-app-content';
 *
 *
 * constructor(private indexAppContent: IndexAppContent) { }
 *
 * ...
 *
 * var items = [
 *      {
 *        domain: 'com.my.domain',
 *        identifier: '88asdf7dsf',
 *        title: 'Foo',
 *        description: 'Bar',
 *        url: 'http://location/of/my/image.jpg',
 *    },
 *    {
 *        domain: 'com.other.domain',
 *        identifier: '9asd67g6a',
 *        title: 'Baz',
 *        description: 'Woot',
 *        url: 'http://location/of/my/image2.jpg',
 *     }
 * ];
 *
 * this.indexAppContent.setItems(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'IndexAppContent',
  plugin: 'cordova-plugin-indexappcontent',
  pluginRef: 'window.plugins.indexAppContent',
  repo: 'https://github.com/johanblomgren/cordova-plugin-indexappcontent',
  platforms: ['iOS']
})
@Injectable()
export class IndexAppContent extends IonicNativePlugin {

  /**
   * The option to index app content might not be available at all due to device limitations or user settings.
   * Therefore it's highly recommended to check upfront if indexing is possible.
   * @return {Promise<boolean>} Returns a promise that resolves with true if indexing is available, false if not
   */
  @Cordova()
  isIndexingAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Add or change items to spotlight index
   * @param {Array<IndexItem>} Array of items to index
   * @return {Promise<any>} Returns if index set was successfull
   */
  @Cordova()
  setItems(items: Array<IndexItem>): Promise<any> {
    return;
  }

  /**
   * If user taps on a search result in spotlight then the app will be launched.
   * You can register a Javascript handler to get informed when this happens.
   * @param {IndexItem} Clicked Item
   * @return {Promise<any>} Returns promise
   */
  @Cordova()
  onItemPressed(payload: IndexItem) {
    return;
  }

  /**
   * Clear all items stored for a given array of domains
   * @param {Array<string>} Array of domains to clear
   * @return {Promise<any>} Resolve if successfull
   */
  @Cordova()
  clearItemsForDomains(domains: Array<string>): Promise<any> {
    return;
  }

  /**
   * Clear all items stored for a given array of identifiers
   * @param {Array<string>} Array of identifiers to clear
   * @return {Promise<any>} Resolve if successfull
   */
  @Cordova()
  clearItemsForIdentifiers(identifiers: Array<string>): Promise<any> {
    return;
  }

  /**
   * You might want to avoid to update spotlight index too frequently.
   * Without calling this function a subsequent call to manipulate the index is only possible after 1440 minutes (= 24 hours)!
   * @param {number} Numeric value => 0
   */
  @Cordova()
  setIndexingInterval(intervalMinutes: number) {
    return;
  }

}
