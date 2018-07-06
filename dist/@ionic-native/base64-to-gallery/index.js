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
 * @name Base64 To Gallery
 * @description This plugin allows you to save base64 data as a png image into the device
 * @usage
 * ```typescript
 * import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
 *
 * constructor(private base64ToGallery: Base64ToGallery) { }
 *
 *
 * ...
 *
 *
 * this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
 *   res => console.log('Saved image to gallery ', res),
 *   err => console.log('Error saving image to gallery ', err)
 * );
 * ```
 */
var Base64ToGallery = (function (_super) {
    __extends(Base64ToGallery, _super);
    function Base64ToGallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a base64 string to an image file in the device gallery
     * @param {string} data The actual base64 string that you want to save
     * @param {any} [options] An object with properties: prefix: string, mediaScanner: boolean. Prefix will be prepended to the filename. If true, mediaScanner runs Media Scanner on Android and saves to Camera Roll on iOS; if false, saves to Library folder on iOS.
     * @returns {Promise<any>} returns a promise that resolves when the image is saved.
     */
    Base64ToGallery.prototype.base64ToGallery = function (data, options) {
        return;
    };
    return Base64ToGallery;
}(IonicNativePlugin));
Base64ToGallery.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Base64ToGallery.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Base64ToGallery.prototype, "base64ToGallery", null);
Base64ToGallery = __decorate([
    Plugin({
        pluginName: 'Base64ToGallery',
        plugin: 'cordova-base64-to-gallery',
        pluginRef: 'cordova',
        repo: 'https://github.com/Nexxa/cordova-base64-to-gallery',
        platforms: ['Android', 'iOS', 'Windows Phone 8']
    })
], Base64ToGallery);
export { Base64ToGallery };
//# sourceMappingURL=index.js.map