"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Crop
 * @description Crops images
 * @usage
 * ```
 * import {Crop} from 'ionic-native';
 *
 * ...
 *
 * Crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log("new image path is: " + newImage),
 *     error => console.error("Error cropping image", error)
 *   );
 * ```
 */
var Crop = (function () {
    function Crop() {
    }
    /**
     * Crops an image
     * @param pathToImage
     * @param options
     * @return {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    Crop.crop = function (pathToImage, options) { return; };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Crop, "crop", null);
    Crop = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-crop',
            pluginRef: 'plugins',
            repo: 'https://github.com/jeduan/cordova-plugin-crop'
        })
    ], Crop);
    return Crop;
}());
exports.Crop = Crop;
//# sourceMappingURL=crop.js.map