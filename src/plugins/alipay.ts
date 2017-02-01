import { Plugin, Cordova } from './plugin';
/**
 * @link https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.wlOhAE&treeId=193&articleId=105465&docType=1
 * 所有value都需要经过urlencode。
 */
export interface AlipayOrder {
  /**
   * 支付宝分配给开发者的应用ID
   */
  app_id: string;

  /**
   * 接口名称
   * Should be: alipay.trade.app.pay
   */
  method: string;

  /**
   * 数据格式
   * Default: "JSON"
   */
  format?: string;

  /**
   * 请求使用的编码格式
   * Possible values: "UTF-8", "GBK"
   * Default: "UTF-8"
   */
  charset: string;

  /**
   * 签名算法
   * Default: 'RSA'
   */
  sign_type: string;

  /**
   * 签名，这个很重要，需要从服务器端签名后传过来。APP上不应该存有签名用的任何密钥。
   * Default: 'RSA'
   */
  sign: string;

  /**
   * 发送请求的时间戳。"yyyy-MM-dd HH:mm:ss"格式，比如：2014-07-24 03:07:50 
   */
  timestamp: string;

  /**
   * 接口版本，固定 '1.0'
   */
  version: string;

  /**
   * 通知地址, 用来接收结果的地址。
   */
  notify_url: string;

  /**
   * 业务请求参数集合，详见接口文档。这里是一个JSON格式的字符串。
   */
  biz_content: string;
}

/**
 * @name Alipay
 * @description
 *  支付宝APP支付插件，支持最新版本的支付宝SDK。
 *  This plugin is used for Alipay APP support. Integrated with the latest SDK.
 *
 * Requires Cordova plugin: `cordova-alipay-base`. For more info, please see the [Alipay plugin docs](https://github.com/xueron/cordova-alipay-base).
 *
 * @usage
 * ```
 * import { Alipay } from 'ionic-native';
 * 
 * // Should get from server side with sign.
 * let alipayOrder = {
         ...
 *     };
 *
 * Alipay.pay(alipayOrder)
 *    .then(result => {
 *       console.log(result); // Success
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
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
export class Alipay {
  /**
   * Open Alipay to perform App pay
   * @param order { AlipayOrder } alipay options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova()
  static pay(order: AlipayOrder): Promise<any> { return; }
}

