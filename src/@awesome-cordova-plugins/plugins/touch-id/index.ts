import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Touch ID
 * @description
 * Scan the fingerprint of a user with the TouchID sensor.
 *
 * Requires Cordova plugin: `cordova-plugin-touch-id`. For more info, please see the [TouchID plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-touch-id).
 * @usage
 * ```typescript
 * import { TouchID } from '@awesome-cordova-plugins/touch-id/ngx';
 *
 * constructor(private touchId: TouchID) { }
 *
 * ...
 *
 * this.touchId.isAvailable()
 *   .then(
 *     res => console.log('TouchID is available!'),
 *     err => console.error('TouchID is not available', err)
 *   );
 *
 * this.touchId.verifyFingerprint('Scan your fingerprint please')
 *   .then(
 *     res => console.log('Ok', res),
 *     err => console.error('Error', err)
 *   );
 * ```
 *
 * ### Error Codes
 *
 * The plugin will reject for various reasons. Your app will most likely need to respond to the cases differently.
 *
 * Here is a list of some of the error codes:
 *
 *  -  `-1` - Fingerprint scan failed more than 3 times
 *  -  `-2` or `-128` - User tapped the 'Cancel' button
 *  -  `-3` - User tapped the 'Enter Passcode' or 'Enter Password' button
 *  -  `-4` - The scan was cancelled by the system (Home button for example)
 *  -  `-6` - TouchID is not Available
 *  -  `-8` - TouchID is locked out from too many tries
 */
@Plugin({
  pluginName: 'TouchID',
  plugin: 'cordova-plugin-touch-id',
  pluginRef: 'plugins.touchid',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-touch-id',
  platforms: ['iOS'],
})
@Injectable()
export class TouchID extends AwesomeCordovaNativePlugin {
  /**
   * Checks Whether TouchID is available or not.
   * @returns {Promise<any>} Returns a Promise that resolves if yes, rejects if no.
   */
  @Cordova()
  isAvailable(): Promise<any> {
    return;
  }

  /**
   * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, brings up standard system passcode screen.
   * @param {string} message  The message to display
   * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
   */
  @Cordova()
  verifyFingerprint(message: string): Promise<any> {
    return;
  }

  /**
   * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
   * @param {string} message  The message to display
   * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
   */
  @Cordova()
  verifyFingerprintWithCustomPasswordFallback(message: string): Promise<any> {
    return;
  }

  /**
   * Show TouchID dialog with custom 'Enter Password' message and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
   * @param {string} message  The message to display
   * @param {string} enterPasswordLabel  Custom text for the 'Enter Password' button
   * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
   */
  @Cordova()
  verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(
    message: string,
    enterPasswordLabel: string
  ): Promise<any> {
    return;
  }

  /**
   * Checks if the fingerprint database changed.
   * @returns {Promise<any>} Returns a Promise that resolves if yes, rejects if no.
   */
  @Cordova()
  didFingerprintDatabaseChange(): Promise<any> {
    return;
  }
}
