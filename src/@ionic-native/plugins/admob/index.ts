import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface AdmobOptions {
  /**
   * Your publisher id code from your AdMob account
   */
  publisherId: string;

  /**
   * (Optional) Your interstitial id code from your AdMob account. Defaults to publisherId
   */
  interstitialAdId?: string;

  /**
   * (Optional) Your rewarded id code from your AdMob account. Defaults to publisherId
   */
  rewardedAdId?: string;

  /**
   * (Optional) Your tappx id for iOS apps. If Admob is configured, it is also used to backfill your lost inventory when there are no Admob ads available
   */
  tappxIdiOS?: string;

  /**
   * (Optional) Your tappx id for Android apps. Admob is configured, it is also used to backfill your lost inventory when there are no Admob ads available
   */
  tappxIdAndroid?: string;

  /**
   * (Optional) If any of tappxId is present, it tells the percentage of traffic diverted to tappx. Defaults to 0.5 (50% of the traffic will be requested to Tappx)
   */
  tappxShare?: number;

  /**
   * (Optional) Indicates whether to put banner ads at top when set to true or at bottom when set to false. Defaults to false
   */
  bannerAtTop?: boolean;

  /**
   * (Optional) Indicates the size of banner ads
   */
  adSize?: string;

  /**
   * (Optional) Allow banner overlap webview. Default false
   */
  overlap?: boolean;

  /**
   * (Optional) Set to true to avoid ios7 status bar overlap. Default false
   */
  offsetStatusBar?: boolean;

  /**
   * (Optional) Set to true to receive test ads (do not test with real ads as your account may be banned). Defaults to false
   */
  isTesting?: boolean;

  /**
   * (Options) A JSON object with additional {key: value} pairs
   */
  adExtras?: any;

  /**
   * (Optional) Auto show banner ads when available (onAdLoaded event is called). Defaults to true
   */
  autoShowBanner?: boolean;

  /**
   * (Optional) Auto show interstitial asd when available (onAdLoaded event is called). Defaults to true
   */
  autoShowInterstitial?: boolean;

  /**
   * (Optional) Auto show rewarded ads when available (onAdLoaded event is called). Defaults to true
   */
  autoShowRewarded?: boolean;
}

/**
 * @name Admob
 * @description
 * Most complete Admob plugin with support for [Tappx](http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6) ads.
 * Monetize your apps and games with AdMob ads, using latest Google AdMob SDK. With this plugin you can show AdMob ads easily!
 *
 * **Supports:**
 * - Banner ads (top and bottom)
 * - Interstitial ads
 * - Rewarded ads
 * - [Tappx](http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6) ads
 *
 * @usage
 * ```typescript
 * import { Admob, AdmobOptions } from '@ionic-native/admob';
 *
 *
 * constructor(private admob: Admob) {
 *     // Admob options config
 *     const admobOptions: AdmobOptions = {
 *       publisherId: 'XXX-XXXX-XXXX',
 *       interstitialAdId: 'XXX-XXXX-XXXX',
 *       rewardedAdId: 'XXX-XXXX-XXXX',
 *       isTesting: true,
 *       autoShowBanner: false,
 *       autoShowInterstitial: false,
 *       autoShowRewarded: false,
 *       adSize: this.admob.AD_SIZE.BANNER
 *     };
 *
 *     // Set admob options
 *     this.admob.setOptions(admobOptions)
 *       .then(() => console.log('Admob options have been successfully set'))
 *       .catch(err => console.error('Error setting admob options:', err));
 * }
 *
 *
 *
 * // (Optionally) Load banner ad, in order to have it ready to show
 * this.admob.createBannerView()
 *   .then(() => console.log('Banner ad loaded'))
 *   .catch(err => console.error('Error loading banner ad:', err));
 *
 *
 * // Show banner ad (createBannerView must be called before and onAdLoaded() event raised)
 * this.admob.onAdLoaded().subscribe((ad) => {
 *   if (ad.adType === this.admob.AD_TYPE.BANNER) {
 *     this.admob.showBannerAd()
 *       .then(() => console.log('Banner ad shown'))
 *       .catch(err => console.error('Error showing banner ad:', err));
 *   }
 * });
 *
 *
 * // Hide banner ad, but do not destroy it, so it can be shown later on
 * // See destroyBannerView in order to hide and destroy banner ad
 * this.admob.showBannerAd(false)
 *   .then(() => console.log('Banner ad hidden'))
 *   .catch(err => console.error('Error hiding banner ad:', err));
 *
 *
 *
 * // Request an interstitial ad, in order to be shown later on
 * // It is possible to autoshow it via options parameter, see docs
 * this.admob.requestInterstitialAd()
 *   .then(() => console.log('Interstitial ad loaded'))
 *   .catch(err => console.error('Error loading interstitial ad:', err));
 *
 *
 * // Show an interstitial ad (requestInterstitialAd must be called before)
 * this.admob.onAdLoaded().subscribe((ad) => {
 *   if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
 *     this.admob.showInterstitialAd()
 *       .then(() => console.log('Interstitial ad shown'))
 *       .catch(err => console.error('Error showing interstitial ad:', err));
 *   }
 * });
 *
 *
 * // Request a rewarded ad
 * this.admob.requestRewardedAd()
 *   .then(() => console.log('Rewarded ad loaded'))
 *   .catch(err => console.error('Error loading rewarded ad:', err));
 *
 *
 * // Show rewarded ad (requestRewardedAd must be called before)
 * this.admob.onAdLoaded().subscribe((ad) => {
 *   if (ad.adType === this.admob.AD_TYPE.REWARDED) {
 *     this.admob.showRewardedAd()
 *       .then(() => console.log('Rewarded ad shown'))
 *       .catch(err => console.error('Error showing rewarded ad:', err));
 *   }
 * });
 *
 *
 * // Hide and destroy banner or interstitial ad
 * this.admob.destroyBannerView()
 *   .then(() => console.log('Banner or interstitial ad destroyed'))
 *   .catch(err => console.error('Error destroying banner or interstitial ad:', err));
 *
 *
 *
 * // On Ad loaded event
 * this.admob.onAdLoaded().subscribe((ad) => {
 *   if (ad.adType === this.admob.AD_TYPE.BANNER) {
 *     console.log('Banner ad is loaded');
 *     this.admob.showBannerAd();
 *   } else if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
 *     console.log('Interstitial ad is loaded');
 *     this.admob.showInterstitialAd();
 *   } else if (ad.adType === this.admob.AD_TYPE.REWARDED) {
 *     console.log('Rewarded ad is loaded');
 *     this.admob.showRewardedAd();
 *   }
 * });
 *
 *
 *
 * // On ad failed to load
 * this.admob.onAdFailedToLoad().subscribe(err => console.log('Error loading ad:', err));
 *
 *
 *
 * // On interstitial ad opened
 * this.admob.onAdOpened().subscribe(() => console.log('Interstitial ad opened'));
 *
 *
 *
 * // On interstitial ad closed
 * this.admob.onAdClosed().subscribe(() => console.log('Interstitial ad closed'));
 *
 *
 *
 * // On ad clicked and left application
 * this.admob.onAdLeftApplication().subscribe(() => console.log('Ad lefted application'));
 *
 *
 *
 * // On user ad rewarded
 * this.admob.onRewardedAd().subscribe(() => console.log('The user has been rewarded'));
 *
 *
 *
 * // On rewarded ad video started
 * this.admob.onRewardedAdVideoStarted().subscribe(() => console.log('Rewarded ad vieo started'));
 *
 *
 *
 * // On rewarded ad video completed
 * this.admob.onRewardedAdVideoCompleted().subscribe(() => console.log('Rewarded ad video completed'));
 *
 * ```
 */
@Plugin({
  pluginName: 'Admob',
  plugin: 'cordova-admob',
  pluginRef: 'admob',
  repo: 'https://github.com/appfeel/admob-google-cordova',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Admob extends IonicNativePlugin {
  /**
   * This enum represents AdMob's supported ad sizes.
   * Use one of these constants as adSize option when calling createBannerView
   * @readonly
   */
  @CordovaProperty
  readonly AD_SIZE: {
    BANNER: string;
    IAB_MRECT: string;
    IAB_BANNER: string;
    IAB_LEADERBOARD: string;
    SMART_BANNER: string;
  };

  /**
   * This enum represents AdMob's supported ad types
   * @readonly
   */
  @CordovaProperty
  readonly AD_TYPE: {
    BANNER: string;
    INTERSTITIAL: string;
    REWARDED: string;
  };

  /**
   * Set the options to start displaying ads.
   * Although it is not required to call this method, as options can be specified in other methods, it is highly recommended
   * @param options {AdmobOptions} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when the options are set
   */
  @Cordova()
  setOptions(options: AdmobOptions): Promise<any> {
    return;
  }

  /**
   * Creates a new banner ad view. Call this method in order to be able to start showing banners
   * @param options {AdmobOptions} (Optional) Setup options
   * @return {Promise<any>} Returns a promise that resolves when the banner view is created
   */
  @Cordova()
  createBannerView(options?: AdmobOptions): Promise<any> {
    return;
  }

  /**
   * Show banner ads. You must call createBannerView first, otherwise it will result in failure callback and no ads will be shown
   * @param show {boolean} (Optional) Indicates whether to show or hide banner ads. Defaults to `true`
   * @return {Promise<any>} Returns a promise that resolves when the banner shown or hidden
   */
  @Cordova()
  showBannerAd(show?: boolean): Promise<any> {
    return;
  }

  /**
   * Hide and destroy banner view. Call this method when you want to destroy banner view.
   * It is not necessary to call this method when the app closed, as it will be automatically called by the plugin
   */
  @Cordova()
  destroyBannerView() {}

  /**
   * Request an interstitial ad
   * If `options.autoShowInterstitial` is set to `true` (default), the ad will automatically be displayed.
   * Otherwise you need to subscribe to `onAdLoaded()` event and call `showInterstitialAd()` after it will be raised specifying that an interstitial ad is available.
   * If you already called `requestInterstitialAd()` but the interstitial has never been shown, the successive calls to `requestInterstitialAd()` will result in the ad being inmediately available (the one that was obtained on the first call)
   * @param options {AdmobOptions} (Optional) Setup options
   * @return {Promise<any>} Returns a promise that resolves when the interstitial ad is loaded
   */
  @Cordova()
  requestInterstitialAd(options?: AdmobOptions): Promise<any> {
    return;
  }

  /**
   * Show an interstitial ad. Call it after `requestInterstitialAd()` and `onAdLoaded()` event raised.
   * @return {Promise<any>} Returns a promise that resolves when the interstitial ad is shown
   */
  @Cordova()
  showInterstitialAd(): Promise<any> {
    return;
  }

  /**
   * Request an rewarded ad
   * If `options.autoShowRewarded` is set to `true` (default), the ad will automatically be displayed.
   * Otherwise you need to subscribe to `onAdLoaded()` enent and call `showRewardedAd()` after it will be raised specifying that a rewarded ad is available.
   * If you already called `requestRewardedAd()` but the rewarded has never been shown, the successive calls to `requestRewardedAd()` will result in the ad being inmediately available (the one that was obtained on the first call)
   * @param options {AdmobOptions} (Optional) Setup options
   * @return {Promise<any>} Returns a promise that resolves when the rewarded ad is loaded
   */
  @Cordova()
  requestRewardedAd(options?: AdmobOptions): Promise<any> {
    return;
  }

  /**
   * Show a rewarded ad
   * @return {Promise<any>} Returns a promise that resolves when the rewarded ad is shown
   */
  @Cordova()
  showRewardedAd(): Promise<any> {
    return;
  }

  /**
   * Called when an ad is received
   * @returns {Observable<any>} Returns an observable when an ad is received
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onAdLoaded',
    element: document
  })
  onAdLoaded(): Observable<any> {
    return;
  }

  /**
   * Called when an ad request failed
   * @returns {Observable<any>} Returns an observable when an ad request is failed
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onAdFailedToLoad',
    element: document
  })
  onAdFailedToLoad(): Observable<any> {
    return;
  }

  /**
   * Called when an ad opens an overlay that covers the screen.
   * Please note that onPause cordova event is raised when an interstitial is shown
   * @returns {Observable<any>} Returns an observable when an ad is opened
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onAdOpened',
    element: document
  })
  onAdOpened(): Observable<any> {
    return;
  }

  /**
   * Called when the user is about to return to the application after clicking on an ad.
   * Please note that onResume cordova event is raised when an interstitial is closed
   * @returns {Observable<any>} Returns an observable when an ad is closed
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onAdClosed',
    element: document
  })
  onAdClosed(): Observable<any> {
    return;
  }

  /**
   * Called when the user leaves the application after clicking an ad (e.g., to go to the browser)
   * @returns {Observable<any>} Returns an observable when an ad leaves the application
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onAdLeftApplication',
    element: document
  })
  onAdLeftApplication(): Observable<any> {
    return;
  }

  /**
   * Called when the user has been rewarded by an ad
   * @returns {Observable<any>} Returns an observable when the user rewards an ad
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onRewardedAd',
    element: document
  })
  onRewardedAd(): Observable<any> {
    return;
  }

  /**
   * Called when the video of a rewarded ad started
   * @returns {Observable<any>} Returns an observable when the video is started
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onRewardedAdVideoStarted',
    element: document
  })
  onRewardedAdVideoStarted(): Observable<any> {
    return;
  }

  /**
   * Called when the video of a rewarded ad has completed
   * @returns {Observable<any>} Returns an observable when the video is completed
   */
  @Cordova({
    eventObservable: true,
    event: 'appfeel.cordova.admob.onRewardedAdVideoCompleted',
    element: document
  })
  onRewardedAdVideoCompleted(): Observable<any> {
    return;
  }
}
