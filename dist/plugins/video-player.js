"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name VideoPlayer
 * @description
 * A Codova plugin that simply allows you to immediately play a video in fullscreen mode.
 *
 * Requires Cordova plugin: `com.moust.cordova.videoplayer`. For more info, please see the [VideoPlayer plugin docs](https://github.com/moust/cordova-plugin-videoplayer).
 *
 * @usage
 * ```typescript
 * import { VideoPlayer } from 'ionic-native';
 *
 *
 * // Playing a video.
 * VideoPlayer.play("file:///android_asset/www/movie.mp4").then(() => {
 *  console.log('video completed');
 * }).catch(err => {
 *  console.log(err);
 * });
 *
 * ```
 */
var VideoPlayer = (function () {
    function VideoPlayer() {
    }
    /**
     * Plays the video from the passed url.
     * @param fileUrl {string} File url to the video.
     * @param options {VideoOptions?} Optional video playback settings. See options above.
     * @returns {Promise<any>} Resolves promise when the video was played successfully.
     */
    VideoPlayer.play = function (fileUrl, options) { return; };
    /**
     * Stops the video playback immediatly.
     */
    VideoPlayer.close = function () { };
    __decorate([
        plugin_1.Cordova()
    ], VideoPlayer, "play", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], VideoPlayer, "close", null);
    VideoPlayer = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-videoplayer',
            pluginRef: 'VideoPlayer',
            repo: 'https://github.com/moust/cordova-plugin-videoplayer',
            platforms: ['Android']
        })
    ], VideoPlayer);
    return VideoPlayer;
}());
exports.VideoPlayer = VideoPlayer;
//# sourceMappingURL=video-player.js.map