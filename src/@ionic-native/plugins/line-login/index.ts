import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaProperty, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Line Login
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { LineLogin } from '@ionic-native/line-login';
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
 */
@Plugin({
  pluginName: 'LineLogin',
  plugin: 'cordova-line-login-plugin',
  pluginRef: 'lineLogin',
  repo: 'https://github.com/nrikiji/cordova-line-login-plugin',
  install: 'ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID="your_line_channel_id"',
  installVariables: ['LINE_CHANNEL_ID'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class LineLogin extends IonicNativePlugin {

  /**
   * Initialize
   * @param param {any} {channel_id: "your_chanel_id"}
   * @return {Promise<any>}
   */
  @Cordova()
  initialize(param: any): Promise<any> {
    return;
  }

  /**
   * Login
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  login(): Promise<any> {
    return;
  }

  /**
   * Logout
   * @return {Promise<any>}
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Get Access Token
   * @return {Promise<any>}
   */
  @Cordova()
  getAccessToken(): Promise<any> {
    return;
  }

  /**
   * Verify AccessToken
   * @return {Promise<any>}
   */
  @Cordova()
  verifyAccessToken(): Promise<any> {
    return;
  }

  /**
   * Refresh Access Token
   * @return {Promise<any>}
   */
  @Cordova()
  refreshAccessToken(): Promise<any> {
    return;
  }

}
