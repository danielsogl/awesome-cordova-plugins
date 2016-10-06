"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name VideoEditor
 * @description Edit videos using native device APIs
 *
 * @usage
 * ```
 * import {VideoEditor} from 'ionic-native';
 *
 * VideoEditor.transcodeVideo({
 *   fileUri: '/path/to/input.mov',
 *   outputFileName: 'output.mp4',
 *   outputFileType: VideoEditor.OutputFileType.MPEG4
 * })
 * .then((fileUri: string) => console.log('video transcode success', fileUri))
 * .catch((error: any) => console.log('video transcode error', error));
 *
 * ```
 */
var VideoEditor = (function () {
    function VideoEditor() {
    }
    /**
     * Transcode a video
     * @param options {TranscodeOptions} Options
     * @return {Promise<string>} Returns a promise that resolves to the path of the transcoded video
     */
    VideoEditor.transcodeVideo = function (options) { return; };
    /**
     * Trim a video
     * @param options {TrimOptions} Options
     * @return {Promise<string>} Returns a promise that resolves to the path of the trimmed video
     */
    VideoEditor.trim = function (options) { return; };
    /**
     * Create a JPEG thumbnail from a video
     * @param options {CreateThumbnailOptions} Options
     * @return {Promise<string>} Returns a promise that resolves to the path to the jpeg image on the device
     */
    VideoEditor.createThumbnail = function (options) { return; };
    /**
     * Get info on a video (width, height, orientation, duration, size, & bitrate)
     * @param options {GetVideoInfoOptions} Options
     * @return {Promise<VideoInfo>} Returns a promise that resolves to an object containing info on the video
     */
    VideoEditor.getVideoInfo = function (options) { return; };
    VideoEditor.OptimizeForNetworkUse = {
        NO: 0,
        YES: 1
    };
    VideoEditor.OutputFileType = {
        M4V: 0,
        MPEG4: 1,
        M4A: 2,
        QUICK_TIME: 3
    };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], VideoEditor, "transcodeVideo", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            platforms: ['iOS']
        })
    ], VideoEditor, "trim", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], VideoEditor, "createThumbnail", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], VideoEditor, "getVideoInfo", null);
    VideoEditor = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-video-editor',
            pluginRef: 'VideoEditor',
            repo: 'https://github.com/jbavari/cordova-plugin-video-editor',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], VideoEditor);
    return VideoEditor;
}());
exports.VideoEditor = VideoEditor;
//# sourceMappingURL=video-editor.js.map