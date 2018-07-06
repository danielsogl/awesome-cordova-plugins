import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface InAppBrowserOptions {
    /** Set to yes or no to turn the InAppBrowser's location bar on or off. */
    location?: 'yes' | 'no';
    /** Set to yes to create the browser and load the page, but not show it. The loadstop event fires when loading is complete.
     * Omit or set to no (default) to have the browser open and load normally. */
    hidden?: 'yes' | 'no';
    /** Set to yes to have the browser's cookie cache cleared before the new window is opened. */
    clearcache?: 'yes';
    /** Set to yes to have the session cookie cache cleared before the new window is opened. */
    clearsessioncache?: 'yes';
    /** (Android Only) set to yes to show Android browser's zoom controls, set to no to hide them. Default value is yes. */
    zoom?: 'yes' | 'no';
    /** Set to yes to use the hardware back button to navigate backwards through the InAppBrowser's history.
     * If there is no previous page, the InAppBrowser will close. The default value is yes, so you must set it to no if you want the back button to simply close the InAppBrowser. */
    hardwareback?: 'yes' | 'no';
    /** Set to yes to prevent HTML5 audio or video from autoplaying (defaults to no). */
    mediaPlaybackRequiresUserAction?: 'yes' | 'no';
    /** (Android Only) Set to yes to make InAppBrowser WebView to pause/resume with the app to stop background audio (this may be required to avoid Google Play issues) */
    shouldPauseOnSuspend?: 'yes' | 'no';
    /** (iOS Only) Set to a string to use as the Done button's caption. Note that you need to localize this value yourself. */
    closebuttoncaption?: string;
    /** (iOS Only) Set to yes or no (default is no). Turns on/off the UIWebViewBounce property. */
    disallowoverscroll?: 'yes' | 'no';
    /** (iOS Only) Set to yes or no to turn the toolbar on or off for the InAppBrowser (defaults to yes) */
    toolbar?: 'yes' | 'no';
    /** (iOS Only)  Set to yes or no to prevent viewport scaling through a meta tag (defaults to no). */
    enableViewportScale?: 'yes' | 'no';
    /** (iOS Only) Set to yes or no to allow in-line HTML5 media playback, displaying within the browser window rather than a device-specific playback interface.
     * The HTML's video element must also include the webkit-playsinline attribute (defaults to no) */
    allowInlineMediaPlayback?: 'yes' | 'no';
    /** (iOS Only) Set to yes or no to open the keyboard when form elements receive focus via JavaScript's focus() call (defaults to yes). */
    keyboardDisplayRequiresUserAction?: 'yes' | 'no';
    /** (iOS Only) Set to yes or no to wait until all new view content is received before being rendered (defaults to no). */
    suppressesIncrementalRendering?: 'yes' | 'no';
    /** (iOS Only) Set to pagesheet, formsheet or fullscreen to set the presentation style (defaults to fullscreen). */
    presentationstyle?: 'pagesheet' | 'formsheet' | 'fullscreen';
    /** (iOS Only) Set to fliphorizontal, crossdissolve or coververtical to set the transition style (defaults to coververtical). */
    transitionstyle?: 'fliphorizontal' | 'crossdissolve' | 'coververtical';
    /** (iOS Only) Set to top or bottom (default is bottom). Causes the toolbar to be at the top or bottom of the window. */
    toolbarposition?: 'top' | 'bottom';
    /** (Windows only) Set to yes to create the browser control without a border around it.
     * Please note that if location=no is also specified, there will be no control presented to user to close IAB window. */
    fullscreen?: 'yes';
    /**
     * @hidden
     */
    [key: string]: any;
}
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
 * @hidden
 */
export declare class InAppBrowserObject {
    private _objectInstance;
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    constructor(url: string, target?: string, options?: string | InAppBrowserOptions);
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    show(): void;
    /**
     * Closes the InAppBrowser window.
     */
    close(): void;
    /**
     * Hides an InAppBrowser window that is currently shown. Calling this has no effect
     * if the InAppBrowser was already hidden.
     */
    hide(): void;
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    executeScript(script: {
        file?: string;
        code?: string;
    }): Promise<any>;
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    insertCSS(css: {
        file?: string;
        code?: string;
    }): Promise<any>;
    /**
     * A method that allows you to listen to events happening in the browser.
     * @param event {string} Name of the event
     * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    on(event: string): Observable<InAppBrowserEvent>;
}
/**
 * @name In App Browser
 * @description Launches in app Browser
 * @usage
 * ```typescript
 * import { InAppBrowser } from '@ionic-native/in-app-browser';
 *
 * constructor(private iab: InAppBrowser) { }
 *
 *
 * ...
 *
 *
 * const browser = this.iab.create('https://ionicframework.com/');
 *
 * browser.executeScript(...);
 * browser.insertCSS(...);
 * browser.close();
 *
 * ```
 * @classes
 * InAppBrowserObject
 * @interfaces
 * InAppBrowserEvent
 * InAppBrowserOptions
 */
export declare class InAppBrowser extends IonicNativePlugin {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    create(url: string, target?: string, options?: string | InAppBrowserOptions): InAppBrowserObject;
}
