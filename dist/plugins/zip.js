"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Zip
 * @description
 * A Cordova plugin to unzip files in Android and iOS.
 *
 * @usage
 * ```
 * import {Zip} from 'ionic-native';
 *
 * Zip.unzip('path/to/source.zip', 'path/to/dest', (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
 *  .then((result) => {
 *    if(result === 0) console.log('SUCCESS');
 *    if(result === -1) console.log('FAILED');
 *  });
 *
 * ```
 */
var Zip = (function () {
    function Zip() {
    }
    /**
     * Extracts files from a ZIP archive
     * @param sourceZip {string} Source ZIP file
     * @param destUrl {string} Destination folder
     * @param onProgress {Function} optional callback to be called on progress update
     * @return  {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
     */
    Zip.unzip = function (sourceZip, destUrl, onProgress) { return; };
    __decorate([
        plugin_1.Cordova({
            successIndex: 2,
            errorIndex: 4
        })
    ], Zip, "unzip", null);
    Zip = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-zip',
            pluginRef: 'zip',
            repo: 'https://github.com/MobileChromeApps/cordova-plugin-zip',
        })
    ], Zip);
    return Zip;
}());
exports.Zip = Zip;
//# sourceMappingURL=zip.js.map