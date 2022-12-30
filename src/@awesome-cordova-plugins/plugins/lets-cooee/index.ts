import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Lets Cooee
 * @description
 * AI driven Personalised Notifications for Better Customer Engagement
 *
 * @usage
 * ```typescript
 * import { Cooee } from '@awesome-cordova-plugins/lets-cooee/nx';
 *
 *
 * constructor(private cooee: Cooee) { }
 *
 * ...
 *
 *
 * this.cooee.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Cooee',
  plugin: '@letscooee/cordova-plugin',
  pluginRef: 'cordova.plugins.Cooee',
  repo: 'https://github.com/letscooee/cordova-plugin-cooee',
  install: 'ionic cordova plugin add @letscooee/cordova-plugin --variable COOEE_APP_ID=appId',
  installVariables: ['COOEE_APP_ID'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Cooee extends AwesomeCordovaNativePlugin {
  /**
   * Send the given user data and user properties to the server.
   * @return {Promise<any>} Returns a promise so user can be notified.
   * @param eventName {string} Name of the event
   * @param eventProperties {Record<string, any>} Properties of the event
   */
  @Cordova()
  sendEvent(eventName: string, eventProperties: Record<string, any>): Promise<any> {
    return;
  }

  /**
   * Send the given user data and user properties to the server.
   * @return {Promise<any>} Returns a promise so user can be notified.
   * @param userProfile {Record<string, any>} User data to send to the server
   */
  @Cordova()
  updateUserProfile(userProfile: Record<string, any>): Promise<any> {
    return;
  }

  /**
   * Send the given screen name with every event.
   * @return {Promise<any>} Returns a promise so user can be notified.
   * @param screenName {string} Screen name to send to the server
   */
  @Cordova()
  setCurrentScreen(screenName: string): Promise<any> {
    return;
  }

  /**
   * Provide Cooee's userID assigned to the current user.
   * @return {Promise<any>} Returns a promise with userId.
   */
  @Cordova()
  getUserID(): Promise<any> {
    return;
  }

  /**
   * Provides callback for the onCooeeCTAListener event.
   * @return {Observable<Any>} Returns an observable record.
   */
  @Cordova({
    eventObservable: true,
    event: 'onCooeeCTAListener',
    element: document,
  })
  addCooeeCTAListener(): Observable<any> {
    return;
  }
}
