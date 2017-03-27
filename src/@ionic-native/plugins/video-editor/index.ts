import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

export interface TranscodeOptions {

  /** The path to the video on the device. */
  fileUri: string;

  /** The file name for the transcoded video */
  outputFileName: string;

  /** Instructions on how to encode the video. Android is always mp4 */
  outputFileType?: number;

  /** Should the video be processed with quailty or speed in mind. iOS only */
  optimizeForNetworkUse?: number;

  /** Save the new video the library. Not supported in windows. Defaults to true */
  saveToLibrary?: boolean;

  /** Delete the original video. Android only. Defaults to false */
  deleteInputFile?: boolean;

  /** iOS only. Defaults to true */
  maintainAspectRatio?: boolean;

  /** Width of the result */
  width?: number;

  /** Height of the result */
  height?: number;

  /** Bitrate in bits. Defaults to 1 megabit (1000000). */
  videoBitrate?: number;

  /** Frames per second of the result. Android only. Defaults to 24. */
  fps?: number;

  /** Number of audio channels. iOS only. Defaults to 2. */
  audioChannels?: number;

  /** Sample rate for the audio. iOS only. Defaults to 44100*/
  audioSampleRate?: number;

  /** Sample rate for the audio. iOS only. Defaults to 128 kilobits (128000). */
  audioBitrate?: number;

  /** Not supported in windows, progress on the transcode. info will be a number from 0 to 100 */
  progress?: (info: number) => void;
}

export interface TrimOptions {

  /** Path to input video. */
  fileUri: string;

  /** Time to start trimming in seconds */
  trimStart: number;

  /** Time to end trimming in seconds */
  trimEnd: number;

  /** Output file name */
  outputFileName: string;

  /** Progress on transcode. info will be a number from 0 to 100 */
  progress?: (info: any) => void;

}

export interface CreateThumbnailOptions {

  /** The path to the video on the device */
  fileUri: string;

  /** The file name for the JPEG image */
  outputFileName: string;

  /** Location in the video to create the thumbnail (in seconds) */
  atTime?: number;

  /** Width of the thumbnail. */
  width?: number;

  /** Height of the thumbnail. */
  height?: number;

  /** Quality of the thumbnail (between 1 and 100). */
  quality?: number;

}

export interface GetVideoInfoOptions {

  /** The path to the video on the device. */
  fileUri: string;

}

export interface VideoInfo {

  /** Width of the video in pixels. */
  width: number;

  /** Height of the video in pixels. */
  height: number;

  /** Orientation of the video. Will be either portrait or landscape. */
  orientation: 'portrait' | 'landscape';

  /** Duration of the video in seconds. */
  duration: number;

  /** Size of the video in bytes. */
  size: number;

  /** Bitrate of the video in bits per second. */
  bitrate: number;

}

/**
 * @name Video Editor
 * @description Edit videos using native device APIs
 *
 * @usage
 * ```
 * import { VideoEditor } from '@ionic-native/video-editor';
 *
 * constructor(private videoEditor: VideoEditor) { }
 *
 * ...
 *
 * this.videoEditor.transcodeVideo({
 *   fileUri: '/path/to/input.mov',
 *   outputFileName: 'output.mp4',
 *   outputFileType: VideoEditor.OutputFileType.MPEG4
 * })
 * .then((fileUri: string) => console.log('video transcode success', fileUri))
 * .catch((error: any) => console.log('video transcode error', error));
 *
 * ```
 * @interfaces
 * TranscodeOptions
 * TrimOptions
 * CreateThumbnailOptions
 * GetVideoInfoOptions
 * VideoInfo
 */
@Plugin({
  pluginName: 'VideoEditor',
  plugin: 'cordova-plugin-video-editor',
  pluginRef: 'VideoEditor',
  repo: 'https://github.com/jbavari/cordova-plugin-video-editor',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
@Injectable()
export class VideoEditor {

  OptimizeForNetworkUse = {
    NO: 0,
    YES: 1
  };

  OutputFileType = {
    M4V: 0,
    MPEG4: 1,
    M4A: 2,
    QUICK_TIME: 3
  };

  /**
   * Transcode a video
   * @param options {TranscodeOptions} Options
   * @returns {Promise<string>} Returns a promise that resolves to the path of the transcoded video
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  transcodeVideo(options: TranscodeOptions): Promise<string> { return; }

  /**
   * Trim a video
   * @param options {TrimOptions} Options
   * @returns {Promise<string>} Returns a promise that resolves to the path of the trimmed video
   */
  @Cordova({
    callbackOrder: 'reverse',
    platforms: ['iOS']
  })
  trim(options: TrimOptions): Promise<string> { return; }

  /**
   * Create a JPEG thumbnail from a video
   * @param options {CreateThumbnailOptions} Options
   * @returns {Promise<string>} Returns a promise that resolves to the path to the jpeg image on the device
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  createThumbnail(options: CreateThumbnailOptions): Promise<string> { return; }

  /**
   * Get info on a video (width, height, orientation, duration, size, & bitrate)
   * @param options {GetVideoInfoOptions} Options
   * @returns {Promise<VideoInfo>} Returns a promise that resolves to an object containing info on the video
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  getVideoInfo(options: GetVideoInfoOptions): Promise<VideoInfo> { return; }

}
