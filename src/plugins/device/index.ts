import { CordovaProperty, Plugin } from './plugin';

declare var window: any;

/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```typescript
 * import { Device } from 'ionic-native';
 *
 *
 * console.log('Device UUID is: ' + Device.uuid);
 * ```
 */
@Plugin({
  pluginName: 'Device',
  plugin: 'cordova-plugin-device',
  pluginRef: 'device',
  repo: 'https://github.com/apache/cordova-plugin-device'
})
export class Device {

  /** Get the version of Cordova running on the device. */
  @CordovaProperty
  static cordova: string;

  /**
   * The device.model returns the name of the device's model or product. The value is set
   * by the device manufacturer and may be different across versions of the same product.
   */
  @CordovaProperty
  static model: string;

  /** Get the device's operating system name. */
  @CordovaProperty
  static platform: string;

  /** Get the device's Universally Unique Identifier (UUID). */
  @CordovaProperty
  static uuid: string;

  /** Get the operating system version. */
  @CordovaProperty
  static version: string;

  /** Get the device's manufacturer. */
  @CordovaProperty
  static manufacturer: string;

  /** Whether the device is running on a simulator. */
  @CordovaProperty
  static isVirtual: boolean;

  /** Get the device hardware serial number. */
  @CordovaProperty
  static serial: string;

}
