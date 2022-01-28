import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

declare const cordova: Cordova & { plugins: any };

export interface PaymentObject {
  title?: TitleData; // webview title data
  userCode: string; // user identification code
  data: PaymentData; // payment data
  callback: any; // callback function after payment
}

export interface CertificationObject {
  title?: TitleData; // webview title data
  userCode: string; // user identification code
  data: CertificationData; // certification data
  callback: any; // callback function after certification
}

export interface TitleData {
  name?: string; // webview title name
  color?: string; // webview title background color
}

export interface PaymentData {
  pg?: string; // payment gateway type
  pay_method?: string; // payment method
  name: string; // name of order
  merchant_uid?: string; // unique merchant id
  amount: string; // payment amount
  buyer_name?: string; // buyer name
  buyer_tel?: string; // buyer contact
  buyer_email?: string; // buyer email address
  buyer_addr?: string; // buyer address
  buyer_postcode?: string; // buyer postcode
  app_scheme: string; // custom app url scheme
  custom_data?: any; // custom data
  notice_url?: string; // notification url
  escrow?: boolean; // whether the type of this order is escrow
  digital?: boolean; // whether this order is for real products or contents
  display?: {
    card_quota?: number[]; // credit card installment setting value
  };
  currency?: string; // payment currency
  customer_uid?: string; // unique customer id for subscription payments
  tax_free?: string; // tax amount
  language?: string; // language type
  vbank_due?: string; // vbank due date
  biz_num?: string; // business number
}

export interface CertificationData {
  company?: string; // company name
  phone?: string; // cell phone number
  name?: string; // name
  carrier?: string; // carrier code
  birth?: string; // birth date
  merchant_uid?: string; // unique merchant id
  min_age?: string; // minimum age to allow certification
  popup?: boolean; // whether the webview is popup
}

/**
 * @name Iamport Cordova
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { IamportCordova } from '@awesome-cordova-plugins/iamport-cordova/ngx';
 *
 *
 * constructor(private iamportCordova: IamportCordova) { }
 *
 * ...
 *
 *
 * this.iamportCordova.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'IamportCordova',
  plugin: 'iamport-cordova',
  pluginRef: 'cordova.plugins.IamportCordova',
  repo: 'https://github.com/iamport/iamport-cordova',
  platforms: ['ios', 'android'],
})
@Injectable()
export class IamportCordova extends AwesomeCordovaNativePlugin {
  /**
   * This function is to load a webview of a payment gateway to pay for something
   *
   * @param paymentObject {PaymentObject} Payment data to set the payment webview
   * @returns {Promise<any>} A callback function of the payment data is triggered when the webview is closed
   */
  @Cordova()
  payment(paymentObject: PaymentObject): Promise<any> {
    return cordova.plugins.IamportCordova.payment(paymentObject);
  }

  /**
   * This function is to load a webview for identification with carrier type(like Verizon), name and phone number
   *
   * @param certificationObject {CertificationObject} Certification data to set the certification webview
   * @returns {Promise<any>} A callback function of the certification data is triggered when the webview is closed
   */
  @Cordova()
  certification(certificationObject: CertificationObject): Promise<any> {
    return cordova.plugins.IamportCordova.certification(certificationObject);
  }
}
