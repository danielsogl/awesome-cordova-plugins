import { Observable } from 'rxjs/Observable';
/**
 * @name AdMob
 * @description Plugin for Google Ads, including AdMob / DFP (doubleclick for publisher) and mediations to other Ad networks.
 * @usage
 * Please refer the the plugin's original repository for detailed usage.
 */
export declare class AdMob {
    /**
     *
     * @param adIdOrOptions
     */
    static createBanner(adIdOrOptions: any): Promise<any>;
    /**
     *
     */
    static removeBanner(): void;
    /**
     *
     * @param position
     */
    static showBanner(position: any): void;
    /**
     *
     * @param x
     * @param y
     */
    static showBannerAtXY(x: number, y: number): void;
    /**
     *
     */
    static hideBanner(): void;
    /**
     *
     * @param adIdOrOptions
     */
    static prepareInterstitial(adIdOrOptions: any): Promise<any>;
    /**
     * Show interstitial
     */
    static showInterstitial(): void;
    /**
     *
     */
    static isInterstitialReady(): Promise<boolean>;
    /**
     * Prepare a reward video ad
     * @param adIdOrOptions
     */
    static prepareRewardVideoAd(adIdOrOptions: any): Promise<any>;
    /**
     * Show a reward video ad
     */
    static showRewardVideoAd(): void;
    /**
     * Sets the values for configuration and targeting
     * @param options Returns a promise that resolves if the options are set successfully
     */
    static setOptions(options: any): Promise<any>;
    /**
     * Get user ad settings
     * @returns {Promise<any>} Returns a promise that resolves with the ad settings
     */
    static getAdSettings(): Promise<any>;
    static onBannerFailedToReceive(): Observable<any>;
    static onBannerReceive(): Observable<any>;
    static onBannerPresent(): Observable<any>;
    static onBannerLeaveApp(): Observable<any>;
    static onBannerDismiss(): Observable<any>;
    static onInterstitialFailedToReceive(): Observable<any>;
    static onInterstitialReceive(): Observable<any>;
    static onInterstitialPresent(): Observable<any>;
    static onInterstitialLeaveApp(): Observable<any>;
    static onInterstitialDismiss(): Observable<any>;
}
