"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Instagram
 * @description Share a photo with the instagram app
 *
 * @usage
 * ```
 * import {Instagram} from 'ionic-native';
 *
 * Instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
 *   .then(() => console.log('Shared!'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var Instagram = (function () {
    function Instagram() {
    }
    /**
     * Detect if the Instagram application is installed on the device.
     *
     * @return {Promise<boolean|string>} Returns a promise that returns a boolean value if installed, or the app version on android
     */
    Instagram.isInstalled = function () { return; };
    /**
     * Share an image on Instagram
     * Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.
     *
     * @param canvasIdOrDataUrl The canvas element id or the dataURL of the image to share
     * @param caption The caption of the image
     * @return {Promise<any>} Returns a promise that resolves if the image was shared
     */
    Instagram.share = function (canvasIdOrDataUrl, caption) { return; };
    /**
     * Share a library asset or video
     * @param assetLocalIdentifier A local fileURI
     * @return {Promise<any>} Returns a promise that resolves if the image was shared
     */
    Instagram.shareAsset = function (assetLocalIdentifier) { return; };
    __decorate([
        plugin_1.Cordova({
            callbackStyle: 'node'
        })
    ], Instagram, "isInstalled", null);
    __decorate([
        plugin_1.Cordova({
            callbackStyle: 'node'
        })
    ], Instagram, "share", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Instagram, "shareAsset", null);
    Instagram = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-instagram-plugin',
            pluginRef: 'Instagram',
            repo: 'https://github.com/vstirbu/InstagramPlugin'
        })
    ], Instagram);
    return Instagram;
}());
exports.Instagram = Instagram;
//# sourceMappingURL=instagram.js.map