"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name WebIntent
 * @description
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import {WebIntent} from 'ionic-native';
 *
 * WebIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 */
var WebIntent = (function () {
    function WebIntent() {
    }
    Object.defineProperty(WebIntent, "ACTION_VIEW", {
        get: function () {
            return window.plugins.webintent.ACTION_VIEW;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent, "EXTRA_TEXT", {
        get: function () {
            return window.plugins.webintent.EXTRA_TEXT;
        },
        enumerable: true,
        configurable: true
    });
    WebIntent.startActivity = function (options) { return; };
    WebIntent.hasExtra = function (extra) { return; };
    WebIntent.getExtra = function (extra) { return; };
    WebIntent.getUri = function () { return; };
    ;
    WebIntent.onNewIntent = function () { return; };
    ;
    WebIntent.sendBroadcast = function (options) { return; };
    __decorate([
        plugin_1.CordovaProperty
    ], WebIntent, "ACTION_VIEW", null);
    __decorate([
        plugin_1.CordovaProperty
    ], WebIntent, "EXTRA_TEXT", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "startActivity", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "hasExtra", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "getExtra", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "getUri", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "onNewIntent", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "sendBroadcast", null);
    WebIntent = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/Initsogar/cordova-webintent.git',
            pluginRef: 'window.plugins.webintent',
            repo: 'https://github.com/Initsogar/cordova-webintent.git',
            platforms: ['Android']
        })
    ], WebIntent);
    return WebIntent;
}());
exports.WebIntent = WebIntent;
//# sourceMappingURL=webintent.js.map