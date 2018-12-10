import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

declare const baiduPush: any;

export interface RegistrationData {
  /**
   * The corresponding Baidu SDK method called.
   */
  type: string;
  /**
   * Registration data revelvant to subsequent actions.
   */
  data: {
    appId: string,
    userId: string,
    channelId: string
  };
}

/**
 * @name Baidu Push
 * @description
 * This plugin faciliates the use of Baidu Push notifications.
 *
 * @usage
 * ```typescript
 * import { BaiduPush } from '@ionic-native/baidu-push';
 *
 *
 * constructor(private baiduPush: BaiduPush) { }
 *
 * ...
 *
 * this.baiduPush.startWork('xxxxxx')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * RegistrationData
 */
@Plugin({
  pluginName: 'BaiduPush',
  plugin: 'cordova-plugin-push-baidu',
  pluginRef: 'baiduPush',
  repo: 'https://github.com/Ti-webdev/cordova-plugin-push-baidu.git',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class BaiduPush extends IonicNativePlugin {

  /**
   * This method registers the device to Baidu Cloud Push services.
   * @param {string} apiKey Baidu Cloud Push API key.
   * @return {Promise<RegistrationData>} Returns a Promise that resolves with RegistrationData.
   */
  @Cordova()
  startWork(apiKey: string): Promise<RegistrationData> {
    console.log(apiKey);
    return;
  }

}
