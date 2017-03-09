"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 *
 * @usage
 * ```
 * import {Mixpanel} from 'ionic-native';
 *
 * Mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
var Mixpanel = (function () {
    function Mixpanel() {
    }
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.alias = function (aliasId, originalId) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.distinctId = function () { return; };
    /**
     *
     */
    Mixpanel.flush = function () { return; };
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.identify = function (distinctId) { return; };
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    Mixpanel.init = function (token) { return; };
    /**
     *
     * @param superProperties
     * @returns {Promise<any>}
     */
    Mixpanel.registerSuperProperties = function (superProperties) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.reset = function () { return; };
    /**
     *
     * @param eventName
     * @param eventProperties
     */
    Mixpanel.track = function (eventName, eventProperties) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.showSurvey = function () { return; };
    Object.defineProperty(Mixpanel, "people", {
        /**
         *
         * @returns {MixpanelPeople}
         */
        get: function () { return mixpanel.people; },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "alias", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "distinctId", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "flush", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "identify", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "init", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "registerSuperProperties", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "reset", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "track", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "showSurvey", null);
    __decorate([
        plugin_1.CordovaProperty
    ], Mixpanel, "people", null);
    Mixpanel = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-mixpanel',
            pluginRef: 'mixpanel',
            repo: 'https://github.com/samzilverberg/cordova-mixpanel-plugin'
        })
    ], Mixpanel);
    return Mixpanel;
}());
exports.Mixpanel = Mixpanel;
//# sourceMappingURL=mixpanel.js.map