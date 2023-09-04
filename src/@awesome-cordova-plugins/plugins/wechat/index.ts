import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Wechat
 * @description
 * A cordova plugin, a JS version of Wechat SDK
 * @usage
 * ```typescript
 * import { Wechat } from '@awesome-cordova-plugins/wechat/ngx';
 *
 *
 * constructor(private wechat: Wechat) { }
 *
 * ...
 *
 *
 * this.wechat.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Wechat',
  plugin: 'cordova-plugin-wechat',
  pluginRef: 'Wechat',
  repo: 'https://github.com/xu-li/cordova-plugin-wechat.git',
  install: 'cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID',
  installVariables: ['wechatappid'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Wechat extends AwesomeCordovaNativePlugin {
  Scene: {
    SESSION: 0; // 聊天界面
    TIMELINE: 1; // 朋友圈
    FAVORITE: 2; // 收藏
  };

  Type: {
    APP: 1;
    EMOTION: 2;
    FILE: 3;
    IMAGE: 4;
    MUSIC: 5;
    VIDEO: 6;
    WEBPAGE: 7;
  };

  Mini: {
    RELEASE: 0; // 正式版
    TEST: 1; // 测试版
    PREVIEW: 2; // 体验版
  };

  @Cordova()
  isInstalled(): Promise<any> {
    return;
  }

  /**
   * Share a message to wechat app
   *
   * @param params
   * @example
   * <code>
   * this.wechat.share({
   *     message: {
   *        title: "Message Title",
   *        description: "Message Description(optional)",
   *        mediaTagName: "Media Tag Name(optional)",
   *        thumb: "http://YOUR_THUMBNAIL_IMAGE",
   *        media: {
   *            type: Wechat.Type.WEBPAGE,   // webpage
   *            webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
   *        }
   *    },
   *    scene: this.wechat.Scene.TIMELINE   // share to Timeline
   * }.then(() => {
   *       console.log('share success');
   *    })
   *    .catch(error => {
   *       console.log(error);
   *    });
   * </code>
   */
  @Cordova()
  share(params: any): Promise<any> {
    return;
  }

  /**
   * Sending an auth request to Wechat
   *
   * @param scope
   * @param state
   * @example
   * <code>
   * this.wechat.auth.then((res) => { alert(res.code); });
   * </code>
   */
  @Cordova()
  auth(scope: any, state: any): Promise<any> {
    return;
  }

  /**
   * Send a payment request
   *
   * @param params
   * @link https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1
   * @example
   * <code>
   * var params = {
   *     mch_id: '10000100', // merchant id
   *     prepay_id: 'wx201411101639507cbf6ffd8b0779950874', // prepay id returned from server
   *     nonce: '1add1a30ac87aa2db72f57a2375d8fec', // nonce string returned from server
   *     timestamp: '1439531364', // timestamp
   *     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
   * };
   * this.wechat.sendPaymentRequest(params).then(() => {
   *     console.log("Success");
   * }).catch(error => {
   *     console.log(error);
   * });
   * </code>
   */
  @Cordova()
  sendPaymentRequest(params: any): Promise<any> {
    return;
  }

  /**
   * jumpToBizProfile （跳转到某个微信公众号）2016-11-11 测试是失效的，囧
   *
   * @param url
   * @link https://segmentfault.com/a/1190000007204624
   * @link https://segmentfault.com/q/1010000003907796
   * @example
   * <code>
   * var params = {
   *     info: 'gh_xxxxxxx', // 公众帐号原始ID
   *     type:  'Normal' // 普通号
   * }
   * or
   * var params = {
   *     info: 'extMsg', // 相关的硬件二维码串
   *     type:  'Device' // 硬件号
   * };
   * this.wechat.jumpToBizProfile(params).then(()=> {
   *     console.log("Success");
   * }).catch(error => {
   *     console.log(error);
   * });
   * </code>
   */
  @Cordova()
  jumpToWechat(url: string): Promise<any> {
    return;
  }

  /**
   * chooseInvoiceFromWX exq:choose invoices from Wechat card list
   *
   * @param params
   * @example
   * <code>
   * params: signType, cardSign, nonceStr, timeStamp  all required
   * this.wechat.chooseInvoiceFromWX(params).then(() => {
   *     console.log("Success");
   * }).catch(error => {
   *     console.log(error);
   * });
   * </code>
   */
  @Cordova()
  chooseInvoiceFromWX(params: any): Promise<any> {
    return;
  }

  /**
   * openMiniProgram exq:app opens wechat mini program
   *
   * @param params
   * @example
   * <code>
   * params: userName, path, miniprogramType  all required
   * Wechat.openMiniProgram(params, function (data) {
   *     alert(data.extMsg);
   * }, function (reason) {
   *     alert("Failed: " + reason);
   * });
   * </code>
   */
  @Cordova()
  openMiniProgram(params: any): Promise<any> {
    return;
  }
}
