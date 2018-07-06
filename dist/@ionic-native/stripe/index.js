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
 * @name Stripe
 * @description
 * A plugin that allows you to use Stripe's Native SDKs for Android and iOS.
 *
 * @usage
 * ```typescript
 * import { Stripe } from '@ionic-native/stripe';
 *
 * constructor(private stripe: Stripe) { }
 *
 * ...
 *
 * this.stripe.setPublishableKey('my_publishable_key');
 *
 * let card = {
 *  number: '4242424242424242',
 *  expMonth: 12,
 *  expYear: 2020,
 *  cvc: '220'
 * };
 *
 * this.stripe.createCardToken(card)
 *    .then(token => console.log(token))
 *    .catch(error => console.error(error));
 *
 * ```
 *
 * @interfaces
 * StripeCardTokenParams
 */
var Stripe = (function (_super) {
    __extends(Stripe, _super);
    function Stripe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set publishable key
     * @param publishableKey {string} Publishable key
     * @return {Promise<void>}
     */
    Stripe.prototype.setPublishableKey = function (publishableKey) { return; };
    /**
     * Create Credit Card Token
     * @param params {StripeCardTokenParams} Credit card information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    Stripe.prototype.createCardToken = function (params) { return; };
    /**
     * Create a bank account token
     * @param params {StripeBankAccountParams} Bank account information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    Stripe.prototype.createBankAccountToken = function (params) { return; };
    /**
     * Validates a credit card number
     * @param cardNumber {string} Credit card number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCardNumber = function (cardNumber) { return; };
    /**
     * Validates a CVC number
     * @param cvc {string} CVC number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCVC = function (cvc) { return; };
    /**
     * Validates an expiry date
     * @param expMonth {string} expiry month
     * @param expYear {string} expiry year
     * @return {Promise<any>} returns a promise that resolves if the date is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateExpiryDate = function (expMonth, expYear) { return; };
    /**
     * Get a card type from card number
     * @param cardNumber {string} Card number
     * @return {Promise<string>} returns a promise that resolves with the credit card type
     */
    Stripe.prototype.getCardType = function (cardNumber) { return; };
    return Stripe;
}(IonicNativePlugin));
Stripe.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Stripe.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "setPublishableKey", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "createCardToken", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "createBankAccountToken", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "validateCardNumber", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "validateCVC", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "validateExpiryDate", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "getCardType", null);
Stripe = __decorate([
    Plugin({
        pluginName: 'Stripe',
        plugin: 'cordova-plugin-stripe',
        pluginRef: 'cordova.plugins.stripe',
        repo: 'https://github.com/zyramedia/cordova-plugin-stripe',
        platforms: ['Android', 'Browser', 'iOS']
    })
], Stripe);
export { Stripe };
//# sourceMappingURL=index.js.map