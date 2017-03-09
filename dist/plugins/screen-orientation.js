"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Screen Orientation
 * @description
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, WP8 and Blackberry 10.
 * This plugin is based on an early version of Screen Orientation API so the api does not currently match the current spec.
 *
 * Requires Cordova plugin: `cordova-plugin-screen-orientation`. For more info, please see the [Screen Orientation plugin docs](https://github.com/apache/cordova-plugin-screen-orientation).
 *
 * @usage
 * ```typescript
 * import { ScreenOrientation } from 'ionic-native';
 *
 *
 * // set to either landscape
 * ScreenOrientation.lockOrientation('landscape');
 *
 * // allow user rotate
 * ScreenOrientation.unlockOrientation();
 * ```
 *
 * @advanced
 *
 * Accepted orientation values:
 *
 * | Value                         | Description                                                                  |
 * |-------------------------------|------------------------------------------------------------------------------|
 * | portrait-primary              | The orientation is in the primary portrait mode.                             |
 * | portrait-secondary            | The orientation is in the secondary portrait mode.                           |
 * | landscape-primary             | The orientation is in the primary landscape mode.                            |
 * | landscape-secondary           | The orientation is in the secondary landscape mode.                          |
 * | portrait                      | The orientation is either portrait-primary or portrait-secondary (sensor).   |
 * | landscape                     | The orientation is either landscape-primary or landscape-secondary (sensor). |
 *
 */
var ScreenOrientation = (function () {
    function ScreenOrientation() {
    }
    /**
     * Lock the orientation to the passed value.
     * See below for accepted values
     * @param {orientation} The orientation which should be locked. Accepted values see table below.
     */
    ScreenOrientation.lockOrientation = function (orientation) { };
    /**
     * Unlock and allow all orientations.
     */
    ScreenOrientation.unlockOrientation = function () { };
    Object.defineProperty(ScreenOrientation, "orientation", {
        /*
         * Get the current orientation of the device.
         */
        get: function () {
            return window.screen.orientation;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], ScreenOrientation, "lockOrientation", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], ScreenOrientation, "unlockOrientation", null);
    __decorate([
        plugin_1.CordovaProperty
    ], ScreenOrientation, "orientation", null);
    ScreenOrientation = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-screen-orientation',
            pluginRef: 'window.screen',
            repo: 'https://github.com/apache/cordova-plugin-screen-orientation',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], ScreenOrientation);
    return ScreenOrientation;
}());
exports.ScreenOrientation = ScreenOrientation;
//# sourceMappingURL=screen-orientation.js.map