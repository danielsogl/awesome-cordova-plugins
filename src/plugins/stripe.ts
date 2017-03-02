import {Plugin, Cordova} from './plugin';

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
  postal_code?: string;
  /**
   * 3-letter ISO code for currency
   */
  currency?: string;
}

/**
 * @name Stripe
 * @description
 * A plugin that allows you to use Stripe's Native SDKs for Android and iOS.
 *
 * @usage
 * ```
 * import { Stripe } from 'ionic-native';
 *
 * Stripe.setPublishableKey('my_publishable_key');
 *
 * let card = {
 *  number: '4242424242424242',
 *  expMonth: 12,
 *  expYear: 2020,
 *  cvc: '220'
 * };
 *
 * Stripe.createCardToken(card)
 *    .then(token => console.log(token))
 *    .catch(error => console.error(error));
 *
 * ```
 *
 * @interfaces
 * StripeCardTokenParams
 */
@Plugin({
  pluginName: 'Stripe',
  plugin: 'cordova-plugin-stripe',
  pluginRef: 'cordova.plugins.stripe',
  repo: 'https://github.com/zyramedia/cordova-plugin-stripe'
})
export class Stripe {

  /**
   * Set publishable key
   * @param publishableKey {string} Publishable key
   * @return {Promise<void>}
   */
  @Cordova()
  static setPublishableKey(publishableKey: string): Promise<void> { return; }

  /**
   * Create Credit Card Token
   * @param params {StripeCardTokenParams} Credit card information
   * @return {Promise<string>} returns a promise that resolves with the token, or reject with an error
   */
  @Cordova()
  static createCardToken(params: StripeCardTokenParams): Promise<string> { return; }

}
