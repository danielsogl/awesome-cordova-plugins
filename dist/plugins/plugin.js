var util_1 = require('../util');
exports.wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log('Trying', pluginObj.name, methodName, args);
        return new Promise(function (resolve, reject) {
            if (typeof opts.successIndex !== 'undefined') {
                args[opts.successIndex] = resolve;
            }
            if (typeof opts.errorIndex !== 'undefined') {
                args[opts.errorIndex] = reject;
            }
            var pluginInstance = util_1.get(window, pluginObj.pluginRef);
            if (!pluginInstance) {
                console.warn('Native: tried calling ' + pluginObj.name + '.' + methodName + ', but the ' + pluginObj.name + ' plugin is not installed. Install the ' + pluginObj.plugin + ' plugin');
                reject({
                    error: 'plugin_not_installed'
                });
                return;
            }
            util_1.get(window, pluginObj.pluginRef)[methodName].apply(pluginObj, args);
        });
    };
};
var PluginDecotor = (function () {
    function PluginDecotor(cls, config) {
        this.cls = cls;
        this.config = config;
    }
    return PluginDecotor;
})();
function Plugin(config) {
    return function (cls) {
        // Add these fields to the class
        for (var k in config) {
            cls[k] = config[k];
        }
        return cls;
    };
}
exports.Plugin = Plugin;
function Cordova(opts) {
    if (opts === void 0) { opts = {}; }
    return function (obj, methodName) {
        if (opts.promise) {
            console.log('TODO: Promise');
        }
        obj[methodName] = exports.wrap(obj, methodName, opts).bind(obj);
    };
}
exports.Cordova = Cordova;
