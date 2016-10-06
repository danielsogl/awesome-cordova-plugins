"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name ImageResizer
 * @description
 * Cordova Plugin For Image Resize
 *
 * Requires plugin `info.protonet.imageresizer` - use the Ionic CLI and type in the following command:
 * `ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git`
 *
 * For more info, please see the https://github.com/protonet/cordova-plugin-image-resizer
 *
 * @usage
 * ```typescript
 * import { ImageResizer, ImageResizerOptions } from 'ionic-native';
 *
 * let options = {
 *  uri: uri,
 *  folderName: 'Protonet',
 *  quality: 90,
 *  width: 1280,
 *  height: 1280
 * } as ImageResizerOptions;
 *
 * ImageResizer
 * .resize(options)
 * .then(
 *  (filePath: string) => { console.log('FilePath', filePath); },
 *  () => { console.log('Error occured'); }
 * )
 * ```
 */
var ImageResizer = (function () {
    function ImageResizer() {
    }
    ImageResizer.resize = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], ImageResizer, "resize", null);
    ImageResizer = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/protonet/cordova-plugin-image-resizer.git',
            pluginRef: 'ImageResizer',
            repo: 'https://github.com/protonet/cordova-plugin-image-resizer'
        })
    ], ImageResizer);
    return ImageResizer;
}());
exports.ImageResizer = ImageResizer;
//# sourceMappingURL=imageresizer.js.map