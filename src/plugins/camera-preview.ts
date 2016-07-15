import {Plugin, Cordova} from './plugin';


export interface CameraPreviewOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * Choose the camera to use (front- or back-facing).
     * Defined in cordova.plugins.camerapreview.Direction. 
     *      FRONT: "front"
     *      BACK: "back"
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
 * Requires {@link module:driftyco/ionic-native} and the Cordova plugin: `cordova-plugin-camera-preview`. For more info, please see the [Cordova Camera Preview Plugin Docs](https://github.com/westonganger/cordova-plugin-camera-preview).
 *
 */
@Plugin({
  plugin: 'cordova-plugin-camera-preview',
  pluginRef: 'cordova.plugins.camerapreview',
  repo: 'https://github.com/westonganger/cordova-plugin-camera-preview',
  platforms: ['Android', 'iOS']
})
export class CameraPreview {

  /**
   * Starts the camera preview instance.
   * @param {CameraPreviewOptions} options for the preview
   */
  @Cordova()
  static startCamera(options: CameraPreviewOptions) {};

  /**
   * Stops the camera preview instance.
   */
  @Cordova()
  static stopCamera() {};

  /**
   * Take the picture, the parameter size is optional
   */
  @Cordova()
  static takePicture(size: CameraPreviewSize) {};

  /**
   * Register a callback function that receives the original picture and the image captured from the preview box.
   */
  @Cordova()
  static setOnPictureTakenHandler(callback: (result: any) => void) {};

  /**
   * Switch from the rear camera and front camera, if available.
   */
  @Cordova()
  static switchCamera() {};

  /**
   * Show the camera preview box.
   */
  @Cordova()
  static show() {};

  /**
   * Hide the camera preview box.
   */
  @Cordova()
  static hide() {};

  /**
   * @private
   * @enum {string}
   */
  static Direction = {
    /** Use the back-facing camera */
    BACK: 'rear',
    /** Use the front-facing camera */
    FRONT: 'front'
  };
}


