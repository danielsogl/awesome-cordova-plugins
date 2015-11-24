export var PluginConfig = [
  {
    id: 'device',
    className: 'Device',
    plugin: 'cordova-plugin-device',
    pluginRef: 'device'
  },
  {
    id: 'camera',
    className: 'Camera',
    plugin: 'cordova-plugin-camera',
    promise: ['takePicture'],
    pluginRef: 'navigator.camera'
  },
  {
    id: 'applinks',
    className: 'AppLinks',
    plugin: 'com.lampa.startapp',
    pluginRef: 'navigator.startApp'
  },
]
