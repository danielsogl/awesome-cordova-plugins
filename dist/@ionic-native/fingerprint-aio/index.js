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
 * @name Fingerprint AIO
 * @description
 * Use simple fingerprint authentication on Android and iOS.
 * Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
 *
 * @usage
 * ```typescript
 * import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
 *
 * constructor(private faio: FingerprintAIO) { }
 *
 * ...
 *
 * this.faio.show({
 *     clientId: 'Fingerprint-Demo',
 *     clientSecret: 'password', //Only necessary for Android
 *     disableBackup:true  //Only for Android(optional)
 * })
 * .then((result: any) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 * ```
 * @interfaces
 * FingerprintOptions
 */
var FingerprintAIO = (function (_super) {
    __extends(FingerprintAIO, _super);
    function FingerprintAIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if fingerprint authentication is available
     * @return {Promise<any>} Returns a promise with result
     */
    FingerprintAIO.prototype.isAvailable = function () { return; };
    /**
     * Show authentication dialogue
     * @param options {FingerprintOptions} options for platform specific fingerprint API
     * @return {Promise<any>} Returns a promise that resolves when authentication was successfull
     */
    FingerprintAIO.prototype.show = function (options) { return; };
    return FingerprintAIO;
}(IonicNativePlugin));
FingerprintAIO.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FingerprintAIO.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FingerprintAIO.prototype, "isAvailable", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FingerprintAIO.prototype, "show", null);
FingerprintAIO = __decorate([
    Plugin({
        pluginName: 'FingerprintAIO',
        plugin: 'cordova-plugin-fingerprint-aio',
        pluginRef: 'Fingerprint',
        repo: 'https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio',
        platforms: ['Android', 'iOS']
    })
], FingerprintAIO);
export { FingerprintAIO };
//# sourceMappingURL=index.js.map