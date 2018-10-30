import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaProperty, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';

import { Observable } from 'rxjs/Observable';

/**
 * @name Firebase Authentication
 * @description
 * Cordova plugin for Firebase Authentication
 *
 * @usage
 * ```typescript
 * import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
 *
 *
 * constructor(private firebaseAuthentication: FirebaseAuthentication) { }
 *
 * ...
 *
 *
 * this.firebaseAuthentication.createUserWithEmailAndPassword('johndoe@gmail.com', '123')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseAuthentication',
  plugin: 'cordova-plugin-firebase-authentication',
  pluginRef: 'cordova.plugins.firebase.auth',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-authentication',
  install: 'ionic cordova plugin add cordova-plugin-firebase-authentication --variable FIREBASE_AUTH_VERSION=version',
  installVariables: ['FIREBASE_AUTH_VERSION'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseAuthentication extends IonicNativePlugin {

  /**
   * Returns a JWT token used to identify the user to a Firebase service.
   * @param forceRefresh {boolean} Force Refresh
   * @return {Promise<any>} Returns the id token
   */
  @Cordova({ sync: true })
  getIdToken(forceRefresh: boolean): Promise<any> {
    return;
  }

  /**
   * Tries to create a new user account with the given email address and password.
   * @param email {string} Email
   * @param password {string} Password
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return;
  }

  /**
   * Initiates email verification for the current user.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  sendEmailVerification(): Promise<any> {
    return;
  }

  /**
   * Triggers the Firebase Authentication backend to send a password-reset email to the given email address, which must correspond to an existing user of your app.
   * @param email {string} Email
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  sendPasswordResetEmail(email: string): Promise<any> {
    return;
  }

  /**
   * Asynchronously signs in using an email and password.
   * @param email {string} Email
   * @param password {string} Password
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return;
  }

  /**
   * Starts the phone number verification process for the given phone number.
   * NOTE: Android supports auto-verify and instant device verification. Therefore in that cases it doesn't make sense to ask for sms code. It's recommended to register onAuthStateChanged callback to be notified on auto sign-in.
   * timeout [milliseconds] is the maximum amount of time you are willing to wait for SMS auto-retrieval to be completed by the library. Maximum allowed value is 2 minutes. Use 0 to disable SMS-auto-retrieval. If you specify a positive value less than 30 seconds, library will default to 30 seconds.
   * @param phoneNumber {string} Phone number
   * @param timeout {number} Timeout
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  verifyPhoneNumber(phoneNumber: string, timeout: number): Promise<any> {
    return;
  }

  /**
   * Asynchronously signs in using verificationId and 6-digit SMS code.
   * @param verificationId {string} Verification ID
   * @param smsCode {string} SMS code
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  signInWithVerificationId(verificationId: string, smsCode: number): Promise<any> {
    return;
  }

  /**
   * Create and use temporary anonymous account to authenticate with Firebase.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  signInAnonymously(): Promise<any> {
    return;
  }

  /**
   * Uses Google's idToken and accessToken to sign-in into firebase account. In order to retriave those tokens follow instructions for Android and iOS
   * @param idToken {string} ID Token
   * @param accessToken {string} Access Token
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  signInWithGoogle(idToken: string, accessToken: string): Promise<any> {
    return;
  }

  /**
   * Uses Facebook's accessToken to sign-in into firebase account. In order to retriave those tokens follow instructions for Android and iOS.
   * @param accessToken {string} Access Token
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  signInWithFacebook(accessToken: string): Promise<any> {
    return;
  }

  /**
   * Uses Twitter's token and secret to sign-in into firebase account. In order to retriave those tokens follow instructions for Android and iOS.
   * @param token {string} Token
   * @param secret {string} Secret
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  signInWithTwitter(token: string, secret: string): Promise<any> {
    return;
  }

  /**
   * Registers a block as an auth state did change listener. To be invoked when:
   *    - The block is registered as a listener,
   *    - A user with a different UID from the current user has signed in, or
   *    - The current user has signed out.
   * @return {Promise<any>} Returns an observable that contains the auth state
   */
  @Cordova({ observable: true, callbackOrder: 'reverse' })
  onAuthStateChanged(): Observable<any> {
    return;
  }

  /**
   * Set's the current user language code. The string used to set this property must be a language code that follows BCP 47.
   * @param languageCode {string} Language Code
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  setLanguageCode(languageCode: string): Promise<any> {
    return;
  }

  /**
   * Sets languageCode to the app’s current language.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  useAppLanguage(): Promise<any> {
    return;
  }

  /**
   * Signs out the current user and clears it from the disk cache.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({ sync: true })
  signOut(): Promise<any> {
    return;
  }

}
