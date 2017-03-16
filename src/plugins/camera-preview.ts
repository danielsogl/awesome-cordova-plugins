import { Cordova, Plugin } from './plugin';


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

export interface PictureOptions {
    /** The width in pixels, default 0 */
    width?: number;
    /** The height in pixels, default 0 */
    height?: number;
    /** The picture quality, 0 - 100, default 85 */
    quality?: number;
}

/**
 * @beta
 * @name CameraPreview
 * @description
 * Showing camera preview in HTML
 * 
 * Requires Cordova plugin: `cordova-camera-custom`. For more info, please see the [Cordova Camera Preview docs](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview).
 *
 * @usage
 * ```typescript
 * import { CameraPreview, PictureOptions, CameraPreviewOptions, CameraPreviewDimensions, } from 'ionic-native';
 *
 * // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
 * public cameraPreviewOpts: CameraPreviewOptions = {
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
 * CameraPreview.startCamera(this.cameraPreviewOpts).then(
 *   (res) => {
 *     console.log(res)
 *   },
 *   (err) => {
 *     console.log(err)
 *   });
 *
 * 
 * // picture options
 * public pictureOpts: PictureOptions = {
 *   width: 1280,
 *   height: 1280,
 *   quality: 85
 * }
 *
 * // take a picture
 * CameraPreview.takePicture(this.pictureOpts).then((imageData) => {            
 *   this.picture = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {      
 *   console.log(err);
 *   this.picture = 'assets/img/test.jpg';
 * });
 *
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
 * @interfaces
 * CameraPreviewOptions
 * PictureOptions
 * CameraPreviewDimensions
 */
@Plugin({
  pluginName: 'CameraPreview',
  plugin: 'cordova-camera-custom',
  pluginRef: 'CameraPreview',
  repo: 'https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview.git',
  platforms: ['Android', 'iOS']
})
export class CameraPreview {

  /**
   * Starts the camera preview instance. (iOS & Android)
   * @param {CameraPreviewOptions} options
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static startCamera(options: CameraPreviewOptions): Promise<any> { return; }

  /**
   * Stops the camera preview instance. (iOS & Android)
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1
  })
  static stopCamera(): Promise<any> { return; }

  /**
   * Switch from the rear camera and front camera, if available. (iOS & Android)
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1
  })
  static switchCamera(): Promise<any> { return; }

  /**
   * Hide the camera preview box. (iOS & Android)
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1
  })
  static hide(): Promise<any> { return; }

  /**
   * Show the camera preview box. (iOS & Android)
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1
  })
  static show(): Promise<any> { return; }

  /**
   * Take the picture (base64), the parameter size is optional (iOS & Android)
   * @param {PictureOptions} optional - size and quality of the picture to take
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static takePicture(opts?: PictureOptions): Promise<any> { return; }

  /**
   * 
   * Set camera color effect. (iOS partial & Android)
   * @static
   * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
   * 
   * @memberOf CameraPreview
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static setColorEffect(effect: string): Promise<any> { return; }


  /**
   * Set the zoom (Android)
   * @param Zoom value (integer)
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static setZoom(zoom?: number): Promise<any> { return; }


  /**
   * Set the preview Size (Android)
   * @param dimensions 
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static setPreviewSize(dimensions?: CameraPreviewDimensions): Promise<any> { return; }


  /**
   * Set the flashmode (iOS partial & Android)
   * @param flashMode 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static setFlashMode(flashMode?: string): Promise<any> { return; }
}
