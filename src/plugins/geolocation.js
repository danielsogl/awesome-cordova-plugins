var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var Device = (function () {
    function Device() {
    }
    Device.getCurrentPosition = function (options) { };
    ;
    Device.watchPosition = function (options) { };
    ;
    Object.defineProperty(Device, "getCurrentPosition",
        __decorate([
            plugin_1.Cordova()
        ], Device, "getCurrentPosition", Object.getOwnPropertyDescriptor(Device, "getCurrentPosition")));
    Object.defineProperty(Device, "watchPosition",
        __decorate([
            plugin_1.Cordova({
                observable: true,
                clearFunction: 'clearWatch()'
            })
        ], Device, "watchPosition", Object.getOwnPropertyDescriptor(Device, "watchPosition")));
    Device = __decorate([
        plugin_1.Plugin({
            name: 'Geolocation',
            plugin: 'cordova-plugin-geolocation',
            pluginRef: 'navigator.geolocation'
        })
    ], Device);
    return Device;
})();
exports.Device = Device;
//# sourceMappingURL=geolocation.js.map