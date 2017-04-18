import { Injectable } from '@angular/core';
import { CordovaInstance, Plugin, CordovaCheck } from '@ionic-native/core';

declare var Media: any;


/**
 * @hidden
 */
export class MediaObject {

  /**
   * Open a media file
   * @param src {string} A URI containing the audio content.
   * @param onStatusUpdate {Function} A callback function to be invoked when the status of the file changes
   */
  constructor(private _objectInstance: any) {}

  /**
   * Get the current amplitude of the current recording.
   * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
   */
  @CordovaInstance()
  getCurrentAmplitude(): Promise<any> { return; }

  /**
   * Get the current position within an audio file. Also updates the Media object's position parameter.
   * @returns {Promise<any>} Returns a promise with the position of the current recording
   */
  @CordovaInstance()
  getCurrentPosition(): Promise<any> { return; }

  /**
   * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
   * @returns {number} Returns a promise with the duration of the current recording
   */
  @CordovaInstance({
    sync: true
  })
  getDuration(): number { return; }

  /**
   * Starts or resumes playing an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  play(iosOptions?: {
    numberOfLoops?: number,
    playAudioWhenScreenIsLocked?: boolean
  }): void { }

  /**
   * Pauses playing an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  pause(): void { }

  /**
   * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
   */
  @CordovaInstance({
    sync: true
  })
  release(): void { }

  /**
   * Sets the current position within an audio file.
   * @param {number} milliseconds The time position you want to set for the current audio file
   */
  @CordovaInstance({
    sync: true
  })
  seekTo(milliseconds: number): void { }

  /**
   * Set the volume for an audio file.
   * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
   */
  @CordovaInstance({
    sync: true
  })
  setVolume(volume: number): void { }

  /**
   * Starts recording an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  startRecord(): void { }


  /**
   * Stops recording
   */
  @CordovaInstance({
    sync: true
  })
  stopRecord(): void { }

  /**
   * Pauses recording
   */
  @CordovaInstance({
    sync: true
  })
  pauseRecord(): void { }

  /**
   * Resumes recording
   */
  @CordovaInstance({
    sync: true
  })
  resumeRecord(): void { }

  /**
   * Stops playing an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  stop(): void { }
}

/**
 * @name Media
 * @description
 * @usage
 * ```typescript
 * import { MediaPlugin, MediaObject } from '@ionic-native/media';
 *
 *
 * constructor(private media: MediaPlugin) { }
 *
 *
 * ...
 *
 *
 * // Create a MediaPlugin instance.  Expects path to file or url as argument
 * // We can optionally pass a second argument to track the status of the media
 *
 * const onStatusUpdate = (status) => console.log(status);
 *
 * this.media.create('path/to/file.mp3', onStatusUpdate)
 *   .then((file: MediaObject) => {
 *
 *      // play the file
 *      file.play();
 *
 *      // pause the file
 *      file.pause();
 *
 *      // get current playback position
 *       file.getCurrentPosition().then((position) => {
 *         console.log(position);
 *      });
 *
 *      // get file duration
 *      let duration = file.getDuration();
 *      console.log(duration);
 *
 *      // skip to 10 seconds (expects int value in ms)
 *      file.seekTo(10000);
 *
 *      // stop playing the file
 *      file.stop();
 *
 *      // release the native audio resource
 *      // Platform Quirks:
 *      // iOS simply create a new instance and the old one will be overwritten
 *      // Android you must call release() to destroy instances of media when you are done
 *      file.release();
 *
 *   })
 *   .catch(e => console.log('Error opening media file', e));
 *
 *
 * // Recording to a file
 * this.media.create('path/to/file.mp3')
 *   .then((file: MediaObject) => {
 *
 *     file.startRecord();
 *
 *     file.stopRecord();
 *
 *   });
 *
 * ```
 * @classes
 * MediaObject
 */
@Plugin({
  pluginName: 'MediaPlugin',
  repo: 'https://github.com/apache/cordova-plugin-media',
  plugin: 'cordova-plugin-media',
  pluginRef: 'Media'
})
@Injectable()
export class MediaPlugin {

  // Constants
  /**
   * @hidden
   */
  MEDIA_NONE: number = 0;
  /**
   * @hidden
   */
  MEDIA_STARTING: number = 1;
  /**
   * @hidden
   */
  MEDIA_RUNNING: number = 2;
  /**
   * @hidden
   */
  MEDIA_PAUSED: number = 3;
  /**
   * @hidden
   */
  MEDIA_STOPPED: number = 4;

  // error codes
  /**
   * @hidden
   */
  MEDIA_ERR_ABORTED: number = 1;
  /**
   * @hidden
   */
  MEDIA_ERR_NETWORK: number = 2;
  /**
   * @hidden
   */
  MEDIA_ERR_DECODE: number = 3;
  /**
   * @hidden
   */
  MEDIA_ERR_NONE_SUPPORTED: number = 4;

  /**
   * Open a media file
   * @param src {string} A URI containing the audio content.
   * @param onStatusUpdate {Function} A callback function to be invoked when the status of the file changes
   * @return {Promise<MediaObject>}
   */
  @CordovaCheck()
  create(src: string, onStatusUpdate?: Function): Promise<MediaObject> {

    return new Promise<MediaObject>((resolve, reject) => {
      // Creates a new media object
      // Resolves with the media object
      // or rejects with the error
      const instance = new Media(src, () => resolve(new MediaObject(instance)), reject, onStatusUpdate);
    });

  }

}
