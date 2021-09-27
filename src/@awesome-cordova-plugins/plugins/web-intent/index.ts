import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface IntentClipItem {
  uri: string;
  type?: string;
  extension?: string;
}

export interface Intent {
  action: string;
  clipItems: IntentClipItem[];
  component: string;
  extras: object;
  flags: number;
  type: string;
}

export interface RegisterBroadcastReceiverOptions {
  filterActions?: string[];
  filterCategories?: string[];
  filterDataSchemes?: string[];
}

export interface IntentOptions {
  requestCode?: number;
  type?: string;
  package?: string;
  url?: string;
  extras?: object;
  action?: string;
  component?: {
    package: string;
    class: string;
  };
  flags?: number[];
}

/**
 * @name Web Intent
 * @description
 * This Plugin provides a general purpose shim layer for the Android intent mechanism, exposing various ways to handle sending and receiving intents.
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import { WebIntent } from '@awesome-cordova-plugins/web-intent/ngx';
 *
 * constructor(private webIntent: WebIntent) { }
 *
 * ...
 *
 * const options = {
 *   action: this.webIntent.ACTION_VIEW,
 *   url: 'path/to/file',
 *   type: 'application/vnd.android.package-archive'
 * }
 *
 * this.webIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 * @interfaces
 * IntentOptions
 */
@Plugin({
  pluginName: 'WebIntent',
  plugin: 'com-darryncampbell-cordova-plugin-intent',
  pluginRef: 'plugins.intentShim',
  repo: 'https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent',
  platforms: ['Android'],
})
@Injectable()
export class WebIntent extends AwesomeCordovaNativePlugin {
  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_SEND: string;

  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_VIEW: string;

  /**
   * Convenience constant for extras
   *
   * @type {string}
   */
  @CordovaProperty()
  EXTRA_TEXT: string;

  /**
   * Convenience constant for extras
   *
   * @type {string}
   */
  @CordovaProperty()
  EXTRA_SUBJECT: string;

  /**
   * Convenience constant for extras
   *
   * @type {string}
   */
  @CordovaProperty()
  EXTRA_STREAM: string;

  /**
   * Convenience constant for extras
   *
   * @type {string}
   */
  @CordovaProperty()
  EXTRA_EMAIL: string;

  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_CALL: string;

  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_SENDTO: string;

  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_GET_CONTENT: string;

  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_PICK: string;

  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_INSTALL_PACKAGE: string;

  /**
   * Convenience constant for actions
   *
   * @type {string}
   */
  @CordovaProperty()
  ACTION_UNINSTALL_PACKAGE: string;

  /**
   * Launches an Android intent
   *
   * @param options {IntentOptions}
   * @returns {Promise<any>}
   */
  @Cordova()
  startActivity(options: IntentOptions): Promise<any> {
    return;
  }

  /**
   * Starts a new activity and return the result to the application
   *
   * @param options {IntentOptions}
   * @returns {Promise<any>}
   */
  @Cordova()
  startActivityForResult(options: IntentOptions): Promise<any> {
    return;
  }

  /**
   * Checks if this app was invoked with specified extra
   *
   * @param extra {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  hasExtra(extra: string): Promise<any> {
    return;
  }

  /**
   * Gets the extra that this app was invoked with
   *
   * @param extra {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getExtra(extra: string): Promise<any> {
    return;
  }

  /**
   * Gets the Uri the app was invoked with
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getUri(): Promise<string> {
    return;
  }

  /**
   * Returns the content of the intent used whenever the application activity is launched
   *
   * @returns {Observable<Intent>}
   */
  @Cordova({
    observable: true,
  })
  onIntent(): Observable<Intent> {
    return;
  }

  /**
   * Sends a custom intent passing optional extras
   *
   * @param options {IntentOptions}
   * @returns {Promise<any>}
   */
  @Cordova()
  sendBroadcast(options: IntentOptions): Promise<any> {
    return;
  }

  /**
   * Request that a given application service be started
   *
   * @param options {IntentOptions}
   * @returns {Promise<any>}
   */
  @Cordova()
  startService(options: IntentOptions): Promise<any> {
    return;
  }

  /**
   * Registers a broadcast receiver for the specified filters
   *
   * @param filters {RegisterBroadcastReceiverOptions}
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
  })
  registerBroadcastReceiver(filters: RegisterBroadcastReceiverOptions): Observable<any> {
    return;
  }

  /**
   * Unregisters a broadcast receiver
   */
  @Cordova({ sync: true })
  unregisterBroadcastReceiver(): void {}

  /**
   *
   */
  @Cordova({ sync: true })
  onActivityResult(): void {}

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  getIntent(): Promise<Intent> {
    return;
  }

  /**
   * Send a result back to the Intent that started this Activity.
   * The data can be passed using 'extras'.
   *
   * @param root0
   * @param root0.extras
   * @returns {Promise<any>}
   */
  @Cordova()
  sendResult({ extras: {} }): Promise<any> {
    return;
  }
}
