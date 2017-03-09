"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Sim
 * @description
 * Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.
 *
 * Requires Cordova plugin: `cordova-plugin-sim`. For more info, please see the [Cordova Sim docs](https://github.com/pbakondy/cordova-plugin-sim).
 *
 * @usage
 * ```typescript
 * import { Sim } from 'ionic-native';
 *
 *
 * Sim.getSimInfo().then(
 *   (info) => console.log('Sim info: ', info),
 *   (err) => console.log('Unable to get sim info: ', err)
 * );
 * ```
 */
var Sim = (function () {
    function Sim() {
    }
    /**
     * Returns info from the SIM card.
     * @returns {Promise}
     */
    Sim.getSimInfo = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Sim, "getSimInfo", null);
    Sim = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-sim',
            pluginRef: 'plugins.sim',
            repo: 'https://github.com/pbakondy/cordova-plugin-sim',
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], Sim);
    return Sim;
}());
exports.Sim = Sim;
//# sourceMappingURL=sim.js.map