import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name SSLCertificateChecker
 * @description
 * Cordova plugin to check SSL certificates on Android and iOS.
 *
 * @usage
 * ```typescript
 * import { SSLCertificateChecker } from '@awesome-cordova-plugins/ssl-certificate-checker';
 *
 * constructor(private sslCertificateChecker: SSLCertificateChecker) { }
 *
 * ...
 *
 * this.sslCertificateChecker.check(serverURL, allowedFingerprint)
 *   .then(() => console.log('Certificate is valid'))
 *   .catch(error => console.error('Certificate is invalid', error));
 *
 * ...
 *
 * this.sslCertificateChecker.checkInCertChain(serverURL, allowedFingerprint)
 *   .then(() => console.log('Certificate chain is valid'))
 *   .catch(error => console.error('Certificate chain is invalid', error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SSLCertificateChecker',
  plugin: 'SSLCertificateChecker-PhoneGap-Plugin',
  pluginRef: 'SSLCertificateChecker',
  repo: 'https://github.com/EddyVerbruggen/SSLCertificateChecker-PhoneGap-Plugin',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SSLCertificateChecker extends AwesomeCordovaNativePlugin {
  /**
   * Checks if the SSL certificate of the specified server matches the provided fingerprint.
   * @param serverURL - The URL of the server to check.
   * @param allowedFingerprint - The allowed SHA-1 fingerprint.
   * @return {Promise<void>} Returns a promise that resolves if the certificate is valid, otherwise rejects with an error.
   */
  @Cordova()
  check(serverURL: string, allowedFingerprint: string | string[]): Promise<void> {
    return;
  }

  /**
   * (Not recommended in versions higher than 4.0.0)
   * Checks if the SSL certificate of the specified server is in the certificate chain
   * and matches the provided fingerprint.
   * @param serverURL - The URL of the server to check.
   * @param allowedFingerprint - The allowed SHA-1 fingerprint.
   * @return {Promise<void>} Returns a promise that resolves if the certificate chain is valid, otherwise rejects with an error.
   * @deprecated This function is considered insecure.
   */
  @Cordova()
  checkInCertChain(serverURL: string, allowedFingerprint: string | string[]): Promise<void> {
    return;
  }
}
