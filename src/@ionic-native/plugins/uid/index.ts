import { Injectable } from '@angular/core';
import { Plugin, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Uid
 * @description
 * Get unique identifiers: UUID, IMEI, IMSI, ICCID and MAC.
 *
 * @usage
 * ```typescript
 * import { Uid } from '@ionic-native/uid';
 * import { AndroidPermissions } from '@ionic-native/android-permissions';
 *
 * constructor(private uid: Uid, private androidPermissions: AndroidPermissions) { }
 *
 * 
 * async getImei() {
 *  const { hasPermission } = await this.androidPermissions.checkPermission(
 *    this.androidPermissions.PERMISSION.READ_PHONE_STATE
 *  );
 *  
 *  if (!hasPermission) {
 *    const result = await this.androidPermissions.requestPermission(
 *      this.androidPermissions.PERMISSION.READ_PHONE_STATE
 *    );
 *
 *    if (!result.hasPermission) {
 *      throw new Error('Permissions required');
 *    }
 * 
 *    // ok, a user gave us permission, we can get him identifiers after restart app
 *    return;
 *  }
 * 
 *   return this.uid.IMEI
 * }
 * ```
 */
@Plugin({
  pluginName: 'Uid',
  plugin: 'https://github.com/hygieiasoft/cordova-plugin-uid',
  pluginRef: 'cordova.plugins.uid',
  repo: 'https://github.com/hygieiasoft/cordova-plugin-uid',
  platforms: ['Android']
})
@Injectable()
export class Uid extends IonicNativePlugin {

  /** Get the device Universally Unique Identifier (UUID). */
  @CordovaProperty
  UUID: string;

  /** Get the device International Mobile Station Equipment Identity (IMEI). */
  @CordovaProperty
  IMEI: string;

  /** Get the device International mobile Subscriber Identity (IMSI). */
  @CordovaProperty
  IMSI: string;

  /** Get the sim Integrated Circuit Card Identifier (ICCID). */
  @CordovaProperty
  ICCID: string;

  /** Get the Media Access Control address (MAC). */
  @CordovaProperty
  MAC: string;

}
