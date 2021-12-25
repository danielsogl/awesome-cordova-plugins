import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export enum Collectors {
  AppData = 'AppData',
  Connectivity = 'Connectivity',
  DeviceData = 'DeviceData',
  Lifecycle = 'Lifecycle',
}

export enum Dispatchers {
  Collect = 'Collect',
  TagManagement = 'TagManagement',
  RemoteCommands = 'RemoteCommands',
}

export enum Expiry {
  forever = 'forever',
  untilRestart = 'untilRestart',
  session = 'session',
}

export enum ConsentPolicy {
  ccpa = 'ccpa',
  gdpr = 'gdpr',
}

export interface TealiumDispatch {
  dataLayer: Map<string, any>;
  type: string;
  toJson(): string;
}

export class TealiumView implements TealiumDispatch {
  public type = 'view';
  constructor(public viewName: string, public dataLayer: Map<string, any>) {}
  toJson() {
    const dictionary: any = {};
    dictionary['type'] = this.type;
    dictionary['dataLayer'] = {};
    this.dataLayer.forEach((k, v) => {
      dictionary['dataLayer'][k] = v;
    });
    dictionary['type'] = this.type;
    dictionary['viewName'] = this.viewName;
    return JSON.stringify(dictionary);
  }
}

export class TealiumEvent implements TealiumDispatch {
  public type = 'event';
  constructor(public eventName: string, public dataLayer: Map<string, any>) {}
  toJson() {
    const dictionary: any = {};
    dictionary['type'] = this.type;
    dictionary['dataLayer'] = {};
    this.dataLayer.forEach((k, v) => {
      dictionary['dataLayer'][k] = v;
    });
    dictionary['type'] = this.type;
    dictionary['eventName'] = this.eventName;
    return JSON.stringify(dictionary);
  }
}

export class ConsentExpiry {
  constructor(public time: number, public unit: TimeUnit) {}
}

export enum TimeUnit {
  minutes = 'minutes',
  hours = 'hours',
  days = 'days',
  months = 'months',
}

export enum ConsentStatus {
  consented = 'consented',
  notConsented = 'notConsented',
  unknown = 'unknown',
}

export enum LogLevel {
  dev = 'dev',
  qa = 'qa',
  prod = 'prod',
  silent = 'silent',
}

export enum TealiumEnvironment {
  dev = 'dev',
  qa = 'qa',
  prod = 'prod',
}

export enum ConsentCategories {
  analytics = 'analytics',
  affiliates = 'affiliates',
  displayAds = 'display_ads',
  email = 'email',
  personalization = 'personalization',
  search = 'search',
  social = 'social',
  bigData = 'big_data',
  mobile = 'mobile',
  engagement = 'engagement',
  monitoring = 'monitoring',
  crm = 'crm',
  cdp = 'cdp',
  cookieMatch = 'cookiematch',
  misc = 'misc',
}

export interface TealiumConfig {
  account: string;
  profile: string;
  environment: TealiumEnvironment;
  dataSource?: string;
  collectors: Collectors[];
  dispatchers: Dispatchers[];
  customVisitorId?: string;
  memoryReportingEnabled?: boolean;
  overrideCollectURL?: string;
  overrideCollectBatchURL?: string;
  overrideCollectDomain?: string;
  overrideLibrarySettingsURL?: string;
  overrideTagManagementURL?: string;
  deepLinkTrackingEnabled?: boolean;
  qrTraceEnabled?: boolean;
  loglevel?: LogLevel;
  consentLoggingEnabled?: boolean;
  consentPolicy?: ConsentPolicy;
  consentExpiry?: ConsentExpiry;
  lifecycleAutotrackingEnabled?: boolean;
  useRemoteLibrarySettings?: boolean;
  visitorServiceEnabled?: boolean;
  visitorServiceRefreshInterval?: string;
}

/**
 * @name Tealium
 * @description
 * This plugin does provides a wrapper around the Tealium Cordova Plugin for Ionic Native.
 *
 * For full documentation, see [https://docs.tealium.com/platforms/cordova/](https://docs.tealium.com/platforms/cordova/)
 *
 * @usage
 * ```typescript
 * import { Tealium } from '@awesome-cordova-plugins/tealium/ngx';
 *
 *
 * constructor(private tealium: Tealium) { }
 *
 * ...
 *
 * let config: TealiumConfig = {
 *			account: <your_tealium_account>,
 *			profile: <your_tealium_profile>,
 *			environment: TealiumEnvironment.dev,
 *			dispatchers: [Dispatchers.Collect, Dispatchers.RemoteCommands, Dispatchers.TagManagement],
 *			collectors: [Collectors.AppData, Collectors.DeviceData, Collectors.Lifecycle, Collectors.Connectivity],
 *			consentLoggingEnabled: true,
 *			consentPolicy: ConsentPolicy.gdpr,
 *			visitorServiceEnabled: true,
 *			// visitorServiceRefreshInterval: '1',
 *			consentExpiry: new ConsentExpiry(3, TimeUnit.minutes),
 *		};
 *
 * Tealium.initialize(config);
 *
 * ```
 */
@Plugin({
  pluginName: 'Tealium',
  plugin: 'tealium-cordova-plugin', // npm package name
  pluginRef: 'tealium', // the variable reference to call the plugin
  repo: 'https://github.com/Tealium/cordova-plugin', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported
})
@Injectable()
export class Tealium extends AwesomeCordovaNativePlugin {
  /**
   * This function initializes the Tealium Cordova Plugin
   * @param config {TealiumConfig}
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  initialize(config: TealiumConfig, callback?: Function): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function tracks an event
   * @param dispatch {TealiumDispatch} Dispatch containing event data
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  track(dispatch: TealiumDispatch): Promise<any> {
    return;
  }

  /**
   * This function terminatest the Tealium instance
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  terminateInstance(): Promise<any> {
    return;
  }

  /**
   * Adds data to data layer
   * @param data A map containing the key-value pairs to be added to data layer
   * @param expiry When the data should expire. Choose `Expiry.session` if unsure.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  addData(data: Map<string, any>, expiry: string): Promise<any> {
    return;
  }

  /**
   *
   * @param key The key of the data to retrieve from the data layer
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getData(key: string, callback?: Function): Promise<any> {
    return;
  }

  /**
   * Removes data from the data layer
   * @param keys The keys of the data to be removed
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  removeData(keys: string[]): Promise<any> {
    return;
  }

  /**
   * Retrieves the user's consent status
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getConsentStatus(callback?: Function): Promise<any> {
    return;
  }

  /**
   * Sets the user's consent status
   * @param consentStatus
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setConsentStatus(consentStatus: ConsentStatus): Promise<any> {
    return;
  }

  /**
   * Retrieves the user's consent categories
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getConsentCategories(callback?: Function): Promise<any> {
    return;
  }

  /**
   * Sets the user's consent categories
   * @param categories
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setConsentCategories(categories: ConsentCategories[]): Promise<any> {
    return;
  }

  /**
   * Joins a trace session weith the specified Trace ID
   * @param id Trace ID
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  joinTrace(id: string): Promise<any> {
    return;
  }

  /**
   * Leaves a trace session
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  leaveTrace(): Promise<any> {
    return;
  }

  /**
   * Retrieves the Tealium Visitor ID
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getVisitorId(callback?: Function): Promise<any> {
    return;
  }

  /**
   * Sets a listener to be called when the AudienceStream visitor profile is updated
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setVisitorServiceListener(callback?: Function): Promise<any> {
    return;
  }

  /**
   * Sets a listener to be called when the consent has expired
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setConsentExpiryListener(callback?: Function): Promise<any> {
    return;
  }

  /**
   * Adds a remote command for later execution
   * @param id The ID used to invoke the remote command
   * @param callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  addRemoteCommand(id: string, callback?: Function): Promise<any> {
    return;
  }

  /**
   * Removes a previously-added remote command
   * @param id The ID of remote command to be removed
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  removeRemoteCommand(id: string): Promise<any> {
    return;
  }

  /**
   * Removes all listeners
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  removeListeners(): Promise<any> {
    return;
  }
}
