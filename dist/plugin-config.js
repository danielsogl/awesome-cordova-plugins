exports.PluginConfig = [
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
        id: 'statusbar',
        className: 'StatusBar',
        plugin: 'cordova-plugin-statusbar',
        pluginRef: 'StatusBar',
        promise: ['show', 'hide', 'styleDefault', 'styleLightContent', 'styleBlackTranslucent', 'styleBlackOpaque']
    },
    {
        id: 'applinks',
        className: 'AppLinks',
        plugin: 'com.lampa.startapp',
        pluginRef: 'navigator.startApp',
        promise: ['start', 'check']
    },
    {
        id: 'barcode',
        className: 'Barcode',
        plugin: 'phonegap-plugin-barcodescanner',
        pluginRef: 'cordova.plugins.barcodeScanner',
        promise: ['scan', 'encode']
    },
    {
        id: 'camera-roll',
        className: 'CameraRoll',
        plugin: 'cordova-plugin-camera-roll',
        pluginRef: 'CameraRoll',
        promise: ['saveToCameraRoll', 'getPhotos']
    },
];
