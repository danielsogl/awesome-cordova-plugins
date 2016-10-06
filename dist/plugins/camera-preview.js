"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name CameraPreview
 * @description
 * Showing camera preview in HTML
 *
 * For more info, please see the [Cordova Camera Preview Plugin Docs](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview).
 *
 * @usage
 * ```
 * import { CameraPreview } from 'ionic-native';
 *
 * // camera options (Size and location)
 * let cameraRect: CameraPreviewRect = {
 *   x: 100,
 *   y: 100,
 *   width: 200,
 *   height: 200
 * };
 *
 *
 * // start camera
 * CameraPreview.startCamera(
 *   cameraRect, // position and size of preview
 *   'front', // default camera
 *   true, // tape to take picture
 *   false, // disable drag
 *   true // send the preview to the back of the screen so we can add overlaying elements
 * );
 *
 * // Set the handler to run every time we take a picture
 * CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
 *   console.log(result);
 *   // do something with the result
 * });
 *
 *
 * // take a picture
 * CameraPreview.takePicture({
 *   maxWidth: 640,
 *   maxHeight: 640
 * });
 *
 * // Switch camera
 * CameraPreview.switchCamera();
 *
 * // set color effect to negative
 * CameraPreview.setColorEffect('negative');
 *
 * // Stop the camera preview
 * CameraPreview.stopCamera();
 *
 * ```
 *
 */
var CameraPreview = (function () {
    function CameraPreview() {
    }
    /**
     * Starts the camera preview instance.
     * @param {CameraPreviewRect} position and size of the preview window - {x: number, y: number, width: number, height: number}
     * @param {string} which camera to use - 'front' | 'back'
     * @param {boolean} enable tap to take picture
     * @param {boolean} enable preview box drag across the screen
     * @param {boolean} send preview box to the back of the webview
     * @param {number} alpha of the preview box
     */
    CameraPreview.startCamera = function (rect, defaultCamera, tapEnabled, dragEnabled, toBack, alpha) { };
    ;
    /**
     * Stops the camera preview instance.
     */
    CameraPreview.stopCamera = function () { };
    ;
    /**
     * Take the picture, the parameter size is optional
     * @param {CameraPreviewSize} optional - size of the picture to take
     */
    CameraPreview.takePicture = function (size) { };
    ;
    /**
     * Register a callback function that receives the original picture and the image captured from the preview box.
     */
    CameraPreview.setOnPictureTakenHandler = function () { return; };
    ;
    /**
     * Switch from the rear camera and front camera, if available.
     */
    CameraPreview.switchCamera = function () { };
    ;
    /**
     * Show the camera preview box.
     */
    CameraPreview.show = function () { };
    ;
    /**
     * Hide the camera preview box.
     */
    CameraPreview.hide = function () { };
    ;
    /**
     * Set the default mode for the Flash.
     */
    // @Cordova({
    //   sync: true
    // })
    // static setFlashMode(mode: number): void { };
    /**
     * Set camera color effect.
     */
    CameraPreview.setColorEffect = function (effect) { };
    ;
    /**
     * @private
     * @enum {number}
     */
    CameraPreview.FlashMode = {
        OFF: 0,
        ON: 1,
        AUTO: 2
    };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "startCamera", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "stopCamera", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "takePicture", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], CameraPreview, "setOnPictureTakenHandler", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "switchCamera", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "hide", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "setColorEffect", null);
    CameraPreview = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-camera-preview',
            pluginRef: 'cordova.plugins.camerapreview',
            repo: 'https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview',
            platforms: ['Android', 'iOS']
        })
    ], CameraPreview);
    return CameraPreview;
}());
exports.CameraPreview = CameraPreview;
//# sourceMappingURL=camera-preview.js.map