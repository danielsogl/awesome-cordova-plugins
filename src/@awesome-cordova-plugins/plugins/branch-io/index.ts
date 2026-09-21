import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface BranchIoPromise {
  $identity_id?: number;
  $one_time_use?: boolean;
  '+click_timestamp'?: number;
  '+clicked_branch_link'?: boolean;
  '+is_first_session'?: boolean;
  '+match_guaranteed'?: boolean;
  contentMetadata?: string;
  source?: string;
  '~campaign'?: string;
  '~channel'?: string;
  '~creation_source'?: string;
  '~feature'?: string;
  '~id'?: number;
  '~referring_link:'?: string;
  [x: string]: any;
}

export interface BranchIoAnalytics {
  channel?: string;
  feature?: string;
  campaign?: string;
  stage?: string;
  tags?: string[];
  [x: string]: any;
}

export interface BranchIoProperties {
  contentMetadata?: {
    [x: string]: any;
  };
  [x: string]: any;
}

export interface BranchIoQRCodeSettings {
  codeColor?: string;
  backgroundColor?: string;
  centerLogo?: string;
  width?: number;
  margin?: number;
  imageFormat?: 'PNG' | 'JPEG';
  [x: string]: any;
}

export interface BranchIoStandardEvents {
  STANDARD_EVENT_ADD_TO_CART: string;
  STANDARD_EVENT_ADD_TO_WISHLIST: string;
  STANDARD_EVENT_VIEW_CART: string;
  STANDARD_EVENT_INITIATE_PURCHASE: string;
  STANDARD_EVENT_ADD_PAYMENT_INFO: string;
  STANDARD_EVENT_PURCHASE: string;
  STANDARD_EVENT_SEARCH: string;
  STANDARD_EVENT_VIEW_ITEM: string;
  STANDARD_EVENT_VIEW_ITEMS: string;
  STANDARD_EVENT_RATE: string;
  STANDARD_EVENT_SHARE: string;
  STANDARD_EVENT_INITIATE_STREAM: string;
  STANDARD_EVENT_COMPLETE_STREAM: string;
  STANDARD_EVENT_COMPLETE_REGISTRATION: string;
  STANDARD_EVENT_COMPLETE_TUTORIAL: string;
  STANDARD_EVENT_ACHIEVE_LEVEL: string;
  STANDARD_EVENT_UNLOCK_ACHIEVEMENT: string;
  STANDARD_EVENT_INVITE: string;
  STANDARD_EVENT_LOGIN: string;
  STANDARD_EVENT_SUBSCRIBE: string;
  STANDARD_EVENT_START_TRIAL: string;
}

export interface BranchUniversalObject {
  generateShortUrl(analytics: BranchIoAnalytics, properties: BranchIoProperties): Promise<any>;
  registerView(): Promise<any>;
  showShareSheet(analytics: BranchIoAnalytics, properties: BranchIoProperties, shareText: string): Promise<any>;
  onShareSheetLaunched(callback: any): void;
  onShareSheetDismissed(callback: any): void;
  onLinkShareResponse(callback: any): void;
  onChannelSelected(callback: any): void;
  listOnSpotlight(): Promise<any>;
}

/**
 * @name BranchIo
 * @description
 * Branch.io is an attribution service for deeplinking and invitation links
 * @usage
 * ```
 * import { BranchIo } from '@awesome-cordova-plugins/branch-io/ngx';
 *
 *
 * constructor(private branch: BranchIo) { }
 *
 * ```
 * @interfaces
 * BranchIoPromise
 * BranchIoAnalytics
 * BranchIoProperties
 * BranchIoQRCodeSettings
 * BranchIoStandardEvents
 * BranchUniversalObject
 */
@Plugin({
  pluginName: 'BranchIo',
  plugin: 'branch-cordova-sdk',
  pluginRef: 'Branch',
  repo: 'https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking',
  platforms: ['iOS', 'Android'],
})
@Injectable()
export class BranchIo extends AwesomeCordovaNativePlugin {
  /**
   * for development and debugging only
   *
   * @deprecated since branch-cordova-sdk v6.1.0. Use setLogging instead.
   * @param {boolean} enable Enable debug
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setDebug(enable: boolean): Promise<any> {
    return;
  }

  /**
   * Enables debug logging in the native layer. Must be called before initSession.
   *
   * @param {boolean} enable Enable logging
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setLogging(enable: boolean): Promise<any> {
    return;
  }

  /**
   * Enables test mode. Must be called before initSession.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  enableTestMode(): Promise<any> {
    return;
  }

  /**
   * Disable tracking
   *
   * @param {boolean} disable disable tracking
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  disableTracking(disable: boolean): Promise<any> {
    return;
  }

  /**
   * Initializes Branch
   *
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  initSession(): Promise<BranchIoPromise> {
    return;
  }

  /**
   * Initializes Branch with callback
   *
   * @deprecated not present in branch-cordova-sdk (absent since at least v3.4.0, still absent in v6.6.1). Use initSession instead.
   * @returns {Observable<any>}
   */
  @Cordova({ observable: true })
  initSessionWithCallback(): Observable<BranchIoPromise> {
    return;
  }

  /**
   * Set Request Metadata
   *
   * @param {string} key
   * @param {string} val
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setRequestMetadata(key: string, val: string): Promise<any> {
    return;
  }

  /**
   * for better Android matching
   *
   * @param {string} linkDomain LinkDomain at branch
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setCookieBasedMatching(linkDomain: string): Promise<any> {
    return;
  }

  /**
   * First data
   *
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  getFirstReferringParams(): Promise<any> {
    return;
  }

  /**
   * Latest data
   *
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  getLatestReferringParams(): Promise<any> {
    return;
  }

  /**
   * Get the cross platform and developer identity data most recently set
   *
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  crossPlatformIds(): Promise<any> {
    return;
  }

  /**
   * Get the last attributed touch data
   *
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  lastAttributedTouchData(): Promise<any> {
    return;
  }

  /**
   * Set identy of user
   *
   * @param {string} userId
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setIdentity(userId: string): Promise<any> {
    return;
  }

  /**
   * Logout user
   *
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  logout(): Promise<any> {
    return;
  }

  /**
   * Registers a custom event
   *
   * @deprecated since branch-cordova-sdk v5.0.0. Use sendBranchEvent instead.
   * @param {string} eventName
   * @param {any} metaData
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  userCompletedAction(eventName: string, metaData: any): Promise<any> {
    return;
  }

  /**
   * Send Commerce Event
   *
   * @deprecated since v.3.1.0. As of https://help.branch.io/developers-hub/docs/cordova-phonegap-ionic#track-commerce
   * @param {string} event
   * @param {any} metaData
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  sendCommerceEvent(event: string, metaData: any): Promise<any> {
    return;
  }

  /**
   * Send Branch Event
   *
   * @param {string} event
   * @param {any} metaData
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  sendBranchEvent(event: string, metaData: any): Promise<any> {
    return;
  }

  /**
   * Get the map of Branch standard event names
   *
   * @returns {Promise<BranchIoStandardEvents>}
   */
  @Cordova({ otherPromise: true })
  getStandardEvents(): Promise<BranchIoStandardEvents> {
    return;
  }

  /**
   * create a branchUniversalObj variable to reference with other Branch methods
   *
   * @param {BranchIoProperties} properties
   * @returns {Promise<BranchUniversalObject>}
   */
  @Cordova({ otherPromise: true })
  createBranchUniversalObject(properties: BranchIoProperties): Promise<BranchUniversalObject> {
    return;
  }

  /**
   * Generate a Branch QR code as a base64 encoded image
   *
   * @param {BranchIoQRCodeSettings} qrCodeSettings
   * @param {BranchUniversalObject} branchUniversalObject
   * @param {BranchIoAnalytics} analytics
   * @param {BranchIoProperties} properties
   * @returns {Promise<string>}
   */
  @Cordova({ otherPromise: true })
  getBranchQRCode(
    qrCodeSettings: BranchIoQRCodeSettings,
    branchUniversalObject: BranchUniversalObject,
    analytics: BranchIoAnalytics,
    properties: BranchIoProperties
  ): Promise<string> {
    return;
  }

  /**
   * Load credits
   *
   * @deprecated since branch-cordova-sdk v5.0.0. Branch's Rewards/Credits feature was removed upstream.
   * @param {any} bucket
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  loadRewards(bucket: any): Promise<any> {
    return;
  }

  /**
   * Redeem Rewards
   *
   * @deprecated since branch-cordova-sdk v5.0.0. Branch's Rewards/Credits feature was removed upstream.
   * @param {string} value
   * @param {any} bucket
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  redeemRewards(value: string, bucket: any): Promise<any> {
    return;
  }

  /**
   * Show credit history
   *
   * @deprecated since branch-cordova-sdk v5.0.0. Branch's Rewards/Credits feature was removed upstream.
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  creditHistory(): Promise<any> {
    return;
  }

  /**
   * Sets Digital Markets Act (DMA) consent parameters for users in the European Economic Area
   *
   * @param {boolean} eeaRegion whether the user is in the EEA
   * @param {boolean} adPersonalizationConsent whether the user has consented to ad personalization
   * @param {boolean} adUserDataUsageConsent whether the user has consented to ad user data usage
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setDMAParamsForEEA(
    eeaRegion: boolean,
    adPersonalizationConsent: boolean,
    adUserDataUsageConsent: boolean
  ): Promise<any> {
    return;
  }

  /**
   * Sets the Consumer Protection Attribution (CPP) level
   *
   * @param {string} level one of 'FULL', 'REDUCED', 'MINIMAL', 'NONE'
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setConsumerProtectionAttributionLevel(level: string): Promise<any> {
    return;
  }

  /**
   * Sets the SDK wait time, in seconds, for third party API responses (Google On Device Measurement). iOS only.
   *
   * @param {number} waitTime
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true, platforms: ['iOS'] })
  setSDKWaitTimeForThirdPartyAPIs(waitTime: number): Promise<any> {
    return;
  }

  /**
   * Sets a custom Meta anonymous ID for the current user. iOS only.
   *
   * @param {string} anonID
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true, platforms: ['iOS'] })
  setAnonID(anonID: string): Promise<any> {
    return;
  }

  /**
   * Passes Google On Device Measurement (ODM) event data and the app's first-open timestamp. iOS only.
   *
   * @param {string} odmInfo
   * @param {number} firstOpenTimeStamp
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true, platforms: ['iOS'] })
  setODMInfo(odmInfo: string, firstOpenTimeStamp: number): Promise<any> {
    return;
  }
}
