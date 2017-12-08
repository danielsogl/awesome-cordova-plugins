import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface TwitterConnectResponse {
  /**
   * Twitter Username
   */
  userName: string;
  /**
   * Twitter User ID
   */
  userId: string;
  /**
   * Twitter OAuth Secret
   */
  secret: string;
  /**
   * Twitter OAuth Token
   */
  token: string;
}

/**
 * @name Twitter Connect
 * @description
 * Plugin to use Twitter Single Sign On
 * Uses Twitter's Fabric SDK
 * ```typescript
 * import { TwitterConnect } from '@ionic-native/twitter-connect';
 *
 * constructor(private twitter: TwitterConnect) { }
 *
 * ...
 *
 * function onSuccess(response) {
 *   console.log(response);
 *
 *   // Will console log something like:
 *   // {
 *   //   userName: 'myuser',
 *   //   userId: '12358102',
 *   //   secret: 'tokenSecret'
 *   //   token: 'accessTokenHere'
 *   // }
 * }
 *
 * this.twitter.login().then(onSuccess, onError);
 *
 * this.twitter.logout().then(onLogoutSuccess, onLogoutError);
 * ```
 * @interfaces
 * TwitterConnectResponse
 */
@Plugin({
  pluginName: 'TwitterConnect',
  plugin: 'twitter-connect-plugin',
  pluginRef: 'TwitterConnect',
  repo: 'https://github.com/chroa/twitter-connect-plugin',
  install: 'ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>',
  installVariables: ['FABRIC_KEY', 'TWITTER_KEY', 'TWITTER_SECRET'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class TwitterConnect extends IonicNativePlugin {
  /**
   * Logs in
   * @returns {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
   */
  @Cordova()
  login(): Promise<TwitterConnectResponse> { return; }
  /**
   * Logs out
   * @returns {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
   */
  @Cordova()
  logout(): Promise<any> { return; }

  /**
   * Returns user's profile information
   * @returns {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
   */
  @Cordova()
  showUser(): Promise<any> { return; }
}
