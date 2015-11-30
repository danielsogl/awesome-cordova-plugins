if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var BLE = (function () {
    function BLE() {
    }
    BLE.scan = function (services, seconds) { };
    Object.defineProperty(BLE, "scan",
        __decorate([
            plugin_1.Cordova({
                successIndex: 2,
                errIndex: 3
            })
        ], BLE, "scan", Object.getOwnPropertyDescriptor(BLE, "scan")));
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errIndex: 2
        })
    ], BLE, "startScan");
    __decorate([
        plugin_1.Cordova({
            successIndex: 0,
            errIndex: 1
        })
    ], BLE, "stopScan");
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errIndex: 2
        })
    ], BLE, "connect");
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errIndex: 2
        })
    ], BLE, "disconnect");
    BLE = __decorate([
        plugin_1.Plugin({
            name: 'BluetoothLowEnergy',
            plugin: 'cordova-plugin-ble-central',
            pluginRef: 'ble',
            pluginRepo: 'https://github.com/don/cordova-plugin-ble-central'
        })
    ], BLE);
    return BLE;
})();
exports.BLE = BLE;
