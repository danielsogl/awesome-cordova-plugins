import { IonicNativePlugin } from '@ionic-native/core';
export interface SafariViewControllerOptions {
    animated?: boolean;
    barColor?: string;
    controlTintColor?: string;
    enterReaderModeIfAvailable?: boolean;
    hidden?: boolean;
    showDefaultShareMenuItem?: boolean;
    tintColor?: string;
    toolbarColor?: string;
    transition?: string;
    url?: string;
}
/**
 * @name Safari View Controller
 * @description
 * @usage
 * ```typescript
 * import { SafariViewController } from '@ionic-native/safari-view-controller';
 *
 * constructor(private safariViewController: SafariViewController) { }
 *
 * ...
 *
 * this.safariViewController.isAvailable()
 *   .then((available: boolean) => {
 *       if (available) {
 *
 *         this.safariViewController.show({
 *           url: 'http://ionic.io',
 *           hidden: false,
 *           animated: false,
 *           transition: 'curl',
 *           enterReaderModeIfAvailable: true,
 *           tintColor: '#ff0000'
 *         })
 *         .then((result: any) => {
 *             if(result.event === 'opened') console.log('Opened');
 *             else if(result.event === 'loaded') console.log('Loaded');
 *             else if(result.event === 'closed') console.log('Closed');
 *           },
 *           (error: any) => console.error(error)
 *         );
 *
 *       } else {
 *         // use fallback browser, example InAppBrowser
 *       }
 *     }
 *   );
 * ```
 * @interfaces
 * SafariViewControllerOptions
 */
export declare class SafariViewController extends IonicNativePlugin {
    /**
     * Checks if SafariViewController is available
     * @returns {Promise<boolean>}
     */
    isAvailable(): Promise<boolean>;
    /**
     * Shows Safari View Controller
     * @param options {SafariViewControllerOptions} optional
     * @returns {Promise<any>}
     */
    show(options?: SafariViewControllerOptions): Promise<any>;
    /**
     * Hides Safari View Controller
     */
    hide(): Promise<any>;
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     * @returns {Promise<any>}
     */
    connectToService(): Promise<any>;
    /**
     * Call this method whenever there's a chance the user will open an external url.
     * @returns {Promise<any>}
     */
    warmUp(): Promise<any>;
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url{string}
     * @returns {Promise<any>}
     */
    mayLaunchUrl(url: string): Promise<any>;
}
