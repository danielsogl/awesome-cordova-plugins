import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Appodeal
 * @description
 * Plugin to serve ads through native Appodeal SDKs
 *
 * @usage
 * ```typescript
 * import { Appodeal } from '@ionic-native/appodeal';
 *
 * constructor(private appodeal: Appodeal) {
 *
 *    const appKey = '<your app key>';
 *    appodeal.initialize(appKey, appodeal.AD_TYPES.REWARDED_VIDEO);
 *    appodeal.show(appodeal.AD_TYPES.REWARDED_VIDEO);
 *
 * }
 * ```
 */
@Plugin({
  pluginName: 'Appodeal',
  plugin: 'https://github.com/appodeal/appodeal-cordova-plugin.git',
  pluginRef: 'Appodeal',
  repo: 'https://github.com/appodeal/appodeal-cordova-plugin',
  platforms: ['iOS', 'Android']
})
@Injectable()
export class Appodeal extends IonicNativePlugin {
  // available types of advertisements
  readonly AD_TYPES = {
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
  initialize(appKey: string, adType: number): void {}

  /**
   * check if SDK has been initialized
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isInitialized(): Promise<any> {
    return;
  }

  /**
   * show ad of specified type
   * @param {number} adType
   * @returns {Promise<boolean>}
   */
  @Cordova()
  show(adType: number): Promise<any> {
    return;
  }

  /**
   * show ad of specified type with placement options
   * @param {number} adType
   * @param {any} placement
   * @returns {Promise<boolean>}
   */
  @Cordova()
  showWithPlacement(adType: number, placement: any): Promise<any> {
    return;
  }

  /**
   * hide ad of specified type
   * @param {number} adType
   */
  @Cordova()
  hide(adType: number): void {}

  /**
   * confirm use of ads of specified type
   * @param {number} adType
   * @returns {Promise<any>}
   */
  @Cordova()
  canShow(adType: number): Promise<any> {
    return;
  }

  /**
   * check if ad of specified type has been loaded
   * @param {number} adType
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isLoaded(adType: number): Promise<any> {
    return;
  }

  /**
   * check if ad of specified
   * @param {number} adType
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isPrecache(adType: number): Promise<any> {
    return;
  }

  /**
   *
   * @param {number} adType
   * @param autoCache
   */
  @Cordova()
  setAutoCache(adType: number, autoCache: any): void {}

  /**
   * forcefully cache an ad by type
   * @param {number} adType
   */
  @Cordova()
  cache(adType: number): void {}

  /**
   *
   * @param {boolean} set
   */
  @Cordova()
  setTriggerOnLoadedOnPrecache(set: boolean): void {}

  /**
   * enable or disable Smart Banners
   * @param {boolean} enabled
   */
  @Cordova()
  setSmartBanners(enabled: boolean): void {}

  /**
   * enable or disable banner backgrounds
   * @param {boolean} enabled
   */
  @Cordova()
  setBannerBackground(enabled: boolean): void {}

  /**
   * enable or disable banner animations
   * @param {boolean} enabled
   */
  @Cordova()
  setBannerAnimation(enabled: boolean): void {}

  /**
   *
   * @param value
   */
  @Cordova()
  set728x90Banners(value: any): void {}

  /**
   * enable or disable logging
   * @param {boolean} logging
   */
  @Cordova()
  setLogLevel(logging: boolean): void {}

  /**
   * enable or disable testing mode
   * @param {boolean} testing
   */
  @Cordova()
  setTesting(testing: boolean): void {}

  /**
   * reset device ID
   */
  @Cordova()
  resetUUID(): void {}

  /**
   * get version of Appdeal SDK
   */
  @Cordova()
  getVersion(): Promise<any> {
    return;
  }

  /**
   *
   * @param {string} network
   * @param {number} adType
   */
  @Cordova()
  disableNetwork(network?: string, adType?: number): void {}

  /**
   *
   * @param {string} network
   * @param {number} adType
   */
  @Cordova()
  disableNetworkType(network?: string, adType?: number): void {}

  /**
   * disable Location permissions for Appodeal SDK
   */
  @Cordova()
  disableLocationPermissionCheck(): void {}

  /**
   * disable Storage permissions for Appodeal SDK
   */
  @Cordova()
  disableWriteExternalStoragePermissionCheck(): void {}

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  enableInterstitialCallbacks(enabled: boolean): void {}

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  enableSkippableVideoCallbacks(enabled: boolean): void {}

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  enableNonSkippableVideoCallbacks(enabled: boolean): void {}

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  enableBannerCallbacks(enabled: boolean): void {}

  /**
   * enable event listeners
   * @param {boolean} enabled
   */
  @Cordova()
  enableRewardedVideoCallbacks(enabled: boolean): void {}

  /**
   *
   * @param {string} name - name of rule
   * @param {boolean} value
   */
  @Cordova()
  setCustomBooleanRule(name: string, value: boolean): void {}

  /**
   *
   * @param {string} name - name of rule
   * @param {number} value
   */
  @Cordova()
  setCustomIntegerRule(name: string, value: number): void {}

  /**
   * set rule with float value
   * @param {string} name
   * @param {number} value
   */
  @Cordova()
  setCustomDoubleRule(name: string, value: number): void {}

  /**
   * set rule with string value
   * @param {string} name - name of rule
   * @param {string} value
   */
  @Cordova()
  setCustomStringRule(name: string, value: string): void {}

  /**
   * set ID preference in Appodeal for current user
   * @param id
   */
  @Cordova()
  setUserId(id: any): void {}

  /**
   * set Email preference in Appodeal for current user
   * @param email
   */
  @Cordova()
  setEmail(email: any): void {}

  /**
   * set Birthday preference in Appodeal for current user
   * @param birthday
   */
  @Cordova()
  setBirthday(birthday: any): void {}

  /**
   * et Age preference in Appodeal for current user
   * @param age
   */
  @Cordova()
  setAge(age: any): void {}

  /**
   * set Gender preference in Appodeal for current user
   * @param gender
   */
  @Cordova()
  setGender(gender: any): void {}

  /**
   * set Occupation preference in Appodeal for current user
   * @param occupation
   */
  @Cordova()
  setOccupation(occupation: any): void {}

  /**
   * set Relation preference in Appodeal for current user
   * @param relation
   */
  @Cordova()
  setRelation(relation: any): void {}

  /**
   * set Smoking preference in Appodeal for current user
   * @param smoking
   */
  @Cordova()
  setSmoking(smoking: any): void {}

  /**
   * set Alcohol preference in Appodeal for current user
   * @param alcohol
   */
  @Cordova()
  setAlcohol(alcohol: any): void {}

  /**
   * set Interests preference in Appodeal for current user
   * @param interests
   */
  @Cordova()
  setInterests(interests: any): void {}

  @Cordova({
    eventObservable: true,
    event: 'onInterstitialLoaded',
    element: document
  })
  onInterstitialLoaded(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onInterstitialFailedToLoad',
    element: document
  })
  onInterstitialFailedToLoad(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onInterstitialShown',
    element: document
  })
  onInterstitialShown(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onInterstitialClicked',
    element: document
  })
  onInterstitialClicked(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onInterstitialClosed',
    element: document
  })
  onInterstitialClosed(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onSkippableVideoLoaded',
    element: document
  })
  onSkippableVideoLoaded(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onSkippableVideoFailedToLoad',
    element: document
  })
  onSkippableVideoFailedToLoad(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onSkippableVideoShown',
    element: document
  })
  onSkippableVideoShown(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onSkippableVideoFinished',
    element: document
  })
  onSkippableVideoFinished(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onSkippableVideoClosed',
    element: document
  })
  onSkippableVideoClosed(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onRewardedVideoLoaded',
    element: document
  })
  onRewardedVideoLoaded(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onRewardedVideoFailedToLoad',
    element: document
  })
  onRewardedVideoFailedToLoad(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onRewardedVideoShown',
    element: document
  })
  onRewardedVideoShown(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onRewardedVideoFinished',
    element: document
  })
  onRewardedVideoFinished(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onRewardedVideoClosed',
    element: document
  })
  onRewardedVideoClosed(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onNonSkippableVideoLoaded',
    element: document
  })
  onNonSkippableVideoLoaded(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onNonSkippableVideoFailedToLoad',
    element: document
  })
  onNonSkippableVideoFailedToLoad(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onNonSkippableVideoShown',
    element: document
  })
  onNonSkippableVideoShown(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onNonSkippableVideoFinished',
    element: document
  })
  onNonSkippableVideoFinished(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onNonSkippableVideoClosed',
    element: document
  })
  onNonSkippableVideoClosed(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onBannerClicked',
    element: document
  })
  onBannerClicked(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onBannerFailedToLoad',
    element: document
  })
  onBannerFailedToLoad(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onBannerLoaded',
    element: document
  })
  onBannerLoaded(): Observable<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'onBannerShown',
    element: document
  })
  onBannerShown(): Observable<any> {
    return;
  }

  @Cordova()
  getRewardParametersForPlacement(placement: string): Promise<any> {
    return;
  }

  @Cordova()
  getRewardParameters(): Promise<any> {
    return;
  }

  @Cordova()
  canShowWithPlacement(adType: string, placement: string): Promise<any> {
    return;
  }

  @Cordova({
    platforms: ['Android']
  })
  showTestScreen(value: any): void {}

  @Cordova()
  muteVideosIfCallsMuted(value: any): Promise<any> {
    return;
  }

  @Cordova()
  setChildDirectedTreatment(value: boolean): Promise<any> {
    return;
  }
}
