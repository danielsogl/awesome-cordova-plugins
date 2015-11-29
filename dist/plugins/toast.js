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
    __decorate([
        plugin_1.Cordova({
            successIndex: 0,
            errIndex: 1
        })
    ], Toast, "hide");
    __decorate([
        plugin_1.Cordova({
            successIndex: 0,
            errIndex: 1
        })
    ], Toast, "showWithOptions");
    Toast = __decorate([
        plugin_1.Plugin({
            name: 'Toast',
            plugin: 'cordova-plugin-x-toast',
            pluginRef: 'plugins.toast'
        })
    ], Toast);
    return Toast;
})();
exports.Toast = Toast;
