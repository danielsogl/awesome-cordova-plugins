import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

declare const cordova: Cordova & { plugins: any };

export interface PaymentObject {
  title?: TitleData;
  userCode: string;
  data: PaymentData;
  callback: any;
}

export interface CertificationObject {
  title?: TitleData;
  userCode: string;
  data: CertificationData;
  callback: any;
}

export interface TitleData {
  name?: string;
  color?: string;
}

export interface PaymentData {
  pg?: string;
  pay_method?: string;
  name: string;
  merchant_uid?: string;
  amount: string;
  buyer_name?: string;
  buyer_tel?: string;
  buyer_email?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  app_scheme: string;
  custom_data?: any;
  notice_url?: string;
  escrow?: boolean;
  digital?: boolean;
  display?: {
    card_quota?: [number];
  };
  currency?: string;
  customer_uid?: string;
  tax_free?: string;
  language?: string;
  vbank_due?: string;
  biz_num?: string;
}

export interface CertificationData {
  company?: string;
  phone?: string;
  name?: string;
  carrier?: string;
  birth?: string;
  merchant_uid?: string;
  min_age?: string;
  popup?: boolean;
}

/**
 * @name Iamport Cordova
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { IamportCordova } from '@ionic-native/iamport-cordova/ngx';
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
  platforms: ['ios', 'android']
})
@Injectable()
export class IamportCordova extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  payment(paymentObject: PaymentObject): Promise<any> {
    return cordova.plugins.IamportCordova.payment(paymentObject); // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  certification(certificationObject: CertificationObject): Promise<any> {
    return cordova.plugins.IamportCordova.certification(certificationObject); // We add return; here to avoid any IDE / Compiler errors
  }
}
