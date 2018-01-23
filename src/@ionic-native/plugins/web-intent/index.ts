import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @beta
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
  plugin: 'com-darryncampbell-cordova-plugin-intent',
  pluginRef: 'plugins.intentShim',
  repo: 'https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent',
  platforms: ['Android']
})
@Injectable()
export class WebIntent extends IonicNativePlugin {

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
   * Convenience constant for actions
   * @type {string}
   */
  @CordovaProperty
  ACTION_GET_CONTENT: string;

  /**
   * Convenience constant for actions
   * @type {string}
   */
  @CordovaProperty
  ACTION_PICK: string;


  /**
   * Launches an Android intent
   * @param options {Object} { action: any, url: string, type?: string }
   * @returns {Promise<any>}
   */
  @Cordova()
  startActivity(options: { action: any, url: string, type?: string }): Promise<any> { return; }

  /**
   * Starts a new activity and return the result to the application
   * @param options {Object} { action: any, url: string, type?: string }
   * @returns {Promise<any>}
   */
  @Cordova()
  startActivityForResult(options: { action: any, url: string, type?: string }): Promise<any> { return; }

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

  /**
   * Registers a broadcast receiver for the specified filters
   * @param filters {any}
   */
  @Cordova({ sync: true })
  registerBroadcastReceiver(filters: any): void { }

  /**
   * Unregisters a broadcast receiver
   */
  @Cordova({ sync: true })
  unregisterBroadcastReceiver(): void { }

  /**
  * Returns the content of the intent used whenever the application activity is launched
  */
  @Cordova({ sync: true })
  onIntent(): void { }

  /**
  *
  */
  @Cordova({ sync: true })
  onActivityResult(): void { }

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  getIntent(): Promise<any> { return; };

}
