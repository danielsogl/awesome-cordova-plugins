import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Biocatch
 * @description
 * Biocatch SDK Cordova support
 *
 * @usage
 * ```typescript
 * import { Biocatch } from '@ionic-native/biocatch';
 *
 *
 * constructor(private biocatch: Biocatch) { }
 *
 * ...
 *
 *
 * this.biocatch.start('customer-session-1', 'http://example.com', 'some-public-key')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Biocatch',
  plugin: 'cordova-plugin-biocatch',
  pluginRef: 'BioCatch',
  repo: 'https://bitbucket.org/whisprnd/biocatch-cordova-plugin',
  platforms: ['iOS'],
})
@Injectable()
export class Biocatch extends IonicNativePlugin {

  /**
   * Start a session
   * @param customerSessionID {String} Customer session id
   * @param wupUrl {String} WUP server URL
   * @param publicKey {String} Public Key
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  start(customerSessionID: string | null, wupUrl: string, publicKey?: string | null): Promise<void> {
    return;
  }

  /**
   * Pause the session
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  pause(): Promise<void> {
    return;
  }

  /**
   * Resume the session
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  resume(): Promise<void> {
    return;
  }

  /**
   * Stop the session
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  stop(): Promise<void> {
    return;
  }

  /**
   * Reset the session
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  resetSession(): Promise<void> {
    return;
  }

  /**
   * Change the session context
   * @param contextName {String} Context name
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  changeContext(contextName: string): Promise<void> {
    return;
  }

  /**
   * Update the customer session ID
   * @param customerSessionID {String}
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  updateCustomerSessionID(customerSessionID: string): Promise<void> {
    return;
  }
}
