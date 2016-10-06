"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name StreamingMedia
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```
 * import {StreamingMedia, StreamingVideoOptions} from 'ionic-native';
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape'
 * };
 *
 * StreamingMedia.('https://path/to/video/stream', options);
 *
 * ```
 */
var StreamingMedia = (function () {
    function StreamingMedia() {
    }
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    StreamingMedia.playVideo = function (videoUrl, options) { };
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    StreamingMedia.playAudio = function (audioUrl, options) { };
    /**
     * Stops streaming audio
     */
    StreamingMedia.stopAudio = function () { };
    /**
     * Pauses streaming audio
     */
    StreamingMedia.pauseAudio = function () { };
    /**
     * Resumes streaming audio
     */
    StreamingMedia.resumeAudio = function () { };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], StreamingMedia, "playVideo", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], StreamingMedia, "playAudio", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], StreamingMedia, "stopAudio", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['iOS'] })
    ], StreamingMedia, "pauseAudio", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['iOS'] })
    ], StreamingMedia, "resumeAudio", null);
    StreamingMedia = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-streaming-media',
            pluginRef: 'plugins.streamingMedia',
            repo: 'https://github.com/nchutchind/cordova-plugin-streaming-media',
            platforms: ['Android', 'iOS']
        })
    ], StreamingMedia);
    return StreamingMedia;
}());
exports.StreamingMedia = StreamingMedia;
//# sourceMappingURL=streaming-media.js.map