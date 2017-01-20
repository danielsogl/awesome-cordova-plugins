import { Plugin, Cordova } from './plugin';

/**
 * @beta
 * @name Rollbar
 * @description
 * This plugin adds Rollbar App monitoring to your application
 *
 * @usage
 * ```
 * import { Rollbar } from 'ionic-native';
 *
 * Rollbar.init();
 *
 * ```
 */
@Plugin({
  pluginName: 'Rollbar',
  plugin: 'resgrid-cordova-plugins-rollbar',
  pluginRef: 'Rollbar',
  repo: 'https://github.com/Resgrid/cordova-plugins-rollbar',
  platforms: ['Android', 'iOS'],
  install: 'ionic plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN="YOUR_ROLLBAR_ACCEESS_TOKEN" --variable ROLLBAR_ENVIRONMENT="ROLLBAR_ENVIRONMENT"'
})
export class Rollbar {

  /**
   * This function initializes the monitoring of your application
   * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
   */
  @Cordova()
  static init(): Promise<any> { return; }

}
