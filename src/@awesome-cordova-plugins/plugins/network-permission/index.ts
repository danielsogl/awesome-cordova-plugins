import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Network Permission
 * @description
 * Requires Cordova plugin: cordova-plugin-network-permission. For more info, please see the [Network permission plugin docs](https://github.com/j5int/cordova-plugin-network-permission).
 * @usage
 * ```typescript
 * import { NetworkPermission } from '@awesome-cordova-plugins/network-permission/ngx';
 *
 * constructor(private networkPermission: NetworkPermission) { }
 *
 * ...
 *
 * this.networkPermission.requestLocalNetworkPermission()
 * .then(() => {
 *   console.log('Permission was granted successful');
 * })
 * .catch(() => {
 *   console.log('Permission declined');
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'NetworkPermission',
  plugin: 'cordova-plugin-network-permission',
  pluginRef: 'localNetworkPermission',
  repo: 'https://github.com/j5int/cordova-plugin-network-permission',
  platforms: ['iOS'],
})
@Injectable()
export class NetworkPermission extends AwesomeCordovaNativePlugin {
  /**
   * Request local network permission
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  requestLocalNetworkPermission(): Promise<boolean> {
    return;
  }
}
