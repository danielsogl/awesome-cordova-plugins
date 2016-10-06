/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 */
export declare class GoogleAnalytics {
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     */
    static startTrackerWithId(id: string): Promise<any>;
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param {string}  title         Screen title
     * @param {string}  campaignUrl   Campaign url for measuring referrals
     */
    static trackView(title: string, campaignUrl?: string): Promise<any>;
    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {string}  category
     * @param {string}  action
     * @param {string}  label
     * @param {number}  value
     */
    static trackEvent(category: string, action: string, label?: string, value?: number): Promise<any>;
    /**
     * Track an exception
     * @param {string}  description
     * @param {boolean} fatal
     */
    static trackException(description: string, fatal: boolean): Promise<any>;
    /**
     * Track User Timing (App Speed)
     * @param {string}  category
     * @param {number}  intervalInMilliseconds
     * @param {string}  variable
     * @param {string}  label
     */
    static trackTiming(category: string, intervalInMilliseconds: number, variable: string, label: string): Promise<any>;
    /**
     * Add a Transaction (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
     * @param {string}  id
     * @param {string}  affiliation
     * @param {number}  revenue
     * @param {number}  tax
     * @param {number}  shipping
     * @param {string}  currencyCode
     */
    static addTransaction(id: string, affiliation: string, revenue: number, tax: number, shipping: number, currencyCode: string): Promise<any>;
    /**
     * Add a Transaction Item (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
     * @param {string}  id
     * @param {string}  name
     * @param {string}  sku
     * @param {string}  category
     * @param {number}  price
     * @param {number}  quantity
     * @param {string}  currencyCode
     */
    static addTransactionItem(id: string, name: string, sku: string, category: string, price: number, quantity: number, currencyCode: string): Promise<any>;
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param {string}  key
     * @param {string}  value
     */
    static addCustomDimension(key: number, value: string): Promise<any>;
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string}  id
     */
    static setUserId(id: string): void;
    /**
     * Sets the app version
     * @param appVersion
     */
    static setAppVersion(appVersion: string): void;
    /**
     * Set a anonymize Ip address
     * @param anonymize
     */
    static setAnonymizeIp(anonymize: boolean): void;
    /**
     * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
     * @param allow
     */
    static setAllowIDFACollection(allow: boolean): void;
    /**
     * Enable verbose logging
     */
    static debugMode(): Promise<any>;
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param {boolean} shouldEnable
     */
    static enableUncaughtExceptionReporting(shouldEnable: boolean): Promise<any>;
}
