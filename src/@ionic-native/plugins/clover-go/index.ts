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
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Clover Go
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { CloverGo } from '@ionic-native/clover-go';
 *
 *
 * constructor(private cloverGo: CloverGo) { }
 *
 * ...
 *
 *
 * this.cloverGo.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'CloverGo',
  plugin: 'cordova-plugin-clovergo', // npm package name, example: cordova-plugin-camera
  pluginRef: 'clovergo', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/hotwax/cordova-plugin-clovergo', // the github repository URL for the plugin
  install: 'ionic plugin add cordova-plugin-clovergo', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class CloverGo extends IonicNativePlugin {

  /**
   * This function initialises Clover Go SDK
   * @param configuration {object}
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  init(configuration: object, success?: (res?: any) => void, error?: (err?: any) => void): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function connects to available clover go device
   *
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  connect(success?: (res?: any) => void, error?: (err?: any) => void): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function disconnects to available clover go device
   *
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  disconnect(success?: (res?: any) => void, error?: (err?: any) => void): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function initiate sale for Clover Go device
   * @param saleInfo {object}
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  sale(saleInfo: object, success?: (res?: any) => void, error?: (err?: any) => void): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
