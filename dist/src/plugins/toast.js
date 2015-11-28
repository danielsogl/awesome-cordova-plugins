var util_1 = require('../util');
var PLUGIN_REF = 'plugins.toast';
exports.Toast = {
    name: 'Toast',
    plugin: 'cordova-plugin-x-toast',
    showWithOptions: util_1.wrap(PLUGIN_REF, 'showWithOptions', 1, 2),
    hide: util_1.promisify(PLUGIN_REF, 'hide', 0, 1),
};
