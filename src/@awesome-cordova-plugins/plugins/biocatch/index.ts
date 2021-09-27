import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name BioCatch
 * @description
 * BioCatch SDK Cordova support
 * @usage
 * ```typescript
 * import { BioCatch } from '@awesome-cordova-plugins/biocatch';
 *
 *
 * constructor(private biocatch: BioCatch) { }
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
  pluginName: 'BioCatch',
  plugin: 'cordova-plugin-biocatch',
  pluginRef: 'BioCatch',
  repo: 'https://bitbucket.org/carlos_orellana/ionic-plugin',
  platforms: ['iOS', 'Android'],
})
@Injectable()
export class BioCatch extends AwesomeCordovaNativePlugin {
  /**
   * Start a session
   *
   * @param customerSessionID {String} Customer session id
   * @param wupUrl {String} WUP server URL
   * @param publicKey {String} Public Key
   * @returns {Promise<void>} Returns a promise
   */
  @Cordova()
  start(customerSessionID: string | null, wupUrl: string, publicKey: string | null): Promise<void> {
    return;
  }

  /**
   * Pause the session
   *
   * @returns {Promise<void>} Returns a promise
   */
  @Cordova()
  pause(): Promise<void> {
    return;
  }

  /**
   * Resume the session
   *
   * @returns {Promise<void>} Returns a promise
   */
  @Cordova()
  resume(): Promise<void> {
    return;
  }

  /**
   * Stop the session
   *
   * @returns {Promise<void>} Returns a promise
   */
  @Cordova()
  stop(): Promise<void> {
    return;
  }

  /**
   * Reset the session
   *
   * @returns {Promise<void>} Returns a promise
   */
  @Cordova()
  resetSession(): Promise<void> {
    return;
  }

  /**
   * Change the session context
   *
   * @param contextName {String} Context name
   * @returns {Promise<void>} Returns a promise
   */
  @Cordova()
  changeContext(contextName: string): Promise<void> {
    return;
  }

  /**
   * Update the customer session ID
   *
   * @param customerSessionID {String}
   * @returns {Promise<void>} Returns a promise
   */
  @Cordova()
  updateCustomerSessionID(customerSessionID: string | null): Promise<void> {
    return;
  }
}
