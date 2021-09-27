import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Sms Retriever
 * @description
 * This plugin retrives the SMS which arrive without requiring READ permissions.
 * @usage
 * ```typescript
 * import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever';
 *
 *
 * constructor(private smsRetriever: SmsRetriever) { }
 *
 * ...
 *
 *
 * this.smsRetriever.getAppHash()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * this.smsRetriever.startWatching()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SmsRetriever',
  plugin: 'cordova-plugin-sms-retriever-manager',
  pluginRef: 'cordova.plugins.smsRetriever',
  repo: 'https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master',
  install: 'ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION="15.0.1"',
  installVariables: ['PLAY_SERVICES_VERSION'],
  platforms: ['Android'],
})
@Injectable()
export class SmsRetriever extends AwesomeCordovaNativePlugin {
  /**
   * This function start wathching message arrive event and retrive message text.
   *
   * @returns {Promise<string>} Returns a promise that resolves when retrives SMS text or TIMEOUT after 5 min.
   */
  @Cordova()
  startWatching(): Promise<string> {
    return;
  }

  /**
   * This function is to get hash string of APP.
   *
   * @returns {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
   */
  @Cordova()
  getAppHash(): Promise<string> {
    return;
  }
}
