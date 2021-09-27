import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name FirebaseCrash
 * @description
 * This plugin brings crash reporting from Google Firebase to your Cordova project! Android and iOS supported.
 * @usage
 * ```typescript
 * import { FirebaseCrash } from '@awesome-cordova-plugins/firebase-crash';
 *
 * constructor(private firebaseCrash: FirebaseCrash) { }
 *
 * ...
 *
 * this.firebaseCrash.setUserId('123456789');
 * this.firebaseCrash.log('message');
 * this.firebaseCrash.logError('non fatal exception');
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseCrash',
  plugin: 'cordova-plugin-firebase-crash',
  pluginRef: 'cordova.plugins.firebase.crashlytics',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-crash',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseCrash extends AwesomeCordovaNativePlugin {
  /**
   * Add logging that will be sent with your crash data in case of app crash.
   * https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#add_custom_logs
   *
   * @param {string} message
   * @returns {Promise<any>}
   */
  @Cordova({ sync: true })
  log(message: string): Promise<any> {
    return;
  }

  /**
   * Log non-fatal exceptions in addition to automatically reported app crashes.
   * https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#log_non-fatal_exceptions
   *
   * @param {string} message
   * @returns {Promise<any>}
   */
  @Cordova({ sync: true })
  logError(message: string): Promise<any> {
    return;
  }

  /**
   * Sets the user identifier property for crashlytics reporting.
   * https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
   *
   * @param {string} userId value to set the userId
   * @returns {Promise<any>}
   */
  @Cordova({ sync: true })
  setUserId(userId: string): Promise<any> {
    return;
  }
}
