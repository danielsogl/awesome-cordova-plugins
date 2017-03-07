import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface AlipayOrder {
  /**
   * appId assigned by Alipay
   */
  app_id: string;

  /**
   * Api name.
   * Should be: alipay.trade.app.pay
   */
  method: string;

  /**
   * Data format
   * Default: "JSON"
   */
  format?: string;

  /**
   * Charset
   * Possible values: "UTF-8", "GBK"
   * Default: "UTF-8"
   */
  charset: string;

  /**
   * Sign method
   * Default: 'RSA'
   */
  sign_type: string;

  /**
   * Sign value. Should be got from server side.
   * Default: 'RSA'
   */
  sign: string;

  /**
   * Timestamp, formated like "yyyy-MM-dd HH:mm:ss", e.g. 2014-07-24 03:07:50
   */
  timestamp: string;

  /**
   * Api version. Fixed value '1.0'
   */
  version: string;

  /**
   * Notify url.
   */
  notify_url: string;

  /**
   * biz content. formated in json. see alipay doc for detail.
   */
  biz_content: string;
}

/**
 * @name Alipay
 * @description
 * This plugin is used for Alipay APP support. Integrated with the latest SDK.
 *
 * Requires Cordova plugin: `cordova-alipay-base`. For more info, please see the [Alipay plugin docs](https://github.com/xueron/cordova-alipay-base).
 *
 * @usage
 * ```
 * import { Alipay, AlipayOrder } from '@ionic-native/alipay';
 *
 * constructor(private alipay: Alipay) {
 *
 * // Should get from server side with sign.
 * const alipayOrder: AlipayOrder = {
 *       ...
 *     };
 *
 *
 * this.alipay.pay(alipayOrder)
 *    .then(result => {
 *       console.log(result); // Success
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 *
 * }
 *
 *
 * ```
 *
 * @interfaces
 * AlipayOrder
 */
@Plugin({
  pluginName: 'Alipay',
  plugin: 'cordova-alipay-base',
  pluginRef: 'Alipay.Base',
  repo: 'https://github.com/xueron/cordova-alipay-base',
  platforms: ['Android', 'iOS'],
  install: 'ionic plugin add https://github.com/xueron/cordova-alipay-base --variable APP_ID=your_app_id'
})
@Injectable()
export class Alipay {
  /**
   * Open Alipay to perform App pay
   * @param order { AlipayOrder } alipay options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova()
  pay(order: AlipayOrder): Promise<any> { return; }
}

