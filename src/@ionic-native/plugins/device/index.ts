import { Injectable } from '@angular/core';
import { CordovaProperty, Plugin } from '@ionic-native/core';

declare var window: any;

/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```typescript
 * import { Device } from '@ionic-native/device';
 *
 * constructor(private device: Device) { }
 *
 * ...
 *
 * console.log('Device UUID is: ' + this.device.uuid);
 * ```
 */
@Plugin({
  pluginName: 'Device',
  plugin: 'cordova-plugin-device',
  pluginRef: 'device',
  repo: 'https://github.com/apache/cordova-plugin-device',
  platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'OS X', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
})
@Injectable()
export class Device {

  /** Get the version of Cordova running on the device. */
  @CordovaProperty
  cordova: string;

  /**
   * The device.model returns the name of the device's model or product. The value is set
   * by the device manufacturer and may be different across versions of the same product.
   */
  @CordovaProperty
  model: string;

  /** Get the device's operating system name. */
  @CordovaProperty
  platform: string;

  /** Get the device's Universally Unique Identifier (UUID). */
  @CordovaProperty
  uuid: string;

  /** Get the operating system version. */
  @CordovaProperty
  version: string;

  /** Get the device's manufacturer. */
  @CordovaProperty
  manufacturer: string;

  /** Whether the device is running on a simulator. */
  @CordovaProperty
  isVirtual: boolean;

  /** Get the device hardware serial number. */
  @CordovaProperty
  serial: string;

}
