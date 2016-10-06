"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Vibration
 * @description Vibrates the device
 * @usage
 * ```typescript
 * import { Vibration } from 'ionic-native';
 *
 *
 * // Vibrate the device for a second
 * // Duration is ignored on iOS.
 * Vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * Vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * Vibration.vibrate(0);
 * ```
 */
var Vibration = (function () {
    function Vibration() {
    }
    /**
     * Vibrates the device for given amount of time.
     * @param time {number|Array<number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    Vibration.vibrate = function (time) { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Vibration, "vibrate", null);
    Vibration = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-vibration',
            pluginRef: 'navigator',
            repo: 'https://github.com/apache/cordova-plugin-vibration',
            platforms: ['Android', 'iOS', 'Windows 8.1 Phone', 'Windows 8.1', 'Windows 10']
        })
    ], Vibration);
    return Vibration;
}());
exports.Vibration = Vibration;
//# sourceMappingURL=vibration.js.map