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
import { CordovaInstance, Plugin, checkAvailability, IonicNativePlugin } from '@ionic-native/core';
// TODO for ionic native 4.x ... rename plugin class to Media and use Media.getPlugin() to retrieve the original media object
/**
 * @hidden
 */
var MediaObject = (function () {
    function MediaObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Get the current amplitude of the current recording.
     * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
     */
    MediaObject.prototype.getCurrentAmplitude = function () { return; };
    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     * @returns {Promise<any>} Returns a promise with the position of the current recording
     */
    MediaObject.prototype.getCurrentPosition = function () { return; };
    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     * @returns {number} Returns a promise with the duration of the current recording
     */
    MediaObject.prototype.getDuration = function () { return; };
    /**
     * Starts or resumes playing an audio file.
     */
    MediaObject.prototype.play = function (iosOptions) { };
    /**
     * Pauses playing an audio file.
     */
    MediaObject.prototype.pause = function () { };
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    MediaObject.prototype.release = function () { };
    /**
     * Sets the current position within an audio file.
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    MediaObject.prototype.seekTo = function (milliseconds) { };
    /**
     * Set the volume for an audio file.
     * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    MediaObject.prototype.setVolume = function (volume) { };
    /**
     * Starts recording an audio file.
     */
    MediaObject.prototype.startRecord = function () { };
    /**
     * Stops recording
     */
    MediaObject.prototype.stopRecord = function () { };
    /**
     * Pauses recording
     */
    MediaObject.prototype.pauseRecord = function () { };
    /**
     * Resumes recording
     */
    MediaObject.prototype.resumeRecord = function () { };
    /**
     * Stops playing an audio file.
     */
    MediaObject.prototype.stop = function () { };
    return MediaObject;
}());
export { MediaObject };
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MediaObject.prototype, "getCurrentAmplitude", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MediaObject.prototype, "getCurrentPosition", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], MediaObject.prototype, "getDuration", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "play", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "pause", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "release", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "seekTo", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "setVolume", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "startRecord", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "stopRecord", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "pauseRecord", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "resumeRecord", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MediaObject.prototype, "stop", null);
/**
 * @name Media
 * @description
 * This plugin provides the ability to record and play back audio files on a device.
 *
 * Some hints if you are using iOS and recording doesn't work:
 * 1.) Try to use a absolute file path but remove beginning "file://".
 * Then it looks like: `/var/mobile/Containers/Data/Application/AF438B8B-7724-4FBB-8E69-083463224FC4/tmp/my_file.m4a`
 * Example: `this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a')`
 * 2.) If that's not working, too, create the file before using.
 * Example:
 * ```typescript
 * import { MediaPlugin, MediaObject } from '@ionic-native/media';
 * import { File } from '@ionic-native/file';
 *
 * ...
 *
 * constructor(private media: MediaPlugin, private file: File) { }
 *
 * ...
 *
 * this.file.createFile(this.file.tempDirectory, 'my_file.m4a', true).then(() => {
 *   let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a');
 *   file.startRecord();
 *   window.setTimeout(() => file.stopRecord(), 10000);
 * });
 * ```
 *
 * You can find the reasons here: https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906
 *
 * @usage
 * ```typescript
 * import { MediaPlugin, MediaObject } from '@ionic-native/media';
 *
 *
 * constructor(private media: MediaPlugin) { }
 *
 *
 * ...
 *
 *
 * // Create a MediaPlugin instance.  Expects path to file or url as argument
 * // We can optionally pass a second argument to track the status of the media
 *
 * const onStatusUpdate = (status) => console.log(status);
 * const onSuccess = () => console.log('Action is successful.');
 * const onError = (error) => console.error(error.message);
 *
 * const file: MediaObject = this.media.create('path/to/file.mp3', onStatusUpdate, onSuccess, onError);
 *
 * // play the file
 * file.play();
 *
 * // pause the file
 * file.pause();
 *
 * // get current playback position
 * file.getCurrentPosition().then((position) => {
 *   console.log(position);
 * });
 *
 * // get file duration
 * let duration = file.getDuration();
 * console.log(duration);
 *
 * // skip to 10 seconds (expects int value in ms)
 * file.seekTo(10000);
 *
 * // stop playing the file
 * file.stop();
 *
 * // release the native audio resource
 * // Platform Quirks:
 * // iOS simply create a new instance and the old one will be overwritten
 * // Android you must call release() to destroy instances of media when you are done
 * file.release();
 *
 *
 *
 * // Recording to a file
 * const file: MediaObject = this.media.create('path/to/file.mp3');
 *
 * file.startRecord();
 *
 * file.stopRecord();
 *
 *
 * ```
 * @classes
 * MediaObject
 * @interfaces
 * MediaError
 */
var MediaPlugin = MediaPlugin_1 = (function (_super) {
    __extends(MediaPlugin, _super);
    function MediaPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @param [onStatusUpdate] {MediaStatusUpdateCallback} A callback function to be invoked when the status of the file changes
     * @param [onSuccess] {Function} A callback function to be invoked after the current play, record, or stop action is completed
     * @param [onError] {MediaErrorCallback} A callback function is be invoked if an error occurs.
     * @return {MediaObject}
     */
    MediaPlugin.prototype.create = function (src, onStatusUpdate, onSuccess, onError) {
        var instance;
        if (checkAvailability(MediaPlugin_1.getPluginRef(), null, MediaPlugin_1.getPluginName()) === true) {
            // Creates a new media object
            instance = new Media(src, onSuccess, onError, onStatusUpdate);
        }
        return new MediaObject(instance);
    };
    return MediaPlugin;
}(IonicNativePlugin));
MediaPlugin.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MediaPlugin.ctorParameters = function () { return []; };
MediaPlugin = MediaPlugin_1 = __decorate([
    Plugin({
        pluginName: 'MediaPlugin',
        repo: 'https://github.com/apache/cordova-plugin-media',
        plugin: 'cordova-plugin-media',
        pluginRef: 'Media',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], MediaPlugin);
export { MediaPlugin };
var MediaPlugin_1;
//# sourceMappingURL=index.js.map