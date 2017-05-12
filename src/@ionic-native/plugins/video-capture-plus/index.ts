import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface VideoCapturePlusOptions {

  /**
  * The number of videos to record, default 1 (on iOS always 1)
  */
  limit?: number;

  /**
  * Max duration in seconds, default 0, which is 'forever'
  */
  duration?: number;

  /**
  * Set to true to override the default low quality setting
  */
  highquality?: boolean;

  /**
  * Set to true to override the default backfacing camera setting.
  * You'll want to sniff the useragent/device and pass the best overlay based on that.. assuming iphone here
  */
  frontcamera?: boolean;

  /**
  * put the png overlay in your assets folder
  */
  portraitOverlay?: string;

  /**
  *  not passing an overlay means no image is shown for the landscape orientation
  */
  landscapeOverlay?: string;

  /**
  * iOS only
  */
  overlayText?: string;

}

/**
 * @beta
 * @name Video Capture Plus
 * @description
 * This plugin offers some useful extras on top of the default Video Capture Plugin capabilities:
 * - HD recording.
 * - Starting with the front camera.
 * - A custom overlay (currently iOS only).
 *
 * @usage
 * ```typescript
 * import { VideoCapturePlus, VideoCapturePlusOptions } from '@ionic-native/video-capture-plus';
 *
 *
 * constructor(private videoCapturePlus: VideoCapturePlus) { }
 *
 * ...
 *
 * const options: VideoCapturePlusOptions = {
 *    limit: 1,
 *    highquality: true,
 *    portraitOverlay: 'assets/img/camera/overlay/portrait.png',
 *    landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
 * }
 *
 * this.videoCapturePlus.captureVideo(options).then(mediafile => console.log(mediafile), error => console.log('Something went wrong'));
 *
 * ```
 * @interfaces
 * VideoCapturePlusOptions
 */
@Plugin({
  pluginName: 'VideoCapturePlus',
  plugin: 'https://github.com/EddyVerbruggen/VideoCapturePlus-PhoneGap-Plugin.git',
  pluginRef: 'window.plugins.videocaptureplus',
  repo: 'https://github.com/EddyVerbruggen/VideoCapturePlus-PhoneGap-Plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class VideoCapturePlus extends IonicNativePlugin {

  /**
   * Starts recordings
   * @param [options] {VideoCapturePlusOptions} Configure options
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ callbackOrder: 'reverse' })
  captureVideo(options?: VideoCapturePlusOptions): Promise<any> { return; }

}
