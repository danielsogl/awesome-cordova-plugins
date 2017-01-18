import { Plugin, CordovaInstance } from './plugin';
import { Observable } from 'rxjs/Observable';

declare var cordova: any;

export interface InAppBrowserEvent extends Event {
  /** the eventname, either loadstart, loadstop, loaderror, or exit. */
  type: string;
  /** the URL that was loaded. */
  url: string;
  /** the error code, only in the case of loaderror. */
  code: number;
  /** the error message, only in the case of loaderror. */
  message: string;
}
/**
 * @name InAppBrowser
 * @description Launches in app Browser
 * @usage
 * ```typescript
 * import {InAppBrowser} from 'ionic-native';
 *
 *
 * ...
 *
 *
 * let browser = new InAppBrowser('https://ionic.io', '_system');
 * browser.executeScript(...);
 * browser.insertCSS(...);
 * browser.close();
 * ```
 * @interfaces
 * InAppBrowserEvent
 */
@Plugin({
  pluginName: 'InAppBrowser',
  plugin: 'cordova-plugin-inappbrowser',
  pluginRef: 'cordova.InAppBrowser',
  repo: 'https://github.com/apache/cordova-plugin-inappbrowser'
})
export class InAppBrowser {

  private _objectInstance: any;

  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   * @param  url     The URL to load.
   * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
   * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   */
  constructor(url: string, target?: string, options?: string) {
    try {
      this._objectInstance = cordova.InAppBrowser.open(url, target, options);
    } catch (e) {
      window.open(url);
      console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open, all instance methods will NOT work.');
    }
  }

  /**
   * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
   * if the InAppBrowser was already visible.
   */
  @CordovaInstance({sync: true})
  show(): void { }

  /**
   * Closes the InAppBrowser window.
   */
  @CordovaInstance({sync: true})
  close(): void { }

  /**
   * Injects JavaScript code into the InAppBrowser window.
   * @param script {Object} Details of the script to run, specifying either a file or code key.
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  executeScript(script: {file?: string, code?: string}): Promise<any> {return; }

  /**
   * Injects CSS into the InAppBrowser window.
   * @param css {Object} Details of the script to run, specifying either a file or code key.
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  insertCSS(css: {file?: string, code?: string}): Promise<any> {return; }

  /**
   * A method that allows you to listen to events happening in the browser.
   * @param {string} name of the event
   * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
   */
  on(event: string): Observable<InAppBrowserEvent> {
    return new Observable<InAppBrowserEvent>((observer) => {
      this._objectInstance.addEventListener(event, observer.next.bind(observer));
      return () => this._objectInstance.removeEventListener(event, observer.next.bind(observer));
    });
  }

}
