"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name PayPal
 * @description
 * PayPal plugin for Cordova/Ionic Applications
 *
 * @usage
 * ```
 * import {PayPal} from 'ionic-native';
 *
 * PayPal.init({
 *      "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
       "PayPalEnvironmentSandbox": "YOUR_SANDBOX_CLIENT_ID"
       })
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 * @interfaces
 * PayPalEnvironment
 * PayPalPayment
 * PayPAlItem
 * PayPalPaymentDetails
 * PayPalConfigurationOptions
 * PayPalShippingAddress
 */
var PayPal = (function () {
    function PayPal() {
    }
    /**
     * You must preconnect to PayPal to prepare the device for processing payments.
     * This improves the user experience, by making the presentation of the
     * UI faster. The preconnect is valid for a limited time, so
     * the recommended time to preconnect is on page load.
     *
     * @param {String} environment: available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
     * @param {PayPalConfiguration} configuration: For Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set
     */
    PayPal.init = function (environment, configuration) { return; };
    /**
     * Retreive the version of PayPal iOS SDK Library.
     */
    PayPal.version = function () { return; };
    /**
     * Start PayPal UI to collect payment from the user.
     * See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
     * for more documentation of the params.
     *
     * @param {PayPalPayment} payment: PayPalPayment object
     */
    PayPal.renderSinglePaymentUI = function (payment) { return; };
    /**
     * Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
     * from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
     * payment is originating from a valid, user-consented device+application.
     * This helps reduce fraud and decrease declines.
     * This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
     * Pass the result to your server, to include in the payment request sent to PayPal.
     * Do not otherwise cache or store this value.
     */
    PayPal.clientMetadataID = function () { return; };
    /**
     * Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments
     */
    PayPal.renderFuturePaymentUI = function () { return; };
    /**
     * Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing
     *
     * @param {Array<string>} scopes: scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
     * See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details
     **/
    PayPal.renderProfileSharingUI = function (scopes) { return; };
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "init", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "version", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "renderSinglePaymentUI", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "clientMetadataID", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "renderFuturePaymentUI", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "renderProfileSharingUI", null);
    PayPal = __decorate([
        plugin_1.Plugin({
            plugin: 'com.paypal.cordova.mobilesdk',
            pluginRef: 'PayPalMobile',
            repo: 'https://github.com/paypal/PayPal-Cordova-Plugin'
        })
    ], PayPal);
    return PayPal;
}());
exports.PayPal = PayPal;
//# sourceMappingURL=pay-pal.js.map