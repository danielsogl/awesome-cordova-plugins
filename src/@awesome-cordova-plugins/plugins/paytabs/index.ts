import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * PaymentSDKConfiguration: payment request configuration
 */
export interface PaymentSDKConfiguration {
  /**
   * merchant profile id
   */
  profileID: string;
  /**
   * merchant server key
   */
  serverKey: string;
  /**
   * merchant client key
   */
  clientKey: string;
  /**
   * transaction type: refer to TransactionType enum
   */
  transactionType?: string;
  /**
   * transaction class: refer to TransactionClass enum
   */
  transactionClass?: string;
  /**
   * order or cart id
   */
  cartID: string;
  /**
   * payment currency
   */
  currency: string;
  /**
   * amount
   */
  amount: number;
  /**
   * order or cart description
   */
  cartDescription: string;
  /**
   * user interface language code(en, ar, ..)
   */
  languageCode?: string;
  /**
   * validate shipping info
   */
  forceShippingInfo?: boolean;
  /**
   * validate billing info
   */
  showBillingInfo?: boolean;
  /**
   * handle missing shipping info by showing shipping info section
   */
  showShippingInfo?: boolean;
  /**
   * configured billing details
   */
  billingDetails?: PaymentSDKBillingDetails;
  /**
   * configured shipping details
   */
  shippingDetails?: PaymentSDKShippingDetails;
  /**
   * merchant country code
   */
  merchantCountryCode: string;
  /**
   * title of the screen
   */
  screenTitle?: string;
  /**
   * merchant name
   */
  merchantName?: string;
  /**
   * server ip
   */
  serverIP?: string;
  /**
   * tokenise type: refer to TokeiseType enum
   */
  tokeniseType?: string;
  /**
   * token format: refer to TokeiseFormat enum
   */
  tokenFormat?: string;
  /**
   * option to hide or show card scanner button
   */
  hideCardScanner?: string;
  /**
   * merchant apple pay bundle id
   */
  merchantApplePayIdentifier?: string;
  /**
   * minize the vlaidation on apple pay billing and shipping info
   */
  simplifyApplePayValidation?: string;
  /**
   * supported apple pay networks
   */
  supportedApplePayNetworks?: [string];
  /**
   * returned token
   */
  token?: string;
  /**
   * returned transaction reference
   */
  transactionReference?: string;
  /**
   * samsung Token
   */
  samsungToken?: string;
  /**
   * customized theme
   */
  theme?: PaymentSDKTheme;
  /**
   * list of alternative payment methods
   */
  alternativePaymentMethods?: [string];
}

/**
 * PaymentSDKBillingDetails
 */
export interface PaymentSDKBillingDetails {
  /**
   * billing: customer name
   */
  name?: string;
  /**
   * billing: customer email
   */
  email?: string;
  /**
   * billing: customer phone
   */
  phone?: string;
  /**
   * billing: customer address line
   */
  addressLine?: string;
  /**
   * billing: customer city
   */
  city?: string;
  /**
   * billing: customer state
   */
  state?: string;
  /**
   * billing: customer country code
   */
  countryCode?: string;
  /**
   * billing: customer zip code
   */
  zip?: string;
}

/**
 * PaymentSDKShippingDetails
 */
export interface PaymentSDKShippingDetails {
  /**
   *  shipping: customer name
   */
  name?: string;
  /**
   * shipping: customer email
   */
  email?: string;
  /**
   * shipping: customer phone
   */
  phone?: string;
  /**
   * shipping: customer address line
   */
  addressLine?: string;
  /**
   * shipping: customer city
   */
  city?: string;
  /**
   * shipping: customer state
   */
  state?: string;
  /**
   * shipping: customer country code
   */
  countryCode?: string;
  /**
   * shipping: customer zip code
   */
  zip?: string;
}

/**
 * PaymentSDKTheme
 */
export interface PaymentSDKTheme {
  /**
   * theme: primary color
   */
  primaryColor?: string;
  /**
   * theme: primary font color
   */
  primaryFontColor?: string;
  /**
   * theme: primary font
   */
  primaryFont?: string;
  /**
   * theme: secondary color
   */
  secondaryColor?: string;
  /**
   * theme: secondary font color
   */
  secondaryFontColor?: string;
  /**
   * theme: secondary font
   */
  secondaryFont?: string;
  /**
   * theme: stroke color
   */
  strokeColor?: string;
  /**
   * theme: primary color
   */
  strokeThinckness?: number;
  /**
   * theme: input corner radius
   */
  inputsCornerRadius?: number;
  /**
   * theme: button color
   */
  buttonColor?: string;
  /**
   * theme: button font color
   */
  buttonFontColor?: string;
  /**
   * theme: button font
   */
  buttonFont?: string;
  /**
   * theme: title font color
   */
  titleFontColor?: string;
  /**
   * theme: title font
   */
  titleFont?: string;
  /**
   * theme: background color
   */
  backgroundColor?: string;
  /**
   * theme: placeholder color
   */
  placeholderColor?: string;
}

/**
 * TokeniseType: define the behaviour of of saving card option inside the SDKs.
 */
export enum TokeniseType {
  /**
   * none: tokenise is off
   */
  none = 'none',
  /**
   * merchantMandatory: tokenise is forced
   */
  merchantMandatory = 'merchantMandatory',
  /**
   * userMandatory: tokenise is forced as per user approval
   */
  userMandatory = 'userMandatory',
  /**
   * userOptinoal: tokenise if optional as per user approval
   */
  userOptinoal = 'userOptinoal',
}

/**
 * TokeniseFromat: the returned token format
 */
export enum TokeniseFromat {
  /**
   * none: no format
   */
  none = '1',
  /**
   * hex32: Hex with 32 length
   */
  hex32 = '2',
  /**
   * alphaNum20: alpha numeric 20 length
   */
  alphaNum20 = '3',
  /**
   * digit22: digits with 22 length
   */
  digit22 = '3',
  /**
   * digit16: digits with 16 length
   */
  digit16 = '5',
  /**
   * alphaNum32: alpha numeric 32 length
   */
  alphaNum32 = '6',
}

/**
 * TransactionType
 */
export enum TransactionType {
  /**
   * sale
   */
  sale = 'sale',
  /**
   * authorize / capture option
   */
  authorize = 'auth',
}

/**
 * TransactionClass
 */
export enum TransactionClass {
  /**
   * ecom: default transaction
   */
  ecom = 'ecom',
  /**
   * recurring: recurring transaction
   */
  recurring = 'recur',
}

/**
 * AlternativePaymentMethod
 */
export enum AlternativePaymentMethod {
  /**
   * unionpay: for supporting payment with unionpay
   */
  unionPay = 'unionpay',
  /**
   * stcpay: for supporting payment with stcpay
   */
  stcPay = 'stcpay',
  /**
   * valu: for supporting payment with valu
   */
  valu = 'valu',
  /**
   * meezaqr: for supporting payment with meezaqr
   */
  meezaQR = 'meezaqr',
  /**
   * omannet: for supporting payment with omannet
   */
  omannet = 'omannet',
  /**
   * knetcredit: for supporting payment with knetcredit
   */
  knetCredit = 'knetcredit',
  /**
   * knetdebit: for supporting payment with knetdebit
   */
  knetDebit = 'knetdebit',
  /**
   * fawry: for supporting payment with fawry
   */
  fawry = 'fawry',
}

/**
 * @name PayTabs
 * @description
 * A plugin that allows you to use PayTabs's Native SDKs for Android and iOS.
 * @usage
 * ```typescript
 * import { PayTabs } from '@awesome-cordova-plugins/paytabs/ngx';
 *
 * constructor(private paytabs: PayTabs) { }
 *
 * ...
 * let billingDetails: PaymentSDKBillingDetails = {
 *    name: "John Smith",
 *    email: "email@domain.com",
 *    phone: "+201111111111",
 *    addressLine: "Address line",
 *    city: "Dubai",
 *    state: "Dubai",
 *    countryCode: "AE",
 *    zip: "1234"
 *  };
 *
 * var configuration: PaymentSDKConfiguration = {
 *    profileID: "*profile id*",
 *    serverKey: "*server key*",
 *    clientKey: "*cleint key*",
 *    cartID: "12345",
 *    currency: "USD",
 *    cartDescription: "Flowers",
 *    merchantCountryCode: "ae",
 *    merchantName: "Flowers Store",
 *    amount: 20,
 *    screenTitle:"Pay with Card",
 *    billingDetails: billingDetails
 *  }
 *
 * this.paytabs.startCardPayment(configuration)
 *                .then(result => console.log(result))
 *                .catch(error => console.error(error));
 *
 * this.paytabs.startApplePayPayment(configuration)
 *                .then(result => console.log(result))
 *                .catch(error => console.error(error));
 *
 * this.paytabs.startAlternativePaymentMethod(configuration)
 *                .then(result => console.log(result))
 *                .catch(error => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'PayTabs',
  plugin: 'com.paytabs.cordova.plugin',
  pluginRef: 'com.paytabs.cordova.plugin',
  repo: 'https://github.com/paytabscom/paytabs-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class PayTabs extends AwesomeCordovaNativePlugin {
  /**
   * Start Card Payment
   *
   * @param params {PaymentSDKConfiguration} payment request configuration
   * @param configuration
   * @returns {Promise<any>} returns a promise that resolves with transaction details, or rejects with an error
   */
  @Cordova()
  startCardPayment(configuration: PaymentSDKConfiguration): Promise<any> {
    return;
  }
  /**
   * Start ApplePay Payment
   *
   * @param params {PaymentSDKConfiguration} payment request configuration
   * @param configuration
   * @returns {Promise<any>} returns a promise that resolves with transaction details, or rejects with an error
   */
  @Cordova()
  startApplePayPayment(configuration: PaymentSDKConfiguration): Promise<any> {
    return;
  }
  /**
   * Start Alternative Payment Method
   *
   * @param params {PaymentSDKConfiguration} payment request configuration
   * @param configuration
   * @returns {Promise<any>} returns a promise that resolves with transaction details, or rejects with an error
   */
  @Cordova()
  startAlternativePaymentMethod(configuration: PaymentSDKConfiguration): Promise<any> {
    return;
  }
}
