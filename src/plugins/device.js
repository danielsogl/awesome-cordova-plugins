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
    Device.getDevice = function () {
        return window.device;
    };
    Object.defineProperty(Device, "getDevice",
        __decorate([
            plugin_1.RequiresPlugin
        ], Device, "getDevice", Object.getOwnPropertyDescriptor(Device, "getDevice")));
    Device = __decorate([
        plugin_1.Plugin({
            name: 'Device',
            plugin: 'cordova-plugin-device',
            pluginRef: 'device'
        })
    ], Device);
    return Device;
})();
exports.Device = Device;
//# sourceMappingURL=device.js.map