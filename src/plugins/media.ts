import { CordovaInstance, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';


declare var Media: any;

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
 * var file = new MediaPlugin('path/to/file.mp3');
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
 * file.getDuration().then((duration) => {
 *   console.log(position);
 * });
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
  status: Observable<any>;
  init: Promise<any>;

  // Methods
  /**
   * Open a media file
   * @param src {string} A URI containing the audio content.
   */
  constructor(src: string) {
    let res, rej, next;
    this.init = new Promise<any>((resolve, reject) => { res = resolve; rej = reject; });
    this.status = new Observable((observer) => {
      next = data => observer.next(data);
    });
    this._objectInstance = new Media(src, res, rej, next);
  }

  /**
   * Returns the current amplitude of the current recording.
   */
  @CordovaInstance()
  getCurrentAmplitude(): Promise<any> { return; }

  /**
   * Returns the current position within an audio file. Also updates the Media object's position parameter.
   */
  @CordovaInstance()
  getCurrentPosition(): Promise<any> { return; }

  /**
   * Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
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
   * @param milliseconds
   */
  @CordovaInstance({
    sync: true
  })
  seekTo(milliseconds: number): void { }

  /**
   * Set the volume for an audio file.
   * @param volume The volume to set for playback. The value must be within the range of 0.0 to 1.0.
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
   * Stops playing an audio file.
   */
  @CordovaInstance({
    sync: true
  })
  stop(): void { }

}

export class MediaError {
  static get MEDIA_ERR_ABORTED() { return 1; }
  static get MEDIA_ERR_NETWORK() { return 2; }
  static get MEDIA_ERR_DECODE() { return 3; }
  static get MEDIA_ERR_NONE_SUPPORTED() { return 4; }
  code: number;
  message: string;
}
