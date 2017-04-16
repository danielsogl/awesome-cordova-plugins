import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
/**
 * @name PayPal
 * @description
 * PayPal plugin for Cordova/Ionic Applications
 *
 * @usage
 * ```
 * import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
 *
 * constructor(private payPal: PayPal) { }
 *
 * ...
 *
 *
 * this.payPal.init({
 *   PayPalEnvironmentProduction: "YOUR_PRODUCTION_CLIENT_ID",
 *   PayPalEnvironmentSandbox: "YOUR_SANDBOX_CLIENT_ID"
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
@Plugin({
  pluginName: 'PayPal',
  plugin: 'com.paypal.cordova.mobilesdk',
  pluginRef: 'PayPalMobile',
  repo: 'https://github.com/paypal/PayPal-Cordova-Plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class PayPal {
  /**
   * Retrieve the version of the PayPal iOS SDK library. Useful when contacting support.
   * @returns {Promise<string>}
   */
  @Cordova()
  version(): Promise<string> {return; }

  /**
   * You must preconnect to PayPal to prepare the device for processing payments.
   * This improves the user experience, by making the presentation of the
   * UI faster. The preconnect is valid for a limited time, so
   * the recommended time to preconnect is on page load.
   *
   * @param {PayPalEnvironment} clientIdsForEnvironments: set of client ids for environments
   * @returns {Promise<any>}
   */
  @Cordova()
  init(clientIdsForEnvironments: PayPalEnvironment): Promise<any> {return; }

  /**
   * You must preconnect to PayPal to prepare the device for processing payments.
   * This improves the user experience, by making the presentation of the UI faster.
   * The preconnect is valid for a limited time, so the recommended time to preconnect is on page load.
   *
   * @param {String} environment: available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
   * @param {PayPalConfiguration} configuration: PayPalConfiguration object, for Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set
   * @returns {Promise<any>}
   */
  @Cordova()
  prepareToRender(environment: string, configuration: PayPalConfiguration): Promise<any> {return; }

  /**
   * Start PayPal UI to collect payment from the user.
   * See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
   * for more documentation of the params.
   *
   * @param {PayPalPayment} payment PayPalPayment object
   * @returns {Promise<any>}
   */
  @Cordova()
  renderSinglePaymentUI(payment: PayPalPayment): Promise<any> {return; }

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
  @Cordova()
  clientMetadataID(): Promise<any> {return; }

  /**
   * Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments
   * @returns {Promise<any>}
   */
  @Cordova()
  renderFuturePaymentUI(): Promise<any> {return; }

  /**
   * Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing
   *
   * @param {Array<string>} scopes scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
   * See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details
   * @returns {Promise<any>}
   */
  @Cordova()
  renderProfileSharingUI(scopes: string[]): Promise<any> {return; }
}

export interface PayPalEnvironment {
  PayPalEnvironmentProduction: string;
  PayPalEnvironmentSandbox: string;
}

/**
 * @hidden
 */
export class PayPalPayment {
  constructor(amount: string, currency: string, shortDescription: string, intent: string, details?: PayPalPaymentDetails) {
    this.amount = amount;
    this.currency = currency;
    this.shortDescription = shortDescription;
    this.intent = intent;
    this.details = details;
  }

  /**
   * The amount of the payment.
   */
  amount: string;
  /**
   * The ISO 4217 currency for the payment.
   */
  currency: string;
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
  bnCode: string = 'PhoneGap_SP';
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
  items: Array<PayPalItem>;

  /**
   * Optional customer shipping address, if your app wishes to provide this to the SDK.
   */
  shippingAddress: string;

  /**
   * Optional PayPalPaymentDetails object
   */
  details: PayPalPaymentDetails;
}

/**
 * @hidden
 */
export class PayPalItem {
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
  constructor(name: string, quantity: number, price: string, currency: string, sku?: string) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.currency = currency;
    this.sku = sku;
  }
  /**
   * Name of the item. 127 characters max
   */
  name: string;
  /**
   * Number of units. 10 characters max.
   */
  quantity: number;
  /**
   * Unit price for this item 10 characters max.
   */
  price: string;
  /**
   * ISO standard currency code.
   */
  currency: string;
  /**
   * The stock keeping unit for this item. 50 characters max (optional)
   */
  sku?: string;
}

/**
 * @hidden
 */
export class PayPalPaymentDetails {
  /**
   * The PayPalPaymentDetails class defines optional amount details.
   * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
   * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
   * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
   */
  constructor(subtotal: string, shipping: string, tax: string) {
    this.subtotal = subtotal;
    this.shipping = shipping;
    this.tax = tax;
  }
  /**
   * Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
   */
  subtotal: string;
  /**
   * Amount charged for shipping. 10 characters max with support for 2 decimal places.
   */
  shipping: string;
  /**
   * Amount charged for tax. 10 characters max with support for 2 decimal places.
   */
  tax: string;
}

/**
 * @hidden
 */
export interface PayPalConfigurationOptions {
  /**
   * Will be overridden by email used in most recent PayPal login.
   */
  defaultUserEmail?: string;
  /**
   * Will be overridden by phone country code used in most recent PayPal login
   */
  defaultUserPhoneCountryCode?: string;
  /**
   * Will be overridden by phone number used in most recent PayPal login.
   */
  defaultUserPhoneNumber?: string;
  /**
   * Your company name, as it should be displayed to the user when requesting consent via a PayPalFuturePaymentViewController.
   */
  merchantName?: string;
  /**
   * URL of your company's privacy policy, which will be offered to the user when requesting consent via a PayPalFuturePaymentViewController.
   */
  merchantPrivacyPolicyURL?: string;
  /**
   * URL of your company's user agreement, which will be offered to the user when requesting consent via a PayPalFuturePaymentViewController.
   */
  merchantUserAgreementURL?: string;
  /**
   * If set to NO, the SDK will only support paying with PayPal, not with credit cards.
   * This applies only to single payments (via PayPalPaymentViewController).
   * Future payments (via PayPalFuturePaymentViewController) always use PayPal.
   * Defaults to true
   */
  acceptCreditCards?: boolean;
  /**
   * For single payments, options for the shipping address.
   * - 0 - PayPalShippingAddressOptionNone: no shipping address applies.
   * - 1 - PayPalShippingAddressOptionProvided: shipping address will be provided by your app,
   *   in the shippingAddress property of PayPalPayment.
   * - 2 - PayPalShippingAddressOptionPayPal: user will choose from shipping addresses on file
   *   for their PayPal account.
   * - 3 - PayPalShippingAddressOptionBoth: user will choose from the shipping address provided by your app,
   *   in the shippingAddress property of PayPalPayment, plus the shipping addresses on file for the user's PayPal account.
   * Defaults to 0 (PayPalShippingAddressOptionNone).
   */
  payPalShippingAddressOption?: number;
  /**
   * If set to YES, then if the user pays via their PayPal account,
   * the SDK will remember the user's PayPal username or phone number;
   * if the user pays via their credit card, then the SDK will remember
   * the PayPal Vault token representing the user's credit card.
   *
   * If set to NO, then any previously-remembered username, phone number, or
   * credit card token will be erased, and subsequent payment information will
   * not be remembered.
   *
   * Defaults to YES.
   */
  rememberUser?: boolean;
  /**
   * If not set, or if set to nil, defaults to the device's current language setting.
   *
   * Can be specified as a language code ("en", "fr", "zh-Hans", etc.) or as a locale ("en_AU", "fr_FR", "zh-Hant_HK", etc.).
   * If the library does not contain localized strings for a specified locale, then will fall back to the language. E.g., "es_CO" -> "es".
   * If the library does not contain localized strings for a specified language, then will fall back to American English.
   *
   * If you specify only a language code, and that code matches the device's currently preferred language,
   * then the library will attempt to use the device's current region as well.
   * E.g., specifying "en" on a device set to "English" and "United Kingdom" will result in "en_GB".
   */
  languageOrLocale?: string;
  /**
   * Normally, the SDK blurs the screen when the app is backgrounded,
   * to obscure credit card or PayPal account details in the iOS-saved screenshot.
   * If your app already does its own blurring upon backgrounding, you might choose to disable this.
   * Defaults to NO.
   */
  disableBlurWhenBackgrounding?: boolean;
  /**
   * If you will present the SDK's view controller within a popover, then set this property to YES.
   * Defaults to NO. (iOS only)
   */
  presentingInPopover?: boolean;
  /**
   * Sandbox credentials can be difficult to type on a mobile device. Setting this flag to YES will
   * cause the sandboxUserPassword and sandboxUserPin to always be pre-populated into login fields.
   */
  forceDefaultsInSandbox?: boolean;
  /**
   * Password to use for sandbox if 'forceDefaultsInSandbox' is set.
   */
  sandboxUserPassword?: string;
  /**
   * PIN to use for sandbox if 'forceDefaultsInSandbox' is set.
   */
  sandboxUserPin?: string;
}
/**
 * @hidden
 */
export class PayPalConfiguration implements PayPalConfigurationOptions {
  /**
   * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
   * see defaults for options available
   */
  constructor(options?: PayPalConfigurationOptions) {

    let defaults: PayPalConfigurationOptions = {
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
}

/**
 * @hidden
 */
export class PayPalShippingAddress {
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
  constructor(recipientName: string, line1: string, line2: string, city: string, state: string, postalCode: string, countryCode: string) {
    this.recipientName = recipientName;
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.countryCode = countryCode;
  }
  /**
   * Name of the recipient at this address. 50 characters max.
   */
  recipientName: string;
  /**
   * Line 1 of the address (e.g., Number, street, etc). 100 characters max.
   */
  line1: string;
  /**
   * Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
   */
  line2: string;
  /**
   * City name. 50 characters max.
   */
  city: string;
  /**
   * 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
   */
  state: string;
  /**
   * ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
   */
  postalCode: string;
  /**
   * 2-letter country code. 2 characters max.
   */
  countryCode: string;
}
