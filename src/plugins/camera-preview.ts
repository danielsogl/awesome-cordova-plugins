import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';


export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Size {
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
   * @param {Rect} position and size of the preview window - {x: number, y: number, width: number, height: number}
   * @param {string} which camera to use - 'front' | 'back'
   * @param {boolean} enable tap to take picture
   * @param {boolean} enable preview box drag across the screen
   * @param {boolean} send preview box to the back of the webview
   * @param {number} alpha of the preview box
   */
  @Cordova({
    sync: true
  })
  static startCamera(rect: Rect, defaultCamera: string, tapEnabled: boolean, dragEnabled: boolean, toBack: boolean, alpha: number): void { 

  };

  /**
   * Stops the camera preview instance.
   */
  @Cordova({
    sync: true
  })
  static stopCamera(): void { };

  /**
   * Take the picture, the parameter size is optional
   * @param {Size} optional - size of the picture to take
   */
  @Cordova({
    sync: true
  })
  static takePicture(size: Size): void { };

  /**
   * Register a callback function that receives the original picture and the image captured from the preview box.
   */
  @Cordova({
    observable: true
  })
  static setOnPictureTakenHandler(callback: Function): Observable<any> { return; };

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
