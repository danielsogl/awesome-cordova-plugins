import {Plugin, RequiresPlugin} from './plugin';

declare var window;


/**
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```js
 * let info = Device.getDevice();
 * // Device sits below
 * ```
 */

@Plugin({
  name: 'Device',
  plugin: 'cordova-plugin-device',
  pluginRef: 'device'
})
export class Device {

/**
 * Returns the whole device object.
 * @see https://github.com/apache/cordova-plugin-device
 * @returns {Object} The device object.
 */
  @RequiresPlugin
  static getDevice() {
    return window.device;
  }
}
