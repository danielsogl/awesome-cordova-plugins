import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export class MetrixConfig {
    private appId: string;
    private secretId: number = null;
    private info1: number = null;
    private info2: number = null;
    private info3: number = null;
    private info4: number = null;
    private defaultTrackerToken: string = null;
    private shouldLaunchDeeplink = false;
    private firebaseAppId: string = null;
    private isLocationListeningEnable = false;
    private eventUploadThreshold: number = null;
    private eventUploadMaxBatchSize: number = null;
    private eventMaxCount: number = null;
    private eventUploadPeriodMillis: number = null;
    private sessionTimeoutMillis: number = null;
    private store: string = null;

    private userIdListener: (userId: string) => void = null;
    private sessionIdListener: (sessionId: string) => void = null;
    private attributionChangeListener: (attribution: MetrixAttribution) => void = null;
    private deeplinkResponseListener: (uri: string) => void = null;

    constructor(appId: string) {
        this.appId = appId;
    }

    setDefaultTracker(defaultTrackerToken: string) {
        this.defaultTrackerToken = defaultTrackerToken;
    }

    setFirebaseAppId(firebaseAppId: string) {
        this.firebaseAppId = firebaseAppId;
    }

    setAppSecret(secretId: number, info1: number, info2: number, info3: number, info4: number) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    }

    setShouldLaunchDeeplink(shouldLaunchDeeplink: boolean) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    }

    setOnAttributionChangeListener(attributionChangeListener: (attribution: MetrixAttribution) => void) {
        this.attributionChangeListener = attributionChangeListener;
    }

    setOnDeeplinkResponseListener(deeplinkResponseListener: (uri: string) => void) {
        this.deeplinkResponseListener = deeplinkResponseListener;
    }

    setOnReceiveUserIdListener(userIdListener: (userId: string) => void) {
        this.userIdListener = userIdListener;
    }

    setOnSessionIdListener(sessionIdListener: (sessionId: string) => void) {
        this.sessionIdListener = sessionIdListener;
    }

    setLocationListening(isLocationListeningEnable: boolean) {
        this.isLocationListeningEnable = isLocationListeningEnable;
    }

    setEventUploadThreshold(threshold: number) {
        this.eventUploadThreshold = threshold;
    }

    setEventUploadMaxBatchSize(size: number) {
        this.eventUploadMaxBatchSize = size;
    }

    setEventMaxCount(count: number) {
        this.eventMaxCount = count;
    }

    setEventUploadPeriodMillis(period: number) {
        this.eventUploadPeriodMillis = period;
    }

    setSessionTimeoutMillis(timeout: number) {
        this.sessionTimeoutMillis = timeout;
    }

    setStore(store: string) {
        this.store = store;
    }

    private getAttributionChangeListener() {
        return this.attributionChangeListener;
    }

    private getDeeplinkResponseListener() {
        return this.deeplinkResponseListener;
    }

    private getOnReceiveUserIdListener() {
        return this.userIdListener;
    }

    private getOnSessionIdListener() {
        return this.sessionIdListener;
    }

    private hasAttributionChangeListener() {
        return this.attributionChangeListener !== null;
    }

    private hasDeeplinkResponseListener() {
        return this.deeplinkResponseListener !== null;
    }

    private hasUserIdListener() {
        return this.userIdListener !== null;
    }

    private hasSessionIdListener() {
        return this.sessionIdListener !== null;
    }
}

export interface MetrixAttribution {
    acquisitionAd: string;
    acquisitionAdSet: string;
    acquisitionCampaign: string;
    acquisitionSource: string;
    attributionStatus: MetrixAttributionStatus;
}

export enum MetrixAttributionStatus {
    Attributed = 'ATTRIBUTED',
    NotAttributedYet = 'NOT_ATTRIBUTED_YET',
    AttributionNotNeeded = 'ATTRIBUTION_NOT_NEEDED',
    Unknown = 'UNKNOWN'
}

/**
 * @name Metrix
 * @description
 * This is the Ionic Cordova SDK of Metrix™. You can read more about Metrix™ at metrix.ir.
 *
 * Requires Cordova plugin: `ir.metrix.sdk`. For more info, please see the [Metrix Cordova SDK](https://github.com/metrixorg/MetrixSDK-CordovaPlugin)
 *
 * @usage
 * ```typescript
 *  import { Metrix, MetrixConfig } from '@ionic-native/metrix';
 *
 *  constructor(private metrix: Metrix) { }
 *
 *  ...
 *
 *  const config = new MetrixConfig('APP-ID-HERE');
 *  // Set other config properties.
 *  metrix.create(config);
 *
 * ```
 * @interfaces
 * MetrixAttribution
 * @classes
 * MetrixConfig
 * @enums
 * MetrixAttributionStatus
 */
@Plugin({
    pluginName: 'Metrix',
    plugin: 'ir.metrix.sdk',
    pluginRef: 'Metrix',
    repo: 'https://github.com/metrixorg/MetrixSDK-CordovaPlugin',
    platforms: ['Android']
})

@Injectable()
export class Metrix extends IonicNativePlugin {

    /**
     * This method initializes Metrix SDK
     * @param {MetrixConfig} config MetrixConfig object used as starting options
     */
    @Cordova({ sync: true })
    create(config: MetrixConfig): void { }

    /**
     * Function used to get Session Number
     * @return {Promise<number>} Returns a promise with session number value
     */
    @Cordova()
    getSessionNum(): Promise<number> { return; }

    /**
     * This method tracks an event
     * @param {string} slug the slug of the event to be tracked
     * @param {Map<String, String> | object} attributes optional attributes of the event to be tracked
     */
    @Cordova({ sync: true })
    newEvent(slug: string, attributes?: Map<String, String> | object): void {}

    /**
     * This method adds the provided attributes to all metrix events
     * @param {Map<String, String> | object} attributes the attributes to be added to all future events
     */
    @Cordova({ sync: true })
    addUserAttributes(attributes: Map<String, String> | object): void {}

    /**
     * This method tracks a revenue
     * @param {string} slug the slug of the event to be tracked
     * @param {number} amount the amount of money gained by the revenue
     * @param {number} currency (OPTIONAL) currency of the amount
     * @param {string} orderId (OPTIONAL) id of the revenue
     */
    @Cordova({ sync: true })
    newRevenue(slug: string, amount: number, currency?: number, orderId?: string): void {}

    /**
     * By making this call, the Metrix SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Metrix backend.
     * @param {string} url URL of the deeplink
     */
    @Cordova({ sync: true })
    appWillOpenUrl(url: string): void {}
}
