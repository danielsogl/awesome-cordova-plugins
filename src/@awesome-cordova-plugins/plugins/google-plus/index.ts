import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
 *
 * constructor(private googlePlus: GooglePlus) { }
 *
 * ...
 *
 * this.googlePlus.login({})
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
  install: 'ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid',
  installVariables: ['REVERSED_CLIENT_ID'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class GooglePlus extends AwesomeCordovaNativePlugin {
  /**
   * The login function walks the user through the Google Auth process.
   * @param options
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  login(options: any): Promise<any> {
    return;
  }

  /**
   * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
   * @param options
   * @returns {Promise<any>}
   */
  @Cordova()
  trySilentLogin(options?: any): Promise<any> {
    return;
  }

  /**
   * This will clear the OAuth2 token.
   * @returns {Promise<any>}
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
   * @returns {Promise<any>}
   */
  @Cordova()
  disconnect(): Promise<any> {
    return;
  }

  /**
   * This will retrieve the Android signing certificate fingerprint which is required in the Google Developer Console.
   * @returns {Promise<any>}
   */
  @Cordova()
  getSigningCertificateFingerprint(): Promise<any> {
    return;
  }
}
