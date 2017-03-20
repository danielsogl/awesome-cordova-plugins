import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

declare var window;

/**
 * @name Web Intent
 * @description
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import { WebIntent } from '@ionic-native/web-intent';
 *
 * constructor(private webIntent: WebIntent) { }
 *
 * ...
 *
 * const options = {
 *   action: this.webIntent.ACTION_VIEW,
 *   url: 'path/to/file',
 *   type: 'application/vnd.android.package-archive'
 * };
 *
 * this.webIntent.startActivity(options).then(onSuccess, onError);
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

  /**
   * Convenience constant for actions
   * @type {string}
   */
  @CordovaProperty
  ACTION_SEND: string;

  /**
   * Convenience constant for actions
   * @type {string}
   */
  @CordovaProperty
  ACTION_VIEW: string;

  /**
   * Convenience constant for extras
   * @type {string}
   */
  @CordovaProperty
  EXTRA_TEXT: string;

  /**
   * Convenience constant for extras
   * @type {string}
   */
  @CordovaProperty
  EXTRA_SUBJECT: string;

  /**
   * Convenience constant for extras
   * @type {string}
   */
  @CordovaProperty
  EXTRA_STREAM: string;

  /**
   * Convenience constant for extras
   * @type {string}
   */
  @CordovaProperty
  EXTRA_EMAIL: string;

  /**
   * Convenience constant for actions
   * @type {string}
   */
  @CordovaProperty
  ACTION_CALL: string;

  /**
   * Convenience constant for actions
   * @type {string}
   */
  @CordovaProperty
  ACTION_SENDTO: string;


  /**
   * Launches an Android intent
   * @param options {Object} { action: any, url: string, type?: string }
   * @returns {Promise<any>}
   */
  @Cordova()
  startActivity(options: { action: any, url: string, type?: string }): Promise<any> { return; }

  /**
   * Checks if this app was invoked with specified extra
   * @param extra {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  hasExtra(extra: string): Promise<any> { return; }

  /**
   * Gets the extra that this app was invoked with
   * @param extra {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getExtra(extra: string): Promise<any> { return; }

  /**
   * Gets the Uri the app was invoked with
   * @returns {Promise<any>}
   */
  @Cordova()
  getUri(): Promise<string> { return; };

  /**
   * @returns {Observable<string>}
   */
  @Cordova({
    observable: true
  })
  onNewIntent(): Observable<string> { return; };

  /**
   * Sends a custom intent passing optional extras
   * @param options {Object} { action: string, extras?: { option: boolean } }
   * @returns {Promise<any>}
   */
  @Cordova()
  sendBroadcast(options: { action: string, extras?: { option: boolean } }): Promise<any> { return; }

}
