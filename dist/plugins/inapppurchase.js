"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
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
var InAppPurchase = (function () {
    function InAppPurchase() {
    }
    /**
     * Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
     * @param {array<string>} productId an array of product ids.
     * @returns {Promise} Returns a Promise that resolves with an array of objects.
     */
    InAppPurchase.getProducts = function (productId) { return; };
    /**
     * Buy a product that matches the productId.
     * @param {string} productId A string that matches the product you want to buy.
     * @returns {Promise} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchase.buy = function (productId) { return; };
    /**
     * Same as buy, but for subscription based products.
     * @param {string} productId A string that matches the product you want to subscribe to.
     * @returns {Promise} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchase.subscribe = function (productId) { return; };
    /**
     * Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
     * @param {string} productType
     * @param {string} receipt
     * @param {string} signature
     */
    InAppPurchase.consume = function (productType, receipt, signature) { return; };
    /**
     * Restore all purchases from the store
     * @returns {Promise} Returns a promise with an array of purchases.
     */
    InAppPurchase.restorePurchases = function () { return; };
    /**
     * Get the receipt.
     * @returns {Promise<string>} Returns a promise that contains the string for the receipt
     */
    InAppPurchase.getReceipt = function () { return; };
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "getProducts", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "buy", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "subscribe", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "consume", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "restorePurchases", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true,
            platforms: ['iOS']
        })
    ], InAppPurchase, "getReceipt", null);
    InAppPurchase = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-inapppurchase',
            pluginRef: 'inAppPurchase',
            platforms: ['Android', 'iOS'],
            repo: 'https://github.com/AlexDisler/cordova-plugin-inapppurchase'
        })
    ], InAppPurchase);
    return InAppPurchase;
}());
exports.InAppPurchase = InAppPurchase;
//# sourceMappingURL=inapppurchase.js.map