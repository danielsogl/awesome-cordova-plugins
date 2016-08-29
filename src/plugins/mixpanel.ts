import { Cordova, CordovaProperty, Plugin } from './plugin';

declare var mixpanel: any;


/**
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 *
 * @usage
 * ```
 * import {Mixpanel} from 'ionic-native';
 *
 * Mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-mixpanel',
  pluginRef: 'mixpanel',
  repo: 'https://github.com/samzilverberg/cordova-mixpanel-plugin'
})
export class Mixpanel {
  /**
   *
   * @param aliasId {string}
   * @param originalId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  static alias(aliasId: string, originalId: string): Promise<any> { return; }

  /**
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  static distinctId(): Promise<any> { return; }

  /**
   *
   */
  @Cordova()
  static flush(): Promise<any> { return; }

  /**
   *
   * @param distinctId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  static identify(distinctId): Promise<any> { return; }

  /**
   *
   * @param token {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  static init(token: string): Promise<any> { return; }

  /**
   *
   * @param superProperties
   * @returns {Promise<any>}
   */
  @Cordova()
  static registerSuperProperties(superProperties: any): Promise<any> { return; }

  /**
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  static reset(): Promise<any> { return; }

  /**
   *
   * @param eventName
   * @param eventProperties
   */
  @Cordova()
  static track(eventName: string, eventProperties?: any): Promise<any> { return; }

  /**
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  static showSurvey(): Promise<any> { return; }

  /**
   *
   * @returns {MixpanelPeople}
   */
  @CordovaProperty
  static get people(): MixpanelPeople { return mixpanel.people; };

}
/**
 * @private
 */
export declare class MixpanelPeople {
  static identify(distinctId: string, onSuccess?: Function, onFail?: Function): void;
  static increment(peopleProperties: any, onSuccess?: Function, onFail?: Function): void;
  static setPushId(pushId: string, onSuccess?: Function, onFail?: Function): void;
  static set(peopleProperties: any, onSuccess?: Function, onFail?: Function): void;
  static setOnce(peopleProperties: any, onSuccess?: Function, onFail?: Function): void;
}
