import {Plugin, Cordova} from './plugin';

/**
 * @name TouchID
 * @description
 * Scan the fingerprint of a user with the TouchID sensor.
 *
 * Requires Cordova plugin: `cordova-plugin-touch-id`. For more info, please see the [TouchID plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-touch-id).
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
 * @usage
 * ```js
 * import {TouchID} from 'ionic-native';
 *
 *
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-touch-id',
  pluginRef: 'plugins.touchid',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-touch-id'
})
export class TouchID {

  /**
   * Whether TouchID is available or not.
   *
   * @return {Promise} Returns a Promise that resolves if yes, rejects if no.
   */
  @Cordova()
  isAvailable(): Promise<any> { return; }

  /**
   * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, brings up standard system passcode screen.
   *
   * @param {string} message  The message to display
   * @return {Promise} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
   */
  @Cordova()
  static verifyFingerprint(message: string): Promise<any> { return; }

  /**
   * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
   *
   * @param {string} message  The message to display
   * @return {Promise} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
   */
  @Cordova()
  static verifyFingerprintWithCustomPasswordFallback(message: string): Promise<any> { return; }

  /**
   * Show TouchID dialog with custom 'Enter Password' message and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
   *
   * @param {string} message  The message to display
   * @param {string} enterPasswordLabel  Custom text for the 'Enter Password' button
   * @return {Promise} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
   */
  @Cordova()
  static verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(message: string, enterPasswordLabel: string): Promise<any> { return; }
}
