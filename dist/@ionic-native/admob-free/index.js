var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
/**
 * @name AdMob Free
 * @description
 *
 * @usage
 * ```typescript
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
 * @interfaces
 * AdMobFreeBannerConfig
 * AdMobFreeInterstitialConfig
 * AdMobFreeRewardVideoConfig
 * @classes
 * AdMobFreeBanner
 * AdMobFreeInterstitial
 * AdMobFreeRewardVideo
 */
var AdMobFree = (function (_super) {
    __extends(AdMobFree, _super);
    function AdMobFree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience object to get event names
         * @type {Object}
         */
        _this.events = {
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
         * Returns the AdMobFreeBanner object
         * @type {AdMobFreeBanner}
         */
        _this.banner = new AdMobFreeBanner();
        /**
         * Returns the AdMobFreeInterstitial object
         * @type {AdMobFreeInterstitial}
         */
        _this.interstitial = new AdMobFreeInterstitial();
        /**
         * Returns the AdMobFreeRewardVideo object
         * @type {AdMobFreeRewardVideo}
         */
        _this.rewardVideo = new AdMobFreeRewardVideo();
        return _this;
    }
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    AdMobFree.prototype.on = function (event) {
        return Observable.fromEvent(document, event);
    };
    return AdMobFree;
}(IonicNativePlugin));
AdMobFree.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AdMobFree.ctorParameters = function () { return []; };
AdMobFree = __decorate([
    Plugin({
        pluginName: 'AdMobFree',
        plugin: 'cordova-plugin-admob-free',
        pluginRef: 'admob',
        repo: 'https://github.com/ratson/cordova-plugin-admob-free',
        platforms: ['Android', 'iOS']
    })
], AdMobFree);
export { AdMobFree };
/**
 * @hidden
 */
var AdMobFreeBanner = (function () {
    function AdMobFreeBanner() {
    }
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeBannerConfig}
     */
    AdMobFreeBanner.prototype.config = function (options) { return; };
    /**
     * Hide the banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.hide = function () { return; };
    /**
     * Create banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.prepare = function () { return; };
    /**
     * Remove the banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.remove = function () { return; };
    /**
     * Show the banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.show = function () { return; };
    return AdMobFreeBanner;
}());
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdMobFreeBanner.prototype, "config", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeBanner.prototype, "hide", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeBanner.prototype, "prepare", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeBanner.prototype, "remove", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeBanner.prototype, "show", null);
AdMobFreeBanner = __decorate([
    Plugin({
        pluginName: 'AdMobFree',
        plugin: 'cordova-plugin-admob-free',
        pluginRef: 'admob.banner',
    })
], AdMobFreeBanner);
export { AdMobFreeBanner };
/**
 * @hidden
 */
var AdMobFreeInterstitial = (function () {
    function AdMobFreeInterstitial() {
    }
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeInterstitialConfig}
     */
    AdMobFreeInterstitial.prototype.config = function (options) { return; };
    /**
     * Check if interstitial is ready
     * @return {Promise<any>}
     */
    AdMobFreeInterstitial.prototype.isReady = function () { return; };
    /**
     * Prepare interstitial
     * @return {Promise<any>}
     */
    AdMobFreeInterstitial.prototype.prepare = function () { return; };
    /**
     * Show the interstitial
     * @return {Promise<any>}
     */
    AdMobFreeInterstitial.prototype.show = function () { return; };
    return AdMobFreeInterstitial;
}());
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdMobFreeInterstitial.prototype, "config", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeInterstitial.prototype, "isReady", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeInterstitial.prototype, "prepare", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeInterstitial.prototype, "show", null);
AdMobFreeInterstitial = __decorate([
    Plugin({
        pluginName: 'AdMobFree',
        plugin: 'cordova-plugin-admob-free',
        pluginRef: 'admob.interstitial',
    })
], AdMobFreeInterstitial);
export { AdMobFreeInterstitial };
/**
 * @hidden
 */
var AdMobFreeRewardVideo = (function () {
    function AdMobFreeRewardVideo() {
    }
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeRewardVideoConfig}
     */
    AdMobFreeRewardVideo.prototype.config = function (options) { return; };
    /**
     * Check if reward video is ready
     * @return {Promise<any>}
     */
    AdMobFreeRewardVideo.prototype.isReady = function () { return; };
    /**
     * Prepare reward video
     * @return {Promise<any>}
     */
    AdMobFreeRewardVideo.prototype.prepare = function () { return; };
    /**
     * Show the reward video
     * @return {Promise<any>}
     */
    AdMobFreeRewardVideo.prototype.show = function () { return; };
    return AdMobFreeRewardVideo;
}());
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdMobFreeRewardVideo.prototype, "config", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeRewardVideo.prototype, "isReady", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeRewardVideo.prototype, "prepare", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdMobFreeRewardVideo.prototype, "show", null);
AdMobFreeRewardVideo = __decorate([
    Plugin({
        pluginName: 'AdMobFree',
        plugin: 'cordova-plugin-admob-free',
        pluginRef: 'admob.rewardvideo',
    })
], AdMobFreeRewardVideo);
export { AdMobFreeRewardVideo };
//# sourceMappingURL=index.js.map