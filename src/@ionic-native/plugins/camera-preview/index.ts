import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface CameraPreviewRect {

  x: number;

  y: number;

  width: number;

  height: number;

}

export interface CameraPreviewSize {

  maxWidth: number;

  maxHeight: number;

}

/**
 * @beta
 * @name Camera Preview
 * @description
 * Showing camera preview in HTML
 *
 * For more info, please see the [Cordova Camera Preview Plugin Docs](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview).
 *
 * @usage
 * ```
 * import { CameraPreview, CameraPreviewRect } from '@ionic-native/camera-preview';
 *
 * constructor(private cameraPreview: CameraPreview) { }
 *
 * ...
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
 * this.cameraPreview.startCamera(
 *   cameraRect, // position and size of preview
 *   'front', // default camera
 *   true, // tap to take picture
 *   false, // disable drag
 *   false, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
 *   1 // set the preview alpha
 * );
 *
 * // Set the handler to run every time we take a picture
 * this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
 *   console.log(result);
 *   // do something with the result
 * });
 *
 *
 * // take a picture
 * this.cameraPreview.takePicture({
 *   maxWidth: 640,
 *   maxHeight: 640
 * });
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
 * CameraPreviewRect
 * CameraPreviewSize
 */
@Plugin({
  pluginName: 'CameraPreview',
  plugin: 'cordova-plugin-camera-preview',
  pluginRef: 'cordova.plugins.camerapreview',
  repo: 'https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class CameraPreview {

  /**
   * Starts the camera preview instance.
   * @param {CameraPreviewRect} position and size of the preview window - {x: number, y: number, width: number, height: number}
   * @param {string} which camera to use - 'front' | 'back'
   * @param {boolean} enable tap to take picture
   * @param {boolean} enable preview box drag across the screen
   * @param {boolean} send preview box to the back of the webview
   * @param {number} alpha of the preview box
   */
  @Cordova({
    sync: true
  })
  startCamera(rect: CameraPreviewRect, defaultCamera: string, tapEnabled: boolean, dragEnabled: boolean, toBack: boolean, alpha: number): void { }

  /**
   * Stops the camera preview instance.
   */
  @Cordova({
    sync: true
  })
  stopCamera(): void { }

  /**
   * Take the picture, the parameter size is optional
   * @param {CameraPreviewSize} optional - size of the picture to take
   */
  @Cordova({
    sync: true
  })
  takePicture(size?: CameraPreviewSize): void { }

  /**
   * Register a callback function that receives the original picture and the image captured from the preview box.
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  setOnPictureTakenHandler(): Observable<any> { return; }

  /**
   * Switch from the rear camera and front camera, if available.
   */
  @Cordova({
    sync: true
  })
  switchCamera(): void { }

  /**
   * Show the camera preview box.
   */
  @Cordova({
    sync: true
  })
  show(): void { }

  /**
   * Hide the camera preview box.
   */
  @Cordova({
    sync: true
  })
  hide(): void { }

  /**
   * Disables the camera preview
   */
  @Cordova({
    sync: true
  })
  disable(): void { }

  /**
   * Set camera color effect.
   */
  @Cordova({
    sync: true
  })
  setColorEffect(effect: string): void { }

}
