import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface IChannelOptions {
  /**
   * Channel ID - must be unique per app package
   */
  id: string;

  /**
   * Channel name. Default: empty string
   */
  name?: string;

  /**
   * Channel description. Default: empty string
   */
  description?: string;

  /**
   * The sound to play once a push comes. Default value: 'default'
   * Values allowed:
   * 'default' - plays the default notification sound
   * 'ringtone' - plays the currently set ringtone
   * 'false' - silent; don't play any sound
   * filename - the filename of the sound file located in '/res/raw' without file extension (mysound.mp3 -> mysound)
   */
  sound?: string;

  /**
   * Vibrate on new notification. Default value: true
   * Possible values:
   * Boolean - vibrate or not
   * Array - vibration pattern - e.g. [500, 200, 500] - milliseconds vibrate, milliseconds pause, vibrate, pause, etc.
   */
  vibration?: boolean | number[];

  /**
   * Whether to blink the LED
   */
  light?: boolean;

  /**
   * LED color in ARGB format - this example BLUE color. If set to -1, light color will be default. Default value: -1.
   */
  lightColor?: string;

  /**
   * Importance - integer from 0 to 4. Default value: 4
   * 0 - none - no sound, does not show in the shade
   * 1 - min - no sound, only shows in the shade, below the fold
   * 2 - low - no sound, shows in the shade, and potentially in the status bar
   * 3 - default - shows everywhere, makes noise, but does not visually intrude
   * 4 - high - shows everywhere, makes noise and peeks
   */
  importance?: 0 | 1 | 2 | 3 | 4;

  /**
   * Show badge over app icon when non handled pushes are present. Default value: true
   */
  badge?: boolean;

  /**
   * Show message on locked screen. Default value: 1
   * Possible values (default 1):
   * -1 - secret - Do not reveal any part of the notification on a secure lockscreen.
   * 0 - private - Show the notification on all lockscreens, but conceal sensitive or private information on secure lockscreens.
   * 1 - public - Show the notification in its entirety on all lockscreens.
   */
  visibility?: -1 | 0 | 1;
}

export interface FirebaseUser {
  /**
   * ID token
   */
  idToken?: string;

  /**
   * Provider ID
   */
  providerId?: string;

  /**
   * UID
   */
  uid?: string;

  /**
   * photo url
   */
  photoUrl?: string;

  /**
   * phone number
   */
  phoneNumber?: string;

  /**
   * is email verified
   */
  emailIsVerified?: boolean;

  /**
   * email
   */
  email?: string;

  /**
   * name
   */
  name?: string;
}

/**
 * @name Firebase X
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported.
 * It is a maintained fork from unmaintained ionic-navite plugin called Firebase.
 * @usage
 * ```typescript
 * import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
 *
 *
 * constructor(private firebaseX: FirebaseX) { }
 *
 * ...
 *
 *
 * this.firebaseX.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebaseX.onMessageReceived()
 *   .subscribe(data => console.log(`User opened a notification ${data}`));
 *
 * this.firebaseX.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 * ```
 * @interfaces
 * IChannelOptions
 */
@Plugin({
  pluginName: 'FirebaseX',
  plugin: 'cordova-plugin-firebasex',
  pluginRef: 'FirebasePlugin',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseX extends AwesomeCordovaNativePlugin {
  /**
   * Get the current FCM token.
   *
   * @returns {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  @Cordova()
  getToken(): Promise<null | string> {
    return;
  }

  /**
   * Get the app instance ID (an constant ID which persists as long as the app is not uninstalled/reinstalled)
   *
   * @returns {Promise<null | string>} Note that ID will be null if it has not been established yet
   */
  @Cordova()
  getId(): Promise<null | string> {
    return;
  }

  /**
   * Get the current FCM user.
   *
   * @returns {Promise<FirebaseUser | string>}
   */
  @Cordova()
  getCurrentUser(): Promise<FirebaseUser | string> {
    return;
  }

  /**
   * Reload the current FCM user.
   *
   * @returns {Promise<FirebaseUser | string>}
   */
  @Cordova()
  reloadCurrentUser(): Promise<FirebaseUser | string> {
    return;
  }

  /**
   * Get notified when a token is refreshed.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  onTokenRefresh(): Observable<any> {
    return;
  }

  /**
   * iOS only.
   * Get the APNS token allocated for this app install.
   *
   * @returns {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  @Cordova()
  getAPNSToken(): Promise<null | string> {
    return;
  }

  /**
   * iOS only.
   * Registers a handler to call when the APNS token is allocated.
   * This will be called once when remote notifications permission has been granted by the user at runtime.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  onApnsTokenReceived(): Observable<any> {
    return;
  }

  /**
   * Registers a callback function to invoke when:
   * - a notification or data message is received by the app
   * - a system notification is tapped by the user
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  onMessageReceived(): Observable<any> {
    return;
  }

  /**
   * Grant permission to receive push notifications (will trigger prompt) and return hasPermission: true. iOS only (Android will always return true).
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  grantPermission(): Promise<any> {
    return;
  }

  /**
   * Check permission to receive push notifications and return hasPermission: true. iOS only (Android will always return true).
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasPermission(): Promise<boolean> {
    return;
  }

  /**
   * Unregister from firebase, used to stop receiving push notifications. Call this when you logout user from your app.
   */
  @Cordova()
  unregister(): Promise<any> {
    return;
  }

  /**
   * Set a number on the icon badge. Set 0 to clear the badge
   *
   * @param {number} badgeNumber
   * @returns {Promise<any>}
   */
  @Cordova()
  setBadgeNumber(badgeNumber: number): Promise<any> {
    return;
  }

  /**
   * Get icon badge number.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getBadgeNumber(): Promise<any> {
    return;
  }

  /**
   * Clear all pending notifications from the drawer.
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  clearAllNotifications(): Promise<any> {
    return;
  }

  /**
   * Subscribe to a topic. Topic messaging allows you to send a message to multiple devices that have opted in to a particular topic.
   *
   * @param {string} topic
   * @returns {Promise<any>}
   */
  @Cordova()
  subscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribe from a topic. This will stop you receiving messages for that topic.
   *
   * @param {string} topic
   * @returns {Promise<any>}
   */
  @Cordova()
  unsubscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Indicates whether autoinit is currently enabled. If so, new FCM tokens will be automatically generated.
   */
  @Cordova()
  isAutoInitEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Sets whether to autoinit new FCM tokens. By default, a new token will be generated as soon as the old one is removed.
   * To prevent a new token being generated, by sure to disable autoinit using setAutoInitEnabled() before calling unregister().
   *
   * @param enabled
   */
  @Cordova()
  setAutoInitEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Creates a custom channel to be used by notification messages which have the channel property set in the message payload to the id of the created channel:
   * - for background (system) notifications: android.notification.channel_id
   * - for foreground/data notifications: data.notification_android_channel_id
   *
   * Calling on Android 7 or below or another platform will have no effect.
   *
   * @param {IChannelOptions} channelOptions
   * @returns {Promise<any>}
   */
  @Cordova()
  createChannel(channelOptions: IChannelOptions): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Overrides the properties for the default channel.
   * The default channel is used if no other channel exists or is specified in the notification.
   * Any options not specified will not be overridden. Should be called as soon as possible (on app start) so default notifications will work as expected.
   * Calling on Android 7 or below or another platform will have no effect.
   *
   * @param {IChannelOptions} channelOptions
   * @returns {Promise<any>}
   */
  @Cordova()
  setDefaultChannel(channelOptions: IChannelOptions): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Removes a previously defined channel.
   * Calling on Android 7 or below or another platform will have no effect.
   *
   * @param {string} channelID
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteChannel(channelID: string): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Gets a list of all channels.
   * Calling on Android 7 or below or another platform will have no effect.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  listChannels(): Promise<any> {
    return;
  }

  /**
   * Enable/disable analytics collection (useful for GDPR/privacy settings).
   *
   * @param {boolean} enabled
   * @returns {Promise<any>}
   */
  @Cordova()
  setAnalyticsCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Enable/disable Crashlytics collection.
   *
   * @param {boolean} enabled
   * @returns {Promise<any>}
   */
  @Cordova()
  setCrashlyticsCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Enable/disable performance collection.
   *
   * @param {boolean} enabled
   * @returns {Promise<any>}
   */
  @Cordova()
  setPerformanceCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Log an event using Analytics
   *
   * @param {string} type
   * @param {Object} data
   * @returns {Promise<any>}
   */
  @Cordova()
  logEvent(type: string, data: any): Promise<any> {
    return;
  }

  /**
   * Set the name of the current screen in Analytics
   *
   * @param {string} name Screen name
   * @returns {Promise<any>}
   */
  @Cordova()
  setScreenName(name: string): Promise<any> {
    return;
  }

  /**
   * Set a user id for use in Analytics
   *
   * @param {string} userId
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserId(userId: string): Promise<any> {
    return;
  }

  /**
   * Set a user property for use in Analytics
   *
   * @param {string} name
   * @param {string} value
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserProperty(name: string, value: string): Promise<any> {
    return;
  }

  /**
   * Set Crashlytics user identifier.
   * To diagnose an issue, it’s often helpful to know which of your users experienced a given crash.
   * Crashlytics includes a way to anonymously identify users in your crash reports.
   * To add user IDs to your reports, assign each user a unique identifier in the form of an ID number, token, or hashed value.
   *
   * More info https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
   *
   * @param {string} userId
   * @returns {Promise<any>}
   */
  @Cordova()
  setCrashlyticsUserId(userId: string): Promise<any> {
    return;
  }

  /**
   * Simulates (causes) a fatal native crash which causes a crash event to be sent to Crashlytics (useful for testing).
   * See the Firebase documentation regarding crash testing.
   * Crashes will appear under Event type = "Crashes" in the Crashlytics console.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  sendCrash(): Promise<any> {
    return;
  }

  /**
   * Sends a crash-related log message that will appear in the Logs section of the next native crash event.
   * Note: if you don't then crash, the message won't be sent! Also logs the message to the native device console.
   *
   * @param {string} message
   * @returns {Promise<any>}
   */
  @Cordova()
  logMessage(message: string): Promise<any> {
    return;
  }

  /**
   * Sends a non-fatal error event to Crashlytics. In a Cordova app, you may use this to log unhandled Javascript exceptions, for example.
   * The event will appear under Event type = "Non-fatals" in the Crashlytics console.
   * The error message will appear in the Logs section of the non-fatal error event.
   * Also logs the error message to the native device console.
   *
   * @param {string} error
   * @param {object} (optional) a stack trace generated by stacktrace.js
   * @param stackTrace
   * @returns {Promise<any>}
   */
  @Cordova()
  logError(error: string, stackTrace?: object): Promise<any> {
    return;
  }

  /**
   * Requests verification of a phone number in order to authenticate a user and sign then into Firebase in your app.
   *
   * NOTE: This will only work on physical devices with a SIM card (not iOS Simulator or Android Emulator)
   *
   * In response to your request, you'll receive a verification ID which you can use in conjunction with the verification code
   * to sign the user in.
   *
   * On iOS and some Android devices, the user will receive and SMS containing the verification code which they must manually enter
   * into your app.
   *
   * Some Android devices support "instant verfication", in which case an SMS will not be send and you will be returned
   * the verification code along with the verification ID. In this case, the user doesn't need to do anything in order for you
   * to sign them in.
   *
   * @param {string} phoneNumber - phone number to verify
   * @param {integer} timeOutDuration - time to wait in seconds before timing out
   * @param {string} fakeVerificationCode - (optional) to test instant verification on Android ,specify a fake verification code to return for whitelisted phone numbers.
   *
   * The success callback will be passed a credential object with the following properties:
   *   instantVerification {boolean} - true if the Android device supports instant verification, in which case the verification code will be included in the credential object. If this is false, the device will be sent an SMS containing the verification code for the user to manually enter into your app. Always false on iOS.
   *   verificationId {string} - the verification ID you'll need to pass along with the verification code to sign the user in. Always returned on both Android & iOS.
   *   code {string} - verification code. Will only be present if instantVerification is true. Always undefined on iOS.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  verifyPhoneNumber(phoneNumber: string, timeOutDuration: number, fakeVerificationCode?: string): Promise<any> {
    return;
  }

  /**
   * Switch current authentification system language, for example, the phone sms code.
   *
   * @param lang - language to change, ex: 'fr' for french
   */
  @Cordova()
  setLanguageCode(lang: string): Promise<any> {
    return;
  }

  /**
   * Signs the user into Firebase with credentials obtained using verifyPhoneNumber().
   * See the Android- and iOS-specific Firebase documentation for more info.
   *
   * @param {object} credential - a credential object returned by the success callback of an authentication method
   */
  @Cordova()
  signInWithCredential(credential: object): Promise<any> {
    return;
  }

  /**
   * Creates a new email/password-based user account. If account creation is successful, user will be automatically signed in.
   *
   * @param email
   * @param password
   */
  @Cordova()
  createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return;
  }

  /**
   * Signs in to an email/password-based user account.
   *
   * @param email
   * @param password
   */
  @Cordova()
  signInUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return;
  }

  /**
   * Signs in user with custom token.
   *
   * @param customToken
   */
  @Cordova()
  signInUserWithCustomToken(customToken: string): Promise<any> {
    return;
  }

  /**
   * Signs in user anonymously.
   */
  @Cordova()
  signInUserAnonymously(): Promise<any> {
    return;
  }

  /**
   * Authenticates the user with a Google account to obtain a credential that can be used to sign the user in/link to an existing user account/reauthenticate the user.
   *
   * @param clientId
   */
  @Cordova()
  authenticateUserWithGoogle(clientId: string): Promise<any> {
    return;
  }

  /**
   * Authenticates the user with an Apple account using Sign In with Apple to obtain a credential that can be used to sign the user in/link to an existing user account/reauthenticate the user.
   *
   * @param locale
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  authenticateUserWithApple(locale?: string): Promise<any> {
    return;
  }

  /**
   * Links the user account to an existing Firebase user account with credentials obtained using verifyPhoneNumber().
   * See the Android- and iOS-specific Firebase documentation for more info.
   *
   * @param {object} credential - a credential object returned by the success callback of an authentication method
   * @param {Function} success - callback function to call on successful sign-in using credentials
   * @param {Function} error - callback function which will be passed a {string} error message as an argument
   */
  @Cordova()
  linkUserWithCredential(credential: object, success: () => void, error: (err: string) => void): Promise<any> {
    return;
  }

  /**
   * Reauthenticates the currently signed in user with credentials obtained via an authentication method such as verifyPhoneNumber() or authenticateUserWithGoogle().
   *
   * @param {Object} credential - a credential object returned by the success callback of an authentication method
   * @param {Function} success - callback function to call on successful sign-in using credentials
   * @param {Function} error - callback function which will be passed a {string} error message as an argument
   */
  @Cordova()
  reauthenticateWithCredential(credential: any, success: () => void, error: (err: string) => void): Promise<any> {
    return;
  }

  /**
   * Checks if there is a current Firebase user signed into the app.
   */
  @Cordova()
  isUserSignedIn(): Promise<boolean> {
    return;
  }

  /**
   * Signs current Firebase user out of the app.
   */
  @Cordova()
  signOutUser(): Promise<any> {
    return;
  }

  /**
   * Updates the display name and/or photo URL of the current Firebase user signed into the app.
   *
   * @param profile
   * @param profile.name
   * @param profile.photoUri
   */
  @Cordova()
  updateUserProfile(profile: { name: string; photoUri: string }): Promise<any> {
    return;
  }

  /**
   * Updates/sets the email address of the current Firebase user signed into the app.
   *
   * @param email
   */
  @Cordova()
  updateUserEmail(email: string): Promise<any> {
    return;
  }

  /**
   * Sends a verification email to the currently configured email address of the current Firebase user signed into the app.
   * When the user opens the contained link, their email address will have been verified.
   */
  @Cordova()
  sendUserEmailVerification(): Promise<any> {
    return;
  }

  /**
   * Updates/sets the account password for the current Firebase user signed into the app.
   *
   * @param password
   */
  @Cordova()
  updateUserPassword(password: string): Promise<any> {
    return;
  }

  /**
   * Sends a password reset email to the specified user email address.
   * Note: doesn't require the Firebase user to be signed in to the app.
   *
   * @param email
   */
  @Cordova()
  sendUserPasswordResetEmail(email: string): Promise<any> {
    return;
  }

  /**
   * Deletes the account of the current Firebase user signed into the app.
   */
  @Cordova()
  deleteUser(): Promise<any> {
    return;
  }

  /**
   * Registers a Javascript function to invoke when Firebase Authentication state changes between user signed in/signed out.
   *
   * @param {Function} fn - callback function to invoke when authentication state changes
   */
  @Cordova()
  registerAuthStateChangeListener(fn: any): Promise<any> {
    return;
  }

  /**
   * Fetch Remote Config parameter values for your app.
   *
   * @param {number} cacheExpirationSeconds specify the cacheExpirationSeconds
   * @returns {Promise<any>}
   */
  @Cordova()
  fetch(cacheExpirationSeconds?: number): Promise<any> {
    return;
  }

  /**
   * Activate the Remote Config fetched config.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  activateFetched(): Promise<any> {
    return;
  }

  /**
   * Retrieve a Remote Config value.
   *
   * @param {string} key
   * @returns {Promise<any>}
   */
  @Cordova()
  getValue(key: string): Promise<any> {
    return;
  }

  /**
   * Android only. Retrieve a Remote Config byte array.
   *
   * @param {string} key
   * @returns {Promise<any>}
   */
  @Cordova()
  getByteArray(key: string): Promise<any> {
    return;
  }

  /**
   * Android only. Get the current state of the FirebaseRemoteConfig singleton object.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getInfo(): Promise<any> {
    return;
  }

  /**
   * Android only. Change the settings for the FirebaseRemoteConfig object's operations.
   *
   * @param {Object} settings
   * @returns {Promise<any>}
   */
  @Cordova()
  setConfigSettings(settings: any): Promise<any> {
    return;
  }

  /**
   * Android only. Set defaults in the Remote Config.
   *
   * @param {Object} settings
   * @returns {Promise<any>}
   */
  @Cordova()
  setDefaults(settings: any): Promise<any> {
    return;
  }

  /**
   * Start a trace.
   *
   * @param {string} name
   * @returns {Promise<any>}
   */
  @Cordova()
  startTrace(name: string): Promise<any> {
    return;
  }

  /**
   * To count the performance-related events that occur in your app (such as cache hits or retries),
   * add a line of code similar to the following whenever the event occurs,
   * using a string other than retry to name that event if you are counting a different type of event.
   *
   * @param {string} name
   * @returns {Promise<any>}
   */
  @Cordova()
  incrementCounter(name: string): Promise<any> {
    return;
  }

  /**
   * Stop the trace.
   *
   * @param {string} name
   * @returns {Promise<any>}
   */
  @Cordova()
  stopTrace(name: string): Promise<any> {
    return;
  }

  /**
   * Adds a new document to a Firestore collection, which will be allocated an auto-generated document ID.
   *
   * @param {object} document - document object to add to collection
   * @param {string} collection - name of top-level collection to add document to.
   * @param {Function} success - callback function to call on successfully adding the document. Will be passed a {string} argument containing the auto-generated document ID that the document was stored against.
   * @param {Function} error - callback function which will be passed a {string} error message as an argument.
   */
  @Cordova()
  addDocumentToFirestoreCollection(
    document: object,
    collection: string,
    success: (id: string) => void,
    error: (err: string) => void
  ): Promise<any> {
    return;
  }

  /**
   * Sets (adds/replaces) a document with the given ID in a Firestore collection.
   *
   * @param {string} documentId - document ID to use when setting document in the collection.
   * @param {object} document - document object to set in collection.
   * @param {string} collection - name of top-level collection to set document in.
   * @param {Function} success - callback function to call on successfully setting the document.
   * @param {Function} error - callback function which will be passed a {string} error message as an argument.
   */
  @Cordova()
  setDocumentInFirestoreCollection(
    documentId: string,
    document: object,
    collection: string,
    success: () => void,
    error: (err: string) => void
  ): Promise<any> {
    return;
  }

  /**
   * Updates an existing document with the given ID in a Firestore collection. This is a non-destructive update that will only
   * overwrite existing keys in the existing document or add new ones if they don't already exist. If the no document with the
   * specified ID exists in the collection, an error will be raised.
   *
   * @param {string} documentId - document ID of the document to update.
   * @param {object} document - entire document or document fragment to update existing document with.
   * @param {string} collection - name of top-level collection to update document in.
   * @param {Function} success - callback function to call on successfully updating the document.
   * @param {Function} error - callback function which will be passed a {string} error message as an argument.
   */
  @Cordova()
  updateDocumentInFirestoreCollection(
    documentId: string,
    document: object,
    collection: string,
    success: () => void,
    error: (err: string) => void
  ): Promise<any> {
    return;
  }

  /**
   * Deletes an existing document with the given ID in a Firestore collection.
   * - Note: If the no document with the specified ID exists in the collection, the Firebase SDK will still return a successful outcome.
   *
   * @param {string} documentId - document ID of the document to delete.
   * @param {string} collection - name of top-level collection to delete document in.
   * @param {Function} success - callback function to call on successfully deleting the document.
   * @param {Function} error -  callback function which will be passed a {string} error message as an argument.
   */
  @Cordova()
  deleteDocumentFromFirestoreCollection(
    documentId: string,
    collection: string,
    success: () => void,
    error: (err: string) => void
  ): Promise<any> {
    return;
  }

  /**
   * Fetches an existing document with the given ID from a Firestore collection.
   * -Note: If the no document with the specified ID exists in the collection, the error callback will be invoked.
   *
   * @param {string} documentId - document ID of the document to fetch.
   * @param {string} collection - name of top-level collection to fetch document from.
   * @param {Function} success - callback function to call on successfully fetching the document. Will be passed an {object} contain the document contents.
   * @param {Function} error - callback function which will be passed a {string} error message as an argument.
   */
  @Cordova()
  fetchDocumentInFirestoreCollection(
    documentId: string,
    collection: string,
    success: (doc: any) => void,
    error: (err: string) => void
  ): Promise<any> {
    return;
  }

  /**
   * Fetches all the documents in the specific collection.
   *
   * @param {string} collection - name of top-level collection to fetch.
   * @param {Function} success - callback function to call on successfully deleting the document. Will be passed an {object} containing all the documents in the collection,
   * indexed by document ID. If a Firebase collection with that name does not exist or it contains no documents, the object will be empty.
   * @param {Function} error - callback function which will be passed a {string} error message as an argument.
   */
  @Cordova()
  fetchFirestoreCollection(
    collection: string,
    success: (docs: any) => void,
    error: (err: string) => void
  ): Promise<any> {
    return;
  }
}
