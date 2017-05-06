import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Native Ringtones
 * @description
 *
 * @usage
 * ```
 * import { native-ringtones } from 'ionic-native';
 *
 *
 * constructor(private native-ringtones: native-ringtones) { }
 *
 * ...
 *
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

  @Cordova()
  getRingtone(): Promise<any> { return; }

  @Cordova()
  playRingtone(ringtoneUri: string): Promise<any> { return; }

  @Cordova()
  stopRingtone(ringtoneUri: string): Promise<any> { return; }
}
