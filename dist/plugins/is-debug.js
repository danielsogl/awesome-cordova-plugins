"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name IsDebug
 * @description
 * Detect if the app is running in debug mode or not.
 * Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user.
 *
 * @usage
 * ```
 * import {IsDebug} from 'ionic-native';
 *
 * IsDebug.getIsDebug()
 *   .then((isDebug: boolean) => console.log('Is debug:', isDebug))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var IsDebug = (function () {
    function IsDebug() {
    }
    /**
     * Determine if an app was installed via xcode / eclipse / the ionic CLI etc
     * @return {Promise<boolean>} Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
     */
    IsDebug.getIsDebug = function () {
        return;
    };
    __decorate([
        plugin_1.Cordova()
    ], IsDebug, "getIsDebug", null);
    IsDebug = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-is-debug',
            pluginRef: 'cordova.plugins.IsDebug',
            repo: 'https://github.com/mattlewis92/cordova-plugin-is-debug'
        })
    ], IsDebug);
    return IsDebug;
}());
exports.IsDebug = IsDebug;
//# sourceMappingURL=is-debug.js.map