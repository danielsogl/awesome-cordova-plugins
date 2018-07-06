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
 * @name Video Editor
 * @description Edit videos using native device APIs
 *
 * @usage
 * ```typescript
 * import { VideoEditor } from '@ionic-native/video-editor';
 *
 * constructor(private videoEditor: VideoEditor) { }
 *
 * ...
 *
 * this.videoEditor.transcodeVideo({
 *   fileUri: '/path/to/input.mov',
 *   outputFileName: 'output.mp4',
 *   outputFileType: VideoEditor.OutputFileType.MPEG4
 * })
 * .then((fileUri: string) => console.log('video transcode success', fileUri))
 * .catch((error: any) => console.log('video transcode error', error));
 *
 * ```
 * @interfaces
 * TranscodeOptions
 * TrimOptions
 * CreateThumbnailOptions
 * GetVideoInfoOptions
 * VideoInfo
 */
var VideoEditor = (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OptimizeForNetworkUse = {
            NO: 0,
            YES: 1
        };
        _this.OutputFileType = {
            M4V: 0,
            MPEG4: 1,
            M4A: 2,
            QUICK_TIME: 3
        };
        return _this;
    }
    /**
     * Transcode a video
     * @param options {TranscodeOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path of the transcoded video
     */
    VideoEditor.prototype.transcodeVideo = function (options) { return; };
    /**
     * Trim a video
     * @param options {TrimOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path of the trimmed video
     */
    VideoEditor.prototype.trim = function (options) { return; };
    /**
     * Create a JPEG thumbnail from a video
     * @param options {CreateThumbnailOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path to the jpeg image on the device
     */
    VideoEditor.prototype.createThumbnail = function (options) { return; };
    /**
     * Get info on a video (width, height, orientation, duration, size, & bitrate)
     * @param options {GetVideoInfoOptions} Options
     * @returns {Promise<VideoInfo>} Returns a promise that resolves to an object containing info on the video
     */
    VideoEditor.prototype.getVideoInfo = function (options) { return; };
    return VideoEditor;
}(IonicNativePlugin));
VideoEditor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
VideoEditor.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoEditor.prototype, "transcodeVideo", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse',
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoEditor.prototype, "trim", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoEditor.prototype, "createThumbnail", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoEditor.prototype, "getVideoInfo", null);
VideoEditor = __decorate([
    Plugin({
        pluginName: 'VideoEditor',
        plugin: 'cordova-plugin-video-editor',
        pluginRef: 'VideoEditor',
        repo: 'https://github.com/jbavari/cordova-plugin-video-editor',
        platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
    })
], VideoEditor);
export { VideoEditor };
//# sourceMappingURL=index.js.map