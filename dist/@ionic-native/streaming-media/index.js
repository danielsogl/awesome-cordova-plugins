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
 * @name Streaming Media
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```typescript
 * import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
 *
 * constructor(private streamingMedia: StreamingMedia) { }
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape'
 * };
 *
 * this.streamingMedia.playVideo('https://path/to/video/stream', options);
 *
 * ```
 * @interfaces
 * StreamingVideoOptions
 * StreamingAudioOptions
 */
var StreamingMedia = (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { };
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { };
    /**
     * Stops streaming audio
     */
    StreamingMedia.prototype.stopAudio = function () { };
    /**
     * Pauses streaming audio
     */
    StreamingMedia.prototype.pauseAudio = function () { };
    /**
     * Resumes streaming audio
     */
    StreamingMedia.prototype.resumeAudio = function () { };
    return StreamingMedia;
}(IonicNativePlugin));
StreamingMedia.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StreamingMedia.ctorParameters = function () { return []; };
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StreamingMedia.prototype, "playVideo", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StreamingMedia.prototype, "playAudio", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StreamingMedia.prototype, "stopAudio", null);
__decorate([
    Cordova({ sync: true, platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StreamingMedia.prototype, "pauseAudio", null);
__decorate([
    Cordova({ sync: true, platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StreamingMedia.prototype, "resumeAudio", null);
StreamingMedia = __decorate([
    Plugin({
        pluginName: 'StreamingMedia',
        plugin: 'cordova-plugin-streaming-media',
        pluginRef: 'plugins.streamingMedia',
        repo: 'https://github.com/nchutchind/cordova-plugin-streaming-media',
        platforms: ['Amazon Fire OS', 'Android', 'iOS']
    })
], StreamingMedia);
export { StreamingMedia };
//# sourceMappingURL=index.js.map