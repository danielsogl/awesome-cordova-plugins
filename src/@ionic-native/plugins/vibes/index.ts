import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface DeviceResponse {
  device_id?: string;
}

export interface DeviceInfoResponse extends DeviceResponse {
  push_token?: string;
}

export interface PersonResponse {
  person_key?: string;
  mdn?: string;
  external_person_id?: string;
}

/**
 * @name Vibes
 * @description
 * This plugin enables integration with the Vibes Push SDK to your Cordova project with Android and iOS supported.
 *
 * @usage
 * ```typescript
 * import { Vibes } from '@ionic-native/vibes/ngx';
 *
 *
 * constructor(private vibes: Vibes) { }
 *
 * ...
 *
 *
 * this.vibes.registerDevice()
 *   .then((res: any) => console.log(`device registration success: ${res}`)) // retrieve and save the device_id from `res` JSON object
 *   .catch((error: any) => console.error('Error registering device', error));
 *
 * this.vibes.registerPush()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error('Error registering push', error));
 *
 * this.vibes.getVibesDeviceInfo()
 *   .then((res: any) => console.log(res)) // retrieve the `device_id` and `push_token` from the JSON object
 *   .catch((error: any) => console.error('Error retrieving deviceinfo push', error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Vibes',
  plugin: 'vibes-cordova',
  pluginRef: 'Vibes',
  repo: 'https://github.com/vibes/vibes-cordova.git',
  install:
    'ionic cordova plugin add vibes-cordova --variable VIBES_APP_ID=MY_APP_ID --variable VIBES_API_URL=MY_ENVIRONMENT_URL',
  installVariables: ['VIBES_APP_ID', 'VIBES_API_URL'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Vibes extends IonicNativePlugin {
  /**
   * Register device
   * @return {Promise<DeviceResponse>}
   */
  @Cordova()
  registerDevice(): Promise<DeviceResponse> {
    return;
  }

  /**
   * Unregister device
   * @return {Promise<void>}
   */
  @Cordova()
  unregisterDevice(): Promise<void> {
    return;
  }

  /**
   * Associate person
   * @param {string} externalPersonId
   * @return {Promise<void>}
   */
  @Cordova()
  associatePerson(externalPersonId: string): Promise<void> {
    return;
  }

  /**
   * Register push
   * @return {Promise<void>}
   */
  @Cordova()
  registerPush(): Promise<void> {
    return;
  }

  /**
   * Unregister push
   * @return {Promise<void>}
   */
  @Cordova()
  unregisterPush(): Promise<void> {
    return;
  }
  /**
   * getVibesDeviceInfo
   * @return {Promise<DeviceInfoResponse>}
   */
  @Cordova()
  getVibesDeviceInfo(): Promise<DeviceInfoResponse> {
    return;
  }

  /**
   * getPerson
   * @return {Promise<PersonResponse>}
   */
  @Cordova()
  getPerson(): Promise<PersonResponse> {
    return;
  }

  /**
   * Get notified when the user opens a notification
   * @return {Observable<void>}
   */
  @Cordova({
    observable: true,
  })
  onNotificationOpened(): Observable<void> {
    return;
  }
}
