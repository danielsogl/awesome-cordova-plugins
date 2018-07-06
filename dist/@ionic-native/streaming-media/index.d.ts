import { IonicNativePlugin } from '@ionic-native/core';
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
 * @name Streaming Media
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```typescript
 * import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
 *
 * constructor(private streamingMedia: StreamingMedia) { }
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape'
 * };
 *
 * this.streamingMedia.playVideo('https://path/to/video/stream', options);
 *
 * ```
 * @interfaces
 * StreamingVideoOptions
 * StreamingAudioOptions
 */
export declare class StreamingMedia extends IonicNativePlugin {
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    playVideo(videoUrl: string, options?: StreamingVideoOptions): void;
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    playAudio(audioUrl: string, options?: StreamingAudioOptions): void;
    /**
     * Stops streaming audio
     */
    stopAudio(): void;
    /**
     * Pauses streaming audio
     */
    pauseAudio(): void;
    /**
     * Resumes streaming audio
     */
    resumeAudio(): void;
}
