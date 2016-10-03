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
 * @interfaces
 * PayPalEnvironment
 * PayPalPayment
 * PayPAlItem
 * PayPalPaymentDetails
 * PayPalConfiguration
 * PayPalConfigurationOptions
 * PayPalShippingAddress
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
export declare var PayPalPayment: {
  /**
   * Convenience constructor.
   * Returns a PayPalPayment with the specified amount, currency code, and short description.
   * @param {String} amount: The amount of the payment.
   * @param {String} currencyCode: The ISO 4217 currency for the payment.
   * @param {String} shortDescription: A short description of the payment.
   * @param {String} intent: "Sale" for an immediate payment.
   */
  new(amount: string, currencyCode: string, shortDescription: string, intent: string): PayPalPayment;
};
/**
 * @private
 */
export interface PayPalPayment {
  /**
   * The amount of the payment.
   */
  amount: string;
  /**
   * The ISO 4217 currency for the payment.
   */
  currencyCode: string;
  /**
   * A short description of the payment.
   */
  shortDescription: string;
  /**
   * "Sale" for an immediate payment.
   */
  intent: string;
  /**
   * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
   * for your tracking purposes.
   */
  bnCode: string;
  /**
   * Optional invoice number, for your tracking purposes. (up to 256 characters)
   */
  invoiceNumber: string;

  /**
   * Optional text, for your tracking purposes. (up to 256 characters)
   */
  custom: string;

  /**
   * Optional text which will appear on the customer's credit card statement. (up to 22 characters)
   */
  softDescriptor: string;

  /**
   * Optional array of PayPalItem objects.
   */
  items: string;

  /**
   * Optional customer shipping address, if your app wishes to provide this to the SDK.
   */
  shippingAddress: string;
}

export interface PayPalItem {
  name: string;
  quantity: number;
  price: string;
  currency: string;
  sku: string;
}

export declare var PayPalItem: {
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
  new(name: string, quantity: number, price: string, currency: string, sku: string): PayPalItem;
};

export interface PayPalPaymentDetails {
  subtotal: string;
  shipping: string;
  tax: string;
}

export declare var PayPalPaymentDetails: {
  /**
   * The PayPalPaymentDetails class defines optional amount details.
   * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
   * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
   * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
   */
  new(subtotal: string, shipping: string, tax: string): PayPalPaymentDetails;
};

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
export declare var PayPalConfiguration: {
  /**
   * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
   * see defaults for options available
   */
  new(options: PayPalConfigurationOptions): PayPalConfiguration;
};
export interface PayPalConfiguration {

}
/**
 * @private
 */
export declare var PayPalShippingAddress: {
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
  new(recipientName: string, line1: string, line2: string, city: string, state: string, postalCode: string, countryCode: string): PayPalShippingAddress;
};
export interface PayPalShippingAddress {
  recipientName: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
}
