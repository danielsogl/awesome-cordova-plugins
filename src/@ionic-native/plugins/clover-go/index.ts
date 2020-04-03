import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name CloverGo
 * @description
 * This plugin connect to Clover Go payment device and process payments.
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
 * this.cloverGo.init(configuration)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * 
 * this.cloverGo.connect()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * 
 * this.cloverGo.disconnect()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * 
 * this.cloverGo.sale(saleInfo)
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
  install: '', // OPTIONAL install command, in case the plugin requires variables
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
  connect( success?: (res?: any) => void, error?: (err?: any) => void): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function disconnects to connected clover go device
   *
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  disconnect( success?: (res?: any) => void, error?: (err?: any) => void): Promise<any> {
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
