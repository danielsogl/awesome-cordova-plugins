import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Intercom
 * @description
 * This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developers.intercom.com/docs/cordova-phonegap-configuration
 *
 * @usage
 * ```typescript
 * import { Intercom } from '@ionic-native/intercom';
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
export declare class Intercom extends IonicNativePlugin {
    /**
     * Register a identified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    registerIdentifiedUser(options: any): Promise<any>;
    /**
     * Register a unidentified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    registerUnidentifiedUser(options: any): Promise<any>;
    /**
     * This resets the Intercom integration's cache of your user's identity and wipes the slate clean.
     * @return {Promise<any>} Returns a promise
     */
    reset(): Promise<any>;
    /**
     *
     * @param secureHash {string}
     * @param secureData {any}
     * @return {Promise<any>} Returns a promise
     */
    setSecureMode(secureHash: string, secureData: any): Promise<any>;
    /**
     *
     * @param secureHash {string}
     * @return {Promise<any>} Returns a promise
     */
    setUserHash(secureHash: string): Promise<any>;
    /**
     *
     * @param attributes {any}
     * @return {Promise<any>} Returns a promise
     */
    updateUser(attributes: any): Promise<any>;
    /**
     *
     * @param eventName {string}
     * @param metaData {any}
     * @return {Promise<any>} Returns a promise
     */
    logEvent(eventName: string, metaData: any): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayMessenger(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayMessageComposer(): Promise<any>;
    /**
     *
     * @param initialMessage {string}
     * @return {Promise<any>} Returns a promise
     */
    displayMessageComposerWithInitialMessage(initialMessage: string): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    displayConversationsList(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    unreadConversationCount(): Promise<any>;
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    setLauncherVisibility(visibility: string): Promise<any>;
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    setInAppMessageVisibility(visibility: string): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    hideMessenger(): Promise<any>;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    registerForPush(): Promise<any>;
}
