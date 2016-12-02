import { Plugin, Cordova } from './plugin';


/**
 * @name Twitter Connect
 * @description
 * Plugin to use Twitter Single Sign On
 * Uses Twitter's Fabric SDK
 * ```typescript
 * import {TwitterConnect} from 'ionic-native';
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
 * TwitterConnect.login().then(onSuccess, onError);
 *
 * TwitterConnect.logout().then(onLogoutSuccess, onLogoutError);
 * ```
 */
@Plugin({
  pluginName: 'TwitterConnect',
  plugin: 'twitter-connect-plugin',
  pluginRef: 'TwitterConnect',
  repo: 'https://github.com/ManifestWebDesign/twitter-connect-plugin',
  install: 'ionic plugin add twitter-connect-plugin --variable FABRIC_KEY=fabric_API_key'
})
export class TwitterConnect {
  /**
   * Logs in
   * @returns {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
   */
  @Cordova()
  static login(): Promise<TwitterConnectResponse> {return; }
  /**
   * Logs out
   * @returns {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
   */
  @Cordova()
  static logout(): Promise<any> {return; }

  /**
   * Returns user's profile information
   * @returns {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
   */
  @Cordova()
  static showUser(): Promise<any> {return; }
}
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
