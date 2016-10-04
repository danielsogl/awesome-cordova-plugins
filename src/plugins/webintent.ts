import { Cordova, CordovaProperty, Plugin } from './plugin';


declare var window;

/**
 * @name WebIntent
 * @description
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import {WebIntent} from 'ionic-native';
 *
 * WebIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 */
@Plugin({
  plugin: 'https://github.com/Initsogar/cordova-webintent.git',
  pluginRef: 'window.plugins.webintent',
  repo: 'https://github.com/Initsogar/cordova-webintent.git',
  platforms: ['Android']
})
export class WebIntent {

  @CordovaProperty
  static ACTION_VIEW;

  @CordovaProperty
  static EXTRA_TEXT;

  @Cordova()
  static startActivity(options: { action: any, url: string, type?: string }): Promise<any> { return; }

  @Cordova()
  static hasExtra(extra: any): Promise<any> { return; }

  @Cordova()
  static getExtra(extra: any): Promise<any> { return; }

  @Cordova()
  static getUri(): Promise<string> { return; };

  @Cordova()
  static onNewIntent(): Promise<string> { return; };

  @Cordova()
  static sendBroadcast(options: { action: string, extras?: { option: boolean } }): Promise<any> { return; }

}
