import {Cordova, Plugin} from './plugin';
@Plugin({
  plugin: 'https://github.com/loicknuchel/cordova-device-accounts.git',
  pluginRef: 'plugins.DeviceAccounts',
  repo: 'https://github.com/loicknuchel/cordova-device-accounts',
  platforms: ['Android']
})
export class DeviceAccounts {

  /**
   *  Gets all accounts registered on the Android Device
   */
  @Cordova()
  static get(): Promise<any> {return; }

  /**
   *  Get all accounts registered on Android device for requested type
   */
  @Cordova()
  static getByType(type: string): Promise<any> {return; }

  /**
   *  Get all emails registered on Android device (accounts with 'com.google' type)
   */
  @Cordova()
  static getEmails(): Promise<any> {return; }

  /**
   *  Get the first email registered on Android device
   */
  @Cordova()
  static getEmail(): Promise<any> {return; }
}