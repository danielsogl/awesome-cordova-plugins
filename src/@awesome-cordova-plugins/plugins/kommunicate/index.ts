import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Kommunicate
 * @description
 * The plugin for the Kommunicate SDK.
 * With the help of this plugin, you can easily add human + bot chat support functionality to you app.
 * Refer to: TODO: insert site link
 * For documentation: TODO: insert link
 * @usage
 * ```typescript
 * import { Kommunicate } from '@awesome-cordova-plugins/Kommunicate';
 *
 * constructor(private kommunicate: Kommunicate) { }
 * //also add [..., Kommunicate, ... ] inside the providers array, if required
 *
 * var kmUser = {
 *    userId : 'randomstring',
 *    authenticationTypeId : 1
 * };
 *
 * this.kommunicate.login(kmUser)
 *   .then((res: any) => console.log("Sucessfully logged in." + res))
 *   .catch((error: any) => console.error("Error logging in." + error));
 *
 * var conversationObject = {
 *    isUnique : false
 * };
 *
 * this.kommunicate.conversationBuilder(converationObject)
 *   .then((clientChannelKey: any) => console.log("Kommunicate create conversation successful the clientChannelKey is : " + clientChannelKey))
 *   .catch((error: any) => console.error("Error creating conversation." + error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Kommunicate',
  plugin: 'kommunicate-cordova-plugin',
  pluginRef: 'kommunicate',
  repo: 'https://github.com/Kommunicate-io/Kommunicate-Cordova-Ionic-PhoneGap-Chat-Plugin',
  platforms: ['Android', 'Browser', 'iOS'],
})
@Injectable()
export class Kommunicate extends AwesomeCordovaNativePlugin {
  /**
   * Login the user with the details passed in
   * Creates a new user with the details provided there is no existing user
   *
   * var kmUser = {
   *    'userId' : 'userId',   //Replace it with the userId of the logged in user
   *    'password' : 'password',  //replace with password
   *    'authenticationTypeId' : 1,
   *    'imageLink' : <image-link-for-user>
   *    'applicationId' : '<APP_ID>',  //replace this with your APP_ID from Applozic Dashboard
   *    'deviceApnsType' : 0    //Set 0 for Development and 1 for Distribution (Release)
   * };
   *
   * @param kmUser {any} the user details
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  login(kmUser: any): Promise<any> {
    return;
  }

  /**
   * Register for push notification
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  registerPushNotification(): Promise<any> {
    return;
  }

  /**
   * Check if any user is logged in or not
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  isLoggedIn(): Promise<any> {
    return;
  }

  /**
   * Update the token for push notifications
   *
   * @param token {string} the user details
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  updatePushNotificationToken(token: string): Promise<any> {
    return;
  }

  /**
   * Launch the conversation screen (it contains all the existing conversations)
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  launchConversation(): Promise<any> {
    return;
  }

  /**
   * Launch the conversation identified by the given channel(conversation) key
   *
   * let convObj = {
   *   'clientChannelKey' : clientChannelKey, //pass the clientChannelKey here
   *   'takeOrder' : true //skip chat list on back press, pass false if you want to show chat list on back press
   * };
   *
   * @param conversationObject {any} the channel key and other information
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  launchParticularConversation(conversationObject: any): Promise<any> {
    return;
  }

  /**
   * Start a new conversation, details about the conversation to be passed as parameters
   *
   * @deprecated
   * @param conversationParams
   * @param converationParams {any} the user details
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  startNewConversation(conversationParams: any): Promise<any> {
    return;
  }

  /**
   * Process push notifications
   *
   * @param data {any} the user details
   * @returns {boolean} Returns true/false
   */
  @Cordova({ sync: true })
  processPushNotification(data: any): boolean {
    return;
  }

  /**
   * Logout the current user
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Start a single chat (conversation)
   *
   * @deprecated
   * @param data {any} the user details
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  startSingleChat(data: any): Promise<any> {
    return;
  }

  /**
   * Launches a conversation with the properties passed in the conversation param
   *
   * var conversationObject = {
   *   'isUnique' : false,
   *   'agentIds':['<AGENT_ID>'],  //List of agentIds. AGENT_ID is the emailID used to signup on Kommunicate
   *   'botIds': ['<BOT_ID>']  //List of botIds. Go to Manage Bots(https://dashboard.kommunicate.io/bots/manage-bots) -> Copy botID
   * };
   *
   * @param conversationObject {any} the user details
   * @param converationObject
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  conversationBuilder(converationObject: any): Promise<any> {
    return;
  }
}
