import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

/**
 * @name Device Accounts
 * @description
 * Gets the Google accounts associated with the Android device
 *
 * @usage
 * ```typescript
 * import { DeviceAccounts } from '@ionic-native/device-accounts';
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
 */
@Plugin({
  pluginName: 'DeviceAccounts',
  plugin: 'https://github.com/loicknuchel/cordova-device-accounts.git',
  pluginRef: 'plugins.DeviceAccounts',
  repo: 'https://github.com/loicknuchel/cordova-device-accounts',
  platforms: ['Android']
})
@Injectable()
export class DeviceAccounts {

  /**
   *  Gets all accounts registered on the Android Device
   * @returns {Promise<any>}
   */
  @Cordova()
  get(): Promise<any> { return; }

  /**
   *  Get all accounts registered on Android device for requested type
   * @returns {Promise<any>}
   */
  @Cordova()
  getByType(type: string): Promise<any> { return; }

  /**
   *  Get all emails registered on Android device (accounts with 'com.google' type)
   * @returns {Promise<any>}
   */
  @Cordova()
  getEmails(): Promise<any> { return; }

  /**
   *  Get the first email registered on Android device
   * @returns {Promise<any>}
   */
  @Cordova()
  getEmail(): Promise<any> { return; }

}
