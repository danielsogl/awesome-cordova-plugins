import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class NativeRingtones extends IonicNativePlugin {
    /**
     * Get the ringtone list of the device
     * @return {Promise<any>} Returns a promise that resolves when ringtones found successfully
     */
    getRingtone(): Promise<any>;
    /**
     * This function starts playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    playRingtone(ringtoneUri: string): Promise<any>;
    /**
     * This function stops playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    stopRingtone(ringtoneUri: string): Promise<any>;
}
