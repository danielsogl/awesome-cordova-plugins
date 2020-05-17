import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name hce
 * @description
 * HCE Cordova Wrapper
 *
 * @usage
 * ```typescript
 * import { hce } from '@ionic-native/hce/ngx';
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
  plugin: 'cordova-plugin-hce',
  pluginRef: 'hce',
  repo: 'https://github.com/don/cordova-plugin-hce',
  install: '',
  installVariables: ['AID_FILTER'],
  platforms: ['Android'],
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

export type HCECommandEvent = (command: Uint8Array) => void;
export type HCEDeactivatedEvent = (command: number) => void;
