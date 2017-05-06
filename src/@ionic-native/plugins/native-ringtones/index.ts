import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @beta
 * @name Native Ringtones
 * @description
 * The plugin helps get the native ringtones list on Android or IOS devices.
 * And you can also use this plugin to play or stop the native ringtones and custom ringtones(added in the www folder).
 *
 * @usage
 * ```
 * import { NativeRingtones } from '@ionic-native/native-ringtones';
 *
 *
 * constructor(private ringtones: NativeRingtones) { }
 *
 * ...
 * this.ringtones.getRingtone().then((ringtones) => { console.log(ringtones); });
 *
 * this.ringtones.playRingtone('assets/ringtones/sound_1.caf');
 *
 * this.ringtones.stopRingtone('assets/ringtones/sound_1.caf');
 *
 * ```
 */
@Plugin({
  pluginName: 'native-ringtones',
  plugin: 'cordova-plugin-native-ringtones',
  pluginRef: 'cordova.plugins.NativeRingtones',
  repo: 'https://github.com/TongZhangzt/cordova-plugin-native-ringtones',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class NativeRingtones extends IonicNativePlugin {

  /**
   * Get the ringtone list of the device
   * @return {Promise<any>} Returns a promise that resolves when ringtones found successfully
   */
  @Cordova()
  getRingtone(): Promise<any> { return; }

  /**
   * This function starts playing the ringtone
   * @param {string} ringtoneUri The path to the ringtone file
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  playRingtone(ringtoneUri: string): Promise<any> { return; }

  /**
   * This function stops playing the ringtone
   * @param {string} ringtoneUri The path to the ringtone file
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  stopRingtone(ringtoneUri: string): Promise<any> { return; }
}
