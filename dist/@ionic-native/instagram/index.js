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
 * @name Instagram
 * @description Share a photo with the instagram app
 *
 * @usage
 * ```typescript
 * import { Instagram } from '@ionic-native/instagram';
 *
 * constructor(private instagram: Instagram) { }
 *
 * ...
 *
 * this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
 *   .then(() => console.log('Shared!'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var Instagram = (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Detect if the Instagram application is installed on the device.
     *
     * @returns {Promise<boolean|string>} Returns a promise that returns a boolean value if installed, or the app version on android
     */
    Instagram.prototype.isInstalled = function () { return; };
    /**
     * Share an image on Instagram
     * Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.
     *
     * @param canvasIdOrDataUrl The canvas element id or the dataURL of the image to share
     * @param caption The caption of the image
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    Instagram.prototype.share = function (canvasIdOrDataUrl, caption) { return; };
    /**
     * Share a library asset or video
     * @param assetLocalIdentifier A local fileURI
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    Instagram.prototype.shareAsset = function (assetLocalIdentifier) { return; };
    return Instagram;
}(IonicNativePlugin));
Instagram.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Instagram.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackStyle: 'node'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Instagram.prototype, "isInstalled", null);
__decorate([
    Cordova({
        callbackStyle: 'node'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Instagram.prototype, "share", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Instagram.prototype, "shareAsset", null);
Instagram = __decorate([
    Plugin({
        pluginName: 'Instagram',
        plugin: 'cordova-instagram-plugin',
        pluginRef: 'Instagram',
        repo: 'https://github.com/vstirbu/InstagramPlugin',
        platforms: ['Android', 'iOS']
    })
], Instagram);
export { Instagram };
//# sourceMappingURL=index.js.map