import { Plugin, Cordova } from './plugin';
/**
 * @name NativeAudio
 * @description Native Audio Playback
 * @usage
 * ```typescript
 * import {NativeAudio} from 'ionic-native';
 *
 * NativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
 * NativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);
 *
 * NativeAudio.play('uniqueId1').then(onSuccess, onError);
 *
 * // can optionally pass a callback to be called when the file is done playing
 * NativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
 *
 * NativeAudio.loop('uniqueId2').then(onSuccess, onError);
 *
 * NativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);
 *
 * NativeAudio.stop('uniqueId1').then(onSuccess,onError);
 *
 * NativeAudio.unload('uniqueId1').then(onSuccess,onError);
 *
 * ```
 */
@Plugin({
  pluginName: 'NativeAudio',
  plugin: 'cordova-plugin-nativeaudio',
  pluginRef: 'plugins.NativeAudio',
  repo: 'https://github.com/floatinghotpot/cordova-plugin-nativeaudio'
})
export class NativeAudio {
  /**
   * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
   * @param id {string} unique ID for the audio file
   * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
   * @returns {Promise<any>}
   */
  @Cordova()
  static preloadSimple(id: string, assetPath: string): Promise<any> {return; }

  /**
   * Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
   * @param id {string} unique ID for the audio file
   * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
   * @param volume {number} the volume of the preloaded sound (0.1 to 1.0)
   * @param voices {number} the number of multichannel voices available
   * @param delay {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  static preloadComplex(id: string, assetPath: string, volume: number, voices: number, delay: number): Promise<any> {return; }

  /**
   * Plays an audio asset
   * @param id {string} unique ID for the audio file
   * @param completeCallback {Function} optional. Callback to be invoked when audio is done playing
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static play(id: string, completeCallback?: Function): Promise<any> {return; }

  /**
   * Stops playing an audio
   * @param id {string} unique ID for the audio file
   * @returns {Promise<any>}
   */
  @Cordova()
  static stop(id: string): Promise<any> {return; }

  /**
   * Loops an audio asset infinitely, this only works for complex assets
   * @param id {string} unique ID for the audio file
   * @return {Promise<any>}
   */
  @Cordova()
  static loop(id: string): Promise<any> {return; }

  /**
   * Unloads an audio file from memory
   * @param id {string} unique ID for the audio file
   * @returns {Promise<any>}
   */
  @Cordova()
  static unload(id: string): Promise<any> {return; }

  /**
   * Changes the volume for preloaded complex assets.
   * @param id {string} unique ID for the audio file
   * @param volume {number} the volume of the audio asset (0.1 to 1.0)
   * @returns {Promise<any>}
   */
  @Cordova()
  static setVolumeForComplexAsset(id: string, volume: number): Promise<any> {return; }

}
