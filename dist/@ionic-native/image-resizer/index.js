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
 * @name Image Resizer
 * @description
 * Cordova Plugin For Image Resize
 *
 * Requires plugin `info.protonet.imageresizer` - use the Ionic CLI and type in the following command:
 * `ionic cordova plugin add https://github.com/protonet/cordova-plugin-image-resizer.git`
 *
 * For more info, please see the https://github.com/protonet/cordova-plugin-image-resizer
 *
 * @usage
 * ```typescript
 * import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';
 *
 * constructor(private imageResizer: ImageResizer) { }
 *
 * ...
 *
 * let options = {
 *  uri: uri,
 *  folderName: 'Protonet',
 *  quality: 90,
 *  width: 1280,
 *  height: 1280
 * } as ImageResizerOptions;
 *
 * this.imageResizer
 *   .resize(options)
 *   .then((filePath: string) => console.log('FilePath', filePath))
 *   .catch(e => console.log(e));
 *
 * ```
 * @interfaces
 * ImageResizerOptions
 */
var ImageResizer = (function (_super) {
    __extends(ImageResizer, _super);
    function ImageResizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {Promise<any>}
     */
    ImageResizer.prototype.resize = function (options) { return; };
    return ImageResizer;
}(IonicNativePlugin));
ImageResizer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ImageResizer.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageResizer.prototype, "resize", null);
ImageResizer = __decorate([
    Plugin({
        pluginName: 'ImageResizer',
        plugin: 'https://github.com/protonet/cordova-plugin-image-resizer.git',
        pluginRef: 'ImageResizer',
        repo: 'https://github.com/protonet/cordova-plugin-image-resizer',
        platforms: ['Android', 'iOS', 'Windows']
    })
], ImageResizer);
export { ImageResizer };
//# sourceMappingURL=index.js.map