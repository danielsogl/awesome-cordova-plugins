import { Injectable } from '@angular/core';
import { CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

declare const window: any;

/**
 * @name Device
 * @premier device
 * @description
 * Access information about the underlying device and platform.
 * @usage
 * ```typescript
 * import { Device } from '@awesome-cordova-plugins/device/ngx';
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
  platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows'],
})
@Injectable()
export class Device extends AwesomeCordovaNativePlugin {
  /** Get the version of Cordova running on the device. */
  @CordovaProperty()
  cordova: string;

  /**
   * The device.model returns the name of the device's model or product. The value is set
   * by the device manufacturer and may be different across versions of the same product.
   */
  @CordovaProperty()
  model: string;

  /** Get the device's operating system name. */
  @CordovaProperty()
  platform: string;

  /** Get the device's Universally Unique Identifier (UUID). */
  @CordovaProperty()
  uuid: string;

  /** Get the operating system version. */
  @CordovaProperty()
  version: string;

  /** Get the device's manufacturer. */
  @CordovaProperty()
  manufacturer: string;

  /** Whether the device is running on a simulator. */
  @CordovaProperty()
  isVirtual: boolean;

  /** Get the device hardware serial number. */
  @CordovaProperty()
  serial: string;
}
