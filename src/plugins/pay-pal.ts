import { Plugin, Cordova } from './plugin';
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
 */
@Plugin({
  plugin: 'com.paypal.cordova.mobilesdk',
  pluginRef: 'PayPalMobile',
  repo: 'https://github.com/paypal/PayPal-Cordova-Plugin'
})
export class PayPal {
  /**
   * You must preconnect to PayPal to prepare the device for processing payments.
   * This improves the user experience, by making the presentation of the
   * UI faster. The preconnect is valid for a limited time, so
   * the recommended time to preconnect is on page load.
   *
   * @param {String} environment: available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
   * @param {PayPalConfiguration} configuration: For Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set
   */
  @Cordova()
  static init(environment: PayPalEnvironment, configuration?: PayPalConfiguration): Promise<any> {return; }

  /**
   * Retreive the version of PayPal iOS SDK Library.
   */
  @Cordova()
  static version(): Promise<string> {return; }

  /**
   * Start PayPal UI to collect payment from the user.
   * See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
   * for more documentation of the params.
   *
   * @param {PayPalPayment} payment: PayPalPayment object
   */
  @Cordova()
  static renderSinglePaymentUI(payment: PayPalPayment): Promise<any> {return; }

  /**
   * Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
   * from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
   * payment is originating from a valid, user-consented device+application.
   * This helps reduce fraud and decrease declines.
   * This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
   * Pass the result to your server, to include in the payment request sent to PayPal.
   * Do not otherwise cache or store this value.
   */
  @Cordova()
  static clientMetadataID(): Promise<any> {return; }

  /**
   * Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments
   */
  @Cordova()
  static renderFuturePaymentUI(): Promise<any> {return; }

  /**
   * Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing
   *
   * @param {Array<string>} scopes: scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
   * See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details
   **/
  @Cordova()
  static renderProfileSharingUI(scopes: string[]): Promise<any> {return; }

}

export interface PayPalEnvironment {
  PayPalEnvironmentProduction: string;
  PayPalEnvironmentSandbox: string;
}
/**
 * @private
 */
export declare class PayPalPayment {
  /**
   * Convenience constructor.
   * Returns a PayPalPayment with the specified amount, currency code, and short description.
   * @param {String} amount: The amount of the payment.
   * @param {String} currencyCode: The ISO 4217 currency for the payment.
   * @param {String} shortDescription: A short descripton of the payment.
   * @param {String} intent: "Sale" for an immediate payment.
   */
  new(amount: string, currencyCode: string, shortDescription: string, intent: string);

  /**
   * Optional invoice number, for your tracking purposes. (up to 256 characters)
   * @param {String} invoiceNumber: The invoice number for the payment.
   */
  invoiceNumber(invoiceNumber: string): void;

  /**
   * Optional text, for your tracking purposes. (up to 256 characters)
   * @param {String} custom: The custom text for the payment.
   */
  custom(custom: string): void;

  /**
   * Optional text which will appear on the customer's credit card statement. (up to 22 characters)
   * @param {String} softDescriptor: credit card text for payment
   */
  softDescriptor(softDescriptor: string): void;

  /**
   * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
   * for your tracking purposes.
   * @param {String} bnCode: bnCode for payment
   */
  bnCode(bnCode: string): void;

  /**
   * Optional array of PayPalItem objects. @see PayPalItem
   * @note If you provide one or more items, be sure that the various prices correctly
   * sum to the payment `amount` or to `paymentDetails.subtotal`.
   * @param items {Array<PayPalItem>} Optional
   */
  items(items?: any): void;

  /**
   * Optional customer shipping address, if your app wishes to provide this to the SDK.
   * @note make sure to set `payPalShippingAddressOption` in PayPalConfiguration to 1 or 3.
   * @param {PayPalShippingAddress} shippingAddress: PayPalShippingAddress object
   */
  shippingAddress(shippingAddress: PayPalShippingAddress): void;
}

export interface PayPalConfigurationOptions {
  defaultUserEmail?: string;
  defaultUserPhoneCountryCode?: string;
  defaultUserPhoneNumber?: string;
  merchantName?: string;
  merchantPrivacyPolicyUrl?: string;
  merchantUserAgreementUrl?: string;
  acceptCreditCards?: boolean;
  payPalShippingAddressOption?: number;
  rememberUser?: boolean;
  languageOrLocale?: string;
  disableBlurWhenBackgrounding?: boolean;
  presentingInPopover?: boolean;
  forceDefaultsInSandbox?: boolean;
  sandboxUserPAssword?: string;
  sandboxUserPin?: string;
}
/**
 * @private
 */
export declare class PayPalConfiguration {
  /**
   * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
   * see defaults for options available
   */
  new(options: PayPalConfigurationOptions);
}
/**
 * @private
 */
export declare class PayPalShippingAddress {
  /**
   * See the documentation of the individual properties for more detail.
   * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
   * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
   * @param {String} Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
   * @param {String} city: City name. 50 characters max.
   * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
   * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
   * @param {String} countryCode: 2-letter country code. 2 characters max.
   */
  new(recipientName: string, line1: string, line2: string, city: string, state: string, postalCode: string, countryCode: string);
}
