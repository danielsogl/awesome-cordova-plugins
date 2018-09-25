import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export type AdSize =
  | 'SMART_BANNER'
  | 'BANNER'
  | 'MEDIUM_RECTANGLE'
  | 'FULL_BANNER'
  | 'LEADERBOARD'
  | 'SKYSCRAPER'
  | 'CUSTOM';

export interface AdMobOptions {
  /**
   * Banner ad ID
   */
  adId?: string;

  /**
   * Banner Ad Size, defaults to `SMART_BANNER`. IT can be: `SMART_BANNER`, `BANNER`, `MEDIUM_RECTANGLE`, `FULL_BANNER`, `LEADERBOARD`, `SKYSCRAPER`, or `CUSTOM`
   */
  adSize?: AdSize;

  /**
   * Banner width, valid when `adSize` is set to `CUSTOM`
   */
  width?: number;

  /**
   * Banner height, valid when `adSize` is set to `CUSTOM`
   */
  height?: number;

  /**
   * Allow banner to overlap webview, or else it will push webview up or down to avoid overlap. Defaults to false.
   */
  overlap?: boolean;

  /**
   * Position of banner ad. Defaults to `TOP_CENTER`. You can use the `AdMobPro.AD_POSITION` property to select other values.
   */
  position?: number;

  /**
   * X in pixels. Valid when `position` is set to `POS_XY`
   */
  x?: number;

  /**
   * Y in pixels. Valid when `position` is set to `POS_XY`
   */
  y?: number;

  /**
   * Set to true to receive test ad for testing purposes
   */
  isTesting?: boolean;

  /**
   * Auto show interstitial ad when loaded. Set to false if hope to control the show timing with prepareInterstitial/showInterstitial
   */
  autoShow?: boolean;

  /**
   * Re-create the banner on web view orientation change (not screen orientation), or else just move the banner. Default:true.
   */
  orientationRenew?: boolean;

  /**
   * Set extra color style for Ad
   */
  adExtras?: AdExtras;

  /**
   * License key for the plugin
   */
  license?: any;

  /**
   * Set offset
   */
  offsetTopBar?: boolean;
}

export interface AdExtras {
  color_bg: string;

  color_bg_top: string;

  color_border: string;

  color_link: string;

  color_text: string;

  color_url: string;
}

/**
 * @paid
 * @name AdMob Pro
 * @description
 * Plugin for Google Ads, including AdMob / DFP (DoubleClick for publisher) and mediations to other Ad networks.
 *
 * IMPORTANT NOTICE: this plugin takes a percentage out of your earnings if you profit more than $1,000. Read more about this on the plugin's repo. For a completely free alternative, see [AdMobPro Free](../admob-free).
 * @usage
 * ```typescript
 * import { AdMobPro } from '@ionic-native/admob-pro';
 * import { Platform } from 'ionic-angular';
 *
 * constructor(private admob: AdMobPro, private platform: Platform ) { }
 *
 * ionViewDidLoad() {
 *   this.admob.onAdDismiss()
 *     .subscribe(() => { console.log('User dismissed ad'); });
 * }
 *
 * onClick() {
 *   let adId;
 *   if(this.platform.is('android')) {
 *     adId = 'YOUR_ADID_ANDROID';
 *   } else if (this.platform.is('ios')) {
 *     adId = 'YOUR_ADID_IOS';
 *   }
 *   this.admob.prepareInterstitial({adId: adId})
 *     .then(() => { this.admob.showInterstitial(); });
 * }
 *
 * ```
 *
 * @interfaces
 * AdMobOptions
 * AdExtras
 */
@Plugin({
  pluginName: 'AdMob Pro',
  plugin: 'cordova-plugin-admobpro',
  pluginRef: 'AdMob',
  repo: 'https://github.com/floatinghotpot/cordova-admob-pro',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
@Injectable()
export class AdMobPro extends IonicNativePlugin {
  AD_POSITION: {
    NO_CHANGE: number;
    TOP_LEFT: number;
    TOP_CENTER: number;
    TOP_RIGHT: number;
    LEFT: number;
    CENTER: number;
    RIGHT: number;
    BOTTOM_LEFT: number;
    BOTTOM_CENTER: number;
    BOTTOM_RIGHT: number;
    POS_XY: number;
  } = {
    NO_CHANGE: 0,
    TOP_LEFT: 1,
    TOP_CENTER: 2,
    TOP_RIGHT: 3,
    LEFT: 4,
    CENTER: 5,
    RIGHT: 6,
    BOTTOM_LEFT: 7,
    BOTTOM_CENTER: 8,
    BOTTOM_RIGHT: 9,
    POS_XY: 10
  };

  /**
   * Create a banner
   * @param {string | AdMobOptions} adIdOrOptions Ad ID or Options
   * @returns {Promise<any>} Returns a Promise that resolves when the banner is created
   */
  @Cordova()
  createBanner(adIdOrOptions: string | AdMobOptions): Promise<any> {
    return;
  }

  /**
   * Destroy the banner, remove it from screen.
   */
  @Cordova({
    sync: true
  })
  removeBanner(): void {}

  /**
   * Show banner at position
   * @param {number} position Position. Use `AdMobPro.AD_POSITION` to set values.
   */
  @Cordova({
    sync: true
  })
  showBanner(position: number): void {}

  /**
   * Show banner at custom position
   * @param {number} x Offset from screen left.
   * @param {number} y Offset from screen top.
   */
  @Cordova({
    sync: true
  })
  showBannerAtXY(x: number, y: number): void {}

  /**
   * Hide the banner, remove it from screen, but can show it later
   */
  @Cordova({
    sync: true
  })
  hideBanner(): void {}

  /**
   * Prepare interstitial banner
   * @param {string | AdMobOptions} adIdOrOptions Ad ID or Options
   * @returns {Promise<any>} Returns a Promise that resolves when interstitial is prepared
   */
  @Cordova()
  prepareInterstitial(adIdOrOptions: string | AdMobOptions): Promise<any> {
    return;
  }

  /**
   * Show interstitial ad when it's ready
   */
  @Cordova({
    sync: true
  })
  showInterstitial(): void {}

  /**
   * Prepare a reward video ad
   * @param {string | AdMobOptions} adIdOrOptions Ad ID or Options
   * @returns {Promise<any>} Returns a Promise that resolves when the ad is prepared
   */
  @Cordova()
  prepareRewardVideoAd(adIdOrOptions: string | AdMobOptions): Promise<any> {
    return;
  }

  /**
   * Show a reward video ad
   */
  @Cordova({
    sync: true
  })
  showRewardVideoAd(): void {}

  /**
   * Sets the values for configuration and targeting
   * @param {AdMobOptions} options Options
   * @returns {Promise<any>} Returns a Promise that resolves when the options have been set
   */
  @Cordova()
  setOptions(options: AdMobOptions): Promise<any> {
    return;
  }

  /**
   * Get user ad settings
   * @returns {Promise<any>} Returns a promise that resolves with the ad settings
   */
  @Cordova()
  getAdSettings(): Promise<any> {
    return;
  }

  /**
   * Triggered when failed to receive Ad
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'onAdFailLoad',
    element: document
  })
  onAdFailLoad(): Observable<any> {
    return;
  }

  /**
   * Triggered when Ad received
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'onAdLoaded',
    element: document
  })
  onAdLoaded(): Observable<any> {
    return;
  }

  /**
   * Triggered when Ad will be showed on screen
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'onAdPresent',
    element: document
  })
  onAdPresent(): Observable<any> {
    return;
  }

  /**
   * Triggered when user click the Ad, and will jump out of your App
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'onAdLeaveApp',
    element: document
  })
  onAdLeaveApp(): Observable<any> {
    return;
  }

  /**
   * Triggered when dismiss the Ad and back to your App
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'onAdDismiss',
    element: document
  })
  onAdDismiss(): Observable<any> {
    return;
  }
}
