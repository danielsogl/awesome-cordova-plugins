/**
 * @name SafariViewController
 * @description
 * @usage
 * ```
 * import { SafariViewController } from 'ionic-native';
 *
 *
 * SafariViewController.isAvailable()
 *   .then(
 *     (available: boolean) => {
 *       if(available){
 *
 *         SafariViewController.show({
 *           url: 'http://ionic.io',
 *           hidden: false,
 *           animated: false,
 *           transition: 'curl',
 *           enterReaderModeIfAvailable: true,
 *           tintColor: '#ff0000'
 *         })
 *         .then(
 *           (result: any) => {
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
 */
export declare class SafariViewController {
    /**
     * Checks if SafariViewController is available
     */
    static isAvailable(): Promise<boolean>;
    /**
     * Shows Safari View Controller
     * @param options
     */
    static show(options?: SafariViewControllerOptions): Promise<any>;
    /**
     * Hides Safari View Controller
     */
    static hide(): void;
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     */
    static connectToService(): Promise<any>;
    /**
     * Call this method whenever there's a chance the user will open an external url.
     */
    static warmUp(): Promise<any>;
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url
     */
    static mayLaunchUrl(url: string): Promise<any>;
}
export interface SafariViewControllerOptions {
    url?: string;
    hidden?: boolean;
    toolbarColor?: string;
    animated?: boolean;
    showDefaultShareMenuItem?: boolean;
    enterReaderModeIfAvailable?: boolean;
    tintColor?: string;
    transition?: string;
}
