import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

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
 * @name Safari View Controller
 * @description
 * @usage
 * ```
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
@Plugin({
  pluginName: 'SafariViewController',
  plugin: 'cordova-plugin-safariviewcontroller',
  pluginRef: 'SafariViewController',
  platforms: ['iOS', 'Android'],
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller'
})
@Injectable()
export class SafariViewController {

  /**
   * Checks if SafariViewController is available
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isAvailable(): Promise<boolean> { return; }

  /**
   * Shows Safari View Controller
   * @param options {SafariViewControllerOptions} optional
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  show(options?: SafariViewControllerOptions): Promise<any> { return; }

  /**
   * Hides Safari View Controller
   */
  @Cordova()
  hide(): Promise<any> { return; }

  /**
   * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
   * @returns {Promise<any>}
   */
  @Cordova()
  connectToService(): Promise<any> { return; }

  /**
   * Call this method whenever there's a chance the user will open an external url.
   * @returns {Promise<any>}
   */
  @Cordova()
  warmUp(): Promise<any> { return; }

  /**
   * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
   * @param url{string}
   * @returns {Promise<any>}
   */
  @Cordova()
  mayLaunchUrl(url: string): Promise<any> { return; }

}
