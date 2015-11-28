var util_1 = require('../util');
var PLUGIN_REF = 'StatusBar';
exports.StatusBar = {
    // Metadata
    name: 'StatusBar',
    plugin: 'cordova-plugin-statusbar',
    // Methods
    overlaysWebView: util_1.wrap(PLUGIN_REF, 'overlaysWebView'),
    styleDefault: util_1.wrap(PLUGIN_REF, 'styleDefault'),
    styleLightContent: util_1.wrap(PLUGIN_REF, 'styleLightContent'),
    styleBlackTranslucent: util_1.wrap(PLUGIN_REF, 'styleBlackTranslucent'),
    styleBlackOpaque: util_1.wrap(PLUGIN_REF, 'styleBlackOpaque'),
    backgroundColorByName: util_1.wrap(PLUGIN_REF, 'backgroundColorByName'),
    backgroundColorByHexString: util_1.wrap(PLUGIN_REF, 'backgroundColorByHexString'),
    hide: util_1.wrap(PLUGIN_REF, 'hide'),
    show: util_1.wrap(PLUGIN_REF, 'show')
};
