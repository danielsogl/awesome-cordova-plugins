import {Plugin, Cordova} from './plugin';

declare var window;

/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 */
@Plugin({
    plugin: 'cordova-plugin-google-analytics',
    pluginRef: 'analytics',
    repo: 'https://github.com/danwilson/google-analytics-plugin',
    platforms: ['Android', 'iOS']
})
export class GoogleAnalytics {
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     */
    @Cordova()
    static startTrackerWithId(id: string): Promise<any> { return; }

    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param {string}  title   Screen title
     */
    @Cordova()
    static trackView(title: string): Promise<any> { return; }

    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {string}  category
     * @param {string}  action
     * @param {string}  label
     * @param {number}  value
     */
    @Cordova()
    static trackEvent(category: string, action: string, label?: string, value?: number): Promise<any> { return; }

    /**
     * Track an exception
     * @param {string}  description
     * @param {boolean} fatal
     */
    @Cordova()
    static trackException(description: string, fatal: boolean): Promise<any> { return; }

    /**
     * Track User Timing (App Speed)
     * @param {string}  category
     * @param {number}  intervalInMilliseconds
     * @param {string}  variable
     * @param {string}  label
     */
    @Cordova()
    static trackTiming(category: string, intervalInMilliseconds: number, variable: string, label: string): Promise<any> { return; }

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
    @Cordova()
    static addTransaction(id: string, affiliation: string, revenue: number, tax: number, shipping: number, currencyCode: string): Promise<any> { return; }

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
    @Cordova()
    static addTransactionItem(id: string, name: string, sku: string, category: string, price: number, quantity: number, currencyCode: string): Promise<any> { return; }

    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param {string}  key
     * @param {string}  value
     */
    @Cordova()
    static addCustomDimension(key: number, value: string): Promise<any> { return; }

    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string}  id
     */
    @Cordova()
    static setUserId(id: string): Promise<any> { return; }

    /**
     * Enable verbose logging
     */
    @Cordova()
    static debugMode(): Promise<any> { return; }

    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param {boolean} shouldEnable
     */
    @Cordova()
    static enableUncaughtExceptionReporting(shouldEnable: boolean): Promise<any> { return; }
}
