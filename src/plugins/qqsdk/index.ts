import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface QQShareOptions {

  /**
   * The clinet type, QQ or TIM
   * Default is QQ
   */
  client?: number;

  /**
   * The Share Sence
   * Default is QQ
   */
  scene?: number;

  /**
   * The text for shareText
   */
  text?: string;

  /**
   * The url for share news or audio
   */
  url?: string;

  /**
   * The title for share image,news or audio
   */
  title?: string;

  /**
   * The description for share image,news or audio
   */
  description?: string;

  /**
   * The image for share image,news or audio
   * Image supports three types:
   * 1. Network URL
   * 2. Base64
   * 3. Absolute file path
   */
  image?: string;

  /**
   *  The URL for audio
   */
  flashUrl?: string;
}

/**
 * @name QQSDK
 * @description
 * This Plugin is a wrapper around the Tencent QQ SDK for Android and iOS. Provides access to QQ ssoLogin, QQ Sharing, QQZone Sharing etc.
 *
 * Requires Cordova plugin: `cordova-plugin-qqsdk`. For more info, please see the [QQSDK plugin docs](https://github.com/iVanPan/Cordova_QQ).
 *
 * @usage
 * ```typescript
 * import { QQSDK, QQShareOptions } from '@ionic-native/qqsdk';
 *
 * constructor(private qq: QQSDK) { }
 *
 * ...
 *
 *
 * const options: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 *   scene: this.qq.Scene.QQ,
 *   title: 'This is a title for cordova-plugin-qqsdk',
 *   url: 'https://cordova.apache.org/',
 *   image: 'https://cordova.apache.org/static/img/cordova_bot.png',
 *   description: 'This is  Cordova QQ share description',
 *   flashUrl:  'http://stream20.qqmusic.qq.com/30577158.mp3',
 * };
 *
 * const clientOptions: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 * };
 *
 * const shareTextOptions: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 *   text: 'This is Share Text',
 *   scene: this.qq.Scene.QQ,
 * };
 *
 * this.qq.ssoLogin(clientOptions)
 *    .then(result => {
 *       // Success
 *       console.log('token is ' + result.access_token);
 *       console.log('userid is ' + result.userid);
 *       console.log('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 *
 * this.qq.logout()
 *    .then(() => {
 *       console.log('logout success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * this.qq.checkClientInstalled(clientOptions)
 *    .then(() => {
 *       console.log('Installed');
 *    })
 *    .catch(() => {
 *       console.log('Not Installed');
 *    });
 *
 * this.qq.shareText(shareTextOptions)
 *    .then(() => {
 *       console.log('shareText success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * this.qq.shareImage(options)
 *    .then(() => {
 *       console.log('shareImage success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 * }
 *
 * this.qq.shareNews(options)
 *    .then(() => {
 *       console.log('shareNews success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 * }
 *
 * this.qq.shareAudio(options)
 *    .then(() => {
 *       console.log('shareAudio success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * ```
 *
 * @interfaces
 * QQShareOptions
 */
@Plugin({
  pluginName: 'QQSDK',
  plugin: 'cordova-plugin-qqsdk',
  pluginRef: 'QQSDK',
  repo: 'https://github.com/iVanPan/Cordova_QQ',
  platforms: ['Android', 'iOS'],
  install: 'ionic cordova plugin add cordova-plugin-qqsdk --variable QQ_APP_ID=YOUR_QQ_APPID',
  installVariables: ['QQ_APP_ID'],
})
@Injectable()
export class QQSDK extends IonicNativePlugin {

  /**
   * QQ Share Scene
   */
  Scene = {
    QQ: 0,
    QQZone: 1,
    Favorite: 2
  };
  /**
   *  client type:  QQ application or TIM application
   */
  ClientType = {
    QQ: 0,
    TIM: 1
  };

  /**
   * open QQ or TIM client perform ssoLogin
   * @param options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  ssoLogin(options: QQShareOptions): Promise<any> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  logout(): Promise<any> {
    return;
  }

  /**
   * Detect if the QQ application or TIM application is installed on the device.
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  checkClientInstalled(options: QQShareOptions): Promise<any> {
    return;
  }

  /**
   * shareText
   * @param options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  shareText(options: QQShareOptions): Promise<any> {
    return;
  }

  /**
   * shareImage
   * @param options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  shareImage(options: QQShareOptions): Promise<any> {
    return;
  }

  /**
   * shareNews
   * @param options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  shareNews(options: QQShareOptions): Promise<any> {
    return;
  }

  /**
   * shareAudio
   * @param options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  shareAudio(options: QQShareOptions): Promise<any> {
    return;
  }
}
