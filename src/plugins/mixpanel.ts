import { Cordova, Plugin } from './plugin';

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
  pluginName: 'Mixpanel',
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
   * @returns {Promise<any>}
   */
  @Cordova()
  static flush(): Promise<any> { return; }

  /**
   *
   * @param distinctId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  static identify(distinctId: string): Promise<any> { return; }

  /**
   *
   * @param token {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  static init(token: string): Promise<any> { return; }

  /**
   *
   * @param superProperties {any}
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
   * @param eventName {string}
   * @param eventProperties {any} optional
   * @returns {Promise<any>}
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
  static get people(): typeof MixpanelPeople {
    return MixpanelPeople;
  };

}
/**
 * @private
 */
export class MixpanelPeople {
  /**
   * @private
   */
  static plugin: string = 'cordova-plugin-mixpanel';
  /**
   * @private
   */
  static pluginRef: string = 'mixpanel.people';

  /**
   *
   * @param distinctId {string}
   * @return {Promise<any>}
   */
  @Cordova()
  static identify(distinctId: string): Promise<any> { return; }

  /**
   *
   * @param peopleProperties {string}
   * @return {Promise<any>}
   */
  @Cordova()
  static increment(peopleProperties: any): Promise<any> { return; }

  /**
   *
   * @param pushId
   * @return {Promise<any>}
   */
  @Cordova()
  static setPushId(pushId: string): Promise<any> { return; }

  /**
   *
   * @param peopleProperties
   * @return {Promise<any>}
   */
  @Cordova()
  static set(peopleProperties: any): Promise<any> { return; }

  /**
   *
   * @param peopleProperties
   * @return {Promise<any>}
   */
  @Cordova()
  static setOnce(peopleProperties: any): Promise<any> { return; }
}
