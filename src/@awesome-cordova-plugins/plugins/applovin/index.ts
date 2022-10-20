import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, Cordova, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface InitializeConfig {
  hasUserConsentValue: boolean;
  isAgeRestrictedUserValue: boolean;
  isDoNotSellValue: boolean;
  isTabletValue: boolean;
}

export interface AdInfo {
  adUnitId: string;
  creativeId: string;
  networkName: string;
  placement: string;
  revenue: number;
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

  @Cordova()
  showMediationDebugger(): Promise<any> {
    return;
  }

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

  @Cordova()
  setIsAgeRestrictedUser(isAgeRestrictedUser: boolean): Promise<any> {
    return;
  }

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

  @Cordova()
  setMuted(): Promise<boolean> {
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

  /** INTERSTITIALS */

  @Cordova()
  loadInterstitial(adUnitId: string): Promise<any> {
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
    event: 'OnRewardedAdAdFailedToDisplayEvent',
  })
  onRewardedAdAdFailedToDisplay(): Observable<AdInfo> {
    return;
  }
}
