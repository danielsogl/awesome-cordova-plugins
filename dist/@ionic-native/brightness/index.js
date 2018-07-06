var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Brightness
 * @description
 * The Brightness plugin let you control the display brightness of your device.
 *
 * Requires Cordova plugin: `cordova-plugin-brightness`. For more info, please see the [Brightness plugin docs](https://github.com/mgcrea/cordova-plugin-brightness).
 *
 * @usage
 * ```typescript
 * import { Brightness } from '@ionic-native/brightness';
 *
 * constructor(private brightness: Brightness) { }
 *
 * ...
 *
 * let brightnessValue: number = 0.8;
 * this.brightness.setBrightness(brightnessValue);
 * ```
 *
 */
var Brightness = (function (_super) {
    __extends(Brightness, _super);
    function Brightness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Sets the brightness of the display.
     *
     * @param {value} Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.
     * @returns {Promise<any>} Returns a Promise that resolves if setting brightness was successful.
     */
    Brightness.prototype.setBrightness = function (value) { return; };
    /**
     * Reads the current brightness of the device display.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the
     * brightness value of the device display (floating number between 0 and 1).
     */
    Brightness.prototype.getBrightness = function () { return; };
    /**
    * Keeps the screen on. Prevents the device from setting the screen to sleep.
    */
    Brightness.prototype.setKeepScreenOn = function (value) { };
    return Brightness;
}(IonicNativePlugin));
Brightness.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Brightness.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Brightness.prototype, "setBrightness", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Brightness.prototype, "getBrightness", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Brightness.prototype, "setKeepScreenOn", null);
Brightness = __decorate([
    Plugin({
        pluginName: 'Brightness',
        plugin: 'cordova-plugin-brightness',
        pluginRef: 'cordova.plugins.brightness',
        repo: 'https://github.com/mgcrea/cordova-plugin-brightness',
        platforms: ['Android', 'iOS']
    })
], Brightness);
export { Brightness };
//# sourceMappingURL=index.js.map