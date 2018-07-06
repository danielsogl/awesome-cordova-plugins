var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
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
var GoogleAnalytics = (function (_super) {
    __extends(GoogleAnalytics, _super);
    function GoogleAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     * @param {number} interval Optional dispatch period in seconds. Defaults to 30.
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.startTrackerWithId = function (id, interval) { return; };
    /**
     * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
     * @param allow {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.setAllowIDFACollection = function (allow) { return; };
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string} id User ID
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.setUserId = function (id) { return; };
    /**
     * Set a anonymize Ip address
     * @param anonymize {boolean} Set to true to anonymize the IP Address
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.setAnonymizeIp = function (anonymize) { return; };
    /**
     * Sets the app version
     * @param appVersion {string} App version
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.setAppVersion = function (appVersion) { return; };
    /**
     * Set OptOut
     * @param optout {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.setOptOut = function (optout) { return; };
    /**
     * Enable verbose logging
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.debugMode = function () { return; };
    /**
     * Track custom metric
     * @param key {string}
     * @param value {any}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.trackMetric = function (key, value) { return; };
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param title {string} Screen title
     * @param campaignUrl {string} Campaign url for measuring referrals
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.trackView = function (title, campaignUrl, newSession) { return; };
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param key {number}
     * @param value {string}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.addCustomDimension = function (key, value) { return; };
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
    GoogleAnalytics.prototype.trackEvent = function (category, action, label, value, newSession) { return; };
    /**
     * Track an exception
     * @param description {string}
     * @param fatal {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.trackException = function (description, fatal) { return; };
    /**
     * Track User Timing (App Speed)
     * @param category {string}
     * @param intervalInMilliseconds {number}
     * @param variable {string}
     * @param label {string}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.trackTiming = function (category, intervalInMilliseconds, variable, label) { return; };
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
    GoogleAnalytics.prototype.addTransaction = function (id, affiliation, revenue, tax, shipping, currencyCode) { return; };
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
    GoogleAnalytics.prototype.addTransactionItem = function (id, name, sku, category, price, quantity, currencyCode) { return; };
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param shouldEnable {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.prototype.enableUncaughtExceptionReporting = function (shouldEnable) { return; };
    return GoogleAnalytics;
}(IonicNativePlugin));
GoogleAnalytics.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GoogleAnalytics.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "startTrackerWithId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "setAllowIDFACollection", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "setUserId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "setAnonymizeIp", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "setAppVersion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "setOptOut", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "debugMode", null);
__decorate([
    Cordova({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "trackMetric", null);
__decorate([
    Cordova({
        successIndex: 3,
        errorIndex: 4
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "trackView", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "addCustomDimension", null);
__decorate([
    Cordova({
        successIndex: 5,
        errorIndex: 6
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Boolean]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "trackEvent", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "trackException", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "trackTiming", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "addTransaction", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number, String]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "addTransactionItem", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], GoogleAnalytics.prototype, "enableUncaughtExceptionReporting", null);
GoogleAnalytics = __decorate([
    Plugin({
        pluginName: 'GoogleAnalytics',
        plugin: 'cordova-plugin-google-analytics',
        pluginRef: 'ga',
        repo: 'https://github.com/danwilson/google-analytics-plugin',
        platforms: ['Android', 'Browser', 'iOS', 'Windows Phone 8']
    })
], GoogleAnalytics);
export { GoogleAnalytics };
//# sourceMappingURL=index.js.map