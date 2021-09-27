import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @see https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidrequest
 */
export class ASAuthorizationAppleIDRequest {
  static readonly ASAuthorizationScopeFullName = 0;
  static readonly ASAuthorizationScopeEmail = 1;

  requestedScopes?: number[];
}

/**
 * @see https://developer.apple.com/documentation/foundation/nspersonnamecomponents/1412193-phoneticrepresentation
 */
export interface NSPersonNameComponents {
  /**
   * The portion of a name’s full form of address that precedes the name itself (for example, "Dr.," "Mr.," "Ms.")
   */
  namePrefix?: string;

  /**
   * Name bestowed upon an individual to differentiate them from other members of a group that share a family name (for example, "Johnathan")
   */
  givenName?: string;

  /**
   * Secondary name bestowed upon an individual to differentiate them from others that have the same given name (for example, "Maple")
   */
  middleName?: string;

  /**
   * Name bestowed upon an individual to denote membership in a group or family. (for example, "Appleseed")
   */
  familyName?: string;

  /**
   * The portion of a name’s full form of address that follows the name itself (for example, "Esq.," "Jr.," "Ph.D.")
   */
  nameSuffix?: string;

  /**
   * Name substituted for the purposes of familiarity (for example, "Johnny")
   */
  nickname?: string;

  /**
   * The phonetic representation name components of the receiver
   */
  phoneticRepresentation?: NSPersonNameComponents;
}

/**
 * @see https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential
 */
export interface AppleSignInResponse {
  /**
   * The user’s email address i.e. abc@privaterelay.appleid.com
   */
  email?: string;

  /**
   * An arbitrary string that your app provided to the request that generated the credential
   */
  state?: string;

  /**
   * A JSON Web Token (JWT) that securely communicates information about the user to your app
   */
  identityToken: string;

  /**
   * A short-lived token used by your app for proof of authorization when interacting with the app's server counterpart
   */
  authorizationCode: string;

  /**
   * The user's name
   *
   * @see https://developer.apple.com/documentation/foundation/nspersonnamecomponents?language=objc
   */
  fullName?: NSPersonNameComponents;

  /**
   * An identifier associated with the authenticated user
   */
  user?: string;
}

/**
 * @see https://developer.apple.com/documentation/foundation/nserror
 */
export interface NSError {
  /**
   * The error code
   */
  code?: number;

  /**
   * A string containing the localized description of the error
   */
  localizedDescription?: string;

  /**
   * A string containing the localized explanation of the reason for the error
   */
  localizedFailureReason?: string;
}

export interface AppleSignInErrorResponse extends NSError {
  /**
   * The error i.e. "ASAUTHORIZATION_ERROR"
   */
  error?: string;
}

/**
 * @name Sign In With Apple
 * @description
 * Sign in with Apple makes it easy for users to sign in to your apps and websites using their Apple ID.
 * Instead of filling out forms, verifying email addresses, and choosing new passwords,
 * they can use Sign in with Apple to set up an account and start using your app right away.
 * All accounts are protected with two-factor authentication for superior security,
 * and Apple will not track users’ activity in your app or website.
 * Source:* https://developer.apple.com/sign-in-with-apple/
 * @usage
 * ```typescript
 * import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@awesome-cordova-plugins/sign-in-with-apple/ngx';
 *
 *
 * constructor(private signInWithApple: SignInWithApple) { }
 *
 * ...
 *
 *
 *   this.signInWithApple.signin({
 *     requestedScopes: [
 *       ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
 *       ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
 *     ]
 *   })
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
  platforms: ['iOS'],
})
@Injectable()
export class SignInWithApple extends AwesomeCordovaNativePlugin {
  /**
   * Starts the authorization flows named during controller initialization
   *
   * @see https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/3153047-performrequests
   * @returns {Promise<AppleSignInResponse>} Returns a promise when authorization succeeds
   * @param {ASAuthorizationAppleIDRequest} options
   * @throws AppleSignInErrorResponse
   */
  @Cordova()
  signin(options: ASAuthorizationAppleIDRequest = {}): Promise<AppleSignInResponse> {
    return;
  }
}
