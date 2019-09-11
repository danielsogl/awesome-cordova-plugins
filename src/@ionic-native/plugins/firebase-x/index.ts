import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
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
  vibration?: boolean;

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

/**
 * @name Firebase X
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported.
 * It is a maintained fork from unmaintained ionic-navite plugin called Firebase.
 *
 * @usage
 * ```typescript
 * import { FirebaseX } from '@ionic-native/firebase-x';
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
 *
 */
@Plugin({
  pluginName: 'FirebaseX',
  plugin: 'cordova-plugin-firebasex',
  pluginRef: 'FirebasePlugin',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseX extends IonicNativePlugin {
  /**
   * Get the device token.
   * @return {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  @Cordova()
  getToken(): Promise<null | string> {
    return;
  }

  /**
   * Get notified when a token is refreshed.
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onTokenRefresh(): Observable<any> {
    return;
  }

  /**
   * Registers a callback function to invoke when:
   * - a notification or data message is received by the app
   * - a system notification is tapped by the user
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onMessageReceived(): Observable<any> {
    return;
  }

  /**
   * Grant permission to receive push notifications (will trigger prompt) and return hasPermission: true. iOS only (Android will always return true).
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS']
  })
  grantPermission(): Promise<any> {
    return;
  }

  /**
   * Check permission to receive push notifications and return hasPermission: true. iOS only (Android will always return true).
   * @return {Promise<boolean>}
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
   * @param {number} badgeNumber
   * @return {Promise<any>}
   */
  @Cordova()
  setBadgeNumber(badgeNumber: number): Promise<any> {
    return;
  }

  /**
   * Get icon badge number.
   * @return {Promise<any>}
   */
  @Cordova()
  getBadgeNumber(): Promise<any> {
    return;
  }

  /**
   * Clear all pending notifications from the drawer.
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  clearAllNotifications(): Promise<any> {
    return;
  }

  /**
   * Subscribe to a topic. Topic messaging allows you to send a message to multiple devices that have opted in to a particular topic.
   * @param {string} topic
   * @return {Promise<any>}
   */
  @Cordova()
  subscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribe from a topic. This will stop you receiving messages for that topic.
   * @param {string} topic
   * @return {Promise<any>}
   */
  @Cordova()
  unsubscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Creates a custom channel to be used by notification messages which have the channel property set in the message payload to the id of the created channel:
   * - for background (system) notifications: android.notification.channel_id
   * - for foreground/data notifications: data.notification_android_channel_id
   *
   * Calling on Android 7 or below or another platform will have no effect.
   * @param {IChannelOptions} channelOptions
   * @return {Promise<any>}
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
   * @param {IChannelOptions} channelOptions
   * @return {Promise<any>}
   */
  @Cordova()
  setDefaultChannel(channelOptions: IChannelOptions): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Removes a previously defined channel.
   * Calling on Android 7 or below or another platform will have no effect.
   * @param {string} channelID
   * @return {Promise<any>}
   */
  @Cordova()
  deleteChannel(channelID: string): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Gets a list of all channels.
   * Calling on Android 7 or below or another platform will have no effect.
   * @return {Promise<any>}
   */
  @Cordova()
  listChannels(): Promise<any> {
    return;
  }

  /**
   * Enable/disable analytics collection (useful for GDPR/privacy settings).
   * @param {boolean} enabled
   * @returns {Promise<any>}
   */
  @Cordova()
  setAnalyticsCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Log an event using Analytics
   * @param {string} type
   * @param {Object} data
   * @return {Promise<any>}
   */
  @Cordova()
  logEvent(type: string, data: any): Promise<any> {
    return;
  }

  /**
   * Set the name of the current screen in Analytics
   * @param {string} name Screen name
   * @return {Promise<any>}
   */
  @Cordova()
  setScreenName(name: string): Promise<any> {
    return;
  }

  /**
   * Set a user id for use in Analytics
   * @param {string} userId
   * @return {Promise<any>}
   */
  @Cordova()
  setUserId(userId: string): Promise<any> {
    return;
  }

  /**
   * Set a user property for use in Analytics
   * @param {string} name
   * @param {string} value
   * @return {Promise<any>}
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
   * @return {Promise<any>}
   */
  @Cordova()
  sendCrash(): Promise<any> {
    return;
  }

  /**
   * Sends a crash-related log message that will appear in the Logs section of the next native crash event.
   * Note: if you don't then crash, the message won't be sent! Also logs the message to the native device console.
   * @param {string} message
   * @return {Promise<any>}
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
   * @param {string} error
   * @return {Promise<any>}
   */
  @Cordova()
  logError(error: string): Promise<any> {
    return;
  }

  /**
   * Request a verification ID and send a SMS with a verification code. Use them to construct a credential to sign in the user (in your app).
   *
   * More info:
   * https://github.com/dpa99c/cordova-plugin-firebasex#verifyphonenumber
   * https://firebase.google.com/docs/auth/android/phone-auth
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCredential
   * https://firebase.google.com/docs/reference/js/firebase.User#linkWithCredential
   *
   * NOTE: This will only work on physical devices.
   *
   * iOS will return: credential (string)
   *
   * Android will return:
   * credential.verificationId (object and with key verificationId)
   * credential.instantVerification (boolean) credential.code (string)
   * (note that this key only exists if instantVerification is true)
   *
   * You need to use device plugin in order to access the right key.
   * IMPORTANT NOTE: Android supports auto-verify and instant device verification.
   * Therefore in that case it doesn't make sense to ask for an sms code as you won't receive one.
   * In this case you'll get a credential.verificationId and a credential.code where code is the auto received verification code
   * that would normally be sent via sms. To log in using this procedure you must pass this code to
   * PhoneAuthProvider.credential(verificationId, code). You'll find an implementation example further below.
   *
   * When using node.js Firebase Admin-SDK, follow this tutorial:
   * https://firebase.google.com/docs/auth/admin/create-custom-tokens
   *
   * Pass back your custom generated token and call
   * firebase.auth().signInWithCustomToken(customTokenFromYourServer);
   * instead of
   * firebase.auth().signInWithCredential(credential)
   *
   * YOU HAVE TO COVER THIS PROCESS, OR YOU WILL HAVE ABOUT 5% OF USERS STICKING ON YOUR SCREEN, NOT RECEIVING ANYTHING
   * If this process is too complex for you, use this awesome plugin
   * https://github.com/chemerisuk/cordova-plugin-firebase-authentication
   * It's not perfect but it fits for the most use cases and doesn't require calling your endpoint, as it has native phone auth support.
   *
   * Android
   * To use this auth you need to configure your app SHA hash in the android app configuration in the firebase console.
   * See https://developers.google.com/android/guides/client-auth to know how to get SHA app hash.
   *
   * iOS
   * Setup your push notifications first, and verify that they are arriving on your physical device before you test this method.
   * Use the APNs auth key to generate the .p8 file and upload it to firebase. When you call this method,
   * FCM sends a silent push to the device to verify it.
   *
   * @param {string} phoneNumber The phone number, including '+' and country code
   * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
   * @returns {Promise<any>}
   */
  @Cordova()
  verifyPhoneNumber(
    phoneNumber: string,
    timeoutDuration = 0
  ): Promise<any> {
    return;
  }

  /**
   * Fetch Remote Config parameter values for your app.
   * @param {number} cacheExpirationSeconds specify the cacheExpirationSeconds
   * @return {Promise<any>}
   */
  @Cordova()
  fetch(cacheExpirationSeconds?: number): Promise<any> {
    return;
  }

  /**
   * Activate the Remote Config fetched config.
   * @return {Promise<any>}
   */
  @Cordova()
  activateFetched(): Promise<any> {
    return;
  }

  /**
   * Retrieve a Remote Config value.
   * @param {string} key
   * @return {Promise<any>}
   */
  @Cordova()
  getValue(key: string): Promise<any> {
    return;
  }

  /**
   * Android only. Retrieve a Remote Config byte array.
   * @param {string} key
   * @return {Promise<any>}
   */
  @Cordova()
  getByteArray(key: string): Promise<any> {
    return;
  }

  /**
   * Android only. Get the current state of the FirebaseRemoteConfig singleton object.
   * @return {Promise<any>}
   */
  @Cordova()
  getInfo(): Promise<any> {
    return;
  }

  /**
   * Android only. Change the settings for the FirebaseRemoteConfig object's operations.
   * @param {Object} settings
   * @return {Promise<any>}
   */
  @Cordova()
  setConfigSettings(settings: any): Promise<any> {
    return;
  }

  /**
   * Android only. Set defaults in the Remote Config.
   * @param {Object} settings
   * @return {Promise<any>}
   */
  @Cordova()
  setDefaults(settings: any): Promise<any> {
    return;
  }

  /**
   * Start a trace.
   * @param {string} name
   * @return {Promise<any>}
   */
  @Cordova()
  startTrace(name: string): Promise<any> {
    return;
  }

  /**
   * To count the performance-related events that occur in your app (such as cache hits or retries),
   * add a line of code similar to the following whenever the event occurs,
   * using a string other than retry to name that event if you are counting a different type of event.
   * @param {string} name
   * @return {Promise<any>}
   */
  @Cordova()
  incrementCounter(name: string): Promise<any> {
    return;
  }

  /**
   * Stop the trace.
   * @param {string} name
   * @return {Promise<any>}
   */
  @Cordova()
  stopTrace(name: string): Promise<any> {
    return;
  }
}
