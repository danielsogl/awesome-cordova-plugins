import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Audio Management
 * @description
 * A Cordova plugin to manage volume of audio streams for: ring, music, notification and system. Possible
 * ringer values for those streams are: silent, vibrate and normal.
 *
 * @usage
 * ```typescript
 * import { AudioManagement } from '@ionic-native/audio-management/ngx';
 *
 *
 * constructor(public audioman: AudioManagement) { }
 *
 * ...
 *
 * setAudioMode() {
 *  this.audioman.setAudioMode(AudioManagement.AudioMode.NORMAL)
 *    .then(() => {
 *     console.log('Device audio mode is now NORMAL');
 *    })
 *    .catch((reason) => {
 *      console.log(reason);
 *    });
 * }
 *
 * getAudioMode() {
 *  this.audioman.getAudioMode()
 *    .then((value: AudioManagement.AudioModeReturn) => {
 *     console.log('Device audio mode is ' + value.label + ' (' + value.audioMode + ')');
 *    })
 *    .catch((reason) => {
 *      console.log(reason);
 *    });
 * }
 *
 * ```
 * @interfaces
 * AudioModeReturn
 */
@Plugin({
  pluginName: 'AudioManagement',
  plugin: 'clovelced-plugin-audiomanagement',
  pluginRef: 'AudioManagement',
  repo: 'https://github.com/clovelCed/cordova-plugin-audiomanagement',
  platforms: ['Android'],
})
@Injectable()
export class AudioManagement extends IonicNativePlugin {
  /**
   * Sets the `AudioManagement.AudioMode` for the device.
   *
   * @param {AudioManagement.AudioMode} mode the device can be set to: Silent, Normal, Vibrate
   * @returns {Promise<void>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  setAudioMode(mode: AudioManagement.AudioMode): Promise<void> {
    return;
  }

  /**
   * Gets the current `AudioManagement.AudioMode` of the device. Thenable returns an object with
   * `label` and `audioMode` values.
   *
   * @returns {Promise<AudioManagement.AudioModeReturn>}
   */
  @Cordova()
  getAudioMode(): Promise<AudioManagement.AudioModeReturn> {
    return;
  }

  /**
   * Sets the specified `AudioManagement.VolumeType` for the device with the value from `volume`.
   *
   * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to set
   * @param {number} volume the volume value
   * @returns {Promise<void>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 3,
  })
  setVolume(type: AudioManagement.VolumeType, volume: number): Promise<void> {
    return;
  }

  /**
   * Gets the specified `AudioManagement.VolumeType`'s `volume`. Thenable returns an object with
   * a numeric property for volume, `volume`.
   *
   * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to get
   * @returns {Promise<{volume: number}>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  getVolume(type: AudioManagement.VolumeType): Promise<{ volume: number }> {
    return;
  }

  /**
   * Gets the specified `AudioManagement.VolumeType`'s maximum `volume`. Thenable returns an
   * object with a numeric property, `maxVolume`.
   *
   * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to get
   * @returns {Promise<{maxVolume: number}>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  getMaxVolume(type: AudioManagement.VolumeType): Promise<{ maxVolume: number }> {
    return;
  }
}

export namespace AudioManagement {
  export enum AudioMode {
    SILENT = 0,
    VIBRATE,
    NORMAL,
  }

  export enum VolumeType {
    RING = 0,
    MUSIC,
    NOTIFICATION,
    SYSTEM,
  }

  export interface AudioModeReturn {
    audioMode: AudioManagement.AudioMode;
    label: string;
  }
}
