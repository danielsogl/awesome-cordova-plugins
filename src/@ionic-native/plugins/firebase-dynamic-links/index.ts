import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Firebase Dynamic Links
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
 *
 *
 * constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }
 *
 * ...
 *
 *
 * this.firebaseDynamicLinks.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseDynamicLinks',
  plugin: ' cordova-plugin-firebase-dynamiclinks',
  pluginRef: 'cordova.plugins.firebase.dynamiclinks',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks',
  install: 'ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"',
  installVariables: ['APP_DOMAIN', 'APP_PATH'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseDynamicLinks extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  functionName(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
