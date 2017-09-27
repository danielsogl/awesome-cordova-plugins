import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

import { Injectable } from '@angular/core';

/**
 * @name Certificates
 * @description Cordova plugin to configure SSL certificates, currently used to enable usage of untrusted aka self-signed SSL certificates.
 *
 * @usage
 * ```typescript
 * import { Certificates } from '@ionic-native/certificates';
 *
 *
 * constructor(private certificates: Certificates) { }
 *
 * ...
 *
 * this.certificates.trustUnsecureCerts(true);
 * ```
 */
@Plugin({
  pluginName: 'Certificates',
  plugin: 'cordova-plugin-certificates',
  pluginRef: 'cordova.plugins.certificates',
  repo: 'https://github.com/hypery2k/cordova-certificate-plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Certificates extends IonicNativePlugin {
  /**
   * Activates or deactivates the acceptance of self signed/unsecure SSL certificates
   * @param {boolean} boolActivateUnsecure boolean value to set desired behaviour
   */
  @Cordova()
  trustUnsecureCerts(boolActivateUnsecure: boolean) {
    return;
  }
}
