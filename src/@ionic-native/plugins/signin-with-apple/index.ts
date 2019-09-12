import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface SigninWithAppleAuthParams {
  /**
   * Scopes(fullName,email)
   */
  scopes: string;
}

export interface SigninWithAppleCredential {
  /**
   * userIdentifier
   */
  userIdentifier: string;

  /**
   * email
   */
  email?: string;

  /**
   * givenName
   */
  givenName?: string;

  /**
   * familyName
   */
  familyName?: string;
}

/**
 * @name Signin With Apple
 * @description
 * The function logs in and verifies.
 *
 * @usage
 * ```typescript
 * import { SigninWithApple } from '@ionic-native/signin-with-apple';
 *
 *
 * constructor(private signinWithApple: SigninWithApple) { }
 *
 * ...
 *
 *
 * this.signinWithApple.auth({ 'scopes': 'fullName,email' })
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SigninWithApple',
  plugin: 'cordova-signin-with-apple',
  pluginRef: 'signinWithApple',
  repo: 'https://github.com/nrikiji/cordova-signin-with-apple-plugin',
  install: 'ionic cordova plugin add cordova-signin-with-apple-plugin',
  installVariables: [],
  platforms: ['iOS']
})
@Injectable()
export class SigninWithApple extends IonicNativePlugin {

  /**
   * auth
   * @return {Promise<SigninWithAppleCredential>}
   */
  @Cordova()
  auth(param: SigninWithAppleAuthParams): Promise<SigninWithAppleCredential> {
    return;
  }

  /**
   * validCredential
   * @return {Promise<any>}
   */
  @Cordova()
  validCredential(): Promise<void> {
    return;
  }
}
