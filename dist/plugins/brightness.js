"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Brightness
 * @description
 * The Brightness plugin let you control the display brightness of your device.
 *
 * Requires Cordova plugin: `cordova-plugin-brightness`. For more info, please see the [Brightness plugin docs](https://github.com/mgcrea/cordova-plugin-brightness).
 *
 * @usage
 * ```typescript
 * import { Brightness } from 'ionic-native';
 *
 *
 * let brightnessValue: number = 0.8;
 * Brightness.setBrightness(brightnessValue);
 * ```
 *
 */
var Brightness = (function () {
    function Brightness() {
    }
    /**
     * Sets the brightness of the display.
     *
     * @param {value} Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.
     * @returns {Promise} Returns a Promise that resolves if setting brightness was successful.
     */
    Brightness.setBrightness = function (value) { return; };
    /**
     * Reads the current brightness of the device display.
     *
     * @returns {Promise} Returns a Promise that resolves with the
     * brightness value of the device display (floating number between 0 and 1).
     */
    Brightness.getBrightness = function () { return; };
    /**
    * Keeps the screen on. Prevents the device from setting the screen to sleep.
    */
    Brightness.setKeepScreenOn = function (value) { };
    __decorate([
        plugin_1.Cordova()
    ], Brightness, "setBrightness", null);
    __decorate([
        plugin_1.Cordova()
    ], Brightness, "getBrightness", null);
    __decorate([
        plugin_1.Cordova()
    ], Brightness, "setKeepScreenOn", null);
    Brightness = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-brightness',
            pluginRef: 'cordova.plugins.brightness',
            repo: 'https://github.com/mgcrea/cordova-plugin-brightness',
            platforms: ['Android', 'iOS']
        })
    ], Brightness);
    return Brightness;
}());
exports.Brightness = Brightness;
//# sourceMappingURL=brightness.js.map