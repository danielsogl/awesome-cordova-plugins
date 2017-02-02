import { Plugin, Cordova } from './plugin';

/**
 * @name Appodeal
 * @description
 * Plugin to serve Appodeal ads through the Appodeal SDKs
 *
 * @usage
 * ```
 * import { Appodeal } from 'ionic-native';
 *
 * Appodeal.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Appodeal',
  plugin: 'com.appodeal.plugin',
  pluginRef: 'Appodeal',
  repo: 'https://github.com/appodeal/appodeal-cordova-plugin.git',
  platforms: [ 'ios', 'android' ]
})
export class Appodeal {

  static AD_TYPES = {
    INTERSTITIAL: 1,
    SKIPPABLE_VIDEO: 2,
    BANNER: 4,
    BANNER_BOTTOM: 8,
    BANNER_TOP: 16,
    REWARDED_VIDEO: 128,
    NON_SKIPPABLE_VIDEO: 256,
  };

  /**
   * initialize Appodeal SDK
   * @param {string} appKey
   * @param {number} adType
   */
  @Cordova()
  static initialize(appKey: string, adType: number): void {};

  /**
   * check if SDK has been initialized
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static isInitialized(): Promise<any> { return; };

  /**
   * show ad of specified type
   * @param {number} adType
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static show(adType: number): Promise<any> { return; };

  /**
   * show ad of specified type with placement options
   * @param {number} adType
   * @param {any} placement
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static showWithPlacement(adType: number,
    placement: any): Promise<any> { return; };

  /**
   * hide ad of specified type
   * @param {number} adType
   */
  @Cordova()
  static hide(adType: number): void {};

  /**
   * confirm use of ads of specified type
   * @param {number} adType
   */
  @Cordova()
  static confirm(adType: number): void {};

  /**
   * check if ad of specified type has been loaded
   * @param {number} adType
   */
  @Cordova()
  static isLoaded(adType: number): Promise<any> { return; };

  /**
   *
   * @param adType
   */
  @Cordova()
  static isPrecache(adType: number): Promise<any> { return; };

  /**
   *
   * @param adType
   * @param autoCache
   */
  @Cordova()
  static setAutoCache(adType: number, autoCache: any): void {};

  /**
   *
   * @param adType
   */
  @Cordova()
  static cache(adType: number): void {};

  /**
   *
   * @param set
   */
  @Cordova()
  static setOnLoadedTriggerBoth(set): void {};

  /**
   *
   * @param value
   */
  @Cordova()
  static setSmartBanners(value: any): void {};

  /**
   * 
   * @param value
   */
  @Cordova()
  static setBannerBackground(value: any): void {};

  /**
   * 
   * @param value
   */
  @Cordova()
  static setBannerAnimation(value: any): void {};

  /**
   * 
   * @param value
   */
  @Cordova()
  static set728x90Banners(value: any): void {};

  /**
   * 
   * @param logging
   */
  @Cordova()
  static setLogging(logging: boolean): void {};

  /**
   * 
   * @param testing
   */
  @Cordova()
  static setTesting(testing: boolean): void {};

  /**
   * 
   */
  @Cordova()
  static resetUUID(): void {};

  /**
   * 
   * @param callback
   */
  @Cordova()
  static getVersion(callback?: Function): void {};

  /**
   * 
   * @param network
   * @param adType
   */
  @Cordova()
  static disableNetwork(network: any, adType: number): void {};

  /**
   * 
   * @param network
   * @param adType
   */
  @Cordova()
  static disableNetworkType(network: any, adType: number): void {};

  /**
   * 
   */
  @Cordova()
  static disableLocationPermissionCheck(): void {};

  /**
   * 
   */
  @Cordova()
  static disableWriteExternalStoragePermissionCheck(): void {};

  /**
   * 
   * @param listener
   */
  @Cordova()
  static enableInterstitialCallbacks(listener: Function): void {};

  /**
   * 
   * @param listener
   */
  @Cordova()
  static enableSkippableVideoCallbacks(listener: Function): void {};

  /**
   * 
   * @param listener
   */
  @Cordova()
  static enableNonSkippableVideoCallbacks(listener: Function): void {};

  /**
   * 
   * @param listener
   */
  @Cordova()
  static enableBannerCallbacks(listener: Function): void {};

  /**
   * 
   * @param listener
   */
  @Cordova()
  static enableRewardedVideoCallbacks(listener: Function): void {};

  /**
   * 
   * @param name
   * @param rule
   */
  @Cordova()
  static setCustomBooleanRule(name: any, rule: any): void {};

  /**
   * 
   * @param name
   * @param rule
   */
  @Cordova()
  static setCustomIntegerRule(name: any, rule: any): void {};

  /**
   * 
   * @param name
   * @param rule
   */
  @Cordova()
  static setCustomDoubleRule(name: any, rule: any): void {};

  /**
   * 
   * @param name
   * @param rule
   */
  @Cordova()
  static setCustomStringRule(name: any, rule: any): void {};

  /**
   * 
   * @param id
   */
  @Cordova()
  static setUserId(id: any): void {};

  /**
   * 
   * @param email
   */
  @Cordova()
  static setEmail(email: any): void {};

  /**
   * 
   * @param birthday
   */
  @Cordova()
  static setBirthday(birthday: any): void {};

  /**
   * 
   * @param age
   */
  @Cordova()
  static setAge(age: any): void {};

  /**
   * 
   * @param gender
   */
  @Cordova()
  static setGender(gender: any): void {};

  /**
   * 
   * @param occupation
   */
  @Cordova()
  static setOccupation(occupation: any): void {};

  /**
   * 
   * @param relation
   */
  @Cordova()
  static setRelation(relation: any): void {};

  /**
   * 
   * @param smoking
   */
  @Cordova()
  static setSmoking(smoking: any): void {};

  /**
   * 
   * @param alcohol
   */
  @Cordova()
  static setAlcohol(alcohol: any): void {};

  /**
   * 
   * @param interests
   */
  @Cordova()
  static setInterests(interests: any): void {};

}
