var util_1 = require('../util');
exports.getPlugin = function (pluginRef) {
    return util_1.get(window, pluginRef);
};
exports.isInstalled = function (pluginRef) {
    return !!exports.getPlugin(pluginRef);
};
exports.pluginWarn = function (pluginName, method, plugin) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method +
            ', but the ' + pluginName + ' plugin is not installed. Install the ' +
            plugin + ' plugin');
    }
    else {
        console.warn('Native: tried accessing the ' + pluginName + ' plugin but it\'s not installed. Install the ' + plugin + ' plugin');
    }
};
exports.cordovaWarn = function (pluginName, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
    else {
        console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
};
exports.wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            if (!window.cordova) {
                exports.cordovaWarn(pluginObj.name, methodName);
                reject({
                    error: 'cordova_not_available'
                });
                return;
            }
            if (opts.callbackOrder == 'reverse') {
                args[0] = resolve;
                args[1] = reject;
            }
            else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
                args[opts.successIndex] = resolve;
                args[opts.errorIndex] = reject;
            }
            else {
                args.push(resolve);
                args.push(reject);
            }
            var pluginInstance = exports.getPlugin(pluginObj.pluginRef);
            if (!pluginInstance) {
                exports.pluginWarn(pluginObj.name, methodName, pluginObj.name);
                reject({
                    error: 'plugin_not_installed'
                });
                return;
            }
            util_1.get(window, pluginObj.pluginRef)[methodName].apply(pluginObj, args);
        });
    };
};
function Plugin(config) {
    return function (cls) {
        for (var k in config) {
            cls[k] = config[k];
        }
        return cls;
    };
}
exports.Plugin = Plugin;
function Cordova(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName, descriptor) {
        var originalMethod = descriptor.value;
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return exports.wrap(this, methodName, opts)();
            }
        };
    };
}
exports.Cordova = Cordova;
function RequiresPlugin(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log('Calling', this);
        if (!window.cordova) {
            exports.cordovaWarn(this.name, null);
            return;
        }
        var pluginInstance = exports.getPlugin(this.pluginRef);
        if (!pluginInstance) {
            exports.pluginWarn(this.name, null, this.name);
            return;
        }
        originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.RequiresPlugin = RequiresPlugin;
