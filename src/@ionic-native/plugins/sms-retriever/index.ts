import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Sms Retriever
 * @description
 * This plugin retrives the SMS which arrive without requiring READ permissions.
 *
 * @usage
 * ```typescript
 * import { SmsRetriever } from '@ionic-native/sms-retriever';
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
  plugin: 'cordova-plugin-sms-retriever-manager', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.smsRetriever', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION="15.0.1"',
  installVariables: ['PLAY_SERVICES_VERSION'],
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class SmsRetriever extends IonicNativePlugin {
 /**
  * This function start wathching message arrive event and retrive message text.
  * @return {Promise<string>} Returns a promise that resolves when retrives SMS text or TIMEOUT after 5 min.
  */
  @Cordova()
  startWatching(): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
 /**
  * This function is to get hash string of APP.
  * @return {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
  */
  @Cordova()
  getAppHash(): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
