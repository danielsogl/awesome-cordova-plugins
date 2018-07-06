import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class Appodeal extends IonicNativePlugin {
    readonly AD_TYPES: {
        INTERSTITIAL: number;
        SKIPPABLE_VIDEO: number;
        BANNER: number;
        BANNER_BOTTOM: number;
        BANNER_TOP: number;
        REWARDED_VIDEO: number;
        NON_SKIPPABLE_VIDEO: number;
    };
    /**
     * initialize Appodeal SDK
     * @param {string} appKey
     * @param {number} adType
     */
    initialize(appKey: string, adType: number): void;
    /**
     * check if SDK has been initialized
     * @returns {Promise<boolean>}
     */
    isInitialized(): Promise<any>;
    /**
     * show ad of specified type
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    show(adType: number): Promise<any>;
    /**
     * show ad of specified type with placement options
     * @param {number} adType
     * @param {any} placement
     * @returns {Promise<boolean>}
     */
    showWithPlacement(adType: number, placement: any): Promise<any>;
    /**
     * hide ad of specified type
     * @param {number} adType
     */
    hide(adType: number): void;
    /**
     * confirm use of ads of specified type
     * @param {number} adType
     */
    confirm(adType: number): void;
    /**
     * check if ad of specified type has been loaded
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    isLoaded(adType: number): Promise<any>;
    /**
     * check if ad of specified
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    isPrecache(adType: number): Promise<any>;
    /**
     *
     * @param {number} adType
     * @param autoCache
     */
    setAutoCache(adType: number, autoCache: any): void;
    /**
     * forcefully cache an ad by type
     * @param {number} adType
     */
    cache(adType: number): void;
    /**
     *
     * @param {boolean} set
     */
    setOnLoadedTriggerBoth(set: boolean): void;
    /**
     * enable or disable Smart Banners
     * @param {boolean} enabled
     */
    setSmartBanners(enabled: boolean): void;
    /**
     * enable or disable banner backgrounds
     * @param {boolean} enabled
     */
    setBannerBackground(enabled: boolean): void;
    /**
     * enable or disable banner animations
     * @param {boolean} enabled
     */
    setBannerAnimation(enabled: boolean): void;
    /**
     *
     * @param value
     */
    set728x90Banners(value: any): void;
    /**
     * enable or disable logging
     * @param {boolean} logging
     */
    setLogging(logging: boolean): void;
    /**
     * enable or disable testing mode
     * @param {boolean} testing
     */
    setTesting(testing: boolean): void;
    /**
     * reset device ID
     */
    resetUUID(): void;
    /**
     * get version of Appdeal SDK
     */
    getVersion(): Promise<any>;
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    disableNetwork(network?: string, adType?: number): void;
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    disableNetworkType(network?: string, adType?: number): void;
    /**
     * disable Location permissions for Appodeal SDK
     */
    disableLocationPermissionCheck(): void;
    /**
     * disable Storage permissions for Appodeal SDK
     */
    disableWriteExternalStoragePermissionCheck(): void;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableInterstitialCallbacks(enabled: boolean): void;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableSkippableVideoCallbacks(enabled: boolean): void;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableNonSkippableVideoCallbacks(enabled: boolean): void;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableBannerCallbacks(enabled: boolean): void;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    enableRewardedVideoCallbacks(enabled: boolean): void;
    /**
     *
     * @param {string} name - name of rule
     * @param {boolean} value
     */
    setCustomBooleanRule(name: string, value: boolean): void;
    /**
     *
     * @param {string} name - name of rule
     * @param {number} value
     */
    setCustomIntegerRule(name: string, value: number): void;
    /**
     * set rule with float value
     * @param {string} name
     * @param {number} value
     */
    setCustomDoubleRule(name: string, value: number): void;
    /**
     * set rule with string value
     * @param {string} name - name of rule
     * @param {string} value
     */
    setCustomStringRule(name: string, value: string): void;
    /**
     * set ID preference in Appodeal for current user
     * @param id
     */
    setUserId(id: any): void;
    /**
     * set Email preference in Appodeal for current user
     * @param email
     */
    setEmail(email: any): void;
    /**
     * set Birthday preference in Appodeal for current user
     * @param birthday
     */
    setBirthday(birthday: any): void;
    /**
     * et Age preference in Appodeal for current user
     * @param age
     */
    setAge(age: any): void;
    /**
     * set Gender preference in Appodeal for current user
     * @param gender
     */
    setGender(gender: any): void;
    /**
     * set Occupation preference in Appodeal for current user
     * @param occupation
     */
    setOccupation(occupation: any): void;
    /**
     * set Relation preference in Appodeal for current user
     * @param relation
     */
    setRelation(relation: any): void;
    /**
     * set Smoking preference in Appodeal for current user
     * @param smoking
     */
    setSmoking(smoking: any): void;
    /**
     * set Alcohol preference in Appodeal for current user
     * @param alcohol
     */
    setAlcohol(alcohol: any): void;
    /**
     * set Interests preference in Appodeal for current user
     * @param interests
     */
    setInterests(interests: any): void;
    onInterstitialLoaded(): Observable<any>;
    onInterstitialFailedToLoad(): Observable<any>;
    onInterstitialShown(): Observable<any>;
    onInterstitialClicked(): Observable<any>;
    onInterstitialClosed(): Observable<any>;
    onSkippableVideoLoaded(): Observable<any>;
    onSkippableVideoFailedToLoad(): Observable<any>;
    onSkippableVideoShown(): Observable<any>;
    onSkippableVideoFinished(): Observable<any>;
    onSkippableVideoClosed(): Observable<any>;
    onRewardedVideoLoaded(): Observable<any>;
    onRewardedVideoFailedToLoad(): Observable<any>;
    onRewardedVideoShown(): Observable<any>;
    onRewardedVideoFinished(): Observable<any>;
    onRewardedVideoClosed(): Observable<any>;
    onNonSkippableVideoLoaded(): Observable<any>;
    onNonSkippableVideoFailedToLoad(): Observable<any>;
    onNonSkippableVideoShown(): Observable<any>;
    onNonSkippableVideoFinished(): Observable<any>;
    onNonSkippableVideoClosed(): Observable<any>;
    onBannerClicked(): Observable<any>;
    onBannerFailedToLoad(): Observable<any>;
    onBannerLoaded(): Observable<any>;
    onBannerShown(): Observable<any>;
}
