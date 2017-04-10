import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 * @usage
 * ```typescript
 * import { SocialSharing } from '@ionic-native/social-sharing';
 *
 * constructor(private socialSharing: SocialSharing) { }
 *
 * ...
 *
 * // Check if sharing via email is supported
 * this.socialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
@Plugin({
  pluginName: 'SocialSharing',
  plugin: 'cordova-plugin-x-socialsharing',
  pluginRef: 'plugins.socialsharing',
  repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
  platforms: ['iOS', 'Android', 'Windows Phone']
})
@Injectable()
export class SocialSharing {
  /**
   * Shares using the share sheet
   * @param message {string} The message you would like to share.
   * @param subject {string} The subject
   * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
   * @param url {string} A URL to share
   * @returns {Promise<any>}
   */
  @Cordova()
  share(message?: string, subject?: string, file?: string|string[], url?: string): Promise<any> { return; }

  /**
   * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
   * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  shareWithOptions(options: { message?: string, subject?: string, files?: string|string[], url?: string, chooserTitle?: string }): Promise<any> { return; }

  /**
   * Checks if you can share via a specific app.
   * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
   * @param message {string}
   * @param subject {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 5,
    errorIndex: 6,
    platforms: ['iOS', 'Android']
  })
  canShareVia(appName: string, message?: string, subject?: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Shares directly to Twitter
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4,
    platforms: ['iOS', 'Android']
  })
  shareViaTwitter(message: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Shares directly to Facebook
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4,
    platforms: ['iOS', 'Android']
  })
  shareViaFacebook(message: string, image?: string, url?: string): Promise<any> { return; }


  /**
   * Shares directly to Facebook with a paste message hint
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @param pasteMessageHint {string}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 4,
    errorIndex: 5,
    platforms: ['iOS', 'Android']
  })
  shareViaFacebookWithPasteMessageHint(message: string, image?: string, url?: string, pasteMessageHint?: string): Promise<any> { return; }

  /**
   * Shares directly to Instagram
   * @param message {string}
   * @param image {string}
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  shareViaInstagram(message: string, image: string): Promise<any> { return; }

  /**
   * Shares directly to WhatsApp
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4,
    platforms: ['iOS', 'Android']
  })
  shareViaWhatsApp(message: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Shares directly to a WhatsApp Contact
   * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
   * @param message {string} Message to send
   * @param image {string} Image to send (does not work on iOS
   * @param url {string} Link to send
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 4,
    errorIndex: 5,
    platforms: ['iOS', 'Android']
  })
  shareViaWhatsAppToReceiver(receiver: string, message: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Share via SMS
   * @param messge {string} message to send
   * @param phoneNumber {string} Number or multiple numbers seperated by commas
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  shareViaSMS(messge: string, phoneNumber: string): Promise<any> { return; }

  /**
   * Checks if you can share via email
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  canShareViaEmail(): Promise<any> { return; }

  /**
   * Share via Email
   * @param message {string}
   * @param subject {string}
   * @param to {string[]}
   * @param cc {string[]} Optional
   * @param bcc {string[]} Optional
   * @param files {string|string[]} Optional URL or local path to file(s) to attach
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS', 'Android'],
    successIndex: 6,
    errorIndex: 7
  })
  shareViaEmail(message: string, subject: string, to: string[], cc?: string[], bcc?: string[], files?: string|string[]): Promise<any> { return; }

  /**
   * Share via AppName
   * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
   * @param message {string}
   * @param subject {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 5,
    errorIndex: 6,
    platforms: ['iOS', 'Android']
  })
  shareVia(appName: string, message: string, subject?: string, image?: string, url?: string): Promise<any> { return; }
}
