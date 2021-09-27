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
 * @name AllInOneSDK
 * @description
 * Paytm All-in-One SDK plugin for Cordova/Ionic Applications
 * Paytm All-in-One SDK provides a swift, secure and seamless payment experience to your users by invoking the Paytm app (if installed on your user’s smartphone) to complete payment for your order.
 * Paytm All-in-One SDK enables payment acceptance via Paytm wallet, Paytm Payments Bank, saved Debit/Credit cards, Net Banking, BHIM UPI and EMI as available in your customer’s Paytm account. If Paytm app is not installed on a customer's device, the transaction will be processed via web view within the All-in-One SDK.
 * For more information about Paytm All-in-One SDK, please visit https://developer.paytm.com/docs/all-in-one-sdk/hybrid-apps/cordova/
 * @usage
 * ```typescript
 * import { AllInOneSDK } from '@awesome-cordova-plugins/all-in-one-sdk/ngx';
 *
 *
 * constructor(private allInOneSDK: AllInOneSDK) { }
 *
 * ...
 *
 * For below parameters see [documentation](https://developer.paytm.com/docs/all-in-one-sdk/hybrid-apps/cordova/)
 * let paymentIntent = { mid : merchantID, orderId: orderId, txnToken: transactionToken, amount: amount, isStaging: isStaging, callbackUrl:callBackURL,  restrictAppInvoke:restrictAppInvoke  }
 *
 * this.allInOneSDK.startTransaction(paymentIntent)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 *
 * For iOS:
 * After adding the plugin, open the iOS project, you can find the same at <projectName>/platforms/ios.
 * In case merchant don’t have callback URL, Add an entry into Info.plist LSApplicationQueriesSchemes(Array) Item 0 (String)-> paytm
 * Add a URL Scheme “paytm”+”MID”
 */
@Plugin({
  pluginName: 'AllInOneSDK',
  plugin: 'cordova-paytm-allinonesdk',
  pluginRef: 'AllInOneSDK',
  repo: 'https://github.com/paytm/paytm-allinonesdk-ionic-cordova.git',
  platforms: ['Android', 'iOS'],
})
export class AllInOneSDK extends AwesomeCordovaNativePlugin {
  /**
   * This function checks if Paytm Application is available on the device.
   * If Paytm exists then it invokes Paytm Application with the parameters sent and creates an order.
   * If the Paytm Application is not available the transaction is continued on a webView within All-in-One SDK.
   *
   * @param options {PaymentIntentModel} These parameters are required and will be used to create an order.
   * @returns {Promise<PaytmResponse>} Returns a promise that resolves when a transaction completes(both failed and successful).
   */
  @Cordova()
  startTransaction(options: PaymentIntentModel | PaymentAssistIntentModel): Promise<PaytmResponse> {
    return;
  }
}

/**
 * The response that will be recieved when any transaction is completed
 */
export interface PaytmResponse {
  message: string;
  response: string; // A stringified response of a hashmap returned from All-in-One SDK
}

/**
 * For below parameters see [documentation](https://developer.paytm.com/docs/all-in-one-sdk/hybrid-apps/cordova/)
 */
export interface PaymentIntentModel {
  mid: string; // Merchant ID
  orderId: string; // Order ID
  txnToken: string; // Transaction Token
  amount: string; // Amount
  isStaging: boolean; // Environment
  callbackUrl: string; // Callback URL
  restrictAppInvoke: boolean; // To enable or disable the paytm app invocation
}

export interface PaymentAssistIntentModel {
  mid: string; // Merchant ID
  orderId: string; // Order ID
  txnToken: string; // Transaction Token
  amount: string; // Amount
  isStaging: boolean; // Environment
  callbackUrl: string; // Callback URL
  restrictAppInvoke: boolean; // To enable or disable the paytm app invocation
  enableAssist: boolean; // To enable or disable the Assist (Otp auto read)
}
