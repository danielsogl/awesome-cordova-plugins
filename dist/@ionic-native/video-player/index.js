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
 * @name Video Player
 * @description
 * A Cordova plugin that simply allows you to immediately play a video in fullscreen mode.
 *
 * Requires Cordova plugin: `com.moust.cordova.videoplayer`. For more info, please see the [VideoPlayer plugin docs](https://github.com/moust/cordova-plugin-videoplayer).
 *
 * @usage
 * ```typescript
 * import { VideoPlayer } from '@ionic-native/video-player';
 *
 * constructor(private videoPlayer: VideoPlayer) { }
 *
 * ...
 *
 * // Playing a video.
 * this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
 *  console.log('video completed');
 * }).catch(err => {
 *  console.log(err);
 * });
 *
 * ```
 * @interfaces
 * VideoOptions
 */
var VideoPlayer = (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays the video from the passed url.
     * @param fileUrl {string} File url to the video.
     * @param options {VideoOptions?} Optional video playback settings. See options above.
     * @returns {Promise<any>} Resolves promise when the video was played successfully.
     */
    VideoPlayer.prototype.play = function (fileUrl, options) { return; };
    /**
     * Stops the video playback immediatly.
     */
    VideoPlayer.prototype.close = function () { };
    return VideoPlayer;
}(IonicNativePlugin));
VideoPlayer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
VideoPlayer.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VideoPlayer.prototype, "play", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VideoPlayer.prototype, "close", null);
VideoPlayer = __decorate([
    Plugin({
        pluginName: 'VideoPlayer',
        plugin: 'https://github.com/moust/cordova-plugin-videoplayer.git',
        pluginRef: 'VideoPlayer',
        repo: 'https://github.com/moust/cordova-plugin-videoplayer',
        platforms: ['Android']
    })
], VideoPlayer);
export { VideoPlayer };
//# sourceMappingURL=index.js.map