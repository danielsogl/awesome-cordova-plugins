import {Plugin, RequiresPlugin} from './plugin';

declare var window;

@Plugin({
  name: 'Device',
  plugin: 'cordova-plugin-device',
  pluginRef: 'device'
})
export class Device {
  
  @RequiresPlugin
  static getDevice() {
    return window.device;
  }
}
