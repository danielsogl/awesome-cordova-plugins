import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export type AndroidExoPlayerAspectRatio = 'FILL_SCREEN' | 'FIT_SCREEN';

export interface AndroidExoPlayerParams {
  /**
   * Url of the video to play.
   */
  url: string;

  /**
   * Set the user agent. Default is `ExoPlayerPlugin`
   */
  userAgent?: string;

  /**
   * Set the player aspect ratio.
   */
  aspectRatio?: AndroidExoPlayerAspectRatio;

  /**
   * Hide controls after this many milliseconds, default is `5000`.
   */
  hideTimeout?: number;

  /**
   * When set to false stream will not automatically start.
   */
  autoPlay?: boolean;

  /**
   * Start playback at this many milliseconds into video, default is `0`.
   */
  seekTo?: number;

  /**
   * Amount of time in milliseconds to use when skipping forward, default is `1000`.
   */
  forwardTime?: number;

  /**
   * Amount of time in milliseconds to use when skipping backward, default is `1000`.
   */
  rewindTime?: number;

  /**
   * Only play audio in the backgroud, default is `false`.
   * If you pass in `audioOnly: true`, make sure to manually close the player on some event (like escape button) since the plugin won't be detecting keypresses when playing audio in the background.
   */
  audioOnly?: true;

  /**
   * Optional subtitle url to display over the video.
   * We currently support .srt and .vtt subtitle formats. Subtitles are not supported on all stream types, as ExoPlayer has requirement that both video and subtitle "must have the same number of periods, and must not have any dynamic windows", which means for simple mp4s it should work, but on more complex HLS/Dash setups it might not.
   */
  subtitleUrl?: string;

  /**
   * okhttp connect timeout in milliseconds (default is `0`)
   */
  connectTimeout?: number;

  /**
   * okhttp read timeout in milliseconds (default is `0`)
   */
  readTimeout?: number;

  /**
   * okhttp write timeout in milliseconds (default is `0`)
   */
  writeTimeout?: number;

  /**
   * okhttp socket ping interval in milliseconds (default is `0` or disabled)
   */
  pingInterval?: number;

  /**
   * Number of times datasource will retry the stream before giving up (default is `3`)
   */
  retryCount?: number;

  /**
   * If this object is not present controller will not be visible.
   */
  controller?: AndroidExoPlayerControllerConfig;
}

export interface AndroidExoplayerState {
  [s: string]: string;
}

export interface AndroidExoPlayerControllerConfig {
  /**
   * Image in the controller.
   */
  streamImage: string;

  /**
   *
   */
  streamTitle: string;

  /**
   *
   */
  streamDescription: string;

  /**
   * Hide entire progress bar.
   */
  hideProgress?: true;

  /**
   * If progress bar is visible hide current position from it
   */
  hidePosition: false;

  /**
   * If progress bar is visible Hide stream duration from it
   */
  hideDuration: false;

  /**
   * Override the player control button icons.
   */
  controlIcons?: {
    /**
     * Rewind button icon.
     */
    exo_rew: string;

    /**
     * Play button icon.
     */
    exo_play: string;

    /**
     * Pause button icon.
     */
    exo_pause: string;

    /**
     * Fast forward button icon.
     */
    exo_ffwd: string;
  };
}

/**
 * @name Android ExoPlayer
 * @description
 * Cordova media player plugin using Google's ExoPlayer framework.
 *
 * https://github.com/google/ExoPlayer
 *
 * @usage
 * ```typescript
 * import { AndroidExoPlayer } from '@ionic-native/android-exoplayer';
 *
 * constructor(private androidExoPlayer: AndroidExoPlayer) { }
 *
 * ...
 *
 * this.androidExoPlayer.show({url: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube'});
 *
 * ```
 *
 * @interfaces
 * AndroidExoPlayerParams
 * AndroidExoplayerState
 * AndroidExoPlayerControllerConfig
 */
@Plugin({
  pluginName: 'AndroidExoPlayer',
  plugin: 'cordova-plugin-exoplayer',
  pluginRef: 'ExoPlayer',
  repo: 'https://github.com/frontyard/cordova-plugin-exoplayer',
  platforms: ['Android']
})
@Injectable()
export class AndroidExoplayer extends IonicNativePlugin {
  /**
   * Show the player.
   * @param {AndroidExoPlayerParams} parameters Parameters
   * @return {Observable<AndroidExoplayerState>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'close',
    clearWithArgs: false,
    successIndex: 1,
    errorIndex: 2
  })
  show(parameters: AndroidExoPlayerParams): Observable<AndroidExoplayerState> {
    return;
  }

  /**
   * Switch stream without disposing of the player.
   * @param {string} url The url of the new stream.
   * @param {AndroidExoPlayerControllerConfig} controller Configuration of the controller.
   * @return {Promise<void>}
   */
  @Cordova()
  setStream(
    url: string,
    controller: AndroidExoPlayerControllerConfig
  ): Promise<void> {
    return;
  }

  /**
   * Will pause if playing and play if paused
   * @return {Promise<void>}
   */
  @Cordova()
  playPause(): Promise<void> {
    return;
  }

  /**
   * Stop playing.
   * @return {Promise<void>}
   */
  @Cordova()
  stop(): Promise<void> {
    return;
  }

  /**
   * Jump to a particular position.
   * @param {number} milliseconds Position in stream in milliseconds
   * @return {Promise<void>}
   */
  @Cordova()
  seekTo(milliseconds: number): Promise<void> {
    return;
  }

  /**
   * Jump to a particular time relative to the current position.
   * @param {number} milliseconds Time in milliseconds
   * @return {Promise<void>}
   */
  @Cordova()
  seekBy(milliseconds: number): Promise<void> {
    return;
  }

  /**
   * Get the current player state.
   * @return {Promise<AndroidExoplayerState>}
   */
  @Cordova()
  getState(): Promise<AndroidExoplayerState> {
    return;
  }

  /**
   * Show the controller.
   * @return {Promise<void>}
   */
  @Cordova()
  showController(): Promise<void> {
    return;
  }

  /**
   * Hide the controller.
   * @return {Promise<void>}
   */
  @Cordova()
  hideController(): Promise<void> {
    return;
  }

  /**
   * Update the controller configuration.
   * @param {AndroidExoPlayerControllerConfig} controller Configuration of the controller.
   * @return {Promise<void>}
   */
  @Cordova()
  setController(controller: AndroidExoPlayerControllerConfig): Promise<void> {
    return;
  }

  /**
   * Close and dispose of player, call before destroy.
   * @return {Promise<void>}
   */
  @Cordova()
  close(): Promise<void> {
    return;
  }
}
