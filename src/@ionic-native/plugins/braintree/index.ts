import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * Options for the setupApplePay method.
 */
export interface ApplePayOptions {
  /**
   * Apple Merchant ID - can be obtained from the Apple Developer Portal.
   */
  merchantId: string;

  /**
   * The currency in which to receive payment.
   * This is a 3 letter currency code (ISO-4217) - e.g. "GBP", "USD", "MXN", etc.
   */
  currency: string;

  /**
   * The locale in which payment is accepted.
   * This is a 2 letter country code (ISO-3166-1) - e.g. "GB", "US", "MX"
   */
  country: string;
}

/**
 * Options for the presentDropInPaymentUI method.
 */
export interface PaymentUIOptions {
  /**
   * The amount of the transaction to show in the drop-in UI on the
   * summary row as well as the call-to-action button, as a string.
   * If not provided, this value will default to "0.00", e.g. free.
   * Unless you are simply capturing authorizations, you probably
   * want to fill this value in!
   */
  amount?: string;

  /**
   * The description of the transaction to show in the drop-in UI on the summary row.
   * Defaults to empty string.
   */
  primaryDescription?: string;
}

/**
 * Successful callback result for the presentDropInPaymentUI method.
 */
export interface PaymentUIResult {
  /**
   * Indicates if the user used the cancel button to close the dialog without
   * completing the payment.
   */
  userCancelled: boolean;

  /**
   * The nonce returned for the payment transaction (if a payment was completed).
   */
  nonce: string;

  /**
   * The payment type (if a payment was completed) (credit card, check, paypal, etc).
   */
  type: string;

  /**
   * A description of the payment method (if a payment was completed).
   */
  localizedDescription: string;

  /**
   * Information about the credit card used to complete a payment (if a credit card was used).
   */
  card: {
    /**
     * The last two digits of the credit card used.
     */
    lastTwo: string;

    /**
     * An enumerated value used to indicate the type of credit card used.
     *
     * Can be one of the following values:
     *
     * BTCardNetworkUnknown
     * BTCardNetworkAMEX
     * BTCardNetworkDinersClub
     * BTCardNetworkDiscover
     * BTCardNetworkMasterCard
     * BTCardNetworkVisa
     * BTCardNetworkJCB
     * BTCardNetworkLaser
     * BTCardNetworkMaestro
     * BTCardNetworkUnionPay
     * BTCardNetworkSolo
     * BTCardNetworkSwitch
     * BTCardNetworkUKMaestro
     */
    network: string;
  };

  /**
   * Information about the PayPal account used to complete a payment (if a PayPal account was used).
   */
  payPalAccount: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    billingAddress: string;
    shippingAddress: string;
    clientMetadataId: string;
    payerId: string;
  };

  /**
   * Information about the Apple Pay card used to complete a payment (if Apple Pay was used).
   */
  applePaycard: {
  };

  /**
   * Information about 3D Secure card used to complete a payment (if 3D Secure was used).
   */
  threeDSecureCard: {
    liabilityShifted: boolean;
    liabilityShiftPossible: boolean;
  };

  /**
   * Information about Venmo account used to complete a payment (if a Venmo account was used).
   */
  venmoAccount: {
    username: string;
  };
}

/**
 * @name Braintree
 * @description
 * This plugin enables the use of the Braintree Drop-In Payments UI in your Ionic applications on Android and iOS, using the native Drop-In UI for each platform (not the Javascript SDK).
 *
 *  Ionic Native utilizes [a maintaned fork](https://github.com/taracque/cordova-plugin-braintree) of the original `cordova-plugin-braintree`
 *
 *  For information on how to use Apple Pay with this plugin, please refer to the [plugin documentation](https://github.com/Taracque/cordova-plugin-braintree#apple-pay-ios-only)
 *
 * **NOTE**: This is not a complete payments solution. All of the Braintree client-side UIs simply generate a payment nonce that must then be processed by your server to complete the payment.
 * See the [Braintree Node server documentation](https://developers.braintreepayments.com/start/hello-server/node) for details and a [sample Express server](https://github.com/braintree/braintree_express_example) that implements the required functionality.
 *
 * @usage
 * ```typescript
 * import { Braintree, ApplePayOptions, PaymentUIOptions } from '@ionic-native/braintree';
 *
 * constructor(private braintree: Braintree) { }
 *
 * ...
 *
 * // Your Braintree `Tokenization Key` from the Braintree dashboard.
 * // Alternatively you can also generate this token server-side
 * // using a client ID in order to allow users to use stored payment methods.
 * // See the [Braintree Client Token documentation](https://developers.braintreepayments.com/reference/request/client-token/generate/node#customer_id) for details.
 * const BRAINTREE_TOKEN = '<YOUR_BRAINTREE_TOKEN>';
 *
 * // NOTE: Do not provide this unless you have configured your Apple Developer account
 * // as well as your Braintree merchant account, otherwise the Braintree module will fail.
 * const appleOptions: ApplePayOptions = {
 *   merchantId: '<YOUR MERCHANT ID>',
 *   currency: 'USD',
 *   country: 'US'
 * };
 *
 * const paymentOptions: PaymentUIOptions = {
 *   amount: '14.99',
 *   primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
 * };
 *
 * this.braintree.initialize(BRAINTREE_TOKEN)
 *   .then(() => this.braintree.setupApplePay(appleOptions))
 *   .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
 *   .then((result: PaymentUIResult) => {
 *     if (result.userCancelled) {
 *       console.log("User cancelled payment dialog.");
 *     } else {
 *       console.log("User successfully completed payment!");
 *       console.log("Payment Nonce: " + result.nonce);
 *       console.log("Payment Result.", result);
 *     }
 *   })
 *   .catch((error: string) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * ApplePayOptions
 * PaymentUIOptions
 * PaymentUIResult
 */
@Plugin({
  pluginName: 'Braintree',
  plugin: 'cordova-plugin-braintree',
  pluginRef: 'BraintreePlugin',
  repo: 'https://github.com/taracque/cordova-plugin-braintree',
  platforms: ['Android', 'iOS'],
  install: 'ionic cordova plugin add https://github.com/taracque/cordova-plugin-braintree',
  installVariables: [],
})
@Injectable()
export class Braintree extends IonicNativePlugin {

  /**
   * Used to initialize the Braintree client. This function must be called before other methods can be used.
   *  As the initialize code is async, be sure you call all Braintree related methods after the initialize promise has resolved.
   *
   * @param token {string} The client token or tokenization key to use with the Braintree client.
   * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
   */
  @Cordova({
    platforms: ['Android', 'iOS'],
  })
  initialize(token: string): Promise<undefined | string> { return; }

  /**
   * Used to configure Apple Pay on iOS.
   *  In order for Apple Pay payments to appear on the Drop-In Payments UI, you must initialize the Apple Pay framework before using the Drop-In Payments UI.
   *
   *  Do not turn on Apple Pay in Braintree if you don't have Apple Pay entitlements - the Braintree module will reject the attempt to set up Apple Pay.
   *  Please refer to the [Braintree Merchant Documentation](https://developers.braintreepayments.com/guides/apple-pay/configuration/ios/v4#apple-pay-certificate-request-and-provisioning) to set up a Merchant Account.
   *
   *  Calling this function on Android is a `noop` so you can call it without having to check which cordova platform you are on! :D
   *
   * @param options {ApplePayOptions} The options used to configure Apple Pay.
   * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
   */
  @Cordova({
    platforms: ['iOS'],
  })
  setupApplePay(options: ApplePayOptions): Promise<undefined | string> { return; }

  /**
   * Shows Braintree's Drop-In Payments UI.
   *  Apple Pay is only shown in the Drop In UI if you have previously called `setupApplePay`.
   *
   * @param options {PaymentUIOptions} An optional argument used to configure the payment UI; see type definition for parameters. If not provided, the UI will show "0.00" as the price and an empty description.
   * @return {Promise<PaymentUIResult | string>} Returns a promise that resolves with a PaymentUIResult object on successful payment (or the user cancels), or rejects with a string message describing the failure.
   */
  @Cordova({
    platforms: ['Android', 'iOS'],
  })
  presentDropInPaymentUI(options?: PaymentUIOptions): Promise<PaymentUIResult | string> { return; }
}
