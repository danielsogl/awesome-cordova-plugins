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
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name Taptic Engine
 * @description
 * An Ionic plugin to use Taptic Engine API on iPHone 7, 7 Plus or newer.
 *
 * @usage
 * ```typescript
 * import { TapticEngine } from '@ionic-native/taptic-engine';
 *
 * ...
 *
 * constructor(private taptic: TapticEngine) { }
 *
 * ...
 *
 * this.taptic.selection();
 *
 * this.taptic.notification();
 *
 * this.taptic.impact();
 *
 * ```
 */
var TapticEngine = (function (_super) {
    __extends(TapticEngine, _super);
    function TapticEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Use selection feedback generators to indicate a change in selection.
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    TapticEngine.prototype.selection = function () { return; };
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { type: 'success' } (or 'warning'/'error')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    TapticEngine.prototype.notification = function (options) { return; };
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { style: 'light' } (or 'medium'/'heavy')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    TapticEngine.prototype.impact = function (options) { return; };
    return TapticEngine;
}(IonicNativePlugin));
TapticEngine.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TapticEngine.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TapticEngine.prototype, "selection", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TapticEngine.prototype, "notification", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TapticEngine.prototype, "impact", null);
TapticEngine = __decorate([
    Plugin({
        pluginName: 'TapticEngine',
        plugin: 'cordova-plugin-taptic-engine',
        pluginRef: 'TapticEngine',
        repo: 'https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine',
        platforms: ['iOS']
    })
], TapticEngine);
export { TapticEngine };
//# sourceMappingURL=index.js.map