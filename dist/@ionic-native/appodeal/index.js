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
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
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
var Appodeal = (function (_super) {
    __extends(Appodeal, _super);
    function Appodeal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // available types of advertisements
        _this.AD_TYPES = {
            INTERSTITIAL: 1,
            SKIPPABLE_VIDEO: 2,
            BANNER: 4,
            BANNER_BOTTOM: 8,
            BANNER_TOP: 16,
            REWARDED_VIDEO: 128,
            NON_SKIPPABLE_VIDEO: 256
        };
        return _this;
    }
    /**
     * initialize Appodeal SDK
     * @param {string} appKey
     * @param {number} adType
     */
    Appodeal.prototype.initialize = function (appKey, adType) { };
    ;
    /**
     * check if SDK has been initialized
     * @returns {Promise<boolean>}
     */
    Appodeal.prototype.isInitialized = function () { return; };
    ;
    /**
     * show ad of specified type
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    Appodeal.prototype.show = function (adType) { return; };
    ;
    /**
     * show ad of specified type with placement options
     * @param {number} adType
     * @param {any} placement
     * @returns {Promise<boolean>}
     */
    Appodeal.prototype.showWithPlacement = function (adType, placement) { return; };
    ;
    /**
     * hide ad of specified type
     * @param {number} adType
     */
    Appodeal.prototype.hide = function (adType) { };
    ;
    /**
     * confirm use of ads of specified type
     * @param {number} adType
     */
    Appodeal.prototype.confirm = function (adType) { };
    ;
    /**
     * check if ad of specified type has been loaded
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    Appodeal.prototype.isLoaded = function (adType) { return; };
    ;
    /**
     * check if ad of specified
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    Appodeal.prototype.isPrecache = function (adType) { return; };
    ;
    /**
     *
     * @param {number} adType
     * @param autoCache
     */
    Appodeal.prototype.setAutoCache = function (adType, autoCache) { };
    ;
    /**
     * forcefully cache an ad by type
     * @param {number} adType
     */
    Appodeal.prototype.cache = function (adType) { };
    ;
    /**
     *
     * @param {boolean} set
     */
    Appodeal.prototype.setOnLoadedTriggerBoth = function (set) { };
    ;
    /**
     * enable or disable Smart Banners
     * @param {boolean} enabled
     */
    Appodeal.prototype.setSmartBanners = function (enabled) { };
    ;
    /**
     * enable or disable banner backgrounds
     * @param {boolean} enabled
     */
    Appodeal.prototype.setBannerBackground = function (enabled) { };
    ;
    /**
     * enable or disable banner animations
     * @param {boolean} enabled
     */
    Appodeal.prototype.setBannerAnimation = function (enabled) { };
    ;
    /**
     *
     * @param value
     */
    Appodeal.prototype.set728x90Banners = function (value) { };
    ;
    /**
     * enable or disable logging
     * @param {boolean} logging
     */
    Appodeal.prototype.setLogging = function (logging) { };
    ;
    /**
     * enable or disable testing mode
     * @param {boolean} testing
     */
    Appodeal.prototype.setTesting = function (testing) { };
    ;
    /**
     * reset device ID
     */
    Appodeal.prototype.resetUUID = function () { };
    ;
    /**
     * get version of Appdeal SDK
     */
    Appodeal.prototype.getVersion = function () { return; };
    ;
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    Appodeal.prototype.disableNetwork = function (network, adType) { };
    ;
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    Appodeal.prototype.disableNetworkType = function (network, adType) { };
    ;
    /**
     * disable Location permissions for Appodeal SDK
     */
    Appodeal.prototype.disableLocationPermissionCheck = function () { };
    ;
    /**
     * disable Storage permissions for Appodeal SDK
     */
    Appodeal.prototype.disableWriteExternalStoragePermissionCheck = function () { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    Appodeal.prototype.enableInterstitialCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    Appodeal.prototype.enableSkippableVideoCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    Appodeal.prototype.enableNonSkippableVideoCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    Appodeal.prototype.enableBannerCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    Appodeal.prototype.enableRewardedVideoCallbacks = function (enabled) { };
    ;
    /**
     *
     * @param {string} name - name of rule
     * @param {boolean} value
     */
    Appodeal.prototype.setCustomBooleanRule = function (name, value) { };
    ;
    /**
     *
     * @param {string} name - name of rule
     * @param {number} value
     */
    Appodeal.prototype.setCustomIntegerRule = function (name, value) { };
    ;
    /**
     * set rule with float value
     * @param {string} name
     * @param {number} value
     */
    Appodeal.prototype.setCustomDoubleRule = function (name, value) { };
    ;
    /**
     * set rule with string value
     * @param {string} name - name of rule
     * @param {string} value
     */
    Appodeal.prototype.setCustomStringRule = function (name, value) { };
    ;
    /**
     * set ID preference in Appodeal for current user
     * @param id
     */
    Appodeal.prototype.setUserId = function (id) { };
    ;
    /**
     * set Email preference in Appodeal for current user
     * @param email
     */
    Appodeal.prototype.setEmail = function (email) { };
    ;
    /**
     * set Birthday preference in Appodeal for current user
     * @param birthday
     */
    Appodeal.prototype.setBirthday = function (birthday) { };
    ;
    /**
     * et Age preference in Appodeal for current user
     * @param age
     */
    Appodeal.prototype.setAge = function (age) { };
    ;
    /**
     * set Gender preference in Appodeal for current user
     * @param gender
     */
    Appodeal.prototype.setGender = function (gender) { };
    ;
    /**
     * set Occupation preference in Appodeal for current user
     * @param occupation
     */
    Appodeal.prototype.setOccupation = function (occupation) { };
    ;
    /**
     * set Relation preference in Appodeal for current user
     * @param relation
     */
    Appodeal.prototype.setRelation = function (relation) { };
    ;
    /**
     * set Smoking preference in Appodeal for current user
     * @param smoking
     */
    Appodeal.prototype.setSmoking = function (smoking) { };
    ;
    /**
     * set Alcohol preference in Appodeal for current user
     * @param alcohol
     */
    Appodeal.prototype.setAlcohol = function (alcohol) { };
    ;
    /**
     * set Interests preference in Appodeal for current user
     * @param interests
     */
    Appodeal.prototype.setInterests = function (interests) { };
    ;
    Appodeal.prototype.onInterstitialLoaded = function () { return; };
    Appodeal.prototype.onInterstitialFailedToLoad = function () { return; };
    Appodeal.prototype.onInterstitialShown = function () { return; };
    Appodeal.prototype.onInterstitialClicked = function () { return; };
    Appodeal.prototype.onInterstitialClosed = function () { return; };
    Appodeal.prototype.onSkippableVideoLoaded = function () { return; };
    Appodeal.prototype.onSkippableVideoFailedToLoad = function () { return; };
    Appodeal.prototype.onSkippableVideoShown = function () { return; };
    Appodeal.prototype.onSkippableVideoFinished = function () { return; };
    Appodeal.prototype.onSkippableVideoClosed = function () { return; };
    Appodeal.prototype.onRewardedVideoLoaded = function () { return; };
    Appodeal.prototype.onRewardedVideoFailedToLoad = function () { return; };
    Appodeal.prototype.onRewardedVideoShown = function () { return; };
    Appodeal.prototype.onRewardedVideoFinished = function () { return; };
    Appodeal.prototype.onRewardedVideoClosed = function () { return; };
    Appodeal.prototype.onNonSkippableVideoLoaded = function () { return; };
    Appodeal.prototype.onNonSkippableVideoFailedToLoad = function () { return; };
    Appodeal.prototype.onNonSkippableVideoShown = function () { return; };
    Appodeal.prototype.onNonSkippableVideoFinished = function () { return; };
    Appodeal.prototype.onNonSkippableVideoClosed = function () { return; };
    Appodeal.prototype.onBannerClicked = function () { return; };
    Appodeal.prototype.onBannerFailedToLoad = function () { return; };
    Appodeal.prototype.onBannerLoaded = function () { return; };
    Appodeal.prototype.onBannerShown = function () { return; };
    return Appodeal;
}(IonicNativePlugin));
Appodeal.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Appodeal.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "initialize", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Appodeal.prototype, "isInitialized", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Appodeal.prototype, "show", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], Appodeal.prototype, "showWithPlacement", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "hide", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "confirm", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Appodeal.prototype, "isLoaded", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Appodeal.prototype, "isPrecache", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setAutoCache", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "cache", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setOnLoadedTriggerBoth", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setSmartBanners", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setBannerBackground", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setBannerAnimation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "set728x90Banners", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setLogging", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setTesting", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "resetUUID", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Appodeal.prototype, "getVersion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "disableNetwork", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "disableNetworkType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "disableLocationPermissionCheck", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "disableWriteExternalStoragePermissionCheck", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "enableInterstitialCallbacks", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "enableSkippableVideoCallbacks", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "enableNonSkippableVideoCallbacks", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "enableBannerCallbacks", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "enableRewardedVideoCallbacks", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setCustomBooleanRule", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setCustomIntegerRule", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setCustomDoubleRule", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setCustomStringRule", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setUserId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setEmail", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setBirthday", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setAge", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setGender", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setOccupation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setRelation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setSmoking", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setAlcohol", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Appodeal.prototype, "setInterests", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onInterstitialLoaded',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onInterstitialLoaded", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onInterstitialFailedToLoad',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onInterstitialFailedToLoad", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onInterstitialShown',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onInterstitialShown", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onInterstitialClicked',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onInterstitialClicked", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onInterstitialClosed',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onInterstitialClosed", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onSkippableVideoLoaded',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onSkippableVideoLoaded", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onSkippableVideoFailedToLoad',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onSkippableVideoFailedToLoad", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onSkippableVideoShown',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onSkippableVideoShown", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onSkippableVideoFinished',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onSkippableVideoFinished", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onSkippableVideoClosed',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onSkippableVideoClosed", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onRewardedVideoLoaded',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onRewardedVideoLoaded", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onRewardedVideoFailedToLoad',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onRewardedVideoFailedToLoad", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onRewardedVideoShown',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onRewardedVideoShown", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onRewardedVideoFinished',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onRewardedVideoFinished", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onRewardedVideoClosed',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onRewardedVideoClosed", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onNonSkippableVideoLoaded',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onNonSkippableVideoLoaded", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onNonSkippableVideoFailedToLoad',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onNonSkippableVideoFailedToLoad", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onNonSkippableVideoShown',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onNonSkippableVideoShown", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onNonSkippableVideoFinished',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onNonSkippableVideoFinished", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onNonSkippableVideoClosed',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onNonSkippableVideoClosed", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onBannerClicked',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onBannerClicked", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onBannerFailedToLoad',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onBannerFailedToLoad", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onBannerLoaded',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onBannerLoaded", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'onBannerShown',
        element: document
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Appodeal.prototype, "onBannerShown", null);
Appodeal = __decorate([
    Plugin({
        pluginName: 'Appodeal',
        plugin: 'https://github.com/appodeal/appodeal-cordova-plugin.git',
        pluginRef: 'Appodeal',
        repo: 'https://github.com/appodeal/appodeal-cordova-plugin',
        platforms: ['iOS', 'Android']
    })
], Appodeal);
export { Appodeal };
//# sourceMappingURL=index.js.map