import {Plugin, Cordova} from './plugin';


export interface CameraOptions {
    /** Picture quality in range 0-100. Default is 50 */
    quality?: number;
    /**
     * Choose the format of the return value.
     * Defined in navigator.camera.DestinationType. Default is FILE_URI.
     *      DATA_URL : 0,   Return image as base64-encoded string
     *      FILE_URI : 1,   Return image file URI
     *      NATIVE_URI : 2  Return image native URI
     *          (e.g., assets-library:// on iOS or content:// on Android)
     */
    destinationType?: number;
    /**
     * Set the source of the picture.
     * Defined in navigator.camera.PictureSourceType. Default is CAMERA.
     *      PHOTOLIBRARY : 0,
     *      CAMERA : 1,
     *      SAVEDPHOTOALBUM : 2
     */
    sourceType?: number;
    /** Allow simple editing of image before selection. */
    allowEdit?: boolean;
    /**
     * Choose the returned image file's encoding.
     * Defined in navigator.camera.EncodingType. Default is JPEG
     *      JPEG : 0    Return JPEG encoded image
     *      PNG : 1     Return PNG encoded image
     */
    encodingType?: number;
    /**
     * Width in pixels to scale image. Must be used with targetHeight.
     * Aspect ratio remains constant.
    */
    targetWidth?: number;
    /**
     * Height in pixels to scale image. Must be used with targetWidth.
     * Aspect ratio remains constant.
     */
    targetHeight?: number;
    /**
     * Set the type of media to select from. Only works when PictureSourceType
     * is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in nagivator.camera.MediaType
     *      PICTURE: 0      allow selection of still pictures only. DEFAULT.
     *          Will return format specified via DestinationType
     *      VIDEO: 1        allow selection of video only, WILL ALWAYS RETURN FILE_URI
     *      ALLMEDIA : 2    allow selection from all media types
     */
    mediaType?: number;
    /** Rotate the image to correct for the orientation of the device during capture. */
    correctOrientation?: boolean;
    /** Save the image to the photo album on the device after capture. */
    saveToPhotoAlbum?: boolean;
    /**
     * Choose the camera to use (front- or back-facing).
     * Defined in navigator.camera.Direction. Default is BACK.
     *      FRONT: 0
     *      BACK: 1
     */
    cameraDirection?: number;
    /** iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions. */
    popoverOptions?: CameraPopoverOptions;
}

/**
 * iOS-only parameters that specify the anchor element location and arrow direction
 * of the popover when selecting images from an iPad's library or album.
 */
export interface CameraPopoverOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection
     * Matches iOS UIPopoverArrowDirection constants.
     *      ARROW_UP : 1,
     *      ARROW_DOWN : 2,
     *      ARROW_LEFT : 4,
     *      ARROW_RIGHT : 8,
     *      ARROW_ANY : 15
     */
    arrowDir: number;
}

/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires {@link module:driftyco/ionic-native} and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```js
 * import {Camera} from 'ionic-native';
 * 
 * Camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = "data:image/jpeg;base64," + imageData;
 * }, (err) => {
 * });
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-camera',
  pluginRef: 'navigator.camera',
  repo: 'https://github.com/apache/cordova-plugin-camera',
  platforms: ['Android', 'BlackBerry', 'Browser', 'Firefox', 'FireOS', 'iOS', 'Windows', 'Windows Phone 8', 'Ubuntu']
})
export class Camera {
  /**
   * Take a picture or video, or load one from the library.
   * @param {CameraOptions} options
   * @return Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static getPicture(options: CameraOptions): Promise<any> { return; }

  /**
   * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
   * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
   * @return Returns a Promise
   */
  @Cordova({
    platforms: ['iOS']
  })
  static cleanup() { };

  /**
   * @enum {number}
   */
  static DestinationType = {
    /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
    DATA_URL: 0,
    /** Return file uri (content://media/external/images/media/2 for Android) */
    FILE_URI: 1,
    /** Return native uri (eg. asset-library://... for iOS) */
    NATIVE_URI: 2
  };

  /**
   * @enum {number}
   */
  static EncodingType = {
    /** Return JPEG encoded image */
    JPEG: 0,
    /** Return PNG encoded image */
    PNG: 1
  };
  /**
   * @enum {number}
   */
  static MediaType = {
    /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
    PICTURE: 0,
    /** Allow selection of video only, ONLY RETURNS URL */
    VIDEO: 1,
    /** Allow selection from all media types */
    ALLMEDIA : 2
  };

  /**
   * @enum {number}
   */
  static PictureSourceType = {
    /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
    PHOTOLIBRARY : 0,
    /** Take picture from camera */
    CAMERA : 1,
    /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
    SAVEDPHOTOALBUM : 2
  };

  /**
   * Matches iOS UIPopoverArrowDirection constants to specify arrow location on popover.
   * @enum {number}
   */
  static PopoverArrowDirection = {
    ARROW_UP : 1,
    ARROW_DOWN : 2,
    ARROW_LEFT : 4,
    ARROW_RIGHT : 8,
    ARROW_ANY : 15
  };

  /**
   * @enum {number}
   */
  static Direction = {
    /** Use the back-facing camera */
    BACK: 0,
    /** Use the front-facing camera */
    FRONT: 1
  };

}


