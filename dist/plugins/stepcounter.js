"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Stepcounter
 * @description
 * Cordova plugin for using device's stepcounter on Android (API > 19)
 *
 * Use to
 * - start and stop stepcounter service
 * - read device's stepcounter data
 *
 * @usage
 * ```
 * import { Stepcounter } from 'ionic-native';
 *
 * let startingOffset = 0;
 * Stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
 *
 * Stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
 *
 * ```
 */
var Stepcounter = (function () {
    function Stepcounter() {
    }
    /**
     * Start the step counter
     *
     * @param startingOffset {number} will be added to the total steps counted in this session
     * @return {Promise} Returns a Promise that resolves on success or rejects on failure
     */
    Stepcounter.start = function (startingOffset) { return; };
    /**
     * Stop the step counter
     * @return {Promise} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    Stepcounter.stop = function () { return; };
    /**
     * Get the amount of steps for today (or -1 if it no data given)
     * @return {Promise} Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
     */
    Stepcounter.getTodayStepCount = function () { return; };
    /**
     * Get the amount of steps since the start command has been called
     * @return {Promise} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    Stepcounter.getStepCount = function () { return; };
    /**
     * Returns true/false if Android device is running >API level 19 && has the step counter API available
     * @return {Promise} Returns a Promise that resolves on success, or rejects on failure
     */
    Stepcounter.deviceCanCountSteps = function () { return; };
    /**
     * Get the step history (JavaScript object)
     * @return {Promise} Returns a Promise that resolves on success, or rejects on failure
     */
    Stepcounter.getHistory = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "getTodayStepCount", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "getStepCount", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "deviceCanCountSteps", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "getHistory", null);
    Stepcounter = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/texh/cordova-plugin-stepcounter',
            pluginRef: 'stepcounter',
            repo: 'https://github.com/texh/cordova-plugin-stepcounter',
            platforms: ['Android']
        })
    ], Stepcounter);
    return Stepcounter;
}());
exports.Stepcounter = Stepcounter;
//# sourceMappingURL=stepcounter.js.map