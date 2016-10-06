import { Observable } from 'rxjs/Observable';
import { InAppBrowserEvent } from './inappbrowser';
/**
 * @name ThemableBrowser
 * @description
 * In-app browser that allows styling.
 *
 * @usage
 * ```
 * import { ThemableBrowser } from 'ionic-native';
 *
 * // can add options from the original InAppBrowser in a JavaScript object form (not string)
 * // This options object also takes additional parameters introduced by the ThemableBrowser plugin
 * // This example only shows the additional parameters for ThemableBrowser
 * // Note that that `image` and `imagePressed` values refer to resources that are stored in your app
 * let options = {
 *  statusbar: {
 *          color: '#ffffffff'
 *      },
 *      toolbar: {
 *          height: 44,
 *          color: '#f0f0f0ff'
 *      },
 *      title: {
 *          color: '#003264ff',
 *          showPageTitle: true
 *      },
 *      backButton: {
 *          image: 'back',
 *          imagePressed: 'back_pressed',
 *          align: 'left',
 *          event: 'backPressed'
 *      },
 *      forwardButton: {
 *          image: 'forward',
 *          imagePressed: 'forward_pressed',
 *          align: 'left',
 *          event: 'forwardPressed'
 *      },
 *      closeButton: {
 *          image: 'close',
 *          imagePressed: 'close_pressed',
 *          align: 'left',
 *          event: 'closePressed'
 *      },
 *      customButtons: [
 *          {
 *              image: 'share',
 *              imagePressed: 'share_pressed',
 *              align: 'right',
 *              event: 'sharePressed'
 *          }
 *      ],
 *      menu: {
 *          image: 'menu',
 *          imagePressed: 'menu_pressed',
 *          title: 'Test',
 *          cancel: 'Cancel',
 *          align: 'right',
 *          items: [
 *              {
 *                  event: 'helloPressed',
 *                  label: 'Hello World!'
 *              },
 *              {
 *                  event: 'testPressed',
 *                  label: 'Test!'
 *              }
 *          ]
 *      },
 *      backButtonCanClose: true
 * };
 *
 * let browser = new ThemeableBrowser('https://ionic.io', '_blank', options);
 *
 * ```
 * We suggest that you refer to the plugin's repository for additional information on usage that may not be covered here.
 */
export declare class ThemableBrowser {
    private _objectInstance;
    constructor(url: string, target: string, styleOptions: ThemeableBrowserOptions);
    /**
     * Displays an browser window that was opened hidden. Calling this has no effect
     * if the browser was already visible.
     */
    show(): void;
    /**
     * Closes the browser window.
     */
    close(): void;
    /**
     * Reloads the current page
     */
    reload(): void;
    /**
     * Injects JavaScript code into the browser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     */
    executeScript(script: {
        file?: string;
        code?: string;
    }): Promise<any>;
    /**
     * Injects CSS into the browser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     */
    insertCss(css: {
        file?: string;
        code?: string;
    }): Promise<any>;
    /**
     * A method that allows you to listen to events happening in the browser.
     * Available events are: `ThemableBrowserError`, `ThemableBrowserWarning`, `critical`, `loadfail`, `unexpected`, `undefined`
     * @param event Event name
     * @returns {Observable<any>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    on(event: string): Observable<InAppBrowserEvent>;
}
export interface ThemeableBrowserOptions {
    statusbar?: {
        color: string;
    };
    toobar?: {
        height?: number;
        color?: string;
    };
    title?: {
        color: string;
    };
    backButton?: ThemableBrowserButton;
    forwardButton?: ThemableBrowserButton;
    closeButton?: ThemableBrowserButton;
    customButtons?: ThemableBrowserButton[];
    menu?: {
        image?: string;
        imagePressed?: string;
        title?: string;
        cancel?: string;
        align?: string;
        items?: {
            event: string;
            label: string;
        }[];
    };
    backButtonCanClose?: boolean;
    location?: string;
    hidden?: string;
    clearcache?: string;
    clearsessioncache?: string;
    zoom?: string;
    hardwareback?: string;
    mediaPlaybackRequiresUserAction?: string;
    shouldPauseOnSuspsend?: string;
    closebuttoncaption?: string;
    disallowoverscroll?: string;
    enableViewportScale?: string;
    allowInlineMediaPlayback?: string;
    keyboardDisplayRequiresUserAction?: string;
    suppressesIncrementalRendering?: string;
    presentationstyle?: string;
    transitionstyle?: string;
    toolbarposition?: string;
    fullscreen?: string;
}
export interface ThemableBrowserButton {
    wwwImage?: string;
    image?: string;
    wwwImagePressed?: string;
    imagePressed?: string;
    wwwImageDensity?: number;
    align?: string;
    event?: string;
}
