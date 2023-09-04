import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

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
 * For displaying read-only web content.
 *
 * Requires Cordova plugin: `cordova-plugin-safariviewcontroller`. For more info, please see the [Safari View Controller plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller).
 * @usage
 * ```typescript
 * import { SafariViewController } from '@awesome-cordova-plugins/safari-view-controller/ngx';
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
 *         .subscribe((result: any) => {
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
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SafariViewController extends AwesomeCordovaNativePlugin {
  /**
   * Checks if SafariViewController is available
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Shows Safari View Controller
   *
   * @param options {SafariViewControllerOptions} optional
   * @returns {Observable<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true,
  })
  show(options?: SafariViewControllerOptions): Observable<any> {
    return;
  }

  /**
   * Hides Safari View Controller
   */
  @Cordova()
  hide(): Promise<any> {
    return;
  }

  /**
   * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  connectToService(): Promise<any> {
    return;
  }

  /**
   * Call this method whenever there's a chance the user will open an external url.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  warmUp(): Promise<any> {
    return;
  }

  /**
   * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
   *
   * @param url{string}
   * @param url
   * @returns {Promise<any>}
   */
  @Cordova()
  mayLaunchUrl(url: string): Promise<any> {
    return;
  }
}
