"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SafariViewController
 * @description
 * @usage
 * ```
 * import { SafariViewController } from 'ionic-native';
 *
 *
 * SafariViewController.isAvailable()
 *   .then(
 *     (available: boolean) => {
 *       if(available){
 *
 *         SafariViewController.show({
 *           url: 'http://ionic.io',
 *           hidden: false,
 *           animated: false,
 *           transition: 'curl',
 *           enterReaderModeIfAvailable: true,
 *           tintColor: '#ff0000'
 *         })
 *         .then(
 *           (result: any) => {
 *             if(result.event === 'opened') console.log('Opened');
 *             else if(result.event === 'loaded') console.log('Loaded');
 *             else if(result.event === 'closed') console.log('Closed');
 *           },
 *           (error: any) => console.error(error)
 *         );
 *
 *       } else {
 *         // use fallback browser, example InAppBrowser
 *       }
 *     }
 *   );
 * ```
 */
var SafariViewController = (function () {
    function SafariViewController() {
    }
    /**
     * Checks if SafariViewController is available
     */
    SafariViewController.isAvailable = function () { return; };
    /**
     * Shows Safari View Controller
     * @param options
     */
    SafariViewController.show = function (options) { return; };
    /**
     * Hides Safari View Controller
     */
    SafariViewController.hide = function () { };
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     */
    SafariViewController.connectToService = function () { return; };
    /**
     * Call this method whenever there's a chance the user will open an external url.
     */
    SafariViewController.warmUp = function () { return; };
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url
     */
    SafariViewController.mayLaunchUrl = function (url) { return; };
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "hide", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "connectToService", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "warmUp", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "mayLaunchUrl", null);
    SafariViewController = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-safariviewcontroller',
            pluginRef: 'SafariViewController',
            platforms: ['iOS', 'Android'],
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller'
        })
    ], SafariViewController);
    return SafariViewController;
}());
exports.SafariViewController = SafariViewController;
//# sourceMappingURL=safari-view-controller.js.map