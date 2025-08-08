/**
 * This is a template for new plugin wrappers
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name CustomUiSdk
 * @description
 * This plugin is used to access Paytmpayments native CustomUiSdk framework's apis.
 *
 * @usage
 * ```typescript
 * import { CustomUiSdk } from '@awesome-cordova-plugins/custom-ui-sdk/ngx';
 *
 *
 * constructor(private customUiSdk: CustomUiSdk) { }
 *
 * ...
 *
 *
 * this.customUiSdk.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'cordova-paytmpayments-customuisdk',
  plugin: 'cordova-paytmpayments-customuisdk',
  pluginRef: 'paytmpayments.customuisdk',
  repo: '',
  install: '',
  installVariables: [],
  platforms: ['Android, iOS'],
})
@Injectable()
export class CustomUiSdk extends AwesomeCordovaNativePlugin {
  /**
   * This function show dialog to ask user permision to fetch authcode
   *
   * @param clientId {string} unique id give to each merchant
   * @param mid {string} merchant id
   * @returns {Promise<string>} Returns authcode
   */
  @Cordova()
  fetchAuthCode(clientId: string, mid: string): Promise<string> {
    return;
  }

  /**
   * This function check that paytm app is installed or not
   *
   * @returns {Promise<boolean>} Returns installed - true or not -false
   */
  @Cordova()
  isPaytmAppInstalled(): Promise<boolean> {
    return;
  }

  /**
   * @param mid {string} merchant id
   * @param orderId {string} order id
   * @param txnToken {string} transaction token
   * @param amount {string} transaction amount
   * @param isStaging {boolean} staging or production
   * @param callbackUrl {string} callback url only required for custom url page
   */
  @Cordova()
  initPaytmSDK(
    mid: string,
    orderId: string,
    txnToken: string,
    amount: string,
    isStaging: boolean,
    callbackUrl: string
  ) {
    return;
  }

  /**
   * @param paymentFlow {string} payment type NONE, ADDANDPAY
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  goForWalletTransaction(paymentFlow: string): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  appInvoke(): Promise<any> {
    return;
  }

  /**
   * @param cardNumber {string} card number
   * @param cardExpiry {string} card expiry
   * @param cardCvv {string} card cvv
   * @param cardType {string} card type debit or credit
   * @param paymentFlow {string} payment type NONE, ADDANDPAY
   * @param channelCode {string} bank channel code
   * @param issuingBankCode {string} issuing bank code
   * @param emiChannelId {string} emi plan id
   * @param authMode {string} authentication mode 'otp' 'pin'
   * @param saveCard {boolean} save card for next time
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  goForNewCardTransaction(
    cardNumber: string,
    cardExpiry: string,
    cardCvv: string,
    cardType: string,
    paymentFlow: string,
    channelCode: string,
    issuingBankCode: string,
    emiChannelId: string,
    authMode: string,
    saveCard: boolean
  ): Promise<any> {
    return;
  }

  /**
   * @param cardId {string} card id of saved card
   * @param cardCvv {string} card cvv
   * @param cardType {string} card type  debit or credit
   * @param paymentFlow {string} payment type NONE, ADDANDPAY
   * @param channelCode {string} bank channel code
   * @param issuingBankCode {string} issuing bank code
   * @param emiChannelId {string} emi plan id
   * @param authMode {string} authentication mode 'otp' 'pin'
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  goForSavedCardTransaction(
    cardId: string,
    cardCvv: string,
    cardType: string,
    paymentFlow: string,
    channelCode: string,
    issuingBankCode: string,
    emiChannelId: string,
    authMode: string
  ): Promise<any> {
    return;
  }

  /**
   * @param netBankingCode {string} bank channel code
   * @param paymentFlow {string} payment type NONE, ADDANDPAY
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  goForNetBankingTransaction(netBankingCode: string, paymentFlow: string): Promise<any> {
    return;
  }

  /**
   * @param upiCode {string} upi code
   * @param paymentFlow {string} payment type NONE, ADDANDPAY
   * @param saveVPA {boolean} save vpa for future transaction
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  goForUpiCollectTransaction(upiCode: string, paymentFlow: string, saveVPA: boolean): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>} Returns upi app list names
   */
  @Cordova()
  getUpiIntentList(): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>} Returns upi app list names
   */
  @Cordova()
  getUpiIntentSubscriptionList(): Promise<any> {
    return;
  }

  /**
   * @param appName {string} upi app name
   * @param paymentFlow {string} payment type NONE, ADDANDPAY
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  goForUpiIntentTransaction(appName: string, paymentFlow: string): Promise<any> {
    return;
  }

  /**
   * @param appName {string} upi app name
   * @param paymentFlow {string} payment type NONE, ADDANDPAY
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  goForUpiIntentSubscriptionTransaction(appName: string, paymentFlow: string): Promise<any> {
    return;
  }

  /**
   * @param cardSixDigit {string} card starting six digit
   * @param tokenType {string} token type ACCESS or TXN_TOKEN
   * @param token {string} token fetch from api
   * @param mid {string} merchant id
   * @param referenceId {string} reference id
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  getBin(cardSixDigit: string, tokenType: string, token: string, mid: string, referenceId: string): Promise<any> {
    return;
  }

  /**
   * @param tokenType {string} token type ACCESS or TXN_TOKEN
   * @param token {string} token fetch from api
   * @param mid {string} merchant id
   * @param orderId {string} order id required only if token type is TXN_TOKEN
   * @param referenceId {string} reference id required only if token type is ACCESS
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  fetchNBList(tokenType: string, token: string, mid: string, orderId: string, referenceId: string): Promise<any> {
    return;
  }

  /**
   * @param channelCode {string} bank channel code
   * @param cardType {string} card type debit or credit
   * @returns {Promise<any>} Returns object of response
   */
  @Cordova()
  fetchEmiDetails(channelCode: string, cardType: string): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>} Returns last successfully used net backing code
   */

  @Cordova()
  getLastNBSavedBank(): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>} Returns last successfully used vpa code
   */

  @Cordova()
  getLastSavedVPA(): Promise<any> {
    return;
  }

  /**
   * @param clientId {string} unique id give to each merchant
   * @param authCode {string} fetched auth code
   * @returns {Promise<any>} Returns last successfully used vpa code
   */
  @Cordova()
  isAuthCodeValid(clientId: string, authCode: string): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>} Returns current environment
   */
  @Cordova()
  getEnvironment(): Promise<string> {
    return;
  }

  /**
   * @param environment {string} setting environment PRODUCTION or STAGING
   */
  @Cordova()
  setEnvironment(environment: string): void {
    return;
  }
}
