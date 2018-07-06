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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Backlight
 * @description
 * This plugin adds turning on/off the device backlight.
 *
 * @usage
 * ```typescript
 * import { Backlight } from '@ionic-native/backlight';
 *
 * constructor(private backlight: Backlight) { }
 *
 * ...
 *
 * // Turn backlight on
 * this.backlight.on().then(() => console.log('backlight on'));
 *
 * // Turn backlight off
 * this.backlight.off().then(() => console.log('backlight off'));
 *
 * ```
 */
var Backlight = (function (_super) {
    __extends(Backlight, _super);
    function Backlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function turns backlight on
     * @return {Promise<any>} Returns a promise that resolves when the backlight is on
     */
    Backlight.prototype.on = function () { return; };
    /**
     * This function turns backlight off
     * @return {Promise<any>} Returns a promise that resolves when the backlight is off
     */
    Backlight.prototype.off = function () { return; };
    return Backlight;
}(IonicNativePlugin));
Backlight.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Backlight.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Backlight.prototype, "on", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Backlight.prototype, "off", null);
Backlight = __decorate([
    Plugin({
        pluginName: 'Backlight',
        plugin: 'cordova-plugin-backlight',
        pluginRef: 'cordova.plugins.Backlight',
        repo: 'https://github.com/mebibou/cordova-plugin-backlight',
        platforms: ['Android']
    })
], Backlight);
export { Backlight };
//# sourceMappingURL=index.js.map