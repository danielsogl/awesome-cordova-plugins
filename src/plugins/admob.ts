import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * @name AdMob
 * @description Plugin for Google Ads, including AdMob / DFP (doubleclick for publisher) and mediations to other Ad networks.
 * @usage
 * ```typescript
 * import { AdMob } from 'ionic-native';
 * 
 * ionViewDidLoad() {
 *   AdMob.onBannerDismiss()
 *     .subscribe(() => { console.log('User returned from interstitial'); });
 * }
 * 
 * public onClick() {
 *   AdMob.prepareInterstitial('YOUR_ADID')
 *     .then(() => { AdMob.showInterstitial(); });
 * }
 *
 * ```
 * Please refer the the plugin's original repository for detailed usage.
 */
@Plugin({
  pluginName: 'AdMob',
  plugin: 'cordova-plugin-admobpro',
  pluginRef: 'AdMob',
  repo: 'https://github.com/floatinghotpot/cordova-admob-pro',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class AdMob {

  // Static Methods

  /**
   *
   * @param adIdOrOptions
   * @returns {Promise<any>} Returns a Promise that resolves when the banner is created
   */
  @Cordova()
  static createBanner(adIdOrOptions: any): Promise<any> { return; }

  /**
   *
   */
  @Cordova({
    sync: true
  })
  static removeBanner(): void { }

  /**
   *
   * @param position
   */
  @Cordova({
    sync: true
  })
  static showBanner(position: any): void { }

  /**
   *
   * @param x
   * @param y
   */
  @Cordova({
    sync: true
  })
  static showBannerAtXY(x: number, y: number): void { }

  /**
   *
   */
  @Cordova({
    sync: true
  })
  static hideBanner(): void { }

  /**
   *
   * @param adIdOrOptions
   * @returns {Promise<any>} Returns a Promise that resolves when interstitial is prepared
   */
  @Cordova()
  static prepareInterstitial(adIdOrOptions: any): Promise<any> { return; }

  /**
   * Show interstitial
   */
  @Cordova({
    sync: true
  })
  static showInterstitial(): void { }

  /**
   *
   * @returns {Promise<any>} Returns a Promise that resolves when the interstitial is ready
   */
  @Cordova()
  static isInterstitialReady(): Promise<boolean> { return; }

  /**
   * Prepare a reward video ad
   * @param adIdOrOptions
   * @returns {Promise<any>} Returns a Promise that resolves when the ad is prepared
   */
  @Cordova()
  static prepareRewardVideoAd(adIdOrOptions: any): Promise<any> { return; }

  /**
   * Show a reward video ad
   */
  @Cordova({
    sync: true
  })
  static showRewardVideoAd(): void { }

  /**
   * Sets the values for configuration and targeting
   * @param options Returns a promise that resolves if the options are set successfully
   * @returns {Promise<any>} Returns a Promise that resolves when the options have been set
   */
  @Cordova()
  static setOptions(options: any): Promise<any> { return; }

  /**
   * Get user ad settings
   * @returns {Promise<any>} Returns a promise that resolves with the ad settings
   */
  @Cordova()
  static getAdSettings(): Promise<any> { return; }

  // Events

  @Cordova({
    eventObservable: true,
    event: 'onBannerFailedToReceive'
  })
  static onBannerFailedToReceive(): Observable<any> { return; }

  @Cordova({
    eventObservable: true,
    event: 'onBannerReceive'
  })
  static onBannerReceive(): Observable<any> { return; }

  @Cordova({
    eventObservable: true,
    event: 'onBannerPresent'
  })
  static onBannerPresent(): Observable<any> { return; }

  @Cordova({
    eventObservable: true,
    event: 'onBannerLeaveApp'
  })
  static onBannerLeaveApp(): Observable<any> { return; }

  @Cordova({
    eventObservable: true,
    event: 'onBannerDismiss'
  })
  static onBannerDismiss(): Observable<any> { return; }


  @Cordova({
    eventObservable: true,
    event: 'onInterstitialFailedToReceive'
  })
  static onInterstitialFailedToReceive(): Observable<any> { return; }


  @Cordova({
    eventObservable: true,
    event: 'onInterstitialReceive'
  })
  static onInterstitialReceive(): Observable<any> { return; }


  @Cordova({
    eventObservable: true,
    event: 'onInterstitialPresent'
  })
  static onInterstitialPresent(): Observable<any> { return; }


  @Cordova({
    eventObservable: true,
    event: 'onInterstitialLeaveApp'
  })
  static onInterstitialLeaveApp(): Observable<any> { return; }


  @Cordova({
    eventObservable: true,
    event: 'onInterstitialDismiss'
  })
  static onInterstitialDismiss(): Observable<any> { return; }

}
