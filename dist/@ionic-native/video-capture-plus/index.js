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
 * @beta
 * @name Video Capture Plus
 * @description
 * This plugin offers some useful extras on top of the default Media Capture Plugin capabilities:
 * - HD recording.
 * - Starting with the front camera.
 * - A custom overlay (currently iOS only).
 *
 * @usage
 * ```typescript
 * import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';
 *
 *
 * constructor(private videoCapturePlus: VideoCapturePlus) { }
 *
 * ...
 *
 * const options: VideoCapturePlusOptions = {
 *    limit: 1,
 *    highquality: true,
 *    portraitOverlay: 'assets/img/camera/overlay/portrait.png',
 *    landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
 * }
 *
 * this.videoCapturePlus.captureVideo(options).then(mediafile: MediaFile[] => console.log(mediafile), error => console.log('Something went wrong'));
 *
 * ```
 * @interfaces
 * MediaFile
 * MediaFileData
 * VideoCapturePlusOptions
 */
var VideoCapturePlus = (function (_super) {
    __extends(VideoCapturePlus, _super);
    function VideoCapturePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts recordings
     * @param [options] {VideoCapturePlusOptions} Configure options
     * @return {Promise<MediaFile[]>}
     */
    VideoCapturePlus.prototype.captureVideo = function (options) { return; };
    return VideoCapturePlus;
}(IonicNativePlugin));
VideoCapturePlus.decorators = [
    { type: Injectable },
];
/** @nocollapse */
VideoCapturePlus.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoCapturePlus.prototype, "captureVideo", null);
VideoCapturePlus = __decorate([
    Plugin({
        pluginName: 'VideoCapturePlus',
        plugin: 'cordova-plugin-video-capture-plus',
        pluginRef: 'window.plugins.videocaptureplus',
        repo: 'https://github.com/danielsogl/cordova-plugin-video-capture-plus',
        platforms: ['Android', 'iOS']
    })
], VideoCapturePlus);
export { VideoCapturePlus };
//# sourceMappingURL=index.js.map