import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Firebase Remote Config
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FirebaseRemoteConfig } from '@ionic-native/firebase-remote-config';
 *
 *
 * constructor(private firebaseRemoteConfig: FirebaseRemoteConfig) { }
 *
 * ...
 *
 *
 * this.firebaseRemoteConfig.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseRemoteConfig',
  plugin: 'https://github.com/chemerisuk/cordova-plugin-firebase-remoteconfig.git',
  pluginRef: 'cordova.plugins.firebase.remoteconfig',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-remoteconfig',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseRemoteConfig extends IonicNativePlugin {

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
