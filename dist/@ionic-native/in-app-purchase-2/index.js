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
import { Plugin, IonicNativePlugin, Cordova, CordovaProperty } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var IAPError = (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
/**
 * @name In App Purchase 2
 * @description
 *
 * @usage
 * ```
 * import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2';
 *
 *
 * constructor(private inAppPurchase2: InAppPurchase2) { }
 *
 * ...
 *
 *
 * ```
 */
var InAppPurchase2 = (function (_super) {
    __extends(InAppPurchase2, _super);
    function InAppPurchase2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get product by id or alias
     * @param idOrAlias
     */
    InAppPurchase2.prototype.get = function (idOrAlias) { return; };
    /**
     * Register error handler
     * @param onError {Function} function to call on error
     */
    InAppPurchase2.prototype.error = function (onError) { };
    /**
     * Add or register a product
     * @param product {IAPProductOptions}
     */
    InAppPurchase2.prototype.register = function (product) { };
    /**
     *
     * @param query
     * @param event
     * @param callback
     * @return {IAPProductEvents}
     */
    InAppPurchase2.prototype.when = function (query, event, callback) { return; };
    /**
     * Identical to `when`, but the callback will be called only once. After being called, the callback will be unregistered.
     * @param query {string | IAPProduct}
     * @param [event] {event}
     * @param [callback] {IAPQueryCallback}
     * @return {IAPProductEvents}
     */
    InAppPurchase2.prototype.once = function (query, event, callback) { return; };
    /**
     * Unregister a callback. Works for callbacks registered with ready, when, once and error.
     * @param callback {Function}
     */
    InAppPurchase2.prototype.off = function (callback) { };
    InAppPurchase2.prototype.order = function (product, additionalData) { return; };
    /**
     *
     * @return {Promise<any>} returns a promise that resolves when the store is ready
     */
    InAppPurchase2.prototype.ready = function () { return; };
    InAppPurchase2.prototype.refresh = function () { };
    return InAppPurchase2;
}(IonicNativePlugin));
InAppPurchase2.decorators = [
    { type: Injectable },
];
/** @nocollapse */
InAppPurchase2.ctorParameters = function () { return []; };
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "QUIET", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERROR", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "WARNING", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "INFO", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "DEBUG", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "verbosity", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Boolean)
], InAppPurchase2.prototype, "sandbox", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "FREE_SUBSCRIPTION", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "PAID_SUBSCRIPTION", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "NON_RENEWING_SUBSCRIPTION", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "CONSUMABLE", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "NON_CONSUMABLE", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_SETUP", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_LOAD", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_PURCHASE", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_LOAD_RECEIPTS", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_CLIENT_INVALID", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_PAYMENT_CANCELLED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_PAYMENT_INVALID", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_PAYMENT_NOT_ALLOWED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_UNKNOWN", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_REFRESH_RECEIPTS", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_INVALID_PRODUCT_ID", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_FINISH", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_COMMUNICATION", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_MISSING_TOKEN", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_VERIFICATION_FAILED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_BAD_RESPONSE", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_REFRESH", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_PAYMENT_EXPIRED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_DOWNLOAD", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "REGISTERED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "INVALID", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "VALID", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "REQUESTED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "INITIATED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "APPROVED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "FINISHED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "OWNED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "DOWNLOADING", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], InAppPurchase2.prototype, "DOWNLOADED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "INVALID_PAYLOAD", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "CONNECTION_FAILED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Number)
], InAppPurchase2.prototype, "PURCHASE_EXPIRED", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Object)
], InAppPurchase2.prototype, "products", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Object)
], InAppPurchase2.prototype, "validator", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Object)
], InAppPurchase2.prototype, "log", void 0);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], InAppPurchase2.prototype, "get", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], InAppPurchase2.prototype, "error", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InAppPurchase2.prototype, "register", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Object)
], InAppPurchase2.prototype, "when", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Object)
], InAppPurchase2.prototype, "once", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], InAppPurchase2.prototype, "off", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], InAppPurchase2.prototype, "order", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InAppPurchase2.prototype, "ready", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InAppPurchase2.prototype, "refresh", null);
InAppPurchase2 = __decorate([
    Plugin({
        pluginName: 'InAppPurchase2',
        plugin: 'cc.fovea.cordova.purchase',
        pluginRef: 'store',
        repo: 'https://github.com/j3k0/cordova-plugin-purchase',
        platforms: ['iOS', 'Android', 'Windows'],
        install: 'ionic cordova plugin add cc.fovea.cordova.purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY>"'
    })
], InAppPurchase2);
export { InAppPurchase2 };
//# sourceMappingURL=index.js.map