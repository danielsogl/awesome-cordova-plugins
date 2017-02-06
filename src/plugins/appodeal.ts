import { Plugin, Cordova } from './plugin';
import { Observable } from 'rxjs';

/**
 * @name Appodeal
 * @description
 * Plugin to serve ads through native Appodeal SDKs
 *
 * @usage
 * ```
 * import { Appodeal } from 'ionic-native';
 *
 * let appKey = '<your app key>';
 * Appodeal.initialize(appKey, Appodeal.AD_TYPES.REWARDED_VIDEO);
 * Appodeal.show(Appodeal.AD_TYPES.REWARDED_VIDEO);
 *
 * ```
 */
@Plugin({
  pluginName: 'Appodeal',
  plugin: 'https://github.com/appodeal/appodeal-cordova-plugin',
  pluginRef: 'Appodeal',
  repo: 'https://github.com/appodeal/appodeal-cordova-plugin.git',
  platforms: [ 'ios', 'android' ]
})
export class Appodeal {
  // available types of advertisements
  static readonly AD_TYPES = {
    INTERSTITIAL: 1,
    SKIPPABLE_VIDEO: 2,
    BANNER: 4,
    BANNER_BOTTOM: 8,
    BANNER_TOP: 16,
    REWARDED_VIDEO: 128,
    NON_SKIPPABLE_VIDEO: 256
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
  static showWithPlacement(
    adType: number,
    placement: any
  ): Promise<any> { return; };

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
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static isLoaded(adType: number): Promise<any> { return; };

  /**
   * check if ad of specified
   * @param {number} adType
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static isPrecache(adType: number): Promise<any> { return; };

  /**
   *
   * @param {number} adType
   * @param autoCache
   */
  @Cordova()
  static setAutoCache(adType: number, autoCache: any): void {};

  /**
   * forcefully cache an ad by type
   * @param {number} adType
   */
  @Cordova()
  static cache(adType: number): void {};

  /**
   *
   * @param {boolean} set
   */
  @Cordova()
  static setOnLoadedTriggerBoth(set: boolean): void {};

  /**
   * enable or disable Smart Banners
   * @param {boolean} enabled
   */
  @Cordova()
  static setSmartBanners(enabled: boolean): void {};

  /**
   * enable or disable banner backgrounds
   * @param {boolean} enabled
   */
  @Cordova()
  static setBannerBackground(enabled: boolean): void {};

  /**
   * enable or disable banner animations
   * @param {boolean} enabled
   */
  @Cordova()
  static setBannerAnimation(enabled: boolean): void {};

  /**
   *
   * @param value
   */
  @Cordova()
  static set728x90Banners(value: any): void {};

  /**
   * enable or disable logging
   * @param {boolean} logging
   */
  @Cordova()
  static setLogging(logging: boolean): void {};

  /**
   * enable or disable testing mode
   * @param {boolean} testing
   */
  @Cordova()
  static setTesting(testing: boolean): void {};

  /**
   * reset device ID
   */
  @Cordova()
  static resetUUID(): void {};

  /**
   * get version of Appdeal SDK
   */
  @Cordova()
  static getVersion(): Promise<any> { return; };

  /**
   *
   * @param {string} network
   * @param {number} adType
   */
  @Cordova()
  static disableNetwork(network?: string, adType?: number): void {};

  /**
   *
   * @param {string} network
   * @param {number} adType
   */
  @Cordova()
  static disableNetworkType(network?: string, adType?: number): void {};

  /**
   * disable Location permissions for Appodeal SDK
   */
  @Cordova()
  static disableLocationPermissionCheck(): void {};

  /**
   * disable Storage permissions for Appodeal SDK
   */
  @Cordova()
  static disableWriteExternalStoragePermissionCheck(): void {};

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  static enableInterstitialCallbacks(enabled: boolean): void {};

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  static enableSkippableVideoCallbacks(enabled: boolean): void {};

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  static enableNonSkippableVideoCallbacks(enabled: boolean): void {};

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  static enableBannerCallbacks(enabled: boolean): void {};

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  static enableRewardedVideoCallbacks(enabled: boolean): void {};

  /**
   *
   * @param {string} name - name of rule
   * @param {boolean} value
   */
  @Cordova()
  static setCustomBooleanRule(name: string, value: boolean): void {};

  /**
   *
   * @param {string} name - name of rule
   * @param {number} value
   */
  @Cordova()
  static setCustomIntegerRule(name: string, value: number): void {};

  /**
   * set rule with float value
   * @param {string} name
   * @param {number} value
   */
  @Cordova()
  static setCustomDoubleRule(name: string, value: number): void {};

  /**
   * set rule with string value
   * @param {string} name - name of rule
   * @param {string} value
   */
  @Cordova()
  static setCustomStringRule(name: string, value: string): void {};

  /**
   * set ID preference in Appodeal for current user
   * @param id
   */
  @Cordova()
  static setUserId(id: any): void {};

  /**
   * set Email preference in Appodeal for current user
   * @param email
   */
  @Cordova()
  static setEmail(email: any): void {};

  /**
   * set Birthday preference in Appodeal for current user
   * @param birthday
   */
  @Cordova()
  static setBirthday(birthday: any): void {};

  /**
   * et Age preference in Appodeal for current user
   * @param age
   */
  @Cordova()
  static setAge(age: any): void {};

  /**
   * set Gender preference in Appodeal for current user
   * @param gender
   */
  @Cordova()
  static setGender(gender: any): void {};

  /**
   * set Occupation preference in Appodeal for current user
   * @param occupation
   */
  @Cordova()
  static setOccupation(occupation: any): void {};

  /**
   * set Relation preference in Appodeal for current user
   * @param relation
   */
  @Cordova()
  static setRelation(relation: any): void {};

  /**
   * set Smoking preference in Appodeal for current user
   * @param smoking
   */
  @Cordova()
  static setSmoking(smoking: any): void {};

  /**
   * set Alcohol preference in Appodeal for current user
   * @param alcohol
   */
  @Cordova()
  static setAlcohol(alcohol: any): void {};

  /**
   * set Interests preference in Appodeal for current user
   * @param interests
   */
  @Cordova()
  static setInterests(interests: any): void {};

  /*********************
   * event Observables *
   *********************/

  static onInterstitialLoaded(): Observable<any> {
    return Observable.fromEvent(document, 'onInterstitialLoaded');
  }

  static onInterstitialFailedToLoad(): Observable<any> {
    return Observable.fromEvent(document, 'onInterstitialFailedToLoad');
  }

  static onInterstitialShown(): Observable<any> {
    return Observable.fromEvent(document, 'onInterstitialShown');
  }

  static onInterstitialClicked(): Observable<any> {
    return Observable.fromEvent(document, 'onInterstitialClicked');
  }

  static onInterstitialClosed(): Observable<any> {
    return Observable.fromEvent(document, 'onInterstitialClosed');
  }

  static onSkippableVideoLoaded(): Observable<any> {
    return Observable.fromEvent(document, 'onSkippableVideoLoaded');
  }

  static onSkippableVideoFailedToLoad(): Observable<any> {
    return Observable.fromEvent(document, 'onSkippableVideoFailedToLoad');
  }

  static onSkippableVideoShown(): Observable<any> {
    return Observable.fromEvent(document, 'onSkippableVideoShown');
  }

  static onSkippableVideoFinished(): Observable<any> {
    return Observable.fromEvent(document, 'onSkippableVideoFinished');
  }

  static onSkippableVideoClosed(): Observable<any> {
    return Observable.fromEvent(document, 'onSkippableVideoClosed');
  }

  static onRewardedVideoLoaded(): Observable<any> {
    return Observable.fromEvent(document, 'onRewardedVideoLoaded');
  }

  static onRewardedVideoFailedToLoad(): Observable<any> {
    return Observable.fromEvent(document, 'onRewardedVideoFailedToLoad');
  }

  static onRewardedVideoShown(): Observable<any> {
    return Observable.fromEvent(document, 'onRewardedVideoShown');
  }

  static onRewardedVideoFinished(): Observable<any> {
    return Observable.fromEvent(document, 'onRewardedVideoFinished');
  }

  static onRewardedVideoClosed(): Observable<any> {
    return Observable.fromEvent(document, 'onRewardedVideoClosed');
  }

  static onNonSkippableVideoLoaded(): Observable<any> {
    return Observable.fromEvent(document, 'onNonSkippableVideoLoaded');
  }

  static onNonSkippableVideoFailedToLoad(): Observable<any> {
    return Observable.fromEvent(document, 'onNonSkippableVideoFailedToLoad');
  }

  static onNonSkippableVideoShown(): Observable<any> {
    return Observable.fromEvent(document, 'onNonSkippableVideoShown');
  }

  static onNonSkippableVideoFinished(): Observable<any> {
    return Observable.fromEvent(document, 'onNonSkippableVideoFinished');
  }

  static onNonSkippableVideoClosed(): Observable<any> {
    return Observable.fromEvent(document, 'onNonSkippableVideoClosed');
  }

  static onBannerClicked(): Observable<any> {
    return Observable.fromEvent(document, 'onBannerClicked');
  }

  static onBannerFailedToLoad(): Observable<any> {
    return Observable.fromEvent(document, 'onBannerFailedToLoad');
  }

  static onBannerLoaded(): Observable<any> {
    return Observable.fromEvent(document, 'onBannerLoaded');
  }

  static onBannerShown(): Observable<any> {
    return Observable.fromEvent(document, 'onBannerShown');
  }
}
