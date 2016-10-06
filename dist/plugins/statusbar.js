"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Status Bar
 * @description
 * Manage the appearance of the native status bar.
 *
 * Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).
 *
 * @usage
 * ```typescript
 * import { StatusBar } from 'ionic-native';
 *
 *
 * StatusBar.overlaysWebView(true); // let status bar overlay webview
 *
 * StatusBar.backgroundColorByHexString('#ffffff'); // set status bar to white
 * ```
 *
 */
var StatusBar = (function () {
    function StatusBar() {
    }
    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
     */
    StatusBar.overlaysWebView = function (doesOverlay) { };
    ;
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    StatusBar.styleDefault = function () { };
    ;
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleLightContent = function () { };
    ;
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleBlackTranslucent = function () { };
    ;
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleBlackOpaque = function () { };
    ;
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} colorName  The name of the color (from above)
     */
    StatusBar.backgroundColorByName = function (colorName) { };
    ;
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    StatusBar.backgroundColorByHexString = function (hexString) { };
    ;
    /**
     * Hide the StatusBar
     */
    StatusBar.hide = function () { };
    ;
    /**
    * Show the StatusBar
    */
    StatusBar.show = function () { };
    ;
    Object.defineProperty(StatusBar, "isVisible", {
        /**
         * Whether the StatusBar is currently visible or not.
         */
        get: function () { return window.StatusBar.isVisible; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "overlaysWebView", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleDefault", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleLightContent", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleBlackTranslucent", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleBlackOpaque", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "backgroundColorByName", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "backgroundColorByHexString", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "hide", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "show", null);
    __decorate([
        plugin_1.CordovaProperty
    ], StatusBar, "isVisible", null);
    StatusBar = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-statusbar',
            pluginRef: 'StatusBar',
            repo: 'https://github.com/apache/cordova-plugin-statusbar',
            platforms: ['iOS', 'Android', 'Windows Phone 8', 'Windows 8', 'Windows 10']
        })
    ], StatusBar);
    return StatusBar;
}());
exports.StatusBar = StatusBar;
//# sourceMappingURL=statusbar.js.map