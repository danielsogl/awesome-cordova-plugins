"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * LaunchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 */
var LaunchNavigator = (function () {
    function LaunchNavigator() {
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    LaunchNavigator.navigate = function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     */
    LaunchNavigator.isAppAvailable = function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     */
    LaunchNavigator.availableApps = function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     */
    LaunchNavigator.getAppDisplayName = function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     */
    LaunchNavigator.getAppsForPlatform = function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     */
    LaunchNavigator.supportsTransportMode = function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     */
    LaunchNavigator.getTransportModes = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     */
    LaunchNavigator.supportsLaunchMode = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     */
    LaunchNavigator.supportsStart = function (app, platform) { return; };
    LaunchNavigator.supportsStartName = function (app, platform) { return; };
    LaunchNavigator.supportsDestName = function (app, platform) { return; };
    LaunchNavigator.userSelect = function (destination, options) { };
    LaunchNavigator.APP = {
        USER_SELECT: 'user_select',
        APPLE_MAPS: 'apple_maps',
        GOOGLE_MAPS: 'google_maps',
        WAZE: 'waze',
        CITYMAPPER: 'citymapper',
        NAVIGON: 'navigon',
        TRANSIT_APP: 'transit_app',
        YANDEX: 'yandex',
        UBER: 'uber',
        TOMTOM: 'tomtom',
        BING_MAPS: 'bing_maps',
        SYGIC: 'sygic',
        HERE_MAPS: 'here_maps',
        MOOVIT: 'moovit'
    };
    LaunchNavigator.TRANSPORT_MODE = {
        DRIVING: 'driving',
        WALKING: 'walking',
        BICYCLING: 'bicycling',
        TRANSIT: 'transit'
    };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], LaunchNavigator, "navigate", null);
    __decorate([
        plugin_1.Cordova()
    ], LaunchNavigator, "isAppAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], LaunchNavigator, "availableApps", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "getAppDisplayName", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "getAppsForPlatform", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsTransportMode", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "getTransportModes", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsLaunchMode", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsStart", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsStartName", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsDestName", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "userSelect", null);
    LaunchNavigator = __decorate([
        plugin_1.Plugin({
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator.git'
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}());
exports.LaunchNavigator = LaunchNavigator;
//# sourceMappingURL=launchnavigator.js.map