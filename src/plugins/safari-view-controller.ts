import { Cordova, Plugin } from './plugin';

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
 * @interfaces
 * SafariViewControllerOptions
 */
@Plugin({
  pluginName: 'SafariViewController',
  plugin: 'cordova-plugin-safariviewcontroller',
  pluginRef: 'SafariViewController',
  platforms: ['iOS', 'Android'],
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller'
})
export class SafariViewController {

  /**
   * Checks if SafariViewController is available
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static isAvailable(): Promise<boolean> { return; }

  /**
   * Shows Safari View Controller
   * @param options {SafariViewControllerOptions} optional
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static show(options?: SafariViewControllerOptions): Promise<any> { return; }

  /**
   * Hides Safari View Controller
   */
  @Cordova()
  static hide(): Promise<any> { return; }

  /**
   * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
   * @returns {Promise<any>}
   */
  @Cordova()
  static connectToService(): Promise<any> { return; }

  /**
   * Call this method whenever there's a chance the user will open an external url.
   * @returns {Promise<any>}
   */
  @Cordova()
  static warmUp(): Promise<any> { return; }

  /**
   * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
   * @param url{string}
   * @returns {Promise<any>}
   */
  @Cordova()
  static mayLaunchUrl(url: string): Promise<any> { return; }

}
