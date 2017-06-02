import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';


/**
 * @name In App Purchase
 * @description
 * A lightweight Cordova plugin for in app purchases on iOS/Android.
 *
 * @usage
 * ```typescript
 * import { InAppPurchase } from '@ionic-native/in-app-purchase';
 *
 * constructor(private iap: InAppPurchase) { }
 *
 * ...
 *
 * this.iap
 *  .getProducts(['prod1', 'prod2', ...])
 *  .then((products) => {
 *    console.log(products);
 *     //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
 *  })
 *  .catch((err) => {
 *    console.log(err);
 *  });
 *
 *
 * this.iap
 *   .buy('prod1')
 *   .then((data)=> {
 *     console.log(data);
 *     // {
 *     //   transactionId: ...
 *     //   receipt: ...
 *     //   signature: ...
 *     // }
 *   })
 *   .catch((err)=> {
 *     console.log(err);
 *   });
 *
 * ```
 *
 * @advanced
 *
 * ```typescript
 * // fist buy the product...
 * this.iap
 *   .buy('consumable_prod1')
 *   .then(data => this.iap.consume(data.productType, data.receipt, data.signature))
 *   .then(() => console.log('product was successfully consumed!'))
 *   .catch( err=> console.log(err))
 * ```
 */
@Plugin({
  pluginName: 'InAppPurchase',
  plugin: 'cordova-plugin-inapppurchase',
  pluginRef: 'inAppPurchase',
  repo: 'https://github.com/AlexDisler/cordova-plugin-inapppurchase',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class InAppPurchase extends IonicNativePlugin {

  /**
   * Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
   * @param {array<string>} productId an array of product ids.
   * @returns {Promise<any>} Returns a Promise that resolves with an array of objects.
   */
  @Cordova({
    otherPromise: true
  })
  getProducts(productId: string[]): Promise<any> { return; }

  /**
   * Buy a product that matches the productId.
   * @param {string} productId A string that matches the product you want to buy.
   * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
   */
  @Cordova({
    otherPromise: true
  })
  buy(productId: string): Promise<{ transactionId: string, receipt: string, signature: string, productType: string }> { return; }

  /**
   * Same as buy, but for subscription based products.
   * @param {string} productId A string that matches the product you want to subscribe to.
   * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
   */
  @Cordova({
    otherPromise: true
  })
  subscribe(productId: string): Promise<{ transactionId: string, receipt: string, signature: string, productType: string }> { return; }

  /**
   * Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
   * @param {string} productType
   * @param {string} receipt
   * @param {string} signature
   * @returns {Promise<any>}
   */
  @Cordova({
    otherPromise: true
  })
  consume(productType: string, receipt: string, signature: string): Promise<any> { return; }

  /**
   * Restore all purchases from the store
   * @returns {Promise<any>} Returns a promise with an array of purchases.
   */
  @Cordova({
    otherPromise: true
  })
  restorePurchases(): Promise<any> { return; }

  /**
   * Get the receipt.
   * @returns {Promise<string>} Returns a promise that contains the string for the receipt
   */
  @Cordova({
    otherPromise: true,
    platforms: ['iOS']
  })
  getReceipt(): Promise<string> { return; }

}
