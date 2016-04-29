import {Cordova, Plugin} from './plugin';
declare var window;
@Plugin({
  plugin: 'https://github.com/loicknuchel/cordova-device-accounts.git',
  pluginRef: 'plugins.DeviceAccounts',
  repo: 'https://github.com/loicknuchel/cordova-device-accounts.git'
})
export class DeviceAccounts {

/**
 *  Gets all accounts registered on the Android Device
 */
  @Cordova()
  static get() : Promise<any> {return}

/**
 *  Get all accounts registred on Android device for requested type
 */
  @Cordova()
  static getByType(type: string) : Promise<any> {return}

/**
 *  Get all emails registred on Android device (accounts with 'com.google' type)
 */
  @Cordova()
  static getEmails() : Promise<any> {return}

/**
 *  Get the first email registred on Android device
 */
  @Cordova()
  static getEmail() : Promise<any> {return}
}