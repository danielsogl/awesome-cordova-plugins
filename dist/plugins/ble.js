var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
    BLE.startScan = function (services) { };
    ;
    BLE.stopScan = function () { };
    ;
    BLE.connect = function (deviceId) { };
    ;
    BLE.disconnect = function (deviceId) { };
    ;
    BLE.read = function (deviceId, serviceUUID, characteristicUUID) { };
    ;
    BLE.write = function (deviceId, serviceUUID, characteristicUUID, value) { };
    ;
    BLE.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) { };
    ;
    Object.defineProperty(BLE, "scan",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "scan", Object.getOwnPropertyDescriptor(BLE, "scan")));
    Object.defineProperty(BLE, "startScan",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "startScan", Object.getOwnPropertyDescriptor(BLE, "startScan")));
    Object.defineProperty(BLE, "stopScan",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "stopScan", Object.getOwnPropertyDescriptor(BLE, "stopScan")));
    Object.defineProperty(BLE, "connect",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "connect", Object.getOwnPropertyDescriptor(BLE, "connect")));
    Object.defineProperty(BLE, "disconnect",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "disconnect", Object.getOwnPropertyDescriptor(BLE, "disconnect")));
    Object.defineProperty(BLE, "read",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "read", Object.getOwnPropertyDescriptor(BLE, "read")));
    Object.defineProperty(BLE, "write",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "write", Object.getOwnPropertyDescriptor(BLE, "write")));
    Object.defineProperty(BLE, "writeWithoutResponse",
        __decorate([
            plugin_1.Cordova()
        ], BLE, "writeWithoutResponse", Object.getOwnPropertyDescriptor(BLE, "writeWithoutResponse")));
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
//# sourceMappingURL=ble.js.map