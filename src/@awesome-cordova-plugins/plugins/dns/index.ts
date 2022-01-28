import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

/**
 * @name DNS
 * @description A plugin for Apache Cordova that enables applications to manually resolve hostnames into an underlying network address. This is mostly useful for determining whether there is a problem with the device's DNS server configuration.
 * @usage
 * ```typescript
 * import { DNS } from '@awesome-cordova-plugins/dns/ngx';
 *
 *
 * constructor(private dns: DNS) { }
 *
 * ...
 * this.dns.resolve(hostname)
 *   .then(
 *     address => console.log('Resolved ' + hostname + ' to ' + address),
 *     error => console.log('Failed to resolve ' + hostname + ': ' + error)
 *   );
 *
 * ```
 */
@Plugin({
  pluginName: 'DNS',
  plugin: 'cordova-plugin-dns',
  pluginRef: 'cordova.plugins.dns',
  repo: 'https://bitbucket.org/zegeba/cordova-plugin-dns',
  platforms: ['Android'],
})
@Injectable()
export class DNS extends AwesomeCordovaNativePlugin {
  /**
   * Resolve hostnames into an underlying network address.
   *
   * @param hostname
   * @returns {Promise<string>} Returns a promise that resolves with the resolution.
   */
  @Cordova()
  resolve(hostname: string): Promise<string> {
    return;
  }
}
