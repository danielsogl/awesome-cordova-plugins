import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

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
 * import { CameraPreview, PictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
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
 * const pictureOpts: PictureOptions = {
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
@Plugin({
  pluginName: 'CameraPreview',
  plugin: 'cordova-plugin-camera-preview',
  pluginRef: 'CameraPreview',
  repo: 'https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class CameraPreview {

  EXPOSURE_MODES = {
    LOCK: 'lock', // IOS Only
    AUTO: 'auto', // IOS Only
    CONTINUOUS: 'continuous',
    CUSTOM: 'custom'
  };

  FLASH_MODE = {
    OFF: 'off',
    ON: 'on',
    AUTO: 'auto',
    RED_EYE: 'red-eye',
    TORCH: 'torch' // Android Only
  };

  COLOR_EFFECT = {
    AQUA: 'aqua', // Android Only
    BLACKBOARD: 'blackboard', // Android Only
    MONO: 'mono',
    NEGATIVE: 'negative',
    NONE: 'none',
    POSTERIZE: 'posterize',
    SEPIA: 'sepia',
    SOLARIZE: 'solarize', // Android Only
    WHITEBOARD: 'whiteboard' // Android Only
  };

  CAMERA_DIRECTION = {
    BACK: 'back',
    FRONT: 'front'
  };

  /**
   * Starts the camera preview instance.
   * @param {CameraPreviewOptions} options
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  startCamera(options: CameraPreviewOptions): Promise<any> { return; }

  /**
   * Stops the camera preview instance. (iOS & Android)
   * @return {Promise<any>}
   */
  @Cordova()
  stopCamera(): Promise<any> { return; }

  /**
   * Switch from the rear camera and front camera, if available.
   * @return {Promise<any>}
   */
  @Cordova()
  switchCamera(): Promise<any> { return; }

  /**
   * Hide the camera preview box.
   * @return {Promise<any>}
   */
  @Cordova()
  hide(): Promise<any> { return; }

  /**
   * Show the camera preview box.
   * @return {Promise<any>}
   */
  @Cordova()
  show(): Promise<any> { return; }

  /**
   * Take the picture (base64)
   * @param [options] {CameraPreviewPictureOptions} size and quality of the picture to take
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  takePicture(options?: CameraPreviewPictureOptions): Promise<any> { return; }

  /**
   *
   * Set camera color effect.
   * @static
   * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setColorEffect(effect: string): Promise<any> { return; }

  /**
   * Set the zoom (Android)
   * @param [zoom] {number} Zoom value
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setZoom(zoom?: number): Promise<any> { return; }

/**
   * Get the maximum zoom (Android)
   * @return {Promise<any>}
   */
  @Cordova()
  getMaxZoom(): Promise<any> { return; }

  /**
   * Get current zoom (Android)
   * @return {Promise<any>}
   */
  @Cordova()
  getZoom(): Promise<any> { return; }

  /**
   * Set the preview Size
   * @param [dimensions] {CameraPreviewDimensions}
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setPreviewSize(dimensions?: CameraPreviewDimensions): Promise<any> { return; }

  /**
   * Set the flashmode
   * @param [flashMode] {string} 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setFlashMode(flashMode?: string): Promise<any> { return; }

  /**
   * Get supported picture sizes
   * @return {Promise<any>}
   */
  @Cordova()
  getSupportedPictureSizes(): Promise<any> { return; }

  /**
   * Get supported flash modes
   * @return {Promise<any>}
   */
  @Cordova()
  getSupportedFlashModes(): Promise<any> { return; }

  /**
   * Get exposure mode
   * @return {Promise<any>}
   */
  @Cordova()
  getExposureMode(): Promise<any> { return; }

  /**
   * Get exposure modes
   * @return {Promise<any>}
   */
  @Cordova()
  getExposureModes(): Promise<any> { return; }

  /**
   * Set exposure mode
   * @param [lock] {string}
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setExposureMode(lock?: string): Promise<any> { return; }

  /**
   * Get exposure compensation (Android)
   * @return {Promise<any>}
   */
  @Cordova()
  getExposureCompensation(): Promise<any> { return; }

  /**
   * Set exposure compensation (Android)
   * @param [exposureCompensation] {number}
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setExposureCompensation(exposureCompensation?: number): Promise<any> { return; }

  /**
   * Get exposure compensation range (Android)
   * @return {Promise<any>}
   */
  @Cordova()
  getExposureCompensationRange(): Promise<any> { return; }

}
