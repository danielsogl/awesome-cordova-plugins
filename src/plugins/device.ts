import {Plugin, CordovaProperty} from './plugin';

declare var window: {
  device: Device
};

export interface Device {
  /** Get the version of Cordova running on the device. */
  cordova: string;
  /**
   * The device.model returns the name of the device's model or product. The value is set
   * by the device manufacturer and may be different across versions of the same product.
   */
  model: string;
  /** Get the device's operating system name. */
  platform: string;
  /** Get the device's Universally Unique Identifier (UUID). */
  uuid: string;
  /** Get the operating system version. */
  version: string;
  /** Get the device's manufacturer. */
  manufacturer: string;
  /** Whether the device is running on a simulator. */
  isVirtual: boolean;
  /** Get the device hardware serial number. */
  serial: string;
}

/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```js
 * import {Device} from 'ionic-native';
 *
 *
 *
 * console.log('Device UUID is: ' + Device.device.uuid);
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-device',
  pluginRef: 'device',
  repo: 'https://github.com/apache/cordova-plugin-device'
})
export class Device {

  /**
   * Returns the whole device object.
   *
   * @returns {Object} The device object.
   */
  @CordovaProperty
  static get device() { return window.device; }
}
