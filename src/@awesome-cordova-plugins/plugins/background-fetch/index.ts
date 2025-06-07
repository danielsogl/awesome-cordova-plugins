import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

export interface BackgroundFetchConfig {
  /**
   * Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
   */
  stopOnTerminate?: boolean;
}

/**
 * @name Background Fetch
 * @description
 * iOS Background Fetch Implementation. See: https://developer.apple.com/reference/uikit/uiapplication#1657399
 * iOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user's prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).
 * For more detail, please see https://github.com/transistorsoft/cordova-plugin-background-fetch
 * @usage
 *
 * ```typescript
 * import { BackgroundFetch, BackgroundFetchConfig } from '@awesome-cordova-plugins/background-fetch/ngx';
 *
 *
 * constructor(private backgroundFetch: BackgroundFetch) {
 *
 *   const config: BackgroundFetchConfig = {
 *     stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
 *   }
 *
 *   backgroundFetch.configure(config)
 *      .then(() => {
 *          console.log('Background Fetch initialized');
 *
 *          this.backgroundFetch.finish();
 *
 *      })
 *      .catch(e => console.log('Error initializing background fetch', e));
 *
 *   // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
 *   backgroundFetch.start();
 *
 *   // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
 *   backgroundFetch.stop();
 *
 *
 * }
 *
 * ```
 * @interfaces
 * BackgroundFetchConfig
 */
@Plugin({
  pluginName: 'BackgroundFetch',
  plugin: 'cordova-plugin-background-fetch',
  pluginRef: 'BackgroundFetch',
  repo: 'https://github.com/transistorsoft/cordova-plugin-background-fetch',
  platforms: ['iOS'],
})
@Injectable()
export class BackgroundFetch extends AwesomeCordovaNativePlugin {
  /**
   * Configures the plugin's fetch callbackFn
   * @param {BackgroundFetchConfig} config Configuration for plugin
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  configure(config: BackgroundFetchConfig): Promise<any> {
    return;
  }

  /**
   * Start the background-fetch API.
   * Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
   * @returns {Promise<any>}
   */
  @Cordova()
  start(): Promise<any> {
    return;
  }

  /**
   * Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
   * @returns {Promise<any>}
   */
  @Cordova()
  stop(): Promise<any> {
    return;
  }

  /**
   * You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.
   * @param taskId
   */
  @Cordova({
    sync: true,
  })
  finish(taskId: string): void {}

  /**
   * Return the status of the background-fetch
   * @returns {Promise<any>}
   */
  @Cordova()
  status(): Promise<any> {
    return;
  }
}
