import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * Object of options to pass into the playVideo method.
 */
export interface StreamingVideoOptions {
  /** Executes after success playing audio. */
  successCallback?: Function;
  /** Executes after error playing video. */
  errorCallback?: Function;
  /** Force one orientation for playing video. */
  orientation?: string;
  /** Should the video close after it's over. Defaults to true. */
  shouldAutoClose?: boolean;
  /** Should the video have controls. Defaults to true. Android only. */
  controls?: boolean;
}

/**
 * Object of options to pass into the playAudio method.
 */
export interface StreamingAudioOptions {
  /** Background color for audio player. */
  bgColor?: string;
  /** Background image for audio player. */
  bgImage?: string;
  /**
   * Background image scale for audio player.
   * Valid values are:
   * fit
   * stretch
   * aspectStretch.
   */
  bgImageScale?: string;
  /** Start audio player in full screen. iOS only. */
  initFullscreen?: boolean;
  /**
   * Keeps the screen lit and stops it from locking
   * while audio is playing. Android only.
   */
  keepAwake?: boolean;
  /** Executes after success playing audio. */
  successCallback?: Function;
  /** Executes after error playing audio. */
  errorCallback?: Function;
}

/**
 * @name Streaming Media
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 * @usage
 * ```typescript
 * import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';
 *
 * constructor(private streamingMedia: StreamingMedia) { }
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape',
 *   shouldAutoClose: true,
 *   controls: false
 * };
 *
 * this.streamingMedia.playVideo('https://path/to/video/stream', options);
 *
 * ```
 * @interfaces
 * StreamingVideoOptions
 * StreamingAudioOptions
 */
@Plugin({
  pluginName: 'StreamingMedia',
  plugin: 'cordova-plugin-streaming-media',
  pluginRef: 'plugins.streamingMedia',
  repo: 'https://github.com/nchutchind/cordova-plugin-streaming-media',
  platforms: ['Amazon Fire OS', 'Android', 'iOS'],
})
@Injectable()
export class StreamingMedia extends AwesomeCordovaNativePlugin {
  /**
   * Streams a video
   *
   * @param videoUrl {string} The URL of the video
   * @param options {StreamingVideoOptions} Options
   */
  @Cordova({ sync: true })
  playVideo(videoUrl: string, options?: StreamingVideoOptions): void {}

  /**
   * Streams an audio
   *
   * @param audioUrl {string} The URL of the audio stream
   * @param options {StreamingAudioOptions} Options
   */
  @Cordova({ sync: true })
  playAudio(audioUrl: string, options?: StreamingAudioOptions): void {}

  /**
   * Stops streaming audio
   */
  @Cordova({ sync: true })
  stopAudio(): void {}

  /**
   * Pauses streaming audio
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  pauseAudio(): void {}

  /**
   * Resumes streaming audio
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  resumeAudio(): void {}
}
