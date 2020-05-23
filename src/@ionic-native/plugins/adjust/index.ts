import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export class AdjustEvent {
  private eventToken: string;
  private revenue: number;
  private currency: string;
  private transactionId: string;
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

  setTransactionId(transactionId: string) {
    this.transactionId = transactionId;
  }

  setCallbackId(callbackId: string) {
    this.callbackId = callbackId;
  }
}

export class AdjustConfig {
  private appToken: string;
  private environment: AdjustEnvironment;
  private sdkPrefix: string;
  private delayStart = 0.0;
  private logLevel: AdjustLogLevel = null;
  private defaultTracker: string = null;
  private sendInBackground: boolean = null;
  private shouldLaunchDeeplink: boolean = null;
  private eventBufferingEnabled: boolean = null;
  private userAgent: string = null;
  private isDeviceKnown: boolean = null;
  private secretId: number = null;
  private info1: number = null;
  private info2: number = null;
  private info3: number = null;
  private info4: number = null;
  private processName: string = null; // Android only

  private attributionCallback: (attribution: AdjustAttribution) => void = null;
  private eventTrackingSucceededCallback: (event: AdjustEventSuccess) => void = null;
  private eventTrackingFailedCallback: (event: AdjustEventFailure) => void = null;
  private sessionTrackingSucceededCallback: (session: AdjustSessionSuccess) => void = null;
  private sessionTrackingFailedCallback: (session: AdjustSessionFailure) => void = null;
  private deferredDeeplinkCallback: (uri: string) => void = null;

  constructor(appToken: string, environment: AdjustEnvironment) {
    this.appToken = appToken;
    this.environment = environment;
  }

  setAppSecret(secretId: number, info1: number, info2: number, info3: number, info4: number): void {
    this.secretId = secretId;
    this.info1 = info1;
    this.info2 = info2;
    this.info3 = info3;
    this.info4 = info4;
  }

  setDelayStart(delayStart: number) {
    this.delayStart = delayStart;
  }

  setLogLevel(logLevel: AdjustLogLevel) {
    this.logLevel = logLevel;
  }

  setDefaultTracker(defaultTracker: string) {
    this.defaultTracker = defaultTracker;
  }

  setSendInBackground(sendInBackground: boolean) {
    this.sendInBackground = sendInBackground;
  }

  setShouldLaunchDeeplink(shouldLaunchDeeplink: boolean) {
    this.shouldLaunchDeeplink = shouldLaunchDeeplink;
  }

  setEventBufferingEnabled(eventBufferingEnabled: boolean) {
    this.eventBufferingEnabled = eventBufferingEnabled;
  }

  setUserAgent(userAgent: string) {
    this.userAgent = userAgent;
  }

  setDeviceKnown(isDeviceKnown: boolean) {
    this.isDeviceKnown = isDeviceKnown;
  }

  setProcessName(processName: string) {
    this.processName = processName;
  }

  setAttributionCallbackListener(attributionCallback: (attribution: AdjustAttribution) => void) {
    this.attributionCallback = attributionCallback;
  }

  setEventTrackingSucceededCallbackListener(eventTrackingSucceededCallback: (event: AdjustEventSuccess) => void) {
    this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
  }

  setEventTrackingFailedCallbackListener(eventTrackingFailedCallback: (event: AdjustEventFailure) => void) {
    this.eventTrackingFailedCallback = eventTrackingFailedCallback;
  }

  setSessionTrackingSucceededCallbackListener(
    sessionTrackingSucceededCallback: (session: AdjustSessionSuccess) => void
  ) {
    this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
  }

  setSessionTrackingFailedCallbackListener(sessionTrackingFailedCallback: (session: AdjustSessionFailure) => void) {
    this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
  }

  setDeferredDeeplinkCallbackListener(deferredDeeplinkCallback: (uri: string) => void) {
    this.deferredDeeplinkCallback = deferredDeeplinkCallback;
  }

  private getAttributionCallback() {
    return this.attributionCallback;
  }

  private getEventTrackingSucceededCallback() {
    return this.eventTrackingSucceededCallback;
  }

  private getEventTrackingFailedCallback() {
    return this.eventTrackingFailedCallback;
  }

  private getSessionTrackingSucceededCallback() {
    return this.sessionTrackingSucceededCallback;
  }

  private getSessionTrackingFailedCallback() {
    return this.sessionTrackingFailedCallback;
  }

  private getDeferredDeeplinkCallback() {
    return this.deferredDeeplinkCallback;
  }

  private hasAttributionListener() {
    return this.attributionCallback !== null;
  }

  private hasEventTrackingSucceededListener() {
    return this.eventTrackingSucceededCallback !== null;
  }

  private hasEventTrackingFailedListener() {
    return this.eventTrackingFailedCallback !== null;
  }

  private hasSessionTrackingSucceededListener() {
    return this.sessionTrackingSucceededCallback !== null;
  }

  private hasSessionTrackingFailedListener() {
    return this.sessionTrackingFailedCallback !== null;
  }

  private hasDeferredDeeplinkCallbackListener() {
    return this.deferredDeeplinkCallback !== null;
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
 *  import { Adjust, AdjustConfig, AdjustEnvironment } from '@ionic-native/adjust/ngx';
 *
 *  constructor(private adjust: Adjust) { }
 *
 *  ...
 *
 *  const config = new AdjustConfig('APP-TOKEN-HERE', AdjustEnvironment.Sandbox);
 *  config.logLevel = AdjustLogLevel.Verbose;
 *  // Set other config properties.
 *  adjust.create(config);
 *
 * ```
 * @interfaces
 * AdjustAttribution
 * AdjustSessionSuccess
 * AdjustSessionFailure
 * AdjustEventSuccess
 * AdjustEventFailure
 * @classes
 * AdjustEvent
 * AdjustConfig
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
export class Adjust extends IonicNativePlugin {
  /**
   * This method initializes Adjust SDK
   * @param {AdjustConig} config Adjust config object used as starting options
   */
  @Cordova({ sync: true })
  create(config: AdjustConfig): void {}

  /**
   * This method tracks an event
   * @param {AdjustEvent} event Adjust event object to be tracked
   */
  @Cordova({ sync: true })
  trackEvent(event: AdjustEvent): void {}

  /**
   * This method sets offline mode on or off
   * @param {boolean} enabled set to true for offline mode on
   */
  @Cordova({ sync: true })
  setOfflineMode(enabled: boolean): void {}

  /**
   * By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
   * @param {string} url URL of the deeplink
   */
  @Cordova({ sync: true })
  appWillOpenUrl(url: string): void {}

  /**
   * You can disable/enable the Adjust SDK from tracking by invoking this method
   * @param {boolean} enabled set to false to disable SDK
   */
  @Cordova({ sync: true })
  setEnabled(enabled: boolean): void {}

  /**
   * To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
   * Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
   * @param {string} pushToken push token value
   */
  @Cordova({ sync: true })
  setPushToken(pushToken: string): void {}

  /**
   * Check if the Adjust SDK is currently enabled by calling this function
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
   * @return {Promise<string>} Returns a promise with google AdId value
   */
  @Cordova()
  getGoogleAdId(): Promise<string> {
    return;
  }

  /**
   * If you need to obtain the Amazon Advertising ID, you can make a call to this function.
   * @return {Promise<string>} Returns a promise with anazib adv. ID
   */
  @Cordova()
  getAmazonAdId(): Promise<string> {
    return;
  }

  /**
   * To obtain the IDFA, call this function
   * @return {Promise<string>} Returns a promise with IDFA string value
   */
  @Cordova()
  getIdfa(): Promise<string> {
    return;
  }

  /**
   * For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
   * In order to obtain this identifier, call this function
   * @return {Promise<string>} Returns a promise with adid value
   */
  @Cordova()
  getAdid(): Promise<string> {
    return;
  }

  /**
   * If you want to access information about a user's current attribution whenever you need it, you can make a call to this function
   * @return {Promise<AdjustAttribution>} Returns a promise with AdjustAttribution object
   */
  @Cordova()
  getAttribution(): Promise<AdjustAttribution> {
    return;
  }

  /**
   * Get the information about version of the SDK used
   * @return {Promise<string>} Returns a promise with sdk version information
   */
  @Cordova()
  getSdkVersion(): Promise<string> {
    return;
  }

  /**
   * Method used to add session callback parameters
   * @param key key
   * @param value value
   */
  @Cordova({ sync: true })
  addSessionCallbackParameter(key: string, value: string): void {}

  /**
   * Remove a specific session callback parameter by passing the desiring key to this method
   * @param key key
   */
  @Cordova({ sync: true })
  removeSessionCallbackParameter(key: string): void {}

  /**
   * If all keys and values from the session callback parameters have to be removed, call this method
   */
  @Cordova({ sync: true })
  resetSessionCallbackParameters(): void {}

  /**
   * Method used to add session partner parameters
   * @param key key
   * @param value value
   */
  @Cordova({ sync: true })
  addSessionPartnerParameter(key: string, value: string): void {}

  /**
   * Remove a specific session partner parameter by passing the desiring key to this method
   * @param key key
   */
  @Cordova({ sync: true })
  removeSessionPartnerParameter(key: string): void {}

  /**
   * If all keys and values from the session partner parameters have to be removed, call this method
   */
  @Cordova({ sync: true })
  resetSessionPartnerParameters(): void {}

  /**
   * This method call will make the Adjust SDK send the initial install session and any events created, if they were not sent after delay start was set and it's delay expired.
   */
  @Cordova({ sync: true })
  sendFirstPackages(): void {}
}
