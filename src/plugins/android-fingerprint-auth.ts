import { Cordova, Plugin } from './plugin';

export interface AndroidFingerprintAuthOptions {

  /**
   * Required
   * Used as the alias for your key in the Android Key Store.
   */
  clientId: string;

  /**
   * Used to create credential string for encrypted token and as alias to retrieve the cipher.
   */
  username?: string;

  /**
   * Used to create credential string for encrypted token
   */
  password?: string;

  /**
   * Required for decrypt()
   * Encrypted user credentials to decrypt upon successful authentication.
   */
  token?: string;

  /**
   * Set to true to remove the "USE BACKUP" button
   */
  disableBackup?: boolean;

  /**
   * Change the language. (en_US or es)
   */
  locale?: string;

  /**
   * The device max is 5 attempts. Set this parameter if you want to allow fewer than 5 attempts.
   */
  maxAttempts?: number;

  /**
   * Require the user to authenticate with a fingerprint to authorize every use of the key.
   * New fingerprint enrollment will invalidate key and require backup authenticate to
   * re-enable the fingerprint authentication dialog.
   */
  userAuthRequired?: boolean;

  /**
   * Set the title of the fingerprint authentication dialog.
   */
  dialogTitle?: string;

  /**
   * Set the message of the fingerprint authentication dialog.
   */
  dialogMessage?: string;

  /**
   * Set the hint displayed by the fingerprint icon on the fingerprint authentication dialog.
   */
  dialogHint?: string;

}

/**
 * @name Android Fingerprint Auth
 * @description
 * This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.
 * @usage
 * ```typescript
 * import { AndroidFingerprintAuth } from 'ionic-native';
 *
 * AndroidFingerprintAuth.isAvailable()
 *   .then((result)=> {
 *     if(result.isAvailable){
 *       // it is available
 *
 *       AndroidFingerprintAuth.encrypt({ clientId: "myAppName", username: "myUsername", password: "myPassword" })
 *         .then(result => {
 *            if (result.withFingerprint) {
 *                console.log("Successfully encrypted credentials.");
 *                console.log("Encrypted credentials: " + result.token);
 *            } else if (result.withBackup) {
 *              console.log('Successfully authenticated with backup password!');
 *            } else console.log('Didn\'t authenticate!');
 *         })
 *         .catch(error => {
 *            if (error === "Cancelled") {
 *              console.log("Fingerprint authentication cancelled");
 *            } else console.error(error)
 *         });
 *
 *     } else {
 *       // fingerprint auth isn't available
 *     }
 *   })
 *   .catch(error => console.error(error));
 * ```
 * @interfaces
 * AndroidFingerprintAuthOptions
 */
@Plugin({
  pluginName: 'AndroidFingerprintAuth',
  plugin: 'cordova-plugin-android-fingerprint-auth',
  pluginRef: 'FingerprintAuth',
  repo: 'https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth'
})
export class AndroidFingerprintAuth {

  /**
   * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
   * @param options {AndroidFingerprintAuthOptions} Options
   * @returns {Promise<any>}
   */
  @Cordova()
  static encrypt(options: AndroidFingerprintAuthOptions): Promise<{
    /**
     * Biometric authentication
     */
    withFingerprint: boolean;
    /**
     * Authentication using backup credential activity
     */
    withBackup: boolean;
    /**
     * base64encoded string representation of user credentials
     */
    token: string;
  }> {return; }

  /**
   * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
   * @param options {AndroidFingerprintAuthOptions} Options
   * @returns {Promise<any>}
   */
  @Cordova()
  static decrypt(options: AndroidFingerprintAuthOptions): Promise<{
    /**
     * Biometric authentication
     */
    withFingerprint: boolean;
    /**
     * Authentication using backup credential activity
     */
    withBackup: boolean;
    /**
     * FingerprintAuth.CipherMode.DECRYPT
     * Decrypted password
     */
    password: string;
  }> {return; }

  /**
   * Check if service is available
   * @returns {Promise<any>} Returns a Promise that resolves if fingerprint auth is available on the device
   */
  @Cordova()
  static isAvailable(): Promise<{isAvailable: boolean}> { return; }

  /**
   * Delete the cipher used for encryption and decryption by username
   * @returns {Promise<any>} Returns a Promise that resolves if the cipher was successfully deleted
   */
  @Cordova()
  static delete(options: {clientId: string; username: string; }): Promise<{deleted: boolean}> { return; }
}
