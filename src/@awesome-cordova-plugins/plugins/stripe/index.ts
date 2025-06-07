import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface StripeCardTokenParams {
  /**
   * Card number
   */
  number: string;
  /**
   * Expiry month
   */
  expMonth: number;
  /**
   * Expiry year
   */
  expYear: number;
  /**
   * CVC / CVV
   */
  cvc?: string;
  /**
   * Cardholder name
   */
  name?: string;
  /**
   * Address line 1
   */
  address_line1?: string;
  /**
   * Address line 2
   */
  address_line2?: string;
  /**
   * City
   */
  address_city?: string;
  /**
   * State / Province
   */
  address_state?: string;
  /**
   * Country
   */
  address_country?: string;
  /**
   * Postal code / ZIP Code
   */
  postalCode?: string;
  /**
   * 3-letter ISO code for currency
   */
  currency?: string;
}

export interface StripeBankAccountParams {
  /**
   * Routing number.
   */
  routing_number: string;
  /**
   * Account number.
   */
  account_number: string;
  /**
   * Currency code. Example: `USD`.
   */
  currency: string;
  /**
   * Country code. Example: `US`.
   */
  country: string;
  /**
   * Account holder name.
   */
  account_holder_name?: string;
  /**
   * Account holder type. This can be `individual` or `company`.
   */
  account_holder_type?: string;
}

export interface StripeCardTokenRes {
  /**
   * Card Object.
   */
  card: {
    brand: string;
    exp_month: number;
    exp_year: number;
    funding: string;
    last4: string;
  };
  /**
   * Token Request Date Time.
   */
  created: string;
  /**
   * Card Token.
   */
  id: string;
  /**
   * Source Type (card or account).
   */
  type: string;
}

/**
 * @name Stripe
 * @description
 * A plugin that allows you to use Stripe's Native SDKs for Android and iOS.
 * @usage
 * ```typescript
 * import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
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
 * }
 *
 * this.stripe.createCardToken(card)
 *    .then(token => console.log(token.id))
 *    .catch(error => console.error(error));
 *
 * ```
 * @interfaces
 * StripeCardTokenParams
 */
@Plugin({
  pluginName: 'Stripe',
  plugin: 'cordova-plugin-stripe',
  pluginRef: 'cordova.plugins.stripe',
  repo: 'https://github.com/zyramedia/cordova-plugin-stripe',
  platforms: ['Android', 'Browser', 'iOS'],
})
@Injectable()
export class Stripe extends AwesomeCordovaNativePlugin {
  /**
   * Set publishable key
   * @param publishableKey {string} Publishable key
   * @returns {Promise<void>}
   */
  @Cordova()
  setPublishableKey(publishableKey: string): Promise<void> {
    return;
  }

  /**
   * Create Credit Card Token
   * @param params {StripeCardTokenParams} Credit card information
   * @returns {Promise<StripeCardTokenRes>} returns a promise that resolves with the token object, or rejects with an error
   */
  @Cordova()
  createCardToken(params: StripeCardTokenParams): Promise<StripeCardTokenRes> {
    return;
  }

  /**
   * Create a bank account token
   * @param params {StripeBankAccountParams} Bank account information
   * @returns {Promise<string>} returns a promise that resolves with the token, or rejects with an error
   */
  @Cordova()
  createBankAccountToken(params: StripeBankAccountParams): Promise<string> {
    return;
  }

  /**
   * Validates a credit card number
   * @param cardNumber {string} Credit card number
   * @returns {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
   */
  @Cordova()
  validateCardNumber(cardNumber: string): Promise<any> {
    return;
  }

  /**
   * Validates a CVC number
   * @param cvc {string} CVC number
   * @returns {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
   */
  @Cordova()
  validateCVC(cvc: string): Promise<any> {
    return;
  }

  /**
   * Validates an expiry date
   * @param expMonth {string} expiry month (0 - 11)
   * @param expYear {string} expiry year
   * @returns {Promise<any>} returns a promise that resolves if the date is valid, and rejects if it's invalid
   */
  @Cordova()
  validateExpiryDate(expMonth: string, expYear: string): Promise<any> {
    return;
  }

  /**
   * Get a card type from card number
   * @param cardNumber {string} Card number
   * @returns {Promise<string>} returns a promise that resolves with the credit card type
   */
  @Cordova()
  getCardType(cardNumber: string): Promise<string> {
    return;
  }
}
