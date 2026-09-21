import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, Cordova, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface InitializeConfig {
  /**
   * @deprecated Never populated by the native SDKs. Use `hasUserConsent` instead.
   */
  hasUserConsentValue?: boolean;
  /**
   * @deprecated Never populated by the native SDKs, and the underlying `isAgeRestrictedUser`
   * field was removed upstream in cordova-plugin-applovin-max@2.0.0.
   */
  isAgeRestrictedUserValue?: boolean;
  /**
   * @deprecated Never populated by the native SDKs. Use `isDoNotSell` instead.
   */
  isDoNotSellValue?: boolean;
  /**
   * @deprecated Never populated by the native SDKs. Use `isTablet` instead.
   */
  isTabletValue?: boolean;
  hasUserConsent: boolean;
  isDoNotSell: boolean;
  isTablet: boolean;
  countryCode: string;
}

export interface AdInfo {
  adUnitId: string;
  creativeId: string;
  networkName: string;
  placement: string;
  revenue: number;
}

export interface AdRewardInfo extends AdInfo {
  rewardLabel: string;
  rewardAmount: number;
}

export enum AdViewPosition {
  TOP_CENTER = 'top_center',
  TOP_RIGHT = 'top_right',
  CENTERED = 'centered',
  CENTER_LEFT = 'center_left',
  CENTER_RIGHT = 'center_right',
  BOTTOM_LEFT = 'bottom_left',
  BOTTOM_CENTER = 'bottom_center',
  BOTTOM_RIGHT = 'bottom_right',
}

/**
 * @deprecated Only produced by the now-removed `getConsentDialogState` method
 * (removed upstream in cordova-plugin-applovin-max@2.0.0).
 */
export enum ConsentDialogState {
  UNKNOWN = 0,
  APPLIES = 1,
  DOES_NOT_APPLY = 2,
}

/**
 * @name Applovin
 * @description
 * This plugin allows you to easily configure, integrate and interact with Applovin ads.
 * @usage
 * ```typescript
 * import { Applovin } from '@awesome-cordova-plugins/applovin';
 *
 *
 * constructor(private applovin: Applovin) { }
 *
 *
 * this.applovin.initialize(sdkKey)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * this.applovin.loadInterstitial(adUnitId)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * this.applovin.showInterstitial(adUnitId, placement)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 */
@Plugin({
  pluginName: 'Applovin',
  plugin: 'cordova-plugin-applovin-max',
  pluginRef: 'applovin',
  repo: 'https://github.com/AppLovin/AppLovin-MAX-Cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Applovin extends AwesomeCordovaNativePlugin {
  /**
   * Initialize the AppLovin SDK.
   *
   * @param {string} sdkKey The SDK key generated for your AppLovin account.
   */
  @Cordova()
  initialize(sdkKey: string): Promise<InitializeConfig> {
    return;
  }

  /**
   * Check whether the SDK has been initialized.
   */
  @Cordova()
  isInitialized(): Promise<boolean> {
    return;
  }

  @Cordova()
  showMediationDebugger(): Promise<any> {
    return;
  }

  /**
   * @deprecated Removed upstream in cordova-plugin-applovin-max@2.0.0.
   */
  @Cordova()
  getConsentDialogState(): Promise<ConsentDialogState> {
    return;
  }

  @Cordova()
  setHasUserConsent(hasUserConsent: boolean): Promise<any> {
    return;
  }

  @Cordova()
  hasUserConsent(): Promise<boolean> {
    return;
  }

  /**
   * @deprecated Removed upstream in cordova-plugin-applovin-max@2.0.0.
   */
  @Cordova()
  setIsAgeRestrictedUser(isAgeRestrictedUser: boolean): Promise<any> {
    return;
  }

  /**
   * @deprecated Removed upstream in cordova-plugin-applovin-max@2.0.0.
   */
  @Cordova()
  isAgeRestrictedUser(): Promise<boolean> {
    return;
  }

  @Cordova()
  setDoNotSell(isDoNotSell: boolean): Promise<any> {
    return;
  }

  @Cordova()
  isDoNotSell(): Promise<boolean> {
    return;
  }

  @Cordova()
  isTablet(): Promise<boolean> {
    return;
  }

  @Cordova()
  setUserId(userId: string): Promise<any> {
    return;
  }

  /**
   * @param {boolean} muted Whether ads should be muted.
   */
  @Cordova()
  setMuted(muted: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setVerboseLogging(verboseLoggingEnabled: boolean): Promise<any> {
    return;
  }

  @Cordova()
  setTestDeviceAdvertisingIds(advertisingIds: string[]): Promise<any> {
    return;
  }

  /** SEGMENT TARGETING */

  /**
   * Add a segment for segment targeting. Must be called before `initialize()`.
   *
   * @param {number} key The segment key.
   * @param {number[]} values The segment values.
   */
  @Cordova()
  addSegment(key: number, values: number[]): Promise<any> {
    return;
  }

  @Cordova()
  trackEvent(event: string, parameters?: object): Promise<any> {
    return;
  }

  /** BANNERS */

  @Cordova()
  createBanner(adUnitId: string, position: AdViewPosition): Promise<any> {
    return;
  }

  @Cordova()
  setBannerBackgroundColor(adUnitId: string, hexColorCode: string): Promise<any> {
    return;
  }

  @Cordova()
  setBannerPlacement(adUnitId: string, placement: string): Promise<any> {
    return;
  }

  @Cordova()
  updateBannerPosition(adUnitId: string, position: AdViewPosition): Promise<any> {
    return;
  }

  @Cordova()
  setBannerExtraParameter(adUnitId: string, key: string, value: string): Promise<any> {
    return;
  }

  @Cordova()
  showBanner(adUnitId: string): Promise<any> {
    return;
  }

  @Cordova()
  hideBanner(adUnitId: string): Promise<any> {
    return;
  }

  @Cordova()
  destroyBanner(adUnitId: string): Promise<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnBannerAdLoadedEvent',
  })
  onBannerAdLoaded(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnBannerAdLoadFailedEvent',
  })
  onBannerAdLoadFailed(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnBannerAdClickedEvent',
  })
  onBannerAdClicked(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnBannerAdExpandedEvent',
  })
  onBannerAdExpanded(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnBannerAdCollapsedEvent',
  })
  onBannerAdCollapsed(): Observable<AdInfo> {
    return;
  }

  /** MRECS */

  @Cordova()
  createMRec(adUnitId: string, position: AdViewPosition): Promise<any> {
    return;
  }

  @Cordova()
  setMRecBackgroundColor(adUnitId: string, hexColorCode: string): Promise<any> {
    return;
  }

  @Cordova()
  setMRecPlacement(adUnitId: string, placement: string): Promise<any> {
    return;
  }

  @Cordova()
  updateMRecPosition(adUnitId: string, position: AdViewPosition): Promise<any> {
    return;
  }

  @Cordova()
  setMRecExtraParameter(adUnitId: string, key: string, value: string): Promise<any> {
    return;
  }

  @Cordova()
  showMRec(adUnitId: string): Promise<any> {
    return;
  }

  @Cordova()
  hideMRec(adUnitId: string): Promise<any> {
    return;
  }

  @Cordova()
  destroyMRec(adUnitId: string): Promise<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnMRecAdLoadedEvent',
  })
  onMRecAdLoaded(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnMRecAdLoadFailedEvent',
  })
  onMRecAdLoadFailed(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnMRecAdClickedEvent',
  })
  onMRecAdClicked(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnMRecAdExpandedEvent',
  })
  onMRecAdExpanded(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnMRecAdCollapsedEvent',
  })
  onMRecAdCollapsed(): Observable<AdInfo> {
    return;
  }

  /** INTERSTITIALS */

  @Cordova()
  loadInterstitial(adUnitId: string): Promise<any> {
    return;
  }

  /**
   * @param {string} adUnitId The ad unit id to check.
   */
  @Cordova()
  isInterstitialReady(adUnitId: string): Promise<boolean> {
    return;
  }

  @Cordova()
  showInterstitial(adUnitId: string, placement?: string): Promise<any> {
    return;
  }

  @Cordova()
  setInterstitialExtraParameter(adUnitId: string, key: string, value: string): Promise<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnInterstitialLoadedEvent',
  })
  onInterstitialLoaded(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnInterstitialClickedEvent',
  })
  onInterstitialClicked(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnInterstitialLoadFailedEvent',
  })
  onInterstitialLoadFailed(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnInterstitialDisplayedEvent',
  })
  onInterstitialDisplayed(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnInterstitialHiddenEvent',
  })
  onInterstitialHidden(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnInterstitialAdFailedToDisplayEvent',
  })
  onInterstitialAdFailedToDisplay(): Observable<AdInfo> {
    return;
  }

  /** REWARDED ADS */

  @Cordova()
  loadRewardedAd(adUnitId: string): Promise<any> {
    return;
  }

  /**
   * @param {string} adUnitId The ad unit id to check.
   */
  @Cordova()
  isRewardedAdReady(adUnitId: string): Promise<boolean> {
    return;
  }

  @Cordova()
  showRewardedAd(adUnitId: string, placement?: string): Promise<any> {
    return;
  }

  @Cordova()
  setRewardedAdExtraParameter(adUnitId: string, key: string, value: string): Promise<any> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnRewardedAdLoadedEvent',
  })
  onRewardedAdLoaded(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnRewardedAdClickedEvent',
  })
  onRewardedAdClicked(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnRewardedAdLoadFailedEvent',
  })
  onRewardedAdLoadFailed(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnRewardedAdDisplayedEvent',
  })
  onRewardedAdDisplayed(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnRewardedAdHiddenEvent',
  })
  onRewardedAdHidden(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnRewardedAdFailedToDisplayEvent',
  })
  onRewardedAdAdFailedToDisplay(): Observable<AdInfo> {
    return;
  }

  @Cordova({
    eventObservable: true,
    event: 'OnRewardedAdReceivedRewardEvent',
  })
  onRewardedAdReceivedReward(): Observable<AdRewardInfo> {
    return;
  }
}
