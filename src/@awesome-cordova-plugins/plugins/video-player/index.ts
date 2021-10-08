import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * Options for the video playback using the `play` function.
 */
export interface VideoOptions {
  /**
   * Set the initial volume of the video playback, where 0.0 is 0% volume and 1.0 is 100%.
   * For example: for a volume of 30% set the value to 0.3.
   */
  volume?: number;
  /**
   * There are two options for the scaling mode. SCALE_TO_FIT which is default and SCALE_TO_FIT_WITH_CROPPING.
   * These strings are the only ones which can be passed as option.
   */
  scalingMode?: number;
}

/**
 * @name Video Player
 * @description
 * A Cordova plugin that simply allows you to immediately play a video in fullscreen mode.
 *
 * Requires Cordova plugin: `com.moust.cordova.videoplayer`. For more info, please see the [VideoPlayer plugin docs](https://github.com/moust/cordova-plugin-videoplayer).
 * @usage
 * ```typescript
 * import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
 *
 * constructor(private videoPlayer: VideoPlayer) { }
 *
 * ...
 *
 * // Playing a video.
 * this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
 *  console.log('video completed');
 * }).catch(err => {
 *  console.log(err);
 * });
 *
 * ```
 * @interfaces
 * VideoOptions
 */
@Plugin({
  pluginName: 'VideoPlayer',
  plugin: 'https://github.com/moust/cordova-plugin-videoplayer.git',
  pluginRef: 'VideoPlayer',
  repo: 'https://github.com/moust/cordova-plugin-videoplayer',
  platforms: ['Android'],
})
@Injectable()
export class VideoPlayer extends AwesomeCordovaNativePlugin {
  /**
   * Plays the video from the passed url.
   *
   * @param fileUrl {string} File url to the video.
   * @param options {VideoOptions?} Optional video playback settings. See options above.
   * @returns {Promise<any>} Resolves promise when the video was played successfully.
   */
  @Cordova()
  play(fileUrl: string, options?: VideoOptions): Promise<any> {
    return;
  }

  /**
   * Stops the video playback immediatly.
   */
  @Cordova({ sync: true })
  close(): void {}
}
