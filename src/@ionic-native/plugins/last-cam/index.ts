import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface LastCamStartupOptions {
  /** The left edge in pixels, default 0 */
  x?: number;

  /** The top edge in pixels, default 0 */
  y?: number;

  /** The width in pixels, default window.screen.width */
  width?: number;

  /** The height in pixels, default window.screen.height */
  height?: number;

  /** Choose the camera to use 'front' or 'back', default 'front' */
  camera?: string;
}

/**
 * @name LastCam
 * @description
 * Last Cam is a Camera Preview plugin that allows you to take capture both Videos and images in a
 * custom html preview of your choice.
 *
 * @interfaces
 * LastCamStartupOptions
 */
@Plugin({
  pluginName: 'LastCam',
  plugin: 'cordova-plugin-last-cam',
  pluginRef: 'LastCam',
  repo: 'https://github.com/bengejd/cordova-plugin-last-cam',
  platforms: ['iOS'],
})
@Injectable()
export class LastCam extends IonicNativePlugin {
  /**
   * Starts the camera preview instance.
   * @param {LastCamStartupOptions} options
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  startCamera(options: LastCamStartupOptions): Promise<any> {
    return;
  }

  /**
   * Stops the camera preview instance. (iOS)
   * @return {Promise<any>}
   */
  @Cordova()
  stopCamera(): Promise<any> {
    return;
  }

  /**
   * Switch from the rear camera and front camera, if available.
   * @return {Promise<any>}
   */
  @Cordova()
  switchCamera(): Promise<any> {
    return;
  }

  /**
   * Switch the flash mode.
   * @return {Promise<any>}
   */
  @Cordova()
  switchFlash(): Promise<any> {
    return;
  }

  /**
   * Take the picture (base64)
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  takePicture(): Promise<any> {
    return;
  }

  /**
   * Start the video capture
   * @return {Promise<any>}
   */
  @Cordova()
  startVideoCapture(): Promise<any> {
    return;
  }

  /**
   * Stops the video capture
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  stopVideoCapture(): Promise<any> {
    return;
  }

  /**
   * Promise of the recordingTimer.
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  recordingTimer(): Promise<any> {
    return;
  }

  /**
   * Observable of the recordingTimer.
   * @return {Observable<any>}
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
    observable: true,
  })
  watchRecordingTimer(): Observable<any> {
    return;
  }
}
