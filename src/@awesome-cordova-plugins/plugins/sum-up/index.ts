import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface SumUpResponse {
  // Code to identify the message
  code: number;

  // Message for readable usage
  message: string;
}

export interface SumUpLoginStatus {
  // Code, to check if an error occured
  code: number;

  // Booleand value whether the user is logged in or not
  isLoggedIn: boolean;
}

export interface SumUpPayment {
  // Unique transaction code
  transaction_code: string;

  // Card type -> like MAESTRO
  card_type: string;

  // Merchant code for identification
  merchant_code: string;

  // Amount of the payment
  amount: number;

  // Tip amount -> default 0
  tip_amount: number;

  // Vat amount -> default 0
  vat_amount: number;

  // Currency code -> like EUR
  currency: string;

  // Payment status -> successful or error
  status: string;

  // Type -> Card or nfc
  payment_type: string;

  // Entry mode -> Like chip or contactless
  entry_mode: string;

  // Number of installments -> default 1
  installments: number;
}

/**
 * @hidden
 */
export class SumUpKeys {
  // The generated accessToken, to automate the login process
  accessToken: string;

  // affiliateKey can also be set in the object, if it has to be changed on runtime
  affiliateKey: string;

  constructor() {
    this.accessToken = '';
    this.affiliateKey = '';
  }
}

/**
 * @name SumUp
 * @description
 * Plugin to communicate with a SumUp payment terminal
 * @usage
 * ```typescript
 * import { SumUp } from '@awesome-cordova-plugins/sum-up';
 *
 *
 * constructor(private sumUp: SumUp) { }
 *
 * const sumUpKeys: SumUpKeys = new SumUpKeys();
 * sumUpKeys.affiliateKey = 'YOUR_API_KEY'; // if not provided in installation
 * sumUpKeys.accessToken = 'YOUR_ACCESS_TOKEN';
 *
 * this.sumUp.login(sumUpKeys)
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.auth('YOUR_ACCESS_TOKEN')
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.getSettings()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.logout()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.isLoggedIn()
 *   .then((res: SumUpLoginStatus) => console.log(res))
 *   .catch((error: SumUpLoginStatus) => console.error(error));
 *
 *  this.sumUp.prepare()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 * this.sumUp.closeConnection()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 * this.sumUp.pay(10.0, 'EUR')
 *   .then((res: SumUpPayment) => console.log(res))
 *   .catch((error: SumUpPayment) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SumUp',
  plugin: 'cordova-sumup-plugin',
  pluginRef: 'window.SumUp',
  repo: 'https://github.com/mariusbackes/cordova-plugin-sumup',
  install: 'cordova plugin add cordova-sumup-plugin --variable SUMUP_API_KEY=INSERT_YOUR_KEY',
  installVariables: ['SUMUP_API_KEY'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SumUp extends AwesomeCordovaNativePlugin {
  /**
   * Login a user with an optional access token.
   * If the access token is provided and valid, the user is logged in autmatically.
   * Otherwise the user has to type in the credentials
   *
   * @param sumUpKeys {SumUpKeys}
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  login(sumUpKeys: SumUpKeys): Promise<SumUpResponse> {
    return;
  }

  /**
   * Authenticates the account with the given access token. Parameter accessToken is required.
   *
   * @param accessToken {string}
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  auth(accessToken: string): Promise<SumUpResponse> {
    return;
  }

  /**
   * Opens a new window with the all account settings of an logged in user.
   *
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  getSettings(): Promise<SumUpResponse> {
    return;
  }

  /**
   * Logout a user from the account.
   *
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  logout(): Promise<SumUpResponse> {
    return;
  }

  /**
   * Checks whether the user is logged in or not and returns an object with the field isLoggedIn which is a boolean value.
   *
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  isLoggedIn(): Promise<SumUpLoginStatus> {
    return;
  }

  /**
   * Prepares the terminal for a payment. Checks whether the CardReader is ready to transmit and
   * if an instance of the CardReaderManager is available.
   *
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  prepare(): Promise<SumUpResponse> {
    return;
  }

  /**
   * Tries to close the connection to the card terminal.
   *
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  closeConnection(): Promise<SumUpResponse> {
    return;
  }

  /**
   * Opens a native SumUp window to proceed a payment. Parameter amount and currencycode are required.
   * If the Payment was successful it returns an SumUpPayment object with information about the payment.
   *
   * @param amount {number}
   * @param currencycode {string}
   * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  @Cordova()
  pay(amount: number, currencycode: string): Promise<SumUpPayment> {
    return;
  }
}
