var util_1 = require('../util');
var PLUGIN_REF = 'navigator.camera';
exports.Camera = {
    name: 'Camera',
    plugin: 'cordova-plugin-camera',
    getPicture: util_1.promisify(PLUGIN_REF, 'getPicture', 0, 1),
    cleanup: util_1.promisify(PLUGIN_REF, 'cleanup', 0, 1)
};
