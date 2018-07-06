import { IonicNativePlugin } from '@ionic-native/core';
export interface CameraPreviewDimensions {
    /** The width of the camera preview, default to window.screen.width */
    width?: number;
    /** The height of the camera preview, default to window.screen.height */
    height?: number;
}
export interface CameraPreviewOptions {
    /** The left edge in pixels, default 0 */
    x?: number;
    /** The top edge in pixels, default 0 */
    y?: number;
    /** The width in pixels, default window.screen.width */
    width?: number;
    /** The height in pixels, default window.screen.height */
    height?: number;
    /** Choose the camera to use 'front' or 'rear', default 'front' */
    camera?: string;
    /** Tap to take a photo, default true (picture quality by default : 85) */
    tapPhoto?: boolean;
    /** Preview box drag across the screen, default 'false' */
    previewDrag?: boolean;
    /** Preview box to the back of the webview (true => back, false => front) , default false */
    toBack?: boolean;
    /** Alpha channel of the preview box, float, [0,1], default 1 */
    alpha?: number;
}
export interface CameraPreviewPictureOptions {
    /** The width in pixels, default 0 */
    width?: number;
    /** The height in pixels, default 0 */
    height?: number;
    /** The picture quality, 0 - 100, default 85 */
    quality?: number;
}
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
export declare class CameraPreview extends IonicNativePlugin {
    FOCUS_MODE: {
        FIXED: string;
        AUTO: string;
        CONTINUOUS: string;
        CONTINUOUS_PICTURE: string;
        CONTINUOUS_VIDEO: string;
        EDOF: string;
        INFINITY: string;
        MACRO: string;
    };
    EXPOSURE_MODE: {
        LOCK: string;
        AUTO: string;
        CONTINUOUS: string;
        CUSTOM: string;
    };
    FLASH_MODE: {
        OFF: string;
        ON: string;
        AUTO: string;
        RED_EYE: string;
        TORCH: string;
    };
    COLOR_EFFECT: {
        AQUA: string;
        BLACKBOARD: string;
        MONO: string;
        NEGATIVE: string;
        NONE: string;
        POSTERIZE: string;
        SEPIA: string;
        SOLARIZE: string;
        WHITEBOARD: string;
    };
    CAMERA_DIRECTION: {
        BACK: string;
        FRONT: string;
    };
    /**
     * Starts the camera preview instance.
     * @param {CameraPreviewOptions} options
     * @return {Promise<any>}
     */
    startCamera(options: CameraPreviewOptions): Promise<any>;
    /**
     * Stops the camera preview instance. (iOS & Android)
     * @return {Promise<any>}
     */
    stopCamera(): Promise<any>;
    /**
     * Switch from the rear camera and front camera, if available.
     * @return {Promise<any>}
     */
    switchCamera(): Promise<any>;
    /**
     * Hide the camera preview box.
     * @return {Promise<any>}
     */
    hide(): Promise<any>;
    /**
     * Show the camera preview box.
     * @return {Promise<any>}
     */
    show(): Promise<any>;
    /**
     * Take the picture (base64)
     * @param [options] {CameraPreviewPictureOptions} size and quality of the picture to take
     * @return {Promise<any>}
     */
    takePicture(options?: CameraPreviewPictureOptions): Promise<any>;
    /**
     *
     * Set camera color effect.
     * @static
     * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
     * @return {Promise<any>}
     */
    setColorEffect(effect: string): Promise<any>;
    /**
     * Set the zoom (Android)
     * @param [zoom] {number} Zoom value
     * @return {Promise<any>}
     */
    setZoom(zoom?: number): Promise<any>;
    /**
       * Get the maximum zoom (Android)
       * @return {Promise<any>}
       */
    getMaxZoom(): Promise<any>;
    /**
     * Get current zoom (Android)
     * @return {Promise<any>}
     */
    getZoom(): Promise<any>;
    /**
     * Set the preview Size
     * @param [dimensions] {CameraPreviewDimensions}
     * @return {Promise<any>}
     */
    setPreviewSize(dimensions?: CameraPreviewDimensions): Promise<any>;
    /**
     * Get focus mode
     * @return {Promise<any>}
     */
    getFocusMode(): Promise<any>;
    /**
     * Set the focus mode
     * @param [focusMode] {string} 'fixed', 'auto', 'continuous-picture', 'continuous-video' (iOS & Android), 'edof', 'infinity', 'macro' (Android Only)
     * @return {Promise<any>}
     */
    setFocusMode(focusMode?: string): Promise<any>;
    /**
     * Get supported focus modes
     * @return {Promise<any>}
     */
    getSupportedFocusModes(): Promise<any>;
    /**
     * Get the current flash mode
     * @return {Promise<any>}
     */
    getFlashMode(): Promise<any>;
    /**
     * Set the flashmode
     * @param [flashMode] {string} 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
     * @return {Promise<any>}
     */
    setFlashMode(flashMode?: string): Promise<any>;
    /**
     * Get supported flash modes
     * @return {Promise<any>}
     */
    getSupportedFlashModes(): Promise<any>;
    /**
     * Get supported picture sizes
     * @return {Promise<any>}
     */
    getSupportedPictureSizes(): Promise<any>;
    /**
     * Get exposure mode
     * @return {Promise<any>}
     */
    getExposureMode(): Promise<any>;
    /**
     * Get exposure modes
     * @return {Promise<any>}
     */
    getExposureModes(): Promise<any>;
    /**
     * Set exposure mode
     * @param [lock] {string}
     * @return {Promise<any>}
     */
    setExposureMode(lock?: string): Promise<any>;
    /**
     * Get exposure compensation (Android)
     * @return {Promise<any>}
     */
    getExposureCompensation(): Promise<any>;
    /**
     * Set exposure compensation (Android)
     * @param [exposureCompensation] {number}
     * @return {Promise<any>}
     */
    setExposureCompensation(exposureCompensation?: number): Promise<any>;
    /**
     * Get exposure compensation range (Android)
     * @return {Promise<any>}
     */
    getExposureCompensationRange(): Promise<any>;
    /**
     * Set specific focus point. Note, this assumes the camera is full-screen.
     * @param xPoint {number}
     * @param yPoint {number}
     * @return {Promise<any>}
     */
    tapToFocus(xPoint: number, yPoint: number): Promise<any>;
}
