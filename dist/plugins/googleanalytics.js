"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 */
var GoogleAnalytics = (function () {
    function GoogleAnalytics() {
    }
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     */
    GoogleAnalytics.startTrackerWithId = function (id) { return; };
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param {string}  title         Screen title
     * @param {string}  campaignUrl   Campaign url for measuring referrals
     */
    GoogleAnalytics.trackView = function (title, campaignUrl) { return; };
    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {string}  category
     * @param {string}  action
     * @param {string}  label
     * @param {number}  value
     */
    GoogleAnalytics.trackEvent = function (category, action, label, value) { return; };
    /**
     * Track an exception
     * @param {string}  description
     * @param {boolean} fatal
     */
    GoogleAnalytics.trackException = function (description, fatal) { return; };
    /**
     * Track User Timing (App Speed)
     * @param {string}  category
     * @param {number}  intervalInMilliseconds
     * @param {string}  variable
     * @param {string}  label
     */
    GoogleAnalytics.trackTiming = function (category, intervalInMilliseconds, variable, label) { return; };
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
    GoogleAnalytics.addTransaction = function (id, affiliation, revenue, tax, shipping, currencyCode) { return; };
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
    GoogleAnalytics.addTransactionItem = function (id, name, sku, category, price, quantity, currencyCode) { return; };
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param {string}  key
     * @param {string}  value
     */
    GoogleAnalytics.addCustomDimension = function (key, value) { return; };
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string}  id
     */
    GoogleAnalytics.setUserId = function (id) { };
    /**
     * Sets the app version
     * @param appVersion
     */
    GoogleAnalytics.setAppVersion = function (appVersion) { };
    /**
     * Set a anonymize Ip address
     * @param anonymize
     */
    GoogleAnalytics.setAnonymizeIp = function (anonymize) { };
    /**
     * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
     * @param allow
     */
    GoogleAnalytics.setAllowIDFACollection = function (allow) { };
    /**
     * Enable verbose logging
     */
    GoogleAnalytics.debugMode = function () { return; };
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param {boolean} shouldEnable
     */
    GoogleAnalytics.enableUncaughtExceptionReporting = function (shouldEnable) { return; };
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "startTrackerWithId", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackView", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackException", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackTiming", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addTransaction", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addTransactionItem", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addCustomDimension", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], GoogleAnalytics, "setUserId", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], GoogleAnalytics, "setAppVersion", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], GoogleAnalytics, "setAnonymizeIp", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], GoogleAnalytics, "setAllowIDFACollection", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], GoogleAnalytics, "debugMode", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "enableUncaughtExceptionReporting", null);
    GoogleAnalytics = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-google-analytics',
            pluginRef: 'analytics',
            repo: 'https://github.com/danwilson/google-analytics-plugin',
            platforms: ['Android', 'iOS']
        })
    ], GoogleAnalytics);
    return GoogleAnalytics;
}());
exports.GoogleAnalytics = GoogleAnalytics;
//# sourceMappingURL=googleanalytics.js.map