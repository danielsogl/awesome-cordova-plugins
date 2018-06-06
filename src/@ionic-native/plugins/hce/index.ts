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
// import { Observable } from 'rxjs/Observable';
// import {CordovaProperty, CordovaInstance, InstanceProperty} from '@ionic-native/core'

/**
 * @name hce
 * @description
 * HCE Cordova Wrapper
 *
 * @usage
 * ```typescript
 * import { hce } from '@ionic-native/hce';
 *
 *
 * constructor(private hce: hce) { }
 *
 * ...
 *
 * function onCommand(command){
 *   var commandAsBytes = new Uint8Array(command);
 *   var commandAsString = hce.util.byteArrayToHexString(commandAsBytes);
 *
 *   // do something with the command
 *
 *   // send the response
 *   hce.sendReponse(commandResponse);
 * }
 * this.hce.registerCommandCallback().then(onCommand);
 *
 * ```
 */
@Plugin({
  pluginName: 'hce',
  plugin: 'cordova-plugin-hce', // npm package name, example: cordova-plugin-camera
  pluginRef: 'hce', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/don/cordova-plugin-hce', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['AID_FILTER'], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HCE extends IonicNativePlugin {

  /**
   * Registers command receiver.
   * @param onCommand {HCECommandEvent} The event handler.
   * @param fail {Function} Error event handler.
   * 
   */
  @Cordova()
  registerCommandCallback(onCommand: HCECommandEvent, fail?: Function): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * Registers Deactivated receiver.
   * @param ok {HCEDeactivatedEvent} Success event handler.
   * @param fail {Function} Error event handler.
   * 
   */
  @Cordova()
  registerDeactivatedCallback(ok: HCEDeactivatedEvent, fail?: Function): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  /**
   * Sends response APDU.
   * @param response {Uint8Array} Response
   * @param success {string} Success Callback.
   * @param success {string} Failure Callback.
   * 
   */
  @Cordova()
  sendResponse(response: Uint8Array, success?: Function, failure?: Function): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


}
/*
class Util{
  /**
   * Converts Hex to Byte array.
   * @param hex {string} HEX String
   * @returns {Uint8Array}
   * 
   *//*
  @Cordova()
  hexStringToByteArray(hex :string): Uint8Array {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * Converts Byte array to Hex String.
   * @param byte {Uint8Array} Byte Array
   * @returns {string}
   * 
   *//*
  @Cordova()
  byteArrayToHexString(array :Uint8Array): string {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  
}*/

export interface HCECommandEvent { (command: Uint8Array): void; }
export interface HCEDeactivatedEvent { (command: number): void; }

