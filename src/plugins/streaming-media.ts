import { Plugin, Cordova } from './plugin';

export interface StreamingVideoOptions {
  successCallback?: Function;
  errorCallback?: Function;
  orientation?: string;
}

export interface StreamingAudioOptions {
  bgColor?: string;
  bgImage?: string;
  bgImageScale?: string;
  initFullscreen?: boolean;
  successCallback?: Function;
  errorCallback?: Function;
}

/**
 * @name StreamingMedia
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```
 * import {StreamingMedia, StreamingVideoOptions} from 'ionic-native';
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape'
 * };
 *
 * StreamingMedia.playVideo('https://path/to/video/stream', options);
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
  platforms: ['Android', 'iOS']
})
export class StreamingMedia {
  /**
   * Streams a video
   * @param videoUrl {string} The URL of the video
   * @param options {StreamingVideoOptions} Options
   */
  @Cordova({sync: true})
  static playVideo(videoUrl: string, options?: StreamingVideoOptions): void { }

  /**
   * Streams an audio
   * @param audioUrl {string} The URL of the audio stream
   * @param options {StreamingAudioOptions} Options
   */
  @Cordova({sync: true})
  static playAudio(audioUrl: string, options?: StreamingAudioOptions): void { }

  /**
   * Stops streaming audio
   */
  @Cordova({sync: true})
  static stopAudio(): void { }

  /**
   * Pauses streaming audio
   */
  @Cordova({sync: true, platforms: ['iOS']})
  static pauseAudio(): void { }

  /**
   * Resumes streaming audio
   */
  @Cordova({sync: true, platforms: ['iOS']})
  static resumeAudio(): void { }

}
