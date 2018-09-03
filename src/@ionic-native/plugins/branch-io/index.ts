import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface BranchIoPromise {
  '$identity_id'?: number;
  '$one_time_use'?: boolean;
  '+click_timestamp'?: number;
  '+clicked_branch_link'?: boolean;
  '+is_first_session'?: boolean;
  '+match_guaranteed'?: boolean;
  'contentMetadata'?: string;
  'source'?: string;
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

export interface BranchUniversalObject {
  generateShortUrl(analytics: BranchIoAnalytics, properties: BranchIoProperties): Promise<any>;
  registerView(): Promise<any>;
  showShareSheet(
    analytics: BranchIoAnalytics,
    properties: BranchIoProperties,
    shareText: string
  ): Promise<any>;
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
 * 
 * @usage
 * ```
 * import { BranchIo } from '@ionic-native/branch-io';
 *
 *
 * constructor(private branch: BranchIo) { }
 *
 */
@Plugin({
  pluginName: 'BranchIo',
  plugin: 'branch-cordova-sdk',
  pluginRef: 'Branch',
  repo: 'https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking',
  platforms: ['iOS', 'Android']
})
@Injectable()
export class BranchIo extends IonicNativePlugin {
  /**
   * for development and debugging only
   * @param enable Enable debug
   */
  @Cordova({ otherPromise: true })
  setDebug(enable: boolean): Promise<any> { return; }

  /**
   * Disable tracking
   * @param disable disable tracking
   */
  @Cordova({ otherPromise: true })
  disableTracking(disable: boolean): Promise<any> { return; }

  /**
   * Initializes Branch
   */
  @Cordova({ otherPromise: true })
  initSession(): Promise<BranchIoPromise> { return; }

  /**
   * Set Request Metadata
   */
  @Cordova({ otherPromise: true })
  setRequestMetadata(): Promise<any> { return; }

  /**
   * for better Android matching
   * @param linkDomain LinkDomain at branch
   */
  @Cordova({ otherPromise: true })
  setCookieBasedMatching(linkDomain: string): Promise<any> { return; }

  /**
   * First data
   */
  @Cordova({ otherPromise: true })
  getFirstReferringParams(): Promise<any> { return; }

  /**
   * Latest data
   */
  @Cordova({ otherPromise: true })
  getLatestReferringParams(): Promise<any> { return; }

  /**
  * Set identy of user
  * @return {Promise<any>}
  */
  @Cordova({ otherPromise: true })
  setIdentity(userId: string): Promise<any> { return; }


  /**
  * Logout user
  * @return {Promise<any>}
  */
  @Cordova({ otherPromise: true })
  logout(): Promise<any> { return; }

  /**
   * Registers a custom event
   */
  @Cordova({ otherPromise: true })
  userCompletedAction(eventName: string, metaData: any): Promise<any> { return; }

  /**
 * Send Commerce Event
 */
  @Cordova({ otherPromise: true })
  sendCommerceEvent(event: string, metaData: any): Promise<any> { return; }

  /**
   * create a branchUniversalObj variable to reference with other Branch methods
   */
  @Cordova({ otherPromise: true })
  createBranchUniversalObject(properties: BranchIoProperties): Promise<BranchUniversalObject> { return; }

  /**
   * Load credits
   */
  @Cordova({ otherPromise: true })
  loadRewards(bucket: any): Promise<any> { return; }

  /**
   * Redeem Rewards
   */
  @Cordova({ otherPromise: true })
  redeemRewards(value: string, bucket: any): Promise<any> { return; }

  /**
 * Show credit history
 */
  @Cordova({ otherPromise: true })
  creditHistory(): Promise<any> { return; }

}
