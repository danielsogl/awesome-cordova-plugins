var _this = this;
function get(obj, path) {
    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
        obj = obj[path[i]];
    }
    return obj;
}
exports.get = get;
;
exports.promisify = function (pluginRef, methodName, successIndex, errorIndex) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            args[successIndex] = resolve;
            args[errorIndex] = reject;
            get(window, pluginRef)[methodName].apply(_this, args);
        });
    };
};
