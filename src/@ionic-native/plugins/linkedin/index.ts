import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export type LinkedInLoginScopes = 'r_basicprofile' | 'r_emailaddress' | 'rw_company_admin' | 'w_share';

/**
 * @name LinkedIn
 * @description
 * A Cordova plugin that lets you use LinkedIn Native SDKs for Android and iOS.
 *
 * Please see the [plugin's repo](https://github.com/zyramedia/cordova-plugin-linkedin#installation) for detailed installation steps.
 *
 * @usage
 * ```
 * import { LinkedIn } from '@ionic-native/linkedin';
 *
 * constructor(private linkedin: LinkedIn) { }
 *
 * ...
 *
 * // check if there is an active session
 * this.linkedin.hasActiveSession().then((active) => console.log('has active session?', active));
 *
 * // login
 * const scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
 * this.linkedin.login(scopes, true)
 *   .then(() => console.log('Logged in!')
 *   .catch(e => console.log('Error logging in', e));
 *
 *
 * // get connections
 * this.linkedin.getRequest('people/~')
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 * // share something on profile
 * const body = {
 *   comment: 'Hello world!',
 *   visibility: {
 *     code: 'anyone'
 *   }
 * };
 *
 * this.linkedin.postRequest('~/shares', body)
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'LinkedIn',
  plugin: 'cordova-plugin-linkedin',
  pluginRef: 'cordova.plugins.LinkedIn',
  repo: 'https://github.com/zyramedia/cordova-plugin-linkedin',
  install: 'ionic plugin add cordova-plugin-linkedin --variable APP_ID=YOUR_APP_ID',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class LinkedIn {

  /**
   * Login with the LinkedIn App
   * @param scopes {string[]} Scopes to authorize
   * @param promptToInstall {boolean} set to true to prompt the user to download the LinkedIn app if it's not installed
   * @return {Promise<any>}
   */
  @Cordova()
  login(scopes: LinkedInLoginScopes[], promptToInstall: boolean): Promise<any> { return; }

  /**
   * Clears the current session
   */
  @Cordova({ sync: true })
  logout(): void { }

  /**
   * Make a get request
   * @param path {string} request path
   * @return {Promise<any>}
   */
  @Cordova()
  getRequest(path: string): Promise<any> { return; }

  /**
   * Make a post request
   * @param path {string} request path
   * @param body {Object} request body
   * @return {Promise<any>}
   */
  @Cordova()
  postRequest(path: string, body: any): Promise<any> { return; }

  /**
   * Opens a member's profile
   * @param memberId {string} Member id
   * @return {Promise<any>}
   */
  @Cordova()
  openProfile(memberId: string): Promise<any> { return; }

  /**
   * Checks if there is already an existing active session. This should be used to avoid unecessary login.
   * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether there is an active session
   */
  @Cordova()
  hasActiveSession(): Promise<boolean> { return; }

}
