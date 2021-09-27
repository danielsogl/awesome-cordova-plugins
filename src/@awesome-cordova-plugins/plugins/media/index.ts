import { Injectable } from '@angular/core';
import {
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
  Plugin,
  checkAvailability,
} from '@awesome-cordova-plugins/core';
import { Observable, Observer } from 'rxjs';

/**
 * @hidden
 */
export class MediaObject {
  /**
   * An observable that notifies you on actions success
   */
  onSuccess: Observable<any>;

  /**
   * An observable that notifies you when an error occurs
   */
  onError: Observable<MEDIA_ERROR>;

  /**
   * An observable that notifies you when the file status changes
   */
  onStatusUpdate: Observable<MEDIA_STATUS>;

  /**
   * @hidden
   */
  @InstanceProperty() successCallback: Function;

  /**
   * @hidden
   */
  @InstanceProperty() errorCallback: Function;

  /**
   * @hidden
   */
  @InstanceProperty() statusCallback: Function;

  constructor(private _objectInstance: any) {
    this.onSuccess = new Observable<any>((observer: Observer<any>) => {
      this.successCallback = observer.next.bind(observer);
      return () => (this.successCallback = () => {});
    });

    this.onError = new Observable<MEDIA_ERROR>((observer: Observer<MEDIA_ERROR>) => {
      this.errorCallback = observer.next.bind(observer);
      return () => (this.errorCallback = () => {});
    });

    this.onStatusUpdate = new Observable<MEDIA_STATUS>((observer: Observer<MEDIA_STATUS>) => {
      this.statusCallback = observer.next.bind(observer);
      return () => (this.statusCallback = () => {});
    });
  }

  /**
   * Get the current amplitude of the current recording.
   *
   * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
   */
  @CordovaInstance()
  getCurrentAmplitude(): Promise<any> {
    return;
  }

  /**
   * Get the current position within an audio file. Also updates the Media object's position parameter.
   *
   * @returns {Promise<any>} Returns a promise with the position of the current recording
   */
  @CordovaInstance()
  getCurrentPosition(): Promise<any> {
    return;
  }

  /**
   * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
   *
   * @returns {number} Returns a promise with the duration of the current recording
   */
  @CordovaInstance({ sync: true })
  getDuration(): number {
    return;
  }

  /**
   * Starts or resumes playing an audio file.
   *
   * @param iosOptions
   * @param iosOptions.numberOfLoops
   * @param iosOptions.playAudioWhenScreenIsLocked
   */
  @CordovaInstance({ sync: true })
  play(iosOptions?: { numberOfLoops?: number; playAudioWhenScreenIsLocked?: boolean }): void {}

  /**
   * Pauses playing an audio file.
   */
  @CordovaInstance({ sync: true })
  pause(): void {}

  /**
   * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
   */
  @CordovaInstance({ sync: true })
  release(): void {}

  /**
   * Sets the current position within an audio file.
   *
   * @param {number} milliseconds The time position you want to set for the current audio file
   */
  @CordovaInstance({ sync: true })
  seekTo(milliseconds: number): void {}

  /**
   * Set the volume for an audio file.
   *
   * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
   */
  @CordovaInstance({ sync: true })
  setVolume(volume: number): void {}

  @CordovaInstance({ sync: true })
  setRate(speedRate: number): void {}

  /**
   * Starts recording an audio file.
   */
  @CordovaInstance({ sync: true })
  startRecord(): void {}

  /**
   * Stops recording
   */
  @CordovaInstance({ sync: true })
  stopRecord(): void {}

  /**
   * Pauses recording
   */
  @CordovaInstance({ sync: true })
  pauseRecord(): void {}

  /**
   * Resumes recording
   */
  @CordovaInstance({ sync: true })
  resumeRecord(): void {}

  /**
   * Stops playing an audio file.
   */
  @CordovaInstance({ sync: true })
  stop(): void {}
}

export type MediaStatusUpdateCallback = (statusCode: number) => void;

export interface MediaError {
  /**
   * Error message
   */
  message: string;

  /**
   * Error code
   */
  code: number;
}

export enum MEDIA_STATUS {
  NONE = 0,
  STARTING,
  RUNNING,
  PAUSED,
  STOPPED,
}

export enum MEDIA_ERROR {
  ABORTED = 1,
  NETWORK,
  DECODE,
  SUPPORTED,
}

export type MediaErrorCallback = (error: MediaError) => void;

/**
 * @name Media
 * @premier media
 * @description
 * This plugin provides the ability to record and play back audio files on a device.
 * @usage
 * ```typescript
 * import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
 *
 *
 * constructor(private media: Media) { }
 *
 *
 * ...
 *
 *
 * // Create a Media instance.  Expects path to file or url as argument
 * // We can optionally pass a second argument to track the status of the media
 *
 * const file: MediaObject = this.media.create('file.mp3');
 *
 * // to listen to plugin events:
 *
 * file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
 *
 * file.onSuccess.subscribe(() => console.log('Action is successful'));
 *
 * file.onError.subscribe(error => console.log('Error!', error));
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
 * let duration = file.getDuration();
 * console.log(duration);
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
 *
 *
 * // Recording to a file
 * const file: MediaObject = this.media.create('path/to/file.mp3');
 *
 * file.startRecord();
 *
 * file.stopRecord();
 *
 *
 * ```
 *
 * Some hints if you are using iOS and recording doesn't work:
 * 1.) Try to use a absolute file path but remove beginning "file://".
 * Then it looks like: `/var/mobile/Containers/Data/Application/AF438B8B-7724-4FBB-8E69-083463224FC4/tmp/my_file.m4a`
 * Example: `this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a')`
 * 2.) If that's not working, too, create the file before using.
 * Example:
 * ```typescript
 * import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
 * import { File } from '@awesome-cordova-plugins/file/ngx';
 *
 * ...
 *
 * constructor(private media: Media, private file: File) { }
 *
 * ...
 *
 * this.file.createFile(this.file.tempDirectory, 'my_file.m4a', true).then(() => {
 *   let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a');
 *   file.startRecord();
 *   window.setTimeout(() => file.stopRecord(), 10000);
 * });
 * ```
 *
 * You can find the reasons here: https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906
 * @classes
 * MediaObject
 * @interfaces
 * MediaError
 */
@Plugin({
  pluginName: 'Media',
  repo: 'https://github.com/apache/cordova-plugin-media',
  plugin: 'cordova-plugin-media',
  pluginRef: 'Media',
  platforms: ['Android', 'Browser', 'iOS', 'Windows'],
})
@Injectable()
export class Media extends AwesomeCordovaNativePlugin {
  // Constants
  /**
   * @hidden
   */
  MEDIA_NONE = 0;
  /**
   * @hidden
   */
  MEDIA_STARTING = 1;
  /**
   * @hidden
   */
  MEDIA_RUNNING = 2;
  /**
   * @hidden
   */
  MEDIA_PAUSED = 3;
  /**
   * @hidden
   */
  MEDIA_STOPPED = 4;

  // error codes
  /**
   * @hidden
   */
  MEDIA_ERR_ABORTED = 1;
  /**
   * @hidden
   */
  MEDIA_ERR_NETWORK = 2;
  /**
   * @hidden
   */
  MEDIA_ERR_DECODE = 3;
  /**
   * @hidden
   */
  MEDIA_ERR_NONE_SUPPORTED = 4;

  /**
   * Open a media file
   *
   * @param src {string} A URI containing the audio content.
   * @returns {MediaObject}
   */
  create(src: string): MediaObject {
    let instance: any;

    if (checkAvailability(Media.getPluginRef(), null, Media.getPluginName()) === true) {
      // Creates a new media object
      instance = new (Media.getPlugin())(src);
    }

    return new MediaObject(instance);
  }
}
