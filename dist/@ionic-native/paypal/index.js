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
 * @name PayPal
 * @description
 * PayPal plugin for Cordova/Ionic Applications
 *
 * @usage
 * ```typescript
 * import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
 *
 * constructor(private payPal: PayPal) { }
 *
 * ...
 *
 *
 * this.payPal.init({
 *   PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
 *   PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
 * }).then(() => {
 *   // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
 *   this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
 *     // Only needed if you get an "Internal Service Error" after PayPal login!
 *     //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
 *   })).then(() => {
 *     let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
 *     this.payPal.renderSinglePaymentUI(payment).then(() => {
 *       // Successfully paid
 *
 *       // Example sandbox response
 *       //
 *       // {
 *       //   "client": {
 *       //     "environment": "sandbox",
 *       //     "product_name": "PayPal iOS SDK",
 *       //     "paypal_sdk_version": "2.16.0",
 *       //     "platform": "iOS"
 *       //   },
 *       //   "response_type": "payment",
 *       //   "response": {
 *       //     "id": "PAY-1AB23456CD789012EF34GHIJ",
 *       //     "state": "approved",
 *       //     "create_time": "2016-10-03T13:33:33Z",
 *       //     "intent": "sale"
 *       //   }
 *       // }
 *     }, () => {
 *       // Error or render dialog closed without being successful
 *     });
 *   }, () => {
 *     // Error in configuration
 *   });
 * }, () => {
 *   // Error in initialization, maybe PayPal isn't supported or something else
 * });
 * ```
 * @interfaces
 * PayPalEnvironment
 * PayPalConfigurationOptions
 * @classes
 * PayPalPayment
 * PayPalItem
 * PayPalPaymentDetails
 * PayPalShippingAddress
 */
var PayPal = (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieve the version of the PayPal iOS SDK library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    PayPal.prototype.version = function () { return; };
    /**
     * You must preconnect to PayPal to prepare the device for processing payments.
     * This improves the user experience, by making the presentation of the
     * UI faster. The preconnect is valid for a limited time, so
     * the recommended time to preconnect is on page load.
     *
     * @param {PayPalEnvironment} clientIdsForEnvironments: set of client ids for environments
     * @returns {Promise<any>}
     */
    PayPal.prototype.init = function (clientIdsForEnvironments) { return; };
    /**
     * You must preconnect to PayPal to prepare the device for processing payments.
     * This improves the user experience, by making the presentation of the UI faster.
     * The preconnect is valid for a limited time, so the recommended time to preconnect is on page load.
     *
     * @param {String} environment: available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
     * @param {PayPalConfiguration} configuration: PayPalConfiguration object, for Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set
     * @returns {Promise<any>}
     */
    PayPal.prototype.prepareToRender = function (environment, configuration) { return; };
    /**
     * Start PayPal UI to collect payment from the user.
     * See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
     * for more documentation of the params.
     *
     * @param {PayPalPayment} payment PayPalPayment object
     * @returns {Promise<any>}
     */
    PayPal.prototype.renderSinglePaymentUI = function (payment) { return; };
    /**
     * Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
     * from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
     * payment is originating from a valid, user-consented device+application.
     * This helps reduce fraud and decrease declines.
     * This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
     * Pass the result to your server, to include in the payment request sent to PayPal.
     * Do not otherwise cache or store this value.
     * @returns {Promise<any>}
     */
    PayPal.prototype.clientMetadataID = function () { return; };
    /**
     * Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments
     * @returns {Promise<any>}
     */
    PayPal.prototype.renderFuturePaymentUI = function () { return; };
    /**
     * Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing
     *
     * @param {Array<string>} scopes scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
     * See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details
     * @returns {Promise<any>}
     */
    PayPal.prototype.renderProfileSharingUI = function (scopes) { return; };
    return PayPal;
}(IonicNativePlugin));
PayPal.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PayPal.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PayPal.prototype, "version", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayPal.prototype, "init", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, PayPalConfiguration]),
    __metadata("design:returntype", Promise)
], PayPal.prototype, "prepareToRender", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PayPalPayment]),
    __metadata("design:returntype", Promise)
], PayPal.prototype, "renderSinglePaymentUI", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PayPal.prototype, "clientMetadataID", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PayPal.prototype, "renderFuturePaymentUI", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PayPal.prototype, "renderProfileSharingUI", null);
PayPal = __decorate([
    Plugin({
        pluginName: 'PayPal',
        plugin: 'com.paypal.cordova.mobilesdk',
        pluginRef: 'PayPalMobile',
        repo: 'https://github.com/paypal/PayPal-Cordova-Plugin',
        platforms: ['Android', 'iOS']
    })
], PayPal);
export { PayPal };
/**
 * @hidden
 */
var PayPalPayment = (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());
export { PayPalPayment };
/**
 * @hidden
 */
var PayPalItem = (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());
export { PayPalItem };
/**
 * @hidden
 */
var PayPalPaymentDetails = (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());
export { PayPalPaymentDetails };
/**
 * @hidden
 */
var PayPalConfiguration = (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());
export { PayPalConfiguration };
/**
 * @hidden
 */
var PayPalShippingAddress = (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());
export { PayPalShippingAddress };
//# sourceMappingURL=index.js.map