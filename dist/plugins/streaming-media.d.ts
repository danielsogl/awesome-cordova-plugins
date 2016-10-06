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
 * StreamingMedia.('https://path/to/video/stream', options);
 *
 * ```
 */
export declare class StreamingMedia {
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    static playVideo(videoUrl: string, options?: StreamingVideoOptions): void;
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    static playAudio(audioUrl: string, options?: StreamingAudioOptions): void;
    /**
     * Stops streaming audio
     */
    static stopAudio(): void;
    /**
     * Pauses streaming audio
     */
    static pauseAudio(): void;
    /**
     * Resumes streaming audio
     */
    static resumeAudio(): void;
}
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
