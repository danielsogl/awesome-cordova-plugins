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
import { Injectable } from '@angular/core';
import { Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Screenshot
 * @description Captures a screen shot
 * @usage
 * ```typescript
 * import { Screenshot } from '@ionic-native/screenshot';
 *
 * constructor(private screenshot: Screenshot) { }
 *
 * ...
 *
 * // Take a screenshot and save to file
 * this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(onSuccess, onError);
 *
 * // Take a screenshot and get temporary file URI
 * this.screenshot.URI(80).then(onSuccess, onError);
 * ```
 */
var Screenshot = (function (_super) {
    __extends(Screenshot, _super);
    function Screenshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Takes screenshot and saves the image
     *
     * @param format {string} Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param quality {number}  Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param filename {string} Name of the file as stored on the storage
     * @returns {Promise<any>}
     */
    Screenshot.prototype.save = function (format, quality, filename) {
        return new Promise(function (resolve, reject) {
            navigator.screenshot.save(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, format, quality, filename);
        });
    };
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param quality {number} Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @returns {Promise<any>}
     */
    Screenshot.prototype.URI = function (quality) {
        return new Promise(function (resolve, reject) {
            navigator.screenshot.URI(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, quality);
        });
    };
    return Screenshot;
}(IonicNativePlugin));
Screenshot.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Screenshot.ctorParameters = function () { return []; };
Screenshot = __decorate([
    Plugin({
        pluginName: 'Screenshot',
        plugin: 'com.darktalker.cordova.screenshot',
        pluginRef: 'navigator.screenshot',
        repo: 'https://github.com/gitawego/cordova-screenshot',
        platforms: ['Android', 'iOS', 'macOS']
    })
], Screenshot);
export { Screenshot };
//# sourceMappingURL=index.js.map