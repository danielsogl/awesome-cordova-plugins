"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name ZBar
 * @description
 * The ZBar Scanner Plugin allows you to scan 2d barcodes.
 *
 * Requires Cordova plugin: `cordova-plugin-cszbar`. For more info, please see the [zBar plugin docs](https://github.com/tjwoon/csZBar).
 *
 * @usage
 * ```
 * import { ZBar } from 'ionic-native';
 *
 * let zBarOptions = {
 *       flash: "off",
 *       drawSight: false
 *     };
 *
 * ZBar.scan(zBarOptions)
 *    .then(result => {
 *       console.log(result); // Scanned code
 *    })
 *    .catch(error => {
 *       console.log(error); // Error message
 *    });
 *
 * ```
 *
 * @advanced
 * zBar options
 *
 * | Option             | Type      | Values                    | Defaults                                                    |
 * |--------------------|-----------|-----------------------------------------------------------------------------------------|
 * | text_title         |`string?`  |                           | `"Scan QR Code"` (Android only)                             |
 * | text_instructions  |`string?`  |                           | `"Please point your camera at the QR code."` (Android only) |
 * | camera             |`string?`  | `"front"`, `"back"`,      | `"back"`                                                    |
 * | flash              |`string?`  | `"on"`, `"off"`, `"auto"` | `"auto"`                                                    |
 * | drawSight          |`boolean?` | `true`, `false`           | `true` (Draws red line in center of scanner)                |
 *
 */
var ZBar = (function () {
    function ZBar() {
    }
    /**
     * Open the scanner
     * @param options { ZBarOptions } Scan options
     * @return Returns a Promise that resolves with the scanned string, or rejects with an error.
     */
    ZBar.scan = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], ZBar, "scan", null);
    ZBar = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-cszbar',
            pluginRef: 'cloudSky.zBar',
            repo: 'https://github.com/tjwoon/csZBar',
            platforms: ['Android', 'iOS']
        })
    ], ZBar);
    return ZBar;
}());
exports.ZBar = ZBar;
//# sourceMappingURL=z-bar.js.map