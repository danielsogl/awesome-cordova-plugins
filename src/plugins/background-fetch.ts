import {Cordova, Plugin} from './plugin';

declare var window;


export interface BackgroundFetchConfig {

  /**
   * Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
   */
  stopOnTerminate?: boolean;
}


/**
 * @name BackgroundFetch
 * @description
 * iOS Background Fetch Implementation. See: https://developer.apple.com/reference/uikit/uiapplication#1657399
 * iOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user's prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).
 * For more detail, please see https://github.com/transistorsoft/cordova-plugin-background-fetch
 *
 * @usage
 *
 * ```typescript
 * import { BackgroundFetch } from 'ionic-native';
 *
 *
 * // When device is ready :
 * platform.ready().then(() => {
 *
 *   let config = {
 *     stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
 *   };
 *
 *   BackgroundFetch.configure(() => {
       console.log('[js] BackgroundFetch initiated');

       // perform some ajax request to server here

       You MUST called #finish so that native-side can signal completion of the background-thread to the os.
       BackgroundFetch.finish();

 *   }, (error) => {
 *     console.log('- BackgroundFetch failed', error);
 *   }, config);
 *
 * });
 *
 * // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
 * BackgroundFetch.start();
 *
 * // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
 * BackgroundFetch.stop();
 *
 * ```
 * @interfaces
 * BackgroundFetchConfig
 *
 */
@Plugin({
  pluginName: 'BackgroundFetch',
  plugin: 'cordova-plugin-background-fetch',
  pluginRef: 'BackgroundFetch',
  repo: 'https://github.com/transistorsoft/cordova-plugin-background-fetch',
  platforms: ['iOS']
})
export class BackgroundFetch {


  /**
   * Configures the plugin's fetch callbackFn
   *
   * @param {Function} callbackFn This callback will fire each time an iOS background-fetch event occurs (typically every 15 min).
   * @param {Function} errorCallback The failureFn will be called if the device doesn't support background-fetch.
   * @param {BackgroundFetchConfig} config Configuration for plugin
   * @return Location object, which tries to mimic w3c Coordinates interface.
   * See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
   * Callback to be executed every time a geolocation is recorded in the background.
   */
  @Cordova({
    sync: true
  })
  static configure(callbackFn: Function, errorCallback: Function, config: BackgroundFetchConfig): any { return; }



  /**
   * Start the background-fetch API.
   * Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
   * @returns {Promise<any>}
   */
  @Cordova()
  static start(): Promise<any> { return; }

  /**
   * Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
   * @returns {Promise<any>}
   */
  @Cordova()
  static stop(): Promise<any> { return; }

  /**
   * You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.
   */
  @Cordova()
  static finish() { }
}
