/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';

/**
 * @name BrowserTab
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { BrowserTab } from 'ionic-native';
 *
 * BrowserTab.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'BrowserTab',
  plugin: 'cordova-plugin-browsertab', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.browsertab', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/google/cordova-plugin-browsertab', // the github repository URL for the plugin
  platforms: ['Android', 'iOS']
})
export class BrowserTab {

  /**
   * Check if BrowserTab option is available
   * @return {Promise<any>} Returns a promise that resolves when check is successful and returns true or false
   */
  @Cordova()
  static isAvailable(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Opens the provided URL using a browser tab
   * @param {string} url  The URL you want to open
   * @return {Promise<any>} Returns a promise that resolves when check open was successful
   */
  @Cordova()
  static openUrl(url: string): Promise<any> {
    return;
  }

  /**
   * Closes browser tab
   * @return {Promise<any>} Returns a promise that resolves when close was finished
   */
  @Cordova()
  static close(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
