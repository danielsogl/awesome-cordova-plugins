/**
 * @name InAppPurchase
 * @description
 * A lightweight Cordova plugin for in app purchases on iOS/Android.
 *
 * @usage
 * ```ts
 * import {InAppPurchase} from 'ionic-native';
 *
 * InAppPurchase
 *  .getProducts(['com.yourapp.prod1', 'com.yourapp.prod2', ...])
 *  .then((products) => {
 *    console.log(products);
 *     //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
 *  })
 *  .catch((err) => {
 *    console.log(err);
 *  });
 *
 *
 * InAppPurchase
 *   .buy('com.yourapp.prod1')
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
 * ```ts
 * // fist buy the product...
 * InAppPurchase
 *   .buy('com.yourapp.consumable_prod1')
 *   .then(data => InAppPurchase.consume(data.productType, data.receipt, data.signature))
 *   .then(() => console.log('product was successfully consumed!'))
 *   .catch( err=> console.log(err))
 * ```
 *
 *
 */
export declare class InAppPurchase {
    /**
     * Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
     * @param {array<string>} productId an array of product ids.
     * @returns {Promise} Returns a Promise that resolves with an array of objects.
     */
    static getProducts(productId: string[]): Promise<any>;
    /**
     * Buy a product that matches the productId.
     * @param {string} productId A string that matches the product you want to buy.
     * @returns {Promise} Returns a Promise that resolves with the transaction details.
     */
    static buy(productId: string): Promise<{
        transactionId: string;
        receipt: string;
        signature: string;
        productType: string;
    }>;
    /**
     * Same as buy, but for subscription based products.
     * @param {string} productId A string that matches the product you want to subscribe to.
     * @returns {Promise} Returns a Promise that resolves with the transaction details.
     */
    static subscribe(productId: string): Promise<{
        transactionId: string;
        receipt: string;
        signature: string;
        productType: string;
    }>;
    /**
     * Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
     * @param {string} productType
     * @param {string} receipt
     * @param {string} signature
     */
    static consume(productType: string, receipt: string, signature: string): Promise<any>;
    /**
     * Restore all purchases from the store
     * @returns {Promise} Returns a promise with an array of purchases.
     */
    static restorePurchases(): Promise<any>;
    /**
     * Get the receipt.
     * @returns {Promise<string>} Returns a promise that contains the string for the receipt
     */
    static getReceipt(): Promise<string>;
}
