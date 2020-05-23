import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name QuikklyPlugin
 * @description ionic wrapper for cordova-plugin-quikkly
 * Use the quikkly scanner in your ionic app
 */
@Plugin({
  pluginName: 'QuikklyPlugin',
  plugin: 'cordova-plugin-quikkly',
  pluginRef: 'cordova.plugins.quikkly',
  repo: 'https://github.com/quikkly/cordova-plugin-quikkly.git',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class QuikklyPlugin extends IonicNativePlugin {
  @Cordova()
  openScanner(): Promise<string[]> {
    return;
  }
}
