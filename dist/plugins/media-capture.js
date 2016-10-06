"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Media Capture
 * @description
 * @usage
 * ```typescript
 * import { MediaCapture } from 'ionic-native';
 *
 *
 * let options: CaptureImageOptions = { limit: 3 };
 * MediaCapture.captureImage(options)
 *   .then(
 *     (data: MediaFile[]) => console.log(data),
 *     (err: CaptureError) => console.error(err)
 *   );
 *
 * ```
 */
var MediaCapture = (function () {
    function MediaCapture() {
    }
    Object.defineProperty(MediaCapture, "supportedImageModes", {
        /**
         * The audio recording formats supported by the device.
         * @returns {ConfigurationData[]}
         */
        get: function () {
            return navigator.device.capture.supportedImageModes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCapture, "supportedAudioModes", {
        /**
         * The recording image sizes and formats supported by the device.
         * @returns {ConfigurationData[]}
         */
        get: function () {
            return navigator.device.capture.supportedAudioModes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCapture, "supportedVideoModes", {
        /**
         * The recording video resolutions and formats supported by the device.
         * @returns {ConfigurationData[]}
         */
        get: function () {
            return navigator.device.capture.supportedVideoModes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Start the audio recorder application and return information about captured audio clip files.
     * @param options
     */
    MediaCapture.captureAudio = function (options) { return; };
    /**
     * Start the camera application and return information about captured image files.
     * @param options
     */
    MediaCapture.captureImage = function (options) { return; };
    /**
     * Start the video recorder application and return information about captured video clip files.
     * @param options
     */
    MediaCapture.captureVideo = function (options) { return; };
    /**
     * is fired if the capture call is successful
     */
    MediaCapture.onPendingCaptureResult = function () { return; };
    /**
     * is fired if the capture call is unsuccessful
     */
    MediaCapture.onPendingCaptureError = function () { return; };
    __decorate([
        plugin_1.CordovaProperty
    ], MediaCapture, "supportedImageModes", null);
    __decorate([
        plugin_1.CordovaProperty
    ], MediaCapture, "supportedAudioModes", null);
    __decorate([
        plugin_1.CordovaProperty
    ], MediaCapture, "supportedVideoModes", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], MediaCapture, "captureAudio", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], MediaCapture, "captureImage", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], MediaCapture, "captureVideo", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'pendingcaptureresult'
        })
    ], MediaCapture, "onPendingCaptureResult", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'pendingcaptureerror'
        })
    ], MediaCapture, "onPendingCaptureError", null);
    MediaCapture = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-media-capture',
            pluginRef: 'navigator.device.capture',
            repo: 'https://github.com/apache/cordova-plugin-media-capture'
        })
    ], MediaCapture);
    return MediaCapture;
}());
exports.MediaCapture = MediaCapture;
//# sourceMappingURL=media-capture.js.map