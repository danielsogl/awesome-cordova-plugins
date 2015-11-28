var util_1 = require('../util');
var PLUGIN_REF = 'plugins.toast';
exports.Toast = {
    // Metadata
    name: 'Toast',
    plugin: 'cordova-plugin-x-toast',
    // Methods
    showWithOptions: util_1.wrap(PLUGIN_REF, 'showWithOptions', 1, 2),
    hide: util_1.promisify(PLUGIN_REF, 'hide', 0, 1),
};
