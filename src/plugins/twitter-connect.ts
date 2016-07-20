import { Plugin, Cordova } from './plugin';
/**
 * @name Twitter Connect
 * @description
 * Plugin to use Twitter Single Sign On
 * Uses Twitter's Fabric SDK
 */
@Plugin({
  plugin: 'twitter-connect-plugin',
  pluginRef: 'TwitterConnect',
  repo: '',
  install: 'ionic plugin add twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key>'
})
export class TwitterConnect {
  /**
   * Logs in
   * @return {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
   */
  @Cordova()
  static login(): Promise<TwitterConnectResponse> {return; }
  /**
   * Logs out
   * @return {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
   */
  @Cordova()
  static logout(): Promise<any> {return; }
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
