import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface AppsflyerOptions {
  /**
   * Appsflyer Dev key
   */
  devKey: string;

  /**
   * Apple Application ID(for iOS only)
   */
  appId?: string;

  /**
   * debug mode
   */
  isDebug?: boolean;

  /**
   * optout of collection of IMEI
   */
  collectIMEI?: boolean;

  /**
   * 	optout of collection of collectAndroidID
   */
  collectAndroidID?: boolean;

  /**
   * default false 	Accessing AppsFlyer Attribution / Conversion Data from the SDK (Deferred Deeplinking). Read more: Android, iOS. AppsFlyer plugin will return attribution data in onSuccess callback.
   */
  onInstallConversionDataListener?: boolean;

  /**
   * time for the sdk to wait before launch - IOS 14 ONLY!
   */
  waitForATTUserAuthorization?: number;

  /**
   * For iOS only, to test uninstall in Sandbox environment
   */
  useUninstallSandbox?: boolean;

  /**
   * Prevents the SDK from sending the launch request after calling initSdk(...). When using this property, the app needs to manually trigger the startSdk() API to report the app launch. default=true
   */
  shouldStartSdk?: boolean;
}

export interface AppsflyerEvent {
  [x: string]: any;
}

export interface AppsflyerInviteOptions {
  channel?: string;
  campaign?: string;
  userParams?: {
    [x: string]: any;
  };
}

export interface AppsflyerConsent {
  /**
   * Indicates whether GDPR regulations apply to the user. Also serves as a flag for compliance with relevant aspects of DMA regulations.
   */
  isUserSubjectToGDPR: boolean | null;

  /**
   * Indicates whether the user has consented to use their data for advertising purposes.
   */
  hasConsentForDataUsage: boolean | null;

  /**
   * Indicates whether the user has consented to use their data for personalized advertising.
   */
  hasConsentForAdsPersonalization: boolean | null;

  /**
   * Indicates whether the user has provided consent for the storage of their advertising data.
   */
  hasConsentForAdStorage: boolean | null;
}

export interface AppsflyerPurchaseDetails {
  /**
   * The purchase type: "subscription" or "one_time_purchase"
   */
  purchaseType: string;

  /**
   * The purchase token from Google Play Store (Android) or transaction ID (iOS)
   */
  purchaseToken: string;

  /**
   * The product identifier
   */
  productId: string;
}

/**
 * Mediation network values accepted by logAdRevenue's AppsflyerAdRevenueData.mediationNetwork field.
 */
export enum AppsflyerMediationNetwork {
  IRONSOURCE = 'ironsource',
  APPLOVIN_MAX = 'applovinmax',
  GOOGLE_ADMOB = 'googleadmob',
  FYBER = 'fyber',
  APPODEAL = 'appodeal',
  ADMOST = 'Admost',
  TOPON = 'Topon',
  TRADPLUS = 'Tradplus',
  YANDEX = 'Yandex',
  CHARTBOOST = 'chartboost',
  UNITY = 'Unity',
  TOPON_PTE = 'toponpte',
  CUSTOM_MEDIATION = 'customMediation',
  DIRECT_MONETIZATION_NETWORK = 'directMonetizationNetwork',
}

export interface AppsflyerAdRevenueData {
  /**
   * The monetization network name
   */
  monetizationNetwork: string;

  /**
   * The mediation network used
   */
  mediationNetwork: AppsflyerMediationNetwork;

  /**
   * ISO 4217 currency code
   */
  currencyIso4217Code: string;

  /**
   * The ad revenue amount
   */
  revenue: number;
}

/**
 * @name Appsflyer
 * @description
 * Appsflyer Cordova SDK support for Attribution
 * @usage
 * ```typescript
 * import { Appsflyer } from '@awesome-cordova-plugins/appsflyer/ngx';
 *
 *
 * constructor(private appsflyer: Appsflyer) { }
 *
 * ...
 *
 *
 * this.appsflyer.initSdk(options);
 *
 * ```
 * @interfaces
 * AppsflyerOptions
 * AppsflyerEvent
 * AppsflyerInviteOptions
 * AppsflyerConsent
 * AppsflyerPurchaseDetails
 * AppsflyerAdRevenueData
 */
@Plugin({
  pluginName: 'Appsflyer',
  plugin: 'cordova-plugin-appsflyer-sdk',
  pluginRef: 'window.plugins.appsFlyer',
  repo: 'https://github.com/AppsFlyerSDK/cordova-plugin-appsflyer-sdk',
  platforms: ['iOS', 'Android'],
  install: 'Add to config.xml like stated on github and then start',
})
@Injectable()
export class Appsflyer extends AwesomeCordovaNativePlugin {
  /**
   * initialize the SDK
   *
   * @param {AppsflyerOptions} options
   * @returns {Promise<any>}
   */
  @Cordova()
  initSdk(options: AppsflyerOptions): Promise<any> {
    return;
  }

  /**
   * These in-app events help you track how loyal users discover your app, and attribute them to specific campaigns/media-sources. Please take the time define the event/s you want to measure to allow you to track ROI (Return on Investment) and LTV (Lifetime Value).
   *
   * @param {string} eventName custom event name, is presented in your dashboard
   * @param {AppsflyerEvent} eventValues event details
   */
  @Cordova()
  logEvent(eventName: string, eventValues: AppsflyerEvent): void {}

  /**
   * Setting your own Custom ID enables you to cross-reference your own unique ID with AppsFlyer’s user ID and the other devices’ IDs. This ID is available in AppsFlyer CSV reports along with postbacks APIs for cross-referencing with you internal IDs.
   *
   * @param {string} customerUserId user id
   */
  @Cordova({ sync: true })
  setAppUserId(customerUserId: string): void {}

  /**
   * Setting your own Custom ID enables you to cross-reference your own unique ID with AppsFlyer’s user ID and the other devices’ IDs. This ID is available in AppsFlyer CSV reports along with postbacks APIs for cross-referencing with you internal IDs.
   *
   * @param {boolean} customerUserId In some extreme cases you might want to shut down all SDK tracking due to legal and privacy compliance. This can be achieved with the isStopTracking API. Once this API is invoked, our SDK will no longer communicate with our servers and stop functioning.
   * @param isStopTracking
   */
  @Cordova({ sync: true })
  Stop(isStopTracking: boolean): void {}

  /**
   * Get the data from Attribution
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  registerOnAppOpenAttribution(): Promise<any> {
    return;
  }

  /**
   * @deprecated
   * Enables app uninstall tracking
   * @param {string} token GCM/FCM ProjectNumber
   * @returns {Promise<any>}
   */
  @Cordova()
  enableUninstallTracking(token: string): Promise<any> {
    return;
  }

  /**
   * Allows to pass GCM/FCM Tokens that where collected by third party plugins to the AppsFlyer server. Can be used for Uninstall Tracking.
   *
   * @param {string} token GCM/FCM ProjectNumber
   */
  @Cordova({ sync: true })
  updateServerUninstallToken(token: string): void {}

  /**
   * (iOS) Allows to pass APN Tokens that where collected by third party plugins to the AppsFlyer server. Can be used for Uninstall Tracking.
   *
   * @param {string} token APN Token
   */
  @Cordova({ sync: true })
  registerUninstall(token: string): void {}

  /**
   * Get AppsFlyer’s proprietary Device ID. The AppsFlyer Device ID is the main ID used by AppsFlyer in Reports and APIs.
   */
  @Cordova()
  getAppsFlyerUID(): Promise<any> {
    return;
  }

  /**
   * End User Opt-Out (Optional) AppsFlyer provides you a method to opt‐out specific users from AppsFlyer analytics. This method complies with the latest privacy requirements and complies with Facebook data and privacy policies. Default is FALSE, meaning tracking is enabled by default.
   *
   * @param {boolean} disable Set to true to opt-out user from tracking
   */
  @Cordova({ sync: true })
  anonymizeUser(disable: boolean): void {}

  /**
   * Set AppsFlyer’s OneLink ID. Setting a valid OneLink ID will result in shortened User Invite links, when one is generated. The OneLink ID can be obtained on the AppsFlyer Dashboard.
   *
   * @param {string} oneLinkId OneLink ID
   */
  @Cordova({ sync: true })
  setAppInviteOneLinkID(oneLinkId: string): void {}

  /**
   * Allowing your existing users to invite their friends and contacts as new users to your app can be a key growth factor for your app. AppsFlyer allows you to track and attribute new installs originating from user invites within your app.
   *
   * @param {AppsflyerInviteOptions} options Parameters for Invite link
   * @returns {Promise<any>}
   */
  @Cordova()
  generateInviteLink(options: AppsflyerInviteOptions): Promise<any> {
    return;
  }

  /**
   * Use this call to track an impression use the following API call. Make sure to use the promoted App ID as it appears within the AppsFlyer dashboard.
   *
   * @param {string} appId Promoted Application ID
   * @param {string} campaign Promoted Campaign
   */
  @Cordova({ sync: true })
  logCrossPromotionImpression(appId: string, campaign: string): void {}

  /**
   * Use this call to track the click and launch the app store's app page (via Browser)
   *
   * @param {string} appId Promoted Application ID
   * @param {string} campaign Promoted Campaign
   * @param {Object} options Additional Parameters to track
   */
  @Cordova({ sync: true })
  logCrossPromotionAndOpenStore(appId: string, campaign: string, options: object): void {}

  /**
   * Starts the SDK. Must call initSdk first in order to make this work. Used together with the AppsflyerOptions.shouldStartSdk option.
   */
  @Cordova({ sync: true })
  startSdk(): void {}

  /**
   * Register Unified deep link listener. Must be called before initSdk() and it overrides registerOnAppOpenAttribution.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  registerDeepLink(): Promise<any> {
    return;
  }

  /**
   * Set the currency code used for in-app purchase events.
   *
   * @param {string} currencyId ISO 4217 Currency Codes, default 'USD'
   */
  @Cordova({ sync: true })
  setCurrencyCode(currencyId: string): void {}

  /**
   * Get the current SDK version
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getSdkVersion(): Promise<any> {
    return;
  }

  /**
   * @deprecated deprecated since 6.4.0. Use setSharingFilterForPartners instead
   * Used by advertisers to exclude all networks/integrated partners from getting data
   */
  @Cordova({ sync: true })
  setSharingFilterForAllPartners(): void {}

  /**
   * @deprecated deprecated since 6.4.0. Use setSharingFilterForPartners instead
   * Used by advertisers to exclude specified networks/integrated partners from getting data
   *
   * @param {string[]} networks Array of partners that need to be excluded
   */
  @Cordova({ sync: true })
  setSharingFilter(networks: string[]): void {}

  /**
   * Used by advertisers to exclude specified networks/integrated partners from getting data
   *
   * @param {string[]} networks Array of partners that need to be excluded
   */
  @Cordova({ sync: true })
  setSharingFilterForPartners(networks: string[]): void {}

  /**
   * @deprecated Will be removed in the future. Please use validateAndLogInAppPurchaseV2.
   * Receipt validation is a secure mechanism whereby the payment platform (e.g. Apple or Google) validates that an in-app purchase indeed occurred as reported.
   *
   * @param {AppsflyerEvent} purchaseInfo In-App Purchase parameters
   * @returns {Promise<any>}
   */
  @Cordova()
  validateAndLogInAppPurchase(purchaseInfo: AppsflyerEvent): Promise<any> {
    return;
  }

  /**
   * Receipt validation is a secure mechanism whereby the payment platform (e.g. Apple or Google) validates that an in-app purchase indeed occurred as reported. This method uses V2 API.
   *
   * @param {AppsflyerPurchaseDetails} purchaseDetails Purchase details object containing productId, purchaseToken and purchaseType
   * @param {AppsflyerEvent} additionalParameters Additional parameters to include with the purchase event (optional)
   * @returns {Promise<any>}
   */
  @Cordova()
  validateAndLogInAppPurchaseV2(
    purchaseDetails: AppsflyerPurchaseDetails,
    additionalParameters?: AppsflyerEvent
  ): Promise<any> {
    return;
  }

  /**
   * In app purchase receipt validation Apple environment (production or sandbox)
   *
   * @param {boolean} isSandbox true if In app purchase is done with sandbox
   * @returns {Promise<any>}
   */
  @Cordova()
  setUseReceiptValidationSandbox(isSandbox: boolean): Promise<any> {
    return;
  }

  /**
   * (iOS only) AppsFlyer SDK dynamically loads the Apple iAd.framework. This framework is required to record and measure the performance of Apple Search Ads in your app. If you don't want AppsFlyer to dynamically load this framework, set this property to true.
   *
   * @param {boolean} collectASA If you don't want AppsFlyer to dynamically load iAd.framework, set this property to true
   * @returns {Promise<any>}
   */
  @Cordova()
  disableCollectASA(collectASA: boolean): Promise<any> {
    return;
  }

  /**
   * Disable collection of Apple, Google, Amazon and Open advertising ids (IDFA, GAID, AAID, OAID).
   *
   * @param {boolean} disableAdvertisingIdentifier Disable collection of advertising ids
   * @returns {Promise<any>}
   */
  @Cordova()
  setDisableAdvertisingIdentifier(disableAdvertisingIdentifier: boolean): Promise<any> {
    return;
  }

  /**
   * Set Onelink custom/branded domains. Use this API during the SDK Initialization to indicate branded domains.
   *
   * @param {string[]} domains String array of branded domains
   * @returns {Promise<any>}
   */
  @Cordova()
  setOneLinkCustomDomains(domains: string[]): Promise<any> {
    return;
  }

  /**
   * Support deferred deep linking from Facebook Ads. Use this API before initSdk().
   *
   * @param {boolean} isEnabled enable support deferred deep linking from Facebook Ads
   */
  @Cordova({ sync: true })
  enableFacebookDeferredApplinks(isEnabled: boolean): void {}

  /**
   * Set user emails for FB Advanced Matching
   *
   * @param {string[]} emails String array of emails
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserEmails(emails: string[]): Promise<any> {
    return;
  }

  /**
   * Set phone number for FB Advanced Matching
   *
   * @param {string} phoneNumber String phone number
   * @returns {Promise<any>}
   */
  @Cordova()
  setPhoneNumber(phoneNumber: string): Promise<any> {
    return;
  }

  /**
   * Set custom host prefix and host name
   *
   * @param {string} hostPrefix host prefix
   * @param {string} hostName host name
   */
  @Cordova({ sync: true })
  setHost(hostPrefix: string, hostName: string): void {}

  /**
   * Provides app owners with a flexible interface for configuring how deep links are extracted from push notification payloads. Must be called before initSdk().
   *
   * @param {string[]} path strings array of the path
   */
  @Cordova({ sync: true })
  addPushNotificationDeepLinkPath(path: string[]): void {}

  /**
   * Use this API to get the OneLink from click domains that launch the app. Make sure to call this API before SDK initialization.
   *
   * @param {string[]} urls strings array of domains
   */
  @Cordova({ sync: true })
  setResolveDeepLinkURLs(urls: string[]): void {}

  /**
   * Enable or disable SKAD support. Set true if you want to disable it. Must be called before initSdk() and for iOS only.
   *
   * @param {boolean} isDisabled disable or enable SKAD support
   */
  @Cordova({ sync: true })
  disableSKAD(isDisabled: boolean): void {}

  /**
   * Set the language of the device. The data will be displayed in Raw Data Reports. Must be called before initSdk() and for iOS only.
   *
   * @param {string} language The device language
   */
  @Cordova({ sync: true })
  setCurrentDeviceLanguage(language: string): void {}

  /**
   * Allows you to add custom data to events sent from the SDK. Typically used to integrate on the SDK level with several external partner platforms.
   *
   * @param {AppsflyerEvent} additionalData custom data
   */
  @Cordova({ sync: true })
  setAdditionalData(additionalData: AppsflyerEvent): void {}

  /**
   * Allows sending custom data for partner integration purposes.
   *
   * @param {string} partnerId ID of the partner (usually suffixed with "_int")
   * @param {AppsflyerEvent} data Customer data, depends on the integration configuration with the specific partner
   */
  @Cordova({ sync: true })
  setPartnerData(partnerId: string, data: AppsflyerEvent): void {}

  /**
   * Measure and get data from push-notification campaigns.
   *
   * @param {AppsflyerEvent} pushData JSON object contains the push data
   */
  @Cordova({ sync: true })
  sendPushNotificationData(pushData: AppsflyerEvent): void {}

  /**
   * Use to opt-out of collecting the network operator name (carrier) and sim operator name from the device.
   *
   * @param {boolean} disable Defaults to false
   */
  @Cordova({ sync: true })
  setDisableNetworkData(disable: boolean): void {}

  /**
   * Set consent fields manually (e.g. by prompting user and collecting results). Use this API to provide the consent data directly to the SDK when GDPR applies to the user and your app does not use a CMP compatible with TCF v2.2.
   *
   * @param {AppsflyerConsent} appsFlyerConsent Consent data
   */
  @Cordova({ sync: true })
  setConsentData(appsFlyerConsent: AppsflyerConsent): void {}

  /**
   * Instruct the SDK to collect the TCF data from the device.
   *
   * @param {boolean} enable enable/disable TCF data collection
   */
  @Cordova({ sync: true })
  enableTCFDataCollection(enable: boolean): void {}

  /**
   * Log ad revenue event.
   *
   * @param {AppsflyerAdRevenueData} adRevenueData the ad revenue data
   * @param {AppsflyerEvent} additionalParameters additional params data (optional)
   */
  @Cordova({ sync: true })
  logAdRevenue(adRevenueData: AppsflyerAdRevenueData, additionalParameters?: AppsflyerEvent): void {}

  /**
   * (Android only) Disables App Set ID collection (enabled by default).
   */
  @Cordova({ sync: true })
  disableAppSetId(): void {}

  /**
   * (iOS) Log deep linking. Add a function 'handleOpenUrl' to your root and call this to track deeplinks with AppsFlyer attribution data.
   *
   * @param {string} url the opened url
   */
  @Cordova({ sync: true })
  handleOpenUrl(url: string): void {}
}
