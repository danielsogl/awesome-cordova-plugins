import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name QuikklyPlugin
 * @description 
 * Use the quikkly scanner in your ionic app
 */
@Plugin({
  pluginName: 'QuikklyPlugin',
  plugin: 'cordova-plugin-quikkly',
  pluginRef: 'cordova.plugins.quikkly',
  repo: 'https://quikkly-rob@bitbucket.org/quikkly/cordova-plugin-quikkly.git',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class QuikklyPlugin extends IonicNativePlugin {
  @Cordova()
  openScanner(apiKey: String): Promise<string[]> { return ; }
}
