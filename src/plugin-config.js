export var PluginConfig = [
  {
    id: 'camera',
    className: 'Camera',
    plugin: 'cordova-plugin-camera',
    promise: ['takePicture'],
    pluginCheck: () => {
      return !!navigator.camera;
    }
  },
  {
    id: 'device',
    className: 'Device',
    plugin: 'cordova-plugin-device',
    pluginCheck: () => {
      return !!window.device;
    }
  }
]
