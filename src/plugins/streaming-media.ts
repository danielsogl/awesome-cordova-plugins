import {Plugin, Cordova} from './plugin';
/**
 * @name StreamingMedia
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```
 * import {StreamingMedia} from 'ionic-native';
 *
 * let options: VideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape'
 * };
 *
 * StreamingMedia.('https://path/to/video/stream', options);
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-streaming-media',
  pluginRef: 'plugins.streamingMedia',
  repo: 'https://github.com/nchutchind/cordova-plugin-streaming-media',
  platforms: ['Android', 'iOS']
})
export class StreamingMedia {
  /**
   * Streams a video
   * @param videoUrl {string} The URL of the video
   * @param options {VideoOptions} Options
   */
  @Cordova({sync: true})
  static playVideo(videoUrl: string, options?: VideoOptions): void { }

  /**
   * Streams an audio
   * @param audioUrl {string} The URL of the audio stream
   * @param options {AudioOptions} Options
   */
  @Cordova({sync: true})
  static playAudio(audioUrl: string, options?: AudioOptions): void { }

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

export interface VideoOptions {
  successCallback?: Function;
  errorCallback?: Function;
  orientation?: string;
}

export interface AudioOptions {
  bgColor?: string;
  bgImage?: string;
  bgImageScale?: string;
  initFullscreen?: boolean;
  successCallback?: Function;
  errorCallback?: Function;
}
