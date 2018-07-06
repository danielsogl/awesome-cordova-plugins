import { IonicNativePlugin } from '@ionic-native/core';
export interface MediaFile {
    /**
     * The name of the file, without path information.
     */
    name: string;
    /**
     * The full path of the file, including the name.
     */
    fullPath: string;
    /**
     * The file's mime type
     */
    type: string;
    /**
     * The date and time when the file was last modified.
     */
    lastModifiedDate: Date;
    /**
     * The size of the file, in bytes.
     */
    size: number;
    /**
     * Retrieves the format information of the media file.
     * @param {Function} successCallback
     * @param {Function} [errorCallback]
     */
    getFormatData(successCallback: (data: MediaFileData) => any, errorCallback?: (err: any) => any): any;
}
export interface MediaFileData {
    /**
     * The actual format of the audio and video content.
     */
    codecs: string;
    /**
     * The average bitrate of the content. The value is zero for images.
     */
    bitrate: number;
    /**
     * The height of the image or video in pixels. The value is zero for audio clips.
     */
    height: number;
    /**
     * The width of the image or video in pixels. The value is zero for audio clips.
     */
    width: number;
    /**
     * The length of the video or sound clip in seconds. The value is zero for images.
     */
    duration: number;
}
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
 * This plugin offers some useful extras on top of the default Media Capture Plugin capabilities:
 * - HD recording.
 * - Starting with the front camera.
 * - A custom overlay (currently iOS only).
 *
 * @usage
 * ```typescript
 * import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';
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
 * this.videoCapturePlus.captureVideo(options).then(mediafile: MediaFile[] => console.log(mediafile), error => console.log('Something went wrong'));
 *
 * ```
 * @interfaces
 * MediaFile
 * MediaFileData
 * VideoCapturePlusOptions
 */
export declare class VideoCapturePlus extends IonicNativePlugin {
    /**
     * Starts recordings
     * @param [options] {VideoCapturePlusOptions} Configure options
     * @return {Promise<MediaFile[]>}
     */
    captureVideo(options?: VideoCapturePlusOptions): Promise<MediaFile[]>;
}
