import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

declare let mixpanel: any;

/**
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 * @usage
 * ```typescript
 * import { Mixpanel } from '@awesome-cordova-plugins/mixpanel/ngx';
 *
 * constructor(private mixpanel: Mixpanel, private mixpanelPeople: MixpanelPeople) { }
 *
 * ...
 *
 * this.mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 * @classes
 * MixpanelPeople
 */
@Plugin({
  pluginName: 'Mixpanel',
  plugin: 'cordova-plugin-mixpanel',
  pluginRef: 'mixpanel',
  repo: 'https://github.com/samzilverberg/cordova-mixpanel-plugin',
  platforms: ['Android', 'Browser', 'iOS'],
})
@Injectable()
export class Mixpanel extends AwesomeCordovaNativePlugin {
  /**
   * If originalId is omitted, aliasId will be used as originalId.
   *
   * @param aliasId {string}
   * @param originalId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  alias(aliasId: string, originalId?: string): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  distinctId(): Promise<any> {
    return;
  }

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  flush(): Promise<any> {
    return;
  }

  /**
   * The usePeople parameter is used for the iOS Mixpanel SDK.
   *
   * @param distinctId {string}
   * @param usePeople {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  identify(distinctId: string, usePeople?: boolean): Promise<any> {
    return;
  }

  /**
   *
   * @param token {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  init(token: string): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getSuperProperties(): Promise<any> {
    return;
  }

  /**
   *
   * @param superProperties {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerSuperProperties(superProperties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param superProperties {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerSuperPropertiesOnce(superProperties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param superPropertyName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  unregisterSuperProperty(superPropertyName: string): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  reset(): Promise<any> {
    return;
  }

  /**
   *
   * @param eventName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  timeEvent(eventName: string): Promise<any> {
    return;
  }

  /**
   *
   * @param eventName {string}
   * @param eventProperties {any} optional
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3,
  })
  track(eventName: string, eventProperties?: any): Promise<any> {
    return;
  }
}

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-mixpanel',
  pluginRef: 'mixpanel.people',
  pluginName: 'Mixpanel',
})
@Injectable()
export class MixpanelPeople extends AwesomeCordovaNativePlugin {
  /**
   *
   * @param appendObject {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  append(appendObject: any): Promise<any> {
    return;
  }

  /**
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteUser(): Promise<any> {
    return;
  }

  /**
   *
   * @param distinctId {string}
   * @returns {Promise<any>}
   * @deprecated since 2016-11-21 - Use Mixpanel.identify instead.
   */
  @Cordova()
  identify(distinctId: string): Promise<any> {
    return;
  }

  /**
   *
   * @param peopleProperties {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  increment(peopleProperties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param pushId
   * @returns {Promise<any>}
   */
  @Cordova()
  setPushId(pushId: string): Promise<any> {
    return;
  }

  /**
   *
   * @param peopleProperties
   * @returns {Promise<any>}
   */
  @Cordova()
  set(peopleProperties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param peopleProperties {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  setOnce(peopleProperties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param amount {number}
   * @param chargeProperties
   * @returns {Promise<any>}
   */
  @Cordova()
  trackCharge(amount: number, chargeProperties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param propertiesArray
   * @returns {Promise<any>}
   */
  @Cordova()
  unset(propertiesArray: string[]): Promise<any> {
    return;
  }

  /**
   *
   * @param unionObject {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  union(unionObject: any): Promise<any> {
    return;
  }
}
