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
 * @name Rollbar
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { Rollbar } from 'ionic-native';
 *
 * Rollbar.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Rollbar',
  plugin: 'resgrid-cordova-plugins-rollbar',
  pluginRef: 'plugins.Rollbar',
  repo: 'https://github.com/Resgrid/cordova-plugins-rollbar',
  install: 'ionic plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN=rollbar_access_token --variable ROLLBAR_ENVIRONMENT=rollbar_environment'
})
export class Rollbar {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static init(successCallback: Function, errorCallback: Function) {
    return;
  }

}
