"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name PowerManagement
 * @description
 * The PowerManagement plugin offers access to the devices power-management functionality.
 * It should be used for applications which keep running for a long time without any user interaction.
 *
 * @usage
 * ```
 * import {PowerManagement} from 'ionic-native';
 *
 * PowerManagement.acquire()
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
var PowerManagement = (function () {
    function PowerManagement() {
    }
    /**
     * Acquire a wakelock by calling this.
     */
    PowerManagement.acquire = function () { return; };
    /**
     * This acquires a partial wakelock, allowing the screen to be dimmed.
     */
    PowerManagement.dim = function () { return; };
    /**
     * Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.
     */
    PowerManagement.release = function () { return; };
    /**
     * By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
     * It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.
     * @param set {boolean}
     */
    PowerManagement.setReleaseOnPause = function (set) { return; };
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "acquire", null);
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "dim", null);
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "release", null);
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "setReleaseOnPause", null);
    PowerManagement = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-powermanagement-orig',
            pluginRef: 'powerManagement',
            repo: 'https://github.com/Viras-/cordova-plugin-powermanagement'
        })
    ], PowerManagement);
    return PowerManagement;
}());
exports.PowerManagement = PowerManagement;
//# sourceMappingURL=power-management.js.map