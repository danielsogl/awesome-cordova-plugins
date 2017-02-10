import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, Plugin } from '@ionic-native/core';


declare var window;

/**
 * @name WebIntent
 * @description
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import {WebIntent} from '@ionic-native/webintent';
 *
 * WebIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 */
@Plugin({
  pluginName: 'WebIntent',
  plugin: 'https://github.com/Initsogar/cordova-webintent.git',
  pluginRef: 'window.plugins.webintent',
  repo: 'https://github.com/Initsogar/cordova-webintent.git',
  platforms: ['Android']
})
@Injectable()
export class WebIntent {

  @CordovaProperty
  static ACTION_VIEW;

  @CordovaProperty
  static EXTRA_TEXT;

  /**
   * @param options {Object} { action: any, url: string, type?: string }
   * @returns {Promise<any>}
   */
  @Cordova()
  startActivity(options: { action: any, url: string, type?: string }): Promise<any> { return; }

  /**
   * @param extra {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  hasExtra(extra: any): Promise<any> { return; }

  /**
   * @param extra {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getExtra(extra: any): Promise<any> { return; }

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  getUri(): Promise<string> { return; };

  /**
   * @returns {Promise<string>}
   */
  @Cordova()
  onNewIntent(): Promise<string> { return; };

  /**
   * @param options {Object} { action: string, extras?: { option: boolean } }
   * @returns {Promise<any>}
   */
  @Cordova()
  sendBroadcast(options: { action: string, extras?: { option: boolean } }): Promise<any> { return; }

}
