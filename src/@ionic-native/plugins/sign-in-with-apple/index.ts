import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface AppleSignInResponse {
  /**
   * E-Mail address i.e. abc@privaterelay.appleid.com
   */
  email?: string;

  /**
   * The state (could be empty)
   */
  state?: string;

  /**
   * The identity token
   */
  identityToken: string;

  /**
   * Name details of the user
   */
  fullName?: {
    /**
     * The nickname of the user (could be empty)
     */
    nickname?: string;

    /**
     * The phonetic representation of the user (could be an empty object)
     */
    phoneticRepresentation?: {};

    /**
     * The family name of the user (i.e. Doe)
     */
    familyName?: string;

    /**
     * The name prefix of the user (could be an empty object)
     */
    namePrefix?: string;

    /**
     * The given name of the user (i.e. John)
     */
    givenName?: string;

    /**
     * The name suffix of the user (could be an empty object)
     */
    nameSuffix?: string;
  };

  /**
   * The user i.e. 001234.1a11b111c1111d111111e111111f1111.1234
   */
  user?: string;
}

export interface AppleSignInErrorResponse {
  /**
   * Error code i.e. 1000
   */
  code?: number;

  /**
   * The localized failure reason, could be empty
   */
  localizedFailureReason?: string;

  /**
   * The error i.e. "ASAUTHORIZATION_ERROR"
   */
  error?: string;

  /**
   * The localized description of the error
   */
  localizedDescription?: string;
}

/**
 * @name Sign In With Apple
 * @description
 * Sign in with Apple makes it easy for users to sign in to your apps and websites using their Apple ID.
 * Instead of filling out forms, verifying email addresses, and choosing new passwords,
 * they can use Sign in with Apple to set up an account and start using your app right away.
 * All accounts are protected with two-factor authentication for superior security,
 * and Apple will not track users’ activity in your app or website.
 * *Source:* https://developer.apple.com/sign-in-with-apple/
 *
 * @usage
 * ```typescript
 * import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse } from '@ionic-native/sign-in-with-apple/ngx';
 *
 *
 * constructor(private signInWithApple: SignInWithApple) { }
 *
 * ...
 *
 *
 * this.signInWithApple.signin()
 *   .then((res: AppleSignInResponse) => {
 *     // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
 *     alert('Send token to apple for verification: ' + res.identityToken);
 *     console.log(res);
 *   })
 *   .catch((error: AppleSignInErrorResponse) => {
 *     alert(error.code + ' ' + error.localizedDescription);
 *     console.error(error);
 *   });
 *
 * ```
 */
@Plugin({
  pluginName: 'Sign in with Apple',
  plugin: 'cordova-plugin-sign-in-with-apple',
  pluginRef: 'cordova.plugins.SignInWithApple',
  repo: 'https://github.com/twogate/cordova-plugin-sign-in-with-apple',
  platforms: ['iOS']
})
@Injectable()
export class SignInWithApple extends IonicNativePlugin {

  /**
   * Starts the authorization flows named during controller initialization
   * @see https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/3153047-performrequests
   * @return {Promise<AppleSignInResponse>} Returns a promise when authorization succeeds
   * @param arg0
   * @throws AppleSignInErrorResponse
   */
  @Cordova()
  signin(arg0: object = null): Promise<AppleSignInResponse> {
    return;
  }

}
