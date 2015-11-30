if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var Toast = (function () {
    function Toast() {
    }
    Toast.hide = function () { };
    ;
    Toast.showWithOptions = function (options) { };
    ;
    Object.defineProperty(Toast, "hide",
        __decorate([
            plugin_1.Cordova({
                successIndex: 0,
                errIndex: 1
            })
        ], Toast, "hide", Object.getOwnPropertyDescriptor(Toast, "hide")));
    Object.defineProperty(Toast, "showWithOptions",
        __decorate([
            plugin_1.Cordova({
                successIndex: 1,
                errIndex: 2
            })
        ], Toast, "showWithOptions", Object.getOwnPropertyDescriptor(Toast, "showWithOptions")));
    Toast = __decorate([
        plugin_1.Plugin({
            name: 'Toast',
            plugin: 'cordova-plugin-x-toast',
            pluginRef: 'plugins.toast',
            repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin'
        })
    ], Toast);
    return Toast;
})();
exports.Toast = Toast;
