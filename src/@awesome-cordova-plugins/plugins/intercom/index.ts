import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

/**
 * @name Intercom
 * @description
 * This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developers.intercom.com/docs/cordova-phonegap-configuration
 * @usage
 * ```typescript
 * import { Intercom } from '@awesome-cordova-plugins/intercom/ngx';
 *
 *
 * constructor(private intercom: Intercom) { }
 *
 * ...
 *
 * this.intercom.registerUnidentifiedUser();
 * ...
 * this.intercom.registerForPush();
 *
 * ```
 */
@Plugin({
  pluginName: 'Intercom',
  plugin: 'cordova-plugin-intercom',
  pluginRef: 'intercom',
  repo: 'https://github.com/intercom/intercom-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Intercom extends AwesomeCordovaNativePlugin {
  /**
   * Register a identified user
   *
   * @param options {any} Options
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  registerIdentifiedUser(options: any): Promise<any> {
    return;
  }

  /**
   * Register a unidentified user
   *
   * @param options {any} Options
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  registerUnidentifiedUser(options: any): Promise<any> {
    return;
  }

  /**
   * This resets the Intercom integration's cache of your user's identity and wipes the slate clean.
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  reset(): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   *
   * @param secureHash {string}
   * @param secureData {any}
   * @returns {Promise<any>} Returns a promise
   * @deprecated Use setUserHash instead as of Intercom Cordova 4.0.0 and higher https://github.com/intercom/intercom-cordova/blob/master/CHANGELOG.md#400-2017-08-29
   */
  @Cordova()
  setSecureMode(secureHash: string, secureData: any): Promise<any> {
    return;
  }

  /**
   *
   * @param secureHash {string}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  setUserHash(secureHash: string): Promise<any> {
    return;
  }

  /**
   *
   * @param attributes {any}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  updateUser(attributes: any): Promise<any> {
    return;
  }

  /**
   *
   * @param eventName {string}
   * @param metaData {any}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  logEvent(eventName: string, metaData: any): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  displayMessenger(): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  displayMessageComposer(): Promise<any> {
    return;
  }

  /**
   *
   * @param initialMessage {string}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  displayMessageComposerWithInitialMessage(initialMessage: string): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  displayConversationsList(): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  displayHelpCenter(): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  unreadConversationCount(): Promise<any> {
    return;
  }

  /**
   *
   * @param visibility {string}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  setLauncherVisibility(visibility: string): Promise<any> {
    return;
  }

  /**
   *
   * @param visibility {string}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  setInAppMessageVisibility(visibility: string): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  hideMessenger(): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  registerForPush(): Promise<any> {
    return;
  }

  /**
   *
   * @param token {string}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  sendPushTokenToIntercom(token: string): Promise<any> {
    return;
  }

  /**
   *
   * @param carouselId {string}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  displayCarousel(carouselId: string): Promise<any> {
    return;
  }

  /**
   *
   * @param articleId {string}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  displayArticle(articleId: string): Promise<any> {
    return;
  }

  /**
   *
   * @param bottomPadding {string | number}
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  setBottomPadding(bottomPadding: string | number): Promise<any> {
    return;
  }
}
