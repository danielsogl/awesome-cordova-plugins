import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';


export interface CameraPreviewOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  /**
   * Choose the camera to use (front- or back-facing).
   *  'front' for front camera
   *  'rear' for rear camera
   */
  camera: string;
  /** Take photo on tap */
  tapPhoto: boolean;
  /** */
  previewDrag: boolean;
  /**  */
  toBack: boolean;
  /** Alpha use when toBack is set to true */
  alpha: number;
}

export interface CameraPreviewSize {
  maxWidth: number;
  maxHeight: number;
}

/**
 * @name CameraPreview
 * @description
 * Showing camera preview in HTML
 *
 * For more info, please see the [Cordova Camera Preview Plugin Docs](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview).
 *
 */
@Plugin({
  plugin: 'cordova-plugin-camera-preview',
  pluginRef: 'cordova.plugins.camerapreview',
  repo: 'https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview',
  platforms: ['Android', 'iOS']
})
export class CameraPreview {

  /**
   * Starts the camera preview instance.
   * @param {CameraPreviewOptions} options for the preview
   */
  @Cordova({
    sync: true
  })
  static startCamera(options: CameraPreviewOptions): void { };

  /**
   * Stops the camera preview instance.
   */
  @Cordova({
    sync: true
  })
  static stopCamera(): void { };

  /**
   * Take the picture, the parameter size is optional
   */
  @Cordova({
    sync: true
  })
  static takePicture(size: CameraPreviewSize): void { };

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
   * Set the default mode for the Flash.
   */
  // @Cordova({
  //   sync: true
  // })
  // static setFlashMode(mode: number): void { };

  /**
   * Set camera color effect.
   */
  @Cordova({
    sync: true
  })
  static setColorEffect(effect: string): void { };

  /**
   * @private
   * @enum {number}
   */
  static FlashMode = {
    OFF: 0,
    ON: 1,
    AUTO: 2
  };

}
