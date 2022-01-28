import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

/**
 * @paid
 * @name TealiumInstallReferrer
 * @description
 * This module depends on the [Tealium Cordova Plugin](https://github.com/tealium/cordova-plugin). Without it, this module will not do anything.
 * Implements a Broadcast Receiver for the INSTALL_REFERRER intent.
 * @usage
 * ```
 * import { TealiumInstallReferrer } from '@awesome-cordova-plugins/tealium-installreferrer/ngx';
 *
 *
 * constructor(private installReferrer: TealiumInstallReferrer) { }
 *
 *
 * this.installReferrer.setPersistent("main");
 * this.installReferrer.setVolatile("main");
 *
 *
 *
 * ```
 */

@Plugin({
  pluginName: 'TealiumInstallReferrer',
  plugin: 'tealium-cordova-installreferrer', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.tealiumInstallReferrer', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/Tealium/cordova-plugin', // the github repository URL for the plugin
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
  install: '', // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class TealiumInstallReferrer extends AwesomeCordovaNativePlugin {
  /**
   * This function stores the install referrer information as persistent data
   *
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @returns {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setPersistent(instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function stores the install referrer information as volatile data
   *
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @returns {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setVolatile(instanceName: string): Promise<any> {
    return;
  }
}
