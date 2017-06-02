import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Firebase Hooks
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FirebaseHooks } from '@ionic-native/firebase-hooks';
 *
 *
 * constructor(private firebaseHooks: FirebaseHooks) { }
 *
 * ...
 *
 *
 * this.firebaseHooks.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseHooks',
  plugin: 'https://github.com/chemerisuk/cordova-plugin-firebase-hooks.git',
  pluginRef: '*-Info.plist',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-hooks',
  platforms: ['Android']
})
@Injectable()
export class FirebaseHooks extends IonicNativePlugin {

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
