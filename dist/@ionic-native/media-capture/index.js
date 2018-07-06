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
import { Cordova, CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Media Capture
 * @description
 * @usage
 * ```typescript
 * import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
 *
 *
 * constructor(private mediaCapture: MediaCapture) { }
 *
 * ...
 *
 *
 * let options: CaptureImageOptions = { limit: 3 };
 * this.mediaCapture.captureImage(options)
 *   .then(
 *     (data: MediaFile[]) => console.log(data),
 *     (err: CaptureError) => console.error(err)
 *   );
 *
 * ```
 * @interfaces
 * MediaFile
 * MediaFileData
 * CaptureError
 * CaptureAudioOptions
 * CaptureImageOptions
 * CaptureVideoOptions
 * ConfigurationData
 */
var MediaCapture = (function (_super) {
    __extends(MediaCapture, _super);
    function MediaCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Start the audio recorder application and return information about captured audio clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.prototype.captureAudio = function (options) {
        return;
    };
    /**
     * Start the camera application and return information about captured image files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.prototype.captureImage = function (options) {
        return;
    };
    /**
     * Start the video recorder application and return information about captured video clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.prototype.captureVideo = function (options) {
        return;
    };
    /**
     * is fired if the capture call is successful
     * @returns {Observable<MediaFile[]>}
     */
    MediaCapture.prototype.onPendingCaptureResult = function () {
        return;
    };
    /**
     * is fired if the capture call is unsuccessful
     * @returns {Observable<CaptureError>}
     */
    MediaCapture.prototype.onPendingCaptureError = function () {
        return;
    };
    return MediaCapture;
}(IonicNativePlugin));
MediaCapture.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MediaCapture.ctorParameters = function () { return []; };
__decorate([
    CordovaProperty,
    __metadata("design:type", Array)
], MediaCapture.prototype, "supportedImageModes", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Array)
], MediaCapture.prototype, "supportedAudioModes", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Array)
], MediaCapture.prototype, "supportedVideoModes", void 0);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MediaCapture.prototype, "captureAudio", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MediaCapture.prototype, "captureImage", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MediaCapture.prototype, "captureVideo", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'pendingcaptureresult'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], MediaCapture.prototype, "onPendingCaptureResult", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'pendingcaptureerror'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], MediaCapture.prototype, "onPendingCaptureError", null);
MediaCapture = __decorate([
    Plugin({
        pluginName: 'MediaCapture',
        plugin: 'cordova-plugin-media-capture',
        pluginRef: 'navigator.device.capture',
        repo: 'https://github.com/apache/cordova-plugin-media-capture',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], MediaCapture);
export { MediaCapture };
//# sourceMappingURL=index.js.map