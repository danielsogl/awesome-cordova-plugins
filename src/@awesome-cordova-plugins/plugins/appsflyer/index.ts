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
  logCrossPromotionAndOpenStore(appId: string, campaign: string, options: Object): void {}
}
