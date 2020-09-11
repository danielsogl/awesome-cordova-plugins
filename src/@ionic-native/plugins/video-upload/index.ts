/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * Options for the video recording & upload feature.
 */
export interface UploadOptions {
  /**
   * AWS Cognito Pool ID
   */
  poolID: string;
  /**
   * AWS bucket and cognito pool id region. they should be same.
   */
  region: string;
  /**
   * AWS bucket name where video is uploaded to.
   */
  bucket: string;
  /**
   * Folder name in the AWS bucket.
   */
  folder: string;
  /**
   * camera preview options - width, height.
   */
  cameraWidth: number;
  cameraHeight: number;
}

/**
 * Options for the live stream
 */
export interface LiveOptions {
  /**
   * camera preview options - width, height.
   */
  cameraWidth: number;
  cameraHeight: number;
}

/**
 * @name Video Upload
 * @description
 * A Cordova plugin that simply allows you to record and upload a video to your AWS bucket.
 * And this plugin works as a live stream broadcaster to your rtmp end point.
 *
 * @usage
 * ```typescript
 * import { VideoUpload } from '@ionic-native/video-upload';
 *
 *
 * constructor(private videoUpload: VideoUpload) { }
 *
 * ...
 *
 *
 * this.videoUpload.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'VideoUpload',
  plugin: 'https://github.com/stardevrk/cordova-plugin-video-upload-aws.git', // npm package name, example: cordova-plugin-camera
  pluginRef: 'VideoUpload', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/stardevrk/cordova-plugin-video-upload-aws', // the github repository URL for the plugin
  platforms: ['iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class VideoUpload extends IonicNativePlugin {
  /**
   * Initialize the plugin with the upload feature
   * @param uploadOptions {UploadOptions} Video Upload Plugin feature setting options. All are required.
   */
  @Cordova({ sync: true })
  init(uploadOptions: UploadOptions): void {}

  /**
   * Start the video upload plugin
   * @param pluginType {string} Video Upload Plugin feature setting options. All are required.
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  startUpload(pluginType: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Initialize the live stream plugin
   * @param options {LiveOptions} live stream broadcaster feature camera preview options. All are required.
   */
  @Cordova({ sync: true })
  initLive(options: LiveOptions): void {}

  /**
   * Start live stream plugin
   * @param rtmpEndpoint {string} live stream endpoint that you will send the RTMP to.
   */
  @Cordova({ sync: true })
  startBroadcast(rtmpEndpoint: string): void {}
}
