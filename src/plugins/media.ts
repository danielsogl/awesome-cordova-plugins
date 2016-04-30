import {CordovaInstance, Plugin} from './plugin';
declare var Media: any;
/**
 * @name MediaPlugin
 * @description
 * @usage
 * ```ts
 * import {MediaPlugin} from 'ionic-native';
 *
 *
 * ...
 *
 *
 * // Playing a file
 * var file = new MediaPlugin("path/to/file.mp3");
 *
 * // play the file
 * file.play();
 *
 * // skip to 10 seconds
 * file.seekTo(10000);
 *
 * // stop plying the file
 * file.stop();
 *
 *
 * ...
 *
 * // Recording to a file
 * var newFile = new MediaPlugin("path/to/file.mp3");
 * newFile.startRecord();
 *
 * newFile.stopRecord();
 *
 *
 *
 * ```
 */
@Plugin({
  repo: 'https://github.com/apache/cordova-plugin-media',
  plugin: 'cordova-plugin-media',
  pluginRef: 'Media'
})
export class MediaPlugin {

  // Constants
  static MEDIA_NONE: number = 0;
  static MEDIA_STARTING: number = 1;
  static MEDIA_RUNNING: number = 2;
  static MEDIA_PAUSED: number = 3;
  static MEDIA_STOPPED: number = 4;

  // Properties
  private _objectInstance: any;

  // Methods
  /**
   * Open a media file
   * @param src {string} A URI containing the audio content.
   */
  constructor (src: string) {
    // TODO handle success, error, and status
    this._objectInstance = new Media(src);
  }

  /**
   * Returns the current amplitude of the current recording.
   */
  @CordovaInstance()
  getCurrentAmplitude (): Promise<any> {return; }

  /**
   * Returns the current position within an audio file. Also updates the Media object's position parameter.
   */
  @CordovaInstance()
  getCurrentPosition (): Promise<any> {return; }

  /**
   * Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
   */
  @CordovaInstance({
    sync: true
  })
  getDuration (): number {return; }

  /**
   * Starts or resumes playing an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  play (iosOptions?: {
    numberOfLoops?: number,
    playAudioWhenScreenIsLocked?: boolean
  }): void {}

  /**
   * Pauses playing an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  pause (): void {}

  /**
   * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
   */
  @CordovaInstance({
    sync: true
  })
  release (): void {}

  /**
   * Sets the current position within an audio file.
   * @param milliseconds
   */
  @CordovaInstance({
    sync: true
  })
  seekTo (milliseconds: number): void {}

  /**
   * Set the volume for an audio file.
   * @param volume The volume to set for playback. The value must be within the range of 0.0 to 1.0.
   */
  @CordovaInstance({
    sync: true
  })
  setVolume (volume: number): void {}

  /**
   * Starts recording an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  startRecord (): void {}


  /**
   * Stops recording
   */
  @CordovaInstance({
    sync: true
  })
  stopRecord (): void {}


  /**
   * Stops playing an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  stop (): void {}



}

export class MediaError {
  static get MEDIA_ERR_ABORTED () {return 1; }
  static get MEDIA_ERR_NETWORK () {return 2; }
  static get MEDIA_ERR_DECODE () {return 3; }
  static get MEDIA_ERR_NONE_SUPPORTED () {return 4; }
  code: number;
  message: string;
}