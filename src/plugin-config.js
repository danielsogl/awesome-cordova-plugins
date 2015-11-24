export var PluginConfig = [
  {
    id: 'camera',
    className: 'Camera',
    plugin: 'cordova-plugin-camera',
    promise: ['takePicture'],
    pluginRef: 'navigator.camera'
  },
  {
    id: 'device',
    className: 'Device',
    plugin: 'cordova-plugin-device',
    pluginRef: 'device'
  }
]
