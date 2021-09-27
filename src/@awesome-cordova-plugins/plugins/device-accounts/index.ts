import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface AndroidAccount {
  /** Account creator */
  CREATOR: AndroidAccount;

  /** Account name */
  name: string;

  /** Account type */
  type: string;
}

/**
 * @name Device Accounts
 * @description
 * Gets the Google accounts associated with the Android device
 * @usage
 * ```typescript
 * import { DeviceAccounts } from '@awesome-cordova-plugins/device-accounts/ngx';
 *
 * constructor(private deviceAccounts: DeviceAccounts) { }
 *
 * ...
 *
 * this.deviceAccounts.get()
 *   .then(accounts => console.log(accounts))
 *   .catch(error => console.error(error));
 *
 * ```
 * @interfaces
 * AndroidAccount
 */
@Plugin({
  pluginName: 'DeviceAccounts',
  plugin: 'cordova-device-accounts-v2',
  pluginRef: 'DeviceAccounts',
  repo: 'https://github.com/xUnholy/cordova-device-accounts-v2',
  platforms: ['Android'],
})
@Injectable()
export class DeviceAccounts extends AwesomeCordovaNativePlugin {
  /**
   *  Gets all accounts registered on the Android Device
   *
   * @returns {Promise<AndroidAccount[]>}
   */
  @Cordova()
  get(): Promise<AndroidAccount[]> {
    return;
  }

  /**
   *  Get all accounts registered on Android device for requested type
   *
   * @param {string} type
   * @returns {Promise<AndroidAccount[]>}
   */
  @Cordova()
  getByType(type: string): Promise<AndroidAccount[]> {
    return;
  }

  /**
   *  Get all emails registered on Android device (accounts with 'com.google' type)
   *
   * @returns {Promise<string[]>}
   */
  @Cordova()
  getEmails(): Promise<string[]> {
    return;
  }

  /**
   *  Get the first email registered on Android device
   *
   * @returns {Promise<string>}
   */
  @Cordova()
  getEmail(): Promise<string> {
    return;
  }

  /**
   *  Get permissions for access to email registered on Android device 8.0+
   *
   * @returns {Promise<string>}
   */
  @Cordova()
  getPermissions(): Promise<string> {
    return;
  }

  /**
   *  Get permissions for access to email registered on Android device 8.0+ for requested type
   *
   * @param {string} type
   * @returns {Promise<string>}
   */
  @Cordova()
  getPermissionsByType(type: string): Promise<string> {
    return;
  }
}
