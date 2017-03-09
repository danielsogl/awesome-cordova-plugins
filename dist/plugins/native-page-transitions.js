"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name NativePageTransitions
 * @description
 * The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.
 *
 * @usage
 * ```
 * import {NativePageTransitions, TransitionOptions} from 'ionic-native';
 *
 * let options: TransitionOptions = {
 *    direction: 'up',
 *    duration: 500,
 *    slowdownfactor: 3,
 *    slidePixels: 20,
 *    iosdelay: 100,
 *    androiddelay: 150,
 *    winphonedelay: 250,
 *    fixedPixelsTop: 0,
 *    fixedPixelsBottom: 60
 *  };
 *
 * NativePageTransitions.slide(options)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
var NativePageTransitions = (function () {
    function NativePageTransitions() {
    }
    /**
     * Perform a slide animation
     * @param options {TransitionOptions} Options for the transition
     */
    NativePageTransitions.slide = function (options) { return; };
    /**
     * Perform a flip animation
     * @param options {TransitionOptions} Options for the transition
     */
    NativePageTransitions.flip = function (options) { return; };
    /**
     * Perform a fade animation
     * @param options {TransitionOptions} Options for the transition
     */
    NativePageTransitions.fade = function (options) { return; };
    /**
     * Perform a slide animation
     * @param options {TransitionOptions} Options for the transition
     */
    NativePageTransitions.drawer = function (options) { return; };
    /**
     * Perform a slide animation
     * @param options {TransitionOptions} Options for the transition
     */
    NativePageTransitions.curl = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], NativePageTransitions, "slide", null);
    __decorate([
        plugin_1.Cordova()
    ], NativePageTransitions, "flip", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS', 'Android'] })
    ], NativePageTransitions, "fade", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS', 'Android'] })
    ], NativePageTransitions, "drawer", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], NativePageTransitions, "curl", null);
    NativePageTransitions = __decorate([
        plugin_1.Plugin({
            plugin: 'com.telerik.plugins.nativepagetransitions',
            pluginRef: 'plugins.nativepagetransitions',
            repo: 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions',
            platforms: ['iOS', 'Android', 'Windows Phone']
        })
    ], NativePageTransitions);
    return NativePageTransitions;
}());
exports.NativePageTransitions = NativePageTransitions;
//# sourceMappingURL=native-page-transitions.js.map