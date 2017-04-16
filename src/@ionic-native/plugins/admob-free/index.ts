import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

export interface AdMobFreeBannerConfig {
  /**
   * Ad Unit ID
   */
  id?: string;
  /**
   * Receiving test ad
   */
  isTesting?: boolean;
  /**
   * Auto show ad when loaded
   */
  autoShow?: boolean;
  /**
   * Set to true, to put banner at top
   */
  bannerAtTop?: boolean;
  /**
   * Set to true, to allow banner overlap WebView
   */
  overlap?: boolean;
  /**
   * Set to true to avoid ios7 status bar overlap
   */
  offsetTopBar?: boolean;
  /**
   * Banner  size
   */
  size?: string;
}

export interface AdMobFreeInterstitialConfig {
  /**
   * Ad Unit ID
   */
  id?: string;
  /**
   * Receiving test ad
   */
  isTesting?: boolean;
  /**
   * Auto show ad when loaded
   */
  autoShow?: boolean;
}

export interface AdMobFreeRewardVideoConfig {
  /**
   * Ad Unit ID
   */
  id?: string;
  /**
   * Receiving test ad
   */
  isTesting?: boolean;
  /**
   * Auto show ad when loaded
   */
  autoShow?: boolean;
}

/**
 * @name AdMob Free
 * @description
 *
 * @usage
 * ```
 * import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
 *
 *
 * constructor(private admobFree: AdMobFree) { }
 *
 *
 * ...
 *
 *
 * const bannerConfig: AdMobFreeBannerConfig = {
 *  // add your config here
 *  // for the sake of this example we will just use the test config
 *  isTesting: true,
 *  autoShow: true
 * };
 * this.admobFree.banner.config(bannerConfig);
 *
 * this.admobFree.banner.prepare()
 *   .then(() => {
 *     // banner Ad is ready
 *     // if we set autoShow to false, then we will need to call the show method here
 *   })
 *   .catch(e => console.log(e));
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'AdMobFree',
  plugin: 'cordova-plugin-admob-free',
  pluginRef: 'admob',
  repo: 'https://github.com/ratson/cordova-plugin-admob-free',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class AdMobFree {

  /**
   * Convenience constructor to get event names
   */
  events = {
    BANNER_LOAD: 'admob.banner.events.LOAD',
    BANNER_LOAD_FAIL: 'admob.banner.events.LOAD_FAIL',
    BANNER_OPEN: 'admob.banner.events.OPEN',
    BANNER_CLOSE: 'admob.banner.events.CLOSE',
    BANNER_EXIT_APP: 'admob.banner.events.EXIT_APP',

    INTERSTITIAL_LOAD: 'admob.interstitial.events.LOAD',
    INTERSTITIAL_LOAD_FAIL: 'admob.interstitial.events.LOAD_FAIL',
    INTERSTITIAL_OPEN: 'admob.interstitial.events.OPEN',
    INTERSTITIAL_CLOSE: 'admob.interstitial.events.CLOSE',
    INTERSTITIAL_EXIT_APP: 'admob.interstitial.events.EXIT_APP',

    REWARD_VIDEO_LOAD: 'admob.rewardvideo.events.LOAD',
    REWARD_VIDEO_LOAD_FAIL: 'admob.rewardvideo.events.LOAD_FAIL',
    REWARD_VIDEO_OPEN: 'admob.rewardvideo.events.OPEN',
    REWARD_VIDEO_CLOSE: 'admob.rewardvideo.events.CLOSE',
    REWARD_VIDEO_EXIT_APP: 'admob.rewardvideo.events.EXIT_APP',
    REWARD_VIDEO_START: 'admob.rewardvideo.events.START',
    REWARD_VIDEO_REWARD: 'admob.rewardvideo.events.REWARD'
  };

  /**
   * Watch an event
   * @param event {string} event name
   * @return {Observable<any>}
   */
  on(event: string): Observable<any> {
    return Observable.fromEvent(document, event);
  }

  /**
   *
   * @type {AdMobFreeBanner}
   */
  banner: AdMobFreeBanner = new AdMobFreeBanner();

  /**
   *
   * @type {AdMobFreeInterstitial}
   */
  interstitial: AdMobFreeInterstitial = new AdMobFreeInterstitial();

  /**
   *
   * @type {AdMobFreeRewardVideo}
   */
  rewardVideo: AdMobFreeRewardVideo = new AdMobFreeRewardVideo();

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'AdMobFree',
  plugin: 'cordova-plugin-admob-free',
  pluginRef: 'admob.banner',
})
export class AdMobFreeBanner {



  /**
   * Update config.
   * @param options
   * @return {AdMobFreeBannerConfig}
   */
  @Cordova({ sync: true })
  config(options: AdMobFreeBannerConfig): AdMobFreeBannerConfig { return; }

  /**
   * Hide the banner.
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  hide(): Promise<any> { return; }

  /**
   * Create banner.
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  prepare(): Promise<any> { return; }

  /**
   * Remove the banner.
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  remove(): Promise<any> { return; }

  /**
   * Show the banner.
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  show(): Promise<any> { return; }

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'AdMobFree',
  plugin: 'cordova-plugin-admob-free',
  pluginRef: 'admob.interstitial',
})
export class AdMobFreeInterstitial {

  /**
   * Update config.
   * @param options
   * @return {AdMobFreeInterstitialConfig}
   */
  @Cordova({ sync: true })
  config(options: AdMobFreeInterstitialConfig): AdMobFreeInterstitialConfig { return; }

  /**
   * Check if interstitial is ready
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  isReady(): Promise<any> { return; }

  /**
   * Prepare interstitial
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  prepare(): Promise<any> { return; }

  /**
   * Show the interstitial
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  show(): Promise<any> { return; }

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'AdMobFree',
  plugin: 'cordova-plugin-admob-free',
  pluginRef: 'admob.rewardvideo',
})
export class AdMobFreeRewardVideo {

  /**
   * Update config.
   * @param options
   * @return {AdMobFreeRewardVideoConfig}
   */
  @Cordova({ sync: true })
  config(options: AdMobFreeRewardVideoConfig): AdMobFreeRewardVideoConfig { return; }

  /**
   * Check if reward video is ready
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  isReady(): Promise<any> { return; }

  /**
   * Prepare reward video
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  prepare(): Promise<any> { return; }

  /**
   * Show the reward video
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  show(): Promise<any> { return; }

}
