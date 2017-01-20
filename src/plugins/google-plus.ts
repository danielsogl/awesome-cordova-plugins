import { Cordova, Plugin } from './plugin';

/**
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from 'ionic-native';
 *
 * GooglePlus.login()
 *   .then(res => console.log(res))
 *   .catch(err => console.error(err));
 *
 * ```
 */
@Plugin({
  pluginName: 'GooglePlus',
  plugin: 'cordova-plugin-googleplus',
  pluginRef: 'window.plugins.googleplus',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-googleplus',
  platforms: ['Web', 'Android', 'iOS'],
  install: 'ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid'
})
export class GooglePlus {

  /**
   * The login function walks the user through the Google Auth process.
   * @param options
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static login(options?: any): Promise<any> { return; }

  /**
   * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
   * @param options
   * @returns {Promise<any>}
   */
  @Cordova()
  static trySilentLogin(options?: any): Promise<any> { return; }

  /**
   * This will clear the OAuth2 token.
   * @returns {Promise<any>}
   */
  @Cordova()
  static logout(): Promise<any> { return; }

  /**
   * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
   * @returns {Promise<any>}
   */
  @Cordova()
  static disconnect(): Promise<any> { return; }

}
