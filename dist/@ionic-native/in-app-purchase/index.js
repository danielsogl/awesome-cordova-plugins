var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var InAppPurchase = (function (_super) {
    __extends(InAppPurchase, _super);
    function InAppPurchase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
     * @param {array<string>} productId an array of product ids.
     * @returns {Promise<any>} Returns a Promise that resolves with an array of objects.
     */
    InAppPurchase.prototype.getProducts = function (productId) { return; };
    /**
     * Buy a product that matches the productId.
     * @param {string} productId A string that matches the product you want to buy.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchase.prototype.buy = function (productId) { return; };
    /**
     * Same as buy, but for subscription based products.
     * @param {string} productId A string that matches the product you want to subscribe to.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchase.prototype.subscribe = function (productId) { return; };
    /**
     * Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
     * @param {string} productType
     * @param {string} receipt
     * @param {string} signature
     * @returns {Promise<any>}
     */
    InAppPurchase.prototype.consume = function (productType, receipt, signature) { return; };
    /**
     * Restore all purchases from the store
     * @returns {Promise<any>} Returns a promise with an array of purchases.
     */
    InAppPurchase.prototype.restorePurchases = function () { return; };
    /**
     * Get the receipt.
     * @returns {Promise<string>} Returns a promise that contains the string for the receipt
     */
    InAppPurchase.prototype.getReceipt = function () { return; };
    return InAppPurchase;
}(IonicNativePlugin));
InAppPurchase.decorators = [
    { type: Injectable },
];
/** @nocollapse */
InAppPurchase.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        otherPromise: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InAppPurchase.prototype, "getProducts", null);
__decorate([
    Cordova({
        otherPromise: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InAppPurchase.prototype, "buy", null);
__decorate([
    Cordova({
        otherPromise: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InAppPurchase.prototype, "subscribe", null);
__decorate([
    Cordova({
        otherPromise: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], InAppPurchase.prototype, "consume", null);
__decorate([
    Cordova({
        otherPromise: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InAppPurchase.prototype, "restorePurchases", null);
__decorate([
    Cordova({
        otherPromise: true,
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InAppPurchase.prototype, "getReceipt", null);
InAppPurchase = __decorate([
    Plugin({
        pluginName: 'InAppPurchase',
        plugin: 'cordova-plugin-inapppurchase',
        pluginRef: 'inAppPurchase',
        repo: 'https://github.com/AlexDisler/cordova-plugin-inapppurchase',
        platforms: ['Android', 'iOS']
    })
], InAppPurchase);
export { InAppPurchase };
//# sourceMappingURL=index.js.map