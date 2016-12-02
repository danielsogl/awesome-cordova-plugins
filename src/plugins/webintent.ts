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
  pluginName: 'WebIntent',
  plugin: 'https://github.com/Initsogar/cordova-webintent.git',
  pluginRef: 'window.plugins.webintent',
  repo: 'https://github.com/Initsogar/cordova-webintent.git',
  platforms: ['Android']
})
export class WebIntent {

  @CordovaProperty
  static get ACTION_VIEW() {
    return window.plugins.webintent.ACTION_VIEW;
  }

  @CordovaProperty
  static get EXTRA_TEXT() {
    return window.plugins.webintent.EXTRA_TEXT;
  }

  /**
   * @param options {Object} { action: any, url: string, type?: string }
   * @returns {Promise<any>}
   */
  @Cordova()
  static startActivity(options: { action: any, url: string, type?: string }): Promise<any> { return; }

  /**
   * @param extra {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  static hasExtra(extra: any): Promise<any> { return; }

  /**
   * @param extra {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  static getExtra(extra: any): Promise<any> { return; }

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  static getUri(): Promise<string> { return; };

  /**
   * @returns {Promise<string>}
   */
  @Cordova()
  static onNewIntent(): Promise<string> { return; };

  /**
   * @param options {Object} { action: string, extras?: { option: boolean } }
   * @returns {Promise<any>}
   */
  @Cordova()
  static sendBroadcast(options: { action: string, extras?: { option: boolean } }): Promise<any> { return; }

}
