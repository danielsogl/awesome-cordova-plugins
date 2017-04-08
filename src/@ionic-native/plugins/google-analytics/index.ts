import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

declare var window;

/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 * @usage
 * ```typescript
 * import { GoogleAnalytics } from '@ionic-native/google-analytics';
 *
 * constructor(private ga: GoogleAnalytics) { }
 *
 * ...
 *
 * this.ga.startTrackerWithId('YOUR_TRACKER_ID')
 *    .then(() => {
 *      console.log('Google analytics is ready now');
        this.ga.trackView('test');
 *      // Tracker is ready
 *      // You can now track pages or set additional information such as AppVersion or UserId
 *    })
 *    .catch(e => console.log('Error starting GoogleAnalytics', e));
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'GoogleAnalytics',
  plugin: 'cordova-plugin-google-analytics',
  pluginRef: 'ga',
  repo: 'https://github.com/danwilson/google-analytics-plugin',
  platforms: ['Android', 'iOS', 'Browser']
})
@Injectable()
export class GoogleAnalytics {

  /**
   * In your 'deviceready' handler, set up your Analytics tracker.
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/
   * @param {string}  id  Your Google Analytics Mobile App property
   * @param {number} interval Optional dispatch period in seconds. Defaults to 30.
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  startTrackerWithId(id: string, interval?: number): Promise<any> { return; }

  /**
   * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
   * @param allow {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  setAllowIDFACollection(allow: boolean): Promise<any> { return; }

  /**
   * Set a UserId
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
   * @param {string} id User ID
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserId(id: string): Promise<any> { return; }

  /**
   * Set a anonymize Ip address
   * @param anonymize {boolean} Set to true to anonymize the IP Address
   * @returns {Promise<any>}
   */
  @Cordova()
  setAnonymizeIp(anonymize: boolean): Promise<any> { return; }

  /**
   * Sets the app version
   * @param appVersion {string} App version
   * @returns {Promise<any>}
   */
  @Cordova()
  setAppVersion(appVersion: string): Promise<any> { return; }

  /**
   * Set OptOut
   * @param optout {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  setOptOut(optout: boolean): Promise<any> { return; }

  /**
   * Enable verbose logging
   * @returns {Promise<any>}
   */
  @Cordova()
  debugMode(): Promise<any> { return; }

  /**
   * Track custom metric
   * @param key {string}
   * @param value {any}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3
  })
  trackMetric(key: string, value?: any): Promise<any> { return; }

  /**
   * Track a screen
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
   *
   * @param title {string} Screen title
   * @param campaignUrl {string} Campaign url for measuring referrals
   * @param newSession {boolean} Set to true to create a new session
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4
  })
  trackView(title: string, campaignUrl?: string, newSession?: boolean): Promise<any> { return; }

  /**
   * Add a Custom Dimension
   * https://developers.google.com/analytics/devguides/platform/customdimsmets
   * @param key {number}
   * @param value {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  addCustomDimension(key: number, value: string): Promise<any> { return; }

  /**
   * Track an event
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
   * @param category {string}
   * @param action {string}
   * @param label {string}
   * @param value {number}
   * @param newSession {boolean} Set to true to create a new session
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 5,
    errorIndex: 6
  })
  trackEvent(category: string, action: string, label?: string, value?: number, newSession?: boolean): Promise<any> { return; }

  /**
   * Track an exception
   * @param description {string}
   * @param fatal {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  trackException(description: string, fatal: boolean): Promise<any> { return; }

  /**
   * Track User Timing (App Speed)
   * @param category {string}
   * @param intervalInMilliseconds {number}
   * @param variable {string}
   * @param label {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  trackTiming(category: string, intervalInMilliseconds: number, variable: string, label: string): Promise<any> { return; }

  /**
   * Add a Transaction (Ecommerce)
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
   * @param id {string}
   * @param affiliation {string}
   * @param revenue {number}
   * @param tax {number}
   * @param shipping {number}
   * @param currencyCode {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  addTransaction(id: string, affiliation: string, revenue: number, tax: number, shipping: number, currencyCode: string): Promise<any> { return; }

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
   * @returns {Promise<any>}
   */
  @Cordova()
  addTransactionItem(id: string, name: string, sku: string, category: string, price: number, quantity: number, currencyCode: string): Promise<any> { return; }

  /**
   * Enable/disable automatic reporting of uncaught exceptions
   * @param shouldEnable {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  enableUncaughtExceptionReporting(shouldEnable: boolean): Promise<any> { return; }

}
