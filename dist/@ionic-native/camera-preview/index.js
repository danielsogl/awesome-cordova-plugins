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
 * @beta
 * @name Camera Preview
 * @description
 * Showing camera preview in HTML
 *
 * Requires Cordova plugin: `https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview.git`. For more info, please see the [Cordova Camera Preview docs](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview).
 *
 * @usage
 * ```typescript
 * import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
 *
 * constructor(private cameraPreview: CameraPreview) { }
 *
 * ...
 *
 * // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
 * const cameraPreviewOpts: CameraPreviewOptions = {
 *   x: 0,
 *   y: 0,
 *   width: window.screen.width,
 *   height: window.screen.height,
 *   camera: 'rear',
 *   tapPhoto: true,
 *   previewDrag: true,
 *   toBack: true,
 *   alpha: 1
 * };
 *
 * // start camera
 * this.cameraPreview.startCamera(cameraPreviewOpts).then(
 *   (res) => {
 *     console.log(res)
 *   },
 *   (err) => {
 *     console.log(err)
 *   });
 *
 * // Set the handler to run every time we take a picture
 * this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
 *   console.log(result);
 *   // do something with the result
 * });
 *
 *
 * // picture options
 * const pictureOpts: CameraPreviewPictureOptions = {
 *   width: 1280,
 *   height: 1280,
 *   quality: 85
 * }
 *
 * // take a picture
 * this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
 *   this.picture = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *   console.log(err);
 *   this.picture = 'assets/img/test.jpg';
 * });
 *
 *
 * // Switch camera
 * this.cameraPreview.switchCamera();
 *
 * // set color effect to negative
 * this.cameraPreview.setColorEffect('negative');
 *
 * // Stop the camera preview
 * this.cameraPreview.stopCamera();
 *
 * ```
 *
 * @interfaces
 * CameraPreviewOptions
 * CameraPreviewPictureOptions
 * CameraPreviewDimensions
 */
var CameraPreview = (function (_super) {
    __extends(CameraPreview, _super);
    function CameraPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CONTINUOUS_PICTURE: 'continuous-picture',
            CONTINUOUS_VIDEO: 'continuous-video',
            EDOF: 'edof',
            INFINITY: 'infinity',
            MACRO: 'macro' // Android Only
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom'
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch' // Android Only
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            BLACKBOARD: 'blackboard',
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            WHITEBOARD: 'whiteboard' // Android Only
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front'
        };
        return _this;
    }
    /**
     * Starts the camera preview instance.
     * @param {CameraPreviewOptions} options
     * @return {Promise<any>}
     */
    CameraPreview.prototype.startCamera = function (options) { return; };
    /**
     * Stops the camera preview instance. (iOS & Android)
     * @return {Promise<any>}
     */
    CameraPreview.prototype.stopCamera = function () { return; };
    /**
     * Switch from the rear camera and front camera, if available.
     * @return {Promise<any>}
     */
    CameraPreview.prototype.switchCamera = function () { return; };
    /**
     * Hide the camera preview box.
     * @return {Promise<any>}
     */
    CameraPreview.prototype.hide = function () { return; };
    /**
     * Show the camera preview box.
     * @return {Promise<any>}
     */
    CameraPreview.prototype.show = function () { return; };
    /**
     * Take the picture (base64)
     * @param [options] {CameraPreviewPictureOptions} size and quality of the picture to take
     * @return {Promise<any>}
     */
    CameraPreview.prototype.takePicture = function (options) { return; };
    /**
     *
     * Set camera color effect.
     * @static
     * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
     * @return {Promise<any>}
     */
    CameraPreview.prototype.setColorEffect = function (effect) { return; };
    /**
     * Set the zoom (Android)
     * @param [zoom] {number} Zoom value
     * @return {Promise<any>}
     */
    CameraPreview.prototype.setZoom = function (zoom) { return; };
    /**
       * Get the maximum zoom (Android)
       * @return {Promise<any>}
       */
    CameraPreview.prototype.getMaxZoom = function () { return; };
    /**
     * Get current zoom (Android)
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getZoom = function () { return; };
    /**
     * Set the preview Size
     * @param [dimensions] {CameraPreviewDimensions}
     * @return {Promise<any>}
     */
    CameraPreview.prototype.setPreviewSize = function (dimensions) { return; };
    /**
     * Get focus mode
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getFocusMode = function () { return; };
    /**
     * Set the focus mode
     * @param [focusMode] {string} 'fixed', 'auto', 'continuous-picture', 'continuous-video' (iOS & Android), 'edof', 'infinity', 'macro' (Android Only)
     * @return {Promise<any>}
     */
    CameraPreview.prototype.setFocusMode = function (focusMode) { return; };
    /**
     * Get supported focus modes
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getSupportedFocusModes = function () { return; };
    /**
     * Get the current flash mode
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getFlashMode = function () { return; };
    /**
     * Set the flashmode
     * @param [flashMode] {string} 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
     * @return {Promise<any>}
     */
    CameraPreview.prototype.setFlashMode = function (flashMode) { return; };
    /**
     * Get supported flash modes
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getSupportedFlashModes = function () { return; };
    /**
     * Get supported picture sizes
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getSupportedPictureSizes = function () { return; };
    /**
     * Get exposure mode
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getExposureMode = function () { return; };
    /**
     * Get exposure modes
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getExposureModes = function () { return; };
    /**
     * Set exposure mode
     * @param [lock] {string}
     * @return {Promise<any>}
     */
    CameraPreview.prototype.setExposureMode = function (lock) { return; };
    /**
     * Get exposure compensation (Android)
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getExposureCompensation = function () { return; };
    /**
     * Set exposure compensation (Android)
     * @param [exposureCompensation] {number}
     * @return {Promise<any>}
     */
    CameraPreview.prototype.setExposureCompensation = function (exposureCompensation) { return; };
    /**
     * Get exposure compensation range (Android)
     * @return {Promise<any>}
     */
    CameraPreview.prototype.getExposureCompensationRange = function () { return; };
    /**
     * Set specific focus point. Note, this assumes the camera is full-screen.
     * @param xPoint {number}
     * @param yPoint {number}
     * @return {Promise<any>}
     */
    CameraPreview.prototype.tapToFocus = function (xPoint, yPoint) { return; };
    return CameraPreview;
}(IonicNativePlugin));
CameraPreview.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CameraPreview.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "startCamera", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "stopCamera", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "switchCamera", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "hide", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "show", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "takePicture", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "setColorEffect", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "setZoom", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getMaxZoom", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getZoom", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "setPreviewSize", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getFocusMode", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "setFocusMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getSupportedFocusModes", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getFlashMode", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "setFlashMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getSupportedFlashModes", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getSupportedPictureSizes", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getExposureMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getExposureModes", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "setExposureMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getExposureCompensation", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "setExposureCompensation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "getExposureCompensationRange", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CameraPreview.prototype, "tapToFocus", null);
CameraPreview = __decorate([
    Plugin({
        pluginName: 'CameraPreview',
        plugin: 'cordova-plugin-camera-preview',
        pluginRef: 'CameraPreview',
        repo: 'https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview',
        platforms: ['Android', 'iOS']
    })
], CameraPreview);
export { CameraPreview };
//# sourceMappingURL=index.js.map