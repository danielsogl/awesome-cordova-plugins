var util_1 = require('../util');
var Rx_1 = require('@reactivex/rxjs/dist/cjs/Rx');
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
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    if (opts.callbackOrder == 'reverse') {
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        args.splice(opts.successIndex, 0, resolve);
        args.splice(opts.errorIndex, 0, reject);
    }
    else {
        args.push(resolve);
        args.push(reject);
    }
    var pluginInstance = exports.getPlugin(pluginObj.pluginRef);
    if (!pluginInstance) {
        if (!window.cordova) {
            exports.cordovaWarn(pluginObj.name, methodName);
            reject({
                error: 'cordova_not_available'
            });
            return;
        }
        exports.pluginWarn(pluginObj.name, methodName, pluginObj.name);
        reject({
            error: 'plugin_not_installed'
        });
        return;
    }
    console.log('Cordova calling', pluginObj.name, methodName, args);
    return util_1.get(window, pluginObj.pluginRef)[methodName].apply(pluginInstance, args);
}
function getPromise(cb) {
    if (window.Promise) {
        console.log('Native promises available...');
        return new Promise(function (resolve, reject) {
            cb(resolve, reject);
        });
    }
    else if (window.angular) {
        var $q_1 = window.angular.injector(['ng']).get('$q');
        console.log('Loaded $q', $q_1);
        return $q_1(function (resolve, reject) {
            cb(resolve, reject);
        });
    }
    else {
        console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular 1/2 or on a recent browser.');
    }
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new Rx_1.Observable(function (observer) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        return function () {
            try {
                return util_1.get(window, pluginObj.pluginRef)[opts.clearFunction].apply(pluginObj, pluginResult);
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.name, methodName);
                console.log(e);
            }
        };
    });
}
exports.wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
function Plugin(config) {
    return function (cls) {
        for (var k in config) {
            cls[k] = config[k];
        }
        cls['installed'] = function () {
            return !!exports.getPlugin(config.pluginRef);
        };
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
                return exports.wrap(this, methodName, opts).apply(this, args);
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
//# sourceMappingURL=plugin.js.map