import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
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

export interface InboxMessage {
  content?: string;
  created_at?: string;
  expires_at?: string;
  message_uid?: string;
  read?: boolean;
  subject?: string;
  detail?: string;
  collapse_key?: string;
  apprefdata?: any;
  images?: any;
  inbox_custom_data: any;
}
/**
 * @name Vibes
 * @description
 * This plugin enables integration with the Vibes Push SDK to your Cordova project with Android and iOS supported.
 * @usage
 * ```typescript
 * import { Vibes } from '@awesome-cordova-plugins/vibes/ngx';
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
 *   .catch((error: any) => console.error('Error retrieving deviceinfo', error));
 *
 * this.vibes.fetchInboxMessages()
 *   .then((res: any) => console.log(res)) // fetches inbox messages for this person.
 *   .catch((error: any) => console.error('Error fetching inbox messages for this person', error));
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
export class Vibes extends AwesomeCordovaNativePlugin {
  /**
   * Register this device with the Vibes platform
   *
   * @returns {Promise<DeviceResponse>}
   */
  @Cordova()
  registerDevice(): Promise<DeviceResponse> {
    return;
  }

  /**
   * Unregister this device with the Vibes platform
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  unregisterDevice(): Promise<void> {
    return;
  }

  /**
   * Associate an external ID with the current person.
   *
   * @param {string} externalPersonId
   * @returns {Promise<void>}
   */
  @Cordova()
  associatePerson(externalPersonId: string): Promise<void> {
    return;
  }

  /**
   * Register this device to receive push notifications
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  registerPush(): Promise<void> {
    return;
  }

  /**
   * Unregister the device from receiving push notifications
   *
   * @returns {Promise<void>}
   */
  @Cordova()
  unregisterPush(): Promise<void> {
    return;
  }
  /**
   * Fetches a DeviceInfoResponse with details about the Vibes Device ID and Push Token
   *
   * @returns {Promise<DeviceInfoResponse>}
   */
  @Cordova()
  getVibesDeviceInfo(): Promise<DeviceInfoResponse> {
    return;
  }

  /**
   * Fetches the PersonResponse associated with this device currently
   *
   * @returns {Promise<PersonResponse>}
   */
  @Cordova()
  getPerson(): Promise<PersonResponse> {
    return;
  }

  /**
   * Get notified when the user opens a notification
   *
   * @returns {Observable<void>}
   */
  @Cordova({
    observable: true,
  })
  onNotificationOpened(): Observable<void> {
    return;
  }

  /**
   * Fetches an array of inbox messages for the person associated with this device.
   *
   * @returns {Promise<InboxMessage[]>}
   */
  @Cordova()
  fetchInboxMessages(): Promise<InboxMessage[]> {
    return;
  }

  /**
   * Fetches a single inbox message by it's id.
   *
   * @param {string} message_uid
   * @returns {Promise<InboxMessage>}
   */
  @Cordova()
  fetchInboxMessage(message_uid: string): Promise<InboxMessage> {
    return;
  }

  /**
   * Marks an inbox message as expired using message_uid and the expiry date supplied. Uses current date if null or invalid date is supplied.
   *
   * @param {string} message_uid
   * @param {string} An ISO-8601 formatted date string.
   * @param date
   * @returns {Promise<InboxMessage>} an updated version of the InboxMessage with expires_at date updated
   */
  @Cordova()
  expireInboxMessage(message_uid: string, date: string): Promise<InboxMessage> {
    return;
  }

  /**
   * Marks an inbox message as read.
   *
   * @param {string} message_uid
   * @returns {Promise<InboxMessage>} an updated version of the InboxMessage with read field updated
   */
  @Cordova()
  markInboxMessageAsRead(message_uid: string): Promise<InboxMessage> {
    return;
  }

  /**
   * Records an event for when the user opens an inbox message.
   *
   * @param inbox_message_stringified stringified version of the InboxMessage
   * @returns {Promise<void>}
   */
  @Cordova()
  onInboxMessageOpen(inbox_message_stringified: string): Promise<void> {
    return;
  }
}
