import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export class AdjustConfig {
  private appToken: string;
  private environment: AdjustEnvironment;
  private sdkPrefix: string;
  private logLevel: AdjustLogLevel = null;
  private defaultTracker: string = null;
  private externalDeviceId: string = null;
  private isSendingInBackgroundEnabled: boolean = null;
  private isDeferredDeeplinkOpeningEnabled: boolean = null;
  private isCostDataInAttributionEnabled: boolean = null;
  private isCoppaComplianceEnabled: boolean = null;
  private isDeviceIdsReadingOnceEnabled: boolean = null;
  private eventDeduplicationIdsMaxSize: number = null;
  private urlStrategyDomains: string[] = [];
  private useSubdomains: boolean = null;
  private isDataResidency: boolean = null;

  // android only
  private processName: string = null;
  private isPreinstallTrackingEnabled: boolean = null;
  private preinstallFilePath: string = null;
  private isPlayStoreKidsComplianceEnabled: boolean = null;
  private fbAppId: string = null;

  // ios only
  private isAdServicesEnabled: boolean = null;
  private isIdfaReadingEnabled: boolean = null;
  private isIdfvReadingEnabled: boolean = null;
  private isSkanAttributionEnabled: boolean = null;
  private isLinkMeEnabled: boolean = null;
  private attConsentWaitingInterval: number = null;

  // callbacks
  private attributionCallback: (attribution: AdjustAttribution) => void = null;
  private eventTrackingSucceededCallback: (event: AdjustEventSuccess) => void = null;
  private eventTrackingFailedCallback: (event: AdjustEventFailure) => void = null;
  private sessionTrackingSucceededCallback: (session: AdjustSessionSuccess) => void = null;
  private sessionTrackingFailedCallback: (session: AdjustSessionFailure) => void = null;
  private deferredDeeplinkCallback: (deeplink: string) => void = null;
  private skanUpdatedCallback: (skanData: AdjustSkanData) => void = null;

  constructor(appToken: string, environment: AdjustEnvironment) {
    this.appToken = appToken;
    this.environment = environment;
  }

  setLogLevel(logLevel: AdjustLogLevel): void {
    this.logLevel = logLevel;
  }

  setDefaultTracker(defaultTracker: string): void {
    this.defaultTracker = defaultTracker;
  }

  setExternalDeviceId(externalDeviceId: string): void {
    this.externalDeviceId = externalDeviceId;
  }

  setUrlStrategy(urlStrategyDomains: string[], useSubdomains: boolean, isDataResidency: boolean): void {
    this.urlStrategy = urlStrategy;
  }

  enableSendingInBackground(): void {
    this.isSendingInBackgroundEnabled = true;
  }

  disableDeferredDeeplinkOpening(): void {
    this.isDeferredDeeplinkOpeningEnabled = false;
  }

  enableCoppaCompliance(): void {
    this.isCoppaComplianceEnabled = true;
  }

  enableDeviceIdsReadingOnce(): void {
    this.isDeviceIdsReadingOnceEnabled = true;
  }

  enablePlayStoreKidsCompliance(): void {
    this.isPlayStoreKidsComplianceEnabled = true;
  }

  enableCostDataInAttribution(): void {
    this.isCostDataInAttributionEnabled = true;
  }

  setProcessName(processName: string) {
    this.processName = processName;
  }

  enablePreinstallTracking(): void {
    this.isPreinstallTrackingEnabled = true;
  }

  setPreinstallFilePath(preinstallFilePath: string): void {
    this.preinstallFilePath = preinstallFilePath;
  }

  setFbAppId(fbAppId: string): void {
    this.fbAppId = fbAppId;
  }

  disableIdfaReading(): void {
    this.isIdfaReadingEnabled = false;
  }

  disableIdfvReading(): void {
    this.isIdfvReadingEnabled = false;
  }

  disableAdServices(): void {
    this.isAdServicesEnabled = false;
  }

  enableLinkMe(): void {
    this.isLinkMeEnabled = true;
  }

  disableSkanAttribution(): void {
    this.isSkanAttributionEnabled = false;
  }

  setAttConsentWaitingInterval(attConsentWaitingInterval: number): void {
    this.attConsentWaitingInterval = attConsentWaitingInterval;
  }

  setAttributionCallback(attributionCallback: (attribution: AdjustAttribution) => void): void {
    this.attributionCallback = attributionCallback;
  }

  setEventTrackingSucceededCallback(eventTrackingSucceededCallback: (event: AdjustEventSuccess) => void): void {
    this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
  }

  setEventTrackingFailedCallback(eventTrackingFailedCallback: (event: AdjustEventFailure) => void): void {
    this.eventTrackingFailedCallback = eventTrackingFailedCallback;
  }

  setSessionTrackingSucceededCallback(sessionTrackingSucceededCallback: (session: AdjustSessionSuccess) => void): void {
    this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
  }

  setSessionTrackingFailedCallback(sessionTrackingFailedCallback: (session: AdjustSessionFailure) => void): void {
    this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
  }

  setDeferredDeeplinkCallback(deferredDeeplinkCallback: (deeplink: string) => void): void {
    this.deferredDeeplinkCallback = deferredDeeplinkCallback;
  }

  setSkanUpdatedCallback(skanUpdatedCallback: (skanData: AdjustSkanData) => void): void {
    this.skanUpdatedCallback = skanUpdatedCallback;
  }

  private getAttributionCallback(): void {
    return this.attributionCallback;
  }

  private getEventTrackingSucceededCallback(): void {
    return this.eventTrackingSucceededCallback;
  }

  private getEventTrackingFailedCallback(): void {
    return this.eventTrackingFailedCallback;
  }

  private getSessionTrackingSucceededCallback(): void {
    return this.sessionTrackingSucceededCallback;
  }

  private getSessionTrackingFailedCallback(): void {
    return this.sessionTrackingFailedCallback;
  }

  private getDeferredDeeplinkCallback(): void {
    return this.deferredDeeplinkCallback;
  }

  private getSkanUpdatedCallback(): void {
    return this.skanUpdatedCallback;
  }

  private hasAttributionCallback(): void {
    return this.attributionCallback !== null;
  }

  private hasEventTrackingSucceededCallback(): void {
    return this.eventTrackingSucceededCallback !== null;
  }

  private hasEventTrackingFailedCallback(): void {
    return this.eventTrackingFailedCallback !== null;
  }

  private hasSessionTrackingSucceededCallback(): void {
    return this.sessionTrackingSucceededCallback !== null;
  }

  private hasSessionTrackingFailedCallback(): void {
    return this.sessionTrackingFailedCallback !== null;
  }

  private hasDeferredDeeplinkCallback(): void {
    return this.deferredDeeplinkCallback !== null;
  }

  private hasSkanUpdatedCallback(): void {
    return this.skanUpdatedCallback !== null;
  }
}

export class AdjustEvent {
  private eventToken: string;
  private revenue: number;
  private currency: string;
  private productId: string;
  private transactionId: string;
  private deduplicationId: string;
  private purchaseToken: string;
  private callbackId: string;
  private callbackParameters: string[] = [];
  private partnerParameters: string[] = [];

  constructor(eventToken: string) {
    this.eventToken = eventToken;
  }

  setRevenue(revenue: number, currency: string): void {
    this.revenue = revenue;
    this.currency = currency;
  }

  addCallbackParameter(key: string, value: string): void {
    this.callbackParameters.push(key);
    this.callbackParameters.push(value);
  }

  addPartnerParameter(key: string, value: string): void {
    this.partnerParameters.push(key);
    this.partnerParameters.push(value);
  }

  setTransactionId(transactionId: string): void {
    this.transactionId = transactionId;
  }

  setDeduplicationId(deduplicationId: string): void {
    this.deduplicationId = deduplicationId;
  }

  setCallbackId(callbackId: string): void {
    this.callbackId = callbackId;
  }

  setProductId(productId: string): void {
    this.productId = productId;
  }

  setPurchaseToken(purchaseToken: string): void {
    this.purchaseToken = purchaseToken;
  }
}

export class AdjustAppStoreSubscription {
  private price: string;
  private currency: string;
  private transactionId: string;
  private transactionDate: string;
  private salesRegion: string;
  private callbackParameters: string[] = [];
  private partnerParameters: string[] = [];

  constructor(price: string, currency: string, transactionId: string) {
    this.price = price;
    this.currency = currency;
    this.transactionId = transactionId;
  }

  setTransactionDate(transactionDate: string): void {
    this.transactionDate = transactionDate;
  }

  setSalesRegion(salesRegion: string): void {
    this.salesRegion = salesRegion;
  }

  addCallbackParameter(key: string, value: string): void {
    this.callbackParameters.push(key);
    this.callbackParameters.push(value);
  }

  addPartnerParameter(key: string, value: string): void {
    this.partnerParameters.push(key);
    this.partnerParameters.push(value);
  }
}

export class AdjustPlayStoreSubscription {
  private price: string;
  private currency: string;
  private sku: string;
  private orderId: string;
  private signature: string;
  private purchaseToken: string;
  private purchaseTime: string;
  private callbackParameters: string[] = [];
  private partnerParameters: string[] = [];

  constructor(price: string, currency: string, sku: string, orderId: string, signature: string, purchaseToken: string) {
    this.price = price;
    this.currency = currency;
    this.sku = sku;
    this.orderId = orderId;
    this.signature = signature;
    this.purchaseToken = purchaseToken;
  }

  setPurchaseTime(purchaseTime: string): void {
    this.purchaseTime = purchaseTime;
  }

  addCallbackParameter(key: string, value: string): void {
    this.callbackParameters.push(key);
    this.callbackParameters.push(value);
  }

  addPartnerParameter(key: string, value: string): void {
    this.partnerParameters.push(key);
    this.partnerParameters.push(value);
  }
}

export class AdjustThirdPartySharing {
  private isEnabled: boolean | null;
  private granularOptions: string[] = [];
  private partnerSharingSettings: any[] = [];

  constructor(isEnabled: boolean | null) {
    this.isEnabled = isEnabled;
  }

  addGranularOption(partnerName: string, key: string, value: string): void {
    this.granularOptions.push(partnerName);
    this.granularOptions.push(key);
    this.granularOptions.push(value);
  }

  addPartnerSharingSetting(partnerName: string, key: string, value: boolean): void {
    this.partnerSharingSettings.push(partnerName);
    this.partnerSharingSettings.push(key);
    this.partnerSharingSettings.push(value);
  }
}

export class AdjustAdRevenue {
  private source: string;
  private revenue: number;
  private currency: string;
  private adImpressionsCount: number;
  private adRevenueNetwork: string;
  private adRevenueUnit: string;
  private adRevenuePlacement: string;
  private callbackParameters: string[] = [];
  private partnerParameters: string[] = [];

  constructor(source: string) {
    this.source = source;
  }

  setRevenue(revenue: number, currency: string): void {
    this.revenue = revenue;
    this.currency = currency;
  }

  addCallbackParameter(key: string, value: string): void {
    this.callbackParameters.push(key);
    this.callbackParameters.push(value);
  }

  addPartnerParameter(key: string, value: string): void {
    this.partnerParameters.push(key);
    this.partnerParameters.push(value);
  }

  setAdImpressionsCount(adImpressionsCount: number): void {
    this.adImpressionsCount = adImpressionsCount;
  }

  setAdRevenueNetwork(adRevenueNetwork: string): void {
    this.adRevenueNetwork = adRevenueNetwork;
  }

  setAdRevenueUnit(adRevenueUnit: string): void {
    this.adRevenueUnit = adRevenueUnit;
  }

  setAdRevenuePlacement(adRevenuePlacement: string): void {
    this.adRevenuePlacement = adRevenuePlacement;
  }
}

export class AdjustAppStorePurchase {
  private productId: string;
  private transactionId: string;

  constructor(productId: string, transactionId: string) {
    this.productId = productId;
    this.transactionId = transactionId;
  }
}

export class AdjustPlayStorePurchase {
  private productId: string;
  private purchaseToken: string;

  constructor(productId: string, purchaseToken: string) {
    this.productId = productId;
    this.purchaseToken = purchaseToken;
  }
}

export class AdjustDeeplink {
  private deeplink: string;

  constructor(deeplink: string) {
    this.deeplink = deeplink;
  }
}

export interface AdjustAttribution {
  trackerToken: string;
  trackerName: string;
  network: string;
  campaign: string;
  adgroup: string;
  creative: string;
  clickLabel: string;
  adid: string;
  costType: string;
  costAmount: string;
  costCurrency: string;
  fbInstallReferrer: string; // android only
}

export interface AdjustSessionSuccess {
  message: string;
  timestamp: string;
  adid: string;
  jsonResponse: string;
}

export interface AdjustSessionFailure {
  message: string;
  timestamp: string;
  adid: string;
  willRetry: boolean;
  jsonResponse: string;
}

export interface AdjustEventSuccess {
  message: string;
  timestamp: string;
  adid: string;
  eventToken: string;
  callbackId: string;
  jsonResponse: string;
}

export interface AdjustEventFailure {
  message: string;
  timestamp: string;
  adid: string;
  eventToken: string;
  willRetry: boolean;
  callbackId: string;
  jsonResponse: string;
}

export interface AdjustSkanData {
  conversionValue: number;
  coarseValue: string;
  lockWindow: boolean;
  error: string;
}

export interface AdjustPurchaseVerificationResult {
  verificationStatus: string;
  code: number;
  message: string;
}

export enum AdjustEnvironment {
  Sandbox = 'sandbox',
  Production = 'production',
}

export enum AdjustLogLevel {
  Verbose = 'VERBOSE',
  Debug = 'DEBUG',
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
  Assert = 'ASSERT',
  Suppress = 'SUPPRESS',
}

/**
 * @name Adjust
 * @description
 * This is the Ionic Cordova SDK of Adjust™. You can read more about Adjust™ at adjust.com.
 *
 * Requires Cordova plugin: `com.adjust.sdk`. For more info, please see the [Adjust Cordova SDK](https://github.com/adjust/cordova_sdk)
 *
 * @usage
 * ```typescript
 *  import { Adjust, AdjustConfig, AdjustEnvironment } from '@awesome-cordova-plugins/adjust/ngx';
 *
 *  constructor(private adjust: Adjust) { }
 *
 *  ...
 *
 *  const adjustConfig = new AdjustConfig('YourAppToken', AdjustEnvironment.Sandbox);
 *  adjustConfig.logLevel = AdjustLogLevel.Verbose;
 *  // set other config properties ...
 *  adjust.initSdk(adjustConfig);
 *
 * ```
 * @interfaces
 * AdjustAttribution
 * AdjustSessionSuccess
 * AdjustSessionFailure
 * AdjustEventSuccess
 * AdjustEventFailure
 * AdjustSkanData
 * AdjustPurchaseVerificationResult
 * @classes
 * AdjustConfig
 * AdjustEvent
 * AdjustAppStoreSubscription
 * AdjustPlayStoreSubscription
 * AdjustThirdPartySharing
 * AdjustAdRevenue
 * AdjustAppStorePurchase
 * AdjustPlayStorePurchase
 * AdjustDeeplink
 * @enums
 * AdjustEnvironment
 * AdjustLogLevel
 */
@Plugin({
  pluginName: 'Adjust',
  plugin: 'com.adjust.sdk',
  pluginRef: 'Adjust',
  repo: 'https://github.com/adjust/cordova_sdk',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Adjust extends AwesomeCordovaNativePlugin {
  /**
   * This method initializes Adjust SDK
   *
   * @param {AdjustConig} adjustConfig Adjust config object used as starting options
   */
  @Cordova({ sync: true })
  initSdk(adjustConfig: AdjustConfig): void {}

  /**
   * This method tracks an event
   *
   * @param {AdjustEvent} adjustEvent Adjust event object to be tracked
   */
  @Cordova({ sync: true })
  trackEvent(adjustEvent: AdjustEvent): void {}

  /**
   * This method tracks App Store subscription
   *
   * @param {AdjustAppStoreSubscription} adjustAppStoreSubscription Adjust App Store subscription object to be tracked
   */
  @Cordova({ sync: true })
  trackAppStoreSubscription(adjustAppStoreSubscription: AdjustAppStoreSubscription): void {}

  /**
   * This method tracks Play Store subscription
   *
   * @param {AdjustPlayStoreSubscription} adjustPlayStoreSubscription Adjust Play Store subscription object to be tracked
   */
  @Cordova({ sync: true })
  trackPlayStoreSubscription(adjustPlayStoreSubscription: AdjustPlayStoreSubscription): void {}

  /**
   * This method tracks third party sharing choice
   *
   * @param {AdjustThirdPartySharing} adjustThirdPartySharing Adjust third party sharing object to be tracked
   */
  @Cordova({ sync: true })
  trackThirdPartySharing(adjustThirdPartySharing: AdjustThirdPartySharing): void {}

  /**
   * This method tracks ad revenue data
   *
   * @param {AdjustAdRevenue} adjustAdRevenue Adjust ad revenue object
   */
  @Cordova({ sync: true })
  trackAdRevenue(adjustAdRevenue: AdjustAdRevenue): void {}

  /**
   * This method tracks measurement consent choice
   *
   * @param {boolean} measurementConsent set measurement consent to true or false
   */
  @Cordova({ sync: true })
  trackMeasurementConsent(measurementConsent: boolean): void {}

  /**
   * This method sets offline mode ON
   */
  @Cordova({ sync: true })
  switchToOfflineMode(): void {}

  /**
   * This method sets offline mode OFF
   */
  @Cordova({ sync: true })
  switchBackToOnlineMode(): void {}

  /**
   * By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
   *
   * @param {AdjustDeeplink} adjustDeeplink AdjustDeeplink instance
   */
  @Cordova({ sync: true })
  processDeeplink(adjustDeeplink: AdjustDeeplink): void {}

  /**
   * This method is used to send and potentially resolve shortened deep links
   *
   * @param {AdjustDeeplink} adjustDeeplink AdjustDeeplink instance containing shortened deep link that has opened your app
   * @returns {Promise<string>} Returns a promise with either resolved (if it was resolved) or echoed deep link
   */
  @Cordova()
  processAndResolveDeeplink(adjustDeeplink: AdjustDeeplink): Promise<string> {
    return;
  }

  /**
   * This method enables Adjust SDK
   */
  @Cordova({ sync: true })
  enable(): void {}

  /**
   * This method disables Adjust SDK
   */
  @Cordova({ sync: true })
  disable(): void {}

  /**
   * To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
   * Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
   *
   * @param {string} pushToken Push token value
   */
  @Cordova({ sync: true })
  setPushToken(pushToken: string): void {}

  /**
   * Check if the Adjust SDK is currently enabled by calling this function
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isEnabled(): Promise<boolean> {
    return;
  }

  /**
   * In accordance with article 17 of the EU's General Data Protection Regulation (GDPR), you can notify Adjust when a user has exercised their right to be forgotten.
   * Calling the following method will instruct the Adjust SDK to communicate the user's choice to be forgotten to the Adjust backend
   */
  @Cordova({ sync: true })
  gdprForgetMe(): void {}

  /**
   * Function used to get Google AdId
   *
   * @returns {Promise<string>} Returns a promise with Google advertising ID value
   */
  @Cordova()
  getGoogleAdId(): Promise<string> {
    return;
  }

  /**
   * If you need to obtain the Amazon Fire Advertising ID, you can make a call to this function.
   *
   * @returns {Promise<string>} Returns a promise with Amazon Fire advertising ID
   */
  @Cordova()
  getAmazonAdId(): Promise<string> {
    return;
  }

  /**
   * To obtain the IDFA, call this function
   *
   * @returns {Promise<string>} Returns a promise with IDFA string value
   */
  @Cordova()
  getIdfa(): Promise<string> {
    return;
  }

  /**
   * To obtain the IDFV, call this function
   *
   * @returns {Promise<string>} Returns a promise with IDFV string value
   */
  @Cordova()
  getIdfv(): Promise<string> {
    return;
  }

  /**
   * For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
   * In order to obtain this identifier, call this function
   *
   * @returns {Promise<string>} Returns a promise with adid value
   */
  @Cordova()
  getAdid(): Promise<string> {
    return;
  }

  /**
   * If you want to access information about a user's current attribution whenever you need it, you can make a call to this function
   *
   * @returns {Promise<AdjustAttribution>} Returns a promise with AdjustAttribution object
   */
  @Cordova()
  getAttribution(): Promise<AdjustAttribution> {
    return;
  }

  /**
   * Get the information about version of the SDK used
   *
   * @returns {Promise<string>} Returns a promise with SDK version information
   */
  @Cordova()
  getSdkVersion(): Promise<string> {
    return;
  }

  /**
   * Method used to add global callback parameters
   *
   * @param key key
   * @param value value
   */
  @Cordova({ sync: true })
  addGlobalCallbackParameter(key: string, value: string): void {}

  /**
   * Remove a specific global callback parameter by passing the desiring key to this method
   *
   * @param key key
   */
  @Cordova({ sync: true })
  removeGlobalCallbackParameter(key: string): void {}

  /**
   * If all keys and values from the global callback parameters have to be removed, call this method
   */
  @Cordova({ sync: true })
  removeGlobalCallbackParameters(): void {}

  /**
   * Method used to add global partner parameters
   *
   * @param key key
   * @param value value
   */
  @Cordova({ sync: true })
  addGlobalPartnerParameter(key: string, value: string): void {}

  /**
   * Remove a specific global partner parameter by passing the desiring key to this method
   *
   * @param key key
   */
  @Cordova({ sync: true })
  removeGlobalPartnerParameter(key: string): void {}

  /**
   * If all keys and values from the global partner parameters have to be removed, call this method
   */
  @Cordova({ sync: true })
  removeGlobalPartnerParameters(): void {}

  /**
   * Request Adjust SDK to show pop up dialog for asking user's consent to be tracked.
   * In order to do this, call this function
   *
   * @returns {Promise<number>} Returns a promise with user's consent value
   */
  @Cordova()
  requestAppTrackingAuthorization(): Promise<number> {
    return;
  }

  /**
   * You can update SKAdNetwork conversion value with calling this method
   *
   * @param {Promise<string>} Returns a promisse with error information in case error happened
   */
  @Cordova()
  updateSkanConversionValue(conversionValue: number, coarseValue: string, lockWindow: boolean): Promise<string> {
    return;
  }

  /**
   * To obtain the app tracking authorization status in iOS, call this function
   *
   * @returns {Promise<number>} Returns a promise with app tracking authorization status
   */
  @Cordova()
  getAppTrackingAuthorizationStatus(): Promise<number> {
    return;
  }

  /**
   * To obtain the last deep link which has opened your app, call this function
   *
   * @returns {Promise<string>} Returns a promise with last opened deep link string value
   */
  @Cordova()
  getLastDeeplink(): Promise<string> {
    return;
  }

  /**
   * This method is used to verify the App Store purchase
   *
   * @param {AdjustAppStorePurchase} adjustAppStorePurchase Adjust App Store purchase object to be verified
   * @returns {Promise<AdjustPurchaseVerificationResult>} Returns a promise with purchase verification outcome
   */
  @Cordova()
  verifyAppStorePurchase(adjustAppStorePurchase: AdjustAppStorePurchase): Promise<AdjustPurchaseVerificationResult> {
    return;
  }

  /**
   * This method is used to verify the Play Store purchase
   *
   * @param {AdjustPlayStorePurchase} adjustPlayStorePurchase Adjust Play Store purchase object to be verified
   * @returns {Promise<AdjustPurchaseVerificationResult>} Returns a promise with purchase verification outcome
   */
  @Cordova()
  verifyPlayStorePurchase(adjustPlayStorePurchase: AdjustPlayStorePurchase): Promise<AdjustPurchaseVerificationResult> {
    return;
  }
}