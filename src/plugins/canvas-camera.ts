import { Plugin, Cordova } from './plugin';
/**
 * @name CanvasCamera
 * @description
 *
 * @usage
 * ```
 * import {CanvasCamera} from 'ionic-native';
 *
 * let object = document.getElementById('myDiv');
 * // or
 * @ViewChild('myDiv') object;
 *
 * CanvasCamera.initialize(object);
 *
 * CanvasCamera.start();
 *
 * CanvasCamera.takePicture().then(picture => { });
 *
 * ```
 */
@Plugin({
  plugin: 'com.keith.cordova.plugin.canvascamera',
  pluginRef: 'CanvasCamera',
  repo: 'https://github.com/donaldp24/CanvasCameraPlugin'
})
export class CanvasCamera {
  static DestinationType = {
    DATA_URL: 0,
    FILE_URI: 1
  };
  static PictureSourceType = {
    PHOTOLIBRARY : 0,
    CAMERA : 1,
    SAVEDPHOTOALBUM : 2
  };
  static EncodingType = {
    JPEG : 0,
    PNG : 1
  };
  static CameraPosition = {
    BACK : 0,
    FRONT : 1
  };
  static FlashMode = {
    OFF : 0,
    ON : 1,
    AUTO : 2
  };
  /**
   * Initialize the Camera
   * @param htmlElement {HTMLElement} The HTML Element to preview the camera in
   */
  @Cordova({sync: true})
  static initialize(htmlElement: HTMLElement): void { }

  /**
   * Start capture video as images from camera to preview camera on web page.
   * @param options
   */
  @Cordova({sync: true})
  static start(options?: {
    quality?: number;
    sourceType?: number;
    destinationType?: number;
    allowEdit?: boolean;
    correctOrientation?: boolean;
    saveToPhotoAlbum?: boolean;
    encodingType?: number;
    width?: number;
    height?: number;
  }): void { }

  /**
   * Takes a photo
   * @returns {Promise<any>}
   */
  @Cordova()
  static takePicture(): Promise<any> { return; }

  /**
   * Sets the flash mode
   * @param flashMode {number} Flash mode, use CanvasCamera.FlashMode constant to set
   */
  @Cordova({sync: true})
  static setFlashMode(flashMode: number): void { }

  /**
   * Set camera position
   * @param cameraPosition {number} Camera Position, use CanvasCamera.CameraPosition constant
   */
  @Cordova({sync: true})
  static setCameraPosition(cameraPosition: number): void {}
}
