import { CordovaInstance, Plugin, getPlugin, pluginWarn } from './plugin';

declare var Media: any;

export interface MediaError {
  code: number;
  message: string;
}

/**
 * @name MediaPlugin
 * @description
 * @usage
 * ```typescript
 * import { MediaPlugin } from 'ionic-native';
 *
 *
 *
 * // Create a MediaPlugin instance.  Expects path to file or url as argument
 * // We can optionally pass a second argument to track the status of the media
 *
 * const onStatusUpdate = (status) => console.log(status);
 *
 * const file = new MediaPlugin('path/to/file.mp3', onStatusUpdate);
 *
 * // Catch the Success & Error Output
 * // Platform Quirks
 * // iOS calls success on completion of playback only
 * // Android calls success on completion of playback AND on release()
 * file.init.then(() => {
 *   console.log('Playback Finished');
 * }, (err) => {
 *   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
 * });
 *
 * // play the file
 * file.play();
 *
 * // pause the file
 * file.pause();
 *
 * // get current playback position
 * file.getCurrentPosition().then((position) => {
 *   console.log(position);
 * });
 *
 * // get file duration
 * file.getDuration();
 *
 * // skip to 10 seconds (expects int value in ms)
 * file.seekTo(10000);
 *
 * // stop playing the file
 * file.stop();
 *
 * // release the native audio resource
 * // Platform Quirks:
 * // iOS simply create a new instance and the old one will be overwritten
 * // Android you must call release() to destroy instances of media when you are done
 * file.release();
 *
 * // Recording to a file
 * var newFile = new MediaPlugin('path/to/file.mp3');
 * newFile.startRecord();
 *
 * newFile.stopRecord();
 *
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'MediaPlugin',
  repo: 'https://github.com/apache/cordova-plugin-media',
  plugin: 'cordova-plugin-media',
  pluginRef: 'Media'
})
export class MediaPlugin {

  // Constants
  /**
   * @private
   */
  static MEDIA_NONE: number = 0;
  /**
   * @private
   */
  static MEDIA_STARTING: number = 1;
  /**
   * @private
   */
  static MEDIA_RUNNING: number = 2;
  /**
   * @private
   */
  static MEDIA_PAUSED: number = 3;
  /**
   * @private
   */
  static MEDIA_STOPPED: number = 4;

  // error codes
  /**
   * @private
   */
  static MEDIA_ERR_ABORTED: number = 1;
  /**
   * @private
   */
  static MEDIA_ERR_NETWORK: number = 2;
  /**
   * @private
   */
  static MEDIA_ERR_DECODE: number = 3;
  /**
   * @private
   */
  static MEDIA_ERR_NONE_SUPPORTED: number = 4;

  // Properties
  private _objectInstance: any;
  init: Promise<any>;

  // Methods
  /**
   * Open a media file
   * @param src {string} A URI containing the audio content.
   * @param onStatusUpdate {Function} A callback function to be invoked when the status of the file changes
   */
  constructor(src: string, onStatusUpdate?: Function) {
    if (!!getPlugin('Media')) {
      this.init = new Promise<any>((resolve, reject) => {
        this._objectInstance = new Media(src, resolve, reject, onStatusUpdate);
      });
    } else {
      pluginWarn({
        pluginName: 'MediaPlugin',
        plugin: 'cordova-plugin-media'
      });
    }
  }

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
