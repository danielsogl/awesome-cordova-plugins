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
import { Plugin, CordovaInstance, checkAvailability, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
* @hidden
*/
var FlurryAnalyticsObject = (function () {
    function FlurryAnalyticsObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * This function set the Event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when event is sent
     */
    FlurryAnalyticsObject.prototype.logEvent = function (eventName, params) {
        return;
    };
    /**
     * Start a timed event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when timed event is started tracking
     */
    FlurryAnalyticsObject.prototype.startTimedEvent = function (eventName, params) {
        return;
    };
    /**
     * Complete a timed event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when timed event is ended tracking
     */
    FlurryAnalyticsObject.prototype.endTimedEvent = function (eventName, params) {
        return;
    };
    /**
     * This function log an error
     * @param code
     * @param message
     * @return {Promise<any>}
     */
    FlurryAnalyticsObject.prototype.logError = function (code, message) {
        return;
    };
    /**
     * This function log a page view
     * @return {Promise<any>}
     */
    FlurryAnalyticsObject.prototype.logPageView = function () {
        return;
    };
    /**
     * This function set the location for the event
     * (this is will only be used for very course grained statistics like city)
     * @param location {FlurryAnalyticsLocation}
     * @param message {string}
     * @return {Promise<any>}
     */
    FlurryAnalyticsObject.prototype.setLocation = function (location, message) {
        return;
    };
    /**
     * This function start the session
     * Only needed for older versions of Android
     * @return {Promise<any>}
     */
    FlurryAnalyticsObject.prototype.startSession = function () {
        return;
    };
    /**
     * This function end the session
     * Only needed for older versions of Android
     * @return {Promise<any>}
     */
    FlurryAnalyticsObject.prototype.endSession = function () {
        return;
    };
    return FlurryAnalyticsObject;
}());
export { FlurryAnalyticsObject };
__decorate([
    CordovaInstance({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "logEvent", null);
__decorate([
    CordovaInstance({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "startTimedEvent", null);
__decorate([
    CordovaInstance({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "endTimedEvent", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "logError", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "logPageView", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "setLocation", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "startSession", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlurryAnalyticsObject.prototype, "endSession", null);
/**
 * @name Flurry Analytics
 * @description
 * This plugin connects to Flurry Analytics SDK
 *
 * @usage
 * ```typescript
 * import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from 'ionic-native/flurry-analytics';
 *
 * constructor(private flurryAnalytics: FlurryAnalytics) { }
 *
 * ...
 *
 * const options: FlurryAnalyticsOptions = {
 *  appKey: '<your app key>', // REQUIRED
 *  reportSessionsOnClose: true,
 *  enableLogging: true
 * };
 *
 * let fa: FlurryAnalyticsObject = this.flurryAnalytics.create(options);
 *
 * fa.logEvent('event name')
 *   .then(() => console.log('Logged an event!'))
 *   .catch(e => console.log('Error logging the event', e));
 *
 * ```
 * @interfaces
 * FlurryAnalyticsOptions
 * FlurryAnalyticsLocation
 * @classes
 * FlurryAnalyticsObject
 */
var FlurryAnalytics = FlurryAnalytics_1 = (function (_super) {
    __extends(FlurryAnalytics, _super);
    function FlurryAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new instance of FlurryAnalyticsObject
     * @param options {FlurryAnalyticsOptions} options
     * @return {FlurryAnalyticsObject}
     */
    FlurryAnalytics.prototype.create = function (options) {
        var instance;
        if (checkAvailability(FlurryAnalytics_1.pluginRef, null, FlurryAnalytics_1.pluginName) === true) {
            instance = new window.FlurryAnalytics(options);
        }
        return new FlurryAnalyticsObject(instance);
    };
    return FlurryAnalytics;
}(IonicNativePlugin));
FlurryAnalytics.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FlurryAnalytics.ctorParameters = function () { return []; };
FlurryAnalytics = FlurryAnalytics_1 = __decorate([
    Plugin({
        pluginName: 'FlurryAnalytics',
        plugin: 'cordova-plugin-flurryanalytics',
        pluginRef: 'FlurryAnalytics',
        repo: 'https://github.com/blakgeek/cordova-plugin-flurryanalytics',
        platforms: ['Android', 'iOS']
    })
], FlurryAnalytics);
export { FlurryAnalytics };
var FlurryAnalytics_1;
//# sourceMappingURL=index.js.map