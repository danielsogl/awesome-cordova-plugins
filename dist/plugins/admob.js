"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name AdMob
 * @description Plugin for Google Ads, including AdMob / DFP (doubleclick for publisher) and mediations to other Ad networks.
 * @usage
 * Please refer the the plugin's original repository for detailed usage.
 */
var AdMob = (function () {
    function AdMob() {
    }
    // Static Methods
    /**
     *
     * @param adIdOrOptions
     */
    AdMob.createBanner = function (adIdOrOptions) { return; };
    /**
     *
     */
    AdMob.removeBanner = function () { };
    /**
     *
     * @param position
     */
    AdMob.showBanner = function (position) { };
    /**
     *
     * @param x
     * @param y
     */
    AdMob.showBannerAtXY = function (x, y) { };
    /**
     *
     */
    AdMob.hideBanner = function () { };
    /**
     *
     * @param adIdOrOptions
     */
    AdMob.prepareInterstitial = function (adIdOrOptions) { return; };
    /**
     * Show interstitial
     */
    AdMob.showInterstitial = function () { };
    /**
     *
     */
    AdMob.isInterstitialReady = function () { return; };
    /**
     * Prepare a reward video ad
     * @param adIdOrOptions
     */
    AdMob.prepareRewardVideoAd = function (adIdOrOptions) { return; };
    /**
     * Show a reward video ad
     */
    AdMob.showRewardVideoAd = function () { };
    /**
     * Sets the values for configuration and targeting
     * @param options Returns a promise that resolves if the options are set successfully
     */
    AdMob.setOptions = function (options) { return; };
    /**
     * Get user ad settings
     * @returns {Promise<any>} Returns a promise that resolves with the ad settings
     */
    AdMob.getAdSettings = function () { return; };
    // Events
    AdMob.onBannerFailedToReceive = function () { return; };
    AdMob.onBannerReceive = function () { return; };
    AdMob.onBannerPresent = function () { return; };
    AdMob.onBannerLeaveApp = function () { return; };
    AdMob.onBannerDismiss = function () { return; };
    AdMob.onInterstitialFailedToReceive = function () { return; };
    AdMob.onInterstitialReceive = function () { return; };
    AdMob.onInterstitialPresent = function () { return; };
    AdMob.onInterstitialLeaveApp = function () { return; };
    AdMob.onInterstitialDismiss = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "createBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "removeBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showBannerAtXY", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "hideBanner", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "prepareInterstitial", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showInterstitial", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "isInterstitialReady", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "prepareRewardVideoAd", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showRewardVideoAd", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "setOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "getAdSettings", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerFailedToReceive'
        })
    ], AdMob, "onBannerFailedToReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerReceive'
        })
    ], AdMob, "onBannerReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerPresent'
        })
    ], AdMob, "onBannerPresent", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerLeaveApp'
        })
    ], AdMob, "onBannerLeaveApp", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerDismiss'
        })
    ], AdMob, "onBannerDismiss", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialFailedToReceive'
        })
    ], AdMob, "onInterstitialFailedToReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialReceive'
        })
    ], AdMob, "onInterstitialReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialPresent'
        })
    ], AdMob, "onInterstitialPresent", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialLeaveApp'
        })
    ], AdMob, "onInterstitialLeaveApp", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialDismiss'
        })
    ], AdMob, "onInterstitialDismiss", null);
    AdMob = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-admobpro',
            pluginRef: 'AdMob',
            repo: 'https://github.com/floatinghotpot/cordova-admob-pro',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], AdMob);
    return AdMob;
}());
exports.AdMob = AdMob;
//# sourceMappingURL=admob.js.map