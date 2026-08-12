import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface FirebaseUserProviderInfo {
  providerId?: string;
  uid?: string;
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  photoUrl?: string;
}

export interface FirebaseUser {
  name?: string;
  email?: string;
  emailIsVerified?: boolean;
  phoneNumber?: string;
  photoUrl?: string;
  uid?: string;
  isAnonymous?: boolean;
  idToken?: string;
  providerId?: string;
  creationTimestamp?: number;
  lastSignInTimestamp?: number;
  providers?: FirebaseUserProviderInfo[];
}

export interface FirebaseCredential {
  /**
   * Native credential key, returned by the authenticate* methods.
   */
  id?: string;

  /**
   * Verification session ID, returned by verifyPhoneNumber() when an SMS was sent.
   */
  verificationId?: string;

  /**
   * The SMS verification code entered by the user.
   */
  code?: string;

  /**
   * Whether phone verification completed instantly without an SMS (Android only).
   */
  instantVerification?: boolean;

  idToken?: string;
  rawNonce?: string;
  givenName?: string;
  familyName?: string;
}

export interface VerifyPhoneNumberOptions {
  /**
   * Timeout in seconds for auto-retrieval. Android only, default 30.
   */
  timeOutDuration?: number;

  /**
   * A fake verification code for testing. Android only.
   */
  fakeVerificationCode?: string;

  /**
   * If true, forces SMS verification even if instant verification is available. Android only.
   */
  requireSmsValidation?: boolean;
}

export interface EnrollSecondAuthFactorOptions {
  /**
   * A display name for this factor. Auto-generated (masking all but the last 4 digits of the
   * phone number) if not provided.
   */
  displayName?: string;
}

export interface VerifySecondAuthFactorParams {
  /**
   * Index of the enrolled factor to verify (for an MFA challenge).
   */
  selectedIndex?: number;

  /**
   * The verification ID from phone verification.
   */
  verificationId?: string;

  /**
   * The SMS verification code entered by the user.
   */
  code?: string;
}

export interface EnrolledSecondAuthFactor {
  index?: number;
  phoneNumber?: string;
  displayName?: string;
}

export interface AuthenticateUserWithGoogleOptions {
  /**
   * If true, signs in immediately; if false (default), returns a credential for later use
   * with signInWithCredential().
   */
  signIn?: boolean;
}

export interface UpdateUserProfileOptions {
  /**
   * The new display name.
   */
  name?: string;

  /**
   * The new photo URL.
   */
  photoUri?: string;
}

/**
 * @name FirebasexAuth
 * @description
 * Cordova plugin for Firebase Authentication - part of the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexAuth } from '@awesome-cordova-plugins/firebasex-auth/ngx';
 *
 * constructor(private firebasexAuth: FirebasexAuth) { }
 *
 * ...
 *
 * this.firebasexAuth.signInUserWithEmailAndPassword('user@example.com', 'password123')
 *   .then(() => console.log('Signed in'));
 * ```
 */
@Plugin({
  pluginName: 'FirebasexAuth',
  plugin: 'cordova-plugin-firebasex-auth',
  pluginRef: 'FirebasexAuth',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-auth',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexAuth extends AwesomeCordovaNativePlugin {
  /**
   * Starts phone number verification for phone-based authentication.
   * On Android, may result in instant verification without requiring an SMS code.
   *
   * @param {string} phoneNumber - the phone number to verify, in E.164 format
   * @param {VerifyPhoneNumberOptions} [opts]
   * @returns {Promise<FirebaseCredential>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  verifyPhoneNumber(phoneNumber: string, opts?: VerifyPhoneNumberOptions): Promise<FirebaseCredential> {
    return;
  }

  /**
   * Enrolls a phone number as a second authentication factor (MFA) for the current user.
   *
   * @param {string} phoneNumber - the phone number to enroll, in E.164 format
   * @param {EnrollSecondAuthFactorOptions} [opts]
   * @returns {Promise<any>} contains verificationId for SMS code entry
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  enrollSecondAuthFactor(phoneNumber: string, opts?: EnrollSecondAuthFactorOptions): Promise<any> {
    return;
  }

  /**
   * Verifies a second authentication factor during an MFA sign-in challenge or enrollment.
   *
   * @param {VerifySecondAuthFactorParams} params
   * @param {object} [opts] - additional options (reserved for future use)
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  verifySecondAuthFactor(params: VerifySecondAuthFactorParams, opts?: object): Promise<any> {
    return;
  }

  /**
   * Lists the second authentication factors enrolled for the current user.
   *
   * @returns {Promise<EnrolledSecondAuthFactor[]>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  listEnrolledSecondAuthFactors(): Promise<EnrolledSecondAuthFactor[]> {
    return;
  }

  /**
   * Removes an enrolled second authentication factor from the current user.
   *
   * @param {number} selectedIndex - the index of the enrolled factor to remove
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  unenrollSecondAuthFactor(selectedIndex: number): Promise<any> {
    return;
  }

  /**
   * Sets the language code for Firebase Auth operations (e.g. SMS verification messages).
   *
   * @param {string} lang - the language code (e.g. "en", "fr", "de")
   * @returns {Promise<any>}
   */
  @Cordova()
  setLanguageCode(lang: string): Promise<any> {
    return;
  }

  /**
   * Creates a new user account with the given email address and password.
   *
   * @param {string} email
   * @param {string} password
   * @returns {Promise<any>}
   */
  @Cordova()
  createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return;
  }

  /**
   * Signs in a user with the given email address and password.
   *
   * @param {string} email
   * @param {string} password
   * @returns {Promise<any>}
   */
  @Cordova()
  signInUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return;
  }

  /**
   * Returns a credential for the given email address and password, for use with signInWithCredential().
   *
   * @param {string} email
   * @param {string} password
   * @returns {Promise<FirebaseCredential>}
   */
  @Cordova()
  authenticateUserWithEmailAndPassword(email: string, password: string): Promise<FirebaseCredential> {
    return;
  }

  /**
   * Signs in a user with a custom token minted by your own backend using the Firebase Admin SDK.
   *
   * @param {string} customToken
   * @returns {Promise<any>}
   */
  @Cordova()
  signInUserWithCustomToken(customToken: string): Promise<any> {
    return;
  }

  /**
   * Signs in a user anonymously.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  signInUserAnonymously(): Promise<any> {
    return;
  }

  /**
   * Authenticates the user with Google Sign-In.
   *
   * @param {string} clientId - the Google OAuth client ID (web client ID on Android, iOS client ID on iOS)
   * @param {AuthenticateUserWithGoogleOptions} [options]
   * @returns {Promise<FirebaseCredential>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  authenticateUserWithGoogle(
    clientId: string,
    options?: AuthenticateUserWithGoogleOptions
  ): Promise<FirebaseCredential> {
    return;
  }

  /**
   * Authenticates the user with Apple Sign-In. Returns a credential for use with signInWithCredential().
   *
   * @param {string} [locale] - optional locale to pass to the Apple sign-in provider
   * @returns {Promise<FirebaseCredential>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  authenticateUserWithApple(locale?: string): Promise<FirebaseCredential> {
    return;
  }

  /**
   * Authenticates the user with Microsoft Sign-In. Returns a credential for use with signInWithCredential().
   *
   * @param {string} [locale] - optional locale to pass to the Microsoft sign-in provider
   * @returns {Promise<FirebaseCredential>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  authenticateUserWithMicrosoft(locale?: string): Promise<FirebaseCredential> {
    return;
  }

  /**
   * Authenticates the user with Facebook using an access token obtained from the Facebook SDK.
   * Returns a credential for use with signInWithCredential().
   *
   * @param {string} accessToken - a Facebook access token obtained via the Facebook Login SDK
   * @returns {Promise<FirebaseCredential>}
   */
  @Cordova()
  authenticateUserWithFacebook(accessToken: string): Promise<FirebaseCredential> {
    return;
  }

  /**
   * Authenticates the user with a generic OAuth provider. Returns a credential for use with
   * signInWithCredential().
   *
   * @param {string} providerId - the OAuth provider ID (e.g. "github.com", "twitter.com", "yahoo.com")
   * @param {object} [customParameters] - custom OAuth parameters to send to the provider
   * @param {string[]} [scopes] - OAuth scopes to request from the provider
   * @returns {Promise<FirebaseCredential>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  authenticateUserWithOAuth(
    providerId: string,
    customParameters?: object,
    scopes?: string[]
  ): Promise<FirebaseCredential> {
    return;
  }

  /**
   * Signs in the user using a previously obtained credential.
   *
   * @param {FirebaseCredential} credential
   * @returns {Promise<any>}
   */
  @Cordova()
  signInWithCredential(credential: FirebaseCredential): Promise<any> {
    return;
  }

  /**
   * Links the current user account to a previously obtained credential.
   *
   * @param {FirebaseCredential} credential
   * @returns {Promise<any>}
   */
  @Cordova()
  linkUserWithCredential(credential: FirebaseCredential): Promise<any> {
    return;
  }

  /**
   * Reauthenticates the currently signed-in user with a previously obtained credential.
   *
   * @param {FirebaseCredential} credential
   * @returns {Promise<any>}
   */
  @Cordova()
  reauthenticateWithCredential(credential: FirebaseCredential): Promise<any> {
    return;
  }

  /**
   * Unlinks the current user account from the given auth provider.
   *
   * @param {string} providerId
   * @returns {Promise<any>}
   */
  @Cordova()
  unlinkUserWithProvider(providerId: string): Promise<any> {
    return;
  }

  /**
   * Checks whether a user is currently signed in.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isUserSignedIn(): Promise<boolean> {
    return;
  }

  /**
   * Signs out the currently authenticated user.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  signOutUser(): Promise<any> {
    return;
  }

  /**
   * Gets the profile information for the currently signed-in user.
   *
   * @returns {Promise<FirebaseUser>}
   */
  @Cordova()
  getCurrentUser(): Promise<FirebaseUser> {
    return;
  }

  /**
   * Reloads the current user's profile from the server to get the latest data.
   *
   * @returns {Promise<FirebaseUser>}
   */
  @Cordova()
  reloadCurrentUser(): Promise<FirebaseUser> {
    return;
  }

  /**
   * Updates the current user's display name and/or photo URL.
   *
   * @param {UpdateUserProfileOptions} profile
   * @returns {Promise<any>}
   */
  @Cordova()
  updateUserProfile(profile: UpdateUserProfileOptions): Promise<any> {
    return;
  }

  /**
   * Updates the current user's email address.
   *
   * @param {string} email
   * @returns {Promise<any>}
   */
  @Cordova()
  updateUserEmail(email: string): Promise<any> {
    return;
  }

  /**
   * Sends a verification email to the currently signed-in user.
   *
   * @param {object} [actionCodeSettings]
   * @returns {Promise<any>}
   */
  @Cordova()
  sendUserEmailVerification(actionCodeSettings?: object): Promise<any> {
    return;
  }

  /**
   * Sends a verification email to a new address, and only updates the user's email once verified.
   *
   * @param {string} email
   * @returns {Promise<any>}
   */
  @Cordova()
  verifyBeforeUpdateEmail(email: string): Promise<any> {
    return;
  }

  /**
   * Updates/overwrites the password of the currently signed-in user.
   *
   * @param {string} password
   * @returns {Promise<any>}
   */
  @Cordova()
  updateUserPassword(password: string): Promise<any> {
    return;
  }

  /**
   * Sends a password reset email to the given email address.
   *
   * @param {string} email
   * @returns {Promise<any>}
   */
  @Cordova()
  sendUserPasswordResetEmail(email: string): Promise<any> {
    return;
  }

  /**
   * Deletes the account of the currently signed-in user.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteUser(): Promise<any> {
    return;
  }

  /**
   * Registers a callback that fires whenever the user's sign-in state changes.
   * Only one listener can be active at a time; calling this again replaces the previous listener.
   *
   * @param {Function} fn - callback function which receives a boolean indicating whether a user is signed in
   */
  @Cordova({
    sync: true,
  })
  registerAuthStateChangeListener(fn: (userSignedIn: boolean) => void): void {
    return;
  }

  /**
   * Registers a callback that fires whenever the user's ID token changes, including sign-in,
   * sign-out and token refresh events.
   * Only one listener can be active at a time; calling this again replaces the previous listener.
   *
   * @param {Function} fn - callback function which receives a boolean indicating whether a user is signed in
   */
  @Cordova({
    sync: true,
  })
  registerAuthIdTokenChangeListener(fn: (userSignedIn: boolean) => void): void {
    return;
  }

  /**
   * Configures Firebase Auth to connect to a local Auth emulator for testing.
   * Must be called before any other auth operations.
   *
   * @param {string} host - the emulator host (e.g. "localhost", or "10.0.2.2" for the Android emulator)
   * @param {number} port - the emulator port (e.g. 9099)
   * @returns {Promise<any>}
   */
  @Cordova()
  useAuthEmulator(host: string, port: number): Promise<any> {
    return;
  }

  /**
   * Retrieves the custom claims from the current user's ID token.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getClaims(): Promise<any> {
    return;
  }
}
