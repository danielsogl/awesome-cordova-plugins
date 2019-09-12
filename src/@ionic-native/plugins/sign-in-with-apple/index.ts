import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name SignInWithApple
 * @description
 * This plugin provides Sign in With Apple native feature
 *
 * @usage
 * ```typescript
 * import { SignInWithApple } from '@ionic-native/sign-in-with-apple';
 *
 *
 * constructor(private signInWithApple: SignInWithApple) { }
 *
 * ...
 *
 *
 * this.signInWithApple.signin({})
 *   .then((res: any) => console.log(res)) // contains token, user's name, email, etc.
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SignInWithApple',
  repo: 'https://github.com/twogate/cordova-plugin-sign-in-with-apple/blob/master/plugin.xml',
  plugin: 'cordova-plugin-sign-in-with-apple',
  pluginRef: 'cordova.plugins.SignInWithApple',
  platforms: ['iOS'],
})
@Injectable()
export class SignInWithApple extends IonicNativePlugin {
  /**
   * Show iOS's Sign in with Apple screen
   * @param opts {any} Sign in with Apple options
   * @return {Promise<any>} Returns a promise that resolves when complete Sign in with Apple
   */
  @Cordova()
  signin(opts?: any): Promise<any> {
    return;
  }
}
