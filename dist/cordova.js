var util_1 = require('./util');
var Cordova = (function () {
    function Cordova() {
    }
    Cordova.hasPlugin = function (pluginRef) {
        return !!this.plugin(pluginRef);
    };
    Cordova.plugin = function (pluginRef) {
        return util_1.get(window, pluginRef);
    };
    Cordova.promisify = function (pluginRef, pluginName, methodName, successIndex, errorIndex) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new Promise(function (resolve, reject) {
                if (!window.cordova) {
                    console.warn('Cordova: tried calling', '"' + pluginName + '.' + methodName + '"', 'but Cordova is not defined. Please make sure you have cordova.js included in your index.html file and you are running in a proper cordova environment');
                    reject({
                        error: 'cordova_not_available'
                    });
                    return;
                }
                if (!_this.hasPlugin(pluginRef)) {
                    console.warn('Cordova: tried calling', '"' + pluginName + '.' + methodName + '"', 'but the ' + pluginName + ' plugin is not installed.');
                    reject({
                        error: 'plugin_not_installed'
                    });
                    return;
                }
                console.log('Cordova: exec(' + pluginName + ', ' + methodName + ')');
                args[successIndex] = resolve;
                args[errorIndex] = reject;
                util_1.get(window, pluginRef)[methodName].apply(_this, args);
            });
        };
    };
    return Cordova;
})();
exports.Cordova = Cordova;
