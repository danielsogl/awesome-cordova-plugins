/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Wikitude Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { WikitudePlugin } from '@awesome-cordova-plugins/wikitude-plugin';
 *
 *
 * constructor(private wikitudePlugin: WikitudePlugin) { }
 *
 * ...
 *
 *
 * this.wikitudePlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'WikitudePlugin',
  plugin: 'com.wikitude.phonegap.wikitudeplugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'WikitudePlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'git+https://github.com/Wikitude/wikitude-phonegap.git', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class WikitudePlugin extends AwesomeCordovaNativePlugin {
  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  isDeviceSupported(successCallback: any, errorCallback: any, requiredFeatures: any): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  loadARchitectWorld(
    successCallback: any,
    errorCallback: any,
    arExperienceUrl: any,
    requiredFeatures: any,
    startupConfiguration: any
  ): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  close(): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  requestAccess(successCallback: any, errorCallback: any, requiredFeatures: any): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setOnUrlInvokeCallback(onUrlInvokeCallback: any): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  callJavaScript(js: any): Promise<void> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setJSONObjectReceivedCallback(onJSONObjectReceived: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
