import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name User Agent
 * @description
 * The UserAgent plugin provides functions to set the HTTP  user-agent header. For more info about User-Agents, please [see the HTTP User-Agent docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent).
 *
 * Requires Cordova plugin: `cordova-useragent`. For more info, please see the [User-Agent plugin docs](https://github.com/LouisT/cordova-useragent).
 *
 * @usage
 * ```typescript
 * import { UserAgent } from '@ionic-native/user-agent';
 *
 *
 * constructor(private userAgent: UserAgent) { }
 *
 * ...
 *
 *
 * this.userAgent.set('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * * this.userAgent.get()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * * this.userAgent.reset()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'UserAgent',
  plugin: 'cordova-plugin-useragent',
  pluginRef: 'plugins.useragent',
  repo: 'https://github.com/danielsogl/cordova-plugin-useragent',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class UserAgent extends IonicNativePlugin {

  /**
   * Changes the current user-agent to the one sent by argument.
   * @param userAgent {string} User-Agent
   * @return {Promise<any>} Returns a promise that resolves when the user-agent changes
   */
  @Cordova()
  set(userAgent: string): Promise<any> {
    return;
  }

  /**
   * Returns the current user-agent string.
   * @return {Promise<any>} Returns a promise that resolves when the user-agent is returned
   */
  @Cordova()
  get(): Promise<any> {
    return;
  }

  /**
   * Sets the user-agent back to default
   * @return {Promise<any>} Returns a promise that resolves when the user-agent resets
   */
  @Cordova()
  reset(): Promise<any> {
    return;
  }

}
