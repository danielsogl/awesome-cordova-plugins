import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

export interface CameraPreviewOptions {
  /**
   * The x position of the preview window, relative to the top left corner
   * Default: 0
   */
  x?: number;

  /**
   * The y position of the preview window, relative to the top left corner
   * Default: 0
   */
  y?: number;

  /**
   * Width of the preview window
   * Default: window.device.width
   */
  width?: number;

  /**
   * Height of the preview window
   * Default: window.device.height
   */
  height?: number;

  /**
   * Set the camera to use - 'front' | 'back'
   * Default: front
   */
  camera?: string;

  /**
   * Set whether tapping the preview window captures a photo
   * Default: true
   */
  tapPhoto?: boolean

  /**
   * Set whether preview window can be dragged
   * Default: false
   */
  previewDrag?: boolean;

  /**
   * Set whether the camera preview window will be positioned behind
   * the current view.  
   * Default: false
   */
  toBack?: boolean;

  /**
   * Alpha of preview window
   * Default: 1
   */
  alpha?: number;
}

export interface CameraPreviewSize {
  /**
   * Maximum width of the photo
   * Default: CameraPreviewOptions.width
   */
  maxWidth: number;
  
  /**
   * Maximum height of the photo
   * Default: CameraPreviewOptions.height
   */
  maxHeight: number;
}

/**
 * @name CameraPreview
 * @description
 * Showing camera preview in HTML
 *
 * For more info, please see the [Cordova Camera Preview Plugin Docs](https://github.com/westonganger/cordova-plugin-camera-preview).
 *
 * @usage
 * ```
 * import { CameraPreview } from 'ionic-native';
 *
 * // start camera
 * let cameraPreviewOptions = {
 *    x: 100,
 *    y: 100,
 *    width: 200,
 *    height: 200,
 *    camera: 'front',
 *    tapPhoto: false,
 *    previewDrag: false,
 *    toBack: false,
 *    alpha: 1
 * }
 * 
 * CameraPreview.startCamera(cameraPreviewOptions);
 *
 * // Set the handler to run every time we take a picture
 * CameraPreview.setOnPictureTakenHandler().subscribe(result => {
 *   console.log(result);
 *   // do something with the result
 * });
 *
 *
 * // take a picture
 * let photoSize: CameraPreviewSize = {
 *   maxWidth: 640,
 *   maxHeight: 640
 * }
 * 
 * CameraPreview.takePicture(photoSize);
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
@Plugin({
  pluginName: 'CameraPreview',
  plugin: 'https://github.com/westonganger/cordova-plugin-camera-preview',
  pluginRef: 'cordova.plugins.camerapreview',
  repo: 'https://github.com/westonganger/cordova-plugin-camera-preview',
  platforms: ['Android', 'iOS']
})
export class CameraPreview {

  /**
   * Starts the camera preview instance.
   * @param {CameraPreviewOptions} options Options for the camera preview window; position, size, etc. 
   */
  @Cordova({
    sync: true
  })
  static startCamera(options?: CameraPreviewOptions): void { };

  /**
   * Stops the camera preview instance.
   */
  @Cordova({
    sync: true
  })
  static stopCamera(): void { };

  /**
   * Take the picture, the parameter size is optional
   * @param {CameraPreviewSize} optional - size of the picture to take
   */
  @Cordova({
    sync: true
  })
  static takePicture(size?: CameraPreviewSize): void { };

  /**
   * Register a callback function that receives the original picture and the image captured from the preview box.
   */
  @Cordova({
    observable: true
  })
  static setOnPictureTakenHandler(): Observable<any> { return; };

  /**
   * Switch from the rear camera and front camera, if available.
   */
  @Cordova({
    sync: true
  })
  static switchCamera(): void { };

  /**
   * Show the camera preview box.
   */
  @Cordova({
    sync: true
  })
  static show(): void { };

  /**
   * Hide the camera preview box.
   */
  @Cordova({
    sync: true
  })
  static hide(): void { };

  /**
   * Set camera color effect.
   */
  @Cordova({
    sync: true
  })
  static setColorEffect(effect: string): void { };

}
