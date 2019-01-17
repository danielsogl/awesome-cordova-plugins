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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Luxand
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Luxand } from '@ionic-native/luxand';
 *
 *
 * constructor(private luxand: Luxand) { }
 *
 * ...
 *
 *
 * this.luxand.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Luxand',
  plugin: 'codova-plugin-luxand', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.Luxand', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Luxand extends IonicNativePlugin {

  /**
   * Initialize Luxand SDK
   * @param config {LuxandConfig} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  init(config: LuxandConfig): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * Identify methode, try to register a face in internal data base
   * @param params
   * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
   */
  @Cordova()
  register(params: {timeout: number}): Promise<OMLFacialData> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * Login method, try to authenticated a face
   * @param params
   * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
   */
  @Cordova()
  login(params: {timeout: number}): Promise<OMLFacialData> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * clear method, try to remove a face from internal database
   * @param id {number}
   * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
   */
  @Cordova()
  clear(id: number): Promise<OMLFacialData> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * clearMemory method, try to clear internal database
   * @return {Promise<OMLFacialData>} Returns a promise that resolves when something happens
   */
  @Cordova()
  clearMemory(): Promise<OMLFacialData> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
export interface LuxandConfig {
  licence: string;
  dbname: string;
  loginTryCount: number;
}

export interface OMLFacialData {
  status: string;
  message: string;
  name: string;
  id: number;
  extra: {
    AGE?: any;
    GENDER?: any;
    EYESOPENED?: any;
    SMILE: any;
  };
}
