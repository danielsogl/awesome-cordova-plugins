import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface LineLoginParams {
  /**
   * Line Channel ID
   */
  channel_id: string;
}

export interface LineLoginProfile {
  /**
   * Line User ID
   */
  userID: string;

  /**
   * Line Profile Image URL
   */
  pictureURL: string;

  /**
   * Line Profile Name
   */
  displayName: string;

  /**
   * Email
   */
  email?: string;
}

export interface LineLoginAccessToken {
  /**
   * Line Access Token
   */
  accessToken: string;

  /**
   * Line Access Token Expire Time
   */
  expireTime: string;
}

/**
 * @name Line Login
 * @description
 * The function login, logs out, acquires, verifies, and refreshes the access token. The version of LineSDK you are using is as follows.
 * @usage
 * ```typescript
 * import { LineLogin } from '@awesome-cordova-plugins/line-login/ngx';
 *
 *
 * constructor(private lineLogin: LineLogin) { }
 *
 * ...
 *
 *
 * this.lineLogin.initialize({ channel_id: "xxxxxxxxxx" })
 *
 * this.lineLogin.login()
 *   .then(result => console.log(result))
 *   .catch(error => console.log(error))
 *
 * ```
 * @interfaces
 * LineLoginParams
 * LineLoginProfile
 * LineLoginAccessToken
 */
@Plugin({
  pluginName: 'LineLogin',
  plugin: 'cordova-line-login-plugin',
  pluginRef: 'lineLogin',
  repo: 'https://github.com/nrikiji/cordova-line-login-plugin',
  install:
    'ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID="your_line_channel_id"',
  installVariables: ['LINE_CHANNEL_ID'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class LineLogin extends AwesomeCordovaNativePlugin {
  /**
   * Initialize
   *
   * @param param LineLoginParams
   * @returns {Promise<any>}
   */
  @Cordova()
  initialize(param: LineLoginParams): Promise<any> {
    return;
  }

  /**
   * Login
   *
   * @returns {Promise<LineLoginProfile>}
   */
  @Cordova()
  login(): Promise<LineLoginProfile> {
    return;
  }

  /**
   * Login with Web
   * (iOS only)
   *
   * @returns {Promise<LineLoginProfile>}
   */
  @Cordova()
  loginWeb(): Promise<LineLoginProfile> {
    return;
  }

  /**
   * Logout
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Get Access Token
   *
   * @returns {Promise<LineLoginAccessToken>}
   */
  @Cordova()
  getAccessToken(): Promise<LineLoginAccessToken> {
    return;
  }

  /**
   * Verify AccessToken
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  verifyAccessToken(): Promise<any> {
    return;
  }

  /**
   * Refresh Access Token
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  refreshAccessToken(): Promise<any> {
    return;
  }
}
